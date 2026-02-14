import { Mobile } from '@/types'
import Link from 'next/link'
import styles from '@/styles/components/Card.module.css'

export function Card({ item }: { item: Mobile }) {
  return (
    <Link href={`/items/${item.id}`} className={styles.card}>
      <article key={item.id}>
        <img className={styles.cardImage} src={item.imageUrl} alt={item.name} />
        <div className={styles.cardInfoContainer}>
          <div className={styles.brandAndName}>
            <span className={styles.itemBrand}>{item.brand}</span>
            <p className={styles.itemName}>{item.name}</p>
          </div>
          <p className={styles.itemPrice}>{item.basePrice} EUR</p>
        </div>
      </article>
    </Link>
  )
}
