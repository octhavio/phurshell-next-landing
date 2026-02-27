'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FeaturedCase() {
  const cases = [
    {
      id: 1,
      category: 'DESIGN SPRINT',
      title: 'Impactamos o mundo da moda',
      highlight: '10 mil downloads',
      description: 'com uma solução que teve mais de',
      suffix: 'em menos de um ano.',
      client: {
        name: 'Laura Matos',
        role: 'CEO, Zelia',
        image: '/placeholder-client.jpg',
      },
      testimonial:
        'A equipe demonstrou grande dedicação e entusiasmo desde o início do projeto, contribuindo com sugestões valiosas que enriqueceram o desenvolvimento do aplicativo.',
      nps: 10,
      mockup: '/placeholder-mockup.png',
    },
    {
      id: 2,
      category: 'MVP DEVELOPMENT',
      title: 'Revolucionamos o setor financeiro',
      highlight: '5 milhões investidos',
      description: 'com uma plataforma que atraiu mais de',
      suffix: 'em apenas 6 meses.',
      client: {
        name: 'Carlos Silva',
        role: 'CTO, FinanceHub',
        image: '/placeholder-client.jpg',
      },
      testimonial:
        'Profissionalismo exemplar e entrega dentro do prazo. A solução superou nossas expectativas e nos posicionou como líderes no mercado.',
      nps: 10,
      mockup: '/placeholder-mockup.png',
    },
  ]

  const [currentCase, setCurrentCase] = useState(0)

  return (
    <section className="relative overflow-hidden bg-dark py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-5"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-button border border-white/10 bg-dark/50 backdrop-blur-xl">
          <div className="grid grid-cols-1 items-center gap-12 p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            {/* Content */}
            <div>
              <div className="mb-6 inline-block rounded-button border border-brand-orange/30 bg-brand-orange/10 px-4 py-2">
                <span className="text-sm font-black tracking-wider text-brand-orange">
                  {cases[currentCase].category}
                </span>
              </div>

              <h3 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl">
                {cases[currentCase].title}{' '}
                <span className="text-pretty">
                  {cases[currentCase].description}{' '}
                  <span className="text-brand-orange">{cases[currentCase].highlight}</span>{' '}
                  {cases[currentCase].suffix}
                </span>
              </h3>

              {/* Client info */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-button border-2 border-brand-orange bg-brand-orange/10">
                  <div className="flex h-full items-center justify-center">
                    <i className="fa-jelly fa-user fa-2x text-brand-orange/50"></i>
                  </div>
                </div>
                <div>
                  <div className="font-black text-white">{cases[currentCase].client.name}</div>
                  <div className="text-sm text-white/60">{cases[currentCase].client.role}</div>
                </div>
              </div>

              {/* Testimonial */}
              <p className="mb-6 text-white/70">{cases[currentCase].testimonial}</p>

              {/* NPS */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-black tracking-wider text-brand-orange">
                  NPS {cases[currentCase].nps}
                </span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa-solid fa-star text-sm ${
                        i < cases[currentCase].nps ? 'text-brand-orange' : 'text-white/20'
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-button border-4 border-brand-orange bg-gradient-to-br from-brand-orange/10 via-gray-900 to-dark shadow-2xl shadow-brand-orange/20">
                <div className="flex h-full items-center justify-center">
                  <i className="fa-jelly fa-mobile-screen fa-10x text-brand-orange/20"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-white/10 p-8">
            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`h-2 rounded-button transition-all ${
                    index === currentCase ? 'w-8 bg-brand-orange' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Ver case ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentCase((prev) => (prev === 0 ? cases.length - 1 : prev - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-button border border-white/10 bg-white/5 text-white transition-colors hover:bg-brand-orange hover:text-white"
                aria-label="Case anterior"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                onClick={() => setCurrentCase((prev) => (prev === cases.length - 1 ? 0 : prev + 1))}
                className="flex h-12 w-12 items-center justify-center rounded-button border border-white/10 bg-white/5 text-white transition-colors hover:bg-brand-orange hover:text-white"
                aria-label="Próximo case"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
