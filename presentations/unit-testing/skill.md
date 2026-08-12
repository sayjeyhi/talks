---
inclusion: fileMatch
---

# Testing Standards

When writing or modifying tests in this project, follow these rules strictly.

## Framework

- Always use **Vitest** (`vi.fn()`, `vi.spyOn`, `vi.mock`) for all tests.
- Never use Jest APIs (`jest.fn`, `jest.spyOn`, `jest.mock`).
- This rule also applies to documentation, examples, code snippets, and guides.

## Structure

- Always use the **AAA pattern** with explicit comments: `// Arrange`, `// Act`, `// Assert` (omit `// Arrange` only when no setup is needed).
- Use nested `describe('When ...')` blocks to group scenarios. Tests should read like a specification.
- Each `it()` block tests **one concept**. Multiple expects are fine if they verify the same concept.

## Naming

- Every `it()` description **must start with `should`**: `it('should render the button')`.
- Never put `when` in an `it()` block. Conditions belong in `describe('When ...')`.
- Top-level `describe` uses the module/component name. Nested describes use `When ...`.

## Mocking

- Prefer `vi.spyOn` over `vi.mock`. Use `vi.mock` only for:
  - Entire third-party libraries (`next/navigation`, `server-only`)
  - Node built-in modules (`fs`, `path`, `crypto`)
  - React components replaced with stub JSX
  - Default exports or non-configurable properties where `vi.spyOn` fails
- Check `packages/utils/src/testing/` for existing shared mock utilities before creating inline mocks.
- Naming:
  - `mock*` = side-effectful (calls `vi.spyOn`)
  - `fake*` / `createFake*` = pure factories
  - `useFake*` = targets React hooks

## Independence

- Tests must be **self-contained**. Never rely on state from a previous `it()` block.
- Use `beforeEach` for shared setup. Never mutate `let` variables across tests.

## Assertions

- Test **observable behavior**, not implementation details. Assert on return values, rendered output, or user-visible side effects—not internal method calls.
- One concept per `it()`. If a test verifies user creation AND email sending, split it.

## What Not to Test

- **Don't test styleguide or Storybook screens.** These exist for developer convenience (visual reference), not as production code, and do not require test coverage.
- **Don't test static configuration or feature flag values.** If we own and control the values (for example, feature flags or configuration constants), testing them adds no value because the test simply mirrors the implementation.
- **Co-locate version and variant tests with the component.** If behavior changes based on a version or feature flag, test that behavior in the component's own test file rather than in a centralized feature-flags test file. Tests should live where the behavior lives.

## HTTP Mocking

- Use **MSW** (Mock Service Worker) to mock HTTP calls at the network level instead of mocking `fetch`/`axios` or the HTTP client directly.
- Keep handlers in `specs/mocks/handlers.ts` (or co-located `handlers.ts` files) and wire them with `setupServer` (`beforeAll`/`afterEach`/`afterAll`).
- Reserve `vi.spyOn` for mocking service *functions*; use MSW for anything that goes over HTTP.
- Use **`hema-sdk`** for the shared MSW server setup and common handlers instead of reimplementing this per project — it is meant to be used across all our projects.

## Edge Cases

- Cover boundaries, nulls, empty inputs, error conditions, and large values.
- Use `describe.each` or `it.each` for parameterized tests.
- For functions with mathematical or logical properties, consider `fast-check` for property-based testing.

### fast-check with AAA

In property-based tests, AAA lives inside the `fc.property` callback. The arbitraries are the Arrange, calling the function is the Act, and the property assertion is the Assert.

```typescript
import fc from 'fast-check';

describe('sortNumbers', () => {
  it('should always return elements in ascending order', () => {
    fc.assert(
      fc.property(fc.array(fc.integer(), { minLength: 2 }), (input) => {
        // Act
        const result = sortNumbers(input);

        // Assert
        for (let i = 1; i < result.length; i++) {
          expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
        }
      }),
    );
  });
});
```

## Test Data

- Use `createFake*` factory functions for test data. Place them in `/specs/mocks/` near the tests.
- Factories should accept `Partial<T>` overrides for flexibility:

```typescript
export const createFakeCartItem = (overrides?: Partial<CartItem>): CartItem => ({
  id: 'item-1',
  name: 'Paper A4',
  price: 10.5,
  quantity: 1,
  ...overrides,
});
```

## File Conventions

- Test files use `.spec.ts` / `.spec.tsx` extensions.
- Place tests in a `specs/` folder or co-locate them with the source file.
- Mock data files go in `specs/mocks/`.

## Example

```typescript
describe('CartService', () => {
  describe('When the user is logged in', () => {
    describe('When adding an item to the cart', () => {
      it('should include the new item in the cart', () => {
        // Arrange
        const cart = createFakeCart();
        const item = createFakeCartItem({ name: 'Notebook' });

        // Act
        cart.addItem(item);

        // Assert
        expect(cart.items).toContainEqual(item);
      });

      describe('When the product is out of stock', () => {
        it('should show an error message', () => {
          // Arrange
          const cart = createFakeCart();
          const outOfStockItem = createFakeCartItem({ stock: 0 });

          // Act
          const result = cart.addItem(outOfStockItem);

          // Assert
          expect(result.error).toBe('Product is out of stock');
        });
      });
    });
  });
});
```