import { DetailsComponent } from '@/components/DetailsComponent'
import { fetchItemById } from '@/lib/api'
import { MobileDetailsApi } from '@/types'
import styles from '@/styles/components/Details.module.css'
import { Table } from '@/components/Table'

export default async function ItemDetailPage({ params }: { params: { id: string } }) {
  const item = await fetchItemById<MobileDetailsApi>(params.id)
  console.log(item, 'item')
  const specs = [
    { name: 'Brand', value: item.brand },
    { name: 'Model', value: item.name },
    { name: 'Description', value: item.description },
    { name: 'Screen', value: item.specs.screen },
    { name: 'Resolution', value: item.specs.resolution },
    { name: 'Processor', value: item.specs.processor },
    { name: 'Main Camera', value: item.specs.mainCamera },
    { name: 'Selfie Camera', value: item.specs.selfieCamera },
    { name: 'Battery', value: item.specs.battery },
    { name: 'OS', value: item.specs.os },
    { name: 'Refresh Rate', value: item.specs.screenRefreshRate },
  ]
  return (
    <main className={styles.detailsContainer}>
      <div className="details-info-container">
        <DetailsComponent item={item} />
        <Table rows={specs} title={'Specifications'} />
      </div>
    </main>
  )
}
