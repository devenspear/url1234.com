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
  const [showApp, setShowApp] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEnterApp = () => {
    setShowApp(true)
  }

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

  // Show the splash page first, then the app
  if (!showApp) {
    return <HomebuilderSplashPage onEnter={handleEnterApp} />
  }

  // Redirect to the HomebuilderAI dashboard on the subdomain
  if (typeof window !== 'undefined') {
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl text-white">🏗️</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to HomebuilderAI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your AI-powered home design and construction platform
        </p>
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          <span>🚀 Enter Dashboard</span>
        </button>
      </div>
    </div>
  )
}