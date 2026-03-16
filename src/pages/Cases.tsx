import { useState } from 'react'
import TransitionLink from '../components/TransitionLink'
import ContactCTA from '../components/ContactCTA'
import SEO from '../components/SEO'

export default function Cases() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHoveringCard, setIsHoveringCard] = useState(false)

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'mobile', name: 'Mobile', count: 6 },
    { id: 'web', name: 'Web', count: 4 },
    { id: 'saas', name: 'SaaS', count: 2 },
  ]

  const cases = [
    {
      name: 'Diag',
      icon: '/img-icon-diag.svg',
      description:
        'Prescrições médicas simplificadas. Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico, e conteúdos médicos atualizados para facilitar o dia-a-dia dos médicos.',
      screenshot: '/img-screenshot-diag.png',
      tags: [
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
        'LANDING PAGE',
        'BACKOFFICE',
        'IA',
      ],
    },
    {
      name: 'Psiapp',
      icon: '/img-icon-psiapp.svg',
      description:
        'O aplicativo que conecta psicólogos a pacientes. Desenvolvimento completo dos aplicativos para pacientes e psicólogos, criação do backoffice para gestão e suporte dos atendimentos. Análise de dados para crescimento do projeto e manutenção contínua.',
      screenshot: '/img-screenshot-psiapp.png',
      tags: [
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
        'BACKOFFICE',
      ],
    },
    {
      name: 'MovSpot',
      icon: '/img-icon_movspot.svg',
      description:
        'Tiramos a ideia do papel, estudamos o mercado, criamos a identidade e desenvolvemos a única plataforma que mostra onde os filmes foram gravados na internet.',
      screenshot: '/img-screenshot-movspot.png',
      tags: [
        'PESQUISA DE MERCADO',
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
      ],
    },
    {
      name: 'Autoday',
      icon: '/img-icon_autoday.png',
      description:
        'É uma insurtech especializada no desenvolvimento de soluções de seguros de mobilidade inovadores e acessíveis. O aplicativo que ajuda você a proteger seu carro com um seguro intermitente revolucionário.',
      screenshot: '/img-screenshot-autoday.png',
      tags: ['BACKOFFICE', 'WIREFRAME', 'IDENTIDADE VISUAL', 'INFRAESTRUTURA', 'LANDING PAGE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Bluu',
      icon: '/img-icon_bluu.png',
      description:
        'Aplicativo de saúde preventiva para pets, ajudando tutores a melhorar a saúde de seus bichinhos com atividades e práticas diárias. Além de atendimento veterinário para casos emergenciais.',
      screenshot: '/img-screenshot-bluu.png',
      tags: ['WIREFRAME', 'BACKOFFICE', 'LANDING PAGE', 'IDENTIDADE VISUAL', 'IOS', 'ANDROID'],
    },
    {
      name: 'Devotee',
      icon: '/img-icon_devote_new.png',
      description:
        'Tivemos a honra de tirar do papel o único aplicativo de relacionamento exclusivo para deficientes físicos. Desde a concepção da ideia até o desenvolvimento do iOS e Android.',
      screenshot: '/img-screenshot-devotee.png',
      tags: ['WIREFRAME', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE', 'IDENTIDADE VISUAL'],
    },
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Cases"
        description="Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até o lançamento e crescimento no mercado."
        url="/cases"
      />
      {/* Custom Cursor */}
      {isHoveringCard && (
        <div
          className="pointer-events-none fixed z-[9999] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-black text-dark shadow-xl transition-opacity"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          VER CASE
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 sm:pt-24">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">digitais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">transformamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">realidade</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-7">Conheça</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">alguns</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">dos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">projetos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">desenvolvemos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">zero,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">desde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">concepção</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">da</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">ideia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">até</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">lançamento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">crescimento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">no</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">mercado.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-12 flex items-center gap-6">
            <span className="word word-delay-27" style={{ display: 'inline-block' }}>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </a>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-28" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  {/* Team photo */}
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em desenvolvimento mobile da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-29">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-30">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-31">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-32">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-33">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white pt-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
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

      {/* Cases Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Cards Grid */}
          <div className="space-y-8">
            {cases.filter(c => c.name === 'Diag' || c.name === 'Psiapp' || c.name === 'Autoday').slice(0, 3).map((caseItem, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-button ${
                  index === 0
                    ? 'group relative'
                    : index === 1
                    ? 'group relative'
                    : index === 2
                    ? 'group relative'
                    : 'border border-dark/10 bg-white transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg'
                }`}
                style={
                  index === 0
                    ? {
                        cursor: 'none',
                        background: 'radial-gradient(circle at center bottom, #f5f0ff 0%, #8046FB 70%)'
                      }
                    : index === 1
                    ? {
                        cursor: 'none',
                        background: 'radial-gradient(circle at center bottom, #fff5f0 0%, #FD9773 70%)'
                      }
                    : index === 2
                    ? {
                        cursor: 'none',
                        background: 'radial-gradient(circle at center bottom, #ede5f7 0%, #5E239F 70%)'
                      }
                    : {}
                }
                onMouseMove={index <= 2 ? (e) => {
                  setCursorPosition({ x: e.clientX, y: e.clientY })
                } : undefined}
                onMouseEnter={index <= 2 ? () => setIsHoveringCard(true) : undefined}
                onMouseLeave={index <= 2 ? () => setIsHoveringCard(false) : undefined}
              >
                {index <= 2 ? (
                  // Featured cards - Vertical centered layout with image at bottom
                  index === 1 ? (
                    <TransitionLink href="/cases/psiapp" className="block" style={{ cursor: 'none' }}>
                      <div className="relative flex flex-col items-center gap-6 p-12 pt-8 pb-0 sm:p-16 sm:pt-10 sm:pb-0 lg:p-20 lg:pt-12 lg:pb-0 text-center">
                        {/* Logo */}
                        <img
                          src="/images/img-home-icon-psiapp.png"
                          alt={caseItem.name}
                          width={120}
                          height={40}
                          className="h-auto relative z-10"
                        />

                        {/* Title and Description with reduced spacing */}
                        <div className="flex flex-col items-center gap-3 relative z-10 mb-2">
                          {/* Title */}
                          <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                            O aplicativo que conecta psicólogos a pacientes
                          </h3>

                          {/* Description */}
                          <p className="text-xl leading-relaxed text-white/90 max-w-2xl line-clamp-2">
                            Desenvolvimento completo dos aplicativos para pacientes e psicólogos, backoffice para gestão de atendimentos e análise de dados.
                          </p>
                        </div>

                        {/* Screenshot - Positioned at bottom with hover scale effect */}
                        <div className="relative w-full flex items-end justify-center mt-auto overflow-hidden">
                          <img
                            src="/images/img-home-case-psiapp.png"
                            alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                            width={800}
                            height={600}
                            className="h-auto w-full max-w-4xl transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </TransitionLink>
                  ) : index === 2 ? (
                    <div className="relative flex flex-col items-center gap-6 p-12 pt-8 pb-0 sm:p-16 sm:pt-10 sm:pb-0 lg:p-20 lg:pt-12 lg:pb-0 text-center">
                      {/* Logo */}
                      <img
                        src="/images/img-home-icon-autoday.png"
                        alt="Autoday"
                        width={120}
                        height={40}
                        className="h-auto relative z-10"
                      />

                      {/* Title and Description with reduced spacing */}
                      <div className="flex flex-col items-center gap-3 relative z-10 mb-2">
                        {/* Title */}
                        <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                          Seguro de carro sob demanda e mais acessível
                        </h3>

                        {/* Description */}
                        <p className="text-xl leading-relaxed text-white/90 max-w-2xl line-clamp-2">
                          MVP de insurtech que revolucionou o mercado com seguro intermitente — você paga apenas pelos dias que usar o veículo.
                        </p>
                      </div>

                      {/* Screenshot - Positioned at bottom with hover scale effect */}
                      <div className="relative w-full flex items-end justify-center mt-auto overflow-hidden">
                        <img
                          src="/images/img-home-case-autoday.png"
                          alt="Tela do aplicativo Autoday desenvolvido pela Phurshell"
                          width={800}
                          height={600}
                          className="h-auto w-full max-w-4xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center gap-6 p-12 pt-8 pb-0 sm:p-16 sm:pt-10 sm:pb-0 lg:p-20 lg:pt-12 lg:pb-0 text-center">
                      {/* Logo */}
                      <img
                        src="/images/img-home-icon-diag.png"
                        alt={caseItem.name}
                        width={120}
                        height={40}
                        className="h-auto relative z-10"
                      />

                      {/* Title and Description with reduced spacing */}
                      <div className="flex flex-col items-center gap-3 relative z-10 mb-2">
                        {/* Title */}
                        <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                          Aplicativo de gestão clínica para médicos
                        </h3>

                        {/* Description */}
                        <p className="text-xl leading-relaxed text-white/90 max-w-2xl line-clamp-2">
                          Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico.
                        </p>
                      </div>

                      {/* Screenshot - Positioned at bottom with hover scale effect */}
                      <div className="relative w-full flex items-end justify-center mt-auto overflow-hidden">
                        <img
                          src="/images/img-home-case-diag.png"
                          alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                          width={800}
                          height={600}
                          className="h-auto w-full max-w-4xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )
                ) : (
                  // Other cards - Original horizontal layout
                  <div className="grid grid-cols-1 items-center gap-12 p-12 sm:p-16 lg:grid-cols-2 lg:gap-16 lg:p-20">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={caseItem.icon}
                            alt={caseItem.name}
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-2xl border border-dark/10"
                          />
                          <h3 className="text-4xl font-black leading-tight text-dark sm:text-5xl">
                            {caseItem.name}
                          </h3>
                        </div>
                        <p className="text-xl leading-relaxed text-dark/60">
                          {caseItem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
