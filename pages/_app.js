import Head from 'next/head'

import Menu from '../components/Menu'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Abstract Art Photos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Menu />
    <Component {...pageProps} />
  </>
}
export default MyApp
