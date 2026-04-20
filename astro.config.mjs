// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const presentationsDir = resolve(__dirname, 'presentations');

// Auto-discover all presentations and assign sequential dev ports starting at 3001
const presentations = readdirSync(presentationsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(resolve(presentationsDir, d.name, 'slides.md')))
  .map((d, i) => ({ slug: d.name, port: 3001 + i }));

const proxy = Object.fromEntries(
  presentations.map(({ slug, port }) => [
    `/${slug}/slides`,
    { target: `http://localhost:${port}`, changeOrigin: true, ws: true },
  ])
);

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      emptyOutDir: false,
    },
    server: { proxy },
  },
});
