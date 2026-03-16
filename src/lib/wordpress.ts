/**
 * WordPress API Client
 * Funções para consumir WordPress como headless CMS
 */

import { WPPage, WPPost, WPCase, WPCategory, BlogPost } from '../types/wordpress'

// URL base do WordPress - facilmente alterável
const WP_BASE_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://wp-api.phurshell.com'
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`

/**
 * Fetch genérico para WordPress API com tratamento de erros
 */
async function fetchWordPress<T>(
  endpoint: string,
  params: Record<string, string | number> = {}
): Promise<T> {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  )

  const url = `${WP_API_URL}${endpoint}?${queryParams.toString()}`

  try {
    const response = await fetch(url, {
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
 * Remove tags HTML de uma string
 */
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

/**
 * Calcula tempo de leitura baseado no conteúdo
 */
function calculateReadTime(content: string): string {
  const text = stripHtmlTags(content)
  const words = text.split(/\s+/).filter(word => word.length > 0).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min`
}

/**
 * Formata data ISO para formato pt-BR
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  const months = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

/**
 * Transforma WPPost para BlogPost
 */
function transformWPPost(post: WPPost): BlogPost {
  const category = post._embedded?.['wp:term']?.[0]?.[0]
  const author = post._embedded?.author?.[0]
  const media = post._embedded?.['wp:featuredmedia']?.[0]

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: stripHtmlTags(post.excerpt.rendered),
    content: post.content.rendered,
    category: category?.name || 'Sem categoria',
    categorySlug: category?.slug || 'sem-categoria',
    author: {
      name: author?.name || 'Phurshell',
      role: 'Equipe Phurshell',
      avatar: author?.avatar_urls?.['96'],
    },
    publishedAt: formatDate(post.date),
    readTime: calculateReadTime(post.content.rendered),
    image: media?.source_url || null,
    featured: post.sticky,
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
 * Busca posts do blog transformados
 */
export async function getBlogPosts(perPage: number = 100): Promise<BlogPost[]> {
  const posts = await fetchWordPress<WPPost[]>('/posts', {
    per_page: perPage,
    _embed: 1,
    orderby: 'date',
    order: 'desc',
  })

  return posts.map(transformWPPost)
}

/**
 * Busca um post do blog pelo slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchWordPress<WPPost[]>('/posts', {
    slug,
    _embed: 1,
  })

  if (posts.length === 0) return null
  return transformWPPost(posts[0])
}

/**
 * Busca todas as categorias
 */
export async function getCategories(): Promise<WPCategory[]> {
  return fetchWordPress<WPCategory[]>('/categories', {
    per_page: 100,
    hide_empty: 1,
  })
}
