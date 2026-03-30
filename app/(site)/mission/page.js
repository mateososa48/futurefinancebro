export const metadata = { title: 'Mission — FutureFinanceBro' }

export default function MissionPage() {
  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        .mission-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 56px; align-items: start; }
        @media (max-width: 860px) { .mission-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>

      {/* Hero */}
      <section style={{ padding: '60px 0 52px', borderBottom: '1px solid var(--border)' }}>
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--mint-text)',
          fontFamily: 'var(--font-alexandria)',
          marginBottom: '20px',
        }}>
          Our Mission
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.035em',
          color: 'var(--text-primary)',
          maxWidth: '700px',
        }}>
          Finance is complex. Understanding it shouldn&apos;t be.
        </h1>
      </section>

      {/* Body */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="mission-grid">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-sentient)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}>
              We write for clarity, not clicks.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)', marginBottom: '20px' }}>
              Most financial media is built around urgency — the breaking story, the hot trade, the market move you can&apos;t afford to miss. We think that model works against readers. Short-term noise drowns out the long-term signals that actually matter.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)', marginBottom: '20px' }}>
              FutureFinanceBro is built around a different premise: that readers are best served by analysis that takes time to be right rather than content that races to be first. We publish fewer pieces than most, but we hold each one to a higher standard.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)' }}>
              Every piece we publish asks a simple question: does this help the reader make better financial decisions? If the answer isn&apos;t clearly yes, it doesn&apos;t run.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section style={{ padding: '64px 0 80px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: '16px',
        }}>
          Stay informed.
        </h2>
        <p style={{
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-alexandria)',
          maxWidth: '400px',
          margin: '0 auto 32px',
        }}>
          Get our best analysis delivered to your inbox. No noise, no filler — just the pieces worth reading.
        </p>
        <a href="/subscribe" style={{
          display: 'inline-block',
          background: 'var(--green-dark)',
          color: '#fff',
          borderRadius: '9999px',
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-alexandria)',
          fontWeight: 500,
          letterSpacing: '0.02em',
          textDecoration: 'none',
        }}>
          Subscribe to FutureFinanceBro
        </a>
      </section>
    </main>
  )
}
