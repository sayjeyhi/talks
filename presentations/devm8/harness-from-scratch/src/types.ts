/**
 * The harness vocabulary. Every layer — TUI, runtime, tools, adapter —
 * speaks these types and nothing provider-specific.
 */

export type ToolCall = {
  id: string;
  name: string;
  args: unknown;
};

export type SystemMessage = { role: 'system'; text: string };
export type UserMessage = { role: 'user'; text: string };
export type AssistantMessage = {
  role: 'assistant';
  text?: string;
  toolCalls?: ToolCall[];
};
export type ToolMessage = {
  role: 'tool';
  callId: string;
  result: ToolExecutionResult;
};
export type Message =
  | SystemMessage
  | UserMessage
  | AssistantMessage
  | ToolMessage;

export type ObjectSchema = {
  type: 'object';
  properties: Record<string, { type: 'string'; description?: string }>;
  required?: string[];
};

export type ToolDefinition = {
  name: string;
  description: string;
  parameters: ObjectSchema;
};

export type AgentEvent =
  | { type: 'model-turn-start' }
  | { type: 'model-turn-end'; text?: string; toolCalls?: ToolCall[] }
  | { type: 'tool-start'; name: string; callId: string }
  | { type: 'tool-end'; name: string; callId: string; ok: boolean };

export type ProposedAction =
  | { kind: 'write_file'; path: string }
  | { kind: 'edit_file'; path: string }
  | { kind: 'delete_file'; path: string }
  | { kind: 'run_command'; command: string };

export type AgentHooks = {
  emit: (event: AgentEvent) => Promise<void>;
  approve: (action: ProposedAction) => Promise<boolean>;
};

export type ToolContext = {
  hooks: AgentHooks;
  workspaceRoot: string;
};

export type ToolSpec = {
  definition: ToolDefinition;
  execute: (args: unknown, ctx: ToolContext) => Promise<ToolExecutionResult>;
};

export type ToolExecutionResult =
  | { ok: true; observation: string }
  | { ok: false; error: string };

export type ChatCompletionResult = {
  assistant: AssistantMessage;
};

export type AgentRunResult = {
  messages: Message[];
  answer: string;
};
