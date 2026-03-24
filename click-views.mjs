import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' })

const buttons = await page.$$('button[title]')

// Grid (default — already loaded)
await page.screenshot({ path: 'temporary screenshots/ss-grid.png', fullPage: true })

// Split
await buttons[1].click()
await new Promise(r => setTimeout(r, 600))
await page.screenshot({ path: 'temporary screenshots/ss-split.png', fullPage: true })

// Editorial
await buttons[2].click()
await new Promise(r => setTimeout(r, 600))
await page.screenshot({ path: 'temporary screenshots/ss-editorial.png', fullPage: true })

await browser.close()
console.log('done')
