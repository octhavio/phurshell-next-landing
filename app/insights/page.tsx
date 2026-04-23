'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import TransitionLink from '../../src/components/TransitionLink'
import InsightsFilter from '../../src/components/InsightsFilter'
import { getCategories } from '../../src/lib/wordpress'
import { WPCategory } from '../../src/types/wordpress'

export default function Insights() {
  const [categories, setCategories] = useState<WPCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const cats = await getCategories()
        setCategories(cats)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
        setCategories([])
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  if (loading) {
    return (
      <div className="bg-white">
        <div className="flex min-h-[50vh] items-center justify-center">
          <i className="fa-solid fa-spinner fa-spin text-6xl text-brand-orange"></i>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Filter and Posts */}
      <InsightsFilter categories={categories} />

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
