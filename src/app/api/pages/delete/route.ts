import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

interface PageEntry {
  id: string
  name: string
  url: string
  template: string
  createdAt: string
  lastModified: string
  configuration: Record<string, unknown>
}

interface Manifest {
  pages: PageEntry[]
  lastUpdated: string
}

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

    const projectRoot = process.cwd()
    const manifestPath = path.join(projectRoot, 'public', 'pages-manifest.json')
    
    // Read current manifest
    let manifest: Manifest = { pages: [], lastUpdated: new Date().toISOString() }
    
    try {
      const manifestContent = await fs.readFile(manifestPath, 'utf-8')
      manifest = JSON.parse(manifestContent)
    } catch (error) {
      console.warn('Could not read manifest:', error)
      return NextResponse.json({
        error: 'Could not read pages manifest'
      }, { status: 500 })
    }
    
    // Check if page exists in manifest
    const pageIndex = manifest.pages.findIndex(p => p.id === pageName)
    if (pageIndex === -1) {
      return NextResponse.json(
        { error: 'Page not found in manifest' },
        { status: 404 }
      )
    }
    
    // Remove the page from manifest
    manifest.pages.splice(pageIndex, 1)
    manifest.lastUpdated = new Date().toISOString()
    
    // Write updated manifest back
    try {
      await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2))
    } catch (error) {
      console.error('Failed to update manifest:', error)
      return NextResponse.json({
        error: 'Failed to update pages manifest'
      }, { status: 500 })
    }

    // In development, also try to delete the actual files
    const isDevelopment = process.env.NODE_ENV === 'development'
    let fileDeleted = false
    
    if (isDevelopment) {
      try {
        const pageDir = path.join(projectRoot, 'src', 'app', 'p', pageName)
        await fs.access(pageDir)
        await fs.rm(pageDir, { recursive: true, force: true })
        fileDeleted = true
        console.log(`🗂️ Deleted page directory: ${pageDir}`)
        
        // Auto-commit the changes
        try {
          await execAsync(`cd "${projectRoot}" && git add -A`)
          await execAsync(`cd "${projectRoot}" && git commit -m "Delete page: ${pageName}"`)
          console.log(`📝 Committed deletion of ${pageName}`)
        } catch (gitError) {
          console.warn('Git commit failed (non-fatal):', gitError)
        }
      } catch (fileError) {
        console.warn(`Could not delete page files (non-fatal):`, fileError)
        // Continue - manifest update is more important
      }
    }

    return NextResponse.json({
      success: true,
      message: fileDeleted 
        ? `Page ${pageName} deleted successfully`
        : `Page ${pageName} removed from tracking${isDevelopment ? '' : ' (files remain on server)'}`,
      pageName,
      fileDeleted,
      manifestUpdated: true
    })
    
  } catch (error) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      { 
        error: 'Failed to delete page', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}