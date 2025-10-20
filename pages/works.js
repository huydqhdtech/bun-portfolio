import Head from 'next/head'
import Link from 'next/link'
import Background from '../components/Background'

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies?.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-buttons">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small btn-outline-small"
            >
              🔗 Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small btn-primary-small"
            >
              🚀 Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const CertificationCard = ({ title, provider, image, url }) => {
  return (
    <div className="certification-card">
      <img src={image} alt={title} className="certification-image" />
      <div className="certification-content">
        <h3 className="certification-title">{title}</h3>
        <p className="certification-provider">{provider}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small btn-outline-small"
        >
          🏆 View Certificate
        </a>
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <Head>
        <title>My Work & Projects - Nhu Nguyet</title>
        <meta
          name="description"
          content="A collection of projects I've built and courses I've completed to enhance my skills in web development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background />

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="logo">
              Nhu Nguyet
            </Link>
            <ul className="nav-links">
              <li>
                <Link href="/works">Works</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="works-container">
          {/* Header */}
          <div className="works-header">
            <h1 className="page-title">My Work & Projects ✨</h1>
            <p className="page-description">
              A collection of projects I've built and courses I've completed to
              enhance my skills in web development.
            </p>
          </div>

          {/* Featured Projects */}
          <section className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <ProjectCard
                title="Personal Portfolio Website"
                description="A modern, responsive portfolio website built with Next.js and CSS. Features smooth animations, beautiful design, and optimized performance."
                image="/images/works/portfolio.png"
                technologies={['Next.js', 'React', 'CSS3', 'JavaScript']}
                githubUrl="https://github.com/NguyettNhu/moon-portfolio"
                liveUrl="/"
              />
              <ProjectCard
                title="Personal Blog"
                description="A clean and minimalist blog platform where I share my thoughts on web development, programming tutorials, and tech insights."
                image="/images/works/blogs-img.png"
                technologies={['React', 'Node.js', 'MongoDB', 'Express']}
                githubUrl="https://github.com/NguyettNhu"
              />
            </div>
          </section>

          <hr className="divider" />

          {/* Certifications */}
          <section className="section">
            <h2 className="section-title">Courses & Certifications</h2>
            <div className="certifications-grid">
              <CertificationCard
                title="Responsive Web Design"
                provider="FreeCodeCamp"
                image="https://yt3.googleusercontent.com/_GxV-5nnBhGDO2bDgFtrpVypm6z8AC_tFg7W0zSsS9AGlw5xVg8zKLQ5tvTk6BwU1LzmWJb4YA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                url="/works/freecodecamp_fe"
              />
              <CertificationCard
                title="ExpressJS Course"
                provider="F8 Education"
                image="https://files.fullstack.edu.vn/f8-prod/courses/6.png"
                url="/works/f8_expressjs"
              />
            </div>
          </section>

          <hr className="divider" />

          {/* CV Section */}
          <section className="cv-section">
            <h2 className="section-title">My Resume</h2>
            <p className="page-description">
              Download my resume to learn more about my experience, skills, and
              educational background.
            </p>

            <div className="cv-card">
              <img
                src="/images/works/CV.png"
                alt="My Resume"
                className="cv-image"
              />
              <div className="cv-content">
                <p className="cv-name">Nguyen Thi Nhu Nguyet</p>
                <p className="cv-role">Software Engineer Resume</p>
                <a
                  href="/files/cv.pdf"
                  download
                  className="btn btn-primary btn-large"
                >
                  📄 Download CV
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Works
