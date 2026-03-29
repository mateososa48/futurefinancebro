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
        .sub-input {
          width: 100%;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 10px 18px;
          font-size: 0.875rem;
          font-family: var(--font-alexandria);
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s ease;
        }
        .sub-input::placeholder {
          color: var(--text-muted);
        }
        .sub-input:focus {
          border-color: var(--mint-text);
        }
        .sub-btn {
          background: var(--green-dark);
          color: #fff;
          border: none;
          border-radius: 9999px;
          padding: 10px 24px;
          font-size: 0.8125rem;
          font-family: var(--font-alexandria);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .sub-btn:hover {
          opacity: 0.85;
        }
        .benefit-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }
        .benefit-row:first-child {
          border-top: 1px solid var(--border);
        }
        .benefit-num {
          font-family: var(--font-sentient);
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--mint-text);
          letter-spacing: 0.05em;
          padding-top: 2px;
          min-width: 24px;
        }
        .benefit-title {
          font-family: var(--font-sentient);
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .benefit-desc {
          font-family: var(--font-alexandria);
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .success-check {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--mint-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        @media (max-width: 860px) {
          .sub-two-col {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .sub-form-row {
            flex-direction: column !important;
          }
          .sub-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="sub-two-col" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        padding: '80px 0 100px',
        alignItems: 'start',
      }}>

        {/* Left col — copy */}
        <div>
          <p style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--mint-text)',
            fontFamily: 'var(--font-alexandria)',
            marginBottom: '20px',
          }}>
            Newsletter
          </p>

          <h1 style={{
            fontFamily: 'var(--font-sentient)',
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 400,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            Stay ahead of<br />the market.
          </h1>

          <p style={{
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            maxWidth: '400px',
            marginBottom: '48px',
          }}>
            FutureFinanceBro delivers clear, independent analysis of markets, the economy, and personal finance — straight to your inbox. No noise. No agenda. Just what matters.
          </p>

          {/* Benefits */}
          <div>
            {[
              {
                n: '01',
                title: 'Weekly market briefings',
                desc: 'What moved, why it moved, and what to watch next week.',
              },
              {
                n: '02',
                title: 'Deep-dive analysis',
                desc: 'Longer reads on the trends and ideas shaping the financial landscape.',
              },
              {
                n: '03',
                title: 'Personal finance guidance',
                desc: 'Practical, actionable takes on investing, taxes, and building wealth.',
              },
              {
                n: '04',
                title: 'Free, always',
                desc: 'No paywalls. No premium tiers. Everything we publish is free to read.',
              },
            ].map(b => (
              <div key={b.n} className="benefit-row">
                <span className="benefit-num">{b.n}</span>
                <div>
                  <p className="benefit-title">{b.title}</p>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col — form */}
        <div style={{ position: 'sticky', top: '96px' }}>
          <div style={{
            background: 'var(--bg-elevated)',
            padding: '40px',
            borderRadius: '5px',
          }}>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div className="success-check">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="var(--mint-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-sentient)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}>
                  You&apos;re in.
                </h2>
                <p style={{
                  fontFamily: 'var(--font-alexandria)',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}>
                  Welcome to FutureFinanceBro. Check your inbox for a confirmation — the first edition lands shortly.
                </p>
                <Link href="/" style={{
                  fontFamily: 'var(--font-alexandria)',
                  fontSize: '0.8125rem',
                  color: 'var(--mint-text)',
                  letterSpacing: '0.02em',
                }}>
                  ← Back to the site
                </Link>
              </div>
            ) : (
              <>
                <h2 style={{
                  fontFamily: 'var(--font-sentient)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  Join the newsletter
                </h2>
                <p style={{
                  fontFamily: 'var(--font-alexandria)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}>
                  Free. Unsubscribe anytime.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'var(--font-alexandria)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}>
                      Your email
                    </label>
                    <div className="sub-form-row" style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="sub-input"
                      />
                      <button type="submit" className="sub-btn">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>

                <p style={{
                  fontFamily: 'var(--font-alexandria)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginTop: '20px',
                  opacity: 0.7,
                }}>
                  By subscribing you agree to receive editorial emails from FutureFinanceBro. We never share your information with third parties.
                </p>

                {/* Social proof */}
                <div style={{
                  marginTop: '32px',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{ display: 'flex' }}>
                    {['#1E3A28', '#2C5C3A', '#3A7A50', '#4E9966'].map((c, i) => (
                      <div key={i} style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: c,
                        border: '2px solid var(--bg-elevated)',
                        marginLeft: i === 0 ? 0 : '-8px',
                      }} />
                    ))}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-alexandria)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}>
                    Join thousands of readers<br />already subscribed
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

      </div>

    </main>
  )
}
