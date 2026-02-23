'use client'

import { ItemList } from '@/components/ItemList'
import { CartCard } from './_components/CardCart'
import { CartSummary } from './_components/CartSummary'
import { useCart } from '@/store/CartContext'
import style from '@/styles/pages/cart/cart.module.css'

export default function CartPage() {
  const { items, removeItem } = useCart()
  const totalItems = items.length
  return (
    <main className={style.pageCartContainer}>
      <h1 className="sr-only">Shopping cart</h1>
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
