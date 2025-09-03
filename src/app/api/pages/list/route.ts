import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
  try {
    const projectRoot = process.cwd()
    const appDir = path.join(projectRoot, 'src', 'app')
    
    // Read all directories in src/app
    const entries = await fs.readdir(appDir, { withFileTypes: true })
    
    const pages = []
    
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('(')) {
        // Skip special Next.js directories and system directories
        if (['api', 'globals.css', 'layout.tsx', 'page.tsx'].includes(entry.name)) {
          continue
        }
        
        const pageDir = path.join(appDir, entry.name)
        
        try {
          // Check if it has a page.tsx file
          const pageFile = path.join(pageDir, 'page.tsx')
          await fs.access(pageFile)
          
          // Try to read metadata
          let metadata = null
          try {
            const metadataFile = path.join(pageDir, 'metadata.json')
            const metadataContent = await fs.readFile(metadataFile, 'utf-8')
            metadata = JSON.parse(metadataContent)
          } catch {
            // No metadata file, create basic info
            const stats = await fs.stat(pageFile)
            metadata = {
              pageName: entry.name,
              templateId: 'unknown',
              configuration: {},
              createdAt: stats.birthtime.toISOString(),
              lastModified: stats.mtime.toISOString()
            }
          }
          
          pages.push({
            id: entry.name,
            name: entry.name,
            url: `https://url1234.com/${entry.name}`,
            template: metadata.templateId || 'Unknown Template',
            createdAt: metadata.createdAt,
            lastModified: metadata.lastModified,
            status: 'live',
            configuration: metadata.configuration
          })
          
        } catch {
          // No page.tsx file, skip this directory
          continue
        }
      }
    }
    
    return NextResponse.json({
      success: true,
      pages: pages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
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