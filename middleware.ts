// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getHeaderDefaultLang } from 'common/util'
export function middleware(request: NextRequest) {
  // 获取用户设置的语言, 如果没有则获取浏览器的默认语言, 并设置到浏览器中
  let lang = request.cookies.get('locale')?.value
  if (!lang) {
    lang = getHeaderDefaultLang(
      request.headers.get('accept-language') as string
    )
  }
  const response = NextResponse.next()
  response.cookies.set('locale', lang as string)

  return response
}

export const config = {
  matcher: '/',
}
