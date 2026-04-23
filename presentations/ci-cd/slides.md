---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Optimizing Enterprise CI/CD Pipelines
  Techniques That Worked for Us
drawings:
  persist: false
css: unocss
---


# Optimizing Enterprise CI/CD Pipelines


Techniques That Worked for Us

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="avtar mt-36 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">April 2026</span>
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
class: text-center
---

today we talk about

# Optimizing Enterprise CI/CD Pipelines


---
layout: center
class: text-center
---

<div class="flex justify-start">
  <div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
Enterprise makes everything more complicated
  </div>
</div>

---
layout: center
class: text-center
---

<span class="text-3xl mb-3">We are developing it :D</span>

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNnenlqZzZxNWtoZzF5bTEzc2Myb2J2eWFvcHg4NnlqanFyMmhoayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12msOFU8oL1eww/giphy.gif" />



---
layout: center
class: text-center
---

<span class="text-3xl mb-3">It doesn't mean that</span>

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTgwODltajBxam8ycm9ydHR5amFsM3FnbWhtaXJkb3B4Mmwyb3ZwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5QRnThZOV6csvKXdmB/giphy.gif" />

---
layout: center
class: text-center
---

# In this talk we cover enterprise CI/CD


---
layout: image-right
image: https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=960&h=1080&dpr=1
---

# What is CI/CD?

<div class="space-y-8 mt-9">

<div>
  <span class="text-base font-semibold text-blue-200 bg-blue-100/20 rounded-xl p-3">Continuous Integration (CI)</span>
  <div class="text-sm text-gray-400 mt-4">Automatically test, lint, build, and validate every code change as it is merged. </div>
</div>

<div >
  <span class="text-base font-semibold text-green-200 bg-green-100/20 rounded-xl p-3">Continuous Delivery (CD)</span>
  <div class="text-sm text-gray-400 mt-4">Ensure the software is always in a deployable state. Automate the path from commit to a releasable artefact.</div>
</div>

<div>
  <span class="text-base font-semibold text-teal-200 bg-teal-100/20 rounded-xl p-3"">Continuous Deployment</span>
  <div class="text-sm text-gray-400 mt-4">Automatically push every validated change to production, zero human gates required.</div>
</div>


</div>

---
layout: center
---

<div class="p-8 bg-white rounded-2xl">
<img class="w-screen" src="/ci-cd.jpeg" />
</div>


---
layout: center
class: text-center
---


<div class="flex flex-col  gap-8">

<div class="flex justify-start">
  <div class="bg-gray-100 text-gray-800 ml-20 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm max-w-xs">
    That is for devops team
  </div>
</div>
<img class="w-20 h-20 relative -top-5" src="https://em-content.zobj.net/source/microsoft-teams/400/smiling-face_263a-fe0f.png" />

</div>




---
layout: center
class: text-center
---

# Not exactly

<div class="bg-white p-5 rounded-2xl">
<img src="/devops-loop.png" />
</div>


---
layout: center
class: text-center
---

# Facts!

<br/>

<p class="text-xl flex gap-2 items-center">
  <span class="bg-gray-100 rounded-lg px-3 py-2 text-2xl font-black text-yellow-600">
  “Typical”
  </span>
  complex enterprise Jenkins pipeline takes
</p>

<div class="mt-3 inline-flex items-baseline gap-2 ">
  <span class="bg-gray-100 rounded-lg px-3 py-2 text-3xl font-black text-indigo-600">
    20m
  </span>
  to a 
  <span class="bg-gray-100 rounded-lg px-3 py-2 text-2xl font-black text-red-600">
    couple of hours
  </span>
</div>


---
layout: center
class: text-center
---

# I'm sorry but

<br/>
<br/>
<br/>
<br/>

<div class="flex flex-col  gap-8">

<div class="flex justify-start">
  <div class="bg-gray-100 text-gray-800 ml-20 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
The problem is real and we are involved.
  </div>
</div>
<img class="w-20 h-20 relative -top-5" src="https://em-content.zobj.net/source/microsoft-teams/400/weary-face_1f629.png" />

</div>


---

# Lyreco's Journey

<h1 class="text-xl!">From 1-Hour Jenkins Builds to 5-Minute GitHub Actions</h1>

<div class="border-2 border-gray-600 p-10 rounded-2xl">
<div class="flex items-center justify-center">
<img class="w-40 relative bg-white p-2 rounded-2xl " src="/Lyreco_Logotype_RGB_positive.png" />
</div>


Lyreco is a worldwide distributor of office supplies and workplace services, founded in 1926 by Georges-Gaston Gaspard in the Valenciennes area of France.

</div>

Source: [wikipedia](https://en.wikipedia.org/wiki/Lyreco)





---

# DORA Metrics

standard set of metrics used for evaluating process performance and maturity


<br/>

1. Deployment Frequency
2. Lead Time for Changes
3. Change Failure Rate
4. Mean Time to Restore (MTTR)


<div class="mt-18 w-full">
  <div class="grid grid-cols-4 gap-6 relative">
    <!-- line -->
    <div class="absolute top-10 left-0 right-0 h-[2px] bg-white"></div>
    <!-- 2014 -->
    <div class="text-center relative">
      <div class="w-20 h-20 mx-auto rounded-full text-gray-600 bg-white border border-white flex items-center justify-center text-sm">
        2015
      </div>
      <div class="mt-4 text-sm text-gray-300">
        Start of DORA research project by Nicole Forsgren<br/>
      </div>
    </div>
    <!-- 2016 -->
    <div class="text-center relative">
      <div class="w-20 h-20 mx-auto rounded-full text-gray-600 bg-white border border-white flex items-center justify-center text-sm">
        2016
      </div>
      <div class="mt-4 text-sm text-gray-300">
        DORA metrics defined<br/>
        <span class="text-xs text-gray-400">State of DevOps Reports</span>
      </div>
    </div>
    <!-- 2019 -->
    <div class="text-center relative">
      <div class="w-20 h-20 mx-auto rounded-full text-gray-600 bg-white border border-white flex items-center justify-center text-sm">
        2019
      </div>
      <div class="mt-4 text-sm text-gray-300">
        Acquired by Google Cloud<br/>
      </div>
    </div>
    <!-- 2020+ -->
    <div class="text-center relative">
      <div class="w-20 h-20 mx-auto rounded-full text-gray-600 bg-white border border-white flex items-center justify-center text-sm">
        2020+
      </div>
      <div class="mt-4 text-sm text-gray-300">
        Industry standard<br/>
      </div>
    </div>

  </div>

</div>


---

<h2 class="mb-2">Datadog DORA dashboard</h2>

<div class="bg-white p-2 ">
<img class="w-screen" src="/dora.webp" />
</div>


---


for lyreco
<h1>DORA metrics compare</h1>


<div class="mt-8 grid grid-cols-2 gap-6">

  <!-- BEFORE -->
  <div class="p-6 rounded-2xl shadow-lg">
    <h2 class="text-xl font-semibold mb-4">🐌 Jenkins Era</h2>
    <div class="space-y-2 text-sm text-gray-300">
      <div>📦 Deployment Frequency: <b>1x / week</b></div>
      <div>⏱ Lead Time: <b>3–5 days</b></div>
      <div>💥 Change Failure Rate: <b>19%</b></div>
      <div>🛠 MTTR: Up to <b>1 day</b></div>
    </div>
    <div class="mt-4 text-xs text-red-300">
      Manual approvals, long pipelines, fragile builds
    </div>
  </div>

  <!-- AFTER -->
  <div class="p-6 rounded-2xl shadow-lg bg-green-500/20 border border-green-500/30">
    <h2 class="text-xl font-semibold mb-4">🚀 Optimized CI/CD</h2>
    <div class="space-y-2 text-sm text-gray-300">
      <div>📦 Deployment Frequency: <b>10–20x / day</b></div>
      <div>⏱ Lead Time: <b>&lt; 1 hour</b></div>
      <div>💥 Change Failure Rate: <b>1-3%</b></div>
      <div>🛠 MTTR: <b>&lt; 1 hour</b></div>
    </div>
    <div class="mt-4 text-xs text-green-300">
      GitHub Actions + caching + parallel builds + self-hosted runners + rollback mechanisms
    </div>
  </div>

</div>

<!-- IMPACT STRIP -->
<div class="mt-8 p-5 rounded-xl bg-white/5 border border-white/20 text-sm text-gray-300">
  <b>Impact:</b> ~60–80% faster delivery cycles + significantly lower production risk
</div>


---
layout: center
---

# Why CI/CD Speed Matters 🚀

based on DORA 


---


# Why CI/CD Speed Matters 🚀


<br/>
<div class="grid grid-cols-1 gap-6">

  <div class="p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-white/20">
    <h2 class="text-xl font-semibold mb-4">⚡ Faster Feedback</h2>
    <div class="space-y-2 text-sm text-gray-300 mt-12">
      <div class="flex items-start gap-2">
        <span>✔</span>
        <span>Catch bugs immediately</span>
      </div>
      <div class="flex items-start gap-2">
        <span>✔</span>
        <span>Fix issues while context is fresh</span>
      </div>
    </div>
  </div>

  <div class="mt-4 text-xs text-green-400 space-y-1">
    <div>↓ Change failure rate: ~60% → &lt;15%</div>
    <div>↓ MTTR: weeks → &lt;1 hour</div>
    <br/>
    <a href="https://www.datadoghq.com/knowledge-center/dora-metrics/" target="_blank" class="underline text-blue-400">Source: DORA Metrics (Datadog)</a>
  </div>
</div>

---



# Why CI/CD Speed Matters 🚀

<br/>
<!-- Productivity -->
<div class="grid grid-cols-1 gap-6">
<div class="p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-white/20">
  <h2 class="text-xl font-semibold mb-4">🧠 Higher Productivity</h2>

  <div class="space-y-2 text-sm text-gray-300 mt-12 ">
    <div class="flex items-start gap-2">
      <span>✔</span>
      <span>Less waiting for builds</span>
    </div>
    <div class="flex items-start gap-2">
      <span>✔</span>
      <span>Fewer context switches</span>
    </div>
  </div>
</div>


<div class="mt-4 text-xs text-green-400 space-y-1">
  <div>↓ 30–60% developer time saved with fast pipelines</div>
  <div>↓ Significant reduction in context-switch overhead</div>
  <br/>
  <a href="https://www.datadoghq.com/knowledge-center/dora-metrics/" target="_blank" class="underline text-blue-400">Source: DORA + Industry Reports</a>
</div>
</div>

---



# Why CI/CD Speed Matters 🚀

<br/>
<div class="grid grid-cols-1 gap-6">
<!-- Safer Deployments -->
<div class="p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-white/20">
  <h2 class="text-xl font-semibold mb-4">🛡️ Safer Deployments</h2>

  <div class="space-y-2 text-sm text-gray-300 mt-12">
    <div class="flex items-start gap-2">
      <span>✔</span>
      <span>Smaller incremental changes</span>
    </div>
    <div class="flex items-start gap-2">
      <span>✔</span>
      <span>Easier testing & rollback</span>
    </div>
  </div>
</div>


<div class="mt-4 text-xs text-green-400 space-y-1">
  <div>↓ Failure rate drops to 0–15%</div>
  <div>↑ Deploy frequency: monthly/weekly → multiple/day</div>
  <br/>
  <a href="https://www.datadoghq.com/knowledge-center/dora-metrics/" target="_blank" class="underline text-blue-400">Source: DORA Metrics</a>
</div>
</div>

---



# Why CI/CD Speed Matters 🚀

<br/>
<div class="grid grid-cols-1 gap-6">
<!-- Time to Market -->
<div class="p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-white/20">
  <h2 class="text-xl font-semibold mb-4">🚀 Faster Time-to-Market</h2>

  <div class="space-y-2 text-sm text-gray-300 mt-12">
    <div class="flex items-start gap-2">
      <span>✔</span>
      <span>Ship features quicker</span>
    </div>
    <div class="flex items-start gap-2">
      <span>✔</span>
      <span>Respond to users faster</span>
    </div>
  </div>
</div>


<div class="mt-4 text-xs text-green-400 space-y-1">
  <div>↑ Lead time: months → &lt;1 day</div>
  <div>↑ Multiple deploys per day vs monthly releases</div>
  <br/>
  <a href="https://www.datadoghq.com/knowledge-center/dora-metrics/" target="_blank" class="underline text-blue-400">Source: DORA Metrics</a>
</div>
</div>

---

<div class="bg-black p-2 rounded-2xl">
<img class="w-screen" src="/old-jenkins.png" />
</div>


---

# Jenkins — The Pipeline Reality

<div class="space-y-12 text-xs text-gray-300 mt-24">
  <div class="grid grid-cols-6 gap-2 text-center">
    <div class="p-3 rounded-xl bg-white/20">
      <div class="text-2xl">🔄</div>
      <div class="font-semibold mt-1 mb-2">Checkout</div>
      <span class="text-gray-200 mt-1 bg-gray-500/40 p-1 rounded text-xs">~3 min</span>
      <div class="text-gray-400 mt-5">Full clone</div>
    </div>
    <div class="p-3 rounded-xl bg-white/20">
      <div class="text-2xl">📦</div>
      <div class="font-semibold mt-1 mb-2">Install</div>
      <span class="text-gray-200 mt-1 bg-gray-500/40 p-1 rounded text-xs">~10 min</span>
      <div class="text-gray-400 mt-5">No cache</div>
    </div>
    <div class="p-3 rounded-xl bg-white/20">
      <div class="text-2xl">🔨</div>
      <div class="font-semibold mt-1 mb-2">Build</div>
      <span class="text-gray-200 mt-1 bg-gray-500/40 p-1 rounded text-xs">~15 min</span>
      <div class="text-gray-400 mt-5">Sequential</div>
    </div>
    <div class="p-3 rounded-xl bg-white/20">
      <div class="text-2xl">🧪</div>
      <div class="font-semibold mt-1 mb-2">Unit Tests</div>
      <span class="text-gray-200 mt-1 bg-gray-500/40 p-1 rounded text-xs">~15 min</span>
      <div class="text-gray-400 mt-5">No parallelism</div>
    </div>
    <div class="p-3 rounded-xl bg-white/20">
      <div class="text-2xl">🔗</div>
      <div class="font-semibold mt-1 mb-2">Integration</div>
      <span class="text-gray-200 mt-1 bg-gray-500/40 p-1 rounded text-xs">~10 min</span>
      <div class="text-gray-400 mt-5">Sequential deps</div>
    </div>
    <div class="p-3 rounded-xl bg-white/20">
      <div class="text-2xl">🐳</div>
      <div class="font-semibold mt-1 mb-2">Docker</div>
      <span class="text-gray-200 mt-1 bg-gray-500/40 p-1 rounded text-xs">~10 min</span>
      <div class="text-gray-400 mt-5">No cache</div>
    </div>

  </div>

  <!-- Summary -->
  <div class="flex items-center justify-center gap-3">
    <div class="text-4xl font-bold text-red-400">~40 min</div>
    <div class="text-gray-400 text-sm">
      total pipeline time per branch
    </div>
  </div>

</div>


---
layout: image-right
image: https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=960&h=1080&dpr=1
---

# Jenkins - Setup

<div class="space-y-3 mt-12">


<div>
<div class="font-semibold text-gray-100">- On premise setup</div>
<div class="p-3 ">
  <ul class="text-xs text-gray-400">
    <li>Many build agents provisioned on-premise.</li>
    <li>but queues were bottleneck during peak development hours.</li>
  </ul>
</div>
</div>

<div>
<div class="font-semibold text-gray-100">- Centralised Master</div>
<div class="p-3 rounded-lg">
  <ul class="text-xs text-gray-400">
    <li>One Jenkins master lots of build agents. </li>
    <li>Each project with custom Jenkinsfile pipeline.</li>
  </ul>
</div>
</div>

<div>
<div class="font-semibold text-gray-100">- Scripted Pipelines</div>
<div class="p-3 ">
  <ul class="text-xs text-gray-400">
    <li>Groovy pipelines: powerful, but complex.</li>
    <li>Business logic scattered across shared libraries and global configs.</li>
  </ul>
</div>
</div>




</div>
 
---

# Jenkins — Slave Saturation

<div class="grid grid-cols-2 gap-6 mt-12">

<div class="overflow-hidden bg-white/20 p-4">
  <div class="text-xs text-gray-400 mb-3 font-mono uppercase tracking-wider">Build Queue — Peak Hours</div>
  <div class="space-y-2">
    <div class="flex items-center gap-2 p-2 bg-red-900 bg-opacity-70 rounded text-xs">
      <div class="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0"></div>
      <span class="text-red-200">feature/checkout-v2 — WAITING 12 min</span>
    </div>
    <div class="flex items-center gap-2 p-2 bg-red-900 bg-opacity-70 rounded text-xs">
      <div class="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0"></div>
      <span class="text-red-200">feature/cart-refactor — WAITING 28 min</span>
    </div>
    <div class="flex items-center gap-2 p-2 bg-yellow-900 bg-opacity-70 rounded text-xs">
      <div class="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
      <span class="text-yellow-200">develop — RUNNING 47 min elapsed</span>
    </div>
    <div class="flex items-center gap-2 p-2 bg-yellow-900 bg-opacity-70 rounded text-xs">
      <div class="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
      <span class="text-yellow-200">release/2.4.0 — RUNNING 52 min elapsed</span>
    </div>
    <div class="flex items-center gap-2 p-2 bg-gray-800 rounded text-xs">
      <div class="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0"></div>
      <span class="text-gray-400">+14 more pending in queue...</span>
    </div>
  </div>
</div>

<div class="rounded-sm overflow-hidden shadow-lg bg-white/20 p-4">
  <div class="text-xs text-gray-400 mb-3 font-mono uppercase tracking-wider">Slave Utilisation</div>
  <div class="space-y-2">
    <div v-for="label in ['slave-01','slave-02','slave-03','slave-04','slave-05','slave-06','slave-07','slave-08']" class="flex items-center gap-2 text-xs">
      <span class="text-gray-400 w-20 font-mono">{{ label }}</span>
      <div class="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
        <div class="h-3 rounded-full bg-red-500 w-full"></div>
      </div>
      <span class="text-red-400 w-8 text-right">100%</span>
    </div>
  </div>
  <div class="mt-3 text-xs text-center text-red-400 font-semibold">All slaves saturated — new builds cannot start</div>
</div>

</div>

---

# Jenkins — Core Limitations

<div class="grid grid-cols-2 gap-5 mt-12">

<div class="p-4 rounded-sm bg-white/20">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-3 h-3 rounded-full bg-red-400 flex-shrink-0"></div>
    <div class="font-bold text-red-400">Scalability Ceiling</div>
  </div>
  <div class="text-sm text-gray-400">Master is a single point of failure. Adding more slaves hits network, storage, and orchestration limits. True horizontal scaling is painful and expensive.</div>
</div>

<div class="p-4 rounded-sm bg-white/20">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-3 h-3 rounded-full bg-orange-400 flex-shrink-0"></div>
    <div class="font-bold text-orange-400">Branch Explosion Problem</div>
  </div>
  <div class="text-sm text-gray-400">Every feature branch triggered the full 60-minute pipeline. More developers meant more branches meant more pressure. We actively had to remove branches to keep Jenkins alive.</div>
</div>

<div class="p-4 rounded-sm bg-white/20">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></div>
    <div class="font-bold text-yellow-400">Zero Dependency Caching</div>
  </div>
  <div class="text-sm text-gray-400">Each build on a fresh slave re-downloaded everything. Maven, npm, Docker base images — all fetched from scratch on every single run, every single time.</div>
</div>

<div class="p-4 rounded-sm bg-white/20">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0"></div>
    <div class="font-bold text-blue-400">Plugin Maintenance Hell</div>
  </div>
  <div class="text-sm text-gray-400">lots of plugins requiring constant updates. Incompatible versions, security patches, and unexpected breakages made every Jenkins upgrade a high-risk, all-hands event.</div>
</div>

</div>

---
layout: section
---

<h2>The Breaking Point</h2>

<div class="mt-12 space-y-4 text-left max-w-2xl mx-auto">

<div class="p-4 bg-white/20 ">
  <div class="font-bold text-xl">⏱ 40+ minute builds</div>
</div>

<div class="p-4 bg-white/20 ">
  <div class="font-bold text-xl">🗑 Deleting branches to survive</div>
</div>

<div class="p-4 bg-white/20 ">
  <div class="font-bold text-xl">📉 Developer confidence dropped</div>
</div>

<div class="p-4 bg-white/20 ">
  <div class="font-bold text-xl">🔧 Infrastructure was never enough</div>
</div>

</div>

---

# CI/CD Best Practices


<div class="grid grid-cols-3 gap-4 mt-6 text-xs text-gray-300">

  <div class="p-4 rounded-xl bg-white/20">
    <div class="text-2xl mb-2">⚡</div>
    <div class="font-semibold mb-1">Fast Feedback</div>
    <div class="text-gray-400">
      Pipelines should finish in minutes, not hours. Keep developers in flow.
    </div>
  </div>

  <div class="p-4 rounded-xl bg-white/20">
    <div class="text-2xl mb-2">🔁</div>
    <div class="font-semibold mb-1">Fail Fast</div>
    <div class="text-gray-400">
      Run cheap checks first (lint, unit tests), expensive ones later.
    </div>
  </div>

  <div class="p-4 rounded-xl bg-white/20">
    <div class="text-2xl mb-2">🔀</div>
    <div class="font-semibold mb-1">Parallelism</div>
    <div class="text-gray-400">
      Run independent jobs in parallel instead of blocking the pipeline.
    </div>
  </div>

  <div class="p-4 rounded-xl bg-white/20">
    <div class="text-2xl mb-2">💾</div>
    <div class="font-semibold mb-1">Caching</div>
    <div class="text-gray-400">
      Reuse dependencies and build layers instead of re-downloading.
    </div>
  </div>

  <div class="p-4 rounded-xl bg-white/20">
    <div class="text-2xl mb-2">📦</div>
    <div class="font-semibold mb-1">Immutable Artifacts</div>
    <div class="text-gray-400">
      Build once, promote the same artifact across environments.
    </div>
  </div>

  <div class="p-4 rounded-xl bg-white/20">
    <div class="text-2xl mb-2">🔐</div>
    <div class="font-semibold mb-1">Security Built-in</div>
    <div class="text-gray-400">
      Shift security left with scans, SAST, and secrets detection.
    </div>
  </div>

</div>


---
layout: image-right
image: https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=960&h=1080&dpr=1
---

<h1 class="text-lg!">Enter GitHub Actions</h1>

<div class="space-y-4 mt-4">

<div class="p-3 bg-white/20 rounded-lg">
  <div class="font-semibold text-green-400">Native Git Integration</div>
  <div class="text-xs mt-2 text-green-100/50">Triggered directly by GitHub events: push, PR, review, tag, schedule not webhook.</div>
</div>

<div class="p-3 bg-white/20 rounded-lg">
  <div class="font-semibold text-green-400">YAML — Versioned with the Code</div>
  <div class="text-xs mt-2 text-green-100/50">Simple declarative YAML in <code>.github/workflows/</code></div>
</div>

<div class="p-3 bg-white/20 rounded-lg">
  <div class="font-semibold text-green-400">Elastic Concurrency</div>
  <div class="text-xs mt-2 text-green-100/50">Every PR gets its own isolated runner, no shared queue, no waiting.</div>
</div>

<div class="p-3 bg-white/20 rounded-lg">
  <div class="font-semibold text-green-400">Composable Workflows</div>
  <div class="text-xs mt-2 text-green-100/50">Reusable workflows and the Actions marketplace replaces Jenkins plugins.</div>
</div>

</div>

---

# Self-Hosted Runners at Lyreco

<div class="grid grid-cols-2 gap-6 mt-5">

<div>
  <div class="text-base font-bold text-gray-100 mb-3">Why Self-Hosted?</div>
  <div class="space-y-3">
    <div class="flex items-start gap-2 text-sm">
      <div class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</div>
      <span><strong>Internal network access</strong> — reach private registries, internal services, and on-prem databases without VPN tunnels</span>
    </div>
    <div class="flex items-start gap-2 text-sm">
      <div class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</div>
      <span><strong>Hardware control</strong> — tune CPU, memory, and disk per workload type (build-heavy vs lint-only)</span>
    </div>
    <div class="flex items-start gap-2 text-sm">
      <div class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</div>
      <span><strong>Cost efficiency</strong> — no per-minute GitHub billing for compute-heavy build workloads</span>
    </div>
    <div class="flex items-start gap-2 text-sm">
      <div class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</div>
      <span><strong>Persistent local cache</strong> — Docker layer cache and dep caches survive between runs on the same runner</span>
    </div>
    <div class="flex items-start gap-2 text-sm">
      <div class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</div>
      <span><strong>Security compliance</strong> — source code and secrets never leave Lyreco infrastructure</span>
    </div>
  </div>
</div>

<div class="bg-gray-900 rounded-xl p-4 text-xs font-mono text-green-400 leading-relaxed">
  <div class="text-gray-500 mb-1"># Workflow targeting self-hosted runners</div>
  <div>runs-on: [self-hosted, linux, x64]</div>
  <br/>
  <div class="text-gray-500"># Runner labels for job routing</div>
  <div>groups:</div>
  <div>  - name: lyreco-build</div>
  <div>    labels:</div>
  <div>      - build-heavy</div>
  <div>      - docker-enabled</div>
  <div>      - registry-access</div>
  <br/>
  <div class="text-gray-500"># Auto-scaling via Actions Runner Controller</div>
  <div>minReplicas: 2</div>
  <div>maxReplicas: 20</div>
  <div>scaleDownDelaySecondsAfterScaleOut: 300</div>
</div>

</div>

---

<h1 class="text-lg!">#1 — Logic of pipeline</h1>

CI CD


<img src="/drawing.png">

---

<h1 class="text-lg!">#1 — Logic of pipeline</h1>

monorepo

<img src="/draw-2.png">

---

<h1 class="text-lg!">#1 — Logic of pipeline</h1>

repeated flows

<img src="/draw-jenkins-ci.png">

---

<h1 class="text-lg!">#1 — Logic of pipeline</h1>

improved jenkins

<img src="/draw-3.png">

---

<h1 class="text-lg!">#1 — Logic of pipeline</h1>

no build and quality check


<img src="/draw-one-flow.png">


---

<img src="/full-flow.png">

no build and quality check

---

Real CI flow:

<img src="/github-ci.png">

---

<h1 class="text-lg!">#2 — Smart Job Skipping</h1>


```yaml {all|4-7|13-21|24-29}
jobs:
  changes:
    runs-on: [self-hosted, linux]
    outputs:
      backend: ${{ steps.filter.outputs.backend }}
      frontend: ${{ steps.filter.outputs.frontend }}
      docker:   ${{ steps.filter.outputs.docker }}
    steps:
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            backend:
              - 'src/main/**'
              - 'pom.xml'
            frontend:
              - 'src/frontend/**'
              - 'package.json'
            docker:
              - 'Dockerfile'
              - 'docker-compose*.yml'
  build-backend:
    needs: changes
    if: needs.changes.outputs.backend == 'true'   # ← skipped if no backend changes
    steps:
      - run: ./mvnw package -DskipTests
```

<div class="mt-2 text-sm text-gray-500">Changed only the README? Zero build steps run. Frontend-only change? Skip the entire Java pipeline.</div>

---

<h1 class="text-lg!">#3 — True Parallelism</h1>

Use matrix when it makes sense.

```yaml
jobs:
  unit-tests-module-a:          # ──┐
    runs-on: [self-hosted]       #   │  All three run
    steps:                       #   │  at exactly the
      - run: ./mvnw test -pl a   #   │  same time
                                 #   │
  unit-tests-module-b:          # ──┤
    runs-on: [self-hosted]       #   │  Each on its own
    steps:                       #   │  isolated runner
      - run: ./mvnw test -pl b   #   │
                                 #   │
  lint-and-security-scan:       # ──┘
    runs-on: [self-hosted]
    steps:
      - run: ./mvnw checkstyle:check && trivy fs --exit-code 1 .

  docker-build:
    needs: [unit-tests-module-a, unit-tests-module-b, lint-and-security-scan]
    runs-on: [self-hosted]       # ← only starts after ALL above pass
    steps:
      - run: docker buildx build .
```

---

<h1 class="text-lg!">#4 — Aggressive Caching</h1>

Cache hit = seconds. Cache miss = minutes.

```yaml {all|2-8|9-15|16-22}
steps:
  - uses: actions/cache@v4
    with:
      path: |
        ~/.m2/repository
        ~/.sonar/cache
      key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
      restore-keys: ${{ runner.os }}-maven-
  - uses: actions/cache@v4
    with:
      path: |
        ~/.npm
        node_modules
      key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      restore-keys: ${{ runner.os }}-node-
  - uses: actions/cache@v4
    with:
      path: |
        ~/.gradle/caches
        ~/.gradle/wrapper
      key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*') }}
      restore-keys: ${{ runner.os }}-gradle-
```

---

<h1 class="text-lg!">#4 — Docker BuildX & Registry Cache</h1>

<img src="/single-stage-go.webp" />

---

<h1 class="text-lg!">#4 — Docker BuildX & Registry Cache</h1>


Build each Docker layer once — reuse forever across all branches and runners

```yaml {all|4-5|7-18|20-24}
steps:
  - uses: actions/checkout@v4

  - uses: docker/setup-buildx-action@v3
    with: { driver-opts: network=host }

  - uses: docker/build-push-action@v5
    with:
      context: .
      push: true
      tags: registry.lyreco.com/app:${{ github.sha }}
      # Pull cached layers FROM registry before building
      cache-from: |
        type=registry,ref=registry.lyreco.com/app:buildcache
        type=registry,ref=registry.lyreco.com/app:latest
      # Push updated cache BACK to registry — shared by all runners & branches
      cache-to: type=registry,ref=registry.lyreco.com/app:buildcache,mode=max

  # Result:
  # - OS + runtime layers: pulled from registry cache in seconds
  # - Dependency layers: rebuilt only when pom.xml / package.json changes
  # - App code layer: rebuilt only when source changes
  # - A pure code change rebuilds ONE layer, not the entire image
```

---

<h1 class="text-lg!">#5 — Better Build Tooling</h1>


<div class="grid grid-cols-2 gap-6 mt-4">


<div>
  <div class="font-bold text-gray-400 mb-3">Frontend / Node</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-green-50 rounded-lg border border-green-200">
      <div class="font-semibold text-green-800">Vite over Webpack</div>
      <div class="text-green-700 text-xs mt-1">Vite's esbuild-based bundler is 10–100× faster than Webpack for both dev builds and CI production bundles.</div>
    </div>
    <div class="p-3 bg-green-50 rounded-lg border border-green-200">
      <div class="font-semibold text-green-800"><code class="text-gray-200">npm ci</code>,  <code class="text-gray-200">bun</code> or <code class="text-gray-200">pnpm</code> over <code class="text-gray-200">npm install</code></div>
      <div class="text-green-700 text-xs mt-1">Clean, deterministic install from lockfile. Faster, reproducible, and never mutates the lockfile during CI.</div>
    </div>
    <div class="p-3 bg-green-50 rounded-lg border border-green-200">
      <div class="font-semibold text-green-800">Logical Test Grouping</div>
      <div class="text-green-700 text-xs mt-1">Unit, component, and E2E tests run in separate jobs. Fast unit tests give instant feedback; E2E only runs on merge candidates.</div>
    </div>
  </div>
</div>


<div>
  <div class="font-bold text-gray-400 mb-3">Java / Maven</div>
  <div class="space-y-3 text-sm">
    <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
      <div class="font-semibold text-blue-800">Parallel Module Builds</div>
      <div class="text-blue-700 text-xs mt-1">like <code class="text-gray-200">-T 1C</code> flag, Maven builds independent modules in parallel, using all available CPU cores on the runner.</div>
    </div>
    <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
      <div class="font-semibold text-blue-800">Skip Unnecessary Goals</div>
      <div class="text-blue-700 text-xs mt-1">CI skips Javadoc generation, site plugin, and source jars. Produce only what is actually consumed downstream.</div>
    </div>
    <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
      <div class="font-semibold text-blue-800">Logical CI vs CD Profiles</div>
      <div class="text-blue-700 text-xs mt-1">Separate Maven profiles for CI (fast, no extras) and CD (full, with signing and publishing). Each does exactly what it needs.</div>
    </div>
  </div>
</div>

</div>


---

<h1 class="text-lg!">#6 — Prepare CD artifacts on CI</h1>

<img src="/docker-share-image.png">

---
layout: center
class: text-center
---

# The Results

<div class="grid grid-cols-3 gap-8 mt-8 max-w-3xl mx-auto">

<div class="p-6 rounded-2xl bg-red-50">
  <div class="text-6xl font-black text-red-600">~60</div>
  <div class="text-xl font-bold text-red-700 mt-1">minutes</div>
  <div class="text-sm text-red-500 mt-2">Jenkins — before</div>
  <div class="mt-4 text-xs text-gray-500 text-left space-y-1">
    <div>• Sequential stages</div>
    <div>• No caching at all</div>
    <div>• Slave queue waits</div>
    <div>• Full rebuild every run</div>
    <div>• Branches being deleted</div>
  </div>
</div>

<div class="flex items-center justify-center flex-col gap-2">
  <div class="text-8xl text-gray-300">→</div>
  <div class="text-lg text-gray-400 font-semibold uppercase tracking-wider">transformed</div>
</div>

<div class="p-6 rounded-2xl bg-green-50">
  <div class="text-6xl font-black text-green-600">~5</div>
  <div class="text-xl font-bold text-green-700 mt-1">minutes</div>
  <div class="text-sm text-green-500 mt-2">GitHub Actions — after</div>
  <div class="mt-4 text-xs text-gray-500 text-left space-y-1">
    <div>• Fully parallel jobs</div>
    <div>• Aggressive dep cache</div>
    <div>• Zero queue wait</div>
    <div>• Docker registry cache</div>
    <div>• Unlimited branches</div>
  </div>
</div>

</div>

<div class="mt-8 grid grid-cols-4 gap-4 text-center">
  <div class="p-3 bg-white/90 rounded-lg">
    <div class="text-3xl font-black text-green-600">12×</div>
    <div class="text-gray-600 text-xs mt-1">faster builds</div>
  </div>
  <div class="p-3 bg-white/90 rounded-lg">
    <div class="text-3xl font-black text-blue-600">∞</div>
    <div class="text-gray-600 text-xs mt-1">branches welcome</div>
  </div>
  <div class="p-3 bg-white/90 rounded-lg">
    <div class="text-3xl font-black text-orange-600">0</div>
    <div class="text-gray-600 text-xs mt-1">min queue wait</div>
  </div>
  <div class="p-3 bg-white/90 rounded-lg">
    <div class="text-3xl font-black text-teal-600">100%</div>
    <div class="text-gray-600 text-xs mt-1">devs in flow longer</div>
  </div>
</div>


---


<h1 class="text-lg relative -top-5">Key Takeaways</h1>

<div class="space-y-8 mt-4">

<div class="flex items-start gap-3">
  <div class="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
  <div>
    <div class="font-semibold ">Your CI should never dictate your Git strategy</div>
    <div class="text-sm text-gray-400">If you're deleting branches to relieve CI pressure, the system is broken — not the team.</div>
  </div>
</div>

<div class="flex items-start gap-3">
  <div class="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
  <div>
    <div class="font-semibold ">Cache everything, rebuild nothing</div>
    <div class="text-sm text-gray-400">Dependencies, layers, artefacts. Every unnecessary cache miss is wasted developer time, compounded across every build.</div>
  </div>
</div>

<div class="flex items-start gap-3">
  <div class="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
  <div>
    <div class="font-semibold ">Parallelism is not optional at scale</div>
    <div class="text-sm text-gray-400">Sequential pipelines are serial bottlenecks. Run everything that can be independent, concurrently, on isolated runners.</div>
  </div>
</div>

<div class="flex items-start gap-3">
  <div class="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
  <div>
    <div class="font-semibold ">Smart skipping compounds with scale</div>
    <div class="text-sm text-gray-400">The fastest build is the one you don't run. Path-based filtering multiplies savings as team and codebase grow.</div>
  </div>
</div>

<div class="flex items-start gap-3">
  <div class="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
  <div>
    <div class="font-semibold ">Tooling upgrades yield outsized returns</div>
    <div class="text-sm text-gray-400">Vite, Docker BuildX, Maven -T 1C, ARC auto-scaling. Better tools require the same effort but multiply every other optimisation.</div>
  </div>
</div>

</div>

---
layout: center
class: text-center
background: https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1
---

Team now owns the github pipelines...
Better than groovy files.

<div class="mt-6 p-1 bg-gray-100 rounded-lg border-l-4 border-blue-500">
  <span class="text-sm font-medium text-gray-700">"Ship small, ship often, ship safely."</span>
</div>

<div class="abs-inset flex flex-col items-center justify-center bg-black bg-opacity-65">

<div class="mt-10 grid grid-cols-3 gap-5 text-sm max-w-2xl mx-auto">
  
  <div class="p-4 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
    <div class="text-3xl font-black text-white">🚀</div>
    <div class="text-gray-300 mt-1 text-xs">Developer Flow</div>
  </div>
  <div class="p-4 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
    <div class="text-3xl font-black text-white">0</div>
    <div class="text-gray-300 mt-1 text-xs">Queue Wait Time</div>
  </div>
  <div class="p-4 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
    <div class="text-3xl font-black text-white">∞</div>
    <div class="text-gray-300 mt-1 text-xs">Feature Branches</div>
  </div>
</div>


</div>

---

<div class="flex align-center flex-col items-center mt-12">
<img class="w-32 mb-12" src="https://em-content.zobj.net/source/microsoft-teams/363/cowboy-hat-face_1f920.png" />

# Thank You!


<span class="text-xs -mt-4">

Slides: <a href="https://talks.catshoulder.dev/ci-cd" class="text-blue-400">talks.catshoulder.dev/ci-cd</a>

</span>

[GitHub](https://github.com/sayjeyhi) · [My Website](https://sayjeyhi.com)

</div>
