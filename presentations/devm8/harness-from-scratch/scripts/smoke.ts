/**
 * Offline end-to-end test: drives the real runAgent loop, tool registry,
 * path boundaries and approval gates with a scripted stand-in model —
 * no API key, no network.
 *
 * Run: npm run smoke
 */
import assert from 'node:assert/strict';
import { promises as fs, symlinkSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { runAgent } from '../src/agent.js';
import { tools } from '../src/tools.js';
import type {
  AgentEvent,
  AgentHooks,
  AssistantMessage,
  ChatCompletionResult,
  Message,
  ProposedAction,
} from '../src/types.js';

const demoRoot = resolve(import.meta.dirname, '..');
const workspaceRoot = join(demoRoot, 'workspace');

// --- Reset the workspace to its starting state ---------------------------------
writeFileSync(join(workspaceRoot, 'app.js'), "const status = 'hello agent';\nconsole.log(status);\n");
writeFileSync(
  join(workspaceRoot, 'notes.txt'),
  'hello agent\nthis note exists so the agent has something to find and search for\n',
);
rmSync(join(workspaceRoot, 'summary.txt'), { force: true });
rmSync(join(workspaceRoot, 'link-out'), { force: true });

// --- Scripted model: one assistant message per turn ----------------------------
const turns: AssistantMessage[] = [
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c1', name: 'list_files', args: { path: '.' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c2', name: 'search_directory', args: { path: '.', query: 'hello agent' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c3', name: 'edit_file', args: { path: 'app.js', oldText: 'hello agent', newText: 'agent loop complete' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c4', name: 'run_command', args: { command: 'node app.js' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c5', name: 'write_file', args: { path: 'summary.txt', content: 'verified output: agent loop complete\n' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c6', name: 'delete_file', args: { path: 'notes.txt' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c7', name: 'read_file', args: { path: '../../../etc/passwd' } }] },
  { role: 'assistant', text: undefined, toolCalls: [{ id: 'c8', name: 'run_command', args: { command: 'node app.js' } }] },
  { role: 'assistant', text: 'workspace inspected, edited, run and verified' },
];

let cursor = 0;
const fakeCallModel = async (_messages: Message[]): Promise<ChatCompletionResult> => {
  const assistant = turns[cursor++];
  if (!assistant) throw new Error('scripted model exhausted');
  return { assistant };
};

// --- Hooks: record events, approve everything except delete_file ----------------
const events: AgentEvent[] = [];
const decisions: ProposedAction[] = [];
const hooks: AgentHooks = {
  emit: async (event) => {
    events.push(event);
  },
  approve: async (action) => {
    decisions.push(action);
    return action.kind !== 'delete_file'; // deny the destructive one
  },
};

// --- Run the loop ---------------------------------------------------------------
const messages: Message[] = [];
const result = await runAgent(
  'edit app.js, run it, write a summary, then delete notes.txt',
  { messages, tools, hooks, workspaceRoot, callModel: fakeCallModel },
);

// --- Assertions ------------------------------------------------------------------
const toolMessages = result.messages.filter((m) => m.role === 'tool') as Extract<Message, { role: 'tool' }>[];
const byCallId = new Map(toolMessages.map((m) => [m.callId, m.result]));

function obs(id: string): string {
  const r = byCallId.get(id);
  if (!r || !r.ok) throw new Error(`tool ${id} should succeed, got: ${r && !r.ok ? r.error : 'missing result'}`);
  return r.observation;
}
function errOf(id: string): string {
  const r = byCallId.get(id);
  if (!r || r.ok) throw new Error(`tool ${id} should fail`);
  return r.error;
}

console.log('--- tool results ---');
for (const [callId, r] of byCallId) {
  console.log(callId, r.ok ? '✓' : '✗', r.ok ? r.observation.slice(0, 80) : r.error.slice(0, 80));
}

// 1. read-only tools worked
assert.match(obs('c1'), /app\.js/);
assert.match(obs('c2'), /hello agent/);

// 2. approved edit landed on disk
const appJs = await fs.readFile(join(workspaceRoot, 'app.js'), 'utf8');
assert.ok(appJs.includes('agent loop complete'), 'app.js should contain the edited text');

// 3. approved command ran the edited file and captured its output
assert.match(obs('c4'), /agent loop complete/);

// 4. approved write created the summary
assert.ok(existsSync(join(workspaceRoot, 'summary.txt')), 'summary.txt should exist');

// 5. denied delete deleted nothing — notes.txt still there, result is a readable denial
assert.ok(existsSync(join(workspaceRoot, 'notes.txt')), 'notes.txt must survive a denied delete');
assert.match(errOf('c6'), /denied: delete_file/);

// 6. path escape rejected
assert.match(errOf('c7'), /escapes the workspace/);

// 7. trace shape: system prompt added once, every tool result correlated
assert.equal(result.messages[0].role, 'system');
assert.equal(result.messages.filter((m) => m.role === 'system').length, 1);
assert.equal(toolMessages.length, 8);
assert.equal(result.answer, 'workspace inspected, edited, run and verified');

// 8. approval gates fired exactly for the consequential tools
assert.deepEqual(
  decisions.map((d) => d.kind),
  ['edit_file', 'run_command', 'write_file', 'delete_file', 'run_command'],
);

// --- Symlink escape: a link inside the workspace pointing outside -----------------
symlinkSync(demoRoot, join(workspaceRoot, 'link-out'));
let escaped = false;
for (const tool of tools) {
  if (tool.definition.name !== 'read_file') continue;
  try {
    const r = await tool.execute({ path: 'link-out/package.json' }, { hooks, workspaceRoot });
    if (r.ok) {
      escaped = true;
      break;
    }
  } catch {
    // a thrown ToolError is also a rejection — exactly what we want
  }
}
rmSync(join(workspaceRoot, 'link-out'), { force: true });
assert.ok(!escaped, 'reading through a workspace symlink must be rejected');

// --- Unknown tool + bad args become structured failures ---------------------------
const unknown = await import('../src/agent.js').then((m) =>
  m.executeToolCalls(
    [
      { id: 'u1', name: 'no_such_tool', args: {} },
      { id: 'u2', name: 'read_file', args: 'not-an-object' },
    ],
    tools,
    { hooks, workspaceRoot },
  ),
);
assert.match(!unknown[0].result.ok ? unknown[0].result.error : '', /unknown tool/);
assert.match(!unknown[1].result.ok ? unknown[1].result.error : '', /expected a JSON object/);

// --- Adapter retries transient 429/5xx and surfaces hard errors -------------
const { callModel } = await import('../src/provider.js');

const realFetch = globalThis.fetch;
let fetchCalls = 0;
globalThis.fetch = (async () => {
  fetchCalls++;
  if (fetchCalls <= 2) {
    // z.ai free-tier overload: 429 with code 1305
    return new Response(
      JSON.stringify({ error: { code: '1305', message: 'The service may be temporarily overloaded, please try again later' } }),
      { status: 429, headers: { 'retry-after': '0' } },
    );
  }
  return new Response(
    JSON.stringify({ choices: [{ message: { content: 'recovered' } }] }),
    { status: 200 },
  );
}) as typeof fetch;
process.env.AGENT_API_KEY ??= 'smoke-test-key';

const recovered = await callModel([{ role: 'user', text: 'hi' }]);
assert.equal(fetchCalls, 3, 'two 429s then success = exactly 3 fetch calls');
assert.equal(recovered.assistant.text, 'recovered');

// A non-retryable 400 fails immediately with the provider body.
fetchCalls = 0;
globalThis.fetch = (async () => {
  fetchCalls++;
  return new Response(JSON.stringify({ error: { code: '1210', message: 'bad request' } }), { status: 400 });
}) as typeof fetch;
await assert.rejects(
  () => callModel([{ role: 'user', text: 'hi' }]),
  /400/,
);
assert.equal(fetchCalls, 1, '400 must not be retried');

// Hanging requests (AbortSignal.timeout) are retried like any transient failure.
const timeoutError: Error & { name: string } = Object.assign(
  new Error('The operation was aborted due to timeout'),
  { name: 'TimeoutError' },
);
fetchCalls = 0;
globalThis.fetch = (async () => {
  fetchCalls++;
  if (fetchCalls <= 2) throw timeoutError;
  return new Response(JSON.stringify({ choices: [{ message: { content: 'slow but alive' } }] }), { status: 200 });
}) as typeof fetch;
const slow = await callModel([{ role: 'user', text: 'hi' }]);
assert.equal(fetchCalls, 3, 'two timeouts then success = exactly 3 fetch calls');
assert.equal(slow.assistant.text, 'slow but alive');

// All attempts timing out ends with a readable, actionable error.
fetchCalls = 0;
globalThis.fetch = (async () => {
  fetchCalls++;
  throw timeoutError;
}) as typeof fetch;
await assert.rejects(
  () => callModel([{ role: 'user', text: 'hi' }]),
  /no response in .*AGENT_TIMEOUT_MS/,
);
assert.equal(fetchCalls, 4, 'timeouts retry up to maxAttempts');

globalThis.fetch = realFetch;
delete process.env.AGENT_API_KEY;

// --- Leave the workspace pristine for the next real session ----------------------
writeFileSync(join(workspaceRoot, 'app.js'), "const status = 'hello agent';\nconsole.log(status);\n");
writeFileSync(
  join(workspaceRoot, 'notes.txt'),
  'hello agent\nthis note exists so the agent has something to find and search for\n',
);
rmSync(join(workspaceRoot, 'summary.txt'), { force: true });

console.log('\n✅ smoke passed: loop, 7 tools, bounds, symlink guard, approvals, denials, trace correlation, adapter retry');
