export const dynamic = 'force-dynamic'

import HomeContent from '../components/HomeContent'
import { getFeaturedPost, getRecentPosts } from '../../sanity/lib/fetch'

export default async function HomePage() {
  const featured = await getFeaturedPost()
  const recent = await getRecentPosts()

  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>

      {/* Hero */}
      <section style={{
        padding: '60px 0 52px',
        borderBottom: '1px solid var(--border)',
      }}>
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--mint-text)',
          fontFamily: 'var(--font-alexandria)',
          marginBottom: '20px',
        }}>
          Tagline here
        </p>

        <h1 style={{
          fontFamily: 'var(--font-sentient)',
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.035em',
          color: 'var(--text-primary)',
          maxWidth: '680px',
          marginBottom: '24px',
        }}>
          Big idea here.<br />Second line here.
        </h1>

        <p style={{
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-alexandria)',
          letterSpacing: '0.03em',
        }}>
          Supporting line here.
        </p>
      </section>

      {/* View-switching content */}
      <HomeContent featured={featured} recent={recent} />

    </main>
  )
}
