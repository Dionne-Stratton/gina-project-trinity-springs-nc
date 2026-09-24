import { useState } from 'react'
import { primaryNav } from '../navigation'
import { usePath } from '../path-context'
import Link from './Link'
import Logo from './Logo'

function isCurrent(path, item) {
  if (path === item.path) return true
  return item.children?.some((child) => child.path === path) ?? false
}

export default function Header() {
  const { path } = usePath()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(path)

  if (path !== menuPath) {
    setMenuPath(path)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link to="/" className="brand">
          <Logo />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-navigation"
          className={menuOpen ? 'site-nav is-open' : 'site-nav'}
          aria-label="Primary"
        >
          <ul className="nav-list">
            {primaryNav.map((item) => (
              <li
                key={item.path}
                className={isCurrent(path, item) ? 'nav-item is-current' : 'nav-item'}
              >
                <Link to={item.path}>{item.title}</Link>
                {item.children && (
                  <ul className="submenu">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="tour-link">
            Schedule a Tour
          </Link>
        </nav>
      </div>
    </header>
  )
}
