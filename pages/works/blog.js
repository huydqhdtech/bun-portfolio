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
  <Layout title="Bun's Blog">
    <Container>
      <Title>
        Bun&apos;s Blog <Badge color="cyan">2025-</Badge>
      </Title>
      <P>
        A personal blog about web development and programming.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://buns-blog.vercel.app/" color="purple.300">
            https://buns-blog.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Nextjs, Vercel</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/blog1.png" alt="Bun's Blog"/>

      <WorkImage src="/images/works/blog2.png" alt="Bun's Blog" />
      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
         <iframe
    src="https://www.youtube.com/embed/tBMuHkaJ9fE"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
