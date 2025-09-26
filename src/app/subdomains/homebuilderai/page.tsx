'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Temporary simplified HomebuilderAI page - will be replaced with full integration
function SimpleHomebuilderAI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl text-white">🏗️</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          HomebuilderAI Interactive
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          AI-powered home building and design dashboard featuring Aiglish, AI Frames, and AI Sales Flow
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Application Integration</h3>
          <p className="text-gray-600 mb-6">
            The full HomebuilderAI application from localhost:3002 is being integrated into this subdomain.
            This will include all modules, navigation, and functionality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-blue-50 rounded-lg">📚 Glossary Lab</div>
            <div className="p-3 bg-green-50 rounded-lg">✉️ Drips Generator</div>
            <div className="p-3 bg-orange-50 rounded-lg">🎯 Simulator</div>
            <div className="p-3 bg-red-50 rounded-lg">🔍 AI Audit</div>
            <div className="p-3 bg-yellow-50 rounded-lg">⚖️ Lead Scoring</div>
            <div className="p-3 bg-indigo-50 rounded-lg">🏗️ Frame Builder</div>
            <div className="p-3 bg-pink-50 rounded-lg">🤖 MarvelBot</div>
            <div className="p-3 bg-teal-50 rounded-lg">📋 Playbooks</div>
          </div>
        </div>
        <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Integration In Progress
        </button>
      </div>
    </div>
  )
}

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

  // Load the simplified HomebuilderAI application (temporary)
  return <SimpleHomebuilderAI />
}