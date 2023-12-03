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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add other meta tags, stylesheets, etc. here */}
      </head>
      <body style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {children}
      </body>
    </html>
  )
}
