import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Conheça os projetos que transformamos em realidade. Cases de sucesso em desenvolvimento mobile e web.',
}

export default function CasesPage() {
  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'mobile', name: 'Mobile', count: 6 },
    { id: 'web', name: 'Web', count: 4 },
    { id: 'saas', name: 'SaaS', count: 2 },
  ]

  const cases = [
    {
      id: 1,
      client: 'FinanceHub',
      title: 'Plataforma de gestão financeira que revolucionou o mercado B2B',
      tags: ['Web App', 'Mobile App', 'API'],
      image: '/placeholder-case.jpg',
      category: 'saas',
    },
    {
      id: 2,
      client: 'HealthApp',
      title: 'App de telemedicina que conecta pacientes e médicos em tempo real',
      tags: ['Mobile App', 'React Native'],
      image: '/placeholder-case.jpg',
      category: 'mobile',
    },
    {
      id: 3,
      client: 'TechStart',
      title: 'E-commerce de alta performance com mais de 10 mil produtos',
      tags: ['Website', 'E-commerce'],
      image: '/placeholder-case.jpg',
      category: 'web',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-4xl">
            <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
              Construindo com os{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                  melhores do mercado
                </span>
              </span>
            </h1>
            <p className="text-pretty text-xl leading-relaxed text-dark/70">
              Cada projeto é uma oportunidade de criar algo extraordinário. Conheça alguns dos
              produtos digitais que transformamos em realidade.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className="group relative overflow-hidden rounded-button border border-dark/10 bg-white px-6 py-3 text-sm font-black text-dark/70 transition-all hover:border-brand-orange hover:text-brand-orange"
              >
                <span className="relative z-10">
                  {category.name} ({category.count})
                </span>
                <div className="absolute inset-0 -z-0 bg-brand-orange/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="space-y-24">
            {cases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-button bg-gradient-to-br from-brand-orange/10 via-gray-50 to-brand-orange-light/10 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="flex h-full items-center justify-center">
                    <i className="fa-jelly fa-mobile-screen fa-10x text-brand-orange opacity-20"></i>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-button bg-brand-orange/10 px-4 py-2">
                    <div className="h-2 w-2 rounded-button bg-brand-orange"></div>
                    <span className="text-sm font-black tracking-wider text-brand-orange">
                      {caseItem.client}
                    </span>
                  </div>

                  <h2 className="mb-6 text-balance text-4xl font-black leading-tight tracking-tight text-dark sm:text-5xl">
                    {caseItem.title}
                  </h2>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-button border border-dark/10 bg-dark/5 px-4 py-2 text-xs font-semibold text-dark/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-lg font-black text-brand-orange transition-all hover:gap-4"
                  >
                    Ver Case Completo
                    <i className="fa-jelly fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-dark to-dark py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-button bg-white opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Vamos criar algo incrível juntos
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Transforme sua ideia em um produto digital de alta performance
          </p>

          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
          >
            <i className="fa-jelly fa-calendar fa-lg"></i>
            Agendar Conversa
          </a>
        </div>
      </section>
    </div>
  )
}
