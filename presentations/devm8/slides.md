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

<!--
Hope not boread and tired...

Should we play an ice breaker game?
-->

---

# WHO AM I?
> Jafar Rezaei **@sayjeyhi**  -    Fullstack Software Engineer @HEMA


<iframe class="mt-2" style="transform: scale(0.5, 0.5) translate(-50%, -50%); position: absolute; left: 10%; right: 50%; " src="https://sayjeyhi.com?v=2" width="160%" height="140%" />


<!--
Software engineer at HEMA

sayjeyhi.com

scroll and have fun there...

I built it before AI getting so powerful.
-->

---


<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/ai-evolve.png" />
</div>


<!--

I still think this is the case,
We are moving so fast and many people are confused!

- Select Model
- Harness engineering 
- Context management
- Guardrail
- etc...
-->

---
layout: center
class: 'text-center'
---


<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

<div class="text-3xl font-black text-zinc-300 tracking-tight leading-snug">
  What was my main pain point when using AI?
</div>

<div class="text-sm font-black text-blue-500 mt-7 tracking-tight leading-snug">
Both Personal and Enterprise
</div>

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/meme-before-after-agents.png" />
</div>

<!--
How many of you have done this?

It is really annoying..

I did, and this happened
-->

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

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" />

# It is soooo over

<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  <span class="text-[#BECF24]">AGI?</span> is this AGI?
</div>

<!--
We are kooked!

We are done!

It is soooo over

Then how it will look like?
what should I do?

I was thinking about these ideas about 1 year ago...
-->

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
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" /> **Git branch management** integrated with **Jira**


</div>

<br />

> <span class="text-sm">At that point, there were no accessible Claude agents <img class="w-5 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/slightly-smiling-face_1f642.png" /><br/>
> Today it's easier — doable via almost all agents, natively.</span>

<!--
I am too lazy.
Many of you are!

Jira UI!
Keep branch names and git messages accurate!
Slack and Teams message...

Annnd the laptop closing issue
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[95%] rounded-xl" src="./public/devm8-main-page.png" />
</div>

<!--
I think it is better to talk with real visuals..

What are we talking about is a cli
This is server cli

It installs on your server (can be your mac as well)

It manages access to your Agent.
Cuz it nees to be live somewhere 
and not die when you close the laptop
-->


---

# devm8-client cli <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] border border-zinc-800" src="./public/devm8-client.png" />
</div>

<div class="absolute bottom-2 inset-x-0 text-center text-sm text-zinc-500">
  TUI
</div>

<!--
Many laptops?

If you have many different systems
you can pair securely and manage your server

Remote cli to allow accessing..

it is using TUI
help you review PR, manage Jira, work remotely

and can CLOSE the laptop... right?!
cuz we have server
-->


---

# devm8-client cli <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] border border-zinc-800" src="./public/demo-devm8-client.png" />
</div>

<div class="absolute bottom-2 inset-x-0 text-center text-sm text-zinc-500">
  TUI
</div>

<!--
The TUI is minimal but does all the jobs
-->

---

# Telegram bot <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />
@Devm8_bot

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] rounded-xl border border-zinc-800" src="./public/demo-devm8-telegram.png" />
</div>

<div class="absolute bottom-2 inset-x-0 text-center text-sm text-zinc-500">
  Agent suggests a branch name → pick a project → one tap: <em>Pull latest · New branch · Project scripts · CLI · OpenCode</em>
</div>

<!--
Telegram bots are more powerful and has better UIs

When you start a session you can start from suggested branch name

Then do maaaany actions!
-->

---

# Telegram bot <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />
@Devm8_bot

<div class="absolute inset-x-0 top-24 bottom-4 flex items-center justify-center">
  <img class="max-h-[88%] max-w-[88%] rounded-xl border border-zinc-800" src="./public/demo-devm8-telegram-2.png" />
</div>

<!--
After when the AI agent is done with job
gives all results and ALL possible actions
-->

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

<br/>

> It is open source now!

<!--
I was for me only!
but showed friends and they asked..
-->

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


<!--
How many of you have homelab?

Mac mini, Old laptop, PC?

We love hardware,
It is real engineering.
Or atleast feels like that.
-->

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

    phone -->|"bot messages"| telegram["<span style='font-size:30px'>✈️<br/>Telegram</span>"]
    api -->|"pulls"| telegram
    laptop ==>|"Tailscale"| api
    api -->|"create · move · comment"| jira["<span style='font-size:30px'>🎫<br/> Jira Cloud</span>"]

    classDef you fill:#141920,stroke:#95E6FF,color:#e4e4e7
    classDef vpn fill:#171d17,stroke:#BECF24,color:#e4e4e7
    classDef ext fill:#141414,stroke:#66a1ff,color:#a1a1aa
    class phone,laptop you
    class api,sandbox,repo vpn
    class jira,telegram ext
```

<p class="text-zinc-500 text-sm mt-2">
  The only public hops are the bot APIs — everything else rides the tailnet.
</p>

<!--
You can read about different setups and you may already have done!

this is more like my setup to demo
-->

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

<!--
Initially I made some mistakes, 
Then fixed many of them

Since AI world is evolving so fast..

Lets have a quick demo

Hope demo gods will allow me doing it
-->

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
  A ticket from cli opencode → agent on it → branch ready — while we talk.
</p>

<!--

This is not all the solution right? 
we have many AI providers solving many of these..
-->

---
layout: center
class: 'text-center'
---

<div class="grid grid-cols-2 gap-8 px-8 h-48">

<div class="flex flex-col items-center justify-center">
  <div class="flex items-center justify-center">
    <img class="max-h-full max-w-full rounded-xl border border-zinc-800" src="./public/chat-gpt.png" />
  </div>
  http://chatgpt.com
</div>
<div class="flex flex-col items-center justify-center">
  <div class="flex items-center justify-center">
    <img class="max-h-full max-w-full rounded-xl border border-zinc-800" src="./public/codex.png" />
  </div>
  Codex
</div>

</div>

<div class="text-3xl font-black text-zinc-300 tracking-tight mt-14">
  Same chat interfaces, isn't it?
</div>

<!--
What happens under the hood?
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/model-communication.png" />
</div>

<!--
AI Model is not Harness 
--> 

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

<img class="w-full px-8 rounded-xl" src="./public/why-do-you-need-a-harness.png" />
 
<!--
What does happen there?

Human loop
Context management

To take best of harness 
-->

---
layout: center
class: 'text-center'
---

<div class="text-3xl font-black text-zinc-200 tracking-tight">
  Lets build a harness?
</div>

<div class="mt-4 flex items-center justify-center">
  <img class="max-h-[42vh] rounded-xl border border-zinc-800" src="./public/dario.png" />
</div>

<p class="text-xl font-bold text-zinc-300 mt-4">
  You are not mentally ill to do so! <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-spiral-eyes_1f635-200d-1f4ab.png" />
</p>

<!--
Dario..

But in some cases it can be useful though

General purpose harnesses are powerful
but in some special cases like maybe finance or sensitive data 


-->



---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

# Demo time!

<br />

<div class="text-2xl font-bold text-zinc-200">
  A basic AI harness to have custom implementation...
</div>

<!--
This is a basic run time harness which does 

manages all AI model can do in your code
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/harnesses.png" />
</div>

<!--
Good thing is we have many options...

Open and closed sources
-->


---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/money-with-wings_1f4b8.png" />

<div class="text-3xl font-black text-zinc-300 tracking-tight leading-snug">
  Same prompt to different harnesses<br/>
  uses a <span class="text-[#BECF24]">different amount of tokens</span>
</div>

<div class="mt-20 text-sm font-black text-blue-200 opacity-30 tracking-tight leading-snug">
  [system prompt]
</div>

<!--

You can try 
But based on what I tried the different harnesses

spend different amount of tokens for the same prompt in same project
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/terminal-bench.png" />
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

<!--
building a good harness arround the models make a real sense
Usually native runtime harnesses are the best

But there are exceptions
-->



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

Here the harness doesn't mean claude only
It has parts of it but not all...

SWARM
Validation 
-->



---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/person-rowing-boat_medium-light-skin-tone_1f6a3-1f3fc_1f3fc.png" />

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

<!--
we know that we can't ignore AI 

The speed of AI is increasing pretty fastttt

We said the same thing in HEMA and decided to move faster
-->

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/crystal-ball_1f52e.png" />
<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  The future is agentic <br/>
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
  Lied!
</div>

<div class="text-lg text-zinc-300 mt-4">
  No custom runtime, we using different <strong>AI Agents</strong><br/>
  What we <strong class="text-[#BECF24]">Do</strong> have is an <strong class="text-[#BECF24]">Organization Harness</strong> around an agentic CLI
</div>

<div class="flex items-center justify-center">
  <img class="max-h-[22vh] mt-12 rounded-xl border border-zinc-800" src="./public/dario.png" />
</div>

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
    Filesystem · shell · tools · context management · skills · sub-agents · permissions · hooks · MCP · compaction
</div>
<div class="text-xs text-zinc-600 mt-4">
    Shipped (in different forms) by Claude Code, Codex, opencode…
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
    The part <em>you</em> build — often where your real edge lives <img class="w-4 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />
</div>
</div>

</div>

<br/>

> Agent = model + runtime harness. <strong>Production agent</strong> = all of it, wrapped in an engineering harness.

<div class="text-xs text-zinc-500 mt-4 text-center">
    The runtime gives the building blocks (hooks, permissions, sub-agents). The engineering harness uses them at team scale.
</div>


---

# What did we want it?

<div class="text-sm text-left max-w-4xl mx-auto leading-relaxed mt-20">
<div class="grid grid-cols-2 gap-x-12 gap-y-3">

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/memo_1f4dd.png" /> <strong>Specs / intent layer</strong> — specs as the primary artifact
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/compass_1f9ed.png" /> <strong>Orchestrator</strong> — spec in, tasks out
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/hammer-and-wrench_1f6e0-fe0f.png" /> <strong>Workers</strong> — sub-agents, in parallel
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/detective_1f575-fe0f.png" /> <strong>Validators</strong> — evaluate, never modify
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/test-tube_1f9ea.png" /> <strong>ACL</strong> — output, trajectory, tool usage
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/construction_1f6a7.png" /> <strong>Guardrails / hooks</strong> — around every tool call
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/bar-chart_1f4ca.png" /> <strong>Observability</strong> — cost, eval scores, drift
</div>

<div>
  <img class="w-5 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/counterclockwise-arrows-button_1f504.png" /> <strong>Feedback loop</strong> — failures flow back to workers
</div>

</div>
</div>


<div class="flex items-center justify-center text-2xl mt-20">
  End to End - Secure - Up to date - Reliable
</div>


---

# Meet <span class="text-[#BECF24]">opa-cli</span> <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />

<div class="text-lg text-zinc-400 mt-3">
  One CLI that controls everything — the whole pipeline, end to end:
</div>

<div class="flex flex-wrap justify-center items-center gap-3 mt-10 text-zinc-200 mt-20">
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">📝 Spec creation</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">🎫 Jira ticket</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">📄 Create PRD</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">🛠️ Implement</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">📏 Guidelines</span>
</div>

<div class="text-center text-zinc-500 text-xl my-4">↓</div>

<div class="flex flex-wrap justify-center items-center gap-3 text-zinc-200">
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">🔑 AWS profiles</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">⚙️ AWS Pipelines</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">🚀 Deploy</span>
  <span class="text-zinc-500">→</span>
  <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-sm">🧪 Test</span>
</div>

<div class="text-zinc-500 text-sm mt-20">
  Every step of the <span class="text-[#BECF24]">organization harness</span> — driven by one command.
</div>

<!--
It doesn't mean we can one-shot tickets
But we do have a pretty high quality results...
-->

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/gem-stone_1f48e.png" />

<div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
  High-quality input <span class="text-[#BECF24]">=</span> high-quality output
</div>

<div class="text-2xl text-zinc-400 mt-6 leading-relaxed">
  + the right <strong class="text-[#95E6FF]">tools</strong> and good <strong class="text-[#95E6FF]">context</strong>, for sure
</div>

<div class="*:text-sm text-left max-w-2xl mx-auto mt-10 leading-loose">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/inbox-tray_1f4e5.png" /> <strong>Inputs</strong> — meeting transcripts, docs, tickets, prior decisions, MCPs built in collaboration to AWS

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


# Don't rebuild the runtime <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

<div class="max-w-4xl mx-auto mt-6 rounded-2xl border-2 border-[#95E6FF]/30 bg-white/[0.02] px-8 py-5">
  <div class="text-center text-sm text-zinc-400 mb-4">
    ⚙️ RUNTIME HARNESS — already shipped by your agent CLI
  </div>
  <div class="flex flex-wrap justify-center gap-3">
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🔧 Tool system</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🗂️ File system</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">💻 Shell</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🌿 Git</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🧠 Context</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">✨ Skills</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🤖 Sub-agents</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🪝 Hooks</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🔐 Permissions</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🔌 MCP</span>
    <span class="rounded-lg border border-zinc-700 bg-[#171d17] px-4 py-2 text-zinc-200">🗜️ Compaction</span>
  </div>
</div>

<div class="text-center text-2xl font-black text-zinc-200 tracking-tight mt-3">
  🧠 MODEL <span class="text-zinc-500">+</span> ⚙️ this harness <span class="text-zinc-500">=</span> <span class="text-[#BECF24]">🦾 a real coding agent</span>
</div>

<p class="text-zinc-500 text-sm mt-2">
  Spend your energy one layer up — on the <span class="text-[#BECF24]">engineering harness</span> you wrap around it <img class="w-5 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />
</p>



---

# Resources <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" />

<br />

<div class="text-sm grid grid-cols-2 gap-x-10 text-left">

<div>

## 2026 — fresh

<br/>

- **HEMA's HAL (AWS blog):** [From portal hopping to instant answers](https://aws.amazon.com/blogs/machine-learning/from-portal-hopping-to-instant-answers-hemas-journey-with-mcp-and-amazon-bedrock/)
- **OpenAI DevDay 2026 recap:** [openai.com/index/devday-2026-recap](https://openai.com/index/devday-2026-recap)
- **Anthropic 2026 Agentic Coding Trends:** [resources.anthropic.com](https://resources.anthropic.com/2026-agentic-coding-trends-report)
- **AI coding agent adoption (JetBrains):** [blog.jetbrains.com](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026)
- **autoharness — the self-learning harness:** [github.com/tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness)
- **myagents — a portable harness:** [github.com/RashadAnsari/myagents](https://github.com/RashadAnsari/myagents)
- **Awesome harness engineering:** [github.com/ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering)

</div>

<div>

## Foundations

<br/>

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

<div class="flex items-center justify-center">
<img class="w-30 mb-12" src="https://em-content.zobj.net/source/microsoft-teams/400/waving-hand_1f44b.png" />
</div>


# Thank you! 

<br />


<div class="mt-10 text-lg flex gap-12">
<a href="github.com/sayjeyhi" >
<img class="w-4 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" /> github.com/sayjeyhi
</a>
<a href="https://sayjeyhi.com">
<img class="w-4 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" /> sayjeyhi.com
</a>
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