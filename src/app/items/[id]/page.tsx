import { fetchItemById } from '@/lib/api'
import { Mobile } from '@/types'

export default async function ItemDetailPage({ params }: { params: { id: string } }) {
  const item = await fetchItemById<Mobile>(params.id)

  return (
    <main>
      <h1>Item ID: {params.id}</h1>
    </main>
  )
}
