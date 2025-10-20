import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box, Text, LinkBox, LinkOverlay, AspectRatio
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail, ratio = 16 / 9 }) => (
  <Box w="100%" h="full">
    <LinkBox
      as="article"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      h="full"
      textAlign="center"
      borderWidth="0px"
      borderRadius="md"
      p={3}
      _hover={{ transform: 'translateY(-2px)', transition: 'all .2s ease' }}
    >
      {/* Khung tỉ lệ cố định cho ảnh */}
      <AspectRatio ratio={ratio} w="100%" rounded="md" overflow="hidden">
        <Box position="relative">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            // placeholder="blur"
            loading="lazy"
          />
        </Box>
      </AspectRatio>

      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text mt={2} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>

      <Text fontSize={18} mt={1} flexGrow={1}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail,
  ratio = 16 / 9
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox as={NextLink} href={`/${category}/${id}`} scroll={false} cursor="pointer">
      <AspectRatio ratio={ratio} w="100%" rounded="md" overflow="hidden">
        <Box position="relative">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            // placeholder="blur"
          />
        </Box>
      </AspectRatio>

      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={22} fontWeight={600}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`
    /* bo tròn dùng cho container, ảnh fill theo khung */
    .chakra-aspect-ratio { border-radius: 12px; }
  `}/>
)
