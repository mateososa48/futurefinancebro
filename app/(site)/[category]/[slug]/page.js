import Link from 'next/link'
import ArticleCard from '../../../components/ArticleCard'
import { getPostBySlug, getPostsByCategory } from '../../../../sanity/lib/fetch'

const PLACEHOLDER_BODY = [
  {
    heading: null,
    text: 'Financial markets rarely move in a straight line, and the forces driving current conditions are no exception. A confluence of macroeconomic pressures, shifting monetary policy expectations, and evolving investor sentiment has created a landscape that rewards careful analysis over reactive decision-making. Understanding the underlying dynamics at play is the first step toward navigating them with confidence.',
  },
  {
    heading: 'The Broader Context',
    text: 'To appreciate what is happening now, it helps to step back and consider the arc of the past several years. The post-pandemic recovery unleashed a wave of fiscal stimulus that drove consumer spending well above trend, while supply chain disruptions constrained the availability of goods. That combination — elevated demand meeting constrained supply — produced the inflationary surge that dominated headlines throughout 2022 and 2023.',
  },
  {
    heading: null,
    text: 'Central banks responded with the most aggressive rate-hiking cycles in decades. The Federal Reserve raised its benchmark rate from near zero to over five percent in under two years, a pace not seen since the early 1980s. The knock-on effects have been felt across asset classes: mortgage rates climbed to multi-decade highs, corporate borrowing costs rose sharply, and valuations in rate-sensitive sectors compressed significantly.',
  },
  {
    heading: 'What the Data Is Telling Us',
    text: 'Recent economic data paints a picture that is more nuanced than either the optimists or the pessimists would have you believe. Headline inflation has cooled substantially from its peak, but core services inflation — driven largely by shelter costs and wages — has proven stickier than most forecasters anticipated. Labor markets remain resilient by historical standards, with unemployment still near historically low levels, yet there are clear signs of softening at the margins.',
  },
  {
    heading: null,
    text: 'Consumer spending data tells a similarly complex story. Aggregate spending has held up better than the headlines about consumer confidence surveys would suggest. But the composition of that spending has shifted: lower-income households, who depleted their pandemic-era savings earlier, have pulled back on discretionary purchases, while higher-income households — buoyed by financial asset appreciation — have continued spending freely. This bifurcation makes aggregate data harder to interpret.',
  },
  {
    heading: 'Implications for Investors',
    text: 'For investors, the current environment calls for a clear-eyed assessment of where risks and opportunities actually lie rather than a reliance on broad market narratives. Duration risk in fixed income deserves particular attention: if rates remain elevated longer than the market currently prices in, long-duration bonds will face continued pressure. Conversely, short-duration instruments now offer yields that look attractive relative to their historical range, providing a real alternative to equities for the first time in years.',
  },
  {
    heading: null,
    text: 'Equity investors face a more differentiated landscape. The broad index has been carried by a narrow group of large-cap technology companies whose earnings growth has justified elevated multiples, at least for now. The rest of the market — smaller companies, value stocks, international equities — trades at significantly more modest valuations. Whether that discount represents an opportunity or a value trap depends heavily on where the economy goes from here and how long rates stay elevated.',
  },
]

const CATEGORY_LABELS = {
  markets: 'Markets',
  investing: 'Investing',
  economy: 'Economy',
  'personal-finance': 'Personal Finance',
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params
  const article = await getPostBySlug(slug)

  if (!article) {
    return (
      <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-sentient)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
          Article not found
        </h1>
        <Link href="/" style={{ color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)', fontSize: '0.9rem' }}>
          ← Back to home
        </Link>
      </main>
    )
  }

  const categoryLabel = CATEGORY_LABELS[article.category] || article.category
  const allInCategory = await getPostsByCategory(article.category)
  const related = allInCategory.filter(a => a.slug !== article.slug).slice(0, 3)

  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
      <style>{`
        .article-related { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px 32px; }
        @media (max-width: 1100px) { .article-related { grid-template-columns: repeat(2, 1fr); gap: 32px 24px; } }
        @media (max-width: 860px)  { .article-related { grid-template-columns: 1fr; } }
      `}</style>

      {/* Breadcrumb */}
      <nav style={{ padding: '28px 0 0', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-alexandria)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <Link href="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
        <span>/</span>
        <Link href={`/${article.category}`} style={{ color: 'var(--text-muted)' }}>{categoryLabel}</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>{article.title}</span>
      </nav>

      {/* Article header */}
      <section style={{ maxWidth: '720px', padding: '40px 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)' }}>
            {article.tag}
          </span>
          <span style={{ fontSize: '0.6875rem', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)' }}>
            {article.date}
          </span>
        </div>

        <div style={{ height: '1.5px', backgroundColor: 'var(--mint-text)', margin: '14px 0 24px', borderRadius: '9999px' }} />

        <h1 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: '20px',
        }}>
          {article.title}
        </h1>

        <p style={{
          fontSize: '1rem',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-alexandria)',
        }}>
          {article.description}
        </p>
      </section>

      {/* Hero image */}
      <div style={{
        width: '100%',
        aspectRatio: '2 / 1',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-elevated)',
        margin: '40px 0',
      }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Article body (placeholder until Portable Text is added) */}
      <article style={{ maxWidth: '720px', paddingBottom: '72px' }}>
        {PLACEHOLDER_BODY.map((block, i) => (
          <div key={i}>
            {block.heading && (
              <h2 style={{
                fontFamily: 'var(--font-sentient)',
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                margin: '40px 0 16px',
              }}>
                {block.heading}
              </h2>
            )}
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-alexandria)',
              marginBottom: '24px',
            }}>
              {block.text}
            </p>
          </div>
        ))}
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section style={{ borderTop: '1px solid var(--border)', padding: '48px 0 80px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sentient)',
            }}>
              More from {categoryLabel}
            </span>
          </div>
          <div className="article-related">
            {related.map((a, i) => <ArticleCard key={i} article={a} />)}
          </div>
        </section>
      )}
    </main>
  )
}
