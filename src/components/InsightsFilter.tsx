'use client'

import { useState, useEffect, useRef } from 'react'
import TransitionLink from './TransitionLink'
import { BlogPost, WPCategory } from '../types/wordpress'

const WP_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://wp-api.phurshell.com'
const POSTS_PER_PAGE = 10

const categoryIconMap: { [key: string]: string } = {
  'apps mobile': 'fa-solid fa-mobile',
  'arquitetura de software': 'fa-solid fa-wrench',
  'blockchain & web3': 'fa-solid fa-link',
  'blog': 'fa-solid fa-newspaper',
  'cases': 'fa-solid fa-trophy',
  'cloud & devops': 'fa-solid fa-cloud',
  'desenvolvimento web': 'fa-solid fa-globe',
  'geral': 'fa-solid fa-layer-group',
  'inteligência artificial': 'fa-solid fa-sparkles',
  'produto digital': 'fa-solid fa-compass',
  'qualidade & segurança': 'fa-solid fa-shield',
  'startups': 'fa-solid fa-chart-pie',
  'transformação digital': 'fa-solid fa-suitcase',
  'ux/ui design': 'fa-solid fa-palette',
}

function getCategoryIcon(name: string): string | null {
  return categoryIconMap[name.toLowerCase()] || null
}

interface InsightsFilterProps {
  categories: WPCategory[]
  /** Primeira pagina vinda do servidor, para os cards saírem no HTML (SEO). */
  initialPosts: BlogPost[]
  initialTotalPages: number
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

function calculateReadTime(content: string): string {
  const text = stripHtmlTags(content)
  const words = text.split(/\s+/).filter(word => word.length > 0).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min`
}

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

function transformWPPost(post: any): BlogPost {
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

export default function InsightsFilter({ categories, initialPosts, initialTotalPages }: InsightsFilterProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Le ?categoria=X do window em vez de useSearchParams: o hook obriga o Next a
  // renderizar esta arvore so no client, e ai os cards nao saem no HTML.
  useEffect(() => {
    const categoria = new URLSearchParams(window.location.search).get('categoria')
    if (categoria) setSelectedCategory(categoria)
  }, [])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [loading, setLoading] = useState(false)
  const [isFirstPage, setIsFirstPage] = useState(true)
  // A primeira pagina ja veio do servidor; so busca quando o usuario mexe.
  const hasServerPosts = useRef(true)
  const filterRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (filterRef.current?.offsetLeft ?? 0)
    scrollLeft.current = filterRef.current?.scrollLeft ?? 0
    if (filterRef.current) filterRef.current.style.cursor = 'grabbing'
  }
  const onMouseUp = () => {
    isDragging.current = false
    if (filterRef.current) filterRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !filterRef.current) return
    e.preventDefault()
    const x = e.pageX - filterRef.current.offsetLeft
    const walk = x - startX.current
    filterRef.current.scrollLeft = scrollLeft.current - walk
  }

  // Busca posts paginados
  useEffect(() => {
    if (hasServerPosts.current) {
      hasServerPosts.current = false
      return
    }
    async function fetchPosts() {
      setLoading(true)
      try {
        const categoryParam = selectedCategory !== 'todos'
          ? `&categories=${categories.find(c => c.slug === selectedCategory)?.id || ''}`
          : ''

        const res = await fetch(
          `${WP_BASE_URL}/wp-json/wp/v2/posts?per_page=${POSTS_PER_PAGE}&page=${currentPage}&_embed${categoryParam}`
        )

        const totalPagesHeader = res.headers.get('X-WP-TotalPages')
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader) : 1)

        const data = await res.json()
        setPosts(data.map(transformWPPost))
        setIsFirstPage(currentPage === 1 && selectedCategory === 'todos')
      } catch (error) {
        console.error('Erro ao buscar posts:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [currentPage, selectedCategory, categories])

  // Primeiro post é o destaque na primeira página sem filtro
  const featuredPost = isFirstPage && posts.length > 0 ? posts[0] : null
  const gridPosts = isFirstPage && posts.length > 1 ? posts.slice(1) : posts

  const filterCategories = [
    { name: 'Todos', slug: 'todos', id: 0 },
    ...categories.map((cat) => ({ name: cat.name, slug: cat.slug, id: cat.id })),
  ]

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero + Category Filter */}
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm font-bold text-dark/50">
            <TransitionLink href="/" className="transition-colors hover:text-brand-orange">Home</TransitionLink>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <span className="text-dark">Insights</span>
          </div>
          <h1 className="mb-4 text-5xl font-black tracking-tight text-dark sm:text-6xl lg:text-7xl">
            Insights, ideias & inspiração
          </h1>
          <p className="mb-8 max-w-5xl text-xl leading-relaxed text-dark/60">
            Dicas de especialistas, tendências de design, deep-dives técnicos e histórias criativas das mentes por trás da Phurshell. Alimente sua próxima grande ideia com conteúdo instigante e conhecimento do setor.
          </p>
          <div className="relative">
            <div
              ref={filterRef}
              className="flex gap-3 overflow-x-auto pb-1 select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onMouseMove={onMouseMove}
            >
            {filterCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category.slug)}
                className={`group relative shrink-0 overflow-hidden rounded-button px-6 py-3 text-sm font-black transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-dark text-white'
                    : 'border border-dark/10 bg-white text-dark/70 hover:bg-dark/5'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {getCategoryIcon(category.name) && (
                    <i className={`${getCategoryIcon(category.name)} text-xs`}></i>
                  )}
                  {category.name}
                </span>
              </button>
            ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-white">
          <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
            <TransitionLink
              href={`/insights/${featuredPost.slug}`}
              className="group block rounded-button border border-dark/10 bg-white transition-smooth"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Image */}
                <div className="p-6 pb-6 lg:pb-6 lg:pr-0">
                  <div className="relative h-64 overflow-hidden rounded-xl lg:h-full">
                    {featuredPost.image ? (
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 transition-transform duration-500 group-hover:scale-105"></div>
                    )}
                    <div className="absolute left-4 top-4 rounded-button bg-white/80 px-3 py-1 text-sm font-bold text-dark">
                      {featuredPost.category}
                    </div>
                    <div className="absolute right-4 top-4 rounded-button bg-brand-orange px-3 py-1">
                      <span className="text-sm font-black text-white">Em destaque</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-2 text-sm text-dark/60">
                    <span>{featuredPost.publishedAt}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="mb-4 text-3xl font-black text-dark sm:text-4xl">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-dark/70">{featuredPost.excerpt}</p>
                </div>
              </div>
            </TransitionLink>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-white py-8">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {loading ? (
            <div className="flex py-20 items-center justify-center">
              <img
                src="/logos/img-logo-icon.svg"
                alt="Phurshell"
                width={50}
                height={50}
                className="h-12 w-12 animate-pulse"
              />
            </div>
          ) : gridPosts.length === 0 ? (
            <div className="py-20 text-center">
              <i className="fa-solid fa-inbox mb-6 text-6xl text-dark/20"></i>
              <h3 className="mb-2 text-2xl font-black text-dark">Nenhum artigo encontrado</h3>
              <p className="text-dark/60">Tente selecionar outra categoria</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <TransitionLink
                  key={post.id}
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col rounded-button border border-dark/10 bg-white transition-smooth"
                >
                  {/* Image */}
                  <div className="p-6 pb-0">
                  <div className="relative h-60 overflow-hidden rounded-xl">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 transition-transform duration-500 group-hover:scale-105"></div>
                    )}
                    <div className="absolute left-4 top-4 rounded-button bg-white/80 px-3 py-1 text-sm font-bold text-dark">
                      {post.category}
                    </div>
                    {post.featured && (
                      <div className="absolute right-4 top-4 rounded-button bg-brand-orange px-3 py-1">
                        <i className="fa-solid fa-star text-white"></i>
                      </div>
                    )}
                  </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-sm text-dark/60">
                      <span>{post.publishedAt}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="mb-3 text-xl font-black text-dark">
                      {post.title}
                    </h3>

                    <p className="flex-1 text-dark/70">{post.excerpt}</p>
                  </div>
                </TransitionLink>
              ))}
            </div>
          )}

          {/* Paginação */}
          {!loading && totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {/* Botão Anterior */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex h-12 w-12 items-center justify-center rounded-button font-bold transition-all ${
                  currentPage === 1
                    ? 'cursor-not-allowed border border-dark/10 bg-gray-100 text-dark/30'
                    : 'border border-dark/10 bg-white text-dark hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              {/* Números de página */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex h-12 w-12 items-center justify-center rounded-button font-bold transition-all ${
                    currentPage === page
                      ? 'border border-brand-orange bg-brand-orange text-white'
                      : 'border border-dark/10 bg-white text-dark hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Botão Próximo */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex h-12 w-12 items-center justify-center rounded-button font-bold transition-all ${
                  currentPage === totalPages
                    ? 'cursor-not-allowed border border-dark/10 bg-gray-100 text-dark/30'
                    : 'border border-dark/10 bg-white text-dark hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
