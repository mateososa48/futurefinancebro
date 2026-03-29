'use client'
import Link from 'next/link'

export default function ArticleCard({ article, large = false, compact = false }) {
  return (
    <Link href={article.href} style={{
      display: 'block',
      transform: 'translateY(0)',
      transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        width: '100%',
        aspectRatio: large ? '2 / 1' : '3 / 2',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-elevated)',
        borderRadius: '5px',
      }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <div style={{ height: '1.5px', backgroundColor: 'var(--mint-text)', marginTop: '14px', borderRadius: '9999px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', paddingBottom: '9px' }}>
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)' }}>
          {article.readingTime ? `${article.readingTime} min read` : article.tag}
        </span>
        <span style={{ fontSize: '0.6875rem', color: 'var(--mint-text)', fontFamily: 'var(--font-alexandria)', letterSpacing: '0.02em' }}>
          {article.date}
        </span>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-sentient)',
        fontSize: large ? '1.625rem' : compact ? '0.9375rem' : '1.125rem',
        fontWeight: 500,
        lineHeight: 1.28,
        letterSpacing: '-0.02em',
        color: 'var(--text-primary)',
        marginBottom: compact ? 0 : '10px',
      }}>
        {article.title}
      </h2>

      {!compact && (
        <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'var(--text-secondary)', fontFamily: 'var(--font-alexandria)' }}>
          {article.description}
        </p>
      )}
    </Link>
  )
}
