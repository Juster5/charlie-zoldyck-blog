import { render, screen } from '@testing-library/react'
jest.mock('swiper')
import P2P from '../index'

// 渲染测试
describe('P2P页面测试', () => {
  test('logo渲染', () => {
    render(<P2P />)
    const okxImg = screen.getByRole('img', {
      name: 'XAF-icon',
    })
    expect(okxImg).toBeInTheDocument()
  })

  // test('导航渲染', async () => {
  //   render(<Header />)
  //   const menuItems = screen.queryAllByText('Buy crypto')
  //   expect(menuItems[0]).toBeInTheDocument()
  // })
})
