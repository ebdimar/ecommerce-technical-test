import { removeDuplicates } from '@/lib/utils'
import styles from '@/styles/components/Carousel.module.css'

type CarouselProps<T extends { id: string | number }> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  itemWidth?: string
  className?: string
}

export function Carousel<T>({ items, renderItem, className }: CarouselProps<T>) {
  const unicData = removeDuplicates(items, 'id' as keyof T)
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`.trim()}>
      <div className={styles.track}>
        {unicData.map((item, index) => (
          <div key={item.id} className={styles.item}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}
