import Link from 'next/link'
import ArticleCard from './ArticleCard'

export default function CategoryPage({ category, title, description, articles = [] }) {

  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        .cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px 32px; }
        @media (max-width: 1100px) { .cat-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 24px; } }
        @media (max-width: 860px)  { .cat-grid { grid-template-columns: 1fr; } }
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
          FutureFinanceBro · {title}
        </p>

        <h1 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.035em',
          color: 'var(--text-primary)',
          maxWidth: '680px',
          marginBottom: '20px',
        }}>
          {title}
        </h1>

        <p style={{
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-alexandria)',
          maxWidth: '520px',
        }}>
          {description}
        </p>
      </section>

      {/* Articles grid */}
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
          <span style={{
            fontSize: '0.6875rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-alexandria)',
          }}>
            {articles.length} {articles.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        <div className="cat-grid">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-alexandria)', fontSize: '0.9375rem' }}>
            No articles yet. Check back soon.
          </p>
        )}
      </section>
    </main>
  )
}
