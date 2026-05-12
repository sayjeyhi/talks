# Talk Demo Code
## "AI at Full Power for Developers" — Skills & Plugins Section

---

## Quick setup

```bash
cd talk-demos
npm install
export ANTHROPIC_API_KEY=sk-ant-...

# Run demos in order
npm run demo1   # Skills: before vs after
npm run demo2   # Plugins: autonomous tool use
npm run demo3   # Combined: skills + plugins + REPL loop
```

---

## Demo 1 — Skills (`skills-demo/`)

**What to say on stage:**
> "This is just a Markdown file. Watch what happens when I put it in the system prompt vs not."

**Files:**
- `SKILL.md` — the skill (open this on screen before running)
- `demo-1-skills.js` — sends the same code to Claude twice: bare system, then skill-injected

**The audience moment:** The before/after output side by side. Generic answer vs structured, opinionated, actionable review. Same model, same code, different Markdown in the system prompt.

**Key line to highlight in the code:**
```js
const skill = fs.readFileSync(path.join(__dirname, 'SKILL.md'), 'utf8')
await streamReview(skill, '✅  WITH SKILL')
```
That's the entire "skill system" — `readFileSync` + system prompt. No framework needed.

---

## Demo 2 — Plugins (`plugins-demo/`)

**What to say on stage:**
> "I gave Claude a goal. I didn't tell it which tools to call or in what order. Watch."

**Files:**
- `demo-2-plugins.js` — defines 3 tools, gives Claude a PR review goal, Claude chooses the tool sequence

**The audience moment:** The tool call sequence appearing in the terminal. Claude decides: search → read → post. Not scripted. Not if/else. Emergent from the goal + tool descriptions.

**Key thing to show in the code:**
```js
const TOOLS = [
  {
    name: "search_codebase",
    description: "Search the codebase for files or functions matching a keyword. " +
      "Use this when you need to find where something is implemented. ...",  // <-- this is a prompt
    input_schema: { ... }
  }
]
```
Say: **"The description field is a prompt. Treat it like one."**

---

## Demo 3 — Combined (`combined-demo/`)

**What to say on stage:**
> "Now let's put it all together. Skill in the system prompt. Tools available. A real alert coming in."

**Files:**
- `demo-3-combined.js` — DevOps SRE agent: skill + 3 tools + REPL loop + incident creation

**The audience moment:** A PagerDuty-style alert triggers the agent. It checks health, reads logs for only the degraded services (not all of them — it applies the skill's protocol), correlates the cascade (payment OOM → auth degraded), and files a P1 incident report.

**End of demo, say:**
> "Skill = the analyst's expertise. Tools = the analyst's access. Loop = the analyst's process. You compose these three things and you get an on-call engineer that never sleeps."

---

## Stage tips

- **Font size:** bump terminal font to 20pt before presenting
- **Dark terminal:** demos are designed to read well on dark backgrounds
- **Timing:** Demo 1 = ~45s, Demo 2 = ~30s, Demo 3 = ~60s (all depend on API latency)
- **Fallback:** If API is slow on stage, pre-record a run with `script` or asciinema
- **Wi-Fi risk:** Set `ANTHROPIC_API_KEY` before the talk. Consider a hotspot backup.

---

## Architecture in one diagram

```
┌─────────────────────────────────────────┐
│           Your Agent                    │
│                                         │
│  ┌──────────────┐  ┌─────────────────┐  │
│  │  SKILL.md    │  │  Tool Defs      │  │
│  │  (system     │  │  (name +        │  │
│  │   prompt)    │  │   description + │  │
│  └──────┬───────┘  │   schema)       │  │
│         │          └────────┬────────┘  │
│         └──────────┬────────┘           │
│                    ▼                    │
│             Claude API                  │
│          (reasons + decides)            │
│                    │                    │
│         ┌──────────┴────────┐           │
│         ▼                   ▼           │
│    Tool calls          Text output      │
│    (your code          (user-facing     │
│     executes)           or looped)      │
└─────────────────────────────────────────┘
```
