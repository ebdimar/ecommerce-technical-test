import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { CartProvider } from '@/store/CartContext'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: 'Mobiles Store',
  description: 'E-commerce de móviles',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
