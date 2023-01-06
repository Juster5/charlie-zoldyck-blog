import { BG_WIDTH, MID_WIDTH, SM_WIDTH, BG, SM, MID } from 'common/constant'
// @ts-ignore
import Cookies from 'js-cookie'
import { langs } from 'common/constant'

// 防止文档传屏滚动
export const avoidScollingOverflow = (selecter: string = 'body') => {
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
      top: top,
    })
    element = null
  }
}

// 格式化浏览器默认语言, 并检测语言是否支持, 一般浏览器传过来的格式为这种 accept-language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6,ja;q=0.5, 需要解析一下
export const getHeaderDefaultLang = (lang: string) => {
  if (!lang) {
    return langs[0].key
  }

  const firstLang = lang.split(';') // 返回例如 zh-CN,zh; 或者en, zh, 目前只处理zh-CN这种情况
  const defaultLang = firstLang[0]?.split(',')[0]  // 返回例如 zh-CN
  return checkLang(defaultLang)
}

// 检测当前语言是否支持, 不支持则返回英语en-US
export const checkLang = (defaultLang: string) => {
  return langs.some((el) => el.key === defaultLang) ? defaultLang : langs[0].key
}

// 判断是否为移动端
export const isMobile = (userAgent: string) => {
  const ua = userAgent.toLowerCase()
  return /mobile|android|iphone|ipod|phone/i.test(ua)
}

// 获取屏幕大小, 并设置到cookie中, 方便下次访问服务端渲染, 可以根据屏幕大小返回不同的资源
export const getResponseSize = () => {
  const width = window.screen.width
  if (width <= SM_WIDTH) {
    Cookies.set('responseSize', SM)
    return SM
  } else if (width >= MID_WIDTH && width <= BG_WIDTH) {
    Cookies.set('responseSize', MID)
    return MID
  } else {
    Cookies.set('responseSize', BG)
    return BG
  }
}
