import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bun's Portfolio">
    <Container>
      <Title>
        Bun&apos;s Portfolio <Badge color="cyan">2025-</Badge>
      </Title>
      <P>
        A personal portfolio showcasing my web development and programming projects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bunsportfolio.io.vn/" color="purple.300">
            https://bunsportfolio.io.vn/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Nextjs, Threejs, AWS</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/portfolio1.png" alt="Bun's Portfolio"/>

      <WorkImage src="/images/works/portfolio2.png" alt="Bun's Portfolio" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="#"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
