import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

// GET - List all deployed pages
export async function GET() {
  try {
    const appDir = path.join(process.cwd(), 'src', 'app')
    const entries = await fs.readdir(appDir, { withFileTypes: true })
    
    const pages = await Promise.all(
      entries
        .filter(entry => entry.isDirectory() && !entry.name.startsWith('_') && !['api', 'globals.css', 'layout.tsx', 'favicon.ico'].includes(entry.name))
        .map(async (dir) => {
          const metadataPath = path.join(appDir, dir.name, 'metadata.json')
          
          try {
            const metadataContent = await fs.readFile(metadataPath, 'utf-8')
            const metadata = JSON.parse(metadataContent)
            
            return {
              id: dir.name,
              name: metadata.pageName || dir.name,
              url: `/${dir.name}`,
              template: metadata.templateId || 'unknown',
              createdAt: metadata.createdAt || new Date().toISOString(),
              lastModified: metadata.lastModified || new Date().toISOString(),
              status: 'live'
            }
          } catch (error) {
            // If metadata.json doesn't exist, return basic info
            const stat = await fs.stat(path.join(appDir, dir.name))
            return {
              id: dir.name,
              name: dir.name,
              url: `/${dir.name}`,
              template: 'legacy',
              createdAt: stat.birthtime.toISOString(),
              lastModified: stat.mtime.toISOString(),
              status: 'live'
            }
          }
        })
    )

    return NextResponse.json(pages)
  } catch (error) {
    console.error('Error listing pages:', error)
    return NextResponse.json(
      { error: 'Failed to list pages' },
      { status: 500 }
    )
  }
}

// DELETE - Delete a page
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pageName = searchParams.get('page')
    
    if (!pageName) {
      return NextResponse.json(
        { error: 'Page name is required' },
        { status: 400 }
      )
    }

    const pageDir = path.join(process.cwd(), 'src', 'app', pageName)
    
    // Check if directory exists
    try {
      await fs.access(pageDir)
    } catch {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      )
    }

    // Remove the directory and all its contents
    await fs.rmdir(pageDir, { recursive: true })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      { error: 'Failed to delete page' },
      { status: 500 }
    )
  }
}