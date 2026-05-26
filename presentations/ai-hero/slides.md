---
theme: seriph
background: /openart-video_cf97c9b8_1759827505833.gif
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## AI Hero: Building Systems, Not Prompts
  From single-shot answers to autonomous agents
drawings:
  persist: false
css: unocss
---

# AI Hero

Building Systems, Not Prompts

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="avtar mt-36 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">May 2026</span>
  </a>
</div>



---

# I'm
# Jafar Rezaei



<br />

<div class="grid grid-cols-2 gap-4 text-left text-sm text-gray-400">

<div>
<div class="text-base text-gray-300">

<span class="text-base text-green-400">By day</span>, I'm Squad Lead at Lyreco, e-commerce platform for launching in 25+ countries.

<br/> 

<span class="text-base text-green-400">By night</span>, I'm OSS lover, book writer, 3D enthusiast, game developer, WASM enthusiast, etc.

<svg class="text-gray-500 mt-12" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 12"><!-- Icon from Dinkie Icons by atelierAnchor - https://github.com/atelier-anchor/dinkie-icons/blob/main/LICENSE --><path fill="currentColor" d="M3 2H2v1h1Zm0 0h6V1H3Zm-3 8h1V8H0Zm1 1h3v-1H1Zm3 1h6v-1H4ZM1 8h1V3H1Zm3 0h1V7H4ZM3 7h1V5H3Zm2 2h2V8H5Zm5 2h1v-1h-1Zm-1-1h1V8H9ZM5 5h1V4H5Zm2 2h1V6H7ZM6 4h1V3H6Zm2 2h1V5H8Zm2 2h1V3h-1ZM9 3h1V2H9Zm0 0"/></svg>

</div>

<br/>


</div>
<div>
  <img class="absolute top-10 right-20 w-24 h-24 rounded-full grayscale" src="/openart-video_cf97c9b8_1759827505833.gif" />
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdhYWZ2eDM4ZHdzeG5jYXllNGh3ZnMzeWF1d2kwNXo3M3dzMTE0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JTTAjM197sku8MgrRa/giphy.gif" />
</div>
</div>


---
layout: center
class: 'text-center'
---

<div class="tag tag-coral">The gap</div>

<div class="stat" style="color: var(--coral);">10%</div>

<p style="font-size: 1.3rem; margin-top: 0.5rem; color: #444;">
  That's what most developers use
</p>

<div style="margin-top: 2rem; font-size: 0.95rem; color: #666; line-height: 1.8;">
  Chat → answer → done<br>
  <strong style="color: #222;">vs.</strong><br>
  Goal → plan → tools → loop → result
</div>

<div class="callout" style="margin-top: 2rem; text-align: left; max-width: 480px; margin-left: auto; margin-right: auto;">
  Today: the other 90%
</div>

---

<div class="tag tag-purple">Agenda</div>

## What we're covering

<div style="margin-top: 1.5rem;">

<div style="margin-top: 0.75rem; line-height: 2.2;">

<span class="step-num">01</span> The REPL Loop

<span class="step-num">02</span> Plugins & MCP

<span class="step-num">03</span> Skills

<span class="step-num">04</span> AFK Systems

</div>
</div>

---
layout: section
---

<div class="tag tag-teal">Section 01</div>

# The REPL Loop

*Read → Eval → Print → Loop*

<!--
"You all know the REPL from your terminals. Turns out it's also the right mental model for everything agentic."
-->

---

<div class="tag tag-teal">01 · REPL Loop</div>

## What single-shot looks like

<div class="code-label">One prompt, one answer, done</div>

```
You → [prompt] → Claude → [answer]
```

<div style="margin-top: 2rem;">
<div class="code-label">Works for:</div>

- Explain this function
- Write a regex
- Summarize this doc

</div>

<div class="callout" style="margin-top: 1.5rem;">
  ⚠️ Single-shot can't pursue a goal. It answers a question.
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## What a loop looks like

```js
while (!goalReached) {
  context.push({ role: 'user', content: buildStep(state) })
  
  const res = await claude.messages.create({ messages: context })
  
  state = updateState(state, res.content)
  
  // Always have a break condition
  if (iterations++ > MAX || isComplete(state)) break
}
```

<div class="callout callout-teal" style="margin-top: 1.5rem;">
  Claude reads accumulated context, reasons, outputs, feeds back.
  <strong>This is convergence on a goal.</strong>
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## The context window is working memory

<div class="grid-2" style="margin-top: 1.5rem;">
<div class="card">

**Every loop turn costs tokens**

The model reads the full history on each pass.

→ Summarize completed steps<br>
→ Drop irrelevant context<br>
→ Keep goals + current state

</div>
<div class="card" style="border-color: #f5c6c6;">

**Failure modes**

- Infinite loops
- Hallucination compounding
- Context overflow

**Guards:**
- `MAX_ITERATIONS`
- Explicit stop conditions
- State validation

</div>
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## Context fills up fast

<div class="grid-2" style="margin-top: 1rem;">
<div>

**The "beginner's mark" — 0–40%**

Most chat usage stays here. Fresh context, full attention, low cost.

</div>
<div>

**A full agentic session**

Tool calls, results, and reasoning stack up — the window fills quickly.

</div>
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## Context fills up fast

<div class="grid-2" style="margin-top: 1.5rem;">
<div>

<img src="/ctx-40pct.png" style="border-radius: 8px; max-height: 340px;" />

</div>
<div>

<img src="/ctx-full-conversation.png" style="border-radius: 8px; max-height: 340px;" />

</div>
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## Compaction vs. overflow

<div class="grid-2" style="margin-top: 1rem;">
<div>

**Compaction** — Claude summarizes history to free space. Signal survives.

</div>
<div>

**Overflow** — no compaction, no guards. Context rots. Goals drift.

</div>
</div>

<div class="callout" style="margin-top: 1.5rem;">
  Principle of Least Context: sub-agents isolate work so the orchestrator stays lean.
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## Compaction vs. overflow

<div class="grid-2" style="margin-top: 1.5rem;">
<div>

<img src="/ctx-compacted.png" style="border-radius: 8px; max-height: 340px;" />

</div>
<div>

<img src="/ctx-overloaded.png" style="border-radius: 8px; max-height: 340px;" />

</div>
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## Parallel agents eat context fast

Each sub-agent spawns its own window. Without isolation, the orchestrator pays for all of it.

<div class="callout callout-teal" style="margin-top: 2rem;">
  Three explorer agents × ~60k tokens each = 180k tokens before orchestrator does any work.
</div>

---

<div class="tag tag-teal">01 · REPL Loop</div>

## Parallel agents eat context fast

<div style="text-align: center; margin-top: 2rem;">
  <img src="/ctx-parallel-agents.png" style="border-radius: 8px; max-height: 400px; margin: 0 auto;" />
</div>

---
layout: section
---

<div class="tag tag-coral">Section 02</div>

# Plugins & MCP

*How Claude grows arms and legs*

---

<div class="tag tag-coral">02 · Plugins & MCP</div>

## The architecture

<div style="margin-top: 1.5rem; font-family: 'DM Mono', monospace; font-size: 0.85rem; line-height: 2.2; background: #f8f8f8; border-radius: 10px; padding: 1.25rem;">

```
Your App / Claude.ai / Claude Code
         │
    MCP Host (orchestrates)
         │
   ┌─────┴──────┐
   │            │
Claude       MCP Server (your code)
(reasons)    (executes tools)
   │            │
   └──tool_use──┘
   
Claude sends: { name: "search_jira", input: { query: "..." } }
Your server does the actual work.
```

</div>

---

<div class="tag tag-coral">02 · Plugins & MCP</div>

## Tool anatomy

```js
{
  name: "search_codebase",
  
  description:
    "Search the codebase for files or functions matching a keyword. " +
    "Use this when you need to find where something is implemented. " +
    "Returns a list of matching file paths and line numbers.",
    //  ↑ This is a prompt. Write it like one.
  
  input_schema: {
    type: "object",
    properties: {
      query:     { type: "string", description: "Keyword to search" },
      file_type: { type: "string", enum: ["js", "ts", "py", "any"] }
    },
    required: ["query"]
  }
}
```

---

<div class="tag tag-coral">02 · Plugins & MCP</div>

## The description is a prompt

<div class="grid-2" style="margin-top: 1.5rem;">
<div class="card" style="border-color: #f5c6c6;">

**Vague description**

```
"Post a comment"
```

Claude will call this mid-reasoning, with half-formed thoughts.

</div>
<div class="card" style="border-color: #a8e6cf;">

**Precise description**

```
"Post a review comment on a pull
request. Only call this once you
have completed your full analysis.
Do NOT call for intermediate findings."
```

Claude waits until it has a complete answer.

</div>
</div>

<div class="callout" style="margin-top: 1.5rem;">
  Bad tool descriptions → bad tool use. It's a prompt engineering problem.
</div>

---
layout: section
---

<div class="tag tag-amber">Section 03</div>

# Skills

*Structured knowledge injection at scale*

---

<div class="tag tag-amber">03 · Skills</div>

## What a skill is

<div class="grid-2" style="margin-top: 1.5rem;">
<div>

A skill is a **Markdown file** injected as the system prompt before a task.

```
/skills/
  public/
    code-review/SKILL.md
    devops/SKILL.md
  org/
    our-stack/SKILL.md
  user/
    preferences/SKILL.md
```

</div>
<div class="card">

**The "engine" is one line:**

```js
const skill = fs.readFileSync(
  './SKILL.md', 'utf8'
)

// That's it.
// No training.
// No fine-tuning.
// Just Markdown.
```

</div>
</div>

---

<div class="tag tag-amber">03 · Skills</div>

## A real skill file

```md
# Code Review Skill

You are a senior engineer conducting a code review. 
Apply these rules strictly:

## Rules
- Flag any function longer than 20 lines
- Flag missing error handling on async calls
- Flag hardcoded secrets or API keys
- Never say "looks good" — always find one improvement

## Output format

**VERDICT:** [APPROVED / NEEDS CHANGES / BLOCKED]

**Issues found:**
- [CRITICAL] ...
- [WARNING]  ...

Keep responses under 200 words. Be blunt, not mean.
```

---

<div class="tag tag-amber">03 · Skills</div>

## Skills compose

<div style="margin-top: 1.5rem;">

```js
const systemPrompt = [
  readSkill('senior-engineer'),   // persona + standards
  readSkill('python'),            // language-specific rules
  readSkill('code-review'),       // output format + process
].join('\n\n---\n\n')
```

</div>

<div class="grid-3" style="margin-top: 1.5rem;">
<div class="card" style="text-align: center;">
  <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🧠</div>
  <strong>senior-engineer</strong>
  <div style="font-size: 0.75rem; color: #666; margin-top: 0.25rem;">Persona & values</div>
</div>
<div class="card" style="text-align: center;">
  <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🐍</div>
  <strong>python</strong>
  <div style="font-size: 0.75rem; color: #666; margin-top: 0.25rem;">Language rules</div>
</div>
<div class="card" style="text-align: center;">
  <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</div>
  <strong>code-review</strong>
  <div style="font-size: 0.75rem; color: #666; margin-top: 0.25rem;">Process & format</div>
</div>
</div>

<div class="callout" style="margin-top: 1.5rem;">
  Specialized agent. No fine-tuning. Just composed Markdown.
</div>

---
layout: section
---

<div class="tag tag-purple">Section 04</div>

# AFK Systems

*Autonomous pipelines that don't need you*

---

<div class="tag tag-purple">04 · AFK Systems</div>

## AFK = Away From Keyboard

<div class="grid-2" style="margin-top: 1.5rem;">
<div>

The agent:

- Receives a trigger (webhook, cron, event)
- Plans what to do
- Uses tools to do it
- Reports when done
- **Escalates when stuck**

No human in the loop until necessary.

</div>
<div class="card" style="border-color: var(--purple);">

```
Trigger
  ↓
Orchestrator (plans + routes)
  ↓
Worker agents (execute via tools)
  ↓
Output / Report
  ↓
Escalate if needed ←─── human
```

</div>
</div>

---

<div class="tag tag-purple">04 · AFK Systems</div>

## The three components

<div class="grid-3" style="margin-top: 1.5rem;">
<div class="card" style="border-top: 3px solid var(--purple);">

**Skill**

The agent's expertise.

What it knows, how it works, what format it outputs.

*Injected as system prompt*

</div>
<div class="card" style="border-top: 3px solid var(--teal);">

**Tools**

The agent's access.

GitHub, Slack, DB, APIs — anything your code can call.

*Defined as MCP tools*

</div>
<div class="card" style="border-top: 3px solid var(--coral);">

**Loop**

The agent's process.

REPL loop with break conditions and state management.

*Your orchestration code*

</div>
</div>

---

<div class="tag tag-purple">04 · AFK Systems</div>

## Human-in-the-loop checkpoints

<div style="margin-top: 1.5rem;">

```js
async function executeAction(action, input) {
  // Reversible actions → run autonomously
  if (action.reversible) {
    return await runTool(action, input)
  }
  
  // Irreversible actions → require approval
  // e.g. send email, push to prod, charge card
  const approval = await requestHumanApproval({
    action,
    input,
    reasoning: action.reasoning,
  })
  
  if (!approval.granted) return { skipped: true }
  return await runTool(action, input)
}
```

</div>

<div class="callout" style="margin-top: 1rem;">
  Define "irreversible" for your domain. Be conservative at first.
</div>

---
layout: section
---

<div class="tag tag-purple">Section 05</div>

# DevM8

*Your AI dev partner. In your pocket.*

---

<div class="tag tag-purple">05 · DevM8</div>

## What is DevM8?

<div class="grid-2" style="margin-top: 1.5rem;">
<div>

A **Telegram bot** that puts your entire dev workflow in your pocket.

- Manage Jira tickets — create, move, comment, solve
- Ask Claude questions about your codebase
- Run CLI commands remotely
- AI-assisted dev workflows

<br/>

**No browser. No laptop. No context switch.**

</div>
<div class="card" style="border-color: var(--purple);">

```
You (Telegram)
      ↓
  DevM8 Bot
      ↓
Claude + MCP tools
   /    |    \
Jira  GitHub  CLI
```

</div>
</div>

---

<div class="tag tag-purple">05 · DevM8</div>

## What you can do from Telegram

<div class="grid-2" style="margin-top: 1.5rem;">
<div>

**Jira**
- Create, move, comment tickets
- Solve issues with AI help
- Triage your backlog on the go

**Code**
- Ask Claude questions about your repo
- Run CLI commands from your phone
- Get PR summaries instantly

</div>
<div>

**The flow:**

<div style="font-family: 'DM Mono', monospace; font-size: 0.8rem; background: #111; color: #eee; border-radius: 10px; padding: 1rem; line-height: 1.8; margin-top: 0.5rem;">

```
"Move PROJ-123 to In Review
 and comment with the PR link"
         ↓
  DevM8 executes autonomously
         ↓
  ✅ Done (reply in Telegram)
```

</div>
</div>
</div>

<div class="callout" style="margin-top: 1.5rem;">
  This is the AFK pattern. Triggered from your phone.
</div>

---

<div class="tag tag-purple">05 · DevM8</div>

## The architecture

<div style="margin-top: 1.5rem; font-family: 'DM Mono', monospace; font-size: 0.82rem; background: #f8f8f8; border-radius: 10px; padding: 1.25rem; line-height: 2.2;">

```
Telegram message
       ↓
  DevM8 Bot  (Node.js)
       ↓
  Claude  (orchestrator)
  + SKILL.md (dev workflow expertise)
       ↓
  MCP Tools:
  ├── jira_search / jira_update / jira_comment
  ├── github_pr / github_review
  ├── run_cli_command
  └── ask_codebase (RAG over your repo)
       ↓
  Result → Telegram reply
```

</div>

<div class="callout" style="margin-top: 1rem;">
  Skills + Tools + Loop — the same three components. Just triggered differently.
</div>

---

<div class="tag tag-purple">05 · DevM8</div>

## Before vs After

<div class="grid-2" style="margin-top: 1.5rem;">
<div class="card" style="border-color: #f5c6c6;">

**Before DevM8**

- Need laptop to move a ticket
- Need browser to review a PR
- Need IDE to ask a code question
- Every tiny action = context switch

</div>
<div class="card" style="border-color: #a8e6cf;">

**With DevM8**

- Commuting → manage backlog
- In a meeting → answer code question
- Phone in hand → full dev workflow
- Always connected to your stack

</div>
</div>

<div style="margin-top: 2rem; text-align: center; font-family: 'DM Mono', monospace; font-size: 0.9rem; color: #555;">
  github.com/sayjeyhi/DevM8
</div>

---

<div class="tag tag-purple">The mental model</div>

## Three questions to build any agent

<div style="margin-top: 1.5rem; line-height: 1;">

<div class="card" style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem;">
  <div style="font-family: 'DM Mono'; font-size: 2rem; font-weight: 700; color: var(--purple); line-height: 1; flex-shrink: 0;">1</div>
  <div>
    <strong>What does it know?</strong>
    <div style="color: #666; font-size: 0.85rem; margin-top: 0.25rem;">→ Write a SKILL.md. Domain knowledge, rules, output format.</div>
  </div>
</div>

<div class="card" style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem;">
  <div style="font-family: 'DM Mono'; font-size: 2rem; font-weight: 700; color: var(--teal); line-height: 1; flex-shrink: 0;">2</div>
  <div>
    <strong>What can it access?</strong>
    <div style="color: #666; font-size: 0.85rem; margin-top: 0.25rem;">→ Define tools. APIs, databases, file system, other services.</div>
  </div>
</div>

<div class="card" style="display: flex; align-items: flex-start; gap: 1rem;">
  <div style="font-family: 'DM Mono'; font-size: 2rem; font-weight: 700; color: var(--coral); line-height: 1; flex-shrink: 0;">3</div>
  <div>
    <strong>What does "done" look like?</strong>
    <div style="color: #666; font-size: 0.85rem; margin-top: 0.25rem;">→ Define stop conditions. This is the hardest one.</div>
  </div>
</div>

</div>

---
layout: center
class: 'text-center'
---

<div class="tag tag-coral">The shift</div>

<div style="font-size: 1.8rem; font-weight: 800; line-height: 1.4; max-width: 560px; margin: 0 auto;">
  Stop asking<br>
  <span style="color: #aaa; font-weight: 400; font-size: 1.3rem;">"what can I ask Claude?"</span>
</div>

<div style="margin-top: 2rem; font-size: 1.8rem; font-weight: 800; line-height: 1.4; max-width: 560px; margin: 2rem auto 0;">
  Start asking<br>
  <span style="color: var(--purple);">"what system can I build<br>that uses Claude?"</span>
</div>

---
layout: center
class: 'text-center'
---

<div class="tag tag-teal">Your action</div>

# This week

<div style="margin-top: 2rem; max-width: 500px; margin-left: auto; margin-right: auto; text-align: left;">

<div style="display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.25rem;">
  <div style="font-family: 'DM Mono'; font-size: 0.65rem; background: var(--teal-light); color: #085041; padding: 4px 8px; border-radius: 4px; flex-shrink: 0; margin-top: 2px;">STEP 1</div>
  <div>Pick one repetitive task you do every week</div>
</div>

<div style="display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.25rem;">
  <div style="font-family: 'DM Mono'; font-size: 0.65rem; background: var(--teal-light); color: #085041; padding: 4px 8px; border-radius: 4px; flex-shrink: 0; margin-top: 2px;">STEP 2</div>
  <div>Answer the 3 questions: know / access / done</div>
</div>

<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <div style="font-family: 'DM Mono'; font-size: 0.65rem; background: var(--teal-light); color: #085041; padding: 4px 8px; border-radius: 4px; flex-shrink: 0; margin-top: 2px;">STEP 3</div>
  <div>Write the SKILL.md and one tool. Even a draft teaches you what to build.</div>
</div>

</div>

---
layout: center
class: 'text-center'
---

<div style="font-size: 1.1rem; color: #666; margin-bottom: 2rem;">The question isn't</div>

<div style="font-size: 1.5rem; font-weight: 700; color: #aaa; margin-bottom: 1.5rem;">
  "Will AI replace developers?"
</div>

<div style="font-size: 1.1rem; color: #666; margin-bottom: 1rem;">It's</div>

<div style="font-size: 1.6rem; font-weight: 800; color: var(--purple); line-height: 1.4;">
  "Which developers will build<br>the systems that change everything?"
</div>

