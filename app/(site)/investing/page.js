import CategoryPage from '../../components/CategoryPage'
import { getPostsByCategory } from '../../../sanity/lib/fetch'

export const metadata = { title: 'Investing — Futurefinancebro' }

export default async function InvestingPage() {
  const articles = await getPostsByCategory('investing')

  return (
    <CategoryPage
      category="investing"
      title="Investing"
      description="Strategies, analysis, and ideas for building long-term wealth. From asset allocation to individual security selection, coverage for every stage of the investment journey."
      articles={articles}
    />
  )
}
