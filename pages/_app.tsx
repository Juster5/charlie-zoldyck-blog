import '@/styles/global.css'
import type { AppProps } from 'next/app'
// import { NextPage } from 'next';
import Layout from 'components/layout';


// type IProps = {
//   initialValue?: Record<any, any>;
//   Component?: NextPage;
//   pageProps?: any;
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
