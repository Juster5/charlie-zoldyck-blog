import { NextApiRequest, NextApiResponse } from 'next'
import * as Sentry from '@sentry/node'
Sentry.init({
  dsn: "https://3054912eb4be4f0ea7f0440de6583a68@o4504423755808768.ingest.sentry.io/4504423760658432",
  tracesSampleRate: 1.0,
});

// import axios from 'axios'
const url =
'https://www.okx.com/v3/c2c/tradingOrders/books?t=1672584335185&quoteCurrency=USD&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended'
// import { data } from '../data/p2pBuy.json'
const { curly } = require('node-libcurl')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await curly.get(url)
    res?.status(200).json({
      code: 0,
      msg: '调试',
      // data: data.data,
      data: data,
      // data: {},
    })    
  } catch(err) {
    res?.status(200).json({
      code: 0,
      msg: '服务端报错',
      // data: data.data,
      data: {},
    })    
    Sentry.captureException(err)
  }
}
