import Head from 'next/head'
import Link from 'next/link'
import Background from '../components/Background'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found - Nhu Nguyet</title>
        <meta
          name="description"
          content="The page you're looking for was not found."
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
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h1 className="hero-title">404 - Not Found 😅</h1>
            <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
              The page you're looking for was not found.
            </p>
            <hr className="divider" />
            <div style={{ marginTop: '2rem' }}>
              <Link href="/" className="btn btn-primary">
                🏠 Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
