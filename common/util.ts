// 防止文档传屏滚动
export const avoidScollingOverflow = (selecter: string) => {
  // 防止穿屏幕滚动
  let element = document.querySelector(selecter)
  element!.setAttribute(
    'style',
    'overflow: hidden; position: fixed; top: 0; width: 100%'
  )

  // 返回清除方法
  return () => {
    element!.removeAttribute('style')
    element = null
  }
}
