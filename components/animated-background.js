import { Box, Image } from '@chakra-ui/react'

const AnimatedBackground = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={-1}
      overflow="hidden"
    >
      {/* Grid Background */}
      <Image
        src="/images/Background.png"
        alt="Grid Background"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        opacity={0.3}
      />
    </Box>
  )
}

export default AnimatedBackground
