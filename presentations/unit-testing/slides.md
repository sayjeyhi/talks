---
theme: seriph
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Unit Testing Best Practices
  Writing reliable, maintainable tests
drawings:
  persist: false
css: unocss
colorSchema: dark
---

# Unit Testing Best Practices <img class="w-10 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/smiling-face-with-smiling-eyes_1f60a.png" />

Writing reliable, maintainable tests

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

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/microscope_1f52c.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Why do we write tests?
</div>

<p class="text-zinc-500 text-lg mt-4">Confidence, documentation, and faster feedback loops</p>


---

# The Testing Pyramid <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/direct-hit_1f3af.png" />

<br />

```
        ╱  ╲
       ╱ E2E ╲        ← Slow, expensive, brittle
      ╱────────╲
     ╱Integration╲    ← Moderate speed, real interactions
    ╱──────────────╲
   ╱  Unit Tests     ╲ ← Fast, cheap, focused
  ╱════════════════════╲
```

<br />

- **Unit tests** form the foundation — fast, isolated, and numerous
- **Integration tests** verify components work together
- **E2E tests** validate full user flows (use sparingly)


---

# What Makes a Good Unit Test? <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/thinking-face_1f914.png" />

<br />

| Principle | Description |
|-----------|-------------|
| **Fast** | Runs in milliseconds |
| **Isolated** | No shared state, no external dependencies |
| **Repeatable** | Same result every time |
| **Self-validating** | Pass or fail, no manual inspection |
| **Timely** | Written alongside the code |

<br />

> These are the **F.I.R.S.T** principles of unit testing


---

# Tools to Enforce F.I.R.S.T <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/wrench_1f527.png" />

<div class="text-sm">

| Principle | Tool / Technique | What it detects |
|-----------|-----------------|-----------------|
| **Fast** | `jest --detectSlowTests`, `vitest --reporter=verbose` | Tests exceeding time thresholds |
| **Isolated** | `jest --randomize`, `vitest --sequence.shuffle` | Order-dependent tests (shared state leaks) |
| **Repeatable** | `eslint-plugin-no-only-tests`, `jest --forceExit` | Flaky tests, hanging async operations |
| **Self-validating** | `eslint-plugin-jest` (`no-conditional-expect`, `expect-expect`) | Tests without assertions, conditional logic in tests |
| **Timely** | Coverage gating in CI (`--coverage --threshold`) | Untested new code |

</div>

<br />

> Automate these checks in CI — don't rely on code review to catch bad tests


---


<br />

**Quick wins:** <img class="w-6 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/grinning-face-with-smiling-eyes_1f604.png" />
- Add `"jest/expect-expect": "error"` to catch assertion-free tests
- Run tests in **random order** to surface hidden dependencies
- Set a **per-test timeout** (e.g., 5s) to flag slow tests early


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/test-tube_1f9ea.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Test Recommendations
</div>

<p class="text-zinc-500 text-lg mt-4">Guidelines and conventions for writing tests</p>


---

# 1. Use the AAA Pattern <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/memo_1f4dd.png" />

<br/>

Every test should be structured with clearly separated phases marked by comments. This makes tests readable, predictable, and easy to review.

<br/>

- **Arrange** — Set up the test data and preconditions
- **Act** — Execute the code under test
- **Assert** — Verify the expected outcome

<br/>

> **Note:** If a test only has Act + Assert (no setup needed), the `// Arrange` comment can be omitted, but always separate Act from Assert.


---

# AAA Pattern Example

```typescript
it('should return the formatted price', () => {
  // Arrange
  const price = 10.5;
  const currency = 'EUR';

  // Act
  const result = formatPrice(price, currency);

  // Assert
  expect(result).toBe('€10.50');
});
```


---

# 2. Prefer `jest.spyOn` Over `jest.mock` <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/eyes_1f440.png" />

<br />

Use `jest.spyOn` instead of `jest.mock` when you want to stub a single export from a module. It is more explicit, keeps the module's remaining exports intact, and automatically restores in `afterEach` (our config has `restoreMocks: true`).


---

# `jest.spyOn` vs `jest.mock` — Example

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> **Avoid**

```typescript
jest.mock('../services/CartService', () => ({
  fetchCart: jest.fn().mockResolvedValue({ items: [] }),
}));
```

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> **Prefer**

```typescript
import * as CartServiceModule from '../services/CartService';

beforeEach(() => {
  jest.spyOn(CartServiceModule, 'fetchCart').mockResolvedValue({ items: [] });
});
```


---

# When `jest.mock` Is Acceptable

<br />

- Mocking an entire **third-party library** (e.g., `next/navigation`, `server-only`)
- Mocking **Node built-in modules** (e.g., `fs`, `path`, `crypto`) whose exports are often non-configurable and cannot be spied on
- Mocking a **React component** to replace it with a stub JSX (preventing child rendering)
- When `jest.spyOn` is technically not possible (default exports, non-configurable properties)


---

# 3. Always Start `it()` Blocks With `'should'` <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/light-bulb_1f4a1.png" />

Test descriptions must start with the word **`should`** to read as a sentence when combined with the surrounding `describe`.

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> **Avoid**

```typescript
it('returns a value', () => { ... });
it('When rerendering the hook again, the total value should persist', () => { ... });
it('renders the component', () => { ... });
```

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> **Prefer**

```typescript
it('should return a value', () => { ... });
it('should persist the total value after rerendering', () => { ... });
it('should render the component', () => { ... });
```

> Reading the full path: `describe('When rerendering') → it('should persist the total value')` produces clear documentation.


---

# 4. Make Tests a Living Document <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/books_1f4da.png" />

Tests serve as **living documentation** of the feature's behavior. Use nested `describe` blocks prefixed with `When` to group scenarios logically. A reader should be able to understand what the feature does just by reading the test structure.


---

# Living Document — <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> Flat Tests

```typescript
describe('CartService', () => {
  it('should return empty cart when user is not logged in', () => { ... });
  it('should return items when user is logged in', () => { ... });
  it('should add item to cart', () => { ... });
  it('should show error when product is out of stock', () => { ... });
});
```


---

# Living Document — <img class="w-6 inline mr-1" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> Nested Describes

```typescript
describe('CartService', () => {
  describe('When the user is not logged in', () => {
    it('should return an empty cart', () => { ... });
  });

  describe('When the user is logged in', () => {
    it('should return the cart items', () => { ... });

    describe('When adding an item to the cart', () => {
      it('should include the new item', () => { ... });

      describe('When the product is out of stock', () => {
        it('should show an error message', () => { ... });
      });
    });
  });
});
```


---

# Living Document — Test Output

The test output reads like a specification:

```
CartService
  When the user is logged in
    When adding an item to the cart
      ✓ should include the new item
      When the product is out of stock
        ✓ should show an error message
```


---

# 5. Avoid Adding `When` in `it()` — Use `describe` Instead <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/warning_26a0-fe0f.png" />

Conditions and scenarios belong in `describe` blocks. The `it` block should only express the **expected outcome**.

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> **Avoid**

```typescript
it('when theres no data in cache', async () => { ... });
it('When rerendering the hook again, the total value should persist', () => { ... });
```

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> **Prefer**

```typescript
describe('When there is no data in cache', () => {
  it('should not render the component', async () => { ... });
});

describe('When rerendering the hook', () => {
  it('should persist the total value', () => { ... });
});
```


---

# 6. Create Reusable Mocked Services <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/package_1f4e6.png" />

When a service or dependency is mocked frequently across tests, create a **shared mock utility** in `packages/utils/src/testing/`. Check that directory before writing a new one.

<br />

| Utility | Purpose |
|---------|---------|
| `mockCookieService()` | Mocks both server and client cookie services |
| `mockTranslations()` | Mocks all translation hooks and services |
| `mockHeadersService()` | Mocks Next.js headers |
| `mockUseAppConfig()` | Mocks app config context |
| `useFakeSanitizedSearchParams()` | Mocks URL search params |
| `useFakeRouter()` | Mocks Next.js router |
| `useFakePrices()` | Mocks pricing hook |
| `mockCacheService()` | Mocks cache service |
| `fakeHttpClient` | Provides a fake HTTP client |


---

# Naming Convention for Mocks <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/sparkles_2728.png" />

<br />

| Prefix | Usage |
|--------|-------|
| **`mock*`** | Functions that call `jest.spyOn` internally (side-effectful, call in `beforeEach`) |
| **`fake*`** / **`createFake*`** | Pure factory functions that return mock data or service instances |
| **`useFake*`** | Utilities that set up spies targeting React hooks or their return values |

<br />

### When to create a new shared mock

- The same module is mocked in **3+ test files** with the same setup
- The mock requires **complex setup** (e.g., fake state management)
- The mock represents a **core domain concern** (auth, analytics, navigation)


---

# Reusable Mock — Example

```typescript
// packages/utils/src/testing/mockAnalyticsService.ts
import * as AnalyticsServiceModule from '../services/analytics/AnalyticsService';

export function mockAnalyticsService() {
  const pushAddToCartEventSpy = jest.fn();
  const pushRemoveFromCartEventSpy = jest.fn();
  const pushViewItemEventSpy = jest.fn();

  jest.spyOn(AnalyticsServiceModule, 'AnalyticsService', 'get').mockReturnValue({
    getInstance: () => ({
      pushAddToCartEvent: pushAddToCartEventSpy,
      pushRemoveFromCartEvent: pushRemoveFromCartEventSpy,
      pushViewItemEvent: pushViewItemEventSpy,
    }),
  } as never);

  return {
    pushAddToCartEventSpy,
    pushRemoveFromCartEventSpy,
    pushViewItemEventSpy,
  };
}
```


---

# 7. Test Behavior, Not Implementation <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/smiling-face-with-sunglasses_1f60e.png" />

Tests should verify **observable outcomes** (return values, rendered output, side effects visible to the user) rather than internal mechanics.

> Tests coupled to implementation break when you refactor — even if the behavior is still correct.


---

# Test Behavior — Example
-

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> **Bad — tests implementation details**

```typescript
it('should call internal _processItems method', () => {
  // Arrange
  const spy = jest.spyOn(cart, '_processItems');

  // Act
  cart.checkout();

  // Assert
  expect(spy).toHaveBeenCalled();
});
```

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> **Good — tests observable behavior**

```typescript
it('should empty the cart after checkout', () => {
  // Arrange
  cart.addItem({ id: 1, name: 'Widget', price: 10 });

  // Act
  cart.checkout();

  // Assert
  expect(cart.items).toHaveLength(0);
});
```


---

# What to Assert Instead

<br />

| Instead of testing... | Test this... |
|---|---|
| Internal method was called | The public output/state changed correctly |
| Component state variable changed | The rendered UI reflects the change |
| A private helper returned a value | The parent function returns the expected result |
| An internal event was emitted | The user-visible side effect occurred |


---

# 8. One Assertion Per Concept <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/puzzle-piece_1f9e9.png" />

Each `it` block should test **one concept**. Multiple `expect` calls are fine when they verify different aspects of the **same concept**, but avoid testing multiple unrelated behaviors in a single `it`.

> When a test fails, a focused assertion tells you **exactly** what broke. A multi-concern test forces you to investigate which of several unrelated things went wrong.


---

# One Assertion — Example

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> **Bad — testing multiple unrelated things**

```typescript
it('should handle user registration', () => {
  const user = registerUser('john@example.com', 'pass123');
  expect(user.email).toBe('john@example.com');
  expect(user.isActive).toBe(true);
  expect(sendEmailMock).toHaveBeenCalled();
  expect(database.users).toHaveLength(1);
});
```

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> **Good — focused on one concept**

```typescript
it('should create an active user with the given email', () => {
  const user = registerUser('john@example.com', 'pass123');
  expect(user.email).toBe('john@example.com');
  expect(user.isActive).toBe(true);
});

it('should send a welcome email after registration', () => {
  registerUser('john@example.com', 'pass123');
  expect(sendEmailMock).toHaveBeenCalledWith('john@example.com');
});
```


---

# 9. Tests Must Be Independent <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/shield_1f6e1-fe0f.png" />

Each test must be **self-contained** and never depend on the execution order or state left behind by another test. Shared mutable state between tests creates flaky failures.

> If you need shared setup, use `beforeEach` — it runs fresh before **every** test. Never rely on `let` variables mutated by a previous `it` block.


---

# Independent Tests — Example

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/cross-mark_274c.png" /> **Bad — tests depend on execution order**

```typescript
let sharedUser;

it('should create user', () => {
  sharedUser = createUser('test@example.com');
  expect(sharedUser).toBeDefined();
});

it('should update user', () => {
  // Fails if previous test didn't run!
  updateUser(sharedUser.id, { name: 'Updated' });
  expect(sharedUser.name).toBe('Updated');
});
```

<img class="w-6 inline mr-2" src="https://em-content.zobj.net/source/microsoft-teams/400/check-mark_2714-fe0f.png" /> **Good — each test is self-contained**

```typescript
it('should update user name', () => {
  // Arrange
  const user = createUser('test@example.com');

  // Act
  updateUser(user.id, { name: 'Updated' });

  // Assert
  expect(user.name).toBe('Updated');
});
```


---

# 10. Test Edge Cases <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/bug_1f41b.png" />

Don't just test the happy path. Edge cases are where most bugs hide. Think about: empty inputs, null/undefined, boundary values, negative numbers, very large values, and error conditions.


---

# Edge Cases — Example

```typescript
describe('divide', () => {
  it('should divide two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should handle division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  it('should handle negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  it('should handle decimal results', () => {
    expect(divide(1, 3)).toBeCloseTo(0.333);
  });

  it('should handle very large numbers', () => {
    expect(divide(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });
});
```


---

# Common Edge Cases to Consider <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/fire_1f525.png" />

<br />

| Type | Edge cases |
|------|-----------|
| Strings | Empty `''`, whitespace `'  '`, special chars, unicode, very long strings |
| Numbers | `0`, negative, `NaN`, `Infinity`, `Number.MAX_SAFE_INTEGER` |
| Arrays | Empty `[]`, single element, duplicates, very large arrays |
| Objects | Empty `{}`, missing keys, `null`, `undefined` |
| Async | Timeout, rejection, concurrent calls, empty responses |


---

# Property-Based Testing with `fast-check` <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/rocket_1f680.png" />

For functions with clear mathematical or logical properties, consider using [fast-check](https://github.com/dubzzz/fast-check) to automatically generate hundreds of edge cases you'd never think of manually.

<br />

### Where fast-check shines

- **Parsers/serializers** — `decode(encode(x)) === x`
- **Sorting** — result is sorted and contains the same elements
- **String manipulation** — length invariants, character preservation
- **Math functions** — commutativity, associativity, identity
- **Date/time calculations** — round-trip conversions
- **Validation logic** — valid inputs always pass, invalid always fail

> `fast-check` doesn't replace example-based tests — it complements them.


---

# fast-check — Sort Example

```typescript
import fc from 'fast-check';

describe('sortNumbers', () => {
  it('should sort numbers in ascending order', () => {
    // Arrange
    const input = [3, 1, 4, 1, 5];

    // Act
    const result = sortNumbers(input);

    // Assert
    expect(result).toEqual([1, 1, 3, 4, 5]);
  });

  it('should always return the same length as the input', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (input) => {
        const result = sortNumbers(input);
        expect(result).toHaveLength(input.length);
      }),
    );
  });
});
```


---

# fast-check — More Examples

```typescript
import fc from 'fast-check';

describe('capitalizeWhenAllUppercase', () => {
  it('should be idempotent for already-capitalized strings', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (input) => {
          // Arrange
          const capitalized = capitalizeWhenAllUppercase(input);

          // Act
          const result = capitalizeWhenAllUppercase(capitalized);

          // Assert
          expect(result).toBe(capitalized);
        },
      ),
    );
  });
});

describe('JSON serialization round-trip', () => {
  it('should preserve data through encode/decode', () => {
    fc.assert(
      fc.property(fc.jsonValue(), (value) => {
        const result = JSON.parse(JSON.stringify(value));
        expect(result).toEqual(value);
      }),
    );
  });
});
```


---

# 11. Additional Guidelines <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/gear_2699-fe0f.png" />

### Use `createFake*` factories for test data

Place fake data factories in `/specs/mocks/` directories close to the tests that use them.

```typescript
// specs/mocks/fakeCartItem.ts
export const createFakeCartItem = (overrides?: Partial<CartItem>): CartItem => ({
  id: 'item-1',
  name: 'Paper A4',
  price: 10.5,
  quantity: 1,
  ...overrides,
});
```

### Use `describe.each` for parameterized tests

```typescript
describe.each([
  { input: 'UPPERCASE', expected: 'Uppercase' },
  { input: 'lowercase', expected: 'lowercase' },
  { input: 'Mixed', expected: 'Mixed' },
])('When input is "$input"', ({ input, expected }) => {
  it('should return the correctly cased string', () => {
    expect(formatCase(input)).toBe(expected);
  });
});
```


---

# Summary Checklist <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/clipboard_1f4cb.png" />

| # | Rule | Quick Check |
|---|------|-------------|
| 1 | AAA pattern | Every test has `// Arrange`, `// Act`, `// Assert` |
| 2 | `spyOn` over `mock` | `jest.mock` only for full modules or components |
| 3 | `it('should ...')` | Every `it()` starts with `should` |
| 4 | Living document | Nested `describe('When ...')` blocks group scenarios |
| 5 | No `when` in `it()` | Conditions in `describe`, outcomes in `it` |
| 6 | Shared mock services | Repeated mocks → `packages/utils/src/testing/` |
| 7 | Test behavior | Assert observable outcomes, not internals |
| 8 | One assertion per concept | Each `it` tests one concept |
| 9 | Independent tests | No shared mutable state; use `beforeEach` |
| 10 | Test edge cases | Cover boundaries, nulls, errors, large values |
| 11 | `createFake*` factories | Test data via factories in `specs/mocks/` |


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-monocle_1f9d0.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Code Coverage ≠ Quality
</div>

<p class="text-zinc-500 text-lg mt-4">100% coverage with bad tests is worse than 70% coverage with good tests</p>

<br />

<div class="text-left mx-auto max-w-md text-zinc-400 text-sm">

- Coverage tells you what ran, not what was verified
- Focus on **critical paths** and **edge cases**
- Aim for meaningful assertions, not just execution

</div>


---

# Test Doubles Cheat Sheet <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/nerd-face_1f913.png" />

<br />

| Type | Purpose | Example |
|------|---------|---------|
| **Stub** | Returns predefined data | `getUser() → { name: 'Test' }` |
| **Mock** | Verifies interactions | `expect(mock).toHaveBeenCalled()` |
| **Spy** | Wraps real implementation | `jest.spyOn(obj, 'method')` |
| **Fake** | Simplified working implementation | In-memory database |
| **Dummy** | Fills parameter lists | `null`, empty object |


---

# When NOT to Unit Test <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/face-with-raised-eyebrow_1f928.png" />

<br />

- **Trivial getters/setters** — no logic to verify
- **Framework internals** — trust your tools
- **Pure configuration** — test at integration level
- **Third-party library behavior** — not your responsibility

<br />

> Focus testing effort where **bugs are most likely** and **cost is highest**


---
layout: center
class: 'text-center'
---

# Key Takeaways <img class="w-8 inline" src="https://em-content.zobj.net/source/microsoft-teams/400/star_2b50.png" />

<br />

<div class="text-left mx-auto max-w-lg text-zinc-300">

1. Follow the **AAA pattern** for clarity
2. Prefer **`jest.spyOn`** over `jest.mock`
3. Start `it()` blocks with **`should`**
4. Use nested **`describe`** for living documentation
5. Keep **`when`** out of `it()` — use `describe`
6. Create **reusable mock services**
7. Test **behavior**, not implementation
8. One **assertion per concept**
9. Keep tests **independent**
10. Cover **edge cases** and error paths
11. Use **`createFake*`** factories for test data

</div>


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
