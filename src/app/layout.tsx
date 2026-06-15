import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Keys & Kites — The Breakthrough B2B Agency',
  description:
    'Keys & Kites is a Chicago B2B launch agency. We help marketers turn new ideas into business value — taking products, services and brands off the page, into the market, and on to success.',
  keywords: [
    'B2B agency',
    'B2B launch agency',
    'B2B marketing',
    'messaging and positioning',
    'Keys and Kites',
    'Chicago marketing agency',
  ],
  openGraph: {
    title: 'Keys & Kites — The Breakthrough B2B Agency',
    description:
      "We launch B2B ideas the market can't ignore. Strategy, creative and execution from Printer's Row, Chicago.",
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
