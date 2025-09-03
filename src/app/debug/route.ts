import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
  try {
    const projectRoot = process.cwd()
    const appDir = path.join(projectRoot, 'src', 'app')
    
    // Get all directories and files in src/app
    const entries = await fs.readdir(appDir, { withFileTypes: true })
    
    const routes = []
    const files = []
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const hasPageFile = await fs.access(path.join(appDir, entry.name, 'page.tsx')).then(() => true).catch(() => false)
        const hasRouteFile = await fs.access(path.join(appDir, entry.name, 'route.ts')).then(() => true).catch(() => false)
        
        routes.push({
          name: entry.name,
          type: entry.name.startsWith('[') ? 'dynamic' : 'static',
          hasPage: hasPageFile,
          hasRoute: hasRouteFile,
          url: `/${entry.name}`
        })
      } else {
        files.push(entry.name)
      }
    }
    
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      routes: routes.sort((a, b) => a.name.localeCompare(b.name)),
      rootFiles: files,
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        VERCEL: process.env.VERCEL,
        isDevelopment: process.env.NODE_ENV === 'development' || process.env.VERCEL !== '1'
      },
      tips: [
        'Static routes like /templates should have their own page.tsx file',
        'Dynamic routes like [slug] should not intercept static routes',
        'Check that templates/page.tsx exists and is properly formatted',
        'Verify build output includes all expected routes'
      ]
    })
    
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to debug routes',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}