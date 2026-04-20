import { readdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import concurrently from 'concurrently'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const presentationsDir = resolve(root, 'presentations')

const presentations = readdirSync(presentationsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(resolve(presentationsDir, d.name, 'slides.md')))
  .map((d, i) => ({ slug: d.name, port: 3001 + i }))

if (presentations.length === 0) {
  console.log('No presentations found in presentations/')
  process.exit(0)
}

console.log(`Starting ${presentations.length} Slidev dev server(s):\n`)
presentations.forEach(({ slug, port }) => console.log(`  /${slug}/slides/  →  http://localhost:${port}`))
console.log()

const { result } = concurrently(
  presentations.map(({ slug, port }) => ({
    command: `slidev presentations/${slug}/slides.md --port ${port} --base /${slug}/slides/`,
    name: slug,
    prefixColor: 'auto',
  })),
  { cwd: root, killOthers: ['failure'] }
)

result.then(() => process.exit(0), () => process.exit(1))
