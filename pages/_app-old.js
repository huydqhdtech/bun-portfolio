import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Payhip from '../components/payhip'
import { Analytics } from '@vercel/analytics/react'
import { Global } from '@emotion/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra>
      <Fonts />
      <Payhip />
      <Global
        styles={`
          /* Global text glow effect on hover */
          h1, h2, h3, h4, h5, h6,
          p, span, a, text,
          .chakra-text,
          .chakra-heading,
          .chakra-link,
          .chakra-badge {
            transition: color 0.3s ease, text-shadow 0.3s ease !important;
          }
          
          h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover,
          p:hover, span:hover, a:hover,
          .chakra-text:hover,
          .chakra-heading:hover,
          .chakra-link:hover,
          .chakra-badge:hover {
            color: #fff !important;
            text-shadow:
              0 0 8px #a78bfa,
              0 0 16px #a78bfa,
              0 0 24px #a78bfa !important;
          }
          
          /* Special hover effect for links */
          a:hover {
            color: #c084fc !important;
            text-shadow:
              0 0 10px #c084fc,
              0 0 20px #c084fc,
              0 0 30px #c084fc !important;
          }
        `}
      />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website
