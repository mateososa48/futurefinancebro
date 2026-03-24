import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const url = process.argv[2] || 'http://localhost:3001'
const label = process.argv[3] || ''

const dir = './temporary screenshots'
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] ?? '0')).filter(Boolean)
const next = nums.length ? Math.max(...nums) + 1 : 1
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`
const filepath = path.join(dir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
await page.screenshot({ path: filepath, fullPage: true })
await browser.close()

console.log(`Screenshot saved: ${filepath}`)
