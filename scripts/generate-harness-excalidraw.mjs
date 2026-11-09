import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const outDir = resolve('presentations/oh-my-harness/public/excalidraw')
mkdirSync(outDir, { recursive: true })

const C = {
  ink: '#f4f4f5', muted: '#a1a1aa', dark: '#111827', panel: '#18181b',
  green: '#BECF24', blue: '#95E6FF', red: '#CF8377', purple: '#d0bfff',
  orange: '#ffd8a8', teal: '#c3fae8', yellow: '#fff3bf', line: '#52525b',
}
let seq = 0
const id = (prefix) => `${prefix}-${++seq}`

function rect(x, y, width, height, backgroundColor, strokeColor = C.ink, extra = {}) {
  return {
    type: 'rectangle', id: id('rect'), x, y, width, height,
    backgroundColor, strokeColor, fillStyle: 'solid', strokeWidth: 3,
    roughness: 1, opacity: 100, roundness: { type: 3 }, ...extra,
  }
}

function ellipse(x, y, width, height, backgroundColor, strokeColor = C.ink, extra = {}) {
  return {
    type: 'ellipse', id: id('ellipse'), x, y, width, height,
    backgroundColor, strokeColor, fillStyle: 'solid', strokeWidth: 3,
    roughness: 1, opacity: 100, ...extra,
  }
}

function diamond(x, y, width, height, backgroundColor, strokeColor = C.ink, extra = {}) {
  return {
    type: 'diamond', id: id('diamond'), x, y, width, height,
    backgroundColor, strokeColor, fillStyle: 'solid', strokeWidth: 3,
    roughness: 1, opacity: 100, ...extra,
  }
}

function text(x, y, value, fontSize = 36, strokeColor = C.ink, extra = {}) {
  const lines = value.split('\n')
  const width = Math.max(...lines.map((line) => line.length), 1) * fontSize * 0.62
  const height = lines.length * fontSize * 1.25
  return {
    type: 'text', id: id('text'), x, y, width, height, text: value,
    fontSize, fontFamily: 3, strokeColor, textAlign: 'left',
    verticalAlign: 'top', originalText: value, autoResize: true,
    lineHeight: 1.25, roughness: 1, opacity: 100, ...extra,
  }
}

function labelShape(elements, shape, value, fontSize = 30, textColor = C.dark) {
  const label = text(shape.x + 16, shape.y + shape.height / 2 - fontSize * 0.65, value, fontSize, textColor, {
    width: shape.width - 32,
    height: value.split('\n').length * fontSize * 1.25,
    textAlign: 'center', verticalAlign: 'middle', containerId: shape.id,
  })
  shape.boundElements = [{ id: label.id, type: 'text' }]
  elements.push(shape, label)
  return shape
}

function arrow(x, y, dx, dy, strokeColor = C.ink, extra = {}) {
  return {
    type: 'arrow', id: id('arrow'), x, y, width: Math.abs(dx), height: Math.abs(dy),
    points: [[0, 0], [dx, dy]], strokeColor, strokeWidth: 4,
    roughness: 1, opacity: 100, endArrowhead: 'arrow', ...extra,
  }
}

function line(x, y, dx, dy, strokeColor = C.line, extra = {}) {
  return {
    type: 'line', id: id('line'), x, y, width: Math.abs(dx), height: Math.abs(dy),
    points: [[0, 0], [dx, dy]], strokeColor, strokeWidth: 3,
    roughness: 1, opacity: 100, ...extra,
  }
}

function doc(elements) {
  return {
    type: 'excalidraw', version: 2, source: 'kiro-excalidraw-skill', elements,
    appState: { viewBackgroundColor: '#000000', theme: 'dark', exportBackground: true },
    files: {},
  }
}

function save(name, elements) {
  writeFileSync(resolve(outDir, `${name}.excalidraw`), JSON.stringify(doc(elements), null, 2))
}

{
  const e = [text(100, 40, 'WHAT DESERVES YOUR ATTENTION?', 48, C.green)]
  const layers = [
    ['tabs vs spaces', 520, C.red], ['algorithms', 650, C.orange],
    ['frameworks', 780, C.yellow], ['languages', 910, C.teal],
    ['architecture', 1040, C.blue], ['engineers', 1170, C.purple],
    ['PRODUCT', 1300, C.green],
  ]
  layers.forEach(([name, width, color], index) => {
    const x = 760 - width / 2
    labelShape(e, rect(x, 735 - index * 92, width, 66, color, color), name, index === 6 ? 34 : 28)
  })
  e.push(arrow(1480, 760, 0, -590, C.green), text(1390, 105, 'MORE\nOUTCOME', 28, C.green))
  save('harness-attention-stack', e)
}

{
  const e = [text(95, 55, 'ABSTRACTION MOVES THE LINE', 48, C.green)]
  e.push(line(140, 450, 1300, 0, C.line))
  const nodes = [
    [170, 'assembly', 'CPU\ninstructions', C.red],
    [430, 'C', 'portable\nprograms', C.orange],
    [690, 'formatters', 'style becomes\na setting', C.yellow],
    [950, 'autocomplete', 'functions become\na suggestion', C.blue],
    [1210, 'agents', 'implementation\nbecomes delegated', C.green],
  ]
  nodes.forEach(([x, title, sub, color], index) => {
    e.push(ellipse(x, 390, 120, 120, color, color))
    e.push(text(x - 8, 540, title, 30, color))
    e.push(text(x - 18, 595, sub, 22, C.muted))
    if (index < nodes.length - 1) e.push(arrow(x + 125, 450, 125, 0, C.line))
  })
  e.push(arrow(250, 250, 1050, 0, C.blue), text(510, 175, 'the work moves up a layer', 34, C.blue))
  save('harness-abstraction-line', e)
}

{
  const e = [text(105, 60, 'AN LLM ONLY PRODUCES TEXT', 48, C.green)]
  labelShape(e, rect(120, 300, 350, 210, C.panel, C.blue), 'PROMPT\ntext in', 34, C.blue)
  labelShape(e, ellipse(650, 280, 300, 250, C.purple, C.purple), 'LLM', 52, C.dark)
  labelShape(e, rect(1130, 300, 350, 210, C.panel, C.green), 'RESPONSE\ntext out', 34, C.green)
  e.push(arrow(480, 405, 150, 0, C.blue), arrow(970, 405, 140, 0, C.green))
  e.push(line(540, 690, 520, 0, C.red, { strokeStyle: 'dashed' }))
  e.push(text(560, 625, 'no files changed', 28, C.red), text(810, 625, 'no commands run', 28, C.red))
  save('harness-llm-text-only', e)
}

{
  const e = [text(105, 55, 'THE EMPTY KITCHEN', 48, C.green)]
  labelShape(e, ellipse(150, 285, 260, 260, C.purple, C.purple), 'SMART\nCHEF', 38, C.dark)
  e.push(arrow(430, 415, 170, 0, C.muted))
  const room = rect(620, 180, 500, 500, 'transparent', C.red, { strokeStyle: 'dashed' })
  e.push(room, text(760, 260, 'EMPTY', 52, C.red), text(700, 355, 'no knife\nno pan\nno stove', 34, C.muted))
  e.push(text(205, 590, 'knows the recipe', 26, C.blue))
  e.push(arrow(1140, 415, 170, 0, C.green))
  labelShape(e, rect(1320, 305, 190, 220, C.green, C.green), 'NO\nDINNER', 34, C.dark)
  e.push(text(515, 755, 'Capability without tools cannot become action.', 36, C.ink))
  save('harness-empty-kitchen', e)
}

{
  const e = [text(100, 50, 'A HARNESS TURNS SYNTAX INTO ACTION', 48, C.green)]
  labelShape(e, rect(100, 300, 270, 160, C.panel, C.blue), 'USER\nINTENT', 32, C.blue)
  labelShape(e, rect(500, 260, 300, 240, C.purple, C.purple), 'HARNESS\nprotocol + loop', 34, C.dark)
  labelShape(e, ellipse(930, 285, 250, 190, C.blue, C.blue), 'LLM', 46, C.dark)
  labelShape(e, rect(1310, 250, 220, 270, C.green, C.green), 'TOOLS\nfiles\nshell\nAPIs', 26, C.dark)
  e.push(arrow(380, 380, 100, 0, C.blue), arrow(810, 350, 100, 0, C.blue), arrow(1190, 350, 100, 0, C.green))
  e.push(arrow(1310, 450, -110, 0, C.orange), arrow(930, 450, -110, 0, C.orange))
  e.push(text(835, 305, 'prompt', 22, C.muted), text(1190, 305, 'tool call', 22, C.green))
  e.push(text(1190, 475, 'result', 22, C.orange), text(825, 475, 'context', 22, C.orange))
  e.push(text(415, 690, 'read  ->  decide  ->  act  ->  observe  ->  repeat', 38, C.ink))
  save('harness-action-loop', e)
}

{
  const e = [text(100, 55, 'INTERFACE OR HARNESS?', 48, C.green)]
  labelShape(e, ellipse(110, 330, 220, 220, C.blue, C.blue), 'HUMAN', 38, C.dark)
  labelShape(e, rect(460, 260, 330, 360, C.panel, C.blue), 'INTERFACE\n\nwhat you see\nand control', 34, C.blue)
  labelShape(e, rect(940, 260, 330, 360, C.panel, C.purple), 'HARNESS\n\nwhat the model\nuses to act', 34, C.purple)
  labelShape(e, rect(1400, 330, 130, 220, C.green, C.green), 'TOOLS', 30, C.dark)
  e.push(arrow(350, 440, 90, 0, C.blue), arrow(810, 440, 110, 0, C.muted), arrow(1290, 440, 90, 0, C.green))
  e.push(text(480, 690, 'CLI  /  app  /  web UI', 28, C.muted), text(960, 690, 'tool schema  /  loop  /  context', 28, C.muted))
  save('harness-interface-vs-harness', e)
}

{
  const e = [text(100, 55, 'CLAUDE CODE HAS TWO LAYERS', 48, C.green)]
  const top = rect(300, 180, 1000, 220, C.blue, C.blue)
  labelShape(e, top, 'CLAUDE CODE CLI / APP\nINTERFACE', 42, C.dark)
  const bottom = rect(300, 500, 1000, 220, C.purple, C.purple)
  labelShape(e, bottom, 'AGENT SDK + BINARY\nHARNESS', 42, C.dark)
  e.push(arrow(800, 420, 0, 60, C.ink))
  e.push(text(125, 245, 'human\ninteraction', 28, C.blue), arrow(250, 300, 40, 0, C.blue))
  e.push(text(1325, 555, 'model\naction', 28, C.green), arrow(1310, 610, 115, 0, C.green))
  save('harness-claude-layers', e)
}

{
  const e = [text(100, 55, 'LLM + HARNESS = AGENT', 50, C.green)]
  labelShape(e, ellipse(120, 265, 340, 340, C.blue, C.blue), 'LLM\nreason + text', 38, C.dark)
  e.push(text(530, 375, '+', 92, C.ink))
  labelShape(e, ellipse(680, 265, 340, 340, C.purple, C.purple), 'HARNESS\ntools + loop', 38, C.dark)
  e.push(text(1080, 375, '=', 92, C.ink))
  labelShape(e, ellipse(1240, 235, 380, 400, C.green, C.green), 'AGENT\ncompletes tasks', 42, C.dark)
  e.push(text(430, 730, 'The model supplies decisions. The harness supplies consequences.', 32, C.muted))
  save('harness-agent-equation', e)
}

{
  const e = [text(100, 45, 'TWO PLANES AROUND THE MODEL', 48, C.green)]
  labelShape(e, ellipse(650, 325, 300, 250, C.blue, C.blue), 'LLM', 50, C.dark)
  const toolBox = rect(90, 170, 420, 560, C.panel, C.green)
  labelShape(e, toolBox, 'TOOL PLANE\n\nfiles\nshell\neditor\nsub-agents', 32, C.green)
  const dataBox = rect(1090, 170, 420, 560, C.panel, C.orange)
  labelShape(e, dataBox, 'DATA PLANE\n\nMCP\ndatabases\nanalytics\nother systems', 32, C.orange)
  e.push(arrow(630, 405, -100, 0, C.green), arrow(970, 405, 100, 0, C.orange))
  e.push(text(185, 770, 'code runs inside the harness', 25, C.muted), text(1130, 770, 'bindings reach outside it', 25, C.muted))
  save('harness-tool-data-planes', e)
}

{
  const e = [text(100, 45, 'T3 CODE COORDINATES HARNESSES', 48, C.green)]
  labelShape(e, ellipse(100, 330, 220, 220, C.blue, C.blue), 'HUMAN', 36, C.dark)
  labelShape(e, rect(450, 270, 360, 340, C.green, C.green), 'T3 CODE\nADE + MCP\ncoordination', 40, C.dark)
  const harnesses = [
    [1040, 145, 'CLAUDE\nCODE', C.purple],
    [1040, 365, 'CODEX', C.blue],
    [1040, 585, 'OTHER\nHARNESS', C.orange],
  ]
  harnesses.forEach(([x, y, name, color]) => labelShape(e, rect(x, y, 310, 150, color, color), name, 32, C.dark))
  e.push(arrow(340, 440, 90, 0, C.blue))
  e.push(arrow(830, 350, 180, -120, C.purple), arrow(830, 440, 180, 0, C.blue), arrow(830, 530, 180, 120, C.orange))
  e.push(text(520, 800, 'one interface, native harness behavior', 30, C.muted))
  save('harness-t3-coordinator', e)
}

{
  const e = [text(100, 45, 'THE MODEL PICKER IS A HARNESS PICKER', 46, C.green)]
  const cards = [
    [90, 'CLAUDE', 'Claude Code\nskills + plugins', C.purple],
    [580, 'CODEX', 'Codex\nnative setup', C.blue],
    [1070, 'OTHER', 'its harness\nits tools', C.orange],
  ]
  cards.forEach(([x, model, harness, color]) => {
    labelShape(e, rect(x, 190, 410, 170, color, color), model, 42, C.dark)
    e.push(arrow(x + 205, 380, 0, 70, color))
    labelShape(e, rect(x, 470, 410, 230, C.panel, color), harness, 32, color)
  })
  e.push(text(245, 770, 'Choose the capability and price you need. Keep the native kitchen.', 32, C.ink))
  save('harness-model-picker', e)
}

{
  const e = [text(100, 45, 'FROM IDE TO ADE', 52, C.green)]
  const levels = [
    [110, 660, 1380, 110, C.dark, C.line, 'MODELS + TOOLS'],
    [220, 505, 1160, 110, C.panel, C.purple, 'HARNESSES'],
    [330, 350, 940, 110, C.panel, C.blue, 'INTERFACES'],
    [440, 195, 720, 110, C.green, C.green, 'AGENTIC DEVELOPMENT ENVIRONMENT'],
  ]
  levels.forEach(([x, y, w, h, fill, stroke, label]) => labelShape(e, rect(x, y, w, h, fill, stroke), label, 30, fill === C.green ? C.dark : stroke))
  e.push(arrow(1470, 700, 0, -470, C.green), text(1360, 165, 'ATTENTION\nMOVES UP', 28, C.green))
  save('harness-ade-stack', e)
}

{
  const e = [text(90, 45, 'ONE SURFACE, MANY AGENTS', 50, C.green)]
  labelShape(e, ellipse(650, 300, 300, 260, C.green, C.green), 'T3 CODE\nCONTROL\nSURFACE', 34, C.dark)
  const providers = [
    [90, 160, 'CLAUDE', C.purple], [90, 610, 'CODEX', C.blue],
    [1210, 120, 'CURSOR', C.orange], [1210, 350, 'GROK', C.red],
    [1210, 580, 'OPENCODE', C.teal],
  ]
  providers.forEach(([x, y, name, color]) => {
    labelShape(e, rect(x, y, 260, 125, color, color), name, 28, C.dark)
    const fromLeft = x < 600
    e.push(arrow(fromLeft ? x + 280 : x - 20, y + 62, fromLeft ? 275 : -235, 390 - (y + 62), color))
  })
  e.push(text(500, 710, 'keep each harness native', 30, C.muted))
  save('t3code-many-agents', e)
}

{
  const e = [text(100, 45, 'THREADS ARE AN INBOX', 50, C.green)]
  const steps = [
    [80, 'DRAFT', C.muted], [360, 'WORKING', C.blue], [665, 'SNOOZED', C.orange],
    [970, 'SETTLED', C.green], [1275, 'ARCHIVED', C.purple],
  ]
  steps.forEach(([x, name, color], index) => {
    labelShape(e, rect(x, 330, 225, 145, color === C.muted ? C.panel : color, color), name, 27, color === C.muted ? C.muted : C.dark)
    if (index < steps.length - 1) e.push(arrow(x + 235, 402, 105, 0, C.line))
  })
  e.push(text(165, 590, 'start', 26, C.muted), text(430, 590, 'agent runs', 26, C.blue), text(725, 590, 'later', 26, C.orange), text(1015, 590, 'done', 26, C.green), text(1300, 590, 'out of sight', 26, C.purple))
  e.push(text(390, 710, 'Merged pull requests can settle their thread automatically.', 30, C.ink))
  save('t3code-thread-lifecycle', e)
}

{
  const e = [text(90, 40, 'CONTROL YOUR MACHINES FROM ANYWHERE', 46, C.green)]
  const clients = [[90, 190, 'DESKTOP'], [90, 390, 'WEB'], [90, 590, 'PHONE']]
  clients.forEach(([x, y, name]) => labelShape(e, rect(x, y, 260, 125, C.panel, C.blue), name, 28, C.blue))
  labelShape(e, diamond(600, 300, 300, 300, C.orange, C.orange), 'T3 CONNECT\nor\nPRIVATE ROUTE', 28, C.dark)
  const servers = [[1180, 190, 'LAPTOP'], [1180, 390, 'WORKSTATION'], [1180, 590, 'REMOTE VM']]
  servers.forEach(([x, y, name]) => labelShape(e, rect(x, y, 300, 125, C.panel, C.green), name, 28, C.green))
  clients.forEach(([, y]) => e.push(arrow(370, y + 62, 210, 388 - (y + 62), C.blue)))
  servers.forEach(([, y]) => e.push(arrow(920, 388, 240, y + 62 - 388, C.green)))
  e.push(text(520, 790, 'the agents and compute stay on your machines', 30, C.muted))
  save('t3code-remote-access', e)
}

{
  const e = [text(95, 45, 'SEND WORK WHERE CAPACITY EXISTS', 47, C.green)]
  labelShape(e, rect(100, 320, 300, 180, C.panel, C.blue), 'NEW\nTHREAD', 34, C.blue)
  labelShape(e, diamond(600, 270, 300, 280, C.orange, C.orange), 'CHOOSE\nHOST', 34, C.dark)
  const machines = [
    [1120, 150, 'MACBOOK', '1 slot free', C.red],
    [1120, 370, 'MAC STUDIO', '8 slots free', C.green],
    [1120, 590, 'LINUX VM', '3 slots free', C.blue],
  ]
  machines.forEach(([x, y, name, capacity, color]) => {
    labelShape(e, rect(x, y, 360, 145, C.panel, color), `${name}\n${capacity}`, 27, color)
    e.push(arrow(920, 405, 180, y + 72 - 405, color))
  })
  e.push(arrow(420, 410, 160, 0, C.blue))
  e.push(text(485, 790, 'pick once, then keep the thread on that machine', 30, C.muted))
  save('t3code-load-balance', e)
}

{
  const e = [text(100, 45, 'FROM THREAD TO MERGED PULL REQUEST', 46, C.green)]
  const steps = [
    [75, 'THREAD', C.blue], [370, 'COMMIT\n+ PUSH', C.purple],
    [665, 'PULL\nREQUEST', C.orange], [960, 'CHECKS\n+ REVIEW', C.yellow],
    [1255, 'MERGE\n+ SETTLE', C.green],
  ]
  steps.forEach(([x, name, color], index) => {
    labelShape(e, rect(x, 300, 240, 220, color, color), name, 29, C.dark)
    if (index < steps.length - 1) e.push(arrow(x + 250, 410, 95, 0, C.line))
  })
  e.push(text(315, 645, 'linked reviews stay with the work that created them', 32, C.ink))
  e.push(text(420, 720, 'readiness, stacks, diffs, merge, done', 28, C.muted))
  save('t3code-pr-flow', e)
}

{
  const e = [text(95, 45, 'WORK CAN START WITHOUT A HUMAN CLICK', 44, C.green)]
  labelShape(e, rect(100, 210, 330, 160, C.panel, C.blue), 'SCHEDULE\ncron or interval', 28, C.blue)
  labelShape(e, rect(100, 530, 330, 160, C.panel, C.orange), 'WEBHOOK\nevent payload', 28, C.orange)
  labelShape(e, diamond(650, 315, 300, 300, C.purple, C.purple), 'AUTOMATION\nPOLICY', 31, C.dark)
  labelShape(e, rect(1180, 315, 320, 180, C.green, C.green), 'NEW AGENT\nTHREAD', 34, C.dark)
  e.push(arrow(450, 290, 180, 120, C.blue), arrow(450, 610, 180, -120, C.orange), arrow(980, 465, 180, 0, C.green))
  e.push(text(500, 735, 'signed requests, dedupe keys, held delivery', 28, C.muted))
  save('t3code-automation', e)
}

{
  const e = [text(100, 45, 'TRIAGE WITH THE AGENT YOU ALREADY PAY FOR', 44, C.green)]
  labelShape(e, rect(90, 320, 260, 180, C.panel, C.red), 'T3 CODE\nPROBLEM', 31, C.red)
  labelShape(e, rect(470, 235, 320, 350, C.orange, C.orange), 'COLLECT\nlogs\nstate\nversion\nknown issues', 24, C.dark)
  labelShape(e, diamond(920, 275, 290, 290, C.purple, C.purple), 'CLAUDE\nor\nCODEX', 30, C.dark)
  labelShape(e, rect(1330, 320, 220, 180, C.green, C.green), 'DIAGNOSIS\n+ NEXT STEP', 27, C.dark)
  e.push(arrow(370, 410, 80, 0, C.red), arrow(810, 410, 90, 0, C.orange), arrow(1230, 410, 80, 0, C.green))
  e.push(text(430, 680, 'The agent asks before applying a fix or posting an issue.', 30, C.muted))
  save('t3code-triage', e)
}

console.log(`Wrote Excalidraw sources to ${outDir}`)
