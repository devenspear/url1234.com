'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { SubdomainRenderer } from '@/components/subdomain/SubdomainRenderer'

interface SubdomainConfig {
  subdomain: string
  templateId: string
  configuration: {
    title?: string
    subtitle?: string
    description?: string
    companyName?: string
    theme?: 'light' | 'dark'
    features?: Array<{title: string; description: string}>
    testimonials?: Array<{name: string; content: string; role: string; rating: number}>
    customCSS?: string
    customJS?: string
  }
  status: 'active' | 'inactive' | 'maintenance'
  createdAt: string
  lastModified: string
}

interface SubdomainPageProps {
  params: Promise<{ subdomain: string }>
}

export default function SubdomainPage({ params }: SubdomainPageProps) {
  const [subdomainConfig, setSubdomainConfig] = useState<SubdomainConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [subdomain, setSubdomain] = useState<string>('')

  useEffect(() => {
    params.then((resolvedParams) => {
      setSubdomain(resolvedParams.subdomain)
    })
  }, [params])

  useEffect(() => {
    if (!subdomain) return

    const loadSubdomainConfig = async () => {
      try {
        // First try to fetch from API
        const response = await fetch(`/api/subdomains/${subdomain}`)
        if (response.ok) {
          const config = await response.json()
          setSubdomainConfig(config)
          setLoading(false)
          return
        }

        // Fallback to localStorage for development/testing
        const savedConfigs = localStorage.getItem('subdomainConfigs')
        if (savedConfigs) {
          const configs = JSON.parse(savedConfigs)
          const config = configs[subdomain]
          if (config) {
            setSubdomainConfig(config)
            setLoading(false)
            return
          }
        }

        // Check if this is a legacy page that needs migration
        await migrateFromLegacyPages()
      } catch (error) {
        console.error('Error loading subdomain config:', error)
        setLoading(false)
      }
    }

    const migrateFromLegacyPages = async () => {
      // Check if subdomain matches any of our legacy pages
      const legacyPages = [
        'kaleidoscope', 'bunny-garden', 'alysbeach', 'doghouse',
        'page-simple', 'page-complex', 'template-example', 'template-home',
        'real-test-page', 'workflow-test'
      ]

      if (legacyPages.includes(subdomain)) {
        // Create a default config for legacy pages
        const defaultConfig: SubdomainConfig = {
          subdomain: subdomain,
          templateId: getTemplateIdForLegacyPage(subdomain),
          configuration: {
            title: formatSubdomainTitle(subdomain),
            subtitle: 'Migrated from legacy page',
            description: `Legacy page migrated to subdomain: ${subdomain}`,
            companyName: 'URL1234',
            theme: 'light'
          },
          status: 'active',
          createdAt: new Date().toISOString(),
          lastModified: new Date().toISOString()
        }

        setSubdomainConfig(defaultConfig)

        // Save the migrated config
        const existingConfigs = JSON.parse(localStorage.getItem('subdomainConfigs') || '{}')
        existingConfigs[subdomain] = defaultConfig
        localStorage.setItem('subdomainConfigs', JSON.stringify(existingConfigs))

        setLoading(false)
        return
      }

      // Subdomain not found
      setLoading(false)
    }

    loadSubdomainConfig()
  }, [subdomain])

  const getTemplateIdForLegacyPage = (subdomain: string): string => {
    const templateMap: Record<string, string> = {
      'kaleidoscope': 'kaleidoscope-recovery',
      'bunny-garden': 'book-reader',
      'page-simple': 'simple-landing',
      'page-complex': 'complex-landing',
      'template-example': 'hero-landing',
      'alysbeach': 'hero-landing',
      'doghouse': 'hero-landing',
      'template-home': 'hero-landing',
      'real-test-page': 'hero-landing',
      'workflow-test': 'hero-landing'
    }
    return templateMap[subdomain] || 'hero-landing'
  }

  const formatSubdomainTitle = (subdomain: string): string => {
    return subdomain
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading {subdomain}</h2>
          <p className="text-gray-600">Preparing your experience...</p>
        </div>
      </div>
    )
  }

  if (!subdomainConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Subdomain Not Found</h1>
          <p className="text-gray-600 mb-6">
            The subdomain <code className="bg-gray-200 px-2 py-1 rounded text-red-600">{subdomain}</code> doesn&apos;t exist or hasn&apos;t been configured yet.
          </p>
          <a
            href="https://url1234.com/templates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Create This Subdomain</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  if (subdomainConfig.status === 'maintenance') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚧</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Under Maintenance</h1>
          <p className="text-gray-600 mb-6">
            This subdomain is currently undergoing maintenance. Please check back soon.
          </p>
        </div>
      </div>
    )
  }

  if (subdomainConfig.status === 'inactive') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">💤</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Subdomain Inactive</h1>
          <p className="text-gray-600 mb-6">
            This subdomain has been deactivated by the administrator.
          </p>
        </div>
      </div>
    )
  }

  return <SubdomainRenderer config={subdomainConfig} />
}