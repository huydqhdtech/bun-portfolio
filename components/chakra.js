import {
  ChakraProvider,
} from '@chakra-ui/react'
import theme from '../lib/theme'

// Custom color mode manager that always returns 'dark'
const colorModeManager = {
  type: 'localStorage',
  get: () => 'dark',
  set: () => {},
  ssr: true
}

export default function Chakra({ children }) {
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}
