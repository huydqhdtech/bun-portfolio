import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(45, 55, 72, 0.8)'
  )
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box as="footer" mt={16} py={8} textAlign="center">
      <Box
        bg={bgColor}
        backdropFilter="blur(10px)"
        borderRadius="2xl"
        border="1px solid"
        borderColor={useColorModeValue(
          'rgba(79, 209, 199, 0.1)',
          'rgba(184, 230, 225, 0.1)'
        )}
        px={6}
        py={4}
        display="inline-block"
        boxShadow="0 8px 32px rgba(79, 209, 199, 0.1)"
      >
        <VStack spacing={2}>
          <HStack spacing={2} align="center">
            <Text fontSize="sm" color={textColor}>
              Made with
            </Text>
            <Icon as={FaHeart} color="brand.rose" boxSize={3} />
            <Text fontSize="sm" color={textColor}>
              by Nhu Nguyet
            </Text>
          </HStack>
          <Text fontSize="xs" color={textColor}>
            &copy; {new Date().getFullYear()} Nguyen Thi Nhu Nguyet. All Rights
            Reserved.
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}

export default Footer
