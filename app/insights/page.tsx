import { Metadata } from 'next'
import { Suspense } from 'react'
import InsightsFilter from '../../src/components/InsightsFilter'
import ContactCTA from '../../src/components/ContactCTA'
import TransitionLink from '../../src/components/TransitionLink'

import { getCategories, getBlogPosts, getBlogPostIndex } from '../../src/lib/wordpress'

const POSTS_PER_PAGE = 10

// ISR: Revalida a cada 60 segundos
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Insights | Blog de Tecnologia e Software',
  description: 'Artigos sobre desenvolvimento de software, apps mobile, arquitetura e inovação digital, escritos pelo time de engenharia da Phurshell.',
  alternates: { canonical: 'https://phurshell.com/insights/' },
  openGraph: {
    title: 'Insights | Phurshell',
    description: 'Artigos sobre tecnologia, desenvolvimento de software e inovação digital',
    url: 'https://phurshell.com/insights',
    type: 'website',
    images: [{ url: '/og-image.webp', width: 1200, height: 630 }],
  },
}

export default async function Insights() {
  // Primeira pagina renderizada no servidor: e o unico lugar do site que linka
  // para os posts, entao os cards precisam existir no HTML.
  const [categories, initialPosts, index] = await Promise.all([
    getCategories(),
    getBlogPosts(POSTS_PER_PAGE),
    getBlogPostIndex(100),
  ])

  return (
    <div className="bg-white">
      {/* Filter and Posts */}
      <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center"><i className="fa-solid fa-spinner fa-spin text-4xl text-brand-orange"></i></div>}>
        <InsightsFilter
          categories={categories}
          initialPosts={initialPosts}
          initialTotalPages={Math.ceil(index.length / POSTS_PER_PAGE)}
        />
      </Suspense>

      {/* Indice completo: a paginacao acima e client-side, entao sem esta lista
          so os 10 primeiros posts teriam link interno apontando para eles. */}
      <section className="border-t border-dark/10 bg-white py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
            Todos os artigos
          </h2>
          <ul className="grid gap-x-12 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {index.map((post) => (
              <li key={post.slug}>
                <TransitionLink
                  href={`/insights/${post.slug}/`}
                  className="text-dark/70 transition-colors hover:text-brand-orange"
                >
                  {post.title}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
