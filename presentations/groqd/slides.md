---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GROQD: Locking down your Sanity types
  Type-safe GROQ query building with Zod
drawings:
  persist: false
css: unocss
colorSchema: dark
---

# GROQD: Locking down your Sanity types <img class="w-10 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/locked_1f512.png" />

Type-safe GROQ query building with Zod

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="avtar mt-36 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">August 2026</span>
  </a>
</div>


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  What is GROQ?
</div>

<p class="text-zinc-500 text-lg mt-4">Graph-Relational Object Queries — Sanity's open-source query language</p>


---

# GROQ in a Nutshell <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/peanuts_1f95c.png" />

<br />

GROQ is Sanity's query language — think of it as **"SQL for JSON"**.

<br />

- Filter, sort, transform, and reshape JSON documents
- Join information from several document sets
- Return only the exact fields you need
- Open-source specification, not locked to Sanity

<br />

```js
*[_type == "product" && price > 50] | order(price desc) [0...10] {
  name,
  price,
  "slug": slug.current,
  "imageUrl": image.asset->url
}
```


---

# The Problem with Raw GROQ <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-spiral-eyes_1f635-200d-1f4ab.png" />

Writing GROQ queries as plain strings is flexible, but comes with pain:

<br />

| Issue | Impact |
|-------|--------|
| **No type safety** | Typos in field names go unnoticed |
| **No auto-completion** | You have to memorize field names |
| **Runtime surprises** | Schema changes silently break queries |
| **No validation** | `null` sneaks into your data |
| **Copy-paste queries** | Duplicated logic across files |

<br />

> You don't discover broken queries until they hit production <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/fire_1f525.png" />


---

# A Typical Pain Point <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-head-bandage_1f915.png" />

<br />

```typescript
// ❌ No types, no safety, no auto-complete
const query = `*[_type == "prodcut"] { name, prce, slug }`;
//                        ^ typo!          ^ typo!

const data = await sanityClient.fetch(query);
// data is `any` — good luck!
```

<br />

- Typo in `"prodcut"` → returns empty array, no error
- Typo in `prce` → field is `null`, silently
- Schema change removes `slug` → breaks at runtime
- No way to know the shape of `data` without reading the query


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/sparkles_2728.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Enter GROQD
</div>

<p class="text-zinc-500 text-lg mt-4">A type-safe query builder for GROQ with runtime validation</p>


---

# What is GROQD? <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/package_1f4e6.png" />

**GROQD** is a schema-aware, strongly-typed GROQ query builder.

<br />


| Feature | Description |
|---------|-------------|
| **Flexible** | Maintains the full flexibility of GROQ |
| **Type Safe** | Leverages TypeScript for compile-time checks |
| **Runtime Safe** | Uses Zod for runtime validation |
| **Auto-complete** | Schema-aware suggestions in your editor |
| **Fragments** | Reusable, composable query pieces |

<br />

<span class="text-xs text-gray-400">

Built by [Formidable Labs](https://github.com/FormidableLabs/groqd) (now NearForm)

</span>


---

# Installation <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/wrench_1f527.png" />

<br />

```bash
npm install groqd
```

<br />

That's it. GROQD ships with Zod bundled — one dependency to rule them all.

<br />

**Requirements:**
- TypeScript 4.9+
- Sanity schema types (generated via `sanity typegen generate`)
- A Sanity project with `@sanity/client`


---

# Configuration <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" />

```typescript
import { createClient } from "@sanity/client";
import { createGroqBuilder, makeSafeQueryRunner } from 'groqd';
import type * as SanityTypes from "./sanity.types.ts";

const sanityClient = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// 👇 Create a type-safe query runner
export const runQuery = makeSafeQueryRunner(
  (query) => sanityClient.fetch(query)
);

// 👇 Create a type-safe query builder
type SchemaConfig = {
  schemaTypes: SanityTypes.AllSanitySchemaTypes;
  referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo;
};

export const q = createGroqBuilder<SchemaConfig>({});
```


---

# The `q` Builder API <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/hammer-and-wrench_1f6e0-fe0f.png" />

| Method | GROQ equivalent | Purpose |
|--------|----------------|---------|
| `q.star` | `*` | Select all documents |
| `.filterByType("x")` | `[_type == "x"]` | Filter by document type |
| `.filter("expr")` | `[expr]` | Custom filter expression |
| `.order("field desc")` | `\| order(field desc)` | Sort results |
| `.slice(0, 10)` | `[0...10]` | Paginate results |
| `.project(...)` | `{ ... }` | Select fields (projection) |
| `.field("x")` | `.x` | Access a nested field |
| `.deref()` | `->` | Dereference a reference |


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Building Queries
</div>

<p class="text-zinc-500 text-lg mt-4">From raw strings to fully typed query chains</p>


---

# Basic Query Example <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/memo_1f4dd.png" />

<br />

```typescript
import { q, runQuery } from './sanity.config';
import { z } from 'groqd';

const productsQuery = (
  q.star
   .filterByType("product")
   .order("price desc")
   .slice(0, 10)
   .project(sub => ({
     name: z.string(),
     price: z.number(),
     slug: sub.field("slug.current", z.string()),
   }))
);

const products = await runQuery(productsQuery);
// ✅ products: Array<{ name: string, price: number, slug: string }>
```


---

# Generated GROQ Output <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/eyes_1f440.png" />

<br />

The previous query generates this GROQ:

```js
*[_type == "product"] | order(price desc) [0...10] {
  name,
  price,
  "slug": slug.current
}
```

<br />

- GROQD builds the query string for you
- The generated GROQ is clean and readable
- You get a Zod schema alongside it for parsing
- If `name` is missing from the response → Zod throws at runtime <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/shield_1f6e1-fe0f.png" />



---

# Array Fields & Nested Projections <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/puzzle-piece_1f9e9.png" />

<br />

```typescript
const blogQuery = (
  q.star
   .filterByType("post")
   .project(sub => ({
     title: z.string(),
     publishedAt: z.string(),
     tags: sub.field("tags[]", z.array(z.string())),
     comments: sub.field("comments[]").project(c => ({
       author: z.string(),
       text: z.string(),
       createdAt: z.string(),
     })),
   }))
);
```

<br />

> Every nested level is fully typed — no `any` leakage <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark-button_2705.png" />

---

# References and Dereferencing <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" />

```typescript
const articlesQuery = (
  q.star
   .filterByType("article")
   .project(sub => ({
     title: z.string(),
     authorName: sub.field("author").deref().field("name", z.string()),
     categoryTitle: sub.field("category").deref().field("title", z.string()),
     imageUrl: sub.field("mainImage.asset").deref().field("url", z.string()),
   }))
);
```

<br />

Generates:
```js
*[_type == "article"] {
  title,
  "authorName": author->name,
  "categoryTitle": category->title,
  "imageUrl": mainImage.asset->url
}
```


---

# Conditional Projections <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/light-bulb_1f4a1.png" />

Handle different document shapes with type narrowing:

```typescript
const contentQuery = (
  q.star
   .filter("_type in ['article', 'video']")
   .project(sub => ({
     _type: z.literal("article").or(z.literal("video")),
     title: z.string(),
     // Conditional fields based on type
     ...sub.conditional({
       "_type == 'article'": { body: z.string() },
       "_type == 'video'":   { videoUrl: z.string(), duration: z.number() },
     }),
   }))
);
```

<br />

> TypeScript knows which fields exist based on `_type` — discriminated unions for free.


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/building-construction_1f3d7-fe0f.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Fragments & Reusability
</div>

<p class="text-zinc-500 text-lg mt-4">DRY your queries with composable fragments</p>


---

# Fragments <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/hammer-and-wrench_1f6e0-fe0f.png" />

Define reusable field selections and compose queries from them:

```typescript
// Define a reusable fragment
const imageFields = (sub) => ({
  url: sub.field("asset").deref().field("url", z.string()),
  alt: z.string().optional(),
  width: sub.field("asset").deref().field("metadata.dimensions.width", z.number()),
  height: sub.field("asset").deref().field("metadata.dimensions.height", z.number()),
});

// Use it in multiple queries
const productQuery = q.star.filterByType("product").project(sub => ({
  name: z.string(),
  mainImage: sub.field("mainImage").project(imageFields),
  thumbnail: sub.field("thumbnail").project(imageFields),
}));
```

<br />

> Define once, use everywhere — type safety follows <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/star_2b50.png" />


---

# Composing Complex Queries <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/nerd-face_1f913.png" />

<br />

```typescript
// Shared SEO fields fragment
const seoFields = (sub) => ({
  metaTitle: sub.field("seo.title", z.string().optional()),
  metaDescription: sub.field("seo.description", z.string().optional()),
  ogImage: sub.field("seo.image.asset").deref().field("url", z.string().optional()),
});

// Page query composing multiple fragments
const pageQuery = q.star.filterByType("page").project(sub => ({
  title: z.string(),
  slug: sub.field("slug.current", z.string()),
  ...seoFields(sub),
  sections: sub.field("sections[]").project(s => ({
    _type: z.string(),
    heading: z.string().optional(),
  })),
}));
```


---

# Runtime Validation with Zod <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/shield_1f6e1-fe0f.png" />

GROQD doesn't just type-check at build time — it validates at runtime:

```typescript
const result = await runQuery(productsQuery);
// If the response doesn't match the schema → ZodError is thrown!
```

<br />

| Scenario | Without GROQD | With GROQD |
|----------|--------------|------------|
| Field deleted from schema | `undefined` at runtime | ZodError immediately |
| Field type changed | Silent data corruption | ZodError with details |
| Null in required field | Passed through | ZodError caught early |
| Extra unknown fields | Pollute your data | Stripped by Zod |

<br />

> Fail fast, fail loudly — no more silent `null` bugs <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />


---

# Transform Data at Query Time <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/sparkles_2728.png" />

<br />

Use Zod transforms to reshape data as part of the query:

```typescript
const eventsQuery = (
  q.star
   .filterByType("event")
   .project(sub => ({
     title: z.string(),
     // Parse ISO date string into a Date object
     date: z.string().transform((val) => new Date(val)),
     // Transform price from cents to formatted string
     price: z.number().transform((cents) => `€${(cents / 100).toFixed(2)}`),
     // Provide defaults for optional fields
     description: z.string().default("No description available"),
   }))
);

// date is Date, price is string, description always has a value
```


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/microscope_1f52c.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Auto-completion & DX
</div>

<p class="text-zinc-500 text-lg mt-4">The developer experience that makes it worth it</p>


---

# Schema-Aware Auto-completion <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/star-struck_1f929.png" />

<br />

Because GROQD knows your Sanity schema, your editor gives you:

<br />

- **Document type names** → `filterByType("` triggers suggestions
- **Field names** → `sub.field("` shows all available fields
- **Sort expressions** → `order("` suggests `fieldName asc/desc`
- **Reference targets** → `.deref()` knows the referenced type
- **Nested paths** → `"slug.current"` is validated against the schema

<br />

> You write queries faster because the editor tells you what's available <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/smiling-face-with-sunglasses_1f60e.png" />


---

# Catching Errors at Build Time <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/bug_1f41b.png" />

<br />

```typescript
// ❌ TypeScript error: "prodcut" is not a valid document type
q.star.filterByType("prodcut")

// ❌ TypeScript error: "prce" does not exist on type Product
q.star.filterByType("product").project(sub => ({
  prce: z.number(), // typo caught!
}))

// ❌ TypeScript error: cannot deref a non-reference field
q.star.filterByType("product").project(sub => ({
  name: sub.field("name").deref() // name is a string, not a reference!
}))
```

<br />

> Errors show up as red squiggles in your editor — not in production logs <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark-button_2705.png" />


---

# The GROQD Playground <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/joystick_1f579-fe0f.png" />

<br />

GROQD ships a **Sanity Studio plugin** — a Vision-like tool for testing queries:

<br />

- Write GROQD queries in a live editor
- Run them against your actual dataset
- See the generated GROQ and the parsed results
- Experiment before committing to code

<br />

```bash
# Install the playground plugin
npm install @groqd/playground
```

<br />

> Add it to your `sanity.config.ts` and test queries right in the Studio


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/balance-scale_2696-fe0f.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  GROQD vs Alternatives
</div>

<p class="text-zinc-500 text-lg mt-4">How does it compare?</p>


---

# Comparison: Raw GROQ vs GROQD <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-monocle_1f9d0.png" />

<div class="text-sm mt-10">

| Aspect | Raw GROQ + `sanity typegen` | GROQD |
|--------|----------------------------|-------|
| **Type generation** | CLI generates from query strings | Types inferred from builder |
| **Auto-complete** | None for query strings | Full schema-aware completion |
| **Runtime validation** | None | Built-in via Zod |
| **Reusability** | Copy-paste or template literals | First-class fragments |
| **Transformations** | Post-query mapping | Inline with Zod transforms |
| **Error discovery** | Runtime / CI | Editor / build time |
| **Learning curve** | Know GROQ syntax | Know the builder API |

</div>

<br />

> `sanity typegen` works great for simple cases — GROQD shines at scale


---

# When to Use GROQD <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/thought-balloon_1f4ad.png" />

<div class="mt-10" />

**Use GROQD when:**

<div class="text-sm">


- Your project has many complex queries
- Multiple developers touch the same queries
- Schema changes happen frequently
- You want runtime safety (catch broken data early)
- You need reusable query fragments

</div>
<br/>

**Raw GROQ is fine when:**

<div class="text-sm">

- Simple, one-off queries
- Prototyping / quick experiments
- Small projects with stable schemas
- You prefer the GROQ syntax directly

</div>

---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/books_1f4da.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Real-World Patterns
</div>

<p class="text-zinc-500 text-lg mt-4">Practical examples from production</p>


---

# Pattern: Page Builder Query <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/building-construction_1f3d7-fe0f.png" />

```typescript
const pageBuilderQuery = (slug: string) => (
  q.star
   .filterByType("page")
   .filter(`slug.current == "${slug}"`)
   .slice(0)
   .project(sub => ({
     title: z.string(),
     slug: sub.field("slug.current", z.string()),
     sections: sub.field("sections[]").project(s => ({
       _type: z.string(),
       _key: z.string(),
       ...s.conditional({
         "_type == 'hero'": {
           heading: z.string(),
           subtitle: z.string().optional(),
           cta: z.object({ label: z.string(), url: z.string() }),
         },
         "_type == 'features'": {
           items: z.array(z.object({ title: z.string(), icon: z.string() })),
         },
       }),
     })),
   }))
);
```


---

# Pattern: E-commerce Product Listing <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/shopping-cart_1f6d2.png" />

```typescript
const productListQuery = (category: string, page: number) => {
  const perPage = 12;
  const start = page * perPage;

  return (
    q.star
     .filterByType("product")
     .filter(`category->slug.current == "${category}"`)
     .order("price asc")
     .slice(start, start + perPage)
     .project(sub => ({
       _id: z.string(),
       name: z.string(),
       price: z.number().transform(c => `€${(c / 100).toFixed(2)}`),
       slug: sub.field("slug.current", z.string()),
       image: sub.field("images[0].asset").deref().field("url", z.string()),
       inStock: z.boolean().default(true),
     }))
  );
};
```


---

# Pattern: Centralized Query Layer <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/file-folder_1f4c1.png" />

<br />

Organize queries like you would organize services:

```
src/
├── sanity/
│   ├── client.ts          # Sanity client + runQuery
│   ├── builder.ts         # createGroqBuilder config
│   ├── fragments/
│   │   ├── image.ts       # Reusable image fields
│   │   ├── seo.ts         # SEO metadata fields
│   │   └── author.ts      # Author reference fields
│   └── queries/
│       ├── products.ts    # Product queries
│       ├── articles.ts    # Article queries
│       └── pages.ts       # Page queries
```

<br />

> Treat queries as first-class code — not strings buried in components


---

# Migrating from Raw GROQ <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/hammer-and-wrench_1f6e0-fe0f.png" />

You can migrate incrementally — no big-bang rewrite needed:

<br />

1. **Install** `groqd` and generate Sanity types
2. **Configure** `createGroqBuilder` and `makeSafeQueryRunner`
3. **Start with new queries** — write them in GROQD
4. **Migrate existing queries** one at a time when you touch them
5. **Extract fragments** as patterns emerge

<br />

```typescript
// Old query still works — migrate when convenient
const oldQuery = `*[_type == "product"] { name, price }`;

// New queries use GROQD
const newQuery = q.star.filterByType("product").project(sub => ({
  name: z.string(),
  price: z.number(),
}));
```


---

# Summary <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/clipboard_1f4cb.png" />

<br />

| # | Benefit | How |
|---|---------|-----|
| 1 | **Type safety** | TypeScript catches typos at build time |
| 2 | **Auto-completion** | Schema-aware suggestions in your editor |
| 3 | **Runtime validation** | Zod validates every response |
| 4 | **Transformations** | Reshape data inline with Zod transforms |
| 5 | **Fragments** | Reusable, composable query pieces |
| 6 | **Playground** | Test queries live in Sanity Studio |
| 7 | **Incremental adoption** | Migrate one query at a time |

<br />

> GROQD gives you the confidence of GraphQL schemas with the flexibility of GROQ


---
layout: center
class: 'text-center'
---

# Key Takeaways <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/star_2b50.png" />

<br />

<div class="text-left mx-auto max-w-lg text-zinc-300">

1. Raw GROQ strings are **error-prone** and hard to maintain at scale
2. GROQD provides **compile-time type checking** for your queries
3. **Zod validation** catches data shape issues before they reach your UI
4. **Auto-completion** makes writing queries fast and confident
5. **Fragments** enable DRY, composable query patterns
6. The **playground** lets you experiment before committing
7. You can adopt **incrementally** — no rewrite needed

</div>


---

# Resources <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/link_1f517.png" />

<br />

- **Documentation:** [nearform.com/open-source/groqd](https://nearform.com/open-source/groqd)
- **GitHub:** [FormidableLabs/groqd](https://github.com/FormidableLabs/groqd)
- **npm:** [npmjs.com/package/groqd](https://www.npmjs.com/package/groqd)
- **GROQ Language:** [sanity.io/docs/groq](https://www.sanity.io/docs/content-lake/groq-introduction)
- **Sanity TypeGen:** [sanity.io/docs/sanity-typegen](https://www.sanity.io/docs)

<br />

> Check out the GROQD Arcade for live, interactive examples!


---
layout: center
class: 'text-center'
---

# Thank You! <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/waving-hand_1f44b.png" />

<br />

<div class="text-zinc-400">

Questions? <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/slightly-smiling-face_1f642.png" />

</div>

<div class="avtar mt-12 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">@sayjeyhi</span>
  </a>
</div>
