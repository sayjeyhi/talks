---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Designing AI Assistants for Real Work
  Lessons from DevM8 — VibeKode
drawings:
  persist: false
css: unocss
colorSchema: dark
mermaid:
  securityLevel: loose
---

# Building AI Agents for <span class="text-[#BECF24]">Real Work</span>

Lessons from DevM8


<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="avtar mt-20 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">VibeKode · October 2026</span>
  </a>
</div>


---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/meme-before-after-agents.png" />
</div>


---
layout: center
class: 'text-center'
---

<div class="absolute inset-0 flex items-center justify-center">
  <video class="max-h-[92%] max-w-[94%] rounded-xl" autoplay loop muted playsinline src="./public/IMG_1868.MP4" />
</div>

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

<div class="text-3xl font-black text-zinc-300 tracking-tight leading-snug">
  "I didn't want to do this."
</div>

<br />

<div class="text-2xl text-zinc-400 leading-relaxed">
  I wanted to have my agent <strong class="text-[#BECF24]">ready for me</strong> —<br/>
  when I want it, where I am.
</div>

<p class="text-zinc-500 text-lg mt-8">
  Not glued to a terminal. Not "later, when I'm back at my desk."
</p>


---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/smiling-face-with-sunglasses_1f60e.png" />

# So I built DevM8

<div class="text-4xl font-black text-zinc-200 mt-4 tracking-tight">
  (to be my <span class="text-[#95E6FF]">mate</span>!)
</div>

<p class="text-zinc-500 text-lg mt-10">
  Dev + M8 — the mate that does the boring work <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/grinning-face-with-smiling-eyes_1f604.png" />
</p>


---
layout: center
class: 'text-center'
---

# What is DevM8? <img class="w-10 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" />

<br />

<div class="text-xl text-zinc-300">A <strong>Rust-based CLI tool</strong> that takes over my daily boring work:</div>

<br />

<div class="text-lg text-left max-w-2xl mx-auto leading-loose">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/satellite-antenna_1f4e1.png" /> **Telling AI what to do** — remotely
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/toolbox_1f9f0.png" /> Using the **right skill** for the AI, when it is needed
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/speech-balloon_1f4ac.png" /> Making **Slack communication** easier
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" /> **Git branch management** integrated with Jira

</div>

<br />

> <span class="text-sm">At that point, there were no accessible Claude agents <img class="w-5 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/slightly-smiling-face_1f642.png" /><br/>
> Today it's easier — doable via almost all agents, natively.</span>


---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[95%] rounded-xl" src="./public/devm8-main-page.png" />
</div>


---

# I gave it to friends, it got serious <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/shield_1f6e1-fe0f.png" />

<br />

<div class="text-lg text-left max-w-3xl mx-auto leading-loose">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/locked_1f512.png" /> **Secure** — every agent run is sandboxed: bubblewrap namespaces, read-only `~/.claude`, `~/.kiro` cleared environment
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/office-building_1f3e2.png" /> **Multi-tenant** — per-project access control, admin roles, 10-minute pairing codes
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/electric-plug_1f50c.png" /> **Integrated** — Slack and Telegram, plus `devm8-client` for the terminal
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/brain_1f9e0.png" /> **Agent-powered** — supporting Claude and Kiro, Base support of Codex

</div>

<br />

> Same assistant, every channel, one shared history. <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/sparkles_2728.png" />


---

# Your phone is now the terminal <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/mobile-phone_1f4f1.png" />

<br />

Talk to it in Telegram — no browser, no laptop:

```text
/create  /move  /comment  /my_tickets   ← Jira, from the bus
/ask     /solve /history                ← Claude, on your repo
```

<br />

Prefer a keyboard? `devm8-client` gives you the same workflows as a full TUI:

```text
devm8-client ask · solve · pr-review · jira · history · opencode
```

<br />

> One server, one history — phone, laptop, terminal. <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/counterclockwise-arrows-button_1f504.png" />

---

# devm8-client cli <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] border border-zinc-800" src="./public/devm8-client.png" />
</div>

<div class="absolute bottom-2 inset-x-0 text-center text-sm text-zinc-500">
  TUI
</div>

---

# devm8-client cli <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] border border-zinc-800" src="./public/demo-devm8-client.png" />
</div>

<div class="absolute bottom-2 inset-x-0 text-center text-sm text-zinc-500">
  TUI
</div>


---

# Telegram bot <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />
@Devm8_bot

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] rounded-xl border border-zinc-800" src="./public/demo-devm8-telegram.png" />
</div>

<div class="absolute bottom-2 inset-x-0 text-center text-sm text-zinc-500">
  Agent suggests a branch name → pick a project → one tap: <em>Pull latest · New branch · Project scripts · CLI · OpenCode</em>
</div>


---

# Telegram bot <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />
@Devm8_bot

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] rounded-xl border border-zinc-800" src="./public/demo-devm8-telegram-2.png" />
</div>


---


# Where does it live? A homelab <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/house_1f3e0.png" />

<br />

<div class="grid grid-cols-3 gap-5 mt-4">

<div class="flex items-center justify-center">
<img class="max-w-1/2 block" src="./public/dell-optiplex.png" />
</div>

<div class="text-lg col-span-2 text-left max-w-3xl mx-auto leading-loose">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/desktop-computer_1f5a5-fe0f.png" /> **Dell Optiplex 3070 Micro** — a quiet little box, doing real work
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" /> **AI Agent** — Connected to cloud AI providers
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/globe-with-meridians_1f310.png" /> **Tailscale** — every device in a private network, ACLs included
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" /> **OpenCode** — Allows use of opencode within Tailnet VPN and access token

</div>
</div>

<br />

> My AI agents are available **24/7, remotely** — from my phone, a laptop, anywhere. <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />


---

# How it's all wired <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/globe-with-meridians_1f310.png" />

```mermaid
%%{init: {"theme": "dark", "flowchart": {"curve": "basis", "nodeSpacing": 90, "rankSpacing": 110, "diagramPadding": 28, "padding": 28, "subGraphTitleMargin": {"top": 16, "bottom": 16}}} }%%
flowchart LR
    subgraph anywhere["🌍 You — anywhere, 24/7"]
        phone["<span style='font-size:34px'>📱<br/>Phone</span><br/>Telegram"]
        laptop["<span style='font-size:34px'>💻<br/>Laptop</span><br/>devm8-client<br/><br/>Tailscale VPN"]
    end

    subgraph tailnet["🔐 Tailscale VPN — Homelab · Dell Optiplex 3070 Micro"]
        api["<span style='font-size:34px'>devm8</span><br/>API :7887 · bearer token"]
        sandbox["<span style='font-size:26px'>Agent sandbox</span><br/>Claude Code · Kiro · opencode<br/>bubblewrap · ~/.claude RO"]
        repo["code-space<br/>git worktree"]
        api -->|"spawn"| sandbox
        sandbox --> repo
    end

    phone -->|"bot messages"| api
    laptop ==>|"Tailscale"| api
    api -->|"create · move · comment"| jira["<span style='font-size:30px'>🎫<br/> Jira Cloud</span>"]

    classDef you fill:#141920,stroke:#95E6FF,color:#e4e4e7
    classDef vpn fill:#171d17,stroke:#BECF24,color:#e4e4e7
    classDef ext fill:#141414,stroke:#66a1ff,color:#a1a1aa
    class phone,laptop you
    class api,sandbox,repo vpn
    class jira ext
```

<p class="text-zinc-500 text-sm mt-2">
  The only public hops are the bot APIs — everything else rides the tailnet.
</p>

---

# Mistakes I made, so you don't have to <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-head-bandage_1f915.png" />

<br />

<div class="text-lg text-left max-w-3xl mx-auto leading-loose">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/warning_26a0-fe0f.png" /> **Built the weel**: I could clone many parts.

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/wastebasket_1f5d1-fe0f.png" /> **Used bun initialy**: Language is not a bottle-neck anymore, pick wisely
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/office-building_1f3e2.png" /> **Not planning before implementation**: Multi-tenancy, pairing codes and project access are much cheaper on day one

</div>

<br/>

> I do Not regret spending time on devm8, I still use it!


---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

# Demo time!

<br />

<div class="text-2xl font-bold text-zinc-200">
  The real thing — live. No screenshots. <img class="w-7 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/fire_1f525.png" />
</div>

<p class="text-zinc-500 text-lg mt-6">
  A ticket from my phone → agent on it → branch ready — while we talk.
</p>

---
layout: center
class: 'text-center'
---

<div class="grid grid-cols-2 gap-8 px-8 h-48">

<div class="flex items-center justify-center">
  <img class="max-h-full max-w-full rounded-xl border border-zinc-800" src="./public/codex.png" />
</div>

<div class="flex items-center justify-center">
  <img class="max-h-full max-w-full rounded-xl border border-zinc-800" src="./public/chat-gpt.png" />
</div>
</div>

<div class="text-3xl font-black text-zinc-300 tracking-tight mt-10">
  "Same chat interfaces, isn't it?"
</div>

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/model-communication.png" />
</div>
 

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/pie_1f967.png" />

<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  The LLM is ~<span class="text-[#BECF24]">10%</span> of an agentic system
</div>


<div class="text-3xl text-zinc-400 leading-relaxed">
  the harness is the other <strong class="text-[#95E6FF]">90%</strong>
</div>

<br />
<p class="text-zinc-500 text-[12px]">
  Google's <em>The New SDLC With Vibe Coding</em> — conceptual framing
</p>

<!--
Google's 2026 paper

The New SDLC With Vibe Coding 

From Ad-hoc Prompting to Agentic Engineering uses the framing:
Agent = Model + Harness
-->

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

<img class="w-full px-8 rounded-xl" src="./public/why-do-you-need-a-harness.png" />
 
---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/money-with-wings_1f4b8.png" />

<div class="text-3xl font-black text-zinc-300 tracking-tight leading-snug">
  Same prompt to different harnesses<br/>
  uses a <span class="text-[#BECF24]">different amount of tokens</span>
</div>

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/harnesses.png" />
</div>

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/chart-increasing_1f4c8.png" />

<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  Rank <span class="text-zinc-500">30</span> → <span class="text-[#BECF24]">top 5</span>
</div>


<div class="text-2xl text-zinc-400 leading-relaxed mt-4">
  on <a href="https://www.tbench.ai/">Terminal-Bench 2.0</a> for DeepAgents
</div>
<div class="text-xl text-zinc-400 leading-relaxed mt-2">
  with <strong class="text-[#95E6FF]">harness-only changes</strong>, same model
</div>

<div class="flex mt-12 opacity-20 justify-center">
<a class="text-[11px]" hreaf="https://www.vtrivedy.com/posts/improving-deep-agents-with-harness-engineering">Source: Trivedi, “Improving Deep Agents with Harness Engineering” (LangChain, 2026)</a>
</div>

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/credit-card_1f4b3.png" />

<div class="text-3xl text-zinc-400 leading-relaxed">
  at Stripe
</div>

<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  ~<span class="text-[#BECF24]">1,300</span> AI-produced PRs / week
</div>

<div class="text-xl mt-12 text-zinc-400 leading-relaxed">
  Merged after <strong class="text-[#95E6FF]">human review</strong>
</div>


<div class="flex mt-10 opacity-40 justify-center">
<a class="text-sm" hreaf="https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2">Source: Stripe</a>
</div>


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/question-mark_2753.png" />

<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  What model does it use? Or do you use?
</div>

<br />

<div class="text-2xl text-zinc-400 leading-relaxed">
  is increasingly the <a href="https://magnus919.com/2026/06/stop-picking-models.-start-building-harnesses./" class="bold text-[#CF8377]">wrong question</a>
</div>

---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/trophy_1f3c6.png" />

<div class="text-3xl font-black text-zinc-300 tracking-tight leading-snug">
  The advantage shifts from <em>which</em> model you use<br/>
  → to <strong class="text-[#BECF24]">how well you orchestrate it</strong>
</div>


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/crystal-ball_1f52e.png" />
<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  The future is agentic —<br/>
  so at HEMA we're building<br/>
  a <span class="text-[#BECF24]">full harness</span>, just like Claude
</div>

<p class="text-zinc-500 text-lg mt-8">
  Our own complete agent runtime <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" />
</p>

---
layout: center
class: 'text-center'
---

<img class="w-16 mx-auto mb-3" src="https://em-content.zobj.net/source/microsoft-teams/400/lying-face_1f925.png" />

<div class="text-4xl font-black text-zinc-200 tracking-tight">
  No… I lied!
</div>

<div class="text-lg text-zinc-400 mt-3 leading-relaxed">
  We don't have a custom runtime harness — and no plan to build one.
</div>

<div class="text-xl text-zinc-300 mt-5">
  What we <strong class="text-[#95E6FF]">do</strong> have is an <strong class="text-[#BECF24]">organization harness</strong> around an agentic CLI:
</div>

<div class="text-sm text-left max-w-4xl mx-auto mt-7 leading-relaxed">
<div class="grid grid-cols-2 gap-x-12 gap-y-3">

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/memo_1f4dd.png" /> <strong>Specs / intent layer</strong> — structured specs become the primary artifact
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/compass_1f9ed.png" /> <strong>Orchestrator</strong> — reads the spec, decomposes it into tasks
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/hammer-and-wrench_1f6e0-fe0f.png" /> <strong>Workers</strong> — sub-agents implement tasks independently
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/detective_1f575-fe0f.png" /> <strong>Validators</strong> — evaluate the work, never modify it
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/test-tube_1f9ea.png" /> <strong>Evals</strong> — deterministic output + trajectory & tool usage
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/construction_1f6a7.png" /> <strong>Guardrails / hooks</strong> — before tool calls, after edits, before commits
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/bar-chart_1f4ca.png" /> <strong>Observability</strong> — token cost, eval scores, drift
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/counterclockwise-arrows-button_1f504.png" /> <strong>Feedback loop</strong> — failed validation goes back to the workers
</div>

</div>
</div>
---

# The engineering harness, end to end <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/toolbox_1f9f0.png" />

```mermaid
%%{init: {"theme": "dark", "flowchart": {"curve": "basis", "nodeSpacing": 40, "rankSpacing": 80, "diagramPadding": 16}}}%%
flowchart LR
    spec(["📋 SPEC"])
    orch["🎼 ORCHESTRATOR"]
    w1["🔨 worker 1"]
    w2["🔨 worker 2"]
    w3["🔨 worker n"]
    val["🕵️ VALIDATORS"]
    gate{"🚦 GATE"}
    done(["✅ MERGE"])

    spec --> orch
    orch --> w1
    orch --> w2
    orch --> w3
    w1 --> val
    w2 --> val
    w3 --> val
    val --> gate
    gate -->|"pass"| done
    gate -.->|"fail — feedback"| w2

    classDef io fill:#141920,stroke:#BECF24,stroke-width:2px,color:#e4e4e7
    classDef step fill:#141920,stroke:#52525b,stroke-width:1.5px,color:#e4e4e7
    classDef worker fill:#171d17,stroke:#95E6FF,stroke-width:1.5px,color:#e4e4e7
    class spec,done io
    class orch,val,gate step
    class w1,w2,w3 worker
```

<p class="text-zinc-500 text-sm -mt-2 text-left ml-10">
  🕵️ validators evaluate the work — they never modify it
</p>

> One spec in — human-reviewed code out. <strong>The loop is the point.</strong> <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/counterclockwise-arrows-button_1f504.png" />

---

# Two kinds of harness <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" />

<div class="grid grid-cols-2 gap-8 mt-8 text-left">

<div class="border-2 border-[#95E6FF]/40 rounded-2xl p-6 bg-white/[0.02]">
  <div class="text-2xl font-black text-zinc-100 tracking-tight">
    <img class="w-8 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" /> Runtime harness
  </div>
  <p class="text-zinc-400 mt-4 leading-relaxed">
    Everything that makes an LLM capable of operating as a <strong class="text-[#95E6FF]">coding agent</strong>.
  </p>
  <div class="text-sm text-zinc-500 mt-5 leading-relaxed">
    Filesystem · shell · git · tools · context management · skills · sub-agents · permissions · hooks · MCP · compaction
  </div>
  <div class="text-xs text-zinc-600 mt-4">
    Shipped for you by Claude Code, Codex, opencode…
  </div>
</div>

<div class="border-2 border-[#BECF24]/40 rounded-2xl p-6 bg-white/[0.02]">
  <div class="text-2xl font-black text-zinc-100 tracking-tight">
    <img class="w-8 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/building-construction_1f3d7-fe0f.png" /> Engineering harness
  </div>
  <p class="text-zinc-400 mt-4 leading-relaxed">
    Everything that makes agents <strong class="text-[#BECF24]">reliable and scalable</strong> in an organization's development process.
  </p>
  <div class="text-sm text-zinc-500 mt-5 leading-relaxed">
    Specs · orchestration · workers · validators · evals · guardrails · CI · observability · feedback loops
  </div>
  <div class="text-xs text-zinc-600 mt-4">
    The part <em>you</em> build — where your real edge lives <img class="w-4 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />
  </div>
</div>

</div>

<br/>

> Agent = model + runtime harness. <strong>Production agent</strong> = all of it, wrapped in an engineering harness.

---

# Don't rebuild the runtime <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

```mermaid
%%{init: {"theme": "dark", "flowchart": {"curve": "basis", "nodeSpacing": 28, "rankSpacing": 34, "diagramPadding": 16, "subGraphTitleMargin": {"top": 10, "bottom": 12}}}}%%
flowchart LR
    subgraph h ["⚙️ RUNTIME HARNESS — already shipped by your agent CLI"]
        direction TB
        t["🔧 Tool system"] ~~~ f["🗂️ File system"] ~~~ sh["💻 Shell"] ~~~ g["🌿 Git"]
        c["🧠 Context"] ~~~ k["✨ Skills"] ~~~ a["🤖 Sub-agents"] ~~~ ho["🪝 Hooks"]
        p["🔐 Permissions"] ~~~ m["🔌 MCP"] ~~~ cp["🗜️ Compaction"]
    end

    classDef part fill:#171d17,stroke:#3f3f46,stroke-width:1.5px,color:#d4d4d8
    class t,f,sh,g,c,k,a,ho,p,m,cp part
```

<div class="text-center text-2xl font-black text-zinc-200 tracking-tight mt-3">
  🧠 MODEL <span class="text-zinc-500">+</span> ⚙️ this harness <span class="text-zinc-500">=</span> <span class="text-[#BECF24]">🦾 a real coding agent</span>
</div>

<p class="text-zinc-500 text-sm mt-2">
  Spend your energy one layer up — on the <span class="text-[#BECF24]">engineering harness</span> you wrap around it <img class="w-5 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />
</p>

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/party-popper_1f389.png" />

<div class="text-4xl font-black text-zinc-200 tracking-tight">
  What to remember
</div>

<div class="text-lg text-zinc-400 mt-10 leading-loose text-left max-w-2xl mx-auto">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/brain_1f9e0.png" /> The model is ~10% of an agentic system — <strong class="text-[#BECF24]">the harness is the 90%</strong>
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" /> Two harnesses: <strong class="text-[#95E6FF]">runtime</strong> makes an agent, <strong class="text-[#95E6FF]">engineering</strong> makes it production-grade
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/mobile-phone_1f4f1.png" /> Meet your agent where you are — <strong class="text-[#CF8377]">phone, terminal, anywhere</strong>

</div>




---

# Resources <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" />

<br />

<div class="text-sm grid grid-cols-2 gap-x-10 text-left">

<div>

**2026 — fresh**

- **HEMA's HAL (AWS blog):** [From portal hopping to instant answers](https://aws.amazon.com/blogs/machine-learning/from-portal-hopping-to-instant-answers-hemas-journey-with-mcp-and-amazon-bedrock/)
- **OpenAI DevDay 2026 recap:** [openai.com/index/devday-2026-recap](https://openai.com/index/devday-2026-recap)
- **Anthropic 2026 Agentic Coding Trends:** [resources.anthropic.com](https://resources.anthropic.com/2026-agentic-coding-trends-report)
- **AI coding agent adoption (JetBrains):** [blog.jetbrains.com](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026)
- **autoharness — the self-learning harness:** [github.com/tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness)
- **myagents — a portable harness:** [github.com/RashadAnsari/myagents](https://github.com/RashadAnsari/myagents)
- **Awesome harness engineering:** [github.com/ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering)

</div>

<div>

**Foundations**

- **AI transformation:** [dpereira.substack.com — Just Another Transformation](https://dpereira.substack.com/p/just-another-transformation)
- **Harness engineering:** [martinfowler.com](https://martinfowler.com)
- **DeepSeek Harness:** [github.com/deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
- **DeepSeek Harness explained:** [mindstudio.ai/blog/deepseek-harness-agentic-coding](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)
- **Harness deep-dive (video):** [youtu.be/UsfCe5fJK6A](https://youtu.be/UsfCe5fJK6A)
- **Skylos — catch AI mistakes before push:** [github.com/duriantaco/skylos](https://github.com/duriantaco/skylos)

</div>

</div>


---
layout: center
class: 'text-center'
---

# Q&A <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/waving-hand_1f44b.png" />

<br />

<div class="text-2xl font-bold text-zinc-200">

"So… what would you let <em>your</em> agent do?" <img class="w-7 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

</div>

<div class="mt-10 text-lg">

`github.com/sayjeyhi/DevM8` <img class="w-6 inline ml-1" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" />

</div>

<div class="avtar mt-12 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">@sayjeyhi</span>
  </a>
</div>

<!--

Spec-driven development. GitHub Spec Kit gives you a CLI that turns specs into plans into tasks. OpenSpec adds a three-phase state machine for brownfield changes. BMAD-METHOD ships 21 role-based agents across the full SDLC. Superpowers provides a skills framework with subagent test-driven development. These tools treat specs as the primary artifact. None of them connect a spec to an automated eval suite that verifies the agent actually satisfied what the spec asked for.

Multi-agent orchestration. CrewAI gives you role-based crews with a hierarchical manager that delegates and reviews: the closest thing to orchestrator/worker separation in open source. AutoGen and LangGraph provide graph-based and conversation-driven multi-agent patterns. But here is what none of them enforce: the validator must never touch the implementation. That separation is still a discipline you impose, not a constraint the framework guarantees.

Evaluation. DeepEval and Promptfoo give you frameworks for testing LLM output quality, red-teaming, and vulnerability scanning. LangSmith and Braintrust provide hosted eval platforms with LLM-as-judge capabilities. The missing piece: accepting a structured spec and auto-generating a scenario suite that computes per-requirement satisfaction scores. The spec-to-eval bridge (the thing that tells you whether the agent actually built what you asked for) is unbuilt in open source.

Guardrails. NVIDIA NeMo Guardrails and Guardrails AI provide programmable safety rails for conversational AI. These are not coding harness guardrails. There is no open source framework for pre-commit hooks that block hardcoded credentials, no API call allowlist enforced at the tool level, no eval gate that rejects a pull request below a quality threshold. The guardrail layer for agentic coding is empty.

Observability. Langfuse gives you self-hosted tracing with token cost tracking and latency visibility. Arize Phoenix provides drift detection and RAG evaluation. Here is what neither tracks: spec compliance over time. The measurement that tells you when a spec that used to produce good output has started producing bad output, and why.

-->