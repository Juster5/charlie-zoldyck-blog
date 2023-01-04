// 防止文档传屏滚动
export const avoidScollingOverflow = (selecter: string = 'body') => {
  // document.documentElement.style.height = window.screen.height + 'px'
  const top = document.documentElement.scrollTop
  let element = document.querySelector(selecter)
  element!.setAttribute(
    'style',
    `top: ${-top}px; overflow: hidden; position: fixed; width: 100%;`
  )


  // 返回清除方法
  return () => {
    element!.removeAttribute('style') 
    document.documentElement.scrollTo({
      top: top
    })
    element = null
  }
}
