import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Component {...pageProps} key={router.route} />
      <Analytics />
    </>
  )
}

export default Website
