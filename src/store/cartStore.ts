import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { MobileCart } from '@/types/index'

type CartStore = {
    items: MobileCart[]
    addItem: (item: MobileCart) => void
    removeItem: (id: string) => void
    clearCart: () => void
    totalItems: number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,

            addItem: (item) => {
                const exists = get().items.some((i) => i.id === item.id)
                if (exists) return
                set((state) => ({
                    items: [...state.items, item],
                    totalItems: state.totalItems + 1,
                }))
            },

            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                    totalItems: state.totalItems - 1,
                }))
            },

            clearCart: () => set({ items: [], totalItems: 0 }),
        }),
        {
            name: 'cart-storage',
        }
    )
)
