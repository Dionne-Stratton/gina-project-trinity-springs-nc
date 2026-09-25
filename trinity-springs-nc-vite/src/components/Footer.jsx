import { organization } from '../contact'
import { primaryNav } from '../navigation'
import Link from './Link'
import ContactFacts from './ContactFacts'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Logo />
          </Link>
          <p>Est. {organization.established}</p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-heading">Explore</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {primaryNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-heading">Visit</p>
          <ContactFacts />
        </div>
      </div>
    </footer>
  )
}
