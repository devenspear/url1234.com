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

// GET /api/subdomains/[subdomain] - Get specific subdomain configuration
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ subdomain: string }> }
) {
  try {
    const { subdomain: rawSubdomain } = await params
    const subdomain = rawSubdomain.toLowerCase() // Make subdomain lookup case-insensitive

    // In a real implementation, query your database
    // For now, we'll return mock data for known subdomains
    const mockConfigs: Record<string, SubdomainConfig> = {
      'kaleidoscope': {
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
        createdAt: '2024-01-01T00:00:00Z',
        lastModified: new Date().toISOString()
      },
      'bunny-garden': {
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
        createdAt: '2024-01-01T00:00:00Z',
        lastModified: new Date().toISOString()
      },
      'homebuilderai': {
        subdomain: 'homebuilderai',
        templateId: 'hero-landing',
        configuration: {
          title: 'HomebuilderAI',
          subtitle: 'AI-Powered Home Design & Construction',
          description: 'Revolutionary AI technology for modern home building and design solutions',
          companyName: 'HomebuilderAI',
          theme: 'light',
          features: [
            { title: 'AI Design Assistant', description: 'Generate custom home designs with artificial intelligence' },
            { title: 'Smart Construction Planning', description: 'Optimize building processes with AI-powered scheduling' },
            { title: 'Cost Estimation', description: 'Accurate project costing using machine learning algorithms' },
            { title: '3D Visualization', description: 'Immersive 3D rendering of your future home' },
            { title: 'Sustainability Analysis', description: 'Eco-friendly building recommendations and energy efficiency' },
            { title: 'Permit Assistance', description: 'Streamlined building permit and regulatory compliance' }
          ],
          testimonials: [
            { name: 'Sarah Johnson', content: 'HomebuilderAI transformed our dream home into reality with incredible precision and efficiency.', role: 'Homeowner', rating: 5 },
            { name: 'Mike Chen', content: 'The AI design suggestions saved us months of planning and thousands in architect fees.', role: 'Contractor', rating: 5 },
            { name: 'Lisa Rodriguez', content: 'Outstanding technology that makes home building accessible to everyone.', role: 'Real Estate Developer', rating: 5 }
          ]
        },
        status: 'active',
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      },
      'test-landing': {
        subdomain: 'test-landing',
        templateId: 'hero-landing',
        configuration: {
          title: 'Test Landing Page',
          subtitle: 'This is a test subdomain',
          description: 'Testing the subdomain functionality',
          companyName: 'Test Company',
          theme: 'light'
        },
        status: 'active',
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      }
    }

    const config = mockConfigs[subdomain]
    if (!config) {
      return NextResponse.json(
        { error: 'Subdomain not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(config)

  } catch (error) {
    console.error('Error fetching subdomain config:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subdomain configuration' },
      { status: 500 }
    )
  }
}

// PUT /api/subdomains/[subdomain] - Update subdomain configuration
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ subdomain: string }> }
) {
  try {
    const { subdomain: rawSubdomain } = await params
    const subdomain = rawSubdomain.toLowerCase() // Make subdomain lookup case-insensitive
    const body = await request.json()

    // In a real implementation, update your database
    // For now, we'll return a success response

    const updatedConfig: SubdomainConfig = {
      subdomain,
      templateId: body.templateId,
      configuration: body.configuration,
      status: body.status || 'active',
      createdAt: body.createdAt || new Date().toISOString(),
      lastModified: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      subdomain: updatedConfig
    })

  } catch (error) {
    console.error('Error updating subdomain:', error)
    return NextResponse.json(
      { error: 'Failed to update subdomain' },
      { status: 500 }
    )
  }
}

// DELETE /api/subdomains/[subdomain] - Delete subdomain
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ subdomain: string }> }
) {
  try {
    const { subdomain: rawSubdomain } = await params
    const subdomain = rawSubdomain.toLowerCase() // Make subdomain lookup case-insensitive
    const url = new URL(request.url)
    const vercelToken = url.searchParams.get('vercelToken')

    // In a real implementation, delete from database
    // For now, we'll simulate success

    // Optional: Delete DNS record via Vercel API
    if (vercelToken) {
      try {
        await deleteVercelDNSRecord(subdomain, vercelToken)
      } catch (dnsError) {
        console.warn('Failed to delete DNS record:', dnsError)
        // Continue anyway
      }
    }

    return NextResponse.json({
      success: true,
      message: `Subdomain ${subdomain} has been deleted`
    })

  } catch (error) {
    console.error('Error deleting subdomain:', error)
    return NextResponse.json(
      { error: 'Failed to delete subdomain' },
      { status: 500 }
    )
  }
}

// Helper function to delete Vercel DNS record
async function deleteVercelDNSRecord(subdomain: string, vercelToken: string) {
  // First, get the record ID
  const listResponse = await fetch('https://api.vercel.com/v2/domains/url1234.com/records', {
    headers: {
      'Authorization': `Bearer ${vercelToken}`
    }
  })

  if (!listResponse.ok) {
    throw new Error(`Failed to list DNS records: ${listResponse.statusText}`)
  }

  const records = await listResponse.json()
  const targetRecord = records.find((record: {name: string; id: string}) => record.name === subdomain)

  if (!targetRecord) {
    console.warn(`DNS record for ${subdomain} not found`)
    return
  }

  // Delete the record
  const deleteResponse = await fetch(
    `https://api.vercel.com/v2/domains/url1234.com/records/${targetRecord.id}`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${vercelToken}`
      }
    }
  )

  if (!deleteResponse.ok) {
    throw new Error(`Failed to delete DNS record: ${deleteResponse.statusText}`)
  }

  return await deleteResponse.json()
}