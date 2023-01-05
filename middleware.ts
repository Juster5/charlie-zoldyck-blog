// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getHeaderDefaultLang, checkLang } from 'common/util'
export function middleware(request: NextRequest) {
  // 获取用户设置的语言, 如果没有则获取浏览器的默认语言, 并设置到浏览器中
  let lang = request.cookies.get('locale')?.value

  if (!lang) {
    lang = getHeaderDefaultLang(
      request.headers.get('accept-language') as string
    )
  } else {
    // 检测请求的语言是否支持, 不支持, 则返回英语
    lang = checkLang(lang as string)
  }

  const response = NextResponse.next()
  response.cookies.set('locale', lang)

  return response
}

export const config = {
  matcher: '/',
}
