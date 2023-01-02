import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import ErrorBoundary from 'components/ErrorBoundary'

import 'swiper/css'
import '@/styles/global.scss'
import '@/styles/media.scss'
import '../common/i18n'

type IProps = AppProps & { err?: any }

export default function MyApp({ Component, pageProps, err }: IProps) {
  return (
    <Suspense fallback="loading">
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} err={err} />
        </Layout>
      </ErrorBoundary>
    </Suspense>
  )
}
