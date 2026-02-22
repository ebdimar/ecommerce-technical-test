import type { MobileCart } from '@/types'
import styles from './/CartCard.module.css'

interface CartCardProps {
  item: MobileCart
  onRemove: (id: string) => void
}

export function CartCard({ item, onRemove }: CartCardProps) {
  return (
    <article className={styles.cartItem}>
      <img src={item.image} alt={`${item.name} color: ${item.color}`} />
      <div className={styles.cartItemInfo}>
        <div>
          <p>{item.name}</p>
          <p>{`${item.capacity} | ${item.color}`}</p>
          <p className={styles.itemPrice}>{`${item.price} EUR`}</p>
        </div>
        <button onClick={() => onRemove(item.id)}>Eliminar</button>
      </div>
    </article>
  )
}
