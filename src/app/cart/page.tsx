'use client'

import style from '@/app/cart/page.module.css'
import { ItemList } from '@/components/ItemList'
import { useCartStore } from '@/store/cartStore'
import { CartCard } from './_components/CardCart'
import { CartSummary } from './_components/CartSummary'

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const totalItems = items.length
  return (
    <main className={style.pageCartContainer}>
      <section className={style.cartItemsInfoWrapper}>
        <h2 className={style.cartItemsNumber}>{`CART (${totalItems})`}</h2>
        <ItemList
          items={items}
          className={style.itemListCartItems}
          renderItem={(item) => <CartCard item={item} onRemove={removeItem} />}
        />
      </section>
      <CartSummary items={items} />
    </main>
  )
}
