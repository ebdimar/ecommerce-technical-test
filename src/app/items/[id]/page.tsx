import { DetailsComponent } from '@/components/DetailsComponent'
import { fetchItemById } from '@/lib/api'
import { MobileDetailsApi } from '@/types'
import styles from '@/styles/components/Details.module.css'

export default async function ItemDetailPage({ params }: { params: { id: string } }) {
  const item = await fetchItemById<MobileDetailsApi>(params.id)
  return (
    <main className={styles.detailsContainer}>
      <div className="details-info-container">
        <DetailsComponent item={item} />
      </div>
    </main>
  )
}
