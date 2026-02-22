import { ButtonCustom } from '@/components/ButtonCustom'
import type { MobileCart } from '@/types/index'
import style from './CartSummary.module.css'

interface CartSummaryProps {
  items: MobileCart[]
}

export function CartSummary({ items }: CartSummaryProps) {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <section className={style.cartSummaryWrapper}>
      {items.length > 0 && (
        <div className={style.cartSummaryPrice}>
          <span>Total</span>
          <span>{totalPrice}EUR</span>
        </div>
      )}
      <ButtonCustom
        text={'continue shopping'}
        variant={'white'}
        className={style.cartSummaryButtonContinue}
      />
      {items.length > 0 && <ButtonCustom text={'pay'} className={style.cartSummaryButtonPay} />}
    </section>
  )
}
