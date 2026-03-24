import Link from 'next/link'

export const metadata = { title: 'About — Futurefinancebro' }

const categories = [
  {
    href: '/markets',
    label: 'MARKETS',
    title: 'Markets',
    description: 'Stocks, indices, commodities, and the macro signals that move asset prices.',
  },
  {
    href: '/investing',
    label: 'INVESTING',
    title: 'Investing',
    description: 'Portfolio strategy, asset allocation, and analysis for long-term investors.',
  },
  {
    href: '/economy',
    label: 'ECONOMY',
    title: 'Economy',
    description: 'GDP, employment, inflation, and the policy decisions shaping the broader economy.',
  },
  {
    href: '/personal-finance',
    label: 'PERSONAL FINANCE',
    title: 'Personal Finance',
    description: 'Taxes, budgeting, retirement, and practical guidance for everyday financial decisions.',
  },
]

export default function AboutPage() {
  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        .about-mission { display: grid; grid-template-columns: 1fr 1.6fr; gap: 56px; align-items: start; }
        .about-categories { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px 24px; }
        @media (max-width: 1024px) { .about-categories { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 860px)  { .about-mission { grid-template-columns: 1fr; gap: 32px; } }
        @media (max-width: 640px)  { .about-categories { grid-template-columns: 1fr; } }
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
          About Futurefinancebro
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
          Futurefinancebro publishes clear, rigorous analysis of markets, the economy, and personal finance — without the noise, without the agenda. We write for people who want to understand, not just react.
        </p>
      </section>

      {/* Mission */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="about-mission">
          <div>
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sentient)',
              display: 'block',
              marginBottom: '20px',
            }}>
              Our Mission
            </span>
            <h2 style={{
              fontFamily: 'var(--font-sentient)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}>
              Finance is complex. Understanding it shouldn&apos;t be.
            </h2>
          </div>
          <div style={{ paddingTop: '44px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)', marginBottom: '20px' }}>
              Most financial media is built around urgency — the breaking story, the hot trade, the market move you can&apos;t afford to miss. We think that model works against readers. Short-term noise drowns out the long-term signals that actually matter.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)', marginBottom: '20px' }}>
              Futurefinancebro is built around a different premise: that readers are best served by analysis that takes time to be right rather than content that races to be first. We publish fewer pieces than most, but we hold each one to a higher standard.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)' }}>
              Every piece we publish asks a simple question: does this help the reader make better financial decisions? If the answer isn&apos;t clearly yes, it doesn&apos;t run.
            </p>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border)' }}>
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-sentient)',
          display: 'block',
          marginBottom: '32px',
        }}>
          What We Cover
        </span>

        <div className="about-categories">
          {categories.map(cat => (
            <Link key={cat.href} href={cat.href} style={{ display: 'block' }}>
              <div style={{ height: '1.5px', backgroundColor: 'var(--mint-text)', borderRadius: '9999px', marginBottom: '16px' }} />
              <span style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--mint-text)',
                fontFamily: 'var(--font-alexandria)',
                display: 'block',
                marginBottom: '10px',
              }}>
                {cat.label}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-sentient)',
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '10px',
              }}>
                {cat.title}
              </h3>
              <p style={{
                fontSize: '0.8125rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-alexandria)',
              }}>
                {cat.description}
              </p>
            </Link>
          ))}
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
        <button style={{
          background: 'var(--green-dark)',
          color: '#fff',
          border: 'none',
          borderRadius: '9999px',
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-alexandria)',
          fontWeight: 500,
          letterSpacing: '0.02em',
          cursor: 'pointer',
        }}>
          Subscribe to Futurefinancebro
        </button>
      </section>
    </main>
  )
}
