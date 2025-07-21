import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Simple middleware - just pass through all requests
  // Language switching is now handled client-side
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
}