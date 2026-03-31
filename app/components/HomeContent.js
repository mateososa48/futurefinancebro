'use client'
import Link from 'next/link'
import ArticleCard from './ArticleCard'

function SectionLabel({ children }) {
  return (
    <span style={{
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sentient)',
    }}>
      {children}
    </span>
  )
}

export default function HomeContent({ featured, recent }) {
  const hasFeatured = featured && featured.length > 0
  const hasRecent = recent && recent.length > 0

  if (!hasFeatured && !hasRecent) {
    return (
      <section style={{ padding: '48px 0 80px' }}>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-alexandria)', fontSize: '0.9375rem' }}>
          No articles yet. Publish your first post in the Studio at <a href="/studio" style={{ color: 'var(--mint-text)' }}>/studio</a>.
        </p>
      </section>
    )
  }

  return (
    <>
      <style>{`
        .lc-split {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .lc-split { grid-template-columns: 1fr; }
        }
      `}</style>

      <section style={{ padding: '48px 0 80px' }}>
        <div className="lc-split">

          {/* Left: featured, stacked, max 2 */}
          {hasFeatured && (
            <div>
              <div style={{ height: '24px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <SectionLabel>Latest</SectionLabel>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {featured.slice(0, 2).map((article, i) => (
                  <ArticleCard key={i} article={article} large />
                ))}
              </div>
            </div>
          )}

          {/* Right: recent, 2-column grid, max 6 */}
          {hasRecent && (
            <div>
              <div style={{ height: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <SectionLabel>Recent</SectionLabel>
                <Link href="/recent" style={{ fontSize: '0.8125rem', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)' }}>
                  View all →
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px 24px' }}>
                {recent.slice(0, 4).map((article, i) => <ArticleCard key={i} article={article} />)}
              </div>
            </div>
          )}

        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/recent" style={{
            display: 'inline-block',
            border: '1px solid var(--text-primary)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-alexandria)',
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '12px 32px',
            borderRadius: '9999px',
            transition: 'background-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)' }}
          >
            View all articles
          </Link>
        </div>

      </section>
    </>
  )
}
