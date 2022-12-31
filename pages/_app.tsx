import '@/styles/global.css'
import '@/styles/media.scss'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import ErrorBoundary from 'components/ErrorBoundary'

import '../common/i18n'

type IProps = AppProps & { err?: any }


export default function MyApp({ Component, pageProps, err }: IProps) {
  return (
    <div className="okx-app">
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} err={err} />
        </Layout>
      </ErrorBoundary>
    </div>
  )
}
