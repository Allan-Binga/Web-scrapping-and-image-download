const pupperteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
    const browser = await pupperteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/") //Site URL

    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n"))

    const photos = await page.$$eval("img",(images) => {
        return images.map(x => x.src)
    })

    for (const photo of photos) {
        const imagepage = await page.goto(photo)
        await fs.writeFile(photo.split("/").pop(), await imagepage.buffer())
    }

    await browser.close()
}

start()