import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { slug } = body

    // Revalida a listagem do blog
    revalidatePath('/insights')

    // Se um slug específico foi fornecido, revalida também o post
    if (slug) {
      revalidatePath(`/insights/${slug}`)
    }

    return NextResponse.json({
      revalidated: true,
      paths: slug ? ['/insights', `/insights/${slug}`] : ['/insights'],
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to revalidate', details: String(error) },
      { status: 500 }
    )
  }
}

// GET para verificar se o endpoint está funcionando
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Revalidation endpoint is ready. Use POST with x-revalidate-secret header.',
  })
}
