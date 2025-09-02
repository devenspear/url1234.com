import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  let templateId = ''
  let pageName = ''
  
  try {
    const body = await request.json()
    const parsed = body as { templateId: string; pageName: string; configuration: Record<string, unknown> }
    templateId = parsed.templateId
    pageName = parsed.pageName
    const configuration = parsed.configuration

    // Validate input
    if (!templateId || !pageName) {
      return NextResponse.json(
        { error: 'Template ID and page name are required' },
        { status: 400 }
      )
    }

    // Sanitize page name
    const sanitizedPageName = pageName.toLowerCase().replace(/[^a-z0-9-]/g, '')

    // Get template content
    const templateContent = await getTemplateContent(templateId, configuration)

    // For serverless environment, we'll simulate page creation
    // In production, this would integrate with a database or external API
    const metadata = {
      templateId,
      pageName: sanitizedPageName,
      configuration,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      content: templateContent
    }

    // Simulate successful deployment
    console.log(`✅ Page created successfully: ${sanitizedPageName}`)

    return NextResponse.json({
      success: true,
      pageName: sanitizedPageName,
      url: `/${sanitizedPageName}`,
      metadata,
      deployed: true,
      deploymentUrl: `https://url1234.com/${sanitizedPageName}`,
      message: 'Page created successfully',
      pageData: {
        templateId,
        pageName: sanitizedPageName,
        configuration,
        createdAt: metadata.createdAt,
        lastModified: metadata.lastModified
      }
    })
  } catch (error) {
    console.error('Error creating page:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      templateId,
      pageName
    })
    return NextResponse.json(
      { 
        error: 'Failed to create page', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

async function getTemplateContent(templateId: string, configuration: Record<string, unknown>): Promise<string> {
  const { 
    title = 'Welcome', 
    subtitle = 'Professional Template', 
    description = 'Created with Template Manager', 
    features = [], 
    testimonials = [], 
    companyName = 'Your Company' 
  } = configuration

  const defaultFeatures = [
    { title: 'Feature 1', description: 'Amazing feature description' },
    { title: 'Feature 2', description: 'Another great feature' },
    { title: 'Feature 3', description: 'Third awesome feature' }
  ]

  const defaultTestimonials = [
    { name: 'John Doe', content: 'Great product!', role: 'Customer', rating: 5 },
    { name: 'Jane Smith', content: 'Highly recommended!', role: 'User', rating: 5 }
  ]

  const templates: Record<string, string> = {
    'hero-landing': `'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

export default function Page() {
  const features = ${JSON.stringify(Array.isArray(features) && features.length > 0 ? features : defaultFeatures, null, 2)}
  const testimonials = ${JSON.stringify(Array.isArray(testimonials) && testimonials.length > 0 ? testimonials : defaultTestimonials, null, 2)}

  return (
    <LandingPageTemplate>
      <HeroSection
        title="${title || 'Welcome'}"
        subtitle="${subtitle || ''}"
        description="${description || ''}"
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
        features={features}
        columns={3}
        variant="cards"
      />

      <TestimonialsSection
        title="What Our Customers Say"
        testimonials={testimonials}
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
        companyName="${companyName || 'Your Company'}"
        tagline="Building the future"
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}`,

    'simple-landing': `'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

export default function Page() {
  return (
    <LandingPageTemplate>
      <HeroSection
        title="${title || 'Simple & Effective'}"
        description="${description || 'A minimal approach to maximum impact'}"
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
        companyName="${companyName || 'Your Company'}"
        backgroundColor="muted"
      />
    </LandingPageTemplate>
  )
}`,

    'saas-product': `'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

export default function Page() {
  const features = [
    {
      title: 'Cloud-Based',
      description: 'Access your data from anywhere, anytime'
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security for your peace of mind'
    },
    {
      title: 'Scalable',
      description: 'Grows with your business needs'
    },
    {
      title: 'Integration',
      description: 'Connects with your existing tools'
    }
  ]

  return (
    <LandingPageTemplate>
      <HeroSection
        title="${title || 'Modern SaaS Solution'}"
        subtitle="ENTERPRISE READY"
        description="${description || 'Streamline your workflow with our powerful platform'}"
        primaryCTA={{
          text: 'Start Free Trial',
          onClick: () => console.log('Trial started')
        }}
        secondaryCTA={{
          text: 'Book Demo',
          onClick: () => console.log('Demo booked')
        }}
        height="full"
        alignment="center"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
        overlay={true}
      />

      <FeaturesSection
        title="Why Choose Our Platform?"
        subtitle="BUILT FOR MODERN TEAMS"
        features={features}
        columns={4}
        variant="cards"
      />

      <CTASection
        title="Start Your 14-Day Free Trial"
        description="No credit card required. Cancel anytime."
        primaryCTA={{
          text: 'Get Started Now',
          onClick: () => console.log('Started')
        }}
        variant="gradient"
      />

      <FooterSection
        companyName="${companyName || 'SaaS Company'}"
        tagline="Empowering teams worldwide"
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}`
  }

  return templates[templateId] || templates['hero-landing']
}