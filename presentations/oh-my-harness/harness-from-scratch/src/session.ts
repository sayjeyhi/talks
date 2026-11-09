import { readFileSync, writeFileSync } from 'node:fs';
import type { Message } from './types.js';

/** The "secret mission": persist the message trace so the next session
 *  resumes with full memory. */
export function loadSession(path: string): Message[] | null {
  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8'));
    return Array.isArray(parsed) ? (parsed as Message[]) : null;
  } catch {
    return null;
  }
}

export function saveSession(path: string, messages: Message[]): void {
  writeFileSync(path, JSON.stringify(messages, null, 2), 'utf8');
}
