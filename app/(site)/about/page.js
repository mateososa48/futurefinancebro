import Link from 'next/link'

export const metadata = { title: 'About — FutureFinanceBro' }

export default function AboutPage() {
  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>

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
          About FutureFinanceBro
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.035em',
          color: 'var(--text-primary)',
          maxWidth: '700px',
          marginBottom: '24px',
        }}>
          Independent financial journalism for serious readers.
        </h1>
        <p style={{
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-alexandria)',
          maxWidth: '560px',
        }}>
          FutureFinanceBro publishes clear, rigorous analysis of markets, the economy, and personal finance — without the noise, without the agenda. We write for people who want to understand, not just react.
        </p>
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
        <Link href="/subscribe" style={{
          display: 'inline-block',
          background: 'var(--green-dark)',
          color: '#fff',
          borderRadius: '9999px',
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-alexandria)',
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}>
          Subscribe to FutureFinanceBro
        </Link>
      </section>
    </main>
  )
}
