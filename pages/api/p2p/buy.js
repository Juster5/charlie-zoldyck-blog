// import { NextApiRequest, NextApiResponse } from 'next'

// import puppeteerReq from '../../../common/requestByPuppteer'

// 模拟数据
// const url =
  // 'https://www.okx.com/v3/c2c/tradingOrders/books?t=1672584335185&quoteCurrency=USD&baseCurrency=USDT&side=buy&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended'

import { data } from '../defaultData/p2pBuy.json'

// 先用爬虫请求数据, 爬不了就用模拟的数据
export default async function handler(req, res) {

  // try {
  //   const result = await puppeteerReq(url)

  //   res?.status(200).json({
  //     code: 0,
  //     msg: `Success`,
  //     data: result ? result.data : data,
  //   })    

  // } catch (err) {
    res?.status(200).json({
      code: 0,
      // msg: `爬虫失败: ${err}`,
      msg: `爬虫失败`,
      data: data,
    })
  // }
}
