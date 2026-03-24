import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = client ? createImageUrlBuilder(client) : null

export function urlFor(source) {
  if (!builder) return { width: () => ({ height: () => ({ url: () => 'https://placehold.co/1100x560/c4d4c8/1e3a28' }) }) }
  return builder.image(source)
}
