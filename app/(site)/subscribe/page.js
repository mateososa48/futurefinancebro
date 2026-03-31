'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <main style={{
      minHeight: 'calc(100vh - 96px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .s1 { opacity:0; animation: fadeUp 0.5s cubic-bezier(0.25,1,0.5,1) 0.05s forwards; }
        .s2 { opacity:0; animation: fadeUp 0.5s cubic-bezier(0.25,1,0.5,1) 0.15s forwards; }
        .s3 { opacity:0; animation: fadeUp 0.5s cubic-bezier(0.25,1,0.5,1) 0.25s forwards; }
        .s4 { opacity:0; animation: fadeUp 0.5s cubic-bezier(0.25,1,0.5,1) 0.35s forwards; }

        .email-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border);
          padding: 10px 0;
          font-size: 1rem;
          font-family: var(--font-alexandria);
          color: var(--text-primary);
          outline: none;
          flex: 1;
          min-width: 0;
          transition: border-color 0.2s ease;
        }
        .email-input::placeholder { color: var(--text-muted); }
        .email-input:focus { border-bottom-color: var(--mint-text); }

        .sub-btn {
          background: var(--green-dark);
          color: #fff;
          border: none;
          border-radius: 9999px;
          padding: 10px 22px;
          font-size: 0.875rem;
          font-family: var(--font-alexandria);
          font-weight: 500;
          cursor: pointer;
          flex-shrink: 0;
          transition: opacity 0.15s ease;
        }
        .sub-btn:hover { opacity: 0.85; }
      `}</style>

      {submitted ? (
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <p className="s1" style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            You&apos;re in.
          </p>
          <Link className="s2" href="/" style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.875rem',
            color: 'var(--mint-text)',
          }}>
            ← Back
          </Link>
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: '480px', textAlign: 'center' }}>

          {/* Label */}
          <p className="s1" style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--mint-text)',
            marginBottom: '20px',
          }}>
            Newsletter
          </p>

          {/* Headline */}
          <h1 className="s2" style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
            fontWeight: 400,
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '40px',
          }}>
            Get the next one<br />in your inbox.
          </h1>

          {/* Form */}
          <form className="s3" onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '16px' }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="email-input"
              />
              <button type="submit" className="sub-btn">Subscribe →</button>
            </div>
          </form>

          {/* Fine print */}
          <p className="s4" style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}>
            Free. Unsubscribe anytime.
          </p>

        </div>
      )}
    </main>
  )
}
