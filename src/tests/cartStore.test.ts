import { useCartStore } from '@/store/cartStore'
import type { MobileCart } from '@/types/index'

const mockItem: MobileCart = {
    id: '1',
    image: 'image.jpg',
    name: 'iPhone 15',
    capacity: '128GB',
    color: 'Black',
    price: 999,
}

const mockItem2: MobileCart = {
    id: '2',
    image: 'image2.jpg',
    name: 'Samsung S24',
    capacity: '256GB',
    color: 'White',
    price: 899,
}

describe('cartStore', () => {
    beforeEach(() => {
        useCartStore.setState({ items: [] })
    })

    it('should add an item to the cart', () => {
        useCartStore.getState().addItem(mockItem)
        expect(useCartStore.getState().items).toHaveLength(1)
        expect(useCartStore.getState().items[0]).toEqual(mockItem)
    })

    it('should not add a duplicate item', () => {
        useCartStore.getState().addItem(mockItem)
        useCartStore.getState().addItem(mockItem)
        expect(useCartStore.getState().items).toHaveLength(1)
    })

    it('should remove an item from the cart', () => {
        useCartStore.getState().addItem(mockItem)
        useCartStore.getState().removeItem('1')
        expect(useCartStore.getState().items).toHaveLength(0)
    })

    it('should clear the cart', () => {
        useCartStore.getState().addItem(mockItem)
        useCartStore.getState().addItem(mockItem2)
        useCartStore.getState().clearCart()
        expect(useCartStore.getState().items).toHaveLength(0)
    })

    it('should calculate total price correctly', () => {
        useCartStore.getState().addItem(mockItem)
        useCartStore.getState().addItem(mockItem2)
        const total = useCartStore.getState().items.reduce((acc, item) => acc + item.price, 0)
        expect(total).toBe(1898)
    })
})
