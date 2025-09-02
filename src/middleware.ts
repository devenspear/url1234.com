import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Rate limiting for template creation
  if (request.nextUrl.pathname.startsWith('/api/templates/create')) {
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // In production, implement proper rate limiting with Redis or similar
    console.log(`Template creation request from ${clientIp} - ${userAgent}`)
  }

  // Admin route protection (when auth is implemented)
  if (request.nextUrl.pathname.startsWith('/templates')) {
    // For now, allow all access
    // In production, check authentication here
    return NextResponse.next()
  }
  
  // Redirect old uppercase Templates to lowercase
  if (request.nextUrl.pathname.startsWith('/Templates')) {
    return NextResponse.redirect(new URL('/templates', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/templates/:path*',
    '/Templates/:path*',
    '/api/templates/:path*',
    '/api/pages/:path*'
  ]
}