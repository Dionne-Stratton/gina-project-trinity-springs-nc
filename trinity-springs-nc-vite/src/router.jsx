import { useEffect, useState } from 'react'
import { PathContext } from './path-context'

function normalize(path) {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path.slice(0, -1) : path
}

function currentLocation() {
  return {
    path: normalize(window.location.pathname),
    search: window.location.search,
  }
}

export default function PathProvider({ children }) {
  const [location, setLocation] = useState(currentLocation)

  useEffect(() => {
    const sync = () => setLocation(currentLocation())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  function navigate(to) {
    const next = new URL(to, window.location.href)
    const destination = normalize(next.pathname) + next.search + next.hash
    const current = normalize(window.location.pathname) + window.location.search + window.location.hash
    if (destination !== current) {
      window.history.pushState({}, '', destination)
    }
    setLocation(currentLocation())
    window.scrollTo(0, 0)
  }

  return (
    <PathContext.Provider value={{ path: location.path, search: location.search, navigate }}>
      {children}
    </PathContext.Provider>
  )
}
