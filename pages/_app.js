import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} key={router.route} />
      <Analytics />
    </>
  )
}

export default Website
