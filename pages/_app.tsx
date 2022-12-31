import '@/styles/global.css'
import '@/styles/media.scss'
import type { AppProps } from 'next/app'
// import { NextPage } from 'next';
import Layout from 'components/layout'
// import { appWithTranslation } from 'next-i18next'

import '../common/i18n'

// type IProps = {
//   initialValue?: Record<any, any>;
//   Component?: NextPage;
//   pageProps?: any;
// }

//  const MyApp = function ({ Component, pageProps }: AppProps) {
//   return (
//     <div className="okx-app">
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </div>
//   )
// }

// export default appWithTranslation(MyApp)

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div className="okx-app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}