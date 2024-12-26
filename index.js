import puppeteer from "puppeteer-core";

async function run() {
    
   let browser;
   
   try {

    browser = await puppeteer.launch();
    const page = await browser.newPage()
    page.setDefaultTimeout(2 * 60 * 1000)

    await page.goto('https://amazon.com')

    return

   } catch (e){ 
    console.log('Scrape failed', e)
   } finally {
    await browser?.close()
   } 
}

run()