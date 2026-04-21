import { readdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const presentationsDir = resolve(root, 'presentations')

const presentations = readdirSync(presentationsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(resolve(presentationsDir, d.name, 'slides.md')))
  .map(d => d.name)

if (presentations.length === 0) {
  console.log('No presentations found in presentations/')
  process.exit(0)
}

console.log(`Found ${presentations.length} presentation(s): ${presentations.join(', ')}\n`)

for (const slug of presentations) {
  console.log(`▶  Building "${slug}"...`)
  const outDir = resolve(root, 'dist', slug, 'slides')
  execSync(
    `slidev build presentations/${slug}/slides.md --base /${slug}/slides/ --out "${outDir}"`,
    { stdio: 'inherit', cwd: root }
  )
  console.log(`✓  "${slug}" built → dist/${slug}/slides\n`)
}
