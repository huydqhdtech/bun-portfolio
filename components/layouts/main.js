import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import AnimatedBackground from '../animated-background'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} position="relative" minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Nhu Nguyet - Software Engineer & Web Developer Portfolio"
        />
        <meta name="author" content="Nguyen Thi Nhu Nguyet" />
        <meta
          name="keywords"
          content="software engineer, web developer, react, javascript, portfolio"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="twitter:title"
          content="Nguyen Thi Nhu Nguyet - Software Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Software Engineer & Web Developer Portfolio"
        />
        <meta name="twitter:image" content="/web-title-logo.jpg" />
        <meta
          property="og:site_name"
          content="Nguyen Thi Nhu Nguyet Portfolio"
        />
        <meta
          property="og:title"
          content="Nguyen Thi Nhu Nguyet - Software Engineer"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Software Engineer & Web Developer Portfolio"
        />
        <meta property="og:image" content="/web-title-logo.jpg" />
        <title>Nguyen Thi Nhu Nguyet - Software Engineer Portfolio</title>
      </Head>

      <AnimatedBackground />

      <Box position="relative" zIndex={1}>
        <NavBar path={router.asPath} />

        <Container maxW="container.lg" pt={14} px={{ base: 4, md: 8 }}>
          {children}
          <Footer />
        </Container>
      </Box>
    </Box>
  )
}

export default Main
