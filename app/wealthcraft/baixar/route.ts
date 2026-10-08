import { NextResponse, type NextRequest } from 'next/server'

import { APP_STORE_URL, PLAY_STORE_URL } from '../stores'

// Link único para divulgar e para o convite do jogo: manda para a loja do aparelho
// (iPhone/iPad → App Store, Android → Google Play) e o resto para a página do jogo.
export const dynamic = 'force-dynamic'

export function GET(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? ''
  // iPadOS se apresenta como Mac; o "Mobile" no user agent separa do Mac de verdade.
  const ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && /Mobile/i.test(ua))
  const android = /Android/i.test(ua)
  const target = ios ? APP_STORE_URL : android && PLAY_STORE_URL ? PLAY_STORE_URL : new URL('/wealthcraft/', request.url).toString()
  const res = NextResponse.redirect(target, 302)
  res.headers.set('Cache-Control', 'no-store') // a resposta muda por aparelho
  return res
}
