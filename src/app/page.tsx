import { ItemList } from '@/components/ItemList'
import { fetchItems } from '@/lib/api'
import { Mobile } from '@/types'

export default async function HomePage() {
  const mobiles = await fetchItems<Mobile>(20)

  return (
    <main className="mainContainer">
      <ItemList items={mobiles} />
    </main>
  )
}
