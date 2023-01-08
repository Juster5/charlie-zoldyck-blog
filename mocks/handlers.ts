import { rest } from 'msw'
import buyData from '../common/defaultData/p2pBuy.json'
import sellData from '../common/defaultData/p2pSell.json'

export const handlers = [
  rest.get('/api/p2p/books', (req, res, ctx) => {
    const side = req.url.searchParams.get('side')

    if (side === 'buy') {
      return res(
        ctx.status(200),
        ctx.json(sellData)
      )
    } else {
      return res(
        ctx.status(200),
        ctx.json(buyData)
      )      
    }
  }),

]
