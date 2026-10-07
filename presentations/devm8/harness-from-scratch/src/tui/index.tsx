import { render } from 'ink';
import { App } from './App.js';
import type { AgentHooks } from '../types.js';

/** The replaceable backend boundary: the TUI collects input, displays
 *  results, and resolves approvals — nothing else. */
export type RespondFn = (text: string, hooks: AgentHooks) => Promise<string>;

export function runTui(respond: RespondFn) {
  const instance = render(<App respond={respond} />);
  return instance.unmount;
}
