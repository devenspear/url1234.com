import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

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

    // Check if running in development
    const isDevelopment = process.env.NODE_ENV === 'development' || process.env.VERCEL !== '1'
    
    if (!isDevelopment) {
      return NextResponse.json({
        error: 'Page deletion only available in development mode',
        message: 'Please run this locally to delete pages'
      }, { status: 400 })
    }

    const projectRoot = process.cwd()
    const pageDir = path.join(projectRoot, 'src', 'app', pageName)
    
    // Check if the directory exists
    try {
      await fs.access(pageDir)
    } catch {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      )
    }
    
    // Delete the directory and all its contents
    await fs.rmdir(pageDir, { recursive: true })
    
    // Auto-commit and push the deletion
    try {
      // Add the deletion to git
      await execAsync(`cd "${projectRoot}" && git add -A`)
      
      // Commit with a descriptive message
      const commitMessage = `Deleted page: ${pageName}`
      await execAsync(`cd "${projectRoot}" && git commit -m "${commitMessage}"`)
      
      // Push to GitHub
      await execAsync(`cd "${projectRoot}" && git push`)
      
      console.log(`✅ Successfully deleted page: ${pageName}`)
      
    } catch (gitError) {
      console.warn('Git operation failed:', gitError)
      // Don't fail the API call - the page was deleted successfully
    }

    return NextResponse.json({
      success: true,
      message: `Page ${pageName} deleted successfully`,
      pageName
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