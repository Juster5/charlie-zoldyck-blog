// 服务端http请求
// 先用原生请求okx的数据, 
// 如果被反爬虫了, 就用puppteer设置反反爬请求数据, 
// 如果再被拒绝了, 就返回预先设置好的mock数据

const https = require('https');
const puppeteer = require('puppeteer-core')

import { data } from './defaultData/p2pBuy.json'

// 爬虫抓取请求
export async function puppeteerReq(url) {

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

  try {
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

    await page.goto(url,{
      referer: 'https://www.okx.com/'
    })

    await page.content()
    let content = await page.$eval('pre',(el) => {
      return JSON.parse(el.innerText)
    })

    await page.close()

    result = content

    return result ? result: null
  } catch (e) {
    return null
  }

}


// 原生请求数据
export function pureRequest(url) {

  return new Promise((resolve) => {

    https.get(url,(response) => {
      let todo = '';

      response.on('data',(chunk) => {
        todo += chunk;
      });

      // called when the complete response is received.
      response.on('end',() => {
        resolve(todo ? JSON.parse(todo).data : null)
      });

    }).on("error",(error) => {
      resolve(null)
      console.log("Error: " + error.message);
    });
  })

}


export default async function request(url) {
  // 先用原生请求, 请求数据
  let res = await pureRequest(url)
  
  // 如果没有数据, 就爬虫, 爬虫没有, 就返回mock数据
  return res ? res : await pureRequest(url) ? data : ''
}