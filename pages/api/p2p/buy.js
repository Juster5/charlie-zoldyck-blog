// import { NextApiRequest, NextApiResponse } from 'next'
// const puppeteer = require('puppeteer')


const url =
  'https://www.okx.com/v3/c2c/tradingOrders/books?t=1672584335185&quoteCurrency=USD&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended'
const { curly } = require('node-libcurl')

import { data } from '../data/p2pBuy.json'

export default async function handler(req, res) {
  try {

  //   const browser = await puppeteer.launch({
  //     headless: true,
  //     args: [
  //         '--no-sandbox',
  //         '--disable-setuid-sandbox',
  //         '--disable-blink-features=AutomationControlled',
  //     ],
  //     dumpio: false,
  //   })
    
  //   const page = await browser.newPage()


  //   await page.setUserAgent(
  //     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
  //  )

  //   await page.goto(url, {
  //     referer: 'https://www.okx.com/'
  //   }).then(async () => {
  //     await page.content()
  //     let content = await page.$eval('pre', (el) => {
  //       return JSON.parse(el.innerText)
  //     })
  //     res?.status(200).json({
  //       code: 0,
  //       msg: 'Success',
  //       data: content,
  //     })
  //   })
  
  //   await page.close()  
  
  const { data } = await curly.get(url)

  res?.status(200).json({
    code: 0,
    msg: 'Sucess',
    data: data,
  })    

  } catch (err) {
    res?.status(200).json({
      code: 0,
      msg: `失败原因: ${err}`,
      data: data,
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
