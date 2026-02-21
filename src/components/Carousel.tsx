import styles from '@/styles/components/Carousel.module.css'

type CarouselProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  itemWidth?: string
  className?: string
}

export function Carousel<T>({ items, renderItem, className }: CarouselProps<T>) {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`.trim()}>
      <div className={styles.track}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.item}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}
