import Head from 'next/head'
import Link from 'next/link'
import Background from '../components/Background'
import KokoMascot from '../components/KokoMascot'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nhu Nguyet - Portfolio</title>
        <meta
          name="description"
          content="A passionate developer who loves turning ideas into beautiful, functional experiences!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Hi! I'm Nhu Nguyet ✨</h1>
              <p className="hero-subtitle">
                A passionate developer who loves turning ideas into beautiful,
                functional experiences! ✨
              </p>
              <p className="hero-description">
                Welcome to my digital playground where creativity meets code! I
                specialize in crafting delightful web experiences that make
                people smile. 🌟
              </p>
              <div className="hero-buttons">
                <Link href="/works" className="btn btn-primary">
                  View My Work 🚀
                </Link>
                <a href="/files/cv.pdf" className="btn btn-outline" download>
                  Download CV 📄
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-avatar-section">
                <img
                  src="/images/nhunguyet.jpg"
                  alt="Nhu Nguyet"
                  className="avatar"
                />
                <KokoMascot size="180px" />
              </div>
            </div>
          </section>

          <hr className="divider" />

          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">What I Love Doing ✨</h2>
            <p className="section-description">
              These are the things that make my developer heart sing! ✨
            </p>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">💻</div>
                <h3 className="skill-title">Frontend Magic ✨</h3>
                <p className="skill-description">
                  Creating beautiful, responsive interfaces that users love to
                  interact with. From pixel-perfect designs to smooth
                  animations!
                </p>
                <div className="skills-badges">
                  <span className="skill-badge">React ⚛️</span>
                  <span className="skill-badge">Next.js 🚀</span>
                  <span className="skill-badge">CSS3 🎨</span>
                  <span className="skill-badge">JavaScript ⚡</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <h3 className="skill-title">UI/UX Design 🌈</h3>
                <p className="skill-description">
                  Designing user experiences that are not just functional, but
                  delightful! Every click should spark joy.
                </p>
                <div className="skills-badges">
                  <span className="skill-badge">Figma 🎯</span>
                  <span className="skill-badge">Adobe XD 🎨</span>
                  <span className="skill-badge">Prototyping 🔄</span>
                  <span className="skill-badge">User Research 🔍</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">⚡</div>
                <h3 className="skill-title">Backend Power 🔥</h3>
                <p className="skill-description">
                  Building robust APIs and server-side magic that powers amazing
                  user experiences from behind the scenes.
                </p>
                <div className="skills-badges">
                  <span className="skill-badge">Node.js 🟢</span>
                  <span className="skill-badge">Express 🚂</span>
                  <span className="skill-badge">MongoDB 🍃</span>
                  <span className="skill-badge">Python 🐍</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
