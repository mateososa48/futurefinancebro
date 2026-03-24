export const dynamic = 'force-dynamic'

import CategoryPage from '../../components/CategoryPage'
import { getPostsByCategory } from '../../../sanity/lib/fetch'

export const metadata = { title: 'Personal Finance — Futurefinancebro' }

export default async function PersonalFinancePage() {
  const articles = await getPostsByCategory('personal-finance')

  return (
    <CategoryPage
      category="personal-finance"
      title="Personal Finance"
      description="Practical guidance on taxes, budgeting, savings, and retirement. Actionable advice for navigating financial decisions at every stage of life."
      articles={articles}
    />
  )
}
