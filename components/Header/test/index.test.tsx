import { render, screen } from '@testing-library/react'
import Header from '..'

// 渲染测试
describe('header组件渲染测试', () => {
  test('logo渲染', () => {
    render(<Header />)
    const okxImg = screen.getByRole('img', {
      name: 'OKX',
    })
    expect(okxImg).toBeInTheDocument()
  })

  test('导航渲染', async () => {
    render(<Header />)
    const menuItems = screen.queryAllByText('Buy crypto')
    expect(menuItems[0]).toBeInTheDocument()
  })
})
