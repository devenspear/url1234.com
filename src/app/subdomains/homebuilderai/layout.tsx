import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomebuilderAI Interactive - Proof of Concept',
  description: 'AI-powered home building and design dashboard featuring Aiglish, AI Frames, and AI Sales Flow',
  keywords: ['HomebuilderAI', 'AI', 'home building', 'construction', 'design', 'Myers Barnes'],
  authors: [{ name: 'Myers Barnes Associates, Inc.' }],
  robots: 'index, follow',
  openGraph: {
    title: 'HomebuilderAI Interactive',
    description: 'Experience the future of home building with AI-powered tools and interactive sales systems',
    type: 'website',
    url: 'https://homebuilderai.url1234.com',
  },
}

export const viewport = 'width=device-width, initial-scale=1'

export default function HomebuilderAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}