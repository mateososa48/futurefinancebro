'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Markets',          href: '/markets' },
  { label: 'Investing',        href: '/investing' },
  { label: 'Economy',          href: '/economy' },
  { label: 'Personal Finance', href: '/personal-finance' },
  { label: 'About',            href: '/about' },
]

export default function Footer() {
  const wordmarkRef = useRef(null)

  useEffect(() => {
    const el = wordmarkRef.current
    if (!el) return
    const fit = () => {
      const parent = el.parentElement
      el.style.fontSize = '1px'
      let lo = 1, hi = 400
      while (lo < hi - 1) {
        const mid = Math.floor((lo + hi) / 2)
        el.style.fontSize = mid + 'px'
        if (el.scrollWidth <= parent.clientWidth) lo = mid
        else hi = mid
      }
      el.style.fontSize = lo + 'px'
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el.parentElement)
    return () => ro.disconnect()
  }, [])

  return (
    <footer style={{ marginTop: '80px', borderTop: '1px solid var(--border)' }}>
      <style>{`
        .footer-nav-link {
          font-family: var(--font-alexandria);
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .footer-nav-link:hover {
          color: var(--mint-text);
        }
        .footer-subscribe-btn:hover {
          opacity: 0.85;
        }
      `}</style>

      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>

        {/* Top: tagline + subscribe */}
        <div style={{ padding: '52px 0 40px' }}>
          <p style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--text-primary)',
            maxWidth: '520px',
            marginBottom: '24px',
          }}>
            Finance news for people who actually care where their money goes.
          </p>

          <Link href="/subscribe" className="footer-subscribe-btn" style={{
            display: 'inline-block',
            background: 'var(--green-dark)',
            color: '#fff',
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '12px 28px',
            borderRadius: '9999px',
            transition: 'opacity 0.2s ease',
          }}>
            Subscribe — it&apos;s free
          </Link>
        </div>

        {/* Giant wordmark */}
        <div>
          <Link ref={wordmarkRef} href="/" style={{
            display: 'block',
            fontFamily: 'var(--font-sentient)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
          }}>
            FutureFinanceBro
          </Link>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: '20px 0 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.02em',
          }}>
            © 2026 FutureFinanceBro
          </span>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 24px' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="footer-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}
