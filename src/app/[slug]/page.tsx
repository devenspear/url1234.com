'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

interface PageData {
  templateId: string
  pageName: string
  configuration: {
    title?: string
    subtitle?: string
    description?: string
    companyName?: string
    features?: Array<{title: string; description: string}>
    testimonials?: Array<{name: string; content: string; role: string; rating: number}>
  }
  createdAt: string
  lastModified: string
}

export default function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const [pageData, setPageData] = useState<PageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFoundPage, setNotFoundPage] = useState(false)
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug)
    })
  }, [params])

  useEffect(() => {
    if (!slug) return
    
    // Check if this page exists
    // First check if we have the full page configuration
    const pageConfigs = localStorage.getItem('pageConfigurations')
    if (pageConfigs) {
      const configs = JSON.parse(pageConfigs)
      const config = configs[slug]
      if (config) {
        setPageData(config)
        setLoading(false)
        return
      }
    }

    // Fallback: check if page exists in deployed pages list
    const savedPages = localStorage.getItem('deployedPages')
    if (savedPages) {
      const pages = JSON.parse(savedPages)
      const page = pages.find((p: {name: string; template: string; createdAt: string}) => p.name === slug)
      if (page) {
        // Create fallback page data
        setPageData({
          templateId: 'hero-landing',
          pageName: slug,
          configuration: {
            title: page.template + ' Page',
            subtitle: 'Created with Template Manager',
            description: `A page created using the ${page.template} template`,
            companyName: 'Your Company'
          },
          createdAt: page.createdAt,
          lastModified: page.createdAt
        })
        setLoading(false)
        return
      }
    }

    // If not found anywhere, show 404
    setNotFoundPage(true)
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading page...</p>
        </div>
      </div>
    )
  }

  if (notFoundPage) {
    return notFound()
  }

  if (!pageData) {
    return notFound()
  }

  const { configuration } = pageData
  const defaultFeatures = [
    { title: 'Feature 1', description: 'Amazing feature description' },
    { title: 'Feature 2', description: 'Another great feature' },
    { title: 'Feature 3', description: 'Third awesome feature' }
  ]

  const defaultTestimonials = [
    { name: 'John Doe', content: 'Great product!', role: 'Customer', rating: 5 },
    { name: 'Jane Smith', content: 'Highly recommended!', role: 'User', rating: 5 }
  ]

  // Render based on template type
  if (pageData.templateId === 'simple-landing') {
    return (
      <LandingPageTemplate>
        <HeroSection
          title={configuration.title || 'Simple & Effective'}
          description={configuration.description || 'A minimal approach to maximum impact'}
          primaryCTA={{
            text: 'Get Started',
            onClick: () => console.log('CTA clicked')
          }}
          height="large"
          alignment="center"
        />

        <CTASection
          title="Start Your Journey"
          description="Simple, clean, effective"
          primaryCTA={{
            text: 'Begin Now',
            onClick: () => console.log('CTA clicked')
          }}
          variant="centered"
        />

        <FooterSection
          companyName={configuration.companyName || 'Your Company'}
          backgroundColor="muted"
        />
      </LandingPageTemplate>
    )
  }

  // Default to hero-landing template
  return (
    <LandingPageTemplate>
      <HeroSection
        title={configuration.title || 'Welcome'}
        subtitle={configuration.subtitle || ''}
        description={configuration.description || ''}
        primaryCTA={{
          text: 'Get Started',
          onClick: () => console.log('Primary CTA clicked')
        }}
        secondaryCTA={{
          text: 'Learn More',
          onClick: () => console.log('Secondary CTA clicked')
        }}
        height="full"
        alignment="center"
      />

      <FeaturesSection
        title="Features"
        subtitle="What We Offer"
        features={configuration.features || defaultFeatures}
        columns={3}
        variant="cards"
      />

      <TestimonialsSection
        title="What Our Customers Say"
        testimonials={configuration.testimonials || defaultTestimonials}
        columns={3}
        variant="cards"
      />

      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of satisfied customers today"
        primaryCTA={{
          text: 'Start Now',
          onClick: () => console.log('CTA clicked')
        }}
        variant="gradient"
      />

      <FooterSection
        companyName={configuration.companyName || 'Your Company'}
        tagline="Building the future"
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}