import CategoryPage from '../../components/CategoryPage'
import { getPostsByCategory } from '../../../sanity/lib/fetch'

export const metadata = { title: 'Markets — Futurefinancebro' }

export default async function MarketsPage() {
  const articles = await getPostsByCategory('markets')

  return (
    <CategoryPage
      category="markets"
      title="Markets"
      description="Stocks, indices, commodities, and the forces that move them. Coverage of equities, fixed income, currencies, and the macro signals that matter to investors."
      articles={articles}
    />
  )
}
