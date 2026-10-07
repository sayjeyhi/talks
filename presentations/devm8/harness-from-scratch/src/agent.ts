import type {
  AgentEvent,
  AgentHooks,
  AgentRunResult,
  AssistantMessage,
  ChatCompletionResult,
  Message,
  ToolCall,
  ToolContext,
  ToolExecutionResult,
  ToolMessage,
  ToolSpec,
} from './types.js';
import { callModel as defaultCallModel } from './provider.js';

export const SYSTEM_PROMPT = `You are a small coding agent working inside a local workspace directory.
- Use tools to support every claim about files or local actions.
- Never claim an action succeeded without a matching tool result.
- If a required tool is unavailable or an action is denied, say so clearly.
- Return a concise response when the task is complete.`;

class ToolError extends Error {}

/** Resolve each requested name to a local executor; every failure becomes
 *  a structured result the model can read, never a crash. */
export async function executeToolCalls(
  toolCalls: ToolCall[],
  tools: ToolSpec[],
  ctx: ToolContext,
): Promise<ToolMessage[]> {
  const toolMap = new Map(tools.map((t) => [t.definition.name, t]));
  const results: ToolMessage[] = [];

  for (const call of toolCalls) {
    const spec = toolMap.get(call.name);
    if (!spec) {
      results.push({
        role: 'tool',
        callId: call.id,
        result: { ok: false, error: `unknown tool: ${call.name}` },
      });
      continue;
    }
    if (typeof call.args !== 'object' || call.args === null || Array.isArray(call.args)) {
      results.push({
        role: 'tool',
        callId: call.id,
        result: { ok: false, error: `invalid arguments for ${call.name}: expected a JSON object` },
      });
      continue;
    }

    await ctx.hooks.emit({ type: 'tool-start', name: call.name, callId: call.id });
    let result: ToolExecutionResult;
    try {
      result = await spec.execute(call.args, ctx);
    } catch (err) {
      result = { ok: false, error: err instanceof ToolError ? err.message : String(err) };
    }
    await ctx.hooks.emit({ type: 'tool-end', name: call.name, callId: call.id, ok: result.ok });

    results.push({ role: 'tool', callId: call.id, result });
  }
  return results;
}

export type RunOptions = {
  messages: Message[];
  tools?: ToolSpec[];
  hooks: AgentHooks;
  workspaceRoot: string;
  /** Injectable for tests; defaults to the OpenRouter adapter. */
  callModel?: (messages: Message[], tools?: ToolSpec[]) => Promise<ChatCompletionResult>;
};

/** The agent loop: keep requesting model turns until an assistant message
 *  contains no more tool calls. The caller owns the message trace. */
export async function runAgent(input: string, opts: RunOptions): Promise<AgentRunResult> {
  const { messages, tools = [], hooks, workspaceRoot } = opts;
  const model = opts.callModel ?? defaultCallModel;

  if (messages.length === 0) {
    messages.push({ role: 'system', text: SYSTEM_PROMPT });
  }
  messages.push({ role: 'user', text: input });

  const ctx: ToolContext = { hooks, workspaceRoot };

  for (;;) {
    await hooks.emit({ type: 'model-turn-start' });
    const { assistant }: ChatCompletionResult = await model(messages, tools);
    messages.push(assistant);
    await hooks.emit({ type: 'model-turn-end', text: assistant.text, toolCalls: assistant.toolCalls });

    if (!assistant.toolCalls?.length) {
      return { messages, answer: assistant.text ?? '' };
    }

    const results = await executeToolCalls(assistant.toolCalls, tools, ctx);
    messages.push(...results);
  }
}

export type { AgentEvent, AssistantMessage };
