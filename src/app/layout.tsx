import { ReactNode } from 'react'
import './global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
