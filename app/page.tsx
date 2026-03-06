'use client'

import { useEffect, useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import Image from 'next/image'

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHoveringCard, setIsHoveringCard] = useState(false)

  useEffect(() => {
    // Prevent browser scroll restoration and ensure page loads at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

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

  const services = [
    {
      title: 'Estratégia',
      description:
        'Definindo a estratégia em torno da execução técnica. Roadmaps flexíveis visando garantir entregas eficientes e pontuais.',
      icon: 'lightbulb',
      iconType: 'fa-jelly',
    },
    {
      title: 'Design',
      description:
        'Criando experiências de usuário simples e intuitivas e interfaces visualmente atraentes, adaptadas para atender às necessidades do negócio.',
      icon: 'palette',
      iconType: 'fa-jelly',
    },
    {
      title: 'Desenvolvimento',
      description:
        'Construindo produtos Web e Mobile de última geração, eficientes, confiáveis e escaláveis que são incríveis e funcionam ainda melhor.',
      icon: 'code',
      iconType: 'fa-jelly',
    },
    {
      title: 'Testes',
      description:
        'Elaborando estratégias de teste completas para garantir a qualidade do produto, visando a detecção precoce de problemas e confiabilidade.',
      icon: 'gauge',
      iconType: 'fa-jelly',
    },
    {
      title: 'Lançamento',
      description: 'O início de uma jornada de evolução e iteração contínuas.',
      icon: 'check',
      iconType: 'fa-jelly',
    },
    {
      title: 'Manutenção',
      description:
        'Suporte contínuo e melhorias constantes para garantir que seu produto permaneça atualizado e funcionando perfeitamente.',
      icon: 'arrows-rotate',
      iconType: 'fa-jelly',
    },
  ]

  return (
    <div className="relative bg-white">
      {/* Custom Cursor */}
      {isHoveringCard && (
        <div
          className="pointer-events-none fixed z-50 flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white shadow-xl transition-opacity duration-200"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            outline: '5px solid rgba(255, 255, 255, 0.2)',
            outlineOffset: '0px',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
        >
          Ver case
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </div>
      )}
      {/* Floating Image Container - Outside sections but not fixed */}
      <div className="pointer-events-none absolute right-0 top-0 z-40 h-screen w-full lg:block hidden">
        <style jsx>{`
          @keyframes rotateAndSlide {
            from {
              opacity: 0;
              transform: rotate(-60deg) translateY(-180px) translateX(-50px);
            }
            to {
              opacity: 1;
              transform: rotate(-25deg) translateY(20px) translateX(-100px);
            }
          }
          .rotate-slide {
            animation: rotateAndSlide 2.5s cubic-bezier(0.11, 0, 0, 1) forwards;
            transform-origin: -400px center;
            will-change: transform, opacity;
          }
          .delay-500 { animation-delay: 0.5s; }
        `}</style>

        <div className="rotate-slide delay-500 absolute right-0 top-0 opacity-0">
          {/* Orange glow effects behind image */}
          <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand-orange/30 blur-[120px]"></div>
          <div className="absolute -right-10 top-40 h-64 w-64 rounded-full bg-brand-orange-light/40 blur-[100px]"></div>

          <Image
            src="/img-home-hero-device.png"
            alt="Phurshell Mobile Apps"
            width={500}
            height={500}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* New Hero Section */}
      <section className="relative bg-white py-16 sm:py-24">
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideUpWord {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          .slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.4s; }
          .delay-200 { animation-delay: 0.5s; }
          .delay-300 { animation-delay: 0.6s; }
          .delay-400 { animation-delay: 0.7s; }

          :global(.word-wrapper) {
            display: inline-block;
            overflow: hidden;
            vertical-align: bottom;
            padding-bottom: 0.05em;
          }
          :global(.word) {
            display: inline-block;
            opacity: 0;
            animation: slideUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          :global(.word-delay-1) { animation-delay: 0.1s; }
          :global(.word-delay-2) { animation-delay: 0.15s; }
          :global(.word-delay-3) { animation-delay: 0.2s; }
          :global(.word-delay-4) { animation-delay: 0.25s; }
          :global(.word-delay-5) { animation-delay: 0.3s; }
          :global(.word-delay-6) { animation-delay: 0.35s; }
          :global(.word-delay-7) { animation-delay: 0.4s; }
          :global(.word-delay-8) { animation-delay: 0.45s; }
          :global(.word-delay-9) { animation-delay: 0.5s; }
          :global(.word-delay-10) { animation-delay: 0.55s; }
          :global(.word-delay-11) { animation-delay: 0.6s; }
          :global(.word-delay-12) { animation-delay: 0.65s; }
          :global(.word-delay-13) { animation-delay: 0.7s; }
          :global(.word-delay-14) { animation-delay: 0.75s; }
          :global(.word-delay-15) { animation-delay: 0.8s; }
          :global(.word-delay-16) { animation-delay: 0.85s; }
          :global(.word-delay-17) { animation-delay: 0.9s; }
          :global(.word-delay-18) { animation-delay: 0.95s; }
          :global(.word-delay-19) { animation-delay: 1.0s; }
          :global(.word-delay-20) { animation-delay: 1.05s; }
          :global(.word-delay-21) { animation-delay: 1.1s; }
          :global(.word-delay-22) { animation-delay: 1.15s; }
          :global(.word-delay-23) { animation-delay: 1.2s; }
          :global(.word-delay-24) { animation-delay: 1.25s; }
          :global(.word-delay-25) { animation-delay: 1.3s; }
          :global(.word-delay-26) { animation-delay: 1.35s; }
        `}</style>

        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="lg:max-w-2xl">
            {/* Main Title */}
            <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
              <span className="word-wrapper"><span className="word word-delay-1">Construímos</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-2">produtos</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-3">digitais</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-4">que</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-5">transformam</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-6">ideias</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-7">em</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-8">negócios</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-9">reais.</span></span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-xl leading-relaxed text-dark/70 sm:text-2xl lg:max-w-xl">
              <span className="word-wrapper"><span className="word word-delay-10">Desde</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-11">2015</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-12">construindo</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-13">produtos</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-14">digitais</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-15">sob</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-16">medida</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-17">para</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-18">startups</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-20">empresas</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-21">que</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-22">querem</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-23">crescer</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-24">com</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-25">tecnologia.</span></span>
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <span className="word word-delay-26" style={{ display: 'inline-block' }}>
                <TransitionLink
                  href="/contato"
                  className="group inline-flex items-center gap-3 rounded-button bg-brand-orange px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-brand-orange/30 transition-all duration-300 hover:scale-105 hover:bg-brand-orange-light hover:shadow-brand-orange/50"
                >
                  Solicitar proposta
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
              </span>
            </div>

            {/* Mobile Image */}
            <div className="mt-12 flex justify-center lg:hidden">
              <div className="relative w-[280px] sm:w-[350px]" style={{ transform: 'rotate(-25deg)' }}>
                <Image
                  src="/img-home-hero-device.png"
                  alt="Phurshell Mobile Apps"
                  width={350}
                  height={350}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Serviços */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
            Especialistas em produto digital,
            <br />
            do conceito ao lançamento
          </h2>
          <p className="mb-16 max-w-4xl text-xl leading-relaxed text-dark/60">
            Nossos serviços abrangem todo o ciclo de vida do produto, desde estratégia e design até
            implantação e suporte pós-lançamento.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-button border border-dark/10 bg-white p-6"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className={`${service.iconType} fa-${service.icon} fa-xl text-brand-orange`}></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">{service.title}</h3>
                <p className="text-xl leading-relaxed text-dark/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel - Dark Section */}
      <section className="relative overflow-hidden bg-white pb-12">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>

        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Card Container */}
          <div className="overflow-hidden rounded-button bg-[#1a1a1a] px-10 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
            {/* Header */}
            <div className="mb-16">
              <p className="mb-4 text-lg font-bold uppercase tracking-wider text-white/50">
                Alguns de nossos clientes
              </p>
              <h2 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Empresas ambiciosas
                <br />
                que ajudamos a escalar
              </h2>
            </div>

            {/* Logo Carousel */}
            <div className="relative">
              {/* Gradient overlays */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent"></div>
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent"></div>

              {/* Scrolling container */}
              <div className="flex overflow-hidden">
                <div className="animate-scroll flex gap-16">
                  {/* First set of logos */}
                  {[2, 1, 3, 4, 5, 6].map((num) => (
                    <div key={`first-${num}`} className="relative h-16 w-40 flex-shrink-0 sm:h-20 sm:w-48">
                      <Image
                        src={`/clients/img-partner-${num}.png`}
                        alt={`Cliente parceiro da Phurshell`}
                        fill
                        sizes="200px"
                        className="object-contain brightness-0 invert opacity-60"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[2, 1, 3, 4, 5, 6].map((num) => (
                    <div key={`second-${num}`} className="relative h-16 w-40 flex-shrink-0 sm:h-20 sm:w-48">
                      <Image
                        src={`/clients/img-partner-${num}.png`}
                        alt={`Cliente parceiro da Phurshell`}
                        fill
                        sizes="200px"
                        className="object-contain brightness-0 invert opacity-60"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <div className="mb-12">
            <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
              Projetos que transformamos em realidade
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até
              o lançamento e crescimento no mercado.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="space-y-8">
            {[...cases.filter(c => c.name === 'Diag'), ...cases.filter(c => c.name === 'Diag' || c.name === 'Psiapp')].map((caseItem, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-button border ${
                  index === 0
                    ? 'border-transparent bg-[#8046FB] group relative'
                    : 'border-dark/10 bg-white transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg'
                }`}
                style={index === 0 ? { cursor: 'none' } : {}}
                onMouseMove={index === 0 ? (e) => {
                  setCursorPosition({ x: e.clientX, y: e.clientY })
                } : undefined}
                onMouseEnter={index === 0 ? () => setIsHoveringCard(true) : undefined}
                onMouseLeave={index === 0 ? () => setIsHoveringCard(false) : undefined}
              >
                {index === 0 ? (
                  // First card - Vertical centered layout with image at bottom
                  <div className="relative flex flex-col items-center gap-8 p-12 pt-12 pb-0 sm:p-16 sm:pt-16 sm:pb-0 lg:p-20 lg:pt-20 lg:pb-0 text-center">
                    {/* Logo */}
                    <Image
                      src="/img-home-icon-diag.png"
                      alt={caseItem.name}
                      width={120}
                      height={40}
                      sizes="120px"
                      loading="lazy"
                      className="h-auto relative z-10"
                    />

                    {/* Title and Description with reduced spacing */}
                    <div className="flex flex-col items-center gap-3 relative z-10 mb-12">
                      {/* Title */}
                      <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                        Aplicativo de gestão clínica para médicos
                      </h3>

                      {/* Description */}
                      <p className="text-xl leading-relaxed text-white/90 max-w-3xl">
                        {caseItem.description}
                      </p>
                    </div>

                    {/* Screenshot - Positioned at bottom */}
                    <div className="relative w-full flex items-end justify-center mt-auto">
                      <Image
                        src="/img-home-case-diag.png"
                        alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                        loading="lazy"
                        className="h-auto w-full max-w-4xl"
                      />
                    </div>
                  </div>
                ) : (
                  // Other cards - Original horizontal layout
                  <div className="grid grid-cols-1 items-center gap-12 p-12 sm:p-16 lg:grid-cols-2 lg:gap-16 lg:p-20">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <Image
                            src={caseItem.icon}
                            alt={caseItem.name}
                            width={80}
                            height={80}
                            sizes="80px"
                            loading="lazy"
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

                      {/* O que fizemos */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-wider text-dark/60">
                          O que fizemos?
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="rounded-full border border-dark/20 px-4 py-2 text-sm font-bold text-dark"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Screenshot */}
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={caseItem.screenshot}
                        alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                        width={600}
                        height={800}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                        loading="lazy"
                        className="h-auto w-full max-w-md transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            {/* Testimonial */}
            <div className="mb-12 text-center">
              <div className="relative mb-6 flex justify-center">
                <i className="fa-solid fa-quote-left fa-3x text-brand-orange"></i>
              </div>
              <blockquote className="text-3xl leading-tight text-dark sm:text-4xl">
                "Foi uma empresa muito parceira nossa, porque eles contribuíram não só no
                desenvolvimento, mas também com ideias pro negócio. Deram muito suporte pra gente."
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src="/img-testimonial-autoday.png"
                  alt="Foto de Alec Maia, fundador da AutoDay"
                  width={80}
                  height={80}
                  sizes="80px"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-1 text-xl font-black text-dark">Alec Maia</h3>
                <p className="text-base font-bold text-dark/70">Ceo da Autoday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Card Container */}
          <div className="rounded-button bg-brand-orange/10 p-8 shadow-sm sm:p-12 lg:p-16">
            {/* Content Grid */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_350px]">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <p className="flex items-center gap-3 text-lg font-black uppercase tracking-wider text-brand-orange">
                  <i className="fa-jelly fa-comments fa-xl"></i>
                  ENTRAR EM CONTATO
                </p>
                <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                  Receba sua proposta hoje mesmo
                </h2>
                <p className="text-xl leading-relaxed text-dark/70">
                  Assim que você enviar o formulário de solicitação de proposta, o Gustavo entrará em contato para agendar uma conversa e entender melhor as necessidades do seu projeto. Com base nesse primeiro contato, geramos uma proposta inicial personalizada para você ter uma visão clara dos investimentos envolvidos e do escopo do trabalho. Dessa forma, podemos iniciar rapidamente o processo de desenvolvimento e transformar sua ideia em realidade.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <TransitionLink
                    href="/contato"
                    className="group inline-flex items-center justify-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-base font-black tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
                  >
                    Solicitar proposta
                    <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                  </TransitionLink>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="order-first lg:order-last">
                <div className="relative overflow-hidden rounded-button">
                  <Image
                    src="/img-cta.png"
                    alt="Gustavo Bittar, fundador e líder de desenvolvimento mobile da Phurshell"
                    width={350}
                    height={466}
                    sizes="(max-width: 1024px) 100vw, 350px"
                    loading="lazy"
                    className="h-auto w-full"
                  />
                  {/* Overlay with Name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-black text-white">Gustavo Bittar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
