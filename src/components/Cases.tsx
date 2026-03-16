/**
 * Cases/Portfolio Component
 *
 * Por enquanto usa dados estáticos (mock)
 * Futuramente conectar ao WordPress para buscar cases reais via API
 *
 * Para integrar:
 * 1. import { getCases } from '@/lib/wordpress'
 * 2. Transformar em async component
 * 3. const cases = await getCases(6)
 * 4. Mapear os dados do WordPress nos cards
 */

export default function Cases() {
  // Mock data - substituir por dados do WordPress futuramente
  const cases = [
    {
      id: 1,
      title: 'App de Delivery',
      client: 'FoodExpress',
      description:
        'Aplicativo mobile completo de delivery de comida com rastreamento em tempo real e integração com múltiplos restaurantes.',
      image: '/cases/case-1.jpg', // placeholder
      tags: ['React Native', 'Node.js', 'Firebase'],
      stats: {
        downloads: '50k+',
        rating: '4.8',
      },
    },
    {
      id: 2,
      title: 'Plataforma SaaS',
      client: 'TechCorp',
      description:
        'Dashboard administrativo completo para gestão de equipes e projetos com analytics em tempo real.',
      image: '/cases/case-2.jpg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      stats: {
        users: '10k+',
        uptime: '99.9%',
      },
    },
    {
      id: 3,
      title: 'E-commerce Mobile',
      client: 'Fashion Store',
      description:
        'App de e-commerce com experiência de compra fluida, integração com gateway de pagamento e gestão de estoque.',
      image: '/cases/case-3.jpg',
      tags: ['Flutter', 'Django', 'AWS'],
      stats: {
        sales: 'R$ 2M+',
        conversion: '12%',
      },
    },
    {
      id: 4,
      title: 'Sistema Financeiro',
      client: 'FinTech',
      description:
        'Plataforma web para gestão financeira empresarial com dashboards customizáveis e relatórios automatizados.',
      image: '/cases/case-4.jpg',
      tags: ['React', 'Python', 'Docker'],
      stats: {
        transactions: '1M+',
        saved: 'R$ 500k',
      },
    },
    {
      id: 5,
      title: 'App de Saúde',
      client: 'HealthCare',
      description:
        'Aplicativo de telemedicina com agendamento de consultas, prontuário eletrônico e videochamada integrada.',
      image: '/cases/case-5.jpg',
      tags: ['React Native', 'GraphQL', 'MongoDB'],
      stats: {
        consultations: '25k+',
        doctors: '500+',
      },
    },
    {
      id: 6,
      title: 'Marketplace B2B',
      client: 'Industry Connect',
      description:
        'Marketplace conectando fornecedores e compradores industriais com sistema de cotações e negociação.',
      image: '/cases/case-6.jpg',
      tags: ['Next.js', 'Node.js', 'Redis'],
      stats: {
        suppliers: '2k+',
        volume: 'R$ 10M+',
      },
    },
  ]

  return (
    <section id="cases" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
            Cases de Sucesso
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-brand-orange"></div>
          <p className="text-lg leading-relaxed text-dark/60">
            Alguns dos projetos que desenvolvemos e que estão transformando negócios
          </p>
        </div>

        {/* Cases Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => (
            <article
              key={caseItem.id}
              className="group relative overflow-hidden rounded-button border border-dark/5 bg-dark/5 backdrop-blur-sm transition-smooth hover:border-brand-orange/50 hover:bg-dark/10"
            >
              {/* Gradient Blur */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-button bg-brand-orange opacity-0 blur-3xl transition-opacity group-hover:opacity-10"></div>

              {/* Image Placeholder */}
              <div className="aspect-video w-full bg-gradient-to-br from-brand-orange/10 via-dark to-brand-orange-light/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <i className="fa-jelly fa-image fa-3x mx-auto text-brand-orange opacity-50"></i>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="mb-2 text-sm font-black tracking-wider text-brand-orange">
                  {caseItem.client}
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">
                  {caseItem.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-dark/60">{caseItem.description}</p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-button border border-dark/10 bg-dark/5 px-3 py-1 text-xs font-medium text-dark/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-dark/5 pt-4">
                  {Object.entries(caseItem.stats).map(([key, value], statIndex) => (
                    <div key={statIndex}>
                      <div className="text-lg font-black text-brand-orange">{value}</div>
                      <div className="text-xs font-medium tracking-wide text-dark/50 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 text-lg font-black text-brand-orange transition-colors hover:text-brand-orange-light"
          >
            <span>Quer resultados assim para seu negócio?</span>
            <i className="fa-jelly fa-arrow-right fa-lg transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
