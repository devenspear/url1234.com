import { NextRequest, NextResponse } from 'next/server'

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

// GET /api/subdomains - List all subdomains
export async function GET() {
  try {
    // In a real implementation, this would query your database
    // For now, we'll use a mock response with some example data

    const mockSubdomains: SubdomainConfig[] = [
      {
        subdomain: 'kaleidoscope',
        templateId: 'kaleidoscope-recovery',
        configuration: {
          title: 'Kaleidoscope',
          subtitle: 'A radical recovery solution',
          description: 'For those ready to be free from drinking and the pain beneath it',
          companyName: 'Kaleidoscope Recovery',
          theme: 'light'
        },
        status: 'active',
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      },
      {
        subdomain: 'bunny-garden',
        templateId: 'book-reader',
        configuration: {
          title: 'Bunny Garden',
          subtitle: 'Interactive Reading Experience',
          description: 'A beautiful way to read and explore stories',
          companyName: 'Bunny Garden',
          theme: 'light'
        },
        status: 'active',
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      },
      {
        subdomain: 'homebuilderai',
        templateId: 'hero-landing',
        configuration: {
          title: 'HomebuilderAI',
          subtitle: 'AI-Powered Home Design & Construction',
          description: 'Revolutionary AI technology for modern home building and design solutions',
          companyName: 'HomebuilderAI',
          theme: 'light'
        },
        status: 'active',
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      }
    ]

    return NextResponse.json(mockSubdomains)
  } catch (error) {
    console.error('Error fetching subdomains:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subdomains' },
      { status: 500 }
    )
  }
}

// POST /api/subdomains - Create a new subdomain
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      subdomain: rawSubdomain,
      templateId,
      configuration = {},
      vercelToken // Optional: for automatic DNS management
    } = body

    // Convert subdomain to lowercase for consistency
    const subdomain = rawSubdomain?.toLowerCase()

    // Validate required fields
    if (!subdomain || !templateId) {
      return NextResponse.json(
        { error: 'Subdomain and templateId are required' },
        { status: 400 }
      )
    }

    // Validate subdomain format
    const subdomainRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
    if (!subdomainRegex.test(subdomain)) {
      return NextResponse.json(
        { error: 'Invalid subdomain format. Use only lowercase letters, numbers, and hyphens.' },
        { status: 400 }
      )
    }

    // Check if subdomain already exists (in a real app, query your database)
    const existingSubdomains = ['www', 'api', 'admin', 'mail', 'ftp', 'blog']
    if (existingSubdomains.includes(subdomain)) {
      return NextResponse.json(
        { error: 'Subdomain already exists or is reserved' },
        { status: 409 }
      )
    }

    const newSubdomainConfig: SubdomainConfig = {
      subdomain,
      templateId,
      configuration: {
        title: configuration.title || formatSubdomainTitle(subdomain),
        subtitle: configuration.subtitle || '',
        description: configuration.description || '',
        companyName: configuration.companyName || 'Your Company',
        theme: configuration.theme || 'light',
        ...configuration
      },
      status: 'active',
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    }

    // In a real implementation, save to database
    // For now, we'll return success

    // Optional: Create DNS record via Vercel API
    if (vercelToken) {
      try {
        await createVercelDNSRecord(subdomain, vercelToken)
      } catch (dnsError) {
        console.warn('Failed to create DNS record:', dnsError)
        // Continue anyway, as the subdomain might work without explicit DNS
      }
    }

    return NextResponse.json({
      success: true,
      subdomain: newSubdomainConfig,
      url: `https://${subdomain}.url1234.com`
    })

  } catch (error) {
    console.error('Error creating subdomain:', error)
    return NextResponse.json(
      { error: 'Failed to create subdomain' },
      { status: 500 }
    )
  }
}

// Helper function to create Vercel DNS record
async function createVercelDNSRecord(subdomain: string, vercelToken: string) {
  const response = await fetch('https://api.vercel.com/v2/domains/url1234.com/records', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${vercelToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'CNAME',
      name: subdomain,
      value: 'url1234.com'
    })
  })

  if (!response.ok) {
    throw new Error(`Vercel API error: ${response.statusText}`)
  }

  return await response.json()
}

function formatSubdomainTitle(subdomain: string): string {
  return subdomain
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}