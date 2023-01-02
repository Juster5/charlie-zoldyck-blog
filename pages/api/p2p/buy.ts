import { NextApiRequest, NextApiResponse } from 'next'

// const url =
  // 'https://www.okx.com/v3/c2c/tradingOrders/books?t=1672584335185&quoteCurrency=USD&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended'
// const { curly } = require('node-libcurl')

import { data } from '../data/p2pBuy.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { data } = await curly.get(url)
  res?.status(200).json({
    code: 0,
    msg: 'Success',
    data: data,
  })
}
