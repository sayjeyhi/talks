---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## AI Friendly Codebase
  Structure your code for the age of AI assistants
drawings:
  persist: false
css: unocss
colorSchema: dark
---

# AI Friendly Codebase

Structure your code for the age of AI assistants

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="avtar mt-36 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">July 2026</span>
  </a>
</div>


---
layout: center
class: 'text-center'
---

<p class="text-zinc-500 text-lg mb-4">When AI generates bad code, most devs say:</p>
<div class="text-4xl font-black text-zinc-300 tracking-tight">
  "AI is not good enough yet"
</div>

---
layout: center
class: 'text-center'
---

<p class="text-zinc-500 text-lg mb-4">But often the real problem is:</p>
<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Your codebase isn't AI-friendly
</div>
<p class="text-zinc-500 text-base mt-6">AI reads your code the same way a new hire does — except it has no tribal knowledge.</p>

---
layout: center
class: 'text-center'
---

<div class="max-w-2xl mx-auto px-8 py-6 rounded-2xl border border-teal-500/30 bg-teal-500/5">
  <h2 class="text-2xl font-bold text-teal-200 leading-relaxed">
    The better your code is structured,<br>the better AI can help you.
  </h2>
</div>


---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/40 bg-teal-400/10 text-teal-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 01
  </div>
  <h1>Descriptive Names</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">File and folder names are context clues for AI</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-teal-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-teal-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-teal-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-mono mb-5">01 · Descriptive Names</div>

## Names are the first thing AI reads

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">AI tools scan your <span class="text-white font-semibold">file tree</span> before reading any code. Names are the primary signal for:</p>
    <ul class="space-y-2 text-sm text-zinc-400">
      <li class="flex items-center gap-2"><span class="text-teal-500">→</span> Inferring domain intent</li>
      <li class="flex items-center gap-2"><span class="text-teal-500">→</span> Choosing where to make changes</li>
      <li class="flex items-center gap-2"><span class="text-teal-500">→</span> Understanding relationships between modules</li>
      <li class="flex items-center gap-2"><span class="text-teal-500">→</span> Generating accurate new code</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-5 flex flex-col justify-center">
    <div class="text-4xl mb-4 text-center">🏷️</div>
    <p class="text-teal-200 text-center text-base font-semibold leading-relaxed">
      Expressive naming = less hallucination
    </p>
    <p class="text-zinc-500 text-center text-sm mt-2">Generic names force AI to guess.</p>
  </div>
</div>


---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-mono mb-5">01 · Descriptive Names</div>

## Bad vs Good naming

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">Vague names</span>
    </div>

```
src/
  utils.js
  helpers.ts
  data/
  components/Item.vue
  handleClick()
  process()
```

  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Descriptive names</span>
    </div>

```
src/
  format-currency.ts
  validate-email.ts
  customer-invoices/
  components/InvoiceLineItem.vue
  submitPaymentForm()
  parseShippingAddress()
```

  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-mono mb-5">01 · Descriptive Names</div>

## What AI sees in your file tree

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">AI prompt context</p>
    <div class="px-5 py-4 rounded-xl bg-black/50 border border-zinc-700 font-mono text-xs text-zinc-300 leading-loose">
      "I need to add tax calculation.<br>
      I see <span class="text-teal-300">format-currency.ts</span><br>
      and <span class="text-teal-300">customer-invoices/</span>...<br>
      I'll create <span class="text-teal-300">calculate-tax.ts</span><br>
      inside <span class="text-teal-300">customer-invoices/</span>"
    </div>
  </div>
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <p class="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">With vague names</p>
    <div class="px-5 py-4 rounded-xl bg-black/50 border border-zinc-700 font-mono text-xs text-zinc-300 leading-loose">
      "I need to add tax calculation.<br>
      I see <span class="text-red-300">utils.js</span><br>
      and <span class="text-red-300">data/</span>...<br>
      I'll just put it in <span class="text-red-300">utils.js</span>? 🤷"
    </div>
  </div>
</div>


---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 02
  </div>
  <h1>Small & Focused Files</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">One responsibility per file = better AI comprehension</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-amber-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-amber-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-amber-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono mb-5">02 · Small & Focused Files</div>

## The context window is finite

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">AI models have a <span class="text-white font-semibold">limited context window</span>. A 2000-line file eats a huge chunk of it.</p>
    <div class="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Practical range:</div>
    <div class="px-5 py-4 rounded-xl bg-black/50 border border-amber-500/20 font-mono text-2xl text-amber-300 text-center">
      50 – 150 lines per file
    </div>
    <p class="text-zinc-500 text-xs mt-3 text-center">Sweet spot for AI comprehension</p>
  </div>
  <div class="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col justify-center">
    <div class="text-4xl mb-4 text-center">📐</div>
    <p class="text-amber-200 text-center text-base font-semibold leading-relaxed">
      Smaller files = more focused context
    </p>
    <p class="text-zinc-500 text-center text-sm mt-2">The model can hold the full picture without losing details.</p>
  </div>
</div>


---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono mb-5">02 · Small & Focused Files</div>

## Context window: big file vs focused modules

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">One giant file</span>
    </div>
    <div class="space-y-1">
      <div class="h-3 rounded bg-red-500/30 w-full"></div>
      <div class="h-3 rounded bg-red-500/25 w-full"></div>
      <div class="h-3 rounded bg-red-500/20 w-full"></div>
      <div class="h-3 rounded bg-red-500/15 w-full"></div>
      <div class="h-3 rounded bg-red-500/10 w-full"></div>
      <div class="h-3 rounded bg-red-500/10 w-full"></div>
      <div class="h-3 rounded bg-zinc-800 w-full"></div>
      <div class="h-3 rounded bg-zinc-800 w-full"></div>
    </div>
    <p class="text-zinc-500 text-xs mt-3 text-center">2000 lines → context full, details lost</p>
  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Focused modules</span>
    </div>
    <div class="space-y-1">
      <div class="h-3 rounded bg-green-500/40 w-2/5"></div>
      <div class="h-3 rounded bg-teal-500/40 w-1/3"></div>
      <div class="h-3 rounded bg-amber-500/40 w-2/5"></div>
      <div class="h-3 rounded bg-purple-500/40 w-1/4"></div>
      <div class="h-3 rounded bg-zinc-800/50 w-full"></div>
      <div class="h-3 rounded bg-zinc-800/50 w-full"></div>
      <div class="h-3 rounded bg-zinc-800/50 w-full"></div>
      <div class="h-3 rounded bg-zinc-800/50 w-full"></div>
    </div>
    <p class="text-zinc-500 text-xs mt-3 text-center">Only load the module you need → context stays lean</p>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono mb-5">02 · Small & Focused Files</div>

## Single Responsibility = AI alignment

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">Why it matters for AI</p>
    <ul class="space-y-2.5 text-sm text-zinc-300">
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs flex-shrink-0">1</span>
        AI can read the entire file in one pass
      </li>
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs flex-shrink-0">2</span>
        Changes are scoped — less risk of side effects
      </li>
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs flex-shrink-0">3</span>
        Tests map 1:1 to functionality
      </li>
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs flex-shrink-0">4</span>
        Easier for AI to reason about dependencies
      </li>
    </ul>
  </div>
  <div class="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col justify-center text-center">
    <div class="text-3xl font-black text-amber-300 mb-2">SRP</div>
    <div class="text-zinc-400 text-sm">Single Responsibility Principle</div>
    <div class="text-zinc-600 text-xs mt-2">Good for humans. Essential for AI.</div>
  </div>
</div>


---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/40 bg-orange-400/10 text-orange-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 03
  </div>
  <h1>Explicit Over Magic</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">Visible dependencies, named constants, direct imports</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-orange-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-orange-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-orange-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-5">03 · Explicit Over Magic</div>

## Magic is invisible to AI

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">AI traces code by following <span class="text-white font-semibold">explicit references</span>. When behavior is hidden behind magic, the model can't follow the trail.</p>
    <div class="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Hard for AI to trace:</div>
    <ul class="space-y-2 text-sm text-zinc-400">
      <li class="flex items-center gap-2"><span class="text-orange-500">✗</span> Barrel exports (index.ts re-exports)</li>
      <li class="flex items-center gap-2"><span class="text-orange-500">✗</span> Dynamic requires / imports</li>
      <li class="flex items-center gap-2"><span class="text-orange-500">✗</span> Magic numbers / unexplained literals</li>
      <li class="flex items-center gap-2"><span class="text-orange-500">✗</span> Implicit global state</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 flex flex-col justify-center">
    <div class="text-4xl mb-4 text-center">🪄</div>
    <p class="text-orange-200 text-center text-base font-semibold leading-relaxed">
      If a human needs tribal knowledge to understand it, AI will hallucinate.
    </p>
  </div>
</div>


---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-5">03 · Explicit Over Magic</div>

## Bad vs Good: imports & constants

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">Magic & implicit</span>
    </div>

```ts
// Barrel re-export — where does it live?
import { validate } from '@/utils'

// Magic number — what is 86400?
setTimeout(cleanup, 86400 * 1000)

// Dynamic require — AI can't trace
const mod = require(`./${name}`)
```

  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Explicit & traceable</span>
    </div>

```ts
// Direct import — clear origin
import { validateEmail }
  from '@/validators/validate-email'

// Named constant — self-documenting
const ONE_DAY_MS = 86_400_000
setTimeout(cleanup, ONE_DAY_MS)

// Static import — AI can follow
import { ShippingModule }
  from './shipping.module'
```

  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300 text-xs font-mono mb-5">03 · Explicit Over Magic</div>

## Typed interfaces over `any`

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">Untyped</span>
    </div>

```ts
function processOrder(data: any) {
  // AI has no idea what 'data' contains
  return data.items.map(i => i.price * i.qty)
}
```

  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Typed interface</span>
    </div>

```ts
interface OrderItem {
  productId: string
  price: number
  qty: number
}

interface Order {
  id: string
  items: OrderItem[]
  currency: string
}

function calculateTotal(order: Order) {
  return order.items
    .reduce((sum, i) => sum + i.price * i.qty, 0)
}
```

  </div>
</div>


---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-400/10 text-purple-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 04
  </div>
  <h1>Reduce Duplication (DRY)</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">Repeated patterns make AI inconsistent</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-purple-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-5">04 · Reduce Duplication</div>

## Why duplication hurts AI

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">When the same logic exists in <span class="text-white font-semibold">multiple places</span>, AI faces a consistency problem:</p>
    <ul class="space-y-2.5 text-sm text-zinc-400">
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">1</span>
        AI changes one location, misses the duplicate
      </li>
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">2</span>
        Behavior drifts between copies over time
      </li>
      <li class="flex items-center gap-3">
        <span class="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs flex-shrink-0">3</span>
        AI may pick the wrong version as reference
      </li>
    </ul>
  </div>
  <div class="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-5 flex flex-col justify-center text-center">
    <div class="text-5xl font-black text-purple-400/80 mb-3">3×</div>
    <p class="text-zinc-300 text-sm">Same validation in 3 files</p>
    <p class="text-zinc-500 text-xs mt-1">= 3× chance of inconsistent AI edits</p>
  </div>
</div>


---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 text-xs font-mono mb-5">04 · Reduce Duplication</div>

## Duplicated vs shared utility

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">Same logic in 3 places</span>
    </div>

```ts
// signup.ts
if (!email.includes('@') || email.length < 5) {
  throw new Error('Invalid email')
}

// checkout.ts
if (!email.includes('@') || email.length < 5) {
  throw new Error('Invalid email')
}

// invite.ts
if (!email.includes('@') || email.length < 5) {
  throw new Error('Invalid email')
}
```

  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Shared utility</span>
    </div>

```ts
// validate-email.ts
export function validateEmail(email: string) {
  if (!email.includes('@') || email.length < 5) {
    throw new Error('Invalid email')
  }
}

// signup.ts
import { validateEmail }
  from './validate-email'
validateEmail(input.email)

// checkout.ts — same import
// invite.ts — same import
```

  </div>
</div>

<div class="mt-4 px-5 py-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-200 text-sm text-center">
  Single source of truth → AI changes it once, everywhere stays consistent.
</div>


---
layout: section
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-400/40 bg-rose-400/10 text-rose-300 text-xs font-mono tracking-widest mb-8 uppercase">
    Section 05
  </div>
  <h1>Remove Dead Code & Clutter</h1>
  <p class="text-2xl text-zinc-400 italic mt-4">Outdated code misleads AI generation</p>
  <div class="mt-10 flex gap-3">
    <div class="w-2 h-2 rounded-full bg-rose-400" style="opacity:0.7"></div>
    <div class="w-2 h-2 rounded-full bg-rose-400" style="opacity:0.4"></div>
    <div class="w-2 h-2 rounded-full bg-rose-400" style="opacity:0.2"></div>
  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-rose-400/30 bg-rose-400/10 text-rose-300 text-xs font-mono mb-5">05 · Remove Dead Code</div>

## Dead code poisons AI output

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-5">
    <p class="text-zinc-300 text-sm leading-relaxed mb-4">AI models treat <span class="text-white font-semibold">all code equally</span>. They can't tell what's dead vs active.</p>
    <div class="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">What misleads AI:</div>
    <ul class="space-y-2 text-sm text-zinc-400">
      <li class="flex items-center gap-2"><span class="text-rose-500">→</span> Commented-out code blocks</li>
      <li class="flex items-center gap-2"><span class="text-rose-500">→</span> Unused imports at the top of files</li>
      <li class="flex items-center gap-2"><span class="text-rose-500">→</span> Deprecated files still in the tree</li>
      <li class="flex items-center gap-2"><span class="text-rose-500">→</span> Old API routes never removed</li>
      <li class="flex items-center gap-2"><span class="text-rose-500">→</span> Legacy patterns in test fixtures</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5 flex flex-col justify-center">
    <div class="text-4xl mb-4 text-center">🧟</div>
    <p class="text-rose-200 text-center text-base font-semibold leading-relaxed">
      AI may generate code following old, dead patterns it found in your repo.
    </p>
    <p class="text-zinc-500 text-center text-sm mt-2">Clean repo = better AI output.</p>
  </div>
</div>


---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-rose-400/30 bg-rose-400/10 text-rose-300 text-xs font-mono mb-5">05 · Remove Dead Code</div>

## Example: commented code confuses generation

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✗</div>
      <span class="text-red-300 font-semibold text-sm">Cluttered file</span>
    </div>

```ts
import { oldAuth } from './legacy-auth' // unused
// import { newAuth } from './auth-v2'

export function login(user: string) {
  // TODO: remove after migration
  // const token = oldAuth.getToken(user)
  // if (!token) {
  //   return oldAuth.refresh(user)
  // }

  // New implementation:
  return fetch('/api/auth', {
    method: 'POST',
    body: JSON.stringify({ user })
  })
}
```

  </div>
  <div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">✓</div>
      <span class="text-green-300 font-semibold text-sm">Clean file</span>
    </div>

```ts
export function login(user: string) {
  return fetch('/api/auth', {
    method: 'POST',
    body: JSON.stringify({ user })
  })
}
```

<p class="text-zinc-400 text-sm mt-4 leading-relaxed">No ambiguity. AI knows exactly what pattern to follow when extending this module.</p>

  </div>
</div>

---

<div class="inline-flex items-center px-3 py-1 rounded-full border border-rose-400/30 bg-rose-400/10 text-rose-300 text-xs font-mono mb-5">05 · Remove Dead Code</div>

## Keep your repo clean

<div class="grid grid-cols-3 gap-4 mt-4">
  <div class="rounded-2xl bg-zinc-900/60 p-5" style="border-top: 3px solid #f43f5e; border-left: 1px solid rgba(244,63,94,0.2); border-right: 1px solid rgba(244,63,94,0.2); border-bottom: 1px solid rgba(244,63,94,0.2);">
    <div class="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-xl mb-4">🗑️</div>
    <h3 class="text-white font-semibold text-sm mb-1">Delete dead files</h3>
    <p class="text-zinc-400 text-xs leading-relaxed">If it's not imported anywhere, it shouldn't exist. Git has history.</p>
  </div>
  <div class="rounded-2xl bg-zinc-900/60 p-5" style="border-top: 3px solid #f43f5e; border-left: 1px solid rgba(244,63,94,0.2); border-right: 1px solid rgba(244,63,94,0.2); border-bottom: 1px solid rgba(244,63,94,0.2);">
    <div class="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-xl mb-4">🧹</div>
    <h3 class="text-white font-semibold text-sm mb-1">Remove comments</h3>
    <p class="text-zinc-400 text-xs leading-relaxed">Commented-out code is noise. Let version control be your archive.</p>
  </div>
  <div class="rounded-2xl bg-zinc-900/60 p-5" style="border-top: 3px solid #f43f5e; border-left: 1px solid rgba(244,63,94,0.2); border-right: 1px solid rgba(244,63,94,0.2); border-bottom: 1px solid rgba(244,63,94,0.2);">
    <div class="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-xl mb-4">📦</div>
    <h3 class="text-white font-semibold text-sm mb-1">Prune unused deps</h3>
    <p class="text-zinc-400 text-xs leading-relaxed">Unused imports and packages add confusion to AI analysis.</p>
  </div>
</div>


---
layout: center
class: 'text-center'
---

<div class="max-w-3xl mx-auto">
  <h1 class="text-3xl font-black mb-8">The AI-Friendly Codebase Checklist</h1>

  <div class="text-left space-y-4">
    <div class="flex items-center gap-4 px-6 py-3 rounded-xl border border-teal-500/30 bg-teal-500/5">
      <span class="text-teal-400 font-bold text-lg">01</span>
      <span class="text-zinc-200 text-sm">Use <strong>descriptive names</strong> — files, folders, functions, variables</span>
    </div>
    <div class="flex items-center gap-4 px-6 py-3 rounded-xl border border-amber-500/30 bg-amber-500/5">
      <span class="text-amber-400 font-bold text-lg">02</span>
      <span class="text-zinc-200 text-sm">Keep files <strong>small & focused</strong> — 50–150 lines, one responsibility</span>
    </div>
    <div class="flex items-center gap-4 px-6 py-3 rounded-xl border border-orange-500/30 bg-orange-500/5">
      <span class="text-orange-400 font-bold text-lg">03</span>
      <span class="text-zinc-200 text-sm">Be <strong>explicit over magic</strong> — direct imports, named constants, typed interfaces</span>
    </div>
    <div class="flex items-center gap-4 px-6 py-3 rounded-xl border border-purple-500/30 bg-purple-500/5">
      <span class="text-purple-400 font-bold text-lg">04</span>
      <span class="text-zinc-200 text-sm"><strong>Reduce duplication</strong> — single source of truth for every behavior</span>
    </div>
    <div class="flex items-center gap-4 px-6 py-3 rounded-xl border border-rose-500/30 bg-rose-500/5">
      <span class="text-rose-400 font-bold text-lg">05</span>
      <span class="text-zinc-200 text-sm"><strong>Remove dead code</strong> — clean repo = better AI output</span>
    </div>
  </div>
</div>

---
layout: center
class: 'text-center'
---

<div class="flex flex-col items-center justify-center">
  <h1 class="text-5xl font-black mb-6">Thank you!</h1>
  <p class="text-zinc-400 text-lg mb-8">Structure your code for humans and machines alike.</p>

  <div class="avtar rounded-full flex align-center justify-center">
    <img class="w-16 h-16 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />
    <div class="text-left ml-4 mt-1">
      <strong class="text-xl">Jafar Rezaei</strong> <br/>
      <span class="text-gray-400 text-sm">Squad Lead at Lyreco</span>
    </div>
  </div>

  <div class="mt-8 flex gap-6 text-sm text-zinc-500">
    <a href="https://github.com/sayjeyhi" class="hover:text-zinc-300 transition-colors">
      <carbon:logo-github class="inline mr-1"/> sayjeyhi
    </a>
  </div>
</div>
