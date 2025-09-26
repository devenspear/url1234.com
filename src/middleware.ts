import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Extract subdomain from hostname
  const subdomain = getSubdomain(hostname)

  console.log(`Request to: ${hostname}, subdomain: ${subdomain}, path: ${url.pathname}`)

  // Handle subdomain routing
  if (subdomain && subdomain !== 'www') {
    // Check if the original subdomain had uppercase letters and redirect to lowercase
    const originalSubdomain = hostname.split(':')[0].split('.')[0]
    if (originalSubdomain !== originalSubdomain.toLowerCase()) {
      const newHostname = hostname.replace(originalSubdomain, originalSubdomain.toLowerCase())
      const redirectUrl = new URL(request.url)
      redirectUrl.hostname = newHostname
      return NextResponse.redirect(redirectUrl, 301) // Permanent redirect
    }

    // Allow static assets to be served from subdomains
    if (url.pathname.startsWith('/Images/') ||
        url.pathname.startsWith('/images/') ||
        url.pathname.startsWith('/_next/') ||
        url.pathname.startsWith('/favicon.ico')) {
      return NextResponse.next()
    }

    // API routes should be accessible from subdomains
    if (url.pathname.startsWith('/api/')) {
      return NextResponse.next()
    }

    // Rewrite subdomain.url1234.com/* to /subdomains/[subdomain]/*
    url.pathname = `/subdomains/${subdomain}${url.pathname}`

    // Add subdomain as header for use in components
    const response = NextResponse.rewrite(url)
    response.headers.set('x-subdomain', subdomain)
    return response
  }

  // Handle main domain (url1234.com)
  // Admin dashboard and API routes
  if (request.nextUrl.pathname.startsWith('/templates')) {
    // Rate limiting for admin dashboard
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    console.log(`Admin dashboard access from ${clientIp} - ${userAgent}`)
    return NextResponse.next()
  }

  // Rate limiting for template creation API
  if (request.nextUrl.pathname.startsWith('/api/templates/create')) {
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    console.log(`Template creation request from ${clientIp} - ${userAgent}`)
  }

  // Redirect old uppercase Templates to lowercase
  if (request.nextUrl.pathname.startsWith('/Templates')) {
    return NextResponse.redirect(new URL('/templates', request.url))
  }

  return NextResponse.next()
}

function getSubdomain(hostname: string): string | null {
  // Remove port if present (for local development)
  const host = hostname.split(':')[0].toLowerCase() // Make hostname lowercase

  // Split by dots and check structure
  const parts = host.split('.')

  // For localhost or IP addresses, no subdomain
  if (host === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    return null
  }

  // For url1234.com, we expect subdomain.url1234.com (3 parts)
  if (parts.length === 3 && parts[1] === 'url1234' && parts[2] === 'com') {
    return parts[0].toLowerCase() // Return lowercase subdomain
  }

  // For development environments like subdomain.localhost
  if (parts.length === 2 && parts[1] === 'localhost') {
    return parts[0].toLowerCase() // Return lowercase subdomain
  }

  return null
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
}