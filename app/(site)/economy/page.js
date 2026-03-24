import CategoryPage from '../../components/CategoryPage'
import { getPostsByCategory } from '../../../sanity/lib/fetch'

export const metadata = { title: 'Economy — Futurefinancebro' }

export default async function EconomyPage() {
  const articles = await getPostsByCategory('economy')

  return (
    <CategoryPage
      category="economy"
      title="Economy"
      description="Macro trends, policy shifts, and what they mean for your money. Analysis of GDP, employment, inflation, central bank decisions, and the global forces shaping economic conditions."
      articles={articles}
    />
  )
}
