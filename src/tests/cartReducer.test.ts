import { cartReducer } from '@/store/CartContext'
import type { MobileCart } from '@/types'

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

describe('cartReducer', () => {
    it('should add an item to the cart', () => {
        const state = cartReducer({ items: [] }, { type: 'ADD_ITEM', payload: mockItem })
        expect(state.items).toHaveLength(1)
        expect(state.items[0]).toEqual(mockItem)
    })

    it('should not add a duplicate item', () => {
        const state = cartReducer({ items: [mockItem] }, { type: 'ADD_ITEM', payload: mockItem })
        expect(state.items).toHaveLength(1)
    })

    it('should remove an item from the cart', () => {
        const state = cartReducer({ items: [mockItem] }, { type: 'REMOVE_ITEM', payload: '1' })
        expect(state.items).toHaveLength(0)
    })

    it('should clear the cart', () => {
        const state = cartReducer({ items: [mockItem, mockItem2] }, { type: 'CLEAR_CART' })
        expect(state.items).toHaveLength(0)
    })

    it('should load cart from localStorage', () => {
        const state = cartReducer({ items: [] }, { type: 'LOAD_CART', payload: [mockItem, mockItem2] })
        expect(state.items).toHaveLength(2)
    })

    it('should calculate total price correctly', () => {
        const state = cartReducer({ items: [mockItem] }, { type: 'ADD_ITEM', payload: mockItem2 })
        const total = state.items.reduce((acc, item) => acc + item.price, 0)
        expect(total).toBe(1898)
    })
})
