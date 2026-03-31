'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'All Blogs', href: '/recent' },
  { label: 'About',     href: '/about' },
]

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Header() {
  const { isDark, toggle, mounted } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <style>{`
      .nav-flip {
        display: block;
        overflow: hidden;
        height: 1.15em;
        line-height: 1.15;
      }
      .nav-flip-inner {
        display: flex;
        flex-direction: column;
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .nav-flip:hover .nav-flip-inner {
        transform: translateY(-50%);
      }
      .nav-flip-label {
        display: block;
        height: 1.15em;
        line-height: 1.15;
        transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .nav-flip:hover .nav-flip-label {
        color: var(--mint-text);
      }
      .nav-flip-label-hover {
        display: block;
        height: 1.15em;
        line-height: 1.15;
        color: var(--mint-text);
      }

      .header-nav-desktop {
        display: flex;
        align-items: center;
        gap: 28px;
        overflow: hidden;
      }
      .header-hamburger {
        display: none;
      }
      .header-subscribe-desktop {
        display: block;
      }

      @media (max-width: 768px) {
        .header-nav-desktop {
          display: none;
        }
        .header-hamburger {
          display: flex;
        }
        .header-subscribe-desktop {
          display: none;
        }
      }

      .mobile-menu {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
        opacity: 0;
      }
      .mobile-menu.open {
        max-height: 400px;
        opacity: 1;
      }

      .mobile-nav-link {
        display: block;
        padding: 14px 24px;
        font-size: 1rem;
        font-family: var(--font-sentient);
        font-weight: 500;
        color: var(--text-primary);
        letter-spacing: -0.01em;
        border-top: 1px solid var(--border);
        transition: color 0.2s ease;
      }
      .mobile-nav-link:hover {
        color: var(--mint-text);
      }

      .site-header {
        background-color: var(--bg);
        border-radius: 9999px;
        border: 0.5px solid transparent;
        transition: border-color 0.3s ease, background-color 0.25s ease;
      }

      .site-header.scrolled {
        border-color: var(--bg-dark);
        background-color: var(--bg-dark);
      }
    `}</style>

    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)',
      maxWidth: '780px',
      zIndex: 50,
    }}>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>

        {/* Top bar */}
        <div style={{
          padding: '0 8px 0 20px',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>

          {/* Logo */}
          <Link href="/" style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: '1.1rem',
            fontWeight: 450,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            flexShrink: 0,
          }}>
            FutureFinanceBro
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav-desktop">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-flip"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="nav-flip-inner">
                  <span className="nav-flip-label">{link.label}</span>
                  <span className="nav-flip-label-hover">{link.label}</span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'color 0.15s ease',
              }}
            >
              {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : <MoonIcon />}
            </button>

            <Link
              href="/subscribe"
              className="header-subscribe-desktop"
              style={{
                backgroundColor: 'var(--green-dark)',
                color: '#FFFFFF',
                fontSize: '0.8125rem',
                fontWeight: 500,
                padding: '9px 16px',
                borderRadius: '9999px',
                letterSpacing: '0.01em',
                transition: 'opacity 0.15s ease',
              }}
            >
              Subscribe
            </Link>

            {/* Hamburger */}
            <button
              className="header-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                width: '32px',
                height: '32px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '5px',
                padding: '0',
              }}
            >
              <span style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                backgroundColor: 'currentColor',
                borderRadius: '9999px',
                transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                backgroundColor: 'currentColor',
                borderRadius: '9999px',
                transition: 'opacity 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                backgroundColor: 'currentColor',
                borderRadius: '9999px',
                transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }} />
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)' }}>
            <Link
              href="/subscribe"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: 'var(--green-dark)',
                color: '#FFFFFF',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '10px 18px',
                borderRadius: '100px',
                letterSpacing: '0.01em',
              }}
            >
              Subscribe
            </Link>
          </div>
        </div>

      </header>
    </div>
    </>
  )
}
