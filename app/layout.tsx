import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const inter = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Icham M\'MADI',
  description: 'Icham M\'MADI\'s very cool portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
      rel='favicon'
      href='/favicon.ico'
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
