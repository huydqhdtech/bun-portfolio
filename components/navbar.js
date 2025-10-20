import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  Button
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  return (
    <Button
      as={NextLink}
      href={href}
      scroll={false}
      variant={active ? 'solid' : 'ghost'}
      colorScheme={active ? 'teal' : 'gray'}
      bg={active ? 'brand.mint' : 'transparent'}
      color={active ? 'white' : inactiveColor}
      target={target}
      size="sm"
      fontWeight="600"
      borderRadius="full"
      _hover={{
        bg: active ? 'brand.mint' : 'rgba(79, 209, 199, 0.1)',
        color: active ? 'white' : 'brand.mint',
        transform: 'translateY(-1px)'
      }}
      transition="all 0.2s ease"
      {...props}
    >
      {children}
    </Button>
  )
}

const Navbar = props => {
  const { path } = props

  const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
  ))

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue(
        'rgba(255, 255, 255, 0.9)',
        'rgba(26, 32, 44, 0.9)'
      )}
      css={{ backdropFilter: 'blur(20px)' }}
      borderBottom="1px solid"
      borderColor={useColorModeValue(
        'rgba(79, 209, 199, 0.1)',
        'rgba(184, 230, 225, 0.1)'
      )}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={4}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>

          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <div style={{ flex: 1 }} />

          <LinkItem
            target="_blank"
            href="https://github.com/NguyettNhu"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg="rgba(0, 0, 0, 0.8)" backdropFilter="blur(10px)">
                <MenuItem bg="transparent" as={MenuLink} href="/works">
                  Works
                </MenuItem>

                <MenuItem bg="transparent" as={MenuLink} href="/posts">
                  Posts
                </MenuItem>

                <MenuItem
                  bg="transparent"
                  as={Link}
                  href="https://github.com/NguyettNhu"
                  target="_blank"
                  style={{ gap: 4 }}
                >
                  <IoLogoGithub />
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
