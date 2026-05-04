import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TransitionLink from '../../../src/components/TransitionLink'
import ShareButtons from '../../../src/components/ShareButtons'
import { getBlogPosts, getBlogPostBySlug } from '../../../src/lib/wordpress'
import { BlogPost } from '../../../src/types/wordpress'

// ISR: Revalida a cada 60 segundos
export const revalidate = 60

// Permite gerar novos posts sob demanda (fallback: blocking)
export const dynamicParams = true

interface PageProps {
  params: { slug: string[] }
}

// Gera posts existentes no build time
export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts(100)
    return posts.map((post) => ({
      slug: [post.slug],
    }))
  } catch (error) {
    console.error('Erro ao gerar static params:', error)
    return []
  }
}

// SEO: Metadata dinâmico baseado no post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug[0]
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Phurshell`,
      description: post.excerpt,
      url: `https://phurshell.com/insights/${post.slug}`,
      type: 'article',
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Phurshell`,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

// Fetch do post no BUILD TIME (server-side)
async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    return await getBlogPostBySlug(slug)
  } catch (error) {
    console.error('Erro ao buscar post:', error)
    return null
  }
}

// Fetch de posts relacionados no BUILD TIME
async function getRelatedPosts(post: BlogPost): Promise<BlogPost[]> {
  try {
    const allPosts = await getBlogPosts(100)
    return allPosts
      .filter((p) => p.id !== post.id && p.categorySlug === post.categorySlug)
      .slice(0, 3)
  } catch (error) {
    console.error('Erro ao buscar posts relacionados:', error)
    return []
  }
}

// SERVER COMPONENT - HTML gerado no build com conteúdo real
export default async function InsightPostPage({ params }: PageProps) {
  const slug = params.slug[0]
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          {/* Category & Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="rounded-button bg-brand-orange/10 px-4 py-2 font-bold text-brand-orange">
              {post.category}
            </span>
            <span className="text-dark/60">{post.publishedAt}</span>
            <span className="text-dark/60">-</span>
            <span className="text-dark/60">{post.readTime} de leitura</span>
          </div>

          {/* Title - CONTEÚDO REAL NO HTML */}
          <h1 className="mb-8 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="mb-12 flex items-center gap-4 border-b border-dark/10 pb-8">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/10">
                <i className="fa-solid fa-user text-2xl text-brand-orange"></i>
              </div>
            )}
            <div>
              <div className="text-lg font-bold text-dark">{post.author.name}</div>
              <div className="text-dark/60">{post.author.role}</div>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 overflow-hidden rounded-button">
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover lg:max-h-[600px]"
              />
            </div>
          )}
        </div>
      </section>

      {/* Content - CONTEÚDO REAL NO HTML */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-dark prose-headings:mt-10 prose-headings:mb-4
                prose-h2:text-3xl prose-h2:border-b prose-h2:border-dark/10 prose-h2:pb-3
                prose-h3:text-2xl prose-h3:text-dark/90
                prose-h4:text-xl
                prose-p:text-dark/70 prose-p:leading-relaxed prose-p:my-4
                prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline
                prose-strong:text-dark prose-strong:font-bold
                prose-ul:text-dark/70 prose-ul:my-4 prose-ul:pl-6
                prose-ol:text-dark/70 prose-ol:my-4 prose-ol:pl-6
                prose-li:my-2 prose-li:marker:text-brand-orange
                prose-table:w-full prose-table:border-collapse prose-table:my-8 prose-table:text-sm
                prose-th:bg-dark prose-th:text-white prose-th:font-bold prose-th:p-4 prose-th:text-left
                prose-td:border prose-td:border-dark/20 prose-td:p-4
                prose-tr:even:bg-gray-50
                prose-hr:my-10 prose-hr:border-dark/10
                [&_.lead]:text-xl [&_.lead]:text-dark/80 [&_.lead]:leading-relaxed [&_.lead]:mb-8 [&_.lead]:font-normal
                [&_.conclusion]:bg-brand-orange/5 [&_.conclusion]:border-l-4 [&_.conclusion]:border-brand-orange [&_.conclusion]:p-6 [&_.conclusion]:rounded-r-lg [&_.conclusion]:my-10
                [&_.conclusion_h2]:text-2xl [&_.conclusion_h2]:text-brand-orange [&_.conclusion_h2]:mt-0 [&_.conclusion_h2]:mb-4 [&_.conclusion_h2]:border-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share */}
              <ShareButtons title={post.title} slug={post.slug} />

              {/* CTA */}
              <div className="rounded-button bg-gradient-to-br from-brand-orange to-brand-orange-light p-6 text-white shadow-lg">
                <h3 className="mb-3 text-xl font-black">Gostou do conteúdo?</h3>
                <p className="mb-4 text-white/90">
                  Entre em contato e vamos transformar sua ideia em realidade
                </p>
                <TransitionLink
                  href="/contato"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-button bg-white px-6 py-3 font-bold text-brand-orange transition-smooth hover:scale-105"
                >
                  Solicitar proposta
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-dark/10 bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
            <h2 className="mb-12 text-center text-4xl font-black text-dark sm:text-5xl">
              Artigos relacionados
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <TransitionLink
                  key={relatedPost.id}
                  href={`/insights/${relatedPost.slug}`}
                  className="group flex flex-col overflow-hidden rounded-button border border-dark/10 bg-white shadow-lg transition-smooth hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {relatedPost.image ? (
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 transition-transform group-hover:scale-105"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-dark/60">
                      <span className="rounded-button bg-brand-orange/10 px-3 py-1 font-bold text-brand-orange">
                        {relatedPost.category}
                      </span>
                      <span>{relatedPost.readTime}</span>
                    </div>

                    <h3 className="mb-3 text-xl font-black text-dark transition-colors group-hover:text-brand-orange">
                      {relatedPost.title}
                    </h3>

                    <p className="mb-4 flex-1 text-dark/70">{relatedPost.excerpt}</p>

                    <div className="flex items-center justify-between border-t border-dark/10 pt-4">
                      <div className="flex items-center gap-2">
                        {relatedPost.author.avatar ? (
                          <img
                            src={relatedPost.author.avatar}
                            alt={relatedPost.author.name}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/10">
                            <i className="fa-solid fa-user text-sm text-brand-orange"></i>
                          </div>
                        )}
                        <div className="text-sm">
                          <div className="font-bold text-dark">{relatedPost.author.name}</div>
                        </div>
                      </div>

                      <div className="text-sm text-dark/60">{relatedPost.publishedAt}</div>
                    </div>
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl rounded-button border border-dark/10 bg-gradient-to-br from-white to-brand-orange/5 p-8 text-center shadow-xl sm:p-12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/10">
              <i className="fa-solid fa-envelope text-2xl text-brand-orange"></i>
            </div>

            <h2 className="mb-4 text-3xl font-black text-dark sm:text-4xl">
              Receba nossos insights
            </h2>
            <p className="mb-8 text-lg text-dark/70">
              Fique por dentro das últimas tendências em tecnologia e desenvolvimento de software
            </p>

            <TransitionLink
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
            >
              Falar com especialista
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  )
}
