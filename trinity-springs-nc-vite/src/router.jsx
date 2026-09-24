import { useEffect, useState } from 'react'
import { PathContext } from './path-context'

function normalize(path) {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path.slice(0, -1) : path
}

export default function PathProvider({ children }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const sync = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  function navigate(to) {
    const next = normalize(to)
    if (next !== normalize(window.location.pathname)) {
      window.history.pushState({}, '', next)
    }
    setPath(next)
    window.scrollTo(0, 0)
  }

  return (
    <PathContext.Provider value={{ path, navigate }}>
      {children}
    </PathContext.Provider>
  )
}
