'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home',             href: '/' },
  { label: 'Markets',          href: '/markets' },
  { label: 'Investing',        href: '/investing' },
  { label: 'Economy',          href: '/economy' },
  { label: 'Personal Finance', href: '/personal-finance' },
  { label: 'About',            href: '/about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        font-weight: 400;
        color: var(--text-secondary);
        letter-spacing: -0.01em;
        border-top: 1px solid var(--border);
        transition: color 0.2s ease;
      }
      .mobile-nav-link:hover {
        color: var(--mint-text);
      }
    `}</style>

    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)',
      maxWidth: '1152px',
      zIndex: 50,
    }}>
      <header style={{
        backgroundColor: 'var(--bg-elevated)',
        borderRadius: '5px',
        transition: 'background-color 0.25s ease',
      }}>

        {/* Top bar */}
        <div style={{
          padding: '0 24px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>

          {/* Logo */}
          <Link href="/" style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: '1.1rem',
            fontWeight: 500,
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
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.005em',
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
            <Link
              href="/subscribe"
              className="header-subscribe-desktop"
              style={{
                backgroundColor: 'var(--green-dark)',
                color: '#FFFFFF',
                fontSize: '0.8125rem',
                fontWeight: 500,
                padding: '7px 18px',
                borderRadius: '100px',
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
