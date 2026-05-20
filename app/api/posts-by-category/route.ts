import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts } from '../../../src/lib/wordpress'

export const revalidate = 60

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categorySlug = searchParams.get('category')

  if (!categorySlug) {
    return NextResponse.json([])
  }

  try {
    const allPosts = await getBlogPosts(100)
    const filtered = allPosts
      .filter((p) => p.categorySlug === categorySlug)
      .slice(0, 3)
    return NextResponse.json(filtered)
  } catch {
    return NextResponse.json([])
  }
}
