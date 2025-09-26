'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { SubdomainRenderer } from '@/components/subdomain/SubdomainRenderer'

interface NestedPageProps {
  params: Promise<{
    subdomain: string
    path: string[]
  }>
}

export default function SubdomainNestedPage({ params }: NestedPageProps) {
  const [subdomain, setSubdomain] = useState<string>('')
  const [path, setPath] = useState<string[]>([])
  interface SubdomainConfig {
    subdomain: string
    templateId: string
    configuration: Record<string, unknown>
    status: 'active' | 'inactive' | 'maintenance'
    createdAt: string
    lastModified: string
  }

  const [subdomainConfig, setSubdomainConfig] = useState<SubdomainConfig | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    params.then((resolvedParams) => {
      setSubdomain(resolvedParams.subdomain)
      setPath(resolvedParams.path || [])
    })
  }, [params])

  useEffect(() => {
    if (!subdomain) return

    const loadSubdomainConfig = async () => {
      try {
        // Fetch subdomain configuration
        const response = await fetch(`/api/subdomains/${subdomain}`)
        if (response.ok) {
          const config = await response.json()
          setSubdomainConfig(config)
        } else {
          // Fallback to localStorage
          const savedConfigs = localStorage.getItem('subdomainConfigs')
          if (savedConfigs) {
            const configs = JSON.parse(savedConfigs)
            const config = configs[subdomain]
            if (config) {
              setSubdomainConfig(config)
            }
          }
        }
      } catch (error) {
        console.error('Error loading subdomain config:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSubdomainConfig()
  }, [subdomain])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!subdomainConfig) {
    return notFound()
  }

  // Handle different nested paths based on template type
  const currentPath = path.join('/')

  // For kaleidoscope subdomain, handle special paths like /book, /contact, etc.
  if (subdomainConfig.templateId === 'kaleidoscope-recovery') {
    switch (currentPath) {
      case 'book':
        return renderKaleidoscopeBookPage()
      case 'contact':
        return renderKaleidoscopeContactPage()
      case 'about':
        return renderKaleidoscopeAboutPage()
      default:
        // Redirect to main kaleidoscope page or show 404
        return notFound()
    }
  }

  // For book-reader subdomain, handle chapter navigation
  if (subdomainConfig.templateId === 'book-reader') {
    if (path.length > 0) {
      const chapterNumber = parseInt(path[0])
      if (!isNaN(chapterNumber)) {
        return renderBookChapter(chapterNumber)
      }
    }
  }

  // Default: try to render the main subdomain with path context
  return <SubdomainRenderer config={subdomainConfig} />
}

function renderKaleidoscopeBookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            The Kaleidoscope Book
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive guide to recovery and transformation
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page will contain the full book experience when available.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderKaleidoscopeContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Contact Us
          </h1>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderKaleidoscopeAboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            About Kaleidoscope
          </h1>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p>
                Kaleidoscope represents a revolutionary approach to recovery and healing,
                offering comprehensive solutions for those ready to transform their lives.
              </p>
              <p>
                Our methodology combines proven therapeutic techniques with innovative
                approaches to create lasting change and sustainable recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderBookChapter(chapterNumber: number) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Chapter {chapterNumber}
          </h1>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p>
                This is the content for Chapter {chapterNumber}. In a real implementation,
                this would load the actual chapter content from your data source.
              </p>
              <p>
                You could implement navigation, bookmarks, progress tracking, and other
                interactive features here.
              </p>
            </div>
            <div className="flex justify-between mt-8 pt-8 border-t">
              {chapterNumber > 1 && (
                <a
                  href={`/chapter-${chapterNumber - 1}`}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                >
                  ← Previous Chapter
                </a>
              )}
              <a
                href={`/chapter-${chapterNumber + 1}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ml-auto"
              >
                Next Chapter →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}