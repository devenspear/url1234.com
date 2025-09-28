import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'URL1234 Lab',
  description: 'A curated lab of independent AI-native experiences created by Deven Spear.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
