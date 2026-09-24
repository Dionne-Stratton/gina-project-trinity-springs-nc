import { useEffect } from 'react'
import ContactFacts from './components/ContactFacts'
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
import Link from './components/Link'
import { findRoute } from './navigation'
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
      <main className="page">
        <h1>Page not found</h1>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </main>
    )
  }

  return (
    <main className="page">
      {route.path === '/' && <Logo className="logo-hero" />}
      <h1>{route.title}</h1>
      <p>{route.summary}</p>
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
