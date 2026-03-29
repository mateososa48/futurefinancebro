export const dynamic = 'force-dynamic'

import ArticleCard from '../../components/ArticleCard'
import { getAllPosts } from '../../../sanity/lib/fetch'

export const metadata = { title: 'All Articles — FutureFinanceBro' }

export default async function RecentPage() {
  const articles = await getAllPosts()

  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        .recent-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px 32px; }
        @media (max-width: 1100px) { .recent-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 24px; } }
        @media (max-width: 860px)  { .recent-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Header */}
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
          FutureFinanceBro · All Articles
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.035em',
          color: 'var(--text-primary)',
          maxWidth: '680px',
        }}>
          Everything we&apos;ve published.
        </h1>
      </section>

      {/* Grid */}
      <section style={{ padding: '48px 0 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <span style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sentient)',
          }}>
            All Articles
          </span>
          <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-alexandria)' }}>
            {articles.length} articles
          </span>
        </div>

        <div className="recent-grid">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </section>
    </main>
  )
}
