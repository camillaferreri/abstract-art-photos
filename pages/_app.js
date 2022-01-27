import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'

import Menu from '../components/Menu'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  return <>
    <Head>
      <title>Abstract Art Photos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Menu />

    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.route} >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </>
}
export default MyApp
