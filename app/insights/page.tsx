'use client'

import { useState } from 'react'
import Image from 'next/image'
import TransitionLink from '@/components/TransitionLink'
import { blogPosts, categories } from '@/data/blogPosts'

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const filteredPosts =
    selectedCategory === 'todos'
      ? blogPosts
      : blogPosts.filter((post) => post.categorySlug === selectedCategory)

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const latestPost = featuredPosts[0] || blogPosts[0]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-orange/5 to-white pb-16 pt-24 sm:pt-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-button border border-brand-orange/30 bg-brand-orange/10 px-4 py-2">
              <span className="text-sm font-black tracking-wider text-brand-orange">INSIGHTS</span>
            </div>

            <h1 className="mb-6 text-balance text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
              Conteúdos sobre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                  tecnologia
                </span>
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-pretty text-xl leading-relaxed text-dark/70">
              Artigos, guias e tendências sobre desenvolvimento de software, design e inovação
              tecnológica
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <TransitionLink
            href={`/insights/${latestPost.slug}`}
            className="group block overflow-hidden rounded-button border border-dark/10 bg-white shadow-xl transition-smooth hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 overflow-hidden lg:h-full">
                <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20"></div>
                <div className="absolute left-6 top-6 rounded-button bg-brand-orange px-4 py-2">
                  <span className="text-sm font-black text-white">EM DESTAQUE</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-4 text-sm text-dark/60">
                  <span className="rounded-button bg-brand-orange/10 px-3 py-1 font-bold text-brand-orange">
                    {latestPost.category}
                  </span>
                  <span>{latestPost.publishedAt}</span>
                  <span>•</span>
                  <span>{latestPost.readTime}</span>
                </div>

                <h2 className="mb-4 text-3xl font-black text-dark transition-colors group-hover:text-brand-orange sm:text-4xl">
                  {latestPost.title}
                </h2>

                <p className="mb-6 text-lg leading-relaxed text-dark/70">{latestPost.excerpt}</p>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10">
                    <i className="fa-solid fa-user text-brand-orange"></i>
                  </div>
                  <div>
                    <div className="font-bold text-dark">{latestPost.author.name}</div>
                    <div className="text-sm text-dark/60">{latestPost.author.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-dark/10 bg-gray-50 py-8">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
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
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <i className="fa-solid fa-inbox mb-6 text-6xl text-dark/20"></i>
              <h3 className="mb-2 text-2xl font-black text-dark">Nenhum artigo encontrado</h3>
              <p className="text-dark/60">Tente selecionar outra categoria</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <TransitionLink
                  key={post.id}
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-button border border-dark/10 bg-white shadow-lg transition-smooth hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 transition-transform group-hover:scale-105"></div>
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
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/10">
                          <i className="fa-solid fa-user text-sm text-brand-orange"></i>
                        </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-dark/10 bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-orange py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Vamos conversar sobre seu próximo projeto de tecnologia
            </p>
            <TransitionLink
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-button bg-white px-8 py-4 text-lg font-bold text-brand-orange shadow-lg transition-smooth hover:scale-105"
            >
              Solicitar proposta
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  )
}
