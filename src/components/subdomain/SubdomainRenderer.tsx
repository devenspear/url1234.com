'use client'

import dynamic from 'next/dynamic'
import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

// Dynamically import specialized components
const KaleidoscopeHero = dynamic(() => import('@/components/kaleidoscope/Hero/KaleidoscopeHero'), { ssr: false })
const BookReader = dynamic(() => import('@/components/BookReader'), { ssr: false })

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

interface SubdomainRendererProps {
  config: SubdomainConfig
}

export function SubdomainRenderer({ config }: SubdomainRendererProps) {
  const { templateId, configuration } = config

  // Apply custom CSS if provided
  if (configuration.customCSS) {
    const styleElement = document.createElement('style')
    styleElement.textContent = configuration.customCSS
    document.head.appendChild(styleElement)
  }

  // Apply custom JS if provided (be careful with this in production)
  if (configuration.customJS) {
    try {
      const scriptElement = document.createElement('script')
      scriptElement.textContent = configuration.customJS
      document.head.appendChild(scriptElement)
    } catch (error) {
      console.warn('Custom JavaScript could not be executed:', error)
    }
  }

  const defaultFeatures = [
    { title: 'Feature 1', description: 'Amazing feature description' },
    { title: 'Feature 2', description: 'Another great feature' },
    { title: 'Feature 3', description: 'Third awesome feature' }
  ]

  const defaultTestimonials = [
    { name: 'John Doe', content: 'Great product!', role: 'Customer', rating: 5 },
    { name: 'Jane Smith', content: 'Highly recommended!', role: 'User', rating: 5 }
  ]

  // Apply theme class to html element
  if (typeof document !== 'undefined') {
    if (configuration.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Render based on template type
  switch (templateId) {
    case 'kaleidoscope-recovery':
      return renderKaleidoscopeTemplate(configuration)

    case 'book-reader':
      return <BookReader />

    case 'simple-landing':
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

    case 'complex-landing':
      return (
        <LandingPageTemplate>
          <HeroSection
            title={configuration.title || 'Advanced Solution'}
            subtitle={configuration.subtitle || 'Comprehensive features'}
            description={configuration.description || 'Everything you need in one place'}
            primaryCTA={{
              text: 'Get Started',
              onClick: () => console.log('Primary CTA clicked')
            }}
            secondaryCTA={{
              text: 'Watch Demo',
              onClick: () => console.log('Secondary CTA clicked')
            }}
            height="full"
            alignment="center"
          />
          <FeaturesSection
            title="Advanced Features"
            subtitle="Everything you need"
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
            title="Ready for Advanced Features?"
            description="Join thousands of satisfied customers"
            primaryCTA={{
              text: 'Get Started',
              onClick: () => console.log('CTA clicked')
            }}
            variant="gradient"
          />
          <FooterSection
            companyName={configuration.companyName || 'Your Company'}
            tagline="Advanced solutions"
            backgroundColor="dark"
          />
        </LandingPageTemplate>
      )

    case 'hero-landing':
    default:
      return (
        <LandingPageTemplate>
          <HeroSection
            title={configuration.title || 'Welcome'}
            subtitle={configuration.subtitle || ''}
            description={configuration.description || 'Your success starts here'}
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
}

function renderKaleidoscopeTemplate(configuration: {title?: string; subtitle?: string; description?: string}) {
  return (
    <div className="overflow-x-hidden">
      <section id="hero" className="w-full aspect-video relative">
        <KaleidoscopeHero
          title={configuration.title || "kaleidoscope"}
          subtitle={configuration.subtitle || "A radical recovery solution for those ready to be free from drinking and the pain beneath it"}
          showControls={false}
        />
      </section>

      {/* For now, we'll use a simplified version. In a full implementation,
          you'd import and render all the kaleidoscope sections */}
      <main className="w-full">
        <div className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {configuration.title || "Kaleidoscope Recovery"}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {configuration.description || "A comprehensive approach to recovery and healing"}
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}