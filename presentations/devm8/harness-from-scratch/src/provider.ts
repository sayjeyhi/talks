import type {
  AssistantMessage,
  ChatCompletionResult,
  Message,
  ToolSpec,
} from './types.js';

// Any OpenAI-compatible chat endpoint works — swap providers by editing
// .env, never code. Defaults to OpenRouter; z.ai example (glm-4.7-flash
// is free — paid slugs like glm-4.6 need pay-as-you-go balance):
//   AGENT_API_BASE=https://api.z.ai/api/paas/v4
//   AGENT_API_KEY=<z.ai key>
//   AGENT_MODEL=glm-4.7-flash
// Read per call, so env changes apply without a re-import.
function providerConfig() {
  return {
    base: (process.env.AGENT_API_BASE ?? 'https://openrouter.ai/api/v1').replace(/\/+$/, ''),
    key: process.env.AGENT_API_KEY ?? process.env.OPENROUTER_API_KEY,
    model:
      process.env.AGENT_MODEL ??
      process.env.OPENROUTER_MODEL ??
      'deepseek/deepseek-chat-v3-0324:free',
    // Free-tier pools can queue for well over a minute — generous by
    // default, override with AGENT_TIMEOUT_MS (milliseconds).
    timeoutMs: Number(process.env.AGENT_TIMEOUT_MS) > 0 ? Number(process.env.AGENT_TIMEOUT_MS) : 120_000,
  };
}

type ProviderToolCall = {
  id: string;
  type: 'function';
  function: { name: string; arguments: string | Record<string, unknown> };
};

/** Translate harness messages into the provider's chat format.
 *  This is the only place in the codebase that knows the provider shape. */
function toProviderMessages(messages: Message[]): unknown[] {
  return messages.map((message) => {
    switch (message.role) {
      case 'system':
      case 'user':
        return { role: message.role, content: message.text };
      case 'assistant': {
        const hasToolCalls = (message.toolCalls?.length ?? 0) > 0;
        // Strict providers (z.ai) want "" — not null — on tool-call turns.
        const out: Record<string, unknown> = {
          role: 'assistant',
          content: message.text ?? (hasToolCalls ? '' : null),
        };
        if (hasToolCalls) {
          out.tool_calls = message.toolCalls!.map((call): ProviderToolCall => ({
            id: call.id,
            type: 'function',
            function: { name: call.name, arguments: JSON.stringify(call.args) },
          }));
        }
        return out;
      }
      case 'tool':
        return {
          role: 'tool',
          tool_call_id: message.callId,
          content: message.result.ok
            ? message.result.observation
            : `error: ${message.result.error}`,
        };
    }
  });
}

// Arguments arrive as a JSON string on most providers; z.ai's docs also
// show an object shape. Accept both.
function safeParse(raw: unknown): unknown {
  if (typeof raw !== 'string') return raw;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

/** One provider-independent model turn, via a plain fetch — no SDK,
 *  so the request boundary stays visible. */
export async function callModel(
  messages: Message[],
  tools: ToolSpec[] = [],
): Promise<ChatCompletionResult> {
  const { base, key, model, timeoutMs } = providerConfig();
  if (!key) {
    throw new Error(
      'AGENT_API_KEY (or OPENROUTER_API_KEY) is missing — copy .env.example to .env and set a key from https://openrouter.ai/keys or https://z.ai',
    );
  }

  const body: Record<string, unknown> = {
    model,
    messages: toProviderMessages(messages),
  };
  if (tools.length > 0) {
    body.tools = tools.map((tool) => ({
      type: 'function',
      function: tool.definition,
    }));
    body.tool_choice = 'auto';
  }

  // Free-tier models (and busy paid pools) answer 429 "temporarily
  // overloaded" (z.ai code 1305) or simply hang under load — retry with
  // backoff instead of surfacing the transient failure to the loop.
  const maxAttempts = 4;
  for (let attempt = 1; ; attempt++) {
    let res: Response;
    try {
      res = await fetch(`${base}/chat/completions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (err) {
      const name = err instanceof Error ? err.name : '';
      const timedOut = name === 'TimeoutError' || name === 'AbortError';
      if (timedOut && attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * 3 ** (attempt - 1)));
        continue;
      }
      const detail = err instanceof Error ? err.message : String(err);
      throw new Error(
        `${base} request failed: ${detail}` +
          (timedOut ? ` — no response in ${Math.round(timeoutMs / 1000)}s; raise AGENT_TIMEOUT_MS or try another model` : ''),
      );
    }

    if (res.ok) {
      const json = (await res.json()) as {
        choices?: { message?: { content?: string | null; tool_calls?: ProviderToolCall[] } }[];
      };
      const choice = json.choices?.[0]?.message;
      const toolCalls = choice?.tool_calls
        ?.map((call) => ({
          id: call.id,
          name: call.function.name,
          args: safeParse(call.function.arguments),
        }))
        .filter((call) => typeof call.id === 'string');

      const assistant: AssistantMessage = {
        role: 'assistant',
        text: choice?.content ?? undefined,
        toolCalls: toolCalls?.length ? toolCalls : undefined,
      };
      return { assistant };
    }

    const retryable = res.status === 429 || res.status >= 500;
    if (!retryable || attempt >= maxAttempts) {
      throw new Error(`${base} request failed: ${res.status} ${await res.text()}`);
    }
    const retryAfter = Number(res.headers.get('retry-after'));
    const delayMs = retryAfter > 0 ? retryAfter * 1000 : 1000 * 3 ** (attempt - 1);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}
