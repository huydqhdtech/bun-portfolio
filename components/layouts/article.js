import { motion } from 'framer-motion'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  const t = `${title} - Nguyen Thi Nhu Nguyet`
  return (
    <Box
      as={motion.article}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      position="relative"
      backgroundColor="rgba(0, 0, 0, 0.3)"
      backdropFilter="blur(10px)"
      borderRadius="12px"
      py={{ base: 4, md: 8 }}
      px={{base: 0, md: 8}}
      mx={{ base: 0, md: 4 }}
      my={4}
    >

      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </Box>
  )
}

export default Layout
