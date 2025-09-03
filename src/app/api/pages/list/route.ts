import { NextResponse } from 'next/server'

interface PageEntry {
  id: string
  name: string
  url: string
  template: string
  createdAt: string
  lastModified: string
  configuration: Record<string, unknown>
  status?: string
}

interface Manifest {
  pages: PageEntry[]
  lastUpdated: string
}

export async function GET() {
  try {
    // In production, fetch the manifest from the public URL
    // In development, we can also use this approach for consistency
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NODE_ENV === 'production'
      ? 'https://url1234.com'
      : 'http://localhost:3004'
    
    try {
      // Fetch the manifest from the public directory
      const manifestUrl = `${baseUrl}/pages-manifest.json`
      const response = await fetch(manifestUrl, {
        // Add cache control to ensure fresh data
        cache: 'no-store'
      })
      
      if (response.ok) {
        const manifest: Manifest = await response.json()
        
        // Add full URLs to each page
        const pagesWithUrls = manifest.pages.map((page) => ({
          ...page,
          url: `https://url1234.com${page.url}`,
          status: 'live'
        }))
        
        return NextResponse.json({
          success: true,
          pages: pagesWithUrls.sort((a, b) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        })
      }
    } catch (fetchError) {
      console.warn('Failed to fetch manifest:', fetchError)
    }
    
    // Fallback: Return empty array if manifest not found
    return NextResponse.json({
      success: true,
      pages: []
    })
    
  } catch (error) {
    console.error('Error listing pages:', error)
    return NextResponse.json(
      { 
        error: 'Failed to list pages', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}