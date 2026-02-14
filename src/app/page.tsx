import { ProductsContainer } from '@/components/ProductsContainer'
import { fetchItems } from '@/lib/api'
import { removeDuplicates } from '@/lib/utils'
import { Mobile } from '@/types'

export default async function HomePage() {
  const data = await fetchItems<Mobile>(20)
  const unicData = removeDuplicates(data, 'id')
  return (
    <main>
      <ProductsContainer initialItems={unicData} />
    </main>
  )
}
