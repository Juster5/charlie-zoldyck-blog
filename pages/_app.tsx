import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import ErrorBoundary from 'components/ErrorBoundary'
import GloablContextProvider from '@/components/GloablContextProvider'
import initI18n from '../common/i18nForServer'
import { checkLang, getHeaderDefaultLang, isMobile } from 'common/util'

import 'swiper/css'
import '@/styles/global.scss'
import '@/styles/media.scss'
import '../common/i18n'

type IProps = AppProps & { lang?: string; responseSize?: string }

export default function MyApp(props: IProps) {
  const { Component, lang, responseSize } = props

  return (
    <Suspense fallback="loading">
      <ErrorBoundary>
        <GloablContextProvider defaultLang={lang} defaultSize={responseSize}>
          <Layout>
            <Component />
          </Layout>
        </GloablContextProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

MyApp.getInitialProps = ({ ctx }: any) => {
  const { req } = ctx
  if (!req) return {}
  const { cookies, headers } = req
  const defaultLanguage = getHeaderDefaultLang(headers['accept-language'])
  const userAgent = headers['user-agent']

  // 首选cookie中语言, 否则取浏览器默认语言
  const lang = checkLang(cookies.locale || (defaultLanguage as string))

  // 首选cookie中传递过来的屏幕宽度, 如果没有则根据user-agent来判断是否为手机, 如果不是则不做处理
  const responseSize =
    cookies.responseSize || (isMobile(userAgent) ? 'SM' : undefined)

  // 设置语言, 并渲染对应的语言的页面
  initI18n(lang)

  return {
    lang,
    responseSize,
  }
}
