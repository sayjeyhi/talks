import 'dotenv/config';
import { mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { runTui } from './tui/index.js';
import { runAgent } from './agent.js';
import { callModel } from './provider.js';
import { tools } from './tools.js';
import { loadSession, saveSession } from './session.js';
import type { AgentHooks, Message } from './types.js';

// Composition root: one canonical workspace, one message trace, one
// replaceable TUI. Everything agent-shaped stays behind respond().
const sessionFile = join(process.cwd(), '.session.json');
const workspaceRoot = resolve(process.cwd(), 'workspace');
mkdirSync(workspaceRoot, { recursive: true });

let messages: Message[] =
  process.argv.includes('--resume') ? (loadSession(sessionFile) ?? []) : [];

const respond = async (text: string, hooks: AgentHooks): Promise<string> => {
  const result = await runAgent(text, {
    messages,
    tools,
    hooks,
    workspaceRoot,
    callModel,
  });
  messages = result.messages;
  saveSession(sessionFile, messages);
  return result.answer;
};

runTui(respond);
