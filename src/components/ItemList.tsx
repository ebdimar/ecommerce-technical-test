import styles from '@/styles/components/ItemList.module.css'
import React from 'react'

type ItemListProps<T extends { id: string }> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  className?: string
  label?: string
}

export function ItemList<T extends { id: string }>({
  items,
  renderItem,
  className,
  label,
}: ItemListProps<T>) {
  return (
    <section className={`${styles.itemsContainer} ${className ?? ''}`.trim()} aria-label={label}>
      {items.map((item) => (
        <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
      ))}
    </section>
  )
}
