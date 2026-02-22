import { ProductsContainer } from '@/app/_components/ProductsContainer'
import { fetchItems } from '@/lib/api'
import { removeDuplicates } from '@/lib/utils'
import { Mobile } from '@/types'

export default async function HomePage() {
  const data = await fetchItems<Mobile>(20)
  const unicData = removeDuplicates(data, 'id')
  return (
    <main>
      <h1 className="sr-only">Catálogo de móviles</h1>
      <ProductsContainer initialItems={unicData} />
    </main>
  )
}
