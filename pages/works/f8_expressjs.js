import Head from 'next/head'
import Link from 'next/link'
import Background from '../../components/Background'

const Work = () => (
  <>
    <Head>
      <title>F8 Edu ExpressJS Course - Nhu Nguyet</title>
      <meta
        name="description"
        content="The F8 Edu ExpressJS Course covers the fundamentals of ExpressJS, including routing, middleware, and building RESTful APIs."
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
      <div className="work-container">
        <h1 className="work-title">
          F8 Edu ExpressJS Course
          <span className="work-badge">2025-</span>
        </h1>

        <p className="work-description">
          The F8 Edu ExpressJS Course covers the fundamentals of ExpressJS,
          including routing, middleware, and building RESTful APIs. It includes
          hands-on projects to build a strong foundation in backend development.
        </p>

        <ul className="work-meta-list">
          <li className="work-meta-item">
            <span className="work-meta-label">Website:</span>
            <a
              href="https://fullstack.edu.vn/learning/nodejs"
              className="work-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://fullstack.edu.vn/learning/nodejs 🔗
            </a>
          </li>
        </ul>

        <div className="work-video">
          <iframe
            src="https://www.youtube.com/embed/Oe421EPjeBE?si=FbhuIrXuCjS4dfjM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  </>
)

export default Work
