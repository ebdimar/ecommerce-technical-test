import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { MobileCart } from '@/types/index'

type CartStore = {
    items: MobileCart[]
    addItem: (item: MobileCart) => void
    removeItem: (id: string) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => {
                const exists = get().items.some((i) => i.id === item.id)
                if (exists) return
                set((state) => ({
                    items: [...state.items, item],
                }))
            },

            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                }))
            },

            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
        }
    )
)
