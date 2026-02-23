'use client'

import { createContext, useContext, useReducer, useEffect } from 'react'
import type { MobileCart } from '@/types'

type CartState = {
  items: MobileCart[]
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: MobileCart }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: MobileCart[] }

type CartContextType = {
  items: MobileCart[]
  addItem: (item: MobileCart) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.some((i) => i.id === action.payload.id)
      if (exists) return state
      return { items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((i) => i.id !== action.payload) }
    case 'CLEAR_CART':
      return { items: [] }
    case 'LOAD_CART':
      return { items: action.payload }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(stored) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
  }, [state.items])

  const addItem = (item: MobileCart) => dispatch({ type: 'ADD_ITEM', payload: item })
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
