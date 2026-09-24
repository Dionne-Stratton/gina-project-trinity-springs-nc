import { useEffect } from 'react'
import ContactFacts from './components/ContactFacts'
import Footer from './components/Footer'
import Header from './components/Header'
import Link from './components/Link'
import { findRoute } from './navigation'
import { pageMedia } from './photos'
import { usePath } from './path-context'
import PathProvider from './router'

function Page() {
  const { path } = usePath()
  const route = findRoute(path)

  useEffect(() => {
    document.title = route
      ? `${route.title} · Trinity Springs Christian Academy`
      : 'Page not found · Trinity Springs Christian Academy'
  }, [route])

  if (!route) {
    return (
      <main className="site-main">
        <div className="page">
          <h1>Page not found</h1>
          <p>
            <Link to="/">Return home</Link>
          </p>
        </div>
      </main>
    )
  }

  const media = pageMedia[route.path]
  const isHome = route.path === '/'

  return (
    <main className="site-main">
      {media?.hero && (
        <section className="hero">
          <img src={media.hero.src} alt={media.hero.alt} />
          <div className="hero-copy">
            <h1>Trinity Springs Christian Academy</h1>
            <p>{route.summary}</p>
            <Link to="/contact" className="tour-link">
              Schedule a Tour
            </Link>
          </div>
        </section>
      )}
      {!isHome && (
      <div className="page">
        <h1>{route.title}</h1>
        <p>{route.summary}</p>
        {media?.wide && (
          <figure className="page-photo page-photo-wide">
            <img src={media.wide.src} alt={media.wide.alt} />
          </figure>
        )}
        {media?.portrait && (
          <figure className="page-photo page-photo-portrait">
            <img src={media.portrait.src} alt={media.portrait.alt} />
          </figure>
        )}
        {media?.stages && (
          <div className="photo-row">
            {media.stages.map((stage) => (
              <figure key={stage.label}>
                <img src={stage.src} alt={stage.alt} />
                <figcaption>{stage.label}</figcaption>
              </figure>
            ))}
          </div>
        )}
        {route.children && (
          <ul className="section-links">
            {route.children.map((child) => (
              <li key={child.path}>
                <Link to={child.path}>{child.title}</Link>
              </li>
            ))}
          </ul>
        )}
        {route.contact && <ContactFacts />}
      </div>
      )}
    </main>
  )
}

function Site() {
  return (
    <div className="site">
      <Header />
      <Page />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <PathProvider>
      <Site />
    </PathProvider>
  )
}
