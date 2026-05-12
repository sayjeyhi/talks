#!/usr/bin/env node
/**
 * DEMO 3 — SKILLS + PLUGINS COMBINED
 * The full stack: skill (system context) + tools (capabilities) + REPL loop.
 *
 * Run: node demo-3-combined.js
 *
 * Scenario: A "DevOps analyst" agent that:
 *   1. Has a skill defining its persona and output rules
 *   2. Has tools to check service health, read logs, create incidents
 *   3. Loops until it has completed root cause analysis
 *
 * What the audience sees:
 *   - How skills + tools + loops compose into a real agent
 *   - Live tool invocations with realistic mock data
 *   - A finished incident report produced autonomously
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

// ─── The Skill ────────────────────────────────────────────────────────────────
const DEVOPS_SKILL = `
You are an on-call SRE analyst. When investigating incidents:

## Investigation protocol
1. Always check service health BEFORE reading logs
2. Read logs only for services showing degraded/down status  
3. Correlate timestamps — look for cascading failures
4. Create an incident report only after completing root cause analysis

## Incident report format
**Severity:** [P1 / P2 / P3]
**Affected services:** list them
**Root cause:** one clear sentence
**Timeline:** bullet points with timestamps
**Immediate action:** what to do RIGHT NOW
**Follow-up:** what to fix this week

## Rules
- Never speculate without log evidence
- If root cause is unclear, say so explicitly
- Severity P1 = customer impact, P2 = degraded, P3 = internal only
`;

// ─── Tools ────────────────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: "check_service_health",
    description:
      "Returns current health status for one or more services. " +
      "Call this first before reading logs.",
    input_schema: {
      type: "object",
      properties: {
        services: {
          type: "array",
          items: { type: "string" },
          description: "List of service names to check",
        },
      },
      required: ["services"],
    },
  },
  {
    name: "read_logs",
    description:
      "Fetch recent error logs for a specific service. " +
      "Only call for services that are degraded or down.",
    input_schema: {
      type: "object",
      properties: {
        service: { type: "string" },
        minutes: {
          type: "number",
          description: "How many minutes of logs to fetch (max 60)",
        },
        level: {
          type: "string",
          enum: ["ERROR", "WARN", "INFO", "ALL"],
          default: "ERROR",
        },
      },
      required: ["service", "minutes"],
    },
  },
  {
    name: "create_incident",
    description:
      "Creates a formal incident record. Call ONLY after root cause analysis is complete.",
    input_schema: {
      type: "object",
      properties: {
        severity: { type: "string", enum: ["P1", "P2", "P3"] },
        title: { type: "string" },
        report: { type: "string", description: "Full incident report in markdown" },
      },
      required: ["severity", "title", "report"],
    },
  },
];

// ─── Mock tool results ────────────────────────────────────────────────────────
function executeTool(name, input) {
  const pad = "      ";
  console.log(`\n  🔧  ${name}(${JSON.stringify(input)})`);

  const results = {
    check_service_health: () => ({
      timestamp: "2026-05-12T14:32:00Z",
      statuses: {
        "api-gateway": { status: "healthy", latency_ms: 42, error_rate: 0.001 },
        "auth-service": { status: "degraded", latency_ms: 3200, error_rate: 0.34 },
        "user-db": { status: "healthy", latency_ms: 8, error_rate: 0 },
        "payment-service": { status: "down", latency_ms: null, error_rate: 1.0 },
        "notification-service": { status: "healthy", latency_ms: 95, error_rate: 0.002 },
      },
    }),

    read_logs: () => {
      const logs = {
        "auth-service": [
          { time: "14:28:03", level: "ERROR", msg: "Connection timeout to payment-service: ECONNREFUSED 10.0.1.45:8080" },
          { time: "14:28:05", level: "ERROR", msg: "Retrying payment-service (attempt 1/3)... timeout after 3000ms" },
          { time: "14:28:14", level: "ERROR", msg: "Max retries exceeded for payment-service — falling back to degraded mode" },
          { time: "14:28:15", level: "WARN",  msg: "Auth tokens will not be validated against payment scope — accepting all" },
        ],
        "payment-service": [
          { time: "14:27:51", level: "ERROR", msg: "OOMKilled — container exceeded 512Mi memory limit" },
          { time: "14:27:51", level: "ERROR", msg: "Process exited with code 137" },
          { time: "14:27:55", level: "ERROR", msg: "Restart failed — image pull backoff (rate limit hit on registry.internal)" },
        ],
      };
      return {
        service: input.service,
        fetched_minutes: input.minutes,
        log_count: (logs[input.service] || []).length,
        logs: logs[input.service] || [{ time: "14:32:00", level: "INFO", msg: "No errors in window" }],
      };
    },

    create_incident: () => ({
      incident_id: "INC-2026-0512-001",
      created_at: "2026-05-12T14:32:44Z",
      slack_thread: "https://acme.slack.com/archives/C_ONCALL/p1234567",
      pagerduty_alert: "PD-88821",
      status: "open",
    }),
  };

  const result = results[name]?.() ?? { error: "Unknown tool" };
  const preview = JSON.stringify(result).slice(0, 120);
  console.log(`  ↩  ${preview}${preview.length >= 120 ? "…" : ""}`);
  return result;
}

// ─── Agentic REPL loop ────────────────────────────────────────────────────────
async function runAgent(alert) {
  console.log("\n" + "═".repeat(60));
  console.log("  🚨  INCOMING ALERT");
  console.log("  " + alert);
  console.log("═".repeat(60));
  console.log("\n  Agent starting root cause analysis...\n");

  const messages = [{ role: "user", content: alert }];
  let turn = 0;

  while (turn < 10) {
    turn++;
    console.log(`\n  ── Turn ${turn} ──────────────────────────────────────`);

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1200,
      tools: TOOLS,
      system: DEVOPS_SKILL,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    // Print any text Claude emits mid-loop
    for (const block of response.content) {
      if (block.type === "text" && block.text.trim()) {
        console.log(`\n  💬  ${block.text.trim().replace(/\n/g, "\n  ")}`);
      }
    }

    if (response.stop_reason === "end_turn") {
      console.log("\n" + "═".repeat(60));
      console.log("  ✅  Agent complete after", turn, "turns");
      console.log("═".repeat(60) + "\n");
      break;
    }

    // Execute tool calls
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

    messages.push({ role: "user", content: toolResults });
  }
}

// ─── Run ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🎯  DEMO 3: Skills + Plugins combined\n");
  console.log("  Stack: DEVOPS_SKILL (system) + 3 tools + REPL loop\n");

  await runAgent(
    "PagerDuty alert: payment-service is down. " +
    "auth-service showing elevated error rates. " +
    "Investigate, find root cause, and create an incident report."
  );

  console.log("\n─".repeat(60));
  console.log("  Skill = the analyst's expertise (Markdown, in system prompt)");
  console.log("  Tools = the analyst's access (APIs, logs, ticketing)");
  console.log("  Loop  = the analyst's process (methodical, self-directed)\n");
}

main().catch(console.error);
