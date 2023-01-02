// const chrome = require("chrome-aws-lambda");
const puppeteer = require('puppeteer-core')


// 爬虫抓取请求
export default async function puppeteerReq (url) {

  // vercel 内存不够, 无法安装chrome内核
  // const options = process.env.FUNCTION_NAME
  // ? {
  //     args: chrome.args,
  //     executablePath: await chrome.executablePath,
  //     headless: chrome.headless,
  //   }
  // : {
  //     args: [],
  //     executablePath:
  //       process.platform === "win32"
  //         ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  //         : process.platform === "linux"
  //         ? "/usr/bin/google-chrome"
  //         : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  //   };
  // const browser = await puppeteer.launch(options)

  let result = null

  const browser = await puppeteer.launch({
    headless: true,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled',
    ],
    dumpio: false,
    executablePath: process.platform === "win32"
      ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
      : process.platform === "linux"
      ? "/usr/bin/google-chrome"
      : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"  
  })

  
  const page = await browser.newPage()
  
  
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
  )
  
  await page.goto(url, {
    referer: 'https://www.okx.com/'
  })

  await page.content()
  let content = await page.$eval('pre', (el) => {
    return JSON.parse(el.innerText)
  })

  await page.close()    

  result = content

  return result
  
}