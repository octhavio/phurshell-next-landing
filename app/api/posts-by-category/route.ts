import { NextRequest, NextResponse } from 'next/server'
import { getBlogPostsByCategory } from '../../../src/lib/wordpress'

export const revalidate = 60

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categorySlug = searchParams.get('category')

  if (!categorySlug) {
    return NextResponse.json([])
  }

  try {
    return NextResponse.json(await getBlogPostsByCategory(categorySlug, 3))
  } catch {
    return NextResponse.json([])
  }
}
