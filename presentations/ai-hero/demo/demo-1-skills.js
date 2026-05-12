#!/usr/bin/env node
/**
 * DEMO 1 — SKILLS
 * Shows Claude reviewing code WITHOUT a skill, then WITH a skill.
 * Run: node demo-1-skills.js
 *
 * What the audience sees:
 *   - Generic, vague response without skill
 *   - Structured, precise, opinionated response with skill
 *   - The skill file is just Markdown — no fine-tuning, no training
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const client = new Anthropic(); // uses ANTHROPIC_API_KEY env var
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── The code we'll ask Claude to review ────────────────────────────────────
const CODE_TO_REVIEW = `
async function getUser(id) {
  const res = await fetch('https://api.internal.com/users/' + id)
  const data = await res.json()
  if (data.role === 'admin') {
    const logs = await fetch('https://api.internal.com/logs?user=' + id)
    const logData = await logs.json()
    const reportRes = await fetch('https://api.internal.com/reports', {
      method: 'POST',
      body: JSON.stringify({ userId: id, logs: logData, secret: 'sk-prod-abc123' })
    })
    const report = await reportRes.json()
    console.log('Report created:', report)
    return { user: data, report }
  }
  return data
}
`;

const USER_PROMPT = `Please review this JavaScript function:\n\`\`\`js${CODE_TO_REVIEW}\`\`\``;

// ─── Helper: stream a response and print it ──────────────────────────────────
async function streamReview(systemPrompt, label) {
  console.log(`\n${"═".repeat(60)}`);
  console.log(`  ${label}`);
  console.log("═".repeat(60) + "\n");

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 600,
    system: systemPrompt,
    messages: [{ role: "user", content: USER_PROMPT }],
  });

  for await (const chunk of stream) {
    if (
      chunk.type === "content_block_delta" &&
      chunk.delta.type === "text_delta"
    ) {
      process.stdout.write(chunk.delta.text);
    }
  }
  console.log("\n");
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🎯  DEMO 1: Skills — Same prompt, two system contexts\n");
  console.log("Code being reviewed:");
  console.log("─".repeat(40));
  console.log(CODE_TO_REVIEW);

  // Round 1: No skill — just a bare system prompt
  await streamReview(
    "You are a helpful coding assistant.",
    "❌  WITHOUT SKILL  (bare system prompt)"
  );

  // Round 2: Skill injected — load the SKILL.md file
  const skill = fs.readFileSync(
    path.join(__dirname, "SKILL.md"),
    "utf8"
  );
  await streamReview(
    skill,
    "✅  WITH SKILL  (SKILL.md injected as system prompt)"
  );

  console.log("─".repeat(60));
  console.log("📁  The skill file is just:  ./SKILL.md");
  console.log("    No fine-tuning. No training. Just Markdown.\n");
}

main().catch(console.error);
