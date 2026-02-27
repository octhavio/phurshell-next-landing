import TransitionLink from '@/components/TransitionLink'

export const metadata = {
  title: 'Indústrias - Soluções por Segmento',
  description:
    'Desenvolvemos soluções tecnológicas personalizadas para diversos setores. Conheça nossas especializações por indústria.',
}

export default function IndustriasPage() {
  const industries = [
    {
      title: 'Healthtech',
      href: '/industrias/healthtech',
      icon: 'heart-pulse',
      description: 'Soluções de tecnologia para saúde',
      features: ['Telemedicina', 'Prontuário Eletrônico', 'Apps Médicos', 'Gestão Hospitalar'],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-button border border-brand-orange/30 bg-brand-orange/10 px-4 py-2">
              <span className="text-sm font-black tracking-wider text-brand-orange">
                Indústrias
              </span>
            </div>

            <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
              Soluções para{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                  cada setor
                </span>
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-pretty text-xl leading-relaxed text-dark/70">
              Desenvolvemos tecnologia especializada para diferentes indústrias. Cada setor tem suas
              particularidades, e nossas soluções são pensadas para atender necessidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <TransitionLink
                key={industry.href}
                href={industry.href}
                className="group overflow-hidden rounded-button border border-dark/10 bg-white transition-smooth hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:scale-110 group-hover:bg-brand-orange">
                    <i
                      className={`fa-jelly fa-${industry.icon} fa-2x text-brand-orange transition-colors group-hover:text-white`}
                    ></i>
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-dark transition-colors group-hover:text-brand-orange">
                    {industry.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-dark/70">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-dark/60">
                        <i className="fa-jelly fa-check text-brand-orange"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-dark to-dark py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-button bg-white opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Não encontrou seu setor?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Desenvolvemos soluções personalizadas para qualquer indústria
          </p>

          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
          >
            <i className="fa-jelly fa-calendar fa-lg"></i>
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  )
}
