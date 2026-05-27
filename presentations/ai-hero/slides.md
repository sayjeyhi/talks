---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## AI Hero: Building Systems, Not Prompts
  From single-shot answers to autonomous agents
drawings:
  persist: false
css: unocss
colorSchema: dark
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

Most devs do:

# Chat → answer → done<br>
 
---
layout: center
class: 'text-center'
---

A good AI dev use case would be:

# Goal → plan → tools → loop → result



---
layout: section
---

# The REPL Loop

*Read → Eval → Print → Loop*

<!--
"You all know the REPL from your terminals. Turns out it's also the right mental model for everything agentic."
-->

---

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

<div class="flex items-center justify-center mt-8">
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanN0empwdnh1b3RuaHdmZDRhMm9xYnd2MGdpM3U1N2djNmdvYXV6NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zrWADpFDfsrRLhdPSy/giphy.gif" />
</div>

---
layout: center
class: 'text-center'
---

<div class="callout callout-teal" style="margin-top: 1.5rem;">
  <h2>AI agent reads accumulated context, reasons, outputs, feeds back.</h2>
</div>


----

<div class="tag tag-teal">01 · REPL Loop</div>

## Context fills up fast

<div class="grid-2" style="margin-top: 4rem;">
<div>

**0–40%**

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

<div class="flex items-center justify-center mt-8">

<img src="/ctx-40pct.png" style="border-radius: 8px; max-height: 340px;" />

</div>

--- 


<div class="tag tag-teal">01 · REPL Loop</div>

## Context fills up fast
<div class="flex items-center justify-center mt-8">

<img src="/ctx-full-conversation.png" style="border-radius: 8px; max-height: 340px;" />

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

## The Context Window = Working Memory

<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
 <div class="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 shadow-xl backdrop-blur">
    <div class="mb-4 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
        🧠
      </div>
      <h3 class="text-xl font-semibold text-white">
        Every Loop Turn Costs Tokens
      </h3>
    </div>
    <p class="mb-5 leading-relaxed text-zinc-300">
      The model rereads the <span class="font-medium text-white">entire conversation history</span>
      on every iteration.
    </p>
    <div class="space-y-3 text-sm">
      <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-zinc-200">
        → Summarize completed steps
      </div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-zinc-200">
        → Remove irrelevant context
      </div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-zinc-200">
        → Preserve goals + current state
      </div>
    </div>
  </div>
 <div class="rounded-2xl border border-red-500/40 bg-red-500/5 p-6 shadow-xl">
    <div class="mb-4 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
        ⚠️
      </div>
      <h3 class="text-xl font-semibold text-white">
        Failure Modes
      </h3>
    </div>
    <ul class="mb-6 space-y-3 text-zinc-200">
      <li class="flex items-start gap-2">
        <span class="text-red-400">•</span>
        <span>Infinite loops</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-red-400">•</span>
        <span>Hallucination compounding</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-red-400">•</span>
        <span>Context overflow</span>
      </li>
    </ul>
    <div class="rounded-xl border border-red-500/20 bg-black/20 p-4">
      <div class="mb-2 text-sm font-semibold uppercase tracking-wide text-red-300">
        Guards
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="rounded-lg bg-red-500/15 px-3 py-1 text-sm text-red-200">
          MAX_ITERATIONS
        </span>
        <span class="rounded-lg bg-red-500/15 px-3 py-1 text-sm text-red-200">
          Explicit stop conditions
        </span>
        <span class="rounded-lg bg-red-500/15 px-3 py-1 text-sm text-red-200">
          State validation
        </span>
      </div>
    </div>
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

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/40 bg-orange-400/10 text-orange-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 02
  </div>
  <h1>Plugins & MCP</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">How Claude grows arms and legs</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-orange-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-orange-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-orange-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-4">02 · Plugins & MCP</div>

## The architecture

<div class="flex flex-col items-center gap-1 mt-4">
  <div class="px-8 py-2.5 rounded-xl border border-blue-400/40 bg-blue-500/10 text-blue-300 font-mono text-sm text-center min-w-56">
    Your App / Claude.ai / Claude Code
  </div>
  <div class="text-zinc-500 text-xl leading-none">↓</div>
  <div class="px-8 py-2.5 rounded-xl border border-orange-400/40 bg-orange-500/10 text-orange-300 font-mono text-sm text-center min-w-56">
    MCP Host <span class="text-orange-200/50 text-xs">(orchestrates)</span>
  </div>
  <div class="text-zinc-500 text-xl leading-none">↓</div>
  <div class="flex gap-10 items-start">
    <div class="flex flex-col items-center gap-1">
      <div class="px-6 py-2.5 rounded-xl border border-purple-400/40 bg-purple-500/10 text-purple-300 font-mono text-sm text-center min-w-36">
        Claude<br><span class="text-purple-200/50 text-xs">(reasons)</span>
      </div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="px-6 py-2.5 rounded-xl border border-green-400/40 bg-green-500/10 text-green-300 font-mono text-sm text-center min-w-36">
        MCP Server<br><span class="text-green-200/50 text-xs">(executes tools)</span>
      </div>
    </div>
  </div>
  <div class="flex items-center gap-3 mt-1">
    <div class="text-zinc-600 text-sm">↙</div>
    <div class="px-3 py-1 rounded-lg border border-zinc-700 bg-zinc-900/70 text-zinc-400 font-mono text-xs">tool_use</div>
    <div class="text-zinc-600 text-sm">↘</div>
  </div>
</div>

<div class="mt-4 px-5 py-2.5 rounded-xl border border-zinc-700/60 bg-zinc-900/50 font-mono text-xs text-zinc-400 text-center">
  Claude sends: <span class="text-orange-300">&#123; name: "search_jira", input: &#123; query: "..." &#125; &#125;</span> → Your server does the actual work.
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-4">02 · Plugins & MCP</div>

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

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-5">02 · Plugins & MCP</div>

## The description is a prompt

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">Vague description</span>
    </div>
    <pre class="font-mono text-sm bg-black/50 rounded-xl px-4 py-3 text-red-200/80 border border-red-500/20 mb-4">"Post a comment"</pre>
    <p class="text-zinc-400 text-sm leading-relaxed">Claude will call this mid-reasoning, with half-formed thoughts.</p>
  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Precise description</span>
    </div>
    <pre class="font-mono text-xs bg-black/50 rounded-xl px-4 py-3 text-green-200/80 border border-green-500/20 mb-4 leading-relaxed">"Post a review comment on a pull
request. Only call this once you
have completed your full analysis.
Do NOT call for intermediate findings."</pre>
    <p class="text-zinc-400 text-sm leading-relaxed">Claude waits until it has a complete answer.</p>
  </div>
</div>

<div class="mt-4 px-5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-sm text-center">
  ⚠️ Bad tool descriptions → bad tool use. It's a prompt engineering problem.
</div>

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 03
  </div>
  <h1>Skills</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">Structured knowledge injection at scale</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-amber-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-amber-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-amber-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono mb-4">03 · Skills</div>

## What a skill is

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">A skill is a <span class="text-white font-semibold">Markdown file</span> injected as the system prompt before a task.</p>

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
  <div class="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
    <p class="text-amber-300 font-semibold text-sm mb-3">The "engine" is one line:</p>

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

<div class="inline-flex items-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono mb-4">03 · Skills</div>

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

<div class="inline-flex items-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono mb-4">03 · Skills</div>

## Skills compose

<div class="mt-3">

```js
const systemPrompt = [
  readSkill('senior-engineer'),   // persona + standards
  readSkill('python'),            // language-specific rules
  readSkill('code-review'),       // output format + process
].join('\n\n---\n\n')
```

</div>

<div class="grid grid-cols-3 gap-4 mt-5">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5 text-center">
    <div class="text-3xl mb-2">🧠</div>
    <div class="text-white font-semibold text-sm">senior-engineer</div>
    <div class="text-zinc-500 text-xs mt-1">Persona & values</div>
  </div>
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5 text-center">
    <div class="text-3xl mb-2">🐍</div>
    <div class="text-white font-semibold text-sm">python</div>
    <div class="text-zinc-500 text-xs mt-1">Language rules</div>
  </div>
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5 text-center">
    <div class="text-3xl mb-2">🔍</div>
    <div class="text-white font-semibold text-sm">code-review</div>
    <div class="text-zinc-500 text-xs mt-1">Process & format</div>
  </div>
</div>

<div class="mt-4 px-5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-sm text-center">
  Specialized agent. No fine-tuning. Just composed Markdown.
</div>

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-400/10 text-purple-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 04
  </div>
  <h1>AFK Systems</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">Autonomous pipelines that don't need you</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-4">04 · AFK Systems</div>

## AFK = Away From Keyboard

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-500 text-xs mb-3 uppercase tracking-widest font-mono">The agent:</p>
    <ul class="space-y-2.5 text-sm">
      <li class="flex items-center gap-3 text-zinc-300">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">→</span>
        Receives a trigger (webhook, cron, event)
      </li>
      <li class="flex items-center gap-3 text-zinc-300">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">→</span>
        Plans what to do
      </li>
      <li class="flex items-center gap-3 text-zinc-300">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">→</span>
        Uses tools to do it
      </li>
      <li class="flex items-center gap-3 text-zinc-300">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">→</span>
        Reports when done
      </li>
      <li class="flex items-center gap-3 text-white font-semibold">
        <span class="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 text-xs flex-shrink-0">→</span>
        Escalates when stuck
      </li>
    </ul>
    <p class="text-zinc-600 text-xs mt-4 italic">No human in the loop until necessary.</p>
  </div>
  <div class="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-5 font-mono text-sm">
    <div class="space-y-2">
      <div class="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-center text-xs">Trigger</div>
      <div class="text-center text-zinc-600 text-xs">↓</div>
      <div class="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-center text-xs">Orchestrator (plans + routes)</div>
      <div class="text-center text-zinc-600 text-xs">↓</div>
      <div class="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-center text-xs">Worker agents (execute via tools)</div>
      <div class="text-center text-zinc-600 text-xs">↓</div>
      <div class="px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-center text-xs">Output / Report</div>
      <div class="flex items-center gap-1 justify-center">
        <span class="text-zinc-600 text-xs">↓</span>
        <div class="flex-1 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-center text-xs">Escalate if needed</div>
        <span class="text-zinc-600 text-xs">←</span>
        <div class="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs">human</div>
      </div>
    </div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-4">04 · AFK Systems</div>

## The three components

<div class="grid grid-cols-3 gap-4 mt-4">
  <div class="rounded-2xl bg-zinc-900/60 p-5" style="border-top: 3px solid #a855f7; border-left: 1px solid rgba(168,85,247,0.2); border-right: 1px solid rgba(168,85,247,0.2); border-bottom: 1px solid rgba(168,85,247,0.2);">
    <div class="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl mb-4">🧠</div>
    <h3 class="text-white font-semibold text-sm mb-1">Skill</h3>
    <p class="text-purple-300 text-xs font-semibold mb-2">The agent's expertise.</p>
    <p class="text-zinc-400 text-xs leading-relaxed mb-4">What it knows, how it works, what format it outputs.</p>
    <div class="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs text-center font-mono">Injected as system prompt</div>
  </div>
  <div class="rounded-2xl bg-zinc-900/60 p-5" style="border-top: 3px solid #14b8a6; border-left: 1px solid rgba(20,184,166,0.2); border-right: 1px solid rgba(20,184,166,0.2); border-bottom: 1px solid rgba(20,184,166,0.2);">
    <div class="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-xl mb-4">🔧</div>
    <h3 class="text-white font-semibold text-sm mb-1">Tools</h3>
    <p class="text-teal-300 text-xs font-semibold mb-2">The agent's access.</p>
    <p class="text-zinc-400 text-xs leading-relaxed mb-4">GitHub, Slack, DB, APIs — anything your code can call.</p>
    <div class="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs text-center font-mono">Defined as MCP tools</div>
  </div>
  <div class="rounded-2xl bg-zinc-900/60 p-5" style="border-top: 3px solid #f97316; border-left: 1px solid rgba(249,115,22,0.2); border-right: 1px solid rgba(249,115,22,0.2); border-bottom: 1px solid rgba(249,115,22,0.2);">
    <div class="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl mb-4">🔁</div>
    <h3 class="text-white font-semibold text-sm mb-1">Loop</h3>
    <p class="text-orange-300 text-xs font-semibold mb-2">The agent's process.</p>
    <p class="text-zinc-400 text-xs leading-relaxed mb-4">REPL loop with break conditions and state management.</p>
    <div class="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs text-center font-mono">Your orchestration code</div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-4">04 · AFK Systems</div>

## Human-in-the-loop checkpoints

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

<div class="mt-4 px-5 py-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-200 text-sm text-center">
  Define "irreversible" for your domain. Be conservative at first.
</div>

---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-400/10 text-purple-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 05
  </div>
  <h1>DevM8</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">Your AI dev partner. In your pocket.</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-4">05 · DevM8</div>

## What is DevM8?

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">A <span class="text-white font-semibold">self-contained Rust binary</span> — a Telegram bot that bridges your dev workflow from your phone.</p>
    <ul class="space-y-2.5 text-sm">
      <li class="flex items-center gap-3 text-zinc-300"><span class="text-purple-400 text-base">◆</span> Manage Jira tickets — create, move, comment, browse</li>
      <li class="flex items-center gap-3 text-zinc-300"><span class="text-purple-400 text-base">◆</span> <span class="font-mono text-purple-300">/ask</span> — query Claude about your codebase</li>
      <li class="flex items-center gap-3 text-zinc-300"><span class="text-purple-400 text-base">◆</span> <span class="font-mono text-purple-300">/solve</span> — analyze a ticket → implementation steps</li>
      <li class="flex items-center gap-3 text-zinc-300"><span class="text-purple-400 text-base">◆</span> Run CLI commands in a sandboxed environment</li>
    </ul>
    <div class="mt-5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm text-center">
      No browser. No laptop. No context switch.
    </div>
  </div>
  <div class="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-5 font-mono text-xs">
    <div class="space-y-2">
      <div class="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-center">You (Telegram)</div>
      <div class="text-center text-zinc-600">↓</div>
      <div class="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-center">DevM8 Bot <span class="text-purple-400/50">(Rust)</span></div>
      <div class="flex justify-center gap-6 text-zinc-600">
        <span>↙</span><span>↘</span>
      </div>
      <div class="flex gap-2">
        <div class="flex-1 px-2 py-1.5 rounded bg-zinc-800 text-zinc-400 text-center">Jira Cloud API</div>
        <div class="flex-1 px-2 py-1.5 rounded bg-zinc-800 text-zinc-400 text-center">Claude Code CLI</div>
      </div>
    </div>
    <div class="mt-3 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 text-center">
      🔒 bubblewrap sandbox (Linux)
    </div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-4">05 · DevM8</div>

## What you can do from Telegram

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <div class="mb-4">
      <div class="text-xs font-mono text-orange-300 mb-2 uppercase tracking-widest">Jira</div>
      <ul class="space-y-1.5 text-sm text-zinc-300">
        <li>→ Create, move, comment on tickets</li>
        <li>→ Browse your assigned issues (paginated)</li>
        <li>→ Interactive Jira panel — all ops in one place</li>
      </ul>
    </div>
    <div class="border-t border-zinc-800 pt-4">
      <div class="text-xs font-mono text-purple-300 mb-2 uppercase tracking-widest">AI Commands</div>
      <ul class="space-y-1.5 text-sm text-zinc-300">
        <li><span class="font-mono text-purple-400">/ask</span> → query Claude about your repo code</li>
        <li><span class="font-mono text-purple-400">/solve</span> → ticket → implementation steps</li>
        <li><span class="font-mono text-purple-400">/run</span> → CLI command in sandbox</li>
      </ul>
    </div>
  </div>
  <div class="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-5">
    <div class="text-xs font-mono text-purple-300 mb-3 uppercase tracking-widest">The flow</div>
    <div class="space-y-2 font-mono text-xs">
      <div class="px-4 py-3 rounded-xl bg-black/40 border border-zinc-700 text-zinc-300 leading-relaxed">
        "/solve PROJ-123"
      </div>
      <div class="text-center text-zinc-600">↓</div>
      <div class="px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-center">Claude Code analyzes ticket + repo</div>
      <div class="text-center text-zinc-600">↓</div>
      <div class="px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-center">Implementation steps → Jira comment</div>
      <div class="text-center text-zinc-600">↓</div>
      <div class="px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-center">✅ Done (reply in Telegram)</div>
    </div>
    <p class="text-zinc-600 text-xs mt-3 text-center italic">This is the AFK pattern. Triggered from your phone.</p>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-4">05 · DevM8</div>

## The architecture

<div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5 mt-3">
  <div class="flex flex-col items-center gap-1.5 font-mono text-xs">
    <div class="px-6 py-2 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-300 min-w-52 text-center">Telegram message</div>
    <div class="text-zinc-600">↓</div>
    <div class="px-6 py-2 rounded-xl bg-zinc-800 border border-zinc-600 text-zinc-200 min-w-52 text-center">DevM8 <span class="text-zinc-500">(Rust binary — no runtime deps)</span></div>
    <div class="flex gap-6 items-start mt-1">
      <div class="flex flex-col items-center gap-1">
        <div class="text-zinc-600">↓</div>
        <div class="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-300 text-center min-w-36">Jira Cloud API<br><span class="text-orange-400/50">create / move / comment</span></div>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="text-zinc-600">↓</div>
        <div class="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-300 text-center min-w-36">Claude Code CLI<br><span class="text-purple-400/50">/ask · /solve · /run</span></div>
      </div>
    </div>
    <div class="flex flex-col items-center gap-1 mt-1">
      <div class="px-4 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300/70 text-center">🔒 bubblewrap namespace sandbox (Linux)</div>
      <div class="text-zinc-600">↓</div>
      <div class="px-6 py-2 rounded-xl bg-green-500/10 border border-green-500/25 text-green-300 min-w-52 text-center">Result → Telegram reply</div>
    </div>
  </div>
</div>

<div class="mt-3 px-5 py-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-200 text-xs text-center">
  Skill (config.toml context) + Tools (Jira API + Claude Code) + Loop = DevM8
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-5">05 · DevM8</div>

## Before vs After

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 font-bold">✗</div>
      <span class="text-red-300 font-semibold">Before DevM8</span>
    </div>
    <ul class="space-y-3 text-sm text-zinc-400">
      <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">•</span> Need laptop to move a Jira ticket</li>
      <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">•</span> Need IDE open to ask a code question</li>
      <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">•</span> Ticket analysis requires full context switch</li>
      <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">•</span> Every tiny action interrupts your flow</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-6">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 font-bold">✓</div>
      <span class="text-green-300 font-semibold">With DevM8</span>
    </div>
    <ul class="space-y-3 text-sm text-zinc-300">
      <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span> Commuting → <span class="font-mono text-purple-300">/solve PROJ-42</span> on the go</li>
      <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span> In a meeting → <span class="font-mono text-purple-300">/ask</span> your codebase</li>
      <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span> Phone in hand → full Jira + AI workflow</li>
      <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span> Sandboxed — credentials stay safe</li>
    </ul>
  </div>
</div>

<div class="mt-5 text-center font-mono text-sm text-zinc-500">
  github.com/sayjeyhi/DevM8 · MIT · macOS 12+ · Linux x64
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-5">The mental model</div>

## Three questions to build any agent

<div class="mt-4 space-y-3">
  <div class="flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
    <div class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl font-black text-purple-400 flex-shrink-0">1</div>
    <div>
      <div class="text-white font-semibold">What does it know?</div>
      <div class="text-zinc-400 text-sm mt-1">→ Write a SKILL.md. Domain knowledge, rules, output format.</div>
    </div>
  </div>
  <div class="flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
    <div class="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-2xl font-black text-teal-400 flex-shrink-0">2</div>
    <div>
      <div class="text-white font-semibold">What can it access?</div>
      <div class="text-zinc-400 text-sm mt-1">→ Define tools. APIs, databases, file system, other services.</div>
    </div>
  </div>
  <div class="flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
    <div class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl font-black text-orange-400 flex-shrink-0">3</div>
    <div>
      <div class="text-white font-semibold">What does "done" look like?</div>
      <div class="text-zinc-400 text-sm mt-1">→ Define stop conditions. This is the hardest one.</div>
    </div>
  </div>
</div>

---
layout: center
class: 'text-center'
---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-10">The shift</div>

<div class="text-3xl font-black leading-tight max-w-xl mx-auto mb-8">
  Stop asking<br>
  <span class="text-zinc-500 font-normal text-2xl">"what can I ask Claude?"</span>
</div>

<div class="text-3xl font-black leading-tight max-w-xl mx-auto">
  Start asking<br>
  <span style="background: linear-gradient(to right, #BECF24, #95E6FF, #CF8377); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">"what system can I build<br>that uses Claude?"</span>
</div>

---
layout: center
class: 'text-center'
---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-mono mb-8">Your action</div>

<h1 class="mb-8">This week</h1>

<div class="max-w-md mx-auto text-left space-y-3">
  <div class="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
    <div class="px-2 py-1 rounded bg-teal-500/20 text-teal-300 font-mono text-xs flex-shrink-0">STEP 1</div>
    <div class="text-zinc-300 text-sm">Pick one repetitive task you do every week</div>
  </div>
  <div class="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
    <div class="px-2 py-1 rounded bg-teal-500/20 text-teal-300 font-mono text-xs flex-shrink-0">STEP 2</div>
    <div class="text-zinc-300 text-sm">Answer the 3 questions: know / access / done</div>
  </div>
  <div class="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
    <div class="px-2 py-1 rounded bg-teal-500/20 text-teal-300 font-mono text-xs flex-shrink-0">STEP 3</div>
    <div class="text-zinc-300 text-sm">Write the SKILL.md and one tool. Even a draft teaches you what to build.</div>
  </div>
</div>

---
layout: center
class: 'text-center'
---

<div class="max-w-lg mx-auto">
  <p class="text-zinc-500 text-base mb-5">The question isn't</p>
  <div class="text-2xl font-bold text-zinc-400 mb-6 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40">
    "Will AI replace developers?"
  </div>
  <p class="text-zinc-500 text-base mb-5">It's</p>
  <div class="text-2xl font-black leading-snug" style="background: linear-gradient(135deg, #BECF24 0%, #95E6FF 50%, #CF8377 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
    "Which developers will build<br>the systems that change everything?"
  </div>
</div>

