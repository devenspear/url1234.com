import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomebuilderAI Dashboard - Interactive Demo',
  description: 'Your complete AI-powered home building and design dashboard',
  keywords: ['HomebuilderAI', 'dashboard', 'AI tools', 'home construction', 'design assistant'],
}

export default function HomebuilderAIDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}