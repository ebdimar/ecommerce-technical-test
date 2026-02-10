import { Mobile } from '@/types'
import styles from '@/styles/components/Card.module.css'

export function Card({ item }: { item: Mobile }) {
  return (
    <article className={styles.card} key={item.id}>
      <img className={styles.cardImage} src={item.imageUrl} alt={item.name} />
      <div className={styles.cardInfoContainer}>
        <div className={styles.brandAndName}>
          <span className={styles.itemBrand}>{item.brand}</span>
          <p className={styles.itemName}>{item.name}</p>
        </div>
        <p className={styles.itemPrice}>{item.basePrice} EUR</p>
      </div>
    </article>
  )
}
