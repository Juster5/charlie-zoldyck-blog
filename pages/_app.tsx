import '@/styles/global.css'
import '@/styles/media.scss'
import type { AppProps } from 'next/app'
// import { NextPage } from 'next';
import Layout from 'components/layout'

// type IProps = {
//   initialValue?: Record<any, any>;
//   Component?: NextPage;
//   pageProps?: any;
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="okx-app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
