import { Details } from '@/app/items/[id]/_components/Details'
import { fetchItemById } from '@/lib/api'
import { MobileDetailsApi } from '@/types'
import { Table } from '@/components/Table'
import { Carousel } from '@/components/Carousel'
import { Card } from '@/components/Card'
import { BackButton } from '@/components/BackButton'
import styles from '@/app/items/[id]/page.module.css'

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = await fetchItemById<MobileDetailsApi>(id)
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
    <main className={styles.pageDetailsContainer}>
      <BackButton label={'Back'} />
      <div className={styles.pageDetailsWrapper}>
        <Details item={item} />
        <section>
          <h2>Specifications</h2>
          <Table rows={specs} />
        </section>
      </div>
      <section className={styles.carouselSection}>
        <h2>SIMILAR ITEMS</h2>
        <Carousel
          items={item.similarProducts}
          className={styles.carouselCard}
          renderItem={(product) => <Card key={item.id} item={product} />}
        />
      </section>
    </main>
  )
}
