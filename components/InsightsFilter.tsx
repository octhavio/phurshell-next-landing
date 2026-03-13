'use client'

import { useState, useEffect } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { BlogPost, WPCategory } from '@/types/wordpress'

const WP_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://wp-api.phurshell.com'
const POSTS_PER_PAGE = 9

interface InsightsFilterProps {
  categories: WPCategory[]
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

export default function InsightsFilter({ categories }: InsightsFilterProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [isFirstPage, setIsFirstPage] = useState(true)

  // Busca posts paginados
  useEffect(() => {
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
      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-white pb-12 pt-4 sm:pb-16 sm:pt-6">
          <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
            <TransitionLink
              href={`/insights/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-button border border-dark/10 bg-white shadow-xl transition-smooth hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden lg:h-full">
                  {featuredPost.image ? (
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20"></div>
                  )}
                  <div className="absolute left-6 top-6 rounded-button bg-brand-orange px-4 py-2">
                    <span className="text-sm font-black text-white">EM DESTAQUE</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-4 text-sm text-dark/60">
                    <span className="rounded-button bg-brand-orange/10 px-3 py-1 font-bold text-brand-orange">
                      {featuredPost.category}
                    </span>
                    <span>{featuredPost.publishedAt}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="mb-4 text-3xl font-black text-dark transition-colors group-hover:text-brand-orange sm:text-4xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mb-6 text-lg leading-relaxed text-dark/70">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-3">
                    {featuredPost.author.avatar ? (
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10">
                        <i className="fa-solid fa-user text-brand-orange"></i>
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-dark">{featuredPost.author.name}</div>
                      <div className="text-sm text-dark/60">{featuredPost.author.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionLink>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="border-y border-dark/10 bg-gray-50 py-8">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category.slug)}
                className={`rounded-button px-6 py-3 text-base font-bold transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                    : 'bg-white text-dark hover:bg-brand-orange/10 hover:text-brand-orange'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          {loading ? (
            <div className="py-20 text-center">
              <i className="fa-solid fa-spinner fa-spin mb-6 text-6xl text-brand-orange"></i>
              <h3 className="text-2xl font-black text-dark">Carregando...</h3>
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
                  className="group flex flex-col overflow-hidden rounded-button border border-dark/10 bg-white shadow-lg transition-smooth hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 transition-transform group-hover:scale-105"></div>
                    )}
                    {post.featured && (
                      <div className="absolute right-4 top-4 rounded-button bg-brand-orange px-3 py-1">
                        <i className="fa-solid fa-star text-white"></i>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-dark/60">
                      <span className="rounded-button bg-brand-orange/10 px-3 py-1 font-bold text-brand-orange">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="mb-3 text-xl font-black text-dark transition-colors group-hover:text-brand-orange">
                      {post.title}
                    </h3>

                    <p className="mb-4 flex-1 text-dark/70">{post.excerpt}</p>

                    <div className="flex items-center justify-between border-t border-dark/10 pt-4">
                      <div className="flex items-center gap-2">
                        {post.author.avatar ? (
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/10">
                            <i className="fa-solid fa-user text-sm text-brand-orange"></i>
                          </div>
                        )}
                        <div className="text-sm">
                          <div className="font-bold text-dark">{post.author.name}</div>
                        </div>
                      </div>

                      <div className="text-sm text-dark/60">{post.publishedAt}</div>
                    </div>
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
                    ? 'cursor-not-allowed bg-gray-100 text-dark/30'
                    : 'bg-white text-dark shadow-md hover:bg-brand-orange hover:text-white'
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
                      ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                      : 'bg-white text-dark shadow-md hover:bg-brand-orange/10 hover:text-brand-orange'
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
                    ? 'cursor-not-allowed bg-gray-100 text-dark/30'
                    : 'bg-white text-dark shadow-md hover:bg-brand-orange hover:text-white'
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
