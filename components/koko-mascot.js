import { Box, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`

const KokoMascot = ({ size = '200px' }) => {
  return (
    <Box width={size} height={size}>
      <Image
        src="/images/koko.png"
        alt="Koko Mascot"
        width="100%"
        height="100%"
        objectFit="contain"
        animation={`${bounce} 3s ease-in-out infinite`}
        filter="drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))"
      />
    </Box>
  )
}

export default KokoMascot
