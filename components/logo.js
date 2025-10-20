import Link from 'next/link'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: 700;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 24px;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: linear-gradient(
    135deg,
    rgba(79, 209, 199, 0.1),
    rgba(184, 230, 225, 0.1)
  );
  border: 1px solid rgba(79, 209, 199, 0.2);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(79, 209, 199, 0.2),
      rgba(184, 230, 225, 0.2)
    );
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 209, 199, 0.2);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Box
          w="8px"
          h="8px"
          borderRadius="full"
          bg="linear-gradient(135deg, #4FD1C7, #B8E6E1)"
          mr={3}
          animation="pulse 2s infinite"
        />
        <Text
          background="linear-gradient(135deg, #4FD1C7, #B8E6E1, #E8B4B8)"
          backgroundClip="text"
          color="transparent"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          Nhu Nguyet
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
