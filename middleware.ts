import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect /propostas/CODE to /propostas?code=CODE
  if (pathname.startsWith('/propostas/')) {
    const code = pathname.split('/propostas/')[1]?.replace(/\/$/, '')
    if (code && code.length > 0) {
      const url = request.nextUrl.clone()
      url.pathname = '/propostas'
      url.searchParams.set('code', code)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/propostas/:code+'],
}
