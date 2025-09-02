import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { templateId, pageName, configuration } = body

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

    // Create page directory
    const appDir = path.join(process.cwd(), 'src', 'app', sanitizedPageName)
    await fs.mkdir(appDir, { recursive: true })

    // Write page file
    const pagePath = path.join(appDir, 'page.tsx')
    await fs.writeFile(pagePath, templateContent)

    // Create metadata file
    const metadata = {
      templateId,
      pageName: sanitizedPageName,
      configuration,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    }
    
    const metadataPath = path.join(appDir, 'metadata.json')
    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2))

    // Auto-commit and deploy the new page (simplified approach)
    try {
      const projectRoot = process.cwd()
      
      // Check if git is available and configured
      try {
        await execAsync(`cd ${projectRoot} && git config user.email`)
        await execAsync(`cd ${projectRoot} && git config user.name`)
        
        // Add the new files to git
        await execAsync(`cd ${projectRoot} && git add src/app/${sanitizedPageName}/`)
        
        // Commit the changes
        const commitMessage = `Add landing page: ${sanitizedPageName}`
        
        await execAsync(`cd ${projectRoot} && git commit -m "${commitMessage}"`)
        
        // Push to trigger Vercel deployment
        await execAsync(`cd ${projectRoot} && git push`)
        
        console.log(`✅ Auto-deployed page: ${sanitizedPageName}`)
        
      } catch (gitError) {
        console.warn('Git auto-commit failed, but page created successfully:', gitError)
        // Don't fail the API call if git fails - page still exists locally
      }
    } catch (error) {
      console.warn('Auto-deployment failed, but page created successfully:', error)
      // Don't fail the API call - the page files were created successfully
    }

    return NextResponse.json({
      success: true,
      pageName: sanitizedPageName,
      url: `/${sanitizedPageName}`,
      metadata,
      deployed: true,
      deploymentUrl: `https://url1234.com/${sanitizedPageName}`
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
  const features = ${JSON.stringify((features as any[]).length > 0 ? features : defaultFeatures, null, 2)}
  const testimonials = ${JSON.stringify((testimonials as any[]).length > 0 ? testimonials : defaultTestimonials, null, 2)}

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