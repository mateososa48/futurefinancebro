import { urlFor } from './image'

function estimateReadingTime(body, excerpt) {
  let wordCount = 0
  if (body && Array.isArray(body)) {
    for (const block of body) {
      if (block._type === 'block' && Array.isArray(block.children)) {
        for (const span of block.children) {
          if (span.text) wordCount += span.text.split(/\s+/).filter(Boolean).length
        }
      }
    }
  }
  if (wordCount === 0 && excerpt) {
    wordCount = excerpt.split(/\s+/).filter(Boolean).length
  }
  return Math.max(1, Math.ceil(wordCount / 238))
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
    date: formatDate(post.publishedAt),
    title: post.title,
    description: post.excerpt || '',
    image: imageUrl,
    href: `/blog/${slugValue}`,
    slug: slugValue,
    body: post.body || null,
    readingTime: estimateReadingTime(post.body, post.excerpt),
  }
}
