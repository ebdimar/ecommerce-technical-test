import { Mobile } from '@/types'
import { Card } from './Card'
import styles from '@/styles/components/ItemList.module.css'

export function ItemList({ items }: { items: Mobile[] }) {
  return (
    <section className={styles.itemsContainer}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  )
}
