'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the HomebuilderAI splash page
const HomebuilderSplashPage = dynamic(
  () => import('../../../homebuilder-source/components/splash-page'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Loading HomebuilderAI</h2>
          <p className="text-gray-600">Preparing your AI-powered home building experience...</p>
        </div>
      </div>
    )
  }
)

export default function HomebuilderAISubdomain() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set the document title for HomebuilderAI
    document.title = 'HomebuilderAI Interactive - Proof of Concept'

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-powered home building and design dashboard featuring Aiglish, AI Frames, and AI Sales Flow')
    }
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-pulse w-16 h-16 bg-blue-200 rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">HomebuilderAI</h2>
          <p className="text-gray-600">Initializing...</p>
        </div>
      </div>
    )
  }

  // Load the HomebuilderAI splash page - the catch-all route will handle dashboard routes
  return <HomebuilderSplashPage onEnter={() => {
    // Redirect to the dashboard route which will be handled by the catch-all
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard'
    }
  }} />
}