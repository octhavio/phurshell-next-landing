import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import TransitionLink from '../../../src/components/TransitionLink'
import ShareButtons from '../../../src/components/ShareButtons'
import ContactCTA from '../../../src/components/ContactCTA'
import { getBlogPosts, getBlogPostBySlug, getBlogPostIndex } from '../../../src/lib/wordpress'
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
    const index = await getBlogPostIndex(100)
    return index.map((post) => ({
      slug: [post.slug],
    }))
  } catch (error) {
    console.error('Erro ao gerar static params:', error)
    return []
  }
}

// Titulos vindos do WordPress chegam a 117 caracteres; o Ahrefs/Google cortam
// perto de 60. Corta na ultima palavra inteira que couber.
const TITLE_MAX = 60

function truncateTitle(title: string, max: number = TITLE_MAX): string {
  if (title.length <= max) return title
  const cut = title.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  const base = lastSpace > max / 2 ? cut.slice(0, lastSpace) : cut
  return base.replace(/[\s,;:.\-–—]+$/, '') + '…'
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
    // absolute: escapa do template '%s | Phurshell' do root layout, que somava
    // 12 caracteres e estourava o limite em praticamente todo post.
    title: { absolute: truncateTitle(post.title) },
    description: post.excerpt,
    alternates: { canonical: `https://phurshell.com/insights/${post.slug}/` },
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

function sanitizeContent(html: string): string {
  return html.replace(/<h2([^>]*)>/g, (match, attrs) => {
    const cleaned = attrs
      .replace(/class="[^"]*"/g, '')
      .replace(/style="[^"]*"/g, '')
      .trim()
    return `<h2${cleaned ? ' ' + cleaned : ''}>`
  })
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
      <section className="bg-white pb-12 pt-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm font-bold text-dark/50">
            <TransitionLink href="/" className="transition-colors hover:text-brand-orange">Home</TransitionLink>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <TransitionLink href="/insights" className="transition-colors hover:text-brand-orange">Insights</TransitionLink>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <a href={`/insights/?categoria=${post.categorySlug}`} className="transition-colors hover:text-brand-orange">{post.category}</a>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <span className="max-w-xs truncate text-dark">{post.title}</span>
          </div>

          {/* Title - CONTEÚDO REAL NO HTML */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl">
            {post.title}
          </h1>

          {/* Meta & Author */}
          <div className="mb-12 flex flex-wrap items-center gap-3 text-sm font-bold text-dark/60">
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTime} de leitura</span>
            <span>·</span>
            {post.author.avatar ? (
              <Image src={post.author.avatar} alt={post.author.name} width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
            ) : (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/10">
                <i className="fa-solid fa-user text-xs text-brand-orange"></i>
              </div>
            )}
            <span>{post.author.name}</span>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative mb-0 overflow-hidden rounded-button">
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover lg:max-h-[600px]"
              />
              <div className="absolute left-4 top-4 rounded-button bg-white/80 px-3 py-1 text-sm font-bold text-dark backdrop-blur-sm">
                {post.category}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content - CONTEÚDO REAL NO HTML */}
      <section className="bg-white pt-8 pb-8">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <div className="min-w-0 overflow-x-auto">
              <article
                className="post-content"
                dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 self-start sticky top-32">
              {/* CTA Mini */}
              <div className="rounded-button bg-brand-orange/10 p-6">
                <h3 className="mb-2 text-lg font-black text-dark">
                  Fale com um especialista e receba sua proposta em pouco tempo
                </h3>
                <p className="mb-4 text-sm text-dark/60">
                  Nosso time entra em contato para entender seu projeto e enviar uma estimativa.
                </p>
                <TransitionLink
                  href="/contato/"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-sm font-black text-white transition-smooth hover:bg-brand-orange-light"
                >
                  Falar com um especialista
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
                <p className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-brand-orange">
                  <i className="fa-solid fa-bolt"></i>
                  Respondemos em minutos
                </p>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="bg-white pb-8">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-8">
          <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
            <h2 className="mb-8 text-4xl font-black text-dark sm:text-5xl">
              Artigos relacionados
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <TransitionLink
                  key={relatedPost.id}
                  href={`/insights/${relatedPost.slug}`}
                  className="group flex flex-col rounded-button border border-dark/10 bg-white transition-smooth"
                >
                  {/* Image */}
                  <div className="p-6 pb-0">
                    <div className="relative h-60 overflow-hidden rounded-xl">
                      {relatedPost.image ? (
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 transition-transform duration-500 group-hover:scale-105"></div>
                      )}
                      <div className="absolute left-4 top-4 rounded-button bg-white/80 px-3 py-1 text-sm font-bold text-dark">
                        {relatedPost.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold text-dark/60">
                      <span>{relatedPost.publishedAt}</span>
                      <span>·</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-black text-dark">{relatedPost.title}</h3>
                    <p className="flex-1 text-dark/70">{relatedPost.excerpt}</p>
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </div>
  )
}
