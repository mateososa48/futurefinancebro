import { urlFor } from './image'

const CATEGORY_TAGS = {
  markets: 'MARKETS',
  investing: 'INVESTING',
  economy: 'ECONOMY',
  'personal-finance': 'PERSONAL FINANCE',
}

function formatDate(isoString) {
  const d = new Date(isoString)
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

export function formatPost(post) {
  if (!post) return null

  const slugValue = post.slug?.current || post.slug
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1100).height(560).url()
    : 'https://placehold.co/1100x560/c4d4c8/1e3a28'

  return {
    tag: CATEGORY_TAGS[post.category] || post.category?.toUpperCase(),
    category: post.category,
    date: formatDate(post.publishedAt),
    title: post.title,
    description: post.excerpt || '',
    image: imageUrl,
    href: `/${post.category}/${slugValue}`,
    slug: slugValue,
    body: post.body || null,
  }
}
