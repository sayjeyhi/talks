import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { isAbsolute, join, dirname, relative, resolve, sep } from 'node:path';
import { promisify } from 'node:util';
import type { ToolContext, ToolSpec } from './types.js';

const exec = promisify(execFile);

// One file observation can never flood the model context.
const MAX_TEXT_LENGTH = 12_000;
const MAX_MATCHES = 50;
const COMMAND_TIMEOUT_MS = 30_000;
const COMMAND_MAX_BUFFER = 512 * 1024;

class ToolError extends Error {}

function requireString(args: unknown, key: string): string {
  if (typeof args !== 'object' || args === null) {
    throw new ToolError(`arguments must be a JSON object`);
  }
  const value = (args as Record<string, unknown>)[key];
  if (typeof value !== 'string' || value.length === 0) {
    throw new ToolError(`missing required string argument: ${key}`);
  }
  return value;
}

/** Canonical boundary for existing targets: both root and target resolve
 *  through realpath, so a symlink inside the workspace cannot redirect
 *  access outside it. */
async function boundedPath(ctx: ToolContext, rel: string): Promise<string> {
  if (isAbsolute(rel)) {
    throw new ToolError(`absolute paths are not allowed: ${rel}`);
  }
  const root = await fs.realpath(ctx.workspaceRoot);

  // Lexical check first: reject parent traversal before anything exists.
  const candidate = resolve(root, rel);
  const candidateRel = relative(root, candidate);
  if (candidateRel.startsWith('..') || isAbsolute(candidateRel)) {
    throw new ToolError(`path escapes the workspace: ${rel}`);
  }

  // Canonical check second: a symlink inside the workspace cannot redirect access outside it.
  let target: string;
  try {
    target = await fs.realpath(candidate);
  } catch {
    throw new ToolError(`path not found inside the workspace: ${rel}`);
  }
  const targetRel = relative(root, target);
  if (targetRel.startsWith('..') || isAbsolute(targetRel)) {
    throw new ToolError(`path escapes the workspace: ${rel}`);
  }
  return target;
}

/** Boundary for mutation targets, which may not exist yet: lexical check
 *  on the proposed path, then lstat every existing segment to reject
 *  symlinks (stop at the first missing segment — beyond it nothing can
 *  be linked yet). */
async function mutationPath(ctx: ToolContext, rel: string): Promise<string> {
  if (isAbsolute(rel)) {
    throw new ToolError(`absolute paths are not allowed: ${rel}`);
  }
  const root = await fs.realpath(ctx.workspaceRoot);
  const candidate = resolve(root, rel);
  const relFromRoot = relative(root, candidate);
  if (relFromRoot === '' || relFromRoot.startsWith('..')) {
    throw new ToolError(`path escapes the workspace: ${rel}`);
  }

  let current = root;
  for (const segment of relFromRoot.split(sep)) {
    current = join(current, segment);
    let stat;
    try {
      stat = await fs.lstat(current);
    } catch {
      break;
    }
    if (stat.isSymbolicLink()) {
      throw new ToolError(`symbolic link in path: ${segment}`);
    }
  }
  return candidate;
}

/** Deterministic traversal: sorted entries, symlinks skipped. */
async function walkFiles(dir: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(current: string) {
    let entries;
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      if (entry.isSymbolicLink()) continue;
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile()) {
        out.push(full);
      }
    }
  }
  await walk(dir);
  return out.sort();
}

const pathProperty = {
  path: {
    type: 'string',
    description: 'Relative path inside the workspace',
  },
} as const;

const readFileTool: ToolSpec = {
  definition: {
    name: 'read_file',
    description: 'Read a UTF-8 text file inside the workspace.',
    parameters: { type: 'object', properties: pathProperty, required: ['path'] },
  },
  execute: async (args, ctx) => {
    const rel = requireString(args, 'path');
    const target = await boundedPath(ctx, rel);
    const content = await fs.readFile(target, 'utf8');
    const truncated = content.length > MAX_TEXT_LENGTH;
    return {
      ok: true as const,
      observation: JSON.stringify({
        path: rel,
        truncated,
        content: truncated ? content.slice(0, MAX_TEXT_LENGTH) : content,
      }),
    };
  },
};

const listFilesTool: ToolSpec = {
  definition: {
    name: 'list_files',
    description: 'List directory entries inside the workspace, sorted. Directories end with /. Symlinks are not listed.',
    parameters: { type: 'object', properties: pathProperty, required: ['path'] },
  },
  execute: async (args, ctx) => {
    const rel = requireString(args, 'path');
    const target = await boundedPath(ctx, rel === '.' ? '.' : rel);
    const entries = await fs.readdir(target, { withFileTypes: true });
    const names = entries
      .filter((entry) => !entry.isSymbolicLink())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => (entry.isDirectory() ? `${entry.name}/` : entry.name));
    return { ok: true as const, observation: JSON.stringify({ path: rel, entries: names }) };
  },
};

const searchDirectoryTool: ToolSpec = {
  definition: {
    name: 'search_directory',
    description: 'Case-sensitive text search across files under a workspace directory. Returns path, line number and line for each match (capped).',
    parameters: {
      type: 'object',
      properties: { ...pathProperty, query: { type: 'string', description: 'Case-sensitive text to find' } },
      required: ['path', 'query'],
    },
  },
  execute: async (args, ctx) => {
    const rel = requireString(args, 'path');
    const query = requireString(args, 'query');
    const target = await boundedPath(ctx, rel === '.' ? '.' : rel);
    const matches: { path: string; line: number; text: string }[] = [];
    for (const file of await walkFiles(target)) {
      if (matches.length >= MAX_MATCHES) break;
      let content: string;
      try {
        content = await fs.readFile(file, 'utf8');
      } catch {
        continue;
      }
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(query)) {
          matches.push({ path: file, line: i + 1, text: lines[i].trim() });
          if (matches.length >= MAX_MATCHES) break;
        }
      }
    }
    return { ok: true as const, observation: JSON.stringify({ query, matches }) };
  },
};

const writeFileTool: ToolSpec = {
  definition: {
    name: 'write_file',
    description: 'Write a UTF-8 text file inside the workspace, creating parent directories. Requires approval.',
    parameters: {
      type: 'object',
      properties: { ...pathProperty, content: { type: 'string', description: 'Full file content to write' } },
      required: ['path', 'content'],
    },
  },
  execute: async (args, ctx) => {
    const rel = requireString(args, 'path');
    const content = requireString(args, 'content');
    const target = await mutationPath(ctx, rel);
    const approved = await ctx.hooks.approve({ kind: 'write_file', path: rel });
    if (!approved) {
      return { ok: false as const, error: `denied: write_file ${rel}` };
    }
    await fs.mkdir(dirname(target), { recursive: true });
    await fs.writeFile(target, content, 'utf8');
    return { ok: true as const, observation: `wrote ${rel} (${content.length} chars)` };
  },
};

const editFileTool: ToolSpec = {
  definition: {
    name: 'edit_file',
    description: 'Replace text inside a workspace file. The old text must occur exactly once. Requires approval.',
    parameters: {
      type: 'object',
      properties: {
        ...pathProperty,
        oldText: { type: 'string', description: 'Existing text to replace (must occur exactly once)' },
        newText: { type: 'string', description: 'Replacement text' },
      },
      required: ['path', 'oldText', 'newText'],
    },
  },
  execute: async (args, ctx) => {
    const rel = requireString(args, 'path');
    const oldText = requireString(args, 'oldText');
    const newText = requireString(args, 'newText');
    const target = await boundedPath(ctx, rel);
    const content = await fs.readFile(target, 'utf8');
    const occurrences = content.split(oldText).length - 1;
    if (occurrences !== 1) {
      return {
        ok: false as const,
        error: `old text must occur exactly once, found ${occurrences} occurrences in ${rel}`,
      };
    }
    const approved = await ctx.hooks.approve({ kind: 'edit_file', path: rel });
    if (!approved) {
      return { ok: false as const, error: `denied: edit_file ${rel}` };
    }
    await fs.writeFile(target, content.replace(oldText, newText), 'utf8');
    return { ok: true as const, observation: `edited ${rel}: replaced ${oldText.length} chars with ${newText.length}` };
  },
};

const deleteFileTool: ToolSpec = {
  definition: {
    name: 'delete_file',
    description: 'Delete a file inside the workspace. Requires approval; a denial deletes nothing.',
    parameters: { type: 'object', properties: pathProperty, required: ['path'] },
  },
  execute: async (args, ctx) => {
    const rel = requireString(args, 'path');
    const target = await boundedPath(ctx, rel);
    const approved = await ctx.hooks.approve({ kind: 'delete_file', path: rel });
    if (!approved) {
      return { ok: false as const, error: `denied: delete_file ${rel}` };
    }
    await fs.unlink(target);
    return { ok: true as const, observation: `deleted ${rel}` };
  },
};

const runCommandTool: ToolSpec = {
  definition: {
    name: 'run_command',
    description: 'Run a shell command from the workspace root (/bin/sh). Bounded runtime, buffer and output. Requires approval.',
    parameters: {
      type: 'object',
      properties: { command: { type: 'string', description: 'Shell command to run' } },
      required: ['command'],
    },
  },
  execute: async (args, ctx) => {
    const command = requireString(args, 'command');
    const cwd = await fs.realpath(ctx.workspaceRoot);
    const approved = await ctx.hooks.approve({ kind: 'run_command', command });
    if (!approved) {
      return { ok: false as const, error: `denied: run_command: ${command}` };
    }
    try {
      const { stdout, stderr } = await exec('/bin/sh', ['-c', command], {
        cwd,
        timeout: COMMAND_TIMEOUT_MS,
        maxBuffer: COMMAND_MAX_BUFFER,
      });
      const output = [
        `stdout:`,
        stdout.slice(0, MAX_TEXT_LENGTH),
        `stderr:`,
        stderr.slice(0, MAX_TEXT_LENGTH),
      ].join('\n');
      return { ok: true as const, observation: output };
    } catch (err) {
      const e = err as { message?: string; stdout?: string; stderr?: string };
      return {
        ok: false as const,
        error: `${e.message ?? 'command failed'}\nstdout:\n${e.stdout ?? ''}\nstderr:\n${e.stderr ?? ''}`,
      };
    }
  },
};

/** The registry is the capability list: the harness can do exactly what
 *  it contains, and nothing more. */
export const tools: ToolSpec[] = [
  readFileTool,
  listFilesTool,
  searchDirectoryTool,
  writeFileTool,
  editFileTool,
  deleteFileTool,
  runCommandTool,
];
