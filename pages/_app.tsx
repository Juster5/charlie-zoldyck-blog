import '@/styles/global.css'
import '@/styles/media.scss'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import ErrorBoundary from 'components/ErrorBoundary';


import '../common/i18n'

// type IProps = {
//   initialValue?: Record<any, any>;
//   Component?: NextPage;
//   pageProps?: any;
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="okx-app">
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </div>
  )
}
