import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import ErrorBoundary from 'components/ErrorBoundary'

import '@/styles/global.css'
import '@/styles/media.scss'
import '../common/i18n'

type IProps = AppProps & { err?: any }

export default function MyApp({ Component, pageProps, err }: IProps) {
  return (
    <Suspense fallback="loading">
      <ErrorBoundary>
        <Layout className="okx-app">
          <Component {...pageProps} err={err} />
        </Layout>
      </ErrorBoundary>
    </Suspense>
  )
}
