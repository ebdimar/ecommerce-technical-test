import styles from '@/styles/components/ItemList.module.css'

type ItemListProps<T extends { id: string }> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  className?: string
}

export function ItemList<T extends { id: string }>({
  items,
  renderItem,
  className,
}: ItemListProps<T>) {
  return (
    <section className={`${styles.itemsContainer} ${className ?? ''}`.trim()}>
      {items.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </section>
  )
}
