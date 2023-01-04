// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {

  // 获取用户设置的默认语言
  let lang = request.cookies.get('locale')?.value
  if (!lang) {
    // 如果没有则获取浏览器的默认语言, 并设置到浏览器中
    lang = request.headers.get('accept-language')?.split(',')[0].replace('-', '_') || 'en_US'
    request.cookies.set('locale', lang as string)
  }
  const response = NextResponse.next()
  response.cookies.set('locale', lang)

  return response      
}

export const config = {
  matcher: '/',
}
