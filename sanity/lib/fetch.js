import { client } from './client'
import { formatPost } from './format'
import {
  FEATURED_POST_QUERY,
  RECENT_POSTS_QUERY,
  POSTS_QUERY,
  POST_BY_SLUG_QUERY,
} from './queries'

export async function getFeaturedPost() {
  if (!client) return null
  const post = await client.fetch(FEATURED_POST_QUERY)
  return formatPost(post)
}

export async function getRecentPosts() {
  if (!client) return []
  const posts = await client.fetch(RECENT_POSTS_QUERY)
  return posts.map(formatPost)
}

export async function getAllPosts() {
  if (!client) return []
  const posts = await client.fetch(POSTS_QUERY)
  return posts.map(formatPost)
}

export async function getPostBySlug(slug) {
  if (!client) return null
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug })
  return formatPost(post)
}
