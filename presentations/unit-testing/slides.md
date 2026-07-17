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

# Unit Testing Best Practices

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

# The Testing Pyramid

<br />

```
        ╱╲
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

# What Makes a Good Unit Test?

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

# Tools to Enforce F.I.R.S.T

<br />

| Principle | Tool / Technique | What it detects |
|-----------|-----------------|-----------------|
| **Fast** | `jest --detectSlowTests`, `vitest --reporter=verbose` | Tests exceeding time thresholds |
| **Isolated** | `jest --randomize`, `vitest --sequence.shuffle` | Order-dependent tests (shared state leaks) |
| **Repeatable** | `eslint-plugin-no-only-tests`, `jest --forceExit` | Flaky tests, hanging async operations |
| **Self-validating** | `eslint-plugin-jest` (`no-conditional-expect`, `expect-expect`) | Tests without assertions, conditional logic in tests |
| **Timely** | Coverage gating in CI (`--coverage --threshold`) | Untested new code |

<br />

> Automate these checks in CI — don't rely on code review to catch bad tests

<br />

**Quick wins:**
- Add `"jest/expect-expect": "error"` to catch assertion-free tests
- Run tests in **random order** to surface hidden dependencies
- Set a **per-test timeout** (e.g., 5s) to flag slow tests early


---
layout: center
class: 'text-center'
---

<img class="w-20 mx-auto mb-6" src="https://em-content.zobj.net/source/microsoft-teams/400/detective_light-skin-tone_1f575-1f3fb_1f3fb.png" />

<div class="text-4xl font-black text-zinc-300 tracking-tight">
  Best Practice #1
</div>

<p class="text-zinc-500 text-lg mt-4">Arrange, Act, Assert (AAA Pattern)</p>


---

# AAA Pattern

<br />

```typescript
describe('calculateDiscount', () => {
  it('should apply 10% discount for orders above $100', () => {
    // Arrange
    const order = { total: 150, items: 3 };

    // Act
    const result = calculateDiscount(order);

    // Assert
    expect(result).toBe(135);
  });
});
```

<br />

- **Arrange** — Set up the test data and preconditions
- **Act** — Execute the code under test
- **Assert** — Verify the expected outcome


---

# Best Practice #2: Test Behavior, Not Implementation

<br />

```typescript
// ❌ Bad — tests implementation details
it('should call internal _processItems method', () => {
  const spy = jest.spyOn(cart, '_processItems');
  cart.checkout();
  expect(spy).toHaveBeenCalled();
});

// ✅ Good — tests observable behavior
it('should empty the cart after checkout', () => {
  cart.addItem({ id: 1, name: 'Widget', price: 10 });
  cart.checkout();
  expect(cart.items).toHaveLength(0);
});
```

<br />

> Tests coupled to implementation break when you refactor — even if the behavior is still correct


---

# Best Practice #3: One Assertion Per Concept

<br />

```typescript
// ❌ Bad — testing multiple unrelated things
it('should handle user registration', () => {
  const user = registerUser('john@example.com', 'pass123');
  expect(user.email).toBe('john@example.com');
  expect(user.isActive).toBe(true);
  expect(sendEmailMock).toHaveBeenCalled();
  expect(database.users).toHaveLength(1);
});

// ✅ Good — focused on one concept
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

# Best Practice #4: Use Descriptive Test Names

<br />

```typescript
// ❌ Bad
it('test1', () => { /* ... */ });
it('works', () => { /* ... */ });
it('should work correctly', () => { /* ... */ });

// ✅ Good — describes scenario and expected outcome
it('should return 0 when cart is empty', () => { /* ... */ });
it('should throw InvalidEmailError for malformed addresses', () => { /* ... */ });
it('should retry failed requests up to 3 times', () => { /* ... */ });
```

<br />

> A failing test name should tell you **what broke** without reading the code


---

# Best Practice #5: Avoid Test Interdependence

<br />

```typescript
// ❌ Bad — tests depend on execution order
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

// ✅ Good — each test is self-contained
it('should update user name', () => {
  const user = createUser('test@example.com');
  updateUser(user.id, { name: 'Updated' });
  expect(user.name).toBe('Updated');
});
```


---

# Best Practice #6: Mock External Dependencies

<br />

```typescript
// ✅ Mock API calls, databases, file systems
import { fetchUserData } from './api';
jest.mock('./api');

const mockedFetch = fetchUserData as jest.MockedFunction<typeof fetchUserData>;

it('should display user name from API', async () => {
  mockedFetch.mockResolvedValue({ name: 'Alice', email: 'alice@test.com' });

  const result = await getUserDisplayName(1);

  expect(result).toBe('Alice');
  expect(mockedFetch).toHaveBeenCalledWith(1);
});
```

<br />

> Mock at the **boundary** — don't mock what you own internally


---

# Best Practice #7: Test Edge Cases

<br />

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
layout: center
class: 'text-center'
---

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

# Test Doubles Cheat Sheet

<br />

| Type | Purpose | Example |
|------|---------|---------|
| **Stub** | Returns predefined data | `getUser() → { name: 'Test' }` |
| **Mock** | Verifies interactions | `expect(mock).toHaveBeenCalled()` |
| **Spy** | Wraps real implementation | `jest.spyOn(obj, 'method')` |
| **Fake** | Simplified working implementation | In-memory database |
| **Dummy** | Fills parameter lists | `null`, empty object |


---

# When NOT to Unit Test

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

# Key Takeaways

<br />

<div class="text-left mx-auto max-w-lg text-zinc-300">

1. Follow the **AAA pattern** for clarity
2. Test **behavior**, not implementation
3. Keep tests **independent** and **focused**
4. Use **descriptive names** that document intent
5. Mock at **boundaries**, not internally
6. Cover **edge cases** and error paths
7. Prefer **quality** over coverage percentage

</div>


---
layout: center
class: 'text-center'
---

# Thank You!

<br />

<div class="text-zinc-400">

Questions?

</div>

<div class="avtar mt-12 rounded-full flex w-full align-center justify-center ">
  <img class="w-18 h-18 rounded-full grayscale" src="https://avatars.githubusercontent.com/u/6254009?v=4" />

  <a class="text-left ml-4 mt-2" href="https://github.com/sayjeyhi">
    <strong class="text-xl">Jafar Rezaei</strong> <br/>
    <span class="text-gray-400 text-sm">@sayjeyhi</span>
  </a>
</div>
