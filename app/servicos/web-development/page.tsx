import TransitionLink from '@/components/TransitionLink'
import ProcessCarousel from '@/components/ProcessCarousel'
import ProjectTimeline from '@/components/ProjectTimeline'

export default function WebDevelopmentPage() {
  const benefits = [
    {
      icon: 'desktop',
      title: 'Responsivo',
      description: 'Sites e aplicações que se adaptam perfeitamente a qualquer dispositivo e tamanho de tela.',
    },
    {
      icon: 'bolt',
      title: 'Performance',
      description: 'Carregamento ultrarrápido com otimização de código, imagens e recursos para máxima velocidade.',
    },
    {
      icon: 'magnifying-glass',
      title: 'SEO Otimizado',
      description: 'Estrutura otimizada para mecanismos de busca, aumentando sua visibilidade online.',
    },
    {
      icon: 'code',
      title: 'Código Limpo',
      description: 'Desenvolvimento com as melhores práticas, facilitando manutenção e escalabilidade.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Briefing & Planejamento',
      description:
        'Entendemos suas necessidades, público-alvo e objetivos para definir a melhor estratégia.',
    },
    {
      step: '02',
      title: 'Design & Prototipagem',
      description:
        'Criamos wireframes e protótipos navegáveis para validar a experiência antes do desenvolvimento.',
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description:
        'Codificamos com tecnologias modernas como Next.js, React e TypeScript para máxima performance.',
    },
    {
      step: '04',
      title: 'Testes & QA',
      description:
        'Testamos em múltiplos dispositivos e navegadores garantindo qualidade e compatibilidade.',
    },
    {
      step: '05',
      title: 'Deploy & Lançamento',
      description:
        'Publicamos em servidores otimizados com SSL, CDN e todas as configurações de segurança.',
    },
    {
      step: '06',
      title: 'Suporte & Manutenção',
      description:
        'Acompanhamento contínuo com atualizações, melhorias e suporte técnico especializado.',
    },
  ]

  const timelinePhases = [
    {
      phase: 'Planejamento',
      color: 'gray' as const,
      steps: [
        {
          id: 'briefing',
          label: 'Briefing',
          description: 'Reunião inicial para entender objetivos, público-alvo e requisitos do projeto.',
        },
        {
          id: 'research',
          label: 'Pesquisa',
          description: 'Análise de concorrentes, referências de mercado e melhores práticas do setor.',
        },
        {
          id: 'sitemap',
          label: 'Sitemap',
          description: 'Estrutura de páginas e fluxo de navegação do site ou aplicação web.',
        },
      ],
    },
    {
      phase: 'Design',
      color: 'pink' as const,
      steps: [
        {
          id: 'wireframes',
          label: 'Wireframes',
          description: 'Esboços estruturais das páginas definindo layout e disposição de elementos.',
        },
        {
          id: 'ui-design',
          label: 'UI Design',
          description: 'Design visual completo com paleta de cores, tipografia e componentes.',
        },
        {
          id: 'prototype',
          label: 'Protótipo',
          description: 'Protótipo interativo navegável para validar fluxos e experiência do usuário.',
        },
      ],
    },
    {
      phase: 'Desenvolvimento',
      color: 'teal' as const,
      steps: [
        {
          id: 'frontend',
          label: 'Frontend',
          description: 'Desenvolvimento da interface com React, Next.js e integração com APIs.',
        },
        {
          id: 'backend',
          label: 'Backend',
          description: 'Desenvolvimento de APIs, banco de dados e lógica de negócio do servidor.',
        },
        {
          id: 'integration',
          label: 'Integrações',
          description: 'Integração com sistemas externos, pagamentos, CRM e ferramentas de terceiros.',
        },
      ],
    },
    {
      phase: 'Lançamento',
      color: 'purple' as const,
      steps: [
        {
          id: 'testing',
          label: 'Testes',
          description: 'Testes de funcionalidade, performance, compatibilidade e segurança.',
        },
        {
          id: 'deploy',
          label: 'Deploy',
          description: 'Publicação em ambiente de produção com configurações otimizadas.',
        },
        {
          id: 'monitoring',
          label: 'Monitoramento',
          description: 'Acompanhamento de métricas, performance e comportamento dos usuários.',
        },
      ],
    },
  ]

  const technologies = [
    { name: 'Next.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32">
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>

        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-block w-fit rounded-button border border-brand-orange/30 bg-brand-orange/10 px-4 py-2">
                <span className="text-sm font-black tracking-wider text-brand-orange">
                  Desenvolvimento Web
                </span>
              </div>

              <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
                Aplicações web{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                    modernas
                  </span>
                </span>{' '}
                e escaláveis
              </h1>

              <p className="mb-8 text-pretty text-xl leading-relaxed text-dark/70">
                Desenvolvemos sites, plataformas SaaS e dashboards administrativos com as tecnologias
                mais modernas do mercado. Performance, SEO e experiência do usuário no centro de tudo.
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <p className="mb-4 text-sm font-black tracking-wider text-dark/60">
                  TECNOLOGIAS QUE USAMOS
                </p>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-button border border-dark/10 bg-dark/5 px-4 py-2"
                    >
                      <span>{tech.icon}</span>
                      <span className="text-sm font-black text-dark">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-sm font-bold tracking-wider text-white shadow-xl shadow-brand-orange/30 transition-smooth hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-2xl"
                >
                  <i className="fa-jelly fa-rocket"></i>
                  Começar Projeto
                </a>
                <TransitionLink
                  href="/cases"
                  className="inline-flex items-center gap-2 rounded-button border-2 border-dark/10 bg-transparent px-8 py-4 text-sm font-black tracking-wider text-dark transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
                >
                  Ver Cases
                  <i className="fa-jelly fa-arrow-right"></i>
                </TransitionLink>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-button border border-dark/10 bg-white p-6 transition-all hover:border-brand-orange hover:shadow-lg"
                    style={{
                      transform: index % 2 === 0 ? 'translateY(20px)' : 'translateY(-20px)',
                    }}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10 transition-transform group-hover:scale-110">
                      <i className={`fa-jelly fa-${benefit.icon} fa-lg text-brand-orange`}></i>
                    </div>
                    <h3 className="mb-2 text-lg font-black text-dark">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-dark/60">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Carousel */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
              Nosso Processo
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              Do planejamento ao lançamento, seguimos um processo estruturado que garante qualidade e
              resultados excepcionais.
            </p>
          </div>
          <ProcessCarousel items={process} />
        </div>
      </section>

      {/* Timeline */}
      <ProjectTimeline phases={timelinePhases} />

      {/* Features Grid */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
              O que entregamos
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-dark/70">
              Soluções web completas e profissionais que elevam sua presença digital
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: 'window',
                title: 'Landing Pages',
                description:
                  'Páginas de alta conversão otimizadas para capturar leads e apresentar seus produtos.',
              },
              {
                icon: 'cart-shopping',
                title: 'E-commerce',
                description:
                  'Lojas online completas com carrinho, pagamento e gestão de produtos integrada.',
              },
              {
                icon: 'chart-line',
                title: 'Dashboards',
                description:
                  'Painéis administrativos intuitivos para gestão de dados, métricas e operações.',
              },
              {
                icon: 'building',
                title: 'Sites Corporativos',
                description:
                  'Presença profissional na web com design moderno e conteúdo bem estruturado.',
              },
              {
                icon: 'cloud',
                title: 'Plataformas SaaS',
                description:
                  'Aplicações web escaláveis com autenticação, assinaturas e múltiplos usuários.',
              },
              {
                icon: 'newspaper',
                title: 'Portais & Blogs',
                description:
                  'Plataformas de conteúdo com CMS, categorias, busca e otimização para SEO.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-button border border-dark/10 bg-white p-8 transition-all hover:border-brand-orange hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 transition-transform group-hover:scale-110">
                  <i className={`fa-jelly fa-${feature.icon} fa-2x text-brand-orange`}></i>
                </div>
                <h3 className="mb-3 text-2xl font-black text-dark transition-colors group-hover:text-brand-orange">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-dark/60">{feature.description}</p>
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
            Vamos criar algo incrível juntos?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Entre em contato e descubra como podemos transformar sua presença digital
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
            >
              <i className="fa-jelly fa-calendar fa-lg"></i>
              Agendar Conversa
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-transparent px-8 py-4 text-sm font-black tracking-wider text-white backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:bg-white hover:text-brand-orange"
            >
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              Chat no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
