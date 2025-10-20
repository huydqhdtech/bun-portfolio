import { ChevronRightIcon, EmailIcon, DownloadIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Avatar,
  Badge,
  useColorModeValue,
  Icon,
  Divider,
  Image
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram
} from 'react-icons/io5'
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaHeart,
  FaStar
} from 'react-icons/fa'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import KokoMascot from '../components/koko-mascot'

const SkillBadge = ({ children, colorScheme = 'gray' }) => (
  <Badge
    colorScheme={colorScheme}
    variant="subtle"
    px={4}
    py={2}
    borderRadius="full"
    fontSize="sm"
    fontWeight="700"
    fontFamily="'Nunito', sans-serif"
    border="2px solid"
    borderColor="gray.200"
    bg="gray.50"
    color="gray.700"
    _hover={{
      transform: 'scale(1.05)',
      boxShadow: '0 5px 15px rgba(45, 55, 72, 0.3)'
    }}
    transition="all 0.2s ease"
    cursor="pointer"
  >
    {children}
  </Badge>
)

const SkillCard = ({ icon, title, description, color = 'gray' }) => (
  <Card
    bg="white"
    borderRadius="3xl"
    border="3px solid"
    borderColor="gray.100"
    boxShadow="0 10px 30px rgba(45, 55, 72, 0.15)"
    _hover={{
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(45, 55, 72, 0.25)',
      borderColor: 'gray.200'
    }}
    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    overflow="hidden"
  >
    <CardBody p={8} textAlign="center">
      <Box
        bg={`${color}.100`}
        borderRadius="full"
        p={4}
        display="inline-block"
        mb={4}
        border="3px solid"
        borderColor={`${color}.200`}
      >
        <Icon as={icon} boxSize={8} color={`${color}.600`} />
      </Box>
      <Heading
        size="md"
        mb={3}
        color="gray.700"
        fontFamily="'Nunito', sans-serif"
        fontWeight="800"
      >
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm" lineHeight="1.6">
        {description}
      </Text>
    </CardBody>
  </Card>
)

const JourneyCard = ({ year, title, description, isActive = false }) => (
  <Card
    bg={isActive ? 'purple.50' : 'white'}
    borderRadius="2xl"
    border="3px solid"
    borderColor={isActive ? 'purple.300' : 'purple.100'}
    boxShadow={
      isActive
        ? '0 15px 35px rgba(139, 92, 246, 0.2)'
        : '0 8px 25px rgba(139, 92, 246, 0.1)'
    }
    _hover={{
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.25)',
      borderColor: 'purple.300'
    }}
    transition="all 0.3s ease"
  >
    <CardBody p={6}>
      <HStack spacing={4} align="start">
        <Box
          bg={isActive ? 'purple.500' : 'purple.200'}
          color={isActive ? 'white' : 'purple.700'}
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
          minW="60px"
          textAlign="center"
        >
          {year}
        </Box>
        <VStack align="start" spacing={2} flex={1}>
          <Heading
            size="sm"
            color="gray.700"
            fontFamily="'Nunito', sans-serif"
            fontWeight="700"
          >
            {title}
          </Heading>
          <Text color="gray.600" fontSize="sm" lineHeight="1.5">
            {description}
          </Text>
        </VStack>
      </HStack>
    </CardBody>
  </Card>
)

const Page = () => {
  return (
    <Layout>
      <Box>
        {/* Hero Section */}
        <Section delay={0.1}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            minH="70vh"
            py={10}
          >
            <VStack
              align={{ base: 'center', md: 'start' }}
              spacing={6}
              flex={1}
            >
              <Box textAlign={{ base: 'center', md: 'left' }}>
                <Heading
                  as="h1"
                  variant="page-title"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="900"
                  color="#6959de"
                  lineHeight="1.1"
                  mb={4}
                >
                  Hi! I'm Nhu Nguyet{' '}
                  <Text as="span" fontSize="0.8em">
                    ✨
                  </Text>
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="gray.600"
                  fontWeight="600"
                  mb={6}
                  fontFamily="'Nunito', sans-serif"
                >
                  A passionate developer who loves turning ideas into beautiful,
                  functional experiences! ✨
                </Text>
                <Text
                  fontSize="md"
                  color="gray.600"
                  mb={8}
                  maxW="500px"
                  lineHeight="1.7"
                >
                  Welcome to my digital playground where creativity meets code!
                  I specialize in crafting delightful web experiences that make
                  people smile. 🌟
                </Text>
              </Box>

              <HStack
                spacing={4}
                flexWrap="wrap"
                justify={{ base: 'center', md: 'start' }}
              >
                <Button
                  as={NextLink}
                  href="/works"
                  variant="gradient-primary"
                  size="lg"
                  rightIcon={<ChevronRightIcon />}
                >
                  View My Work 🚀
                </Button>
                <Button
                  variant="outline-elegant"
                  size="lg"
                  leftIcon={<DownloadIcon />}
                >
                  Download CV 📄
                </Button>
              </HStack>
            </VStack>

            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <VStack spacing={6}>
                <Avatar
                  src="/images/takuya.jpg"
                  size="2xl"
                  border="5px solid"
                  borderColor="gray.200"
                  boxShadow="0 15px 35px rgba(45, 55, 72, 0.3)"
                />
                <KokoMascot size="180px" />
              </VStack>
            </Box>
          </Flex>
        </Section>

        <Divider borderColor="gray.200" borderWidth="2px" my={12} />

        {/* Skills Section */}
        <Section delay={0.2}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading variant="section-title" mb={4}>
                What I Love Doing ✨
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto">
                These are the things that make my developer heart sing! ✨
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              <SkillCard
                icon={FaCode}
                title="Frontend Magic ✨"
                description="Creating beautiful, responsive interfaces that users love to interact with. React, Vue, and modern CSS are my paintbrushes!"
                color="purple"
              />
              <SkillCard
                icon={FaLaptopCode}
                title="Backend Wizardry 🔮"
                description="Building robust APIs and server-side logic that power amazing applications. Node.js, Python, and databases are my tools!"
                color="violet"
              />
              <SkillCard
                icon={FaPalette}
                title="UI/UX Design 🎨"
                description="Designing user experiences that are not just functional, but delightful! Making every click feel magical."
                color="pink"
              />
            </SimpleGrid>
          </VStack>
        </Section>

        {/* Technologies Section */}
        <Section delay={0.3}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading variant="section-title" mb={4}>
                Technologies I'm Obsessed With 🤩
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto">
                My favorite tools and technologies that help me build amazing
                things!
              </Text>
            </Box>

            <Flex flexWrap="wrap" gap={4} justify="center">
              <SkillBadge colorScheme="blue">React ⚛️</SkillBadge>
              <SkillBadge colorScheme="green">Vue.js 💚</SkillBadge>
              <SkillBadge colorScheme="yellow">JavaScript 🌟</SkillBadge>
              <SkillBadge colorScheme="blue">TypeScript 💙</SkillBadge>
              <SkillBadge colorScheme="green">Node.js 🚀</SkillBadge>
              <SkillBadge colorScheme="purple">Python 🐍</SkillBadge>
              <SkillBadge colorScheme="orange">MongoDB 🍃</SkillBadge>
              <SkillBadge colorScheme="blue">PostgreSQL 🐘</SkillBadge>
              <SkillBadge colorScheme="pink">Figma 🎨</SkillBadge>
              <SkillBadge colorScheme="gray">Git 📝</SkillBadge>
            </Flex>
          </VStack>
        </Section>

        {/* Journey Section */}
        <Section delay={0.4}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading variant="section-title" mb={4}>
                My Coding Adventure 🌟
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto">
                Every great journey has its milestones. Here are mine! 🗺️
              </Text>
            </Box>

            <VStack spacing={6} align="stretch" maxW="800px" mx="auto">
              <JourneyCard
                year="2024"
                title="Senior Full-Stack Developer 🚀"
                description="Leading exciting projects and mentoring junior developers. Building scalable applications that serve thousands of users daily!"
                isActive={true}
              />
              <JourneyCard
                year="2022"
                title="Full-Stack Developer 💻"
                description="Expanded my skills to include backend development. Mastered Node.js, databases, and API design while continuing to create amazing frontends."
              />
              <JourneyCard
                year="2020"
                title="Frontend Developer 🎨"
                description="Started my professional journey focusing on creating beautiful, responsive user interfaces. Fell in love with React and modern CSS!"
              />
              <JourneyCard
                year="2019"
                title="First Line of Code 💡"
                description="Wrote my first 'Hello World' and knew I found my passion. Started learning HTML, CSS, and JavaScript with endless curiosity!"
              />
            </VStack>
          </VStack>
        </Section>

        {/* Connect Section */}
        <Section delay={0.5}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading variant="section-title" mb={4}>
                Let's Be Friends! 💕
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto">
                I love connecting with fellow developers, designers, and
                creative minds! Drop me a message and let's create something
                amazing together! ✨
              </Text>
            </Box>

            <HStack spacing={6} justify="center" flexWrap="wrap">
              <Button
                as="a"
                href="mailto:your.email@example.com"
                leftIcon={<EmailIcon />}
                variant="gradient-primary"
                size="lg"
              >
                Say Hello! 👋
              </Button>
              <Button
                as="a"
                href="https://github.com"
                target="_blank"
                leftIcon={<Icon as={IoLogoGithub} />}
                variant="outline-elegant"
                size="lg"
              >
                GitHub 🐙
              </Button>
              <Button
                as="a"
                href="https://linkedin.com"
                target="_blank"
                leftIcon={<Icon as={IoLogoLinkedin} />}
                variant="outline-elegant"
                size="lg"
              >
                LinkedIn 💼
              </Button>
            </HStack>
          </VStack>
        </Section>
      </Box>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
