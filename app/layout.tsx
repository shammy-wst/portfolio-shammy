import type { Metadata } from 'next'
import './globals.css'

interface CustomMetadata extends Metadata {
  icon?: string;
}

export const metadata: CustomMetadata = {
  title: 'Shammyツ',
  description: 'Icham M$apos;MADI website',
  icon: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
          rel="icon"
          href="./favicon.ico"
          type="image/x-icon"
        />
      <body style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {children}
      </body>
    </html>
  )
}
