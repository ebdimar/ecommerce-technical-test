import { Details } from '@/app/items/[id]/_components/Details'
import { fetchItemById } from '@/lib/api'
import { MobileDetailsApi } from '@/types'
import { Table } from '@/components/Table'
import { Carousel } from '@/components/Carousel'
import { Card } from '@/components/Card'
import { BackButton } from '@/components/BackButton'
import { buildSpecs } from '@/lib/utils'
import styles from '@/styles/pages/details/pageDetails.module.css'

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = await fetchItemById<MobileDetailsApi>(id)

  const specs = buildSpecs(item)
  return (
    <main className={styles.pageDetailsContainer}>
      <BackButton label={'Back'} />
      <h1 className="sr-only">Product details</h1>
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
          renderItem={(product) => <Card item={product} />}
        />
      </section>
    </main>
  )
}
