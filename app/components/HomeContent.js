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
  if (!featured && (!recent || recent.length === 0)) {
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
        .lc-split { display: grid; grid-template-columns: 1.15fr 1fr; gap: 56px; align-items: start; }
        @media (max-width: 860px) {
          .lc-split { grid-template-columns: 1fr; }
        }
      `}</style>

      <section style={{ padding: '48px 0 80px' }}>
        <div className="lc-split">

          {featured && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <SectionLabel>Featured</SectionLabel>
            </div>
            <ArticleCard article={featured} large />
          </div>
          )}

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <SectionLabel>Recent</SectionLabel>
              <Link href="/recent" style={{ fontSize: '0.8125rem', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)' }}>
                View all →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px 24px' }}>
              {recent.slice(0, 4).map((article, i) => <ArticleCard key={i} article={article} />)}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
