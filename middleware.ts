import { NextRequest, NextResponse } from 'next/server'
import { LAB_ROOT_DOMAIN } from '@/lib/config'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  if (!hostname) {
    return NextResponse.next()
  }

  // Check admin authentication
  if (url.pathname.startsWith('/admin') && url.pathname !== '/admin/login') {
    const adminSession = request.cookies.get('admin-session')

    if (!adminSession || adminSession.value !== 'authenticated') {
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  // Extract subdomain from hostname
  const hostParts = hostname.split('.')

  // Handle requests to root domain (no subdomain)
  if (hostname === LAB_ROOT_DOMAIN || hostname === `www.${LAB_ROOT_DOMAIN}`) {
    return NextResponse.next()
  }

  // Handle subdomain requests
  if (hostParts.length > 2 && hostname.endsWith(LAB_ROOT_DOMAIN)) {
    const subdomain = hostParts[0]

    // Skip admin and api subdomains
    if (subdomain === 'admin' || subdomain === 'api') {
      return NextResponse.next()
    }

    // For all other subdomains, show a simple "not found" message
    // without any buttons that could be exploited
    url.pathname = '/subdomain-not-found'
    url.searchParams.set('subdomain', subdomain)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}