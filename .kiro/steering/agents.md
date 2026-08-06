# Testing Framework

When writing or referencing test code examples in this project, always use **Vitest** (`vi.fn()`, `vi.spyOn`, `vi.mock`) — never Jest. This applies to slides, documentation, and any code snippets.

# What Not to Test

When writing or referencing tests, follow these guidelines on what should **not** be tested:

- **Don't test styleguide/storybook screens** — These exist for developer convenience (visual reference), not as production code. They don't need test coverage.
- **Don't test static configuration or feature flag values** — If we own and control the values (e.g., feature flags, config constants), testing them adds no value. The test just mirrors the implementation.
- **Co-locate version/variant tests with the component** — If behavior changes based on a version or feature flag, test that behavior in the component's own test file (e.g., `formInputSwitchComponent.test.ts`), not in a centralized feature-flags test file. Tests should live where the behavior lives.

# Emoji Usage

When adding emojis to any file in this project, always use `emojis.json` at the project root as the first priority source.

- Look up the emoji by name in `emojis.json`
- Use the `url` field from the matching entry to render the emoji as an image (e.g. `<img>` tag or markdown image)
- Only fall back to native unicode emojis if the desired emoji is not found in `emojis.json`
- If there is code example more than 4 lines, move it into new slide to after current slide content to have one slide with only that code block

 
