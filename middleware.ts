import { NextRequest, NextResponse } from 'next/server'
import { LAB_ROOT_DOMAIN } from '@/lib/config'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Only handle admin authentication protection
  // Don't interfere with subdomain routing - let Vercel handle that
  if (url.pathname.startsWith('/admin') && url.pathname !== '/admin/login') {
    const adminSession = request.cookies.get('admin-session')

    if (!adminSession || adminSession.value !== 'authenticated') {
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
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