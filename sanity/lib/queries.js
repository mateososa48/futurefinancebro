// Always the 2 newest posts for the featured section
export const FEATURED_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0..1]{
  _id, title, slug, publishedAt, mainImage, excerpt, body
}`

// All posts after the first 2 (shown in recent)
export const RECENT_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[2..]{
  _id, title, slug, publishedAt, mainImage, excerpt, body
}`

// All posts, newest first
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id, title, slug, publishedAt, mainImage, excerpt
}`

// Single post by slug (includes body for full article page)
export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, mainImage, excerpt, body
}`
