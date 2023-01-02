import { NextApiRequest, NextApiResponse } from 'next'
const puppeteer = require('puppeteer');

const url =
'https://www.okx.com/v3/c2c/tradingOrders/books?t=1672584335185&quoteCurrency=USD&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended'
// const { curly } = require('node-libcurl')

// import { data } from '../data/p2pBuy.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page
    .goto(url)
    .then(async () => {
      await page.content();
      let content= await page.$eval('pre', (el: any) => {
        return JSON.parse(el.innerText)
      });    
      res?.status(200).json({
        code: 0,
        msg: 'Success',
        data: content,
      })      
    })  

    await page.close();


  // const { data } = await curly.get(url)
  // res?.status(200).json({
  //   code: 0,
  //   msg: 'Success',
  //   // data: data,
  //   data: content,
  // })
}
