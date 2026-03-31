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
        .featured-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
        .recent-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px 24px; }
        @media (max-width: 860px) {
          .featured-grid { grid-template-columns: 1fr; }
          .recent-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .recent-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section style={{ padding: '48px 0 80px', display: 'flex', flexDirection: 'column', gap: '56px' }}>

        {hasFeatured && (
          <div>
            <div style={{ height: '24px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <SectionLabel>Latest</SectionLabel>
            </div>
            <div className="featured-grid">
              {featured.map((article, i) => (
                <ArticleCard key={i} article={article} large />
              ))}
            </div>
          </div>
        )}

        {hasRecent && (
          <div>
            <div style={{ height: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <SectionLabel>More</SectionLabel>
              <Link href="/recent" style={{ fontSize: '0.8125rem', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)' }}>
                View all →
              </Link>
            </div>
            <div className="recent-grid">
              {recent.map((article, i) => <ArticleCard key={i} article={article} />)}
            </div>
          </div>
        )}

      </section>
    </>
  )
}
