#!/usr/bin/env node
/**
 * DEMO 2 — PLUGINS (Tool Use / MCP Pattern)
 * Shows Claude deciding which tools to call, in what order,
 * without being told — just given a natural language goal.
 *
 * Run: node demo-2-plugins.js
 *
 * Tools simulated (no real API keys needed for the demo):
 *   - search_codebase   → searches mock codebase
 *   - read_file         → reads a mock file
 *   - post_comment      → posts a mock PR comment
 *
 * What the audience sees:
 *   - Claude receiving a goal in plain English
 *   - Claude autonomously deciding which tools to call
 *   - Tool calls and results streamed in real time
 *   - Final answer synthesized from tool outputs
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

// ─── Tool definitions (what Claude can "see" and call) ───────────────────────
const TOOLS = [
  {
    name: "search_codebase",
    description:
      "Search the codebase for files or functions matching a keyword. " +
      "Use this when you need to find where something is implemented. " +
      "Returns a list of matching file paths and line numbers.",
    input_schema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Keyword or function name to search for",
        },
        file_type: {
          type: "string",
          enum: ["js", "ts", "py", "any"],
          description: "Limit results to this file type",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "read_file",
    description:
      "Read the contents of a specific file from the repository. " +
      "Use after search_codebase to inspect a file in detail.",
    input_schema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "File path relative to repo root",
        },
        start_line: {
          type: "number",
          description: "Start reading from this line (optional)",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "post_comment",
    description:
      "Post a review comment on a pull request. " +
      "Only call this once you have completed your analysis. " +
      "Do NOT call this for intermediate findings.",
    input_schema: {
      type: "object",
      properties: {
        pr_number: { type: "number", description: "Pull request number" },
        body: {
          type: "string",
          description: "The full markdown comment body",
        },
        verdict: {
          type: "string",
          enum: ["APPROVED", "NEEDS_CHANGES", "BLOCKED"],
        },
      },
      required: ["pr_number", "body", "verdict"],
    },
  },
];

// ─── Mock tool execution (simulates real API calls) ──────────────────────────
function executeTool(name, input) {
  console.log(`\n  🔧  Tool called: ${name}`);
  console.log(`      Input: ${JSON.stringify(input, null, 2).replace(/\n/g, "\n      ")}`);

  const results = {
    search_codebase: () => ({
      results: [
        { path: "src/auth/login.js", line: 42, match: input.query },
        { path: "src/auth/middleware.js", line: 17, match: input.query },
      ],
      total: 2,
    }),

    read_file: () => ({
      path: input.path,
      content:
        input.path === "src/auth/login.js"
          ? `
// src/auth/login.js (lines ${input.start_line || 1}–65)
async function loginUser(username, password) {
  // TODO: add rate limiting
  const user = await db.query('SELECT * FROM users WHERE username = "' + username + '"')
  if (user && user.password === password) {   // plaintext password compare!
    const token = jwt.sign({ id: user.id }, 'hardcoded-secret-key')
    return { token, user }
  }
  throw new Error('Invalid credentials')
}
`
          : `
// src/auth/middleware.js
export function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token' })
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}
`,
    }),

    post_comment: () => ({
      success: true,
      comment_url: `https://github.com/acme/app/pull/${input.pr_number}#issuecomment-9999`,
      posted_at: new Date().toISOString(),
    }),
  };

  const result = results[name]?.() ?? { error: "Unknown tool" };
  console.log(`      Result: ${JSON.stringify(result, null, 2).replace(/\n/g, "\n      ")}\n`);
  return result;
}

// ─── Agentic loop ─────────────────────────────────────────────────────────────
async function runAgent(goal) {
  console.log("\n" + "═".repeat(60));
  console.log("  GOAL:", goal);
  console.log("═".repeat(60));

  const messages = [{ role: "user", content: goal }];

  // Loop until Claude stops calling tools
  while (true) {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      tools: TOOLS,
      system:
        "You are a senior code reviewer with access to tools. " +
        "Use tools methodically: search first, read relevant files, then post your comment. " +
        "Always check auth-related code for security issues.",
      messages,
    });

    // Add Claude's response to history
    messages.push({ role: "assistant", content: response.content });

    // If Claude is done (no more tool calls), print final answer
    if (response.stop_reason === "end_turn") {
      const text = response.content.find((b) => b.type === "text")?.text;
      if (text) {
        console.log("\n" + "─".repeat(60));
        console.log("  ✅  Claude's final summary:");
        console.log("─".repeat(60));
        console.log(text);
      }
      break;
    }

    // Execute all tool calls Claude requested
    const toolResults = [];
    for (const block of response.content) {
      if (block.type === "tool_use") {
        const result = executeTool(block.name, block.input);
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: JSON.stringify(result),
        });
      }
    }

    // Feed results back to Claude
    messages.push({ role: "user", content: toolResults });
  }
}

// ─── Run the demo ─────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🎯  DEMO 2: Plugins — Claude using tools autonomously\n");

  await runAgent(
    "Review PR #47. Focus on the auth module — search for login-related code, " +
      "read the relevant files, and post a security-focused review comment."
  );

  console.log("\n" + "─".repeat(60));
  console.log("💡  Claude chose the tool order. You only gave it a goal.");
  console.log("    Tools are defined once. Claude decides when to use them.\n");
}

main().catch(console.error);
