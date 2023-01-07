import {rest} from 'msw'

export const handlers = [
  rest.get('/api/p2p/books', (req, res, ctx) => { 
    return res(
      ctx.status(200),
      ctx.json({
        buy: [],
        sell: []
      })
    )
  })
]