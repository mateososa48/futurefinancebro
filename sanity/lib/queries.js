// Manually featured post, or newest if none is pinned
export const FEATURED_POST_QUERY = `coalesce(
  *[_type == "post" && featured == true] | order(publishedAt desc)[0],
  *[_type == "post"] | order(publishedAt desc)[0]
){
  _id, title, slug, publishedAt, featured, mainImage, excerpt, body
}`

// Recent posts excluding the featured one
export const RECENT_POSTS_QUERY = `*[_type == "post" && featured != true] | order(publishedAt desc)[0..5]{
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
