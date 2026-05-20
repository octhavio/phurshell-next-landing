'use client'

import { useEffect, useState } from 'react'
import TransitionLink from './TransitionLink'
import { BlogPost } from '../types/wordpress'

interface ServiceRelatedPostsProps {
  categorySlug: string
  categoryLabel?: string
  description?: string
}

export default function ServiceRelatedPosts({
  categorySlug,
  categoryLabel,
  description,
}: ServiceRelatedPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch(`/api/posts-by-category?category=${encodeURIComponent(categorySlug)}`)
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]))
  }, [categorySlug])

  if (posts.length === 0) return null

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
        <h3 className="mb-4 flex items-center gap-3 text-lg font-black uppercase tracking-wider text-brand-orange">
          <i className="fa-jelly fa-lightbulb fa-xl"></i>
          Insights
        </h3>
        <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
          Ideias e insights relacionados
        </h2>
        {description && (
          <p className="mb-10 max-w-4xl text-xl leading-relaxed text-dark/60">{description}</p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <TransitionLink
              key={post.id}
              href={`/insights/${post.slug}`}
              className="group flex flex-col rounded-button border border-dark/10 bg-white transition-smooth"
            >
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
                  <div className="absolute left-4 top-4 rounded-button bg-white/80 px-3 py-1 text-sm font-bold text-dark backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-dark/60">
                  <span>{post.publishedAt}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">{post.title}</h3>
                <p className="flex-1 text-dark/70">{post.excerpt}</p>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  )
}
