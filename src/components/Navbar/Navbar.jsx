import { useState, useEffect } from 'react'
import dhmsLogo from '../../assets/DHMS logo.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Corporate Dhms', href: 'https://thedhms.com/corporate-dhms' },
  { label: 'Family DHMS', href: 'https://thedhms.com/family-dhms' },
  { label: 'Student DHMS', href: 'https://thedhms.com/studentdhms' },
  { label: 'Partner with us', href: 'https://thedhms.com/partner-with-us' },
  { label: 'Blog', href: 'https://thedhms.com/blog' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <img src={dhmsLogo} alt="DHMS Logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${link.active ? ' nav-link-active' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="https://app.thedhms.com" className="nav-cta" target="_blank" rel="noopener noreferrer">Try DHMS Free</a>

        <button
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile-menu${menuOpen ? ' is-open' : ''}`}>
        <ul className="nav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-mobile-link${link.active ? ' nav-link-active' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://app.thedhms.com"
          className="nav-mobile-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Try DHMS Free
        </a>
      </div>
    </nav>
  )
}

export default Navbar
