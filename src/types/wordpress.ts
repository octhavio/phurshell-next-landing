/**
 * Types para integração com WordPress API
 * Preparado para consumir WordPress headless
 */

export interface WPImage {
  id: number
  src: string
  alt: string
  width: number
  height: number
}

export interface WPPage {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media?: number
  acf?: Record<string, any> // Advanced Custom Fields
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
  }
}

export interface WPEmbeddedAuthor {
  id: number
  name: string
  slug: string
  description: string
  avatar_urls: {
    '24': string
    '48': string
    '96': string
  }
}

export interface WPPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  featured_media?: number
  categories: number[]
  tags: number[]
  sticky: boolean
  acf?: Record<string, any>
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: WPTerm[][]
    'author'?: WPEmbeddedAuthor[]
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
  description: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedAt: string
  readTime: string
  image: string | null
  featured: boolean
}

export interface WPMedia {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    width: number
    height: number
    sizes?: {
      [key: string]: {
        source_url: string
        width: number
        height: number
      }
    }
  }
}

export interface WPTerm {
  id: number
  name: string
  slug: string
  taxonomy: string
}

export interface WPCase {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  acf?: {
    client_name?: string
    project_type?: string
    technologies?: string[]
    project_url?: string
    thumbnail?: WPImage
    gallery?: WPImage[]
    challenge?: string
    solution?: string
    results?: string
  }
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
  }
}

export interface WPAPIResponse<T> {
  data: T[]
  total: number
  totalPages: number
}
