/**
 * WordPress API Client
 * Funções para consumir WordPress como headless CMS
 *
 * Uso futuro quando conectar ao WordPress:
 * 1. Configurar WORDPRESS_API_URL no .env
 * 2. Ativar plugin WP REST API no WordPress
 * 3. Instalar e configurar ACF (Advanced Custom Fields) para campos customizados
 * 4. Habilitar CORS no WordPress se necessário
 */

import { WPPage, WPPost, WPCase, WPAPIResponse } from '@/types/wordpress'

const WP_API_URL = process.env.WORDPRESS_API_URL || ''

/**
 * Fetch genérico para WordPress API com tratamento de erros
 */
async function fetchWordPress<T>(
  endpoint: string,
  params: Record<string, string | number> = {},
  revalidate: number = 3600 // Cache de 1 hora por padrão
): Promise<T> {
  if (!WP_API_URL) {
    throw new Error('WORDPRESS_API_URL não configurado no .env')
  }

  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  )

  const url = `${WP_API_URL}${endpoint}?${queryParams.toString()}`

  try {
    const response = await fetch(url, {
      next: { revalidate }, // ISR - Incremental Static Regeneration
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    console.error('Erro ao buscar dados do WordPress:', error)
    throw error
  }
}

/**
 * Busca páginas do WordPress
 * @param slug - Slug da página (opcional)
 * @param perPage - Quantidade de páginas por request
 */
export async function getPages(
  slug?: string,
  perPage: number = 10
): Promise<WPPage[]> {
  const params: Record<string, string | number> = {
    per_page: perPage,
    _embed: 1, // Incluir media embarcado
  }

  if (slug) {
    params.slug = slug
  }

  return fetchWordPress<WPPage[]>('/pages', params)
}

/**
 * Busca uma página específica pelo slug
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await getPages(slug, 1)
  return pages.length > 0 ? pages[0] : null
}

/**
 * Busca posts do WordPress
 * @param categories - IDs de categorias (opcional)
 * @param perPage - Quantidade de posts por request
 * @param page - Número da página
 */
export async function getPosts(
  categories?: number[],
  perPage: number = 10,
  page: number = 1
): Promise<WPPost[]> {
  const params: Record<string, string | number> = {
    per_page: perPage,
    page,
    _embed: 1,
    orderby: 'date',
    order: 'desc',
  }

  if (categories && categories.length > 0) {
    params.categories = categories.join(',')
  }

  return fetchWordPress<WPPost[]>('/posts', params)
}

/**
 * Busca um post específico pelo slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWordPress<WPPost[]>('/posts', { slug, _embed: 1 })
  return posts.length > 0 ? posts[0] : null
}

/**
 * Busca cases/portfólio do WordPress
 * Assumindo que será criado um Custom Post Type chamado "cases"
 *
 * Para implementar no WordPress:
 * 1. Criar CPT "cases" via plugin ou functions.php
 * 2. Configurar ACF com campos customizados (client_name, technologies, etc)
 * 3. Expor o CPT na REST API
 */
export async function getCases(perPage: number = 12): Promise<WPCase[]> {
  const params = {
    per_page: perPage,
    _embed: 1,
    orderby: 'date',
    order: 'desc',
  }

  try {
    // Endpoint customizado que será criado no WordPress
    return fetchWordPress<WPCase[]>('/cases', params)
  } catch (error) {
    console.error('Erro ao buscar cases:', error)
    return []
  }
}

/**
 * Busca um case específico pelo slug
 */
export async function getCaseBySlug(slug: string): Promise<WPCase | null> {
  try {
    const cases = await fetchWordPress<WPCase[]>('/cases', { slug, _embed: 1 })
    return cases.length > 0 ? cases[0] : null
  } catch (error) {
    console.error('Erro ao buscar case:', error)
    return null
  }
}

/**
 * Função auxiliar para extrair URL da imagem featured
 */
export function getFeaturedImageUrl(
  item: WPPage | WPPost | WPCase,
  size: 'thumbnail' | 'medium' | 'large' | 'full' = 'large'
): string | null {
  const media = item._embedded?.['wp:featuredmedia']?.[0]

  if (!media) return null

  // Tenta pegar o tamanho específico
  const sizeUrl = media.media_details?.sizes?.[size]?.source_url

  return sizeUrl || media.source_url || null
}

/**
 * Revalida cache de uma rota específica
 * Usar com API Routes para webhook de revalidação
 */
export async function revalidatePath(path: string, secret: string) {
  if (secret !== process.env.REVALIDATE_SECRET) {
    throw new Error('Invalid revalidation secret')
  }

  // Esta função será usada em uma API Route
  // Ex: /api/revalidate
  return { revalidated: true, path }
}
