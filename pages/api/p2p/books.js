import request from '../../../common/serverRequest';

export default async function handler(req, res) {

  const { currency, fait, side, t } = req.query
  // 拼接okx的请求
  const url =
  `https://www.okx.com/v3/c2c/tradingOrders/books?t=${t}&quoteCurrency=${fait}&baseCurrency=${currency}&side=${side}&paymentMethod=all&userType=all&hideOverseasVerificationAds=false&sortType=recommended`  
  
  const result = await request(url)

  console.log('==================')
  console.log(result)
  console.log('==================')

  if (result) {
    res?.status(200).json({
      code: 0,
      msg: `Success`,
      data: result,
    })       
  }
}
