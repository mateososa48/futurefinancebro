// Newest published post (the featured article)
export const FEATURED_POST_QUERY = `*[_type == "post"] | order(publishedAt desc)[0]{
  _id, title, slug, category, publishedAt, mainImage, excerpt, body
}`

// Posts 2–7 (skip the featured one), used on homepage
export const RECENT_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[1..6]{
  _id, title, slug, category, publishedAt, mainImage, excerpt, body
}`

// All posts, newest first
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id, title, slug, category, publishedAt, mainImage, excerpt
}`

// Posts filtered by category
export const POSTS_BY_CATEGORY_QUERY = `*[_type == "post" && category == $category] | order(publishedAt desc){
  _id, title, slug, category, publishedAt, mainImage, excerpt
}`

// Single post by slug (includes body for full article page)
export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, category, publishedAt, mainImage, excerpt, body
}`
