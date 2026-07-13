# Emoji Usage

When adding emojis to any file in this project, always use `emojis.json` at the project root as the first priority source.

- Look up the emoji by name in `emojis.json`
- Use the `url` field from the matching entry to render the emoji as an image (e.g. `<img>` tag or markdown image)
- Only fall back to native unicode emojis if the desired emoji is not found in `emojis.json`
