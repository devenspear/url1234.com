import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomebuilderAI Interactive - Complete Application',
  description: 'Full HomebuilderAI application hosted on url1234.com subdomain',
}

export default function HomebuilderAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="homebuilder-ai-app">
      {children}
    </div>
  )
}