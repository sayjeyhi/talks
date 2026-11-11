---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Oh My Harness
  Ultimate usage of harnesses
drawings:
  persist: false
css: unocss
colorSchema: dark
mermaid:
  securityLevel: loose
  look: classic
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
  fontSize: 18
  themeVariables:
    darkMode: true
    background: "transparent"
    primaryColor: "#1c222b"
    primaryTextColor: "#f4f4f5"
    primaryBorderColor: "#BECF24"
    secondaryColor: "#171d17"
    tertiaryColor: "#141920"
    lineColor: "#95E6FF"
    textColor: "#e4e4e7"
    clusterBkg: "#151a21"
    clusterBorder: "#3a4250"
    edgeLabelBackground: "#0f1115"
    noteBkgColor: "#1c222b"
    noteBorderColor: "#95E6FF"
  flowchart:
    curve: basis
    htmlLabels: true
    nodeSpacing: 60
    rankSpacing: 80
    padding: 16
addons:
  - slidev-addon-excalidraw
---

# Oh My <span class="text-[#BECF24]">Harness</span>

Ultimate usage of harnesses


<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="avtar mt-20 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2 decoration-none" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <div class="text-gray-400 text-sm">November 2026</div>
    <div class="text-gray-400 text-sm">GoTechWorld Bucharest</div>
  </a>
</div>

<!--
Hope not boread and tired...

Yes, this a bit of click baiting title.

But I will try to give real and useful information
-->

---

# WHO AM I?
> Jafar Rezaei **@sayjeyhi**  -    Fullstack Software Engineer @HEMA


<iframe class="mt-2" style="transform: scale(0.5, 0.5) translate(-50%, -50%); position: absolute; left: 10%; right: 50%; " src="https://sayjeyhi.com?v=2" width="160%" height="140%" />

<img class="absolute bottom-4 right-25 z-50 w-28 rounded-lg p-1" src="./public/sayjeyhi.com-qr.png" />

<a href="https://sayjeyhi.com" class="absolute bottom-3 right-24.5 z-50 text-blue-400 text-xs font-bold decoration-none">https://sayjeyhi.com</a>


<!--
Software engineer at HEMA

sayjeyhi.com

scroll and have fun there...

I built it before AI getting so powerful.
-->


---

<div class="absolute inset-0 flex items-center justify-center flex-col">
  <h1 class="mb-0">Raise your hand if you have done this before?</h1>
  <img class="max-h-[80%] max-w-[94%] rounded-xl" src="./public/meme-before-after-agents.png" />
</div>

<!--
Before we start...
How many of you have done this?
Raise your hand if you have ever done this

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

<!--
I am not that much Clumsy!
-->

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

<div class="text-xl text-zinc-400 mb-4 tracking-tight leading-snug">
  Real story, it was late 2025 and I was like:
</div>

<div class="text-3xl font-black text-zinc-300 tracking-tight leading-snug">
  What was my main pain point when using AI?
</div>

<div class="text-sm font-black text-blue-500 mt-7 tracking-tight leading-snug">
Both Personal and Enterprise
</div>

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

<div class="absolute inset-0 overflow-hidden bg-black">
  <div class="absolute top-5 left-8 z-50 flex items-center gap-3">
    <h1 class="m-0 text-[30px]!">DevM8 in practice</h1>
    <img class="w-7 h-7" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />
  </div>

  <div class="absolute top-7 right-8 z-50 text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
    server · terminal · Telegram
  </div>

  <div class="absolute left-[3%] top-[16%] w-[47%] z-10 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl" style="transform: rotate(-0.8deg)">
    <img class="block w-full" src="./public/devm8-main-page.png" />
    <div class="absolute left-3 bottom-3 rounded-md border border-[#95E6FF]/40 bg-black/85 px-3 py-1 text-[10px] font-bold tracking-wider text-[#95E6FF]">SERVER CLI</div>
  </div>

  <div class="absolute right-[3%] top-[15%] w-[47%] z-20 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl" style="transform: rotate(0.9deg)">
    <img class="block w-full" src="./public/devm8-client.png" />
    <div class="absolute right-3 bottom-3 rounded-md border border-[#BECF24]/40 bg-black/85 px-3 py-1 text-[10px] font-bold tracking-wider text-[#BECF24]">devm8-client cli · TUI</div>
  </div>

  <div class="absolute left-[4%] top-[49%] w-[34%] z-30 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl" style="transform: rotate(-1.2deg)">
    <img class="block w-full" src="./public/demo-devm8-client.png" />
    <div class="absolute left-3 top-3 rounded-md border border-[#BECF24]/40 bg-black/85 px-3 py-1 text-[10px] font-bold tracking-wider text-[#BECF24]">devm8-client cli · TUI</div>
  </div>

  <div class="absolute left-[36%] top-[43%] w-[35%] z-40 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl" style="transform: rotate(1.3deg)">
    <img class="block w-full" src="./public/demo-devm8-telegram.png" />
    <div class="absolute left-3 top-3 rounded-md border border-[#CF8377]/40 bg-black/85 px-3 py-1 text-[10px] font-bold tracking-wider text-[#CF8377]">Telegram bot · @Devm8_bot</div>
  </div>

  <div class="absolute right-[3%] top-[59%] w-[31%] z-45 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl" style="transform: rotate(-1deg)">
    <img class="block w-full" src="./public/demo-devm8-telegram-2.png" />
    <div class="absolute right-3 top-3 rounded-md border border-[#CF8377]/40 bg-black/85 px-3 py-1 text-[10px] font-bold tracking-wider text-[#CF8377]">Telegram bot · @Devm8_bot</div>
  </div>

  <div class="absolute bottom-3 left-[39%] z-50 rounded-full border border-zinc-700 bg-black/90 px-4 py-1.5 text-[10px] text-zinc-400 shadow-xl">
    One agent, every channel, shared history
  </div>
</div>

<!--
This is the visual tour in one frame: the server CLI, the paired client TUI, and the same agent flow in Telegram.

The server stays alive when the laptop closes. Different systems can pair securely through devm8-client. The TUI supports remote work, pull-request review, and Jira. Telegram can start from a suggested branch, select a project, run project actions, and return the final result with the available next actions.
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

# Where does it live? A homelab <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/house_1f3e0.png" />

<br />

<div class="grid grid-cols-3 gap-5 mt-4">

<div class="flex items-center justify-center">
<img class="max-w-1/2 block" src="./public/dell-optiplex.png" />
</div>

<div class="text-lg col-span-2 gap-4 text-left max-w-3xl mx-auto leading-loose">

- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/desktop-computer_1f5a5-fe0f.png" /> **Dell Optiplex 3070 Micro** — a quiet little box, doing real work
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" /> **AI Agent** — Connected to cloud AI providers
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/globe-with-meridians_1f310.png" /> **Tailscale** — every device in a private network, ACLs included
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/cloud_2601-fe0f.png" /> **OpenCode** — Allows use of opencode within Tailnet VPN 
- <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/star_2b50.png" /> **T3 Server** — An ADE server

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
        phone("<span style='font-size:34px'>📱<br/>Phone</span><br/>Telegram")
        laptop("<span style='font-size:34px'>💻<br/>Laptop</span><br/>devm8-client<br/><br/>Tailscale VPN")
    end

    subgraph tailnet["🔐 Tailscale VPN — Homelab · Dell Optiplex 3070 Micro"]
        api("<span style='font-size:34px'>devm8</span><br/>API :7887 · bearer token")
        sandbox("<span style='font-size:26px'>Agent sandbox</span><br/>Claude Code · Kiro · opencode<br/>bubblewrap · ~/.claude RO")
        repo("code-space<br/>git worktree")
        api -->|"spawn"| sandbox
        sandbox --> repo
    end

    phone -->|"bot messages"| telegram("<span style='font-size:30px'>✈️<br/>Telegram</span>")
    api -->|"pulls"| telegram
    laptop ==>|"Tailscale"| api
    api -->|"create · move · comment"| jira("<span style='font-size:30px'>🎫<br/> Jira Cloud</span>")

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
class: 'text-center'
---

<img class="w-24 mx-auto mb-8 mt-12" src="https://em-content.zobj.net/source/microsoft-teams/400/confused-face_1f615.png" />


<div class="absolute inset-0 flex mt-12 items-center justify-center">
  <div class="dg">
<h1 class="mt-20">Am I dumb moment?</h1>
<div class="dg-arrow relative -bottom-12 z-0" style="--c:#95E6FF;width:100%;flex:none"></div>
<div class="dg-row" style="align-items:flex-start;gap:10px">
<div class="dg-col" style="flex:1;--c:#CF8377"><div class="dg-dot"></div><div class="dg-name">Super cool!</div><div class="dg-note">This is fantastic!</div></div>
<div class="dg-col" style="flex:1;--c:#ffd8a8"></div>
<div class="dg-col" style="flex:1;--c:#fff3bf"><div class="dg-dot"></div><div class="dg-name">Does the job!</div></div>
<div class="dg-col" style="flex:1;--c:#95E6FF"></div>
<div class="dg-col mr-20" style="flex:1;--c:#BECF24"><div class="dg-dot"></div><div class="dg-name">Wait... what?</div><div class="dg-note">This is dumb!</div></div>
</div>
</div>
</div>

<!--
After a little bit of working with devm8 
First I said yeah this is fantastic.
Then it was just working

Then I said this is Dumb!

Let me explain why...
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

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1 >An LLM only produces text</h1>
<div class="dg-row">
<div class="dg-card" style="--c:#95E6FF"><div class="dg-name">Prompt</div><div class="dg-note">text in</div></div>
<div class="dg-arrow" style="--c:#95E6FF"></div>
<div class="dg-card circle fill" style="--c:#d0bfff"><div class="dg-name">LLM</div></div>
<div class="dg-arrow" style="--c:#BECF24"></div>
<div class="dg-card" style="--c:#BECF24"><div class="dg-name">Response</div><div class="dg-note">text out</div></div>
</div>
<div class="dg-row" style="gap:16px">
<div class="dg-card dg-dashed" style="--c:#CF8377;flex:none;padding:8px 18px;border-radius:12px"><div class="dg-note" style="color:#CF8377">no files changed</div></div>
<div class="dg-card dg-dashed" style="--c:#CF8377;flex:none;padding:8px 18px;border-radius:12px"><div class="dg-note" style="color:#CF8377">no commands run</div></div>
</div>
</div>
</div>

<!--
Strip away the product framing and an LLM has one primitive: it consumes text and emits text. A response alone does not read a repository, edit a file, or run a command.
-->


---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/light-bulb_1f4a1.png" />


# The model supplies decisions. 
# The harness supplies consequences.

---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1>The empty kitchen</h1>
<div class="dg-row">
<div class="dg-card circle fill" style="--c:#d0bfff"><div class="dg-name">Smart chef</div><div class="dg-note">knows the recipe</div></div>
<div class="dg-arrow" style="--c:#a1a1aa"></div>
<div class="dg-card dg-dashed" style="--c:#CF8377;flex:0 0 260px;height:200px"><div class="dg-name">Empty</div><div class="dg-note">no knife<br>no pan<br>no stove</div></div>
<div class="dg-arrow" style="--c:#BECF24"></div>
<div class="dg-card fill" style="--c:#BECF24;flex:0 0 150px"><div class="dg-name">No dinner</div></div>
</div>
<div class="dg-caption">Capability without tools cannot become action.</div>
</div>
</div>

<!--
Use the kitchen analogy from the transcript. A brilliant chef in an empty room can describe dinner but cannot cook it. Capability needs tools and an environment where actions have consequences.
-->


---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

# Demo time!

<br />

<div class="text-2xl font-bold text-zinc-200">
  Let's build a simple kitchen!
</div>

<!--
This is a basic run time harness which does 

manages all AI model can do in your code
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


<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

# Open weight vs Close weight models

---



<div class="absolute inset-0 flex flex-col items-center justify-center px-16">

<h1 class="mb-10">Open weights ≠ open source</h1>

<div class="grid grid-cols-2 gap-7 w-full max-w-5xl">

  <div class="rounded-2xl border border-[#95E6FF]/45 bg-[#95E6FF]/8 px-8 py-7 text-left">
    <div class="font-bold text-2xl text-[#95E6FF]">Open weights</div>
    <div class="font-mono text-sm text-zinc-400 mt-1 mb-5">download · run · fine-tune</div>
    <ul class="list-none p-0 m-0">
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200"><span class="text-[#BECF24] font-bold">✓</span> Trained parameters (weights, biases)</li>
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200 border-t border-white/6"><span class="text-[#CF8377] font-bold">✕</span> Training code</li>
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200 border-t border-white/6"><span class="text-[#CF8377] font-bold">✕</span> Full training data</li>
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200 border-t border-white/6"><span class="text-[#CF8377] font-bold">✕</span> Reproducible build recipe</li>
    </ul>
    <div class="mt-5 text-sm font-semibold text-[#95E6FF]">Llama · DeepSeek · Qwen</div>
  </div>

  <div class="rounded-2xl border border-[#BECF24]/45 bg-[#BECF24]/8 px-8 py-7 text-left">
    <div class="font-bold text-2xl text-[#BECF24]">Open source AI</div>
    <div class="font-mono text-sm text-zinc-400 mt-1 mb-5">reproduce · audit (OSI standard)</div>
    <ul class="list-none p-0 m-0">
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200"><span class="text-[#BECF24] font-bold">✓</span> Trained parameters (weights, biases)</li>
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200 border-t border-white/6"><span class="text-[#BECF24] font-bold">✓</span> Training code</li>
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200 border-t border-white/6"><span class="text-[#BECF24] font-bold">✓</span> Data transparency</li>
      <li class="flex items-start gap-3 py-2 text-base text-zinc-200 border-t border-white/6"><span class="text-[#BECF24] font-bold">✓</span> Rebuild an equivalent model from scratch</li>
    </ul>
    <div class="mt-5 text-sm font-semibold text-[#BECF24]">OLMo (much rarer)</div>
  </div>

</div>

<div class="text-sm text-zinc-500 mt-9">Open weights give you the model. Open source gives you the model plus the recipe to rebuild it.</div>

</div>

<!--
An open-weight model is not the same as an open-source model.

Open weights: you get the trained parameters so you can download, run, and fine-tune the model. You do not get the training code, the full training data, or the recipe used to build it. Examples: Llama, DeepSeek, Qwen.

Open source AI: under standards like the Open Source Initiative (OSI), true open source gives you the weights plus the training code, meaningful data transparency, and the ability to reproduce or audit a substantially equivalent model from scratch. Examples meeting the full bar are much rarer, such as OLMo.
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/terminal-bench.png" />
</div>

---


<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1>Terminal bench-4.1 pareto</h1>
  <img class="max-h-[82%] max-w-[90%] rounded-xl" src="./public/terminal-bench-4.1-pareto.png" />
</div>

---

<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1>SWE bench Table</h1>
  <img class="max-h-[82%] max-w-[90%] rounded-xl" src="./public/swe-bench-table.png" />
</div>

---

<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1>SWE bench Chart</h1>
  <img class="max-h-[82%] max-w-[90%] rounded-xl" src="./public/swe-bench-chart-2026-11-09.png" />
</div>

---


<div class="absolute inset-0 flex items-center justify-center flex-col">

  <img class="max-h-[82%] max-w-[90%] rounded-xl" src="./public/6021588147096981483.png" />
</div>

---


<div class="absolute inset-0 flex flex-col items-center justify-center px-16">

<div class="flex items-center justify-between w-full max-w-5xl mb-8">
  <h1 class="m-0">The harness changes the result</h1>
  <div class="rounded-lg border border-[#95E6FF]/50 px-4 py-2 text-sm font-bold tracking-wider text-[#95E6FF]">SAME MODEL ≠ SAME SYSTEM</div>
</div>

<div class="hb-grid">
  <div class="hb-label" style="--c:#95E6FF">Coding<br>tasks</div>
  <div class="hb-card" style="--c:#95E6FF"><div class="hb-num">SWE-bench</div><div class="hb-sub">resolve real GitHub issues</div></div>
  <div class="hb-card" style="--c:#95E6FF"><div class="hb-num">Terminal-Bench</div><div class="hb-sub">terminal engineering tasks</div></div>
  <div class="hb-card" style="--c:#95E6FF"><div class="hb-num">DeepSWE</div><div class="hb-sub">agentic software fixes</div></div>

  <div class="hb-label" style="--c:#BECF24">Tool use<br>& agents</div>
  <div class="hb-card" style="--c:#BECF24"><div class="hb-num">T-bench</div><div class="hb-sub">tools in live conversation</div></div>
  <div class="hb-card" style="--c:#BECF24"><div class="hb-num">HAL</div><div class="hb-sub">cost-aware, cross-scaffold</div></div>
  <div class="hb-card" style="--c:#BECF24"><div class="hb-num">GAIA</div><div class="hb-sub">general assistant tasks</div></div>

  <div class="hb-label" style="--c:#CF8377">Harness<br>comparison</div>
  <div class="hb-card" style="--c:#CF8377"><div class="hb-num">Harness Leaderboard</div><div class="hb-sub">which harness per model</div></div>
  <div class="hb-card" style="--c:#CF8377"><div class="hb-num">AA Coding Agents</div><div class="hb-sub">cost, tokens, run time</div></div>
  <div class="hb-card" style="--c:#CF8377"><div class="hb-num">Bench Harness</div><div class="hb-sub">CC, Codex, OpenCode runs</div></div>
</div>

<div class="text-sm text-zinc-500 mt-8">Same model, different harness: score swings rival the gap between frontier models.</div>

</div>

<!--
These are real benchmarking and leaderboard tools for agents and their harnesses. They measure different things, so compare each tool's harness effect, not raw scores across tools.

Coding tasks:
- SWE-bench: resolve real GitHub issues; has several variants (Verified, Pro, Multilingual, Live). https://www.swebench.com
- Terminal-Bench: terminal-based engineering tasks, end to end. https://www.vals.ai/benchmarks/terminal-bench-4
- DeepSWE: agentic software-fix benchmark used in harness comparisons.

Tool use and agents:
- tau-bench / tau2-bench (Sierra): dynamic user conversations with domain API tools and policies. https://github.com/sierra-research/tau-bench
- HAL, Holistic Agent Leaderboard (Princeton): standardized, cost-aware, third-party evaluation across models, scaffolds, and benchmarks. https://hal.cs.princeton.edu
- GAIA: general assistant tasks requiring tool use and reasoning.

Harness comparison:
- Harness Leaderboard (Joel Niklaus, HuggingFace): answers "for model X, which coding-agent harness should I run?" https://huggingface.co/spaces/joelniklaus/harness-leaderboard
- Artificial Analysis Coding Agents: real-world cost, token usage, and execution time across agents, models, and settings. https://artificialanalysis.ai/agents/coding-agents
- Bench Harness: public leaderboard for Claude Code, Codex, OpenCode, and others across coding, terminal, browser, and tool-use benchmarks. https://benchharness.dev

Key point: same model under a different scaffold can swing scores by roughly 17 to 22 points, larger than the gap between most frontier models.
-->

---
layout: center
---

<div class="grid grid-cols-2 gap-8 items-center h-full px-8">

<div class="flex items-center justify-center">
  <div class="text-6xl font-black text-[#BECF24] tracking-tight">There is a Fact!</div>
</div>

<div class="flex items-center justify-center">
  <img class="max-h-[60vh] max-w-full bg-white p-2" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExajkwaHdxYzR6andkajhuaDI5eGhxZm14NzRnMDhpYWNndGUxZndkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zMi1U2B6zOY1VoQgVG/giphy.webp" />
</div>

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
But still!

building a good harness arround the models make a real sense

Based on Terminal Bench results in 2026

Usually native runtime harnesses are the best
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

Harness and Agentic systems arround it
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

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1 class="pr-25">What deserves your attention?</h1>
<div class="dg-row">
<div class="dg-col" style="flex:1;gap:8px">
<div class="dg-card fill" style="--c:#BECF24;width:100%"><div class="dg-name">Product</div></div>
<div class="dg-card fill" style="--c:#d0bfff;width:90%"><div class="dg-name">Engineers</div></div>
<div class="dg-card fill" style="--c:#95E6FF;width:80%"><div class="dg-name">Architecture</div></div>
<div class="dg-card fill" style="--c:#c3fae8;width:70%"><div class="dg-name">Languages</div></div>
<div class="dg-card fill" style="--c:#fff3bf;width:60%"><div class="dg-name">Frameworks</div></div>
<div class="dg-card fill" style="--c:#ffd8a8;width:50%"><div class="dg-name">Algorithms</div></div>
<div class="dg-card fill" style="--c:#CF8377;width:40%"><div class="dg-name">Tabs vs spaces</div></div>
</div>
<div class="dg-col" style="gap:8px"><div class="dg-arrow v up" style="--c:#BECF24;height:300px"></div><div class="dg-note" style="color:#BECF24">more outcome</div></div>
</div>
</div>
</div>

<!--
Developers care about many layers. Tabs and spaces sit near the bottom. Product outcomes sit at the top. Our attention should follow the impact, not our attachment to a tool.
-->


---
layout: center
class: 'text-center'
---

# Harnesses matter.
# Then they will disappear.

<div class="max-w-3xl mx-auto mt-10 text-2xl text-zinc-300 leading-relaxed">
  The harness still changes result quality.<br/>
  But harnesses are <span class="text-[#95E6FF]">catching up fast</span> to each other.
</div>

<div class="mt-12 text-sm text-zinc-500">The harness matters today. As they converge, which one you pick matters less.</div>

<!--
We said LLM is 10%
And Harness changes the results quality

Yes,
But I believe and you might also noticed,
they are catching up pretty quick!
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1 >Abstraction moves the line</h1>
<div class="dg-caption" style="--c:#95E6FF">the work moves up a layer</div>
<div class="dg-arrow relative -bottom-10 z-0" style="--c:#95E6FF;width:100%;flex:none"></div>
<div class="dg-row" style="align-items:flex-start;gap:10px">
<div class="dg-col -ml-10" style="flex:1;--c:#CF8377"><div class="dg-dot"></div><div class="dg-name">Vim/Neo Vim</div><div class="dg-note">party tricks</div></div>
<div class="dg-col" style="flex:1;--c:#ffd8a8"><div class="dg-dot"></div><div class="dg-name">Editors</div></div>


<div class="dg-col" style="flex:1;--c:#95E6FF"><div class="dg-dot"></div><div class="dg-name">Multi-Terminals</div><div class="dg-note">tmux, cmux, ...</div></div>

<div class="dg-col" style="flex:1;--c:#fff3bf"><div class="dg-dot"></div><div class="dg-name">Harnesses</div><div class="dg-note">simple harness</div></div>


<div class="dg-col" style="flex:1;--c:#BECF24"><div class="dg-dot"></div><div class="dg-name">Agents</div><div class="dg-note text-center">gurded agentic envs</div></div>
</div>
</div>
</div>

<!--
We are living in a live world.

Abstraction is not waiting for us to capture!

We must adopt!
And we need to stay curios and question the basics.
-->

---
layout: center
---

<div class="grid grid-cols-2 gap-10 items-center h-full px-8">

<div class="flex items-center justify-center">
  <img class="max-h-[70vh] max-w-full rounded-xl" src="./public/hema.png" />
</div>

<div class="text-left">
  <img class="w-20 mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/crystal-ball_1f52e.png" />
  <div class="text-4xl font-black text-zinc-200 tracking-tight leading-snug">
    The future is agentic <br/>
    so at <span class="bg-[#EE0000] px-2">HEMA</span> we're building a <span class="text-[#BECF24]">full harness</span>, just like Claude
  </div>
</div>

</div>

<p class="text-zinc-500 text-lg text-center pt-5">
  Our own complete agent runtime <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/robot_1f916.png" />
</p>

<!--
A big retail company in west NL, BE, DE, FR.

We have more than 10K employees
-->

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
  What we <strong class="text-[#BECF24]">Do</strong> did is <strong class="text-[#BECF24]">A Harness Engineering</strong> around an agentic CLI
</div>

<div class="flex items-center justify-center">
  <img class="max-h-[22vh] mt-12 rounded-xl border border-zinc-800" src="./public/dario.png" />
</div>

---

# Two kinds of harness <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" />

<div class="grid grid-cols-2 gap-8 mt-8 text-left">

<div class="border-2 border-[#95E6FF]/40 rounded-2xl p-6 bg-white/[0.02]">
<div class="text-2xl font-black text-zinc-100 tracking-tight">
<img class="w-8 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" /> Harness
</div>
<p class="text-zinc-400 mt-4 leading-relaxed">
    What makes an LLM a <strong class="text-[#95E6FF]">coding agent</strong>.
</p>
<div class="text-sm text-zinc-500 mt-5 leading-relaxed">
    Shell · tools · context · skills · sub-agents · permissions · hooks · MCP · compaction
</div>
<div class="text-xs text-zinc-600 mt-4">
    Shipped by Claude Code, Codex, opencode…
</div>
</div>

<div class="border-2 border-[#BECF24]/40 rounded-2xl p-6 bg-white/[0.02]">
<div class="text-2xl font-black text-zinc-100 tracking-tight">
<img class="w-8 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/building-construction_1f3d7-fe0f.png" /> Engineering harness
</div>
<p class="text-zinc-400 mt-4 leading-relaxed">
    What makes agents <strong class="text-[#BECF24]">reliable and scalable</strong> across a team.
</p>
<div class="text-sm text-zinc-500 mt-5 leading-relaxed">
    Specs · orchestration · workers · validators · evals · guardrails · CI · observability
</div>
<div class="text-xs text-zinc-600 mt-4">
    The part <em>you</em> build, where your edge lives <img class="w-4 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />
</div>
</div>

</div>

<br/>

> Agent = model + runtime harness. <strong>Production agent</strong> wraps that in an engineering harness.

<div class="text-xs text-zinc-500 mt-4 text-center">
    The runtime gives the building blocks. The engineering harness uses them at team scale.
</div>

<!--
The Harnesses are Open for us to help them work better.

So we need to do some lets say engineering arround the harness to use it at its most capability
-->

---
class: slide-bg-121212
---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[100%] max-w-[94%] rounded-xl" src="./public/harness-planes.png" />
</div>

<!--
Take the most from LLM and harness
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1 >Agent is LLM + harness</h1>
<br/>
<div class="dg-row" style="gap:24px">
<div class="dg-card circle" style="--c:#95E6FF"><div class="dg-name">LLM</div><div class="dg-note">reason + text</div></div>
<div class="dg-op">+</div>
<div class="dg-card circle" style="--c:#d0bfff"><div class="dg-name">Harness</div><div class="dg-note">tools + loop</div></div>
<div class="dg-op">=</div>
<div class="rounded-2xl text-center border-2 border-color-[#BECF24] p-10" style="--c:#BECF24"><div class="dg-name mb-8 text-4xl">Agent</div><div class="dg-note">completes tasks</div></div>
</div>
</div>
</div>

<!--
This is the compact definition: a model combined with a harness becomes an agent. The model supplies reasoning and text. The harness supplies tools, context, a system prompt, and the execution loop.
-->

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

# so, How do you use AI today?


<div class="text-xl font-black text-zinc-600 tracking-tight">
  The answer here is valuable
</div>

<!--
I think this is a really valid question 
and people working in big tech should share more and you need to also listen to them..
-->

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
  Every step of the <span class="text-[#BECF24]">organization agent</span> driven by one command.
</div>

<!--
This is not another Ticket to PR skill

and It doesn't mean we can one-shot tickets
But we do have a pretty high quality results...

It is more like a state machine, telling harness what can it do in each state...
-->

---
class: slide-bg-121212
---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[100%] max-w-[94%] rounded-xl" src="./public/opc-in-harnesses.png" />
</div>


---
layout: center
class: 'text-center'
---

# Is that where we stop?

<img class="w-full mx-auto mt-6" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejhscDdzOTloODEzOXBkbGMxeWRpNGE3MWZzcTI2N2dzaHRvdHNvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/spfi6nabVuq5y/200.webp" />

<!--
My problems are not yet solved with this.

I don't want to pay lots of money to just rent a computer on cloud.

Still need to open different editors, terminals. manage subs, git, PR etc.
-->

---



<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1 class="pr-40">From IDE to ADE</h1>
<div class="dg-row">
<div class="dg-col" style="flex:1;gap:12px">
<div class="dg-card fill" style="--c:#BECF24;width:72%"><div class="dg-name">Agentic development environment</div></div>
<div class="dg-card" style="--c:#95E6FF;width:84%"><div class="dg-name">Interfaces</div></div>
<div class="dg-card" style="--c:#d0bfff;width:96%"><div class="dg-name">Harnesses</div></div>
<div class="dg-card" style="--c:#52525b;width:100%"><div class="dg-name" style="color:#f4f4f5">Models + tools</div></div>
</div>
<div class="dg-col" style="gap:8px"><div class="dg-arrow v up" style="--c:#BECF24;height:260px"></div><div class="dg-note" style="color:#BECF24">attention moves up</div></div>
</div>
</div>
</div>

<!--
The transcript names T3 Code an Agentic Development Environment, or ADE. It sits above interfaces and harnesses as the place where humans manage agentic work. Like IDEs, ADEs may become less visible as the next abstraction arrives.
-->

---

<div class="absolute inset-0 flex items-center justify-center bg-black">
  <img class="w-full h-full object-contain" src="./public/t3code-homepage.png" />
</div>

<!--
This was the closest solution for my problems!
-->

---
layout: center
class: 'text-center'
---

<div class="flex items-center justify-center gap-12">
  <img class="w-64 h-64 rounded-[2.5rem]" src="./public/t3code-icon.png" />
  <div class="text-left max-w-3xl">
    <h1 class="text-6xl!">T3 Code</h1>
    <div class="text-3xl font-black text-zinc-200 mt-5 leading-tight">One place to run, watch, and coordinate coding agents.</div>
    <div class="text-zinc-500 mt-7">Open source. Your machines. Your provider subscriptions.</div>
  </div>
</div>


---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1>T3 Code coordinates harnesses</h1>
<div class="dg-row">
<div class="flex flex-col items-center justify-center gap-2" style="--c:#95E6FF">
<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#95E6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
<div class="dg-name">Human</div>
</div>
<div class="dg-arrow" style="--c:#95E6FF"></div>
<div class="dg-card fill mr-10" style="--c:#BECF24;flex:0 0 230px"><div class="dg-name">T3 Code</div><div class="dg-note">ADE + MCP coordination</div></div>
<div class="dg-col" style="flex:0 0 auto;gap:14px">
<div class="dg-row" style="gap:12px;width:auto"><div class="dg-arrow" style="--c:#d0bfff;flex:0 0 40px"></div><div class="dg-card fill" style="--c:#d0bfff;flex:0 0 220px"><div class="dg-name">Claude Code</div></div></div>
<div class="dg-row" style="gap:12px;width:auto"><div class="dg-arrow" style="--c:#95E6FF;flex:0 0 40px"></div><div class="dg-card fill" style="--c:#95E6FF;flex:0 0 220px"><div class="dg-name">Codex</div></div></div>
<div class="dg-row" style="gap:12px;width:auto"><div class="dg-arrow" style="--c:#ffd8a8;flex:0 0 40px"></div><div class="dg-card fill" style="--c:#ffd8a8;flex:0 0 220px"><div class="dg-name">Other harness</div></div></div>
</div>
</div>
<div class="dg-caption">one interface, native harness behavior</div>
</div>
</div>

<!--
T3 Code does not replace every harness. Its interface and MCP layer coordinate them. Claude Code keeps its own skills and plugins. Codex keeps its own behavior. T3 Code brokers work and history across them.
-->


---

<div class="absolute inset-0 flex items-center justify-center bg-black">
  <img class="max-h-[94%] max-w-[96%] relative top-[-16px] rounded-xl border border-zinc-800" src="./public/t3code-app-desktop.webp" />
</div>

<div class="absolute bottom-1 text-center w-full right-5 text-[10px] text-zinc-500">Official product screenshot from <a href="https://t3.codes">t3.codes</a></div>

<!--
Orient the audience. The left side is the thread inbox, the center is the active conversation, and the right side holds the project, Git, and sub-agent context.
-->

---

# One thread can become a team

<div class="mt-5 rounded-2xl overflow-hidden border border-zinc-800 h-[70%]">
  <img class="w-full h-full object-cover object-center" src="./public/t3code-app-desktop.webp" />
</div>

<div class="absolute bottom-5 left-16 right-16 flex justify-between text-sm">
  <span class="text-[#95E6FF]">One parent thread</span>
  <span class="text-[#BECF24]">Claude + Codex + Muse + Gemini sub-agents</span>
  <span class="text-[#ffd8a8]">One lineage panel</span>
</div>

<!--
The official screenshot shows four sub-agents in one thread. 01.md also describes threads communicating with one another. The user starts with one task and delegates work to different models where useful.
-->

---


<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1 class="pb-8">Threads connect through MCP</h1>
<img class="h-[60%] rounded-xl" src="./public/threads-mcp.svg" />

</div>


---

# The sidebar is an inbox for work

<div class="grid grid-cols-[auto_1fr] gap-8 mt-6 h-[95%]">
  <div class="overflow-hidden rounded-2xl border border-zinc-800">
    <img class="h-full " src="./public/sidebar.png" />
  </div>
  <div class="flex flex-col justify-center text-left gap-2.5">
    <div class="rounded-lg border border-[#a1a1aa]/40 bg-[#a1a1aa]/10 px-4 py-2">
      <div class="text-[#a1a1aa] font-bold text-sm">Draft</div>
      <div class="text-zinc-400 text-xs">Start before it runs.</div>
    </div>
    <div class="rounded-lg border border-[#95E6FF]/40 bg-[#95E6FF]/10 px-4 py-2">
      <div class="text-[#95E6FF] font-bold text-sm">Working</div>
      <div class="text-zinc-400 text-xs">Hide active work.</div>
    </div>
    <div class="rounded-lg border border-[#ffd8a8]/40 bg-[#ffd8a8]/10 px-4 py-2">
      <div class="text-[#ffd8a8] font-bold text-sm">Snoozed</div>
      <div class="text-zinc-400 text-xs">Return later.</div>
    </div>
    <div class="rounded-lg border border-[#BECF24]/40 bg-[#BECF24]/10 px-4 py-2">
      <div class="text-[#BECF24] font-bold text-sm">Settled</div>
      <div class="text-zinc-400 text-xs">Close completed work.</div>
    </div>
    <div class="rounded-lg border border-[#d0bfff]/40 bg-[#d0bfff]/10 px-4 py-2">
      <div class="text-[#d0bfff] font-bold text-sm">Archived</div>
      <div class="text-zinc-400 text-xs">Out of sight.</div>
    </div>
  </div>
</div>

<!--
No struggle finding history between different harnesses! 
And switching them.


Change the harness t3code will handle the rest
-->


---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1>From thread to merged pull request</h1>
<div class="dg-row">
<div class="dg-card fill" style="--c:#95E6FF"><div class="dg-name">thread</div></div>
<div class="dg-arrow" style="--c:#52525b"></div>
<div class="dg-card fill" style="--c:#d0bfff"><div class="dg-name">commit</div></div>
<div class="dg-arrow" style="--c:#52525b"></div>
<div class="dg-card fill" style="--c:#d0bfff"><div class="dg-name">push</div></div>
<div class="dg-arrow" style="--c:#52525b"></div>
<div class="dg-card fill" style="--c:#ffd8a8"><div class="dg-name">PR</div></div>
<div class="dg-arrow" style="--c:#52525b"></div>
<div class="dg-card fill" style="--c:#fff3bf"><div class="dg-name">review</div></div>
<div class="dg-arrow" style="--c:#52525b"></div>
<div class="dg-card fill" style="--c:#BECF24"><div class="dg-name">merge</div></div>
</div>
<div class="dg-caption" style="color:#f4f4f5">linked reviews stay with the work that created them</div>
<div class="dg-note">readiness, stacks, diffs, merge, done</div>
</div>
</div>

<!--
A thread can commit, push, create a pull request, review changes, and merge. Linked pull requests remain attached to the work that produced them, including stacked reviews.
Source: https://github.com/pingdotgg/t3code/blob/main/docs/user/source-control.md
-->

---
layout: center
class: 'text-center'
---

<img class="w-24 mx-auto mb-8" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

# Demo time!

<br/>

<div class="text-2xl font-bold text-zinc-200">
  See T3 Code in action...
</div>

---




<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1 class="pb-2">Three machines, one client</h1>
<img class="h-[80%] rounded-xl" src="./public/t3-client-server.svg" />

</div>


---

# 


<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1 class="pb-8">At home, the LAN is enough</h1>
<img class="h-[40%] rounded-xl" src="./public/t3-lan.svg" />

</div>

<!--
In a home Local Access Network is it simple.
-->

---


<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1 class="pb-8">T3 Connect</h1>
<img class="h-[60%] rounded-xl" src="./public/t3-connect.svg" />

</div>




---

<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1>T3 Connect vs Tailscale</h1>
<img class="h-[85%] rounded-xl" src="./public/t3-connect-vs-tailscale.svg" />

</div>

<!--
This opens up some new doors,

features like load balancing the work

using other computer resources... etc!
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1>Send work where capacity exists</h1>
<div class="dg-row">
<div class="dg-card" style="--c:#95E6FF;flex:0 0 170px"><div class="dg-name">New thread</div></div>
<div class="dg-arrow" style="--c:#95E6FF"></div>
<div class="dg-card fill" style="--c:#ffd8a8;flex:0 0 170px"><div class="dg-name">Choose host</div></div>
<div class="dg-arrow" style="--c:#d0bfff"></div>
<div class="dg-col" style="flex:0 0 260px;gap:14px">
<div class="dg-card" style="--c:#CF8377"><div class="dg-name">MacBook</div><div class="dg-note">1 slot free</div></div>
<div class="dg-card" style="--c:#BECF24"><div class="dg-name">Mac Studio</div><div class="dg-note">8 slots free</div></div>
<div class="dg-card" style="--c:#95E6FF"><div class="dg-name">Linux VM</div><div class="dg-note">3 slots free</div></div>
</div>
</div>
<div class="dg-caption">pick once, then keep the thread on that machine</div>
</div>
</div>

<!--
When a draft needs a machine, T3 Code can examine eligible hosts and choose one with free capacity. After selection, the thread stays on that environment.
Source: https://github.com/pingdotgg/t3code/blob/main/docs/user/remote-access.md#balance-new-threads-across-machines
-->



---
layout: center
class: 'text-center'
---

# Source control is built into the work

<div class="grid grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">GitHub</div>
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">GitLab</div>
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">Bitbucket</div>
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">Azure DevOps</div>
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">Forgejo</div>
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">Gitea</div>
  <div class="rounded-xl border border-zinc-700 bg-white/[0.04] p-5 text-xl font-bold">GitCafe</div>
  <div class="rounded-xl border border-[#BECF24]/60 bg-[#BECF24]/10 p-5 text-xl font-bold text-[#BECF24]">Your Git host</div>
</div>

<div class="mt-10 text-2xl text-zinc-300">Review diffs, link pull requests, inspect stacks, and merge without leaving the thread.</div>

<div class="absolute bottom-5 right-7 text-[10px] text-zinc-600">Source: <a href="https://github.com/pingdotgg/t3code/blob/main/docs/user/source-control.md">official source-control docs</a></div>

<!--
The current documentation lists GitHub, GitLab, Forgejo, Gitea, Bitbucket, Azure DevOps, and GitCafe. This is wider than the PR-only framing in 01.md.
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <div class="dg">
<h1>Work can start without a human click</h1>
<div class="dg-row">
<div class="dg-col" style="flex:0 0 300px;gap:20px">
<div class="dg-card" style="--c:#95E6FF"><div class="dg-name">Schedule</div><div class="dg-note">cron or interval</div></div>
<div class="dg-card" style="--c:#ffd8a8"><div class="dg-name">Webhook</div><div class="dg-note">event payload</div></div>
</div>
<div class="dg-arrow" style="--c:#d0bfff"></div>
<div class="dg-card fill" style="--c:#d0bfff;flex:0 0 220px"><div class="dg-name">Automation policy</div></div>
<div class="dg-arrow" style="--c:#BECF24"></div>
<div class="dg-card fill" style="--c:#BECF24;flex:0 0 200px"><div class="dg-name">New agent thread</div></div>
</div>
<div class="dg-caption">signed requests, dedupe keys, held delivery</div>
</div>
</div>

<!--
Schedules and webhooks can start threads. Current webhook settings support signed requests, payload placeholders, deduplication keys, and delivery held by T3 Connect for up to 24 hours while an environment is unavailable.
Source: https://github.com/pingdotgg/t3code/blob/main/docs/user/project-settings.md#webhook-automations
-->

---

# See where the tokens go

<div class="grid grid-cols-[2fr_1fr] gap-8 mt-8 items-center">

<div class="flex items-center justify-center">
  <img class="max-h-[70vh] max-w-full rounded-xl border border-zinc-800 shadow-2xl" src="./public/usage.png" />
</div>

<div class="flex flex-col gap-3">
  <div class="rounded-xl border border-[#95E6FF]/60 bg-[#95E6FF]/10 px-4 py-3">
    <div class="text-[10px] tracking-widest font-bold text-[#95E6FF]">BY ACCOUNT</div>
    <div class="text-xl font-black text-zinc-100 mt-1">Who?</div>
    <p class="text-xs text-zinc-400 mt-1">Compare usage across connected provider accounts.</p>
  </div>
  <div class="rounded-xl border border-[#BECF24]/60 bg-[#BECF24]/10 px-4 py-3">
    <div class="text-[10px] tracking-widest font-bold text-[#BECF24]">BY MACHINE</div>
    <div class="text-xl font-black text-zinc-100 mt-1">Where?</div>
    <p class="text-xs text-zinc-400 mt-1">See which environment is consuming the work.</p>
  </div>
</div>

</div>


---

# Free transcripts, any language <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/microphone_1f3a4.png" />

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div class="text-left">

<div class="text-2xl text-zinc-300 leading-relaxed">
  Run <strong class="text-[#BECF24]">local or remote models</strong> to transcribe speech
</div>

<div class="flex flex-col gap-3 mt-8">
  <span class="rounded-xl border border-[#95E6FF]/40 bg-[#95E6FF]/10 px-5 py-3 text-base">
    <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/desktop-computer_1f5a5-fe0f.png" /> Local on your machine
  </span>
  <span class="rounded-xl border border-[#d0bfff]/40 bg-[#d0bfff]/10 px-5 py-3 text-base">
    <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/globe-with-meridians_1f310.png" /> Many languages
  </span>
  <span class="rounded-xl border border-[#BECF24]/40 bg-[#BECF24]/10 px-5 py-3 text-base">
    <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/free-button_1f193.png" /> For free
  </span>
</div>

<p class="text-zinc-500 text-base mt-8">
  Whisper and friends turn any voice into text, auto-detect the language, even translate <img class="w-5 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/speech-balloon_1f4ac.png" />
</p>

</div>

<div class="flex items-center justify-center">
  <img class="max-h-[70vh] max-w-full rounded-xl border border-zinc-800 shadow-2xl" src="./public/handy-transcription.png" />
</div>

</div>

<!--
You do not need a paid API for transcription.

Pick a local or remote open model like Whisper, point it at your audio, and it writes the transcript for free. It auto-detects the language across dozens of them, and can even translate speech to English on the way.
-->


---

# Control a simulator from your phone!

<div class="grid grid-cols-[auto_1fr] gap-8 mt-6 h-[95%]">
  <div class="overflow-hidden rounded-2xl border border-zinc-800">
    <img class="h-full " src="./public/phone-in-phone.jpg" />
  </div>
  <div class="flex flex-col justify-center text-left gap-4">
    <div class="text-3xl font-black text-[#95E6FF] tracking-tight">Run agents from your phone</div>
    <div class="flex flex-col gap-3 mt-2">
      <div class="rounded-xl border border-[#95E6FF]/40 bg-[#95E6FF]/10 px-5 py-3">
        <span class="text-[#95E6FF] font-bold">Tailscale network</span>
        <span class="text-zinc-400"> — my devices on one private mesh.</span>
      </div>
      <div class="rounded-xl border border-[#ffd8a8]/40 bg-[#ffd8a8]/10 px-5 py-3">
        <span class="text-[#ffd8a8] font-bold">Mobile browser</span>
        <span class="text-zinc-400"> — no app to install, just a URL.</span>
      </div>
      <div class="rounded-xl border border-[#BECF24]/40 bg-[#BECF24]/10 px-5 py-3">
        <span class="text-[#BECF24] font-bold">Remote control</span>
        <span class="text-zinc-400"> — drives a device on my Mac from anywhere.</span>
      </div>
    </div>
  </div>
</div>

<!--
This is fun!

It is chrome opened in my iphone, 
controlling an emulator device on my mac!
-->

---
layout: center
class: 'text-center'
---

# Android and iOS apps

<div class="grid grid-cols-4 gap-5 mt-2 max-w-5xl mx-auto">
  <div class="flex flex-col items-center">
    <img class="w-full rounded-2xl border border-zinc-800 shadow-2xl" src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/39/2d/b9/392db9ac-cf3b-ab66-245c-cb0d1f4d0de3/01-sessions.png/460x998bb.webp" />
    <div class="mt-3 text-sm font-bold text-[#95E6FF]">Sessions</div>
  </div>
  <div class="flex flex-col items-center">
    <img class="w-full rounded-2xl border border-zinc-800 shadow-2xl" src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6b/63/99/6b639953-6895-8028-6b60-20ec09406174/02-environments.png/460x998bb.webp" />
    <div class="mt-3 text-sm font-bold text-[#BECF24]">Environments</div>
  </div>
  <div class="flex flex-col items-center">
    <img class="w-full rounded-2xl border border-zinc-800 shadow-2xl" src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/56/2e/d1/562ed1bd-fb2f-11dc-5773-7aeeb0922875/03-chat.png/460x998bb.webp" />
    <div class="mt-3 text-sm font-bold text-[#ffd8a8]">Chat</div>
  </div>
  <div class="flex flex-col items-center">
    <img class="w-full rounded-2xl border border-zinc-800 shadow-2xl" src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b9/44/cb/b944cba9-4e48-c44a-710e-7249d9fc95f3/04-terminal.png/460x998bb.webp" />
    <div class="mt-3 text-sm font-bold text-[#d0bfff]">Terminal</div>
  </div>
</div>


<!--
The mobile client is not a smaller editor. It is a remote operations interface for agent work and connected machines.
-->

---

<div class="absolute inset-0 flex items-center justify-center flex-col">

<h1 class="pb-8">Fleet - one HQ synced on every machine</h1>
<img class="h-[60%] rounded-xl" src="./public/t3-hq.svg" />

</div>

<!--
There is still one issue not solved by t3 and I solved it for my self. 

I have HQ.
-->

---

<div class="flex items-center justify-center gap-10">
  <img class="w-36 h-36 rounded-3xl" src="./public/t3code-icon.png" />
  <div class="text-left">
    <div class="text-sm font-bold tracking-[0.3em] text-[#95E6FF]">OPEN SOURCE CONTROL PLANE</div>
    <h1 class="text-5xl! mt-3">Try it. Inspect it. Fork it.</h1>
  </div>
</div>

<div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
  <div class="rounded-2xl border border-zinc-700 p-6"><div class="text-4xl font-black text-[#BECF24]">47,521</div><div class="text-zinc-500 mt-2">GitHub stars</div></div>
  <div class="rounded-2xl border border-zinc-700 p-6"><div class="text-4xl font-black text-[#95E6FF]">MIT</div><div class="text-zinc-500 mt-2">license</div></div>
  <div class="rounded-2xl border border-zinc-700 p-6"><div class="text-4xl font-black text-[#ffd8a8]">BYO</div><div class="text-zinc-500 mt-2">models + compute</div></div>
</div>

<div class="mt-10 text-lg">
  <a href="https://t3.codes" class="text-[#95E6FF]">t3.codes</a>
  <span class="text-zinc-700 mx-4">·</span>
  <a href="https://github.com/pingdotgg/t3code" class="text-[#BECF24]">github.com/pingdotgg/t3code</a>
</div>

<div class="absolute bottom-4 left-0 right-0 text-[10px] text-zinc-600">Repository figures retrieved 5 Nov 2026 from the GitHub API. Content adapted from 01.md and current official docs.</div>

<!--
I would highly recommend to try t3code

Go play with that and see if that works for you.
-->

---

<div class="absolute inset-0 flex items-center justify-center">
  <img class="max-h-[92%] max-w-[94%] rounded-xl" src="./public/ai-evolve.png" />
</div>

---

# Resources <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" />

<div class="text-[11px] leading-snug grid grid-cols-3 gap-x-6 text-left mt-6">

<div>

## Used in this deck

- **Harness transcript:** [My last video about AI harnesses](https://www.youtube.com/watch?v=ebILGCoN4UU)
- **T3 Code summary:** [T3 Code broke me](https://youtu.be/uLGxb4F3SyI)
- **T3 Code:** [t3.codes](https://t3.codes)
- **Source and releases:** [pingdotgg/t3code](https://github.com/pingdotgg/t3code)
- **Remote access:** [official docs](https://github.com/pingdotgg/t3code/blob/main/docs/user/remote-access.md)
- **Source control:** [official docs](https://github.com/pingdotgg/t3code/blob/main/docs/user/source-control.md)
- **Automations:** [project settings](https://github.com/pingdotgg/t3code/blob/main/docs/user/project-settings.md)
- **Troubleshooting:** [triage docs](https://github.com/pingdotgg/t3code/blob/main/docs/user/triage.md)

</div>

<div>

## Harness engineering

- **HEMA HAL:** [AWS case study](https://aws.amazon.com/blogs/machine-learning/from-portal-hopping-to-instant-answers-hemas-journey-with-mcp-and-amazon-bedrock/)
- **OpenAI DevDay 2026:** [recap](https://openai.com/index/devday-2026-recap)
- **Anthropic coding trends:** [2026 report](https://resources.anthropic.com/2026-agentic-coding-trends-report)
- **AI coding agents:** [JetBrains research](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026)
- **autoharness:** [self-learning harness](https://github.com/tigerless-labs/autoharness)
- **myagents:** [portable harness](https://github.com/RashadAnsari/myagents)
- **Collection:** [Awesome harness engineering](https://github.com/ai-boost/awesome-harness-engineering)

</div>

<div>

## Foundations

- **AI transformation:** [Just Another Transformation](https://dpereira.substack.com/p/just-another-transformation)
- **Harness engineering:** [Martin Fowler](https://martinfowler.com)
- **DeepSeek Harness:** [source](https://github.com/deepseek-ai/deepseek-harness)
- **DeepSeek overview:** [MindStudio](https://mindstudio.ai/blog/deepseek-harness-agentic-coding)
- **Harness deep dive:** [video](https://youtu.be/UsfCe5fJK6A)
- **Skylos:** [catch mistakes before push](https://github.com/duriantaco/skylos)

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





<div class="avtar mt-12 rounded-full flex w-full align-center justify-center ">
  <img class="w-32 h-32 rounded-xl grayscale" src="./public/linkedin-QR.png" />

  <div class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Reach out to me!</strong> <br/>
    <div class="mt-2 mb-2 text-lg flex gap-12">
      <a href="github.com/sayjeyhi" >
      <img class="w-4 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" /> Jafar Rezaei
      </a>
      <a href="https://sayjeyhi.com">
      <img class="w-4 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" /> sayjeyhi.com
      </a>
      </div>
    <span class="text-gray-400 text-sm">@sayjeyhi</span>
  </div>
</div>
