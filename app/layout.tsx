import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Pricewise',
  description: 'Trackea precios de  productos de manera eficiente y ahorra dinero en tus compras online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
        <Navbar />
        {children}
        </main>
        </body>
    </html>
  )
}
