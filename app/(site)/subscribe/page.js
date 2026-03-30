'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sub-fade { opacity: 0; animation: fadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .sub-fade-1 { animation-delay: 0.05s; }
        .sub-fade-2 { animation-delay: 0.15s; }
        .sub-fade-3 { animation-delay: 0.25s; }
        .sub-fade-4 { animation-delay: 0.35s; }
        .sub-fade-5 { animation-delay: 0.45s; }

        .sub-email-input {
          flex: 1;
          background: transparent;
          border: none;
          border-bottom: 1.5px solid var(--border);
          border-radius: 0;
          padding: 10px 0;
          font-size: 1rem;
          font-family: var(--font-alexandria);
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s ease;
          min-width: 0;
        }
        .sub-email-input::placeholder {
          color: var(--text-muted);
        }
        .sub-email-input:focus {
          border-bottom-color: var(--mint-text);
        }

        .sub-submit {
          background: var(--green-dark);
          color: #fff;
          border: none;
          border-radius: 9999px;
          padding: 10px 22px;
          font-size: 0.875rem;
          font-family: var(--font-alexandria);
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.15s ease;
        }
        .sub-submit:hover { opacity: 0.85; }

        .pill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pill-tag {
          font-family: var(--font-alexandria);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 5px 14px;
          letter-spacing: 0.01em;
        }

        @media (max-width: 640px) {
          .sub-form-row { flex-direction: column !important; gap: 16px !important; }
          .sub-submit { width: 100%; text-align: center; }
        }
      `}</style>

      {submitted ? (
        /* ── Success state ── */
        <div className="sub-fade sub-fade-1" style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '560px',
          padding: '80px 0 100px',
        }}>
          <div style={{
            height: '1.5px',
            width: '40px',
            backgroundColor: 'var(--mint-text)',
            borderRadius: '9999px',
            marginBottom: '40px',
          }} />
          <h1 style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            You&apos;re in.
          </h1>
          <p style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            marginBottom: '40px',
          }}>
            First issue lands when there&apos;s actually something worth saying. Check your inbox.
          </p>
          <Link href="/" style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.875rem',
            color: 'var(--mint-text)',
            letterSpacing: '0.01em',
          }}>
            ← Back to the site
          </Link>
        </div>
      ) : (
        /* ── Subscribe form ── */
        <div style={{ padding: '80px 0 100px', maxWidth: '680px' }}>

          {/* Accent line */}
          <div className="sub-fade sub-fade-1" style={{
            height: '1.5px',
            width: '40px',
            backgroundColor: 'var(--mint-text)',
            borderRadius: '9999px',
            marginBottom: '40px',
          }} />

          {/* Headline */}
          <h1 className="sub-fade sub-fade-2" style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            Finance, explained<br />like you&apos;re not<br />an idiot.
          </h1>

          {/* Subline */}
          <p className="sub-fade sub-fade-3" style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '480px',
          }}>
            One email. Whenever there&apos;s actually something worth saying — not on a schedule, just when the analysis is ready.
          </p>

          {/* Pill tags */}
          <div className="sub-fade sub-fade-3 pill-tags" style={{ marginBottom: '48px' }}>
            {['No paywalls', 'No hot takes without homework', 'No charts without context', 'Free forever'].map(tag => (
              <span key={tag} className="pill-tag">{tag}</span>
            ))}
          </div>

          {/* Form */}
          <form className="sub-fade sub-fade-4" onSubmit={handleSubmit}>
            <div className="sub-form-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="sub-email-input"
              />
              <button type="submit" className="sub-submit">
                Subscribe →
              </button>
            </div>
          </form>

          {/* Fine print */}
          <p className="sub-fade sub-fade-5" style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginTop: '20px',
          }}>
            Free. Unsubscribe anytime. No spam, ever.
          </p>

        </div>
      )}
    </main>
  )
}
