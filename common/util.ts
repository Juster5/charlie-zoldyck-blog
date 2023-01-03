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

export const getUrlQuery = (url) => {
  var params = url.split('?')[1].split('&')
  var obj = {}
  // for (i = 0; i < params.length; i++) {
  // var param = params[i].split("=");
  // obj[param[0]] = param[1]
  // }
  params.map((v) => (obj[v.split('=')[0]] = v.split('=')[1]))
  return
}
