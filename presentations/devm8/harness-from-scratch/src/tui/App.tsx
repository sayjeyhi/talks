import { useCallback, useRef, useState } from 'react';
import { Box, Static, Text, useApp, useInput } from 'ink';
import type { AgentHooks, ProposedAction } from '../types.js';
import type { RespondFn } from './index.js';

type Entry =
  | { kind: 'banner'; tagline: string }
  | { kind: 'user'; text: string }
  | { kind: 'assistant'; text: string }
  | { kind: 'event'; text: string }
  | { kind: 'approval'; text: string }
  | { kind: 'denied'; text: string }
  | { kind: 'error'; text: string };

type PendingApproval = {
  action: ProposedAction;
  resolve: (approved: boolean) => void;
};

const ROBOT_ART = `
          .-.
       .---------.
       |  o   o  |
       |    ^    |
       |  \\___/  |
       '---------'
        ||     ||
       _||     ||_
      |___|   |___|
`;

const TAGLINES = [
  'perceive → decide → act → repeat',
  'the loop is the agent',
  '7 tools · 4 approval gates · 0 magic',
  'every claim needs a tool result',
  'denied is a decision, not an error',
  'bounded to workspace/ — everywhere else is a mirage',
  'beep boop. requesting tools…',
  'watching every turn, so you don\'t have to',
  'your workspace, its rules',
  'a very small agent with very good manners',
];

function describeAction(action: ProposedAction): string {
  return 'path' in action
    ? `${action.kind} ${action.path}`
    : `${action.kind}: ${action.command}`;
}

function EntryLine({ entry }: { entry: Entry }) {
  switch (entry.kind) {
    case 'banner':
      return (
        <Box flexDirection="column">
          <Text> </Text>
          <Text color="cyan">{ROBOT_ART}</Text>
          <Text color="magenta" italic>
            {' '}« {entry.tagline} »{' '}
          </Text>
          <Text> </Text>
          <Text> </Text>
        </Box>
      );
    case 'user':
      return (
        <Text color="cyan" bold>
          you ▸ {entry.text}
        </Text>
      );
    case 'assistant':
      return (
        <Text color="green" bold>
          agent ▸ {entry.text}
        </Text>
      );
    case 'event':
      return <Text dimColor>{entry.text}</Text>;
    case 'approval':
      return <Text color="magenta">✔ approved: {entry.text}</Text>;
    case 'denied':
      return <Text color="red">✗ denied: {entry.text}</Text>;
    case 'error':
      return <Text color="red">error: {entry.text}</Text>;
  }
}

export function App({ respond }: { respond: RespondFn }) {
  const [entries, setEntries] = useState<Entry[]>(() => [
    { kind: 'banner', tagline: TAGLINES[Math.floor(Math.random() * TAGLINES.length)] },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [pending, setPending] = useState<PendingApproval | null>(null);
  const pendingRef = useRef<PendingApproval | null>(null);
  const { exit } = useApp();

  const append = useCallback((entry: Entry) => {
    setEntries((prev) => [...prev, entry]);
  }, []);

  const hooks: AgentHooks = {
    emit: async (event) => {
      if (event.type === 'tool-start') {
        append({ kind: 'event', text: `▸ tool ${event.name} (${event.callId})` });
      } else if (event.type === 'tool-end') {
        append({
          kind: event.ok ? 'event' : 'error',
          text: event.ok ? `✓ ${event.name} done` : `✗ ${event.name} failed`,
        });
      }
    },
    approve: async (action) => {
      const description = describeAction(action);
      append({ kind: 'event', text: `approval needed: ${description}` });
      return await new Promise<boolean>((resolve) => {
        const approval = { action, resolve };
        pendingRef.current = approval;
        setPending(approval);
      });
    },
  };

  const submit = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text) return;

      const approval = pendingRef.current;
      if (approval) {
        pendingRef.current = null;
        setPending(null);
        const approved = /^(y|yes)$/i.test(text);
        append({
          kind: approved ? 'approval' : 'denied',
          text: describeAction(approval.action),
        });
        approval.resolve(approved);
        return;
      }

      if (text === 'exit' || text === 'quit') {
        exit();
        return;
      }

      append({ kind: 'user', text });
      setThinking(true);
      try {
        const answer = await respond(text, hooks);
        append({ kind: 'assistant', text: answer || '(no content)' });
      } catch (err) {
        append({ kind: 'error', text: err instanceof Error ? err.message : String(err) });
      } finally {
        setThinking(false);
      }
    },
    [append, exit, respond, hooks],
  );

  useInput((character, key) => {
    if (key.return) {
      const line = input;
      setInput('');
      void submit(line);
      return;
    }
    if (key.backspace || key.delete) {
      setInput((prev) => prev.slice(0, -1));
      return;
    }
    if (key.ctrl || key.meta || key.escape || key.tab || key.upArrow || key.downArrow) {
      return;
    }
    if (!character) {
      return;
    }
    // Pasted input arrives as one multi-character chunk, not per-keypress
    // events — split on line endings, submit the first complete line and
    // keep any remainder buffered.
    if (character.length > 1 && /[\r\n]/.test(character)) {
      const [first, ...rest] = character.split(/[\r\n]+/);
      const line = input + first;
      setInput(rest.join(''));
      void submit(line);
      return;
    }
    setInput((prev) => prev + character);
  });

  return (
    <Box flexDirection="column">
      <Static items={entries}>
        {(entry, index) => (
          <EntryLine key={index} entry={entry} />
        )}
      </Static>
      <Box flexDirection="column" borderStyle="round" borderColor="gray" paddingX={1}>
        <Text dimColor>custom agent harness · workspace/ · exit to quit</Text>
        {thinking && <Text color="blue">thinking…</Text>}
        {pending ? (
          <Text color="magenta" bold>
            approve {describeAction(pending.action)}? [y/n]
          </Text>
        ) : (
          <Text>
            <Text dimColor>{'> '}</Text>
            {input}
          </Text>
        )}
      </Box>
    </Box>
  );
}
