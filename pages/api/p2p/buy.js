// import { NextApiRequest, NextApiResponse } from 'next'
const puppeteer = require('puppeteer')

const url =
  'https://www.okx.com/v3/c2c/tradingOrders/books?t=1672584335185&quoteCurrency=USD&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended'
// const { curly } = require('node-libcurl')

// import { data } from '../data/p2pBuy.json'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) 
export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-blink-features=AutomationControlled',
      ],
      dumpio: false,
    })
    
    const page = await browser.newPage()

    await page.evaluateOnNewDocument(() => {
      window.chrome = {};
      window.chrome.app = {
          InstallState: 'hehe',
          RunningState: 'haha',
          getDetails: 'xixi',
          getIsInstalled: 'ohno',
      };
      window.chrome.csi = function () {};
      window.chrome.loadTimes = function () {};
      window.chrome.runtime = function () {};
    })

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'userAgent', {
          //userAgent在无头模式下有headless字样，所以需覆盖
          get: () =>
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36',
      });
    })
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
   )

    await page.goto(url, {
      referer: 'https://www.okx.com/'
    }).then(async () => {
      await page.content()
      let content = await page.$eval('pre', (el) => {
        return JSON.parse(el.innerText)
      })
      res?.status(200).json({
        code: 0,
        msg: 'Success',
        data: content,
      })
    })
  
    await page.close()    
  } catch (err) {
    res?.status(200).json({
      code: 0,
      msg: '爬虫失败',
      data: err,
    })    
  }

  // const { data } = await curly.get(url)
  // res?.status(200).json({
  //   code: 0,
  //   msg: 'Success',
  //   // data: data,
  //   data: content,
  // })
}
