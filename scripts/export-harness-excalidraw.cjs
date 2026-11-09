#!/usr/bin/env node
const fs = require('node:fs')
const path = require('node:path')
const puppeteer = require('puppeteer')

async function exportFile(input, output) {
  const doc = JSON.parse(fs.readFileSync(input, 'utf8'))
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  try {
    const page = await browser.newPage()
    page.on('pageerror', (error) => console.error('[page error]', error.message))
    await page.setContent('<!doctype html><html><head></head><body><div id="root"></div></body></html>', { waitUntil: 'load' })
    const dataUrl = await page.evaluate(async ({ elements, appState, files }) => {
      const mod = await import('https://esm.sh/@excalidraw/excalidraw@0.18.0')
      const exportToBlob = mod.exportToBlob || mod.default?.exportToBlob
      if (!exportToBlob) throw new Error('exportToBlob was not found')
      try {
        await Promise.all([
          document.fonts.load('20px Excalifont'),
          document.fonts.load('20px Nunito'),
          document.fonts.load('20px Comic Shanns'),
        ].map((promise) => promise.catch(() => undefined)))
        await document.fonts.ready
      } catch {}
      const blob = await exportToBlob({
        elements,
        files: files || null,
        appState: {
          ...appState,
          exportBackground: true,
          exportWithDarkMode: false,
          viewBackgroundColor: '#000000',
        },
        mimeType: 'image/png',
        getDimensions: (width, height) => ({ width: width * 2, height: height * 2, scale: 2 }),
      })
      return await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
    }, { elements: doc.elements, appState: doc.appState, files: doc.files })
    fs.writeFileSync(output, Buffer.from(dataUrl.split(',')[1], 'base64'))
    console.log(path.resolve(output))
  } finally {
    await browser.close()
  }
}

const [input, output] = process.argv.slice(2)
if (!input || !output) {
  console.error('Usage: export-harness-excalidraw.cjs input.excalidraw output.png')
  process.exit(1)
}
exportFile(input, output).catch((error) => {
  console.error(error)
  process.exit(1)
})
