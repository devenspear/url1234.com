import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// GET - List all deployed pages
export async function GET() {
  try {
    const appDir = path.join(process.cwd(), 'src', 'app')
    const entries = await fs.readdir(appDir, { withFileTypes: true })
    
    // Get root-level pages (excluding /p directory)
    const rootPages = await Promise.all(
      entries
        .filter(entry => entry.isDirectory() && !entry.name.startsWith('_') && !['api', 'templates', 'p', 'globals.css', 'layout.tsx', 'favicon.ico'].includes(entry.name))
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
          } catch {
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

    // Get pages from /p directory
    let pPages: Array<{
      id: string
      name: string
      url: string
      template: string
      createdAt: string
      lastModified: string
      status: string
    }> = []
    try {
      const pDir = path.join(appDir, 'p')
      const pEntries = await fs.readdir(pDir, { withFileTypes: true })
      
      pPages = await Promise.all(
        pEntries
          .filter(entry => entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('_'))
          .map(async (dir) => {
            const metadataPath = path.join(pDir, dir.name, 'metadata.json')
            
            try {
              const metadataContent = await fs.readFile(metadataPath, 'utf-8')
              const metadata = JSON.parse(metadataContent)
              
              return {
                id: `p-${dir.name}`,
                name: metadata.pageName || dir.name,
                url: `/p/${dir.name}`,
                template: metadata.templateId || 'unknown',
                createdAt: metadata.createdAt || new Date().toISOString(),
                lastModified: metadata.lastModified || new Date().toISOString(),
                status: 'live'
              }
            } catch {
              // If metadata.json doesn't exist, return basic info
              const stat = await fs.stat(path.join(pDir, dir.name))
              return {
                id: `p-${dir.name}`,
                name: dir.name,
                url: `/p/${dir.name}`,
                template: 'legacy',
                createdAt: stat.birthtime.toISOString(),
                lastModified: stat.mtime.toISOString(),
                status: 'live'
              }
            }
          })
      )
    } catch {
      // If /p directory doesn't exist, just continue with empty array
    }

    const pages = [...rootPages, ...pPages]

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

    // Auto-commit and deploy the deletion
    try {
      const projectRoot = process.cwd()
      
      // Add the deletion to git
      await execAsync(`cd ${projectRoot} && git add -A`)
      
      // Commit the deletion
      const commitMessage = `Delete landing page: ${pageName}

Removed via Template Manager

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>`
      
      await execAsync(`cd ${projectRoot} && git commit -m "${commitMessage.replace(/"/g, '\\"')}"`)
      
      // Push to trigger Vercel deployment
      await execAsync(`cd ${projectRoot} && git push`)
      
      console.log(`✅ Auto-deployed deletion of page: ${pageName}`)
      
    } catch (gitError) {
      console.warn('Git auto-commit failed:', gitError)
      // Don't fail the API call if git fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      { error: 'Failed to delete page' },
      { status: 500 }
    )
  }
}