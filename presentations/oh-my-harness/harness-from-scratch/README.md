# Custom Agent Harness

The runnable companion to the talk **Build a Custom Agent Harness** — a small
TypeScript CLI agent, built from scratch the way the NextWork project builds it:
no agent framework, no provider SDK. Just the loop, the tools, the gates, and you.

One prompt can trigger a whole sequence of work — and every model turn, tool
call, result, approval, and denial is visible in the terminal.

## Quick start

```sh
npm ci
cp .env.example .env      # then add a key — z.ai or OpenRouter, see below
npm run smoke             # offline end-to-end test — no API key needed
npm run dev               # the TUI
```

`.env` is gitignored; the key never leaves your machine.

## Providers: z.ai or OpenRouter

The adapter speaks any OpenAI-compatible chat endpoint — swapping providers is
a `.env` change, never a code change (that's the anti-corruption layer doing
its job).

**z.ai (GLM):** key from [z.ai](https://z.ai)

```env
AGENT_API_BASE=https://api.z.ai/api/paas/v4
AGENT_API_KEY=your-zai-key
AGENT_MODEL=glm-4.7-flash   # free — glm-4.5-flash also free
```

`glm-4.7-flash` and `glm-4.5-flash` cost nothing and work with a zero balance.
Paid slugs (`glm-4.6`, `glm-5.x`, …) are pay-as-you-go.

> **Error 1113 ("Insufficient balance or no resource package")?** That's the
> pay-as-you-go platform declining a paid model — either switch
> `AGENT_MODEL` to a free flash model or recharge at z.ai. Note that GLM
> Coding Plan subscriptions are billed separately and their quota applies
> only to officially supported tools (Claude Code and friends), not to this
> API — a coding-plan key won't unlock `paas/v4` here.

> **Error 1305 ("service may be temporarily overloaded")?** A transient
> free-pool/concurrency rejection, not a problem with your request. The
> adapter already retries automatically (up to 4 attempts, exponential
> backoff, honors `Retry-After`). If it still fails, try the other free slug
> (`glm-4.5-flash` ↔ `glm-4.7-flash`), wait a minute, or use a paid model /
> OpenRouter.

> **"The operation was aborted due to timeout"?** The model hung with no
> response — common on free pools. Timeouts are retried like any transient
> failure; each attempt waits up to `AGENT_TIMEOUT_MS` (default 120000). If
> the pool is simply too busy, Ctrl+C out and try again later, another free
> slug, or a paid model / OpenRouter.

**OpenRouter (default):** key from [openrouter.ai/keys](https://openrouter.ai/keys)

```env
OPENROUTER_API_KEY=your-key
# optional, any model slug — defaults to a free model
OPENROUTER_MODEL=deepseek/deepseek-chat-v3-0324:free
```

## What to try in the TUI

```
list the files in the workspace and read them
```
Read-only tools run without asking.

```
replace "hello agent" with "agent loop complete" in app.js, run it, then delete notes.txt
```
Each consequential action pauses for your `y`/`n`. Answer `n` once and watch the
agent report the denial instead of pretending it succeeded.

```
my secret word is cobalt
```
…then ask `what was my secret word?` in the same session. Restart with
`npm run dev:resume` and ask again — the session store remembers.

`exit` or `quit` leaves the TUI.

## The pieces

| File | Role |
|------|------|
| `src/types.ts` | The harness vocabulary: messages, tools, hooks, context, results |
| `src/provider.ts` | Model adapter — one plain `fetch` to any OpenAI-compatible endpoint (OpenRouter, z.ai, …), the only file that knows the provider shape |
| `src/agent.ts` | `runAgent` loop + `executeToolCalls` — owns turns, trace, dispatch, correlation |
| `src/tools.ts` | The 7-tool registry and every workspace boundary |
| `src/session.ts` | The "secret mission": persistent session store |
| `src/tui/` | Thin terminal client (Ink/React). It renders and resolves approvals — nothing else |
| `src/index.ts` | Composition root: wires TUI ↔ runtime ↔ tools, holds the message trace |
| `scripts/smoke.ts` | Offline end-to-end test with a scripted stand-in model |

## The tool registry

| Tool | Approval | Bounds |
|------|----------|--------|
| `read_file` | no | 12,000-char cap, truncated flag |
| `list_files` | no | sorted, `/` marks directories |
| `search_directory` | no | 50-match cap, `path:line:text` results |
| `write_file` | yes | parents created, UTF-8 |
| `edit_file` | yes | old text must occur exactly once |
| `delete_file` | yes | a denial deletes nothing |
| `run_command` | yes | `/bin/sh` from the workspace root, 30 s timeout, bounded output |

The registry **is** the capability list: nothing advertised, nothing runnable.

## Workspace boundaries

- Existing paths resolve through `realpath` — a symlink inside `workspace/`
  cannot redirect access outside it
- Mutation paths get a lexical check plus a per-segment `lstat` symlink guard,
  because new files have no canonical path yet
- `../` traversal and absolute paths are rejected before anything touches the
  file system
- Every failure is a structured result the model can read — never a crash

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Fresh session TUI |
| `npm run dev:resume` | Resume the last saved session |
| `npm run smoke` | Offline end-to-end test (scripted model, no key needed) |
| `npm run typecheck` | `tsc --noEmit` |

## Credits

Built following NextWork's [Build a Custom Agent Harness](https://nextwork.ai/projects/fbd360ae-3944-42e5-8cc2-2a8a8d6a55b8)
project ([demo video](https://www.youtube.com/watch?v=5odWsx3o__M)).
