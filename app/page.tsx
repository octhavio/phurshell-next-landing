'use client'

import { useEffect, useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import Image from 'next-image-export-optimizer'
import WhyPhurshell from '@/components/WhyPhurshell'
import ContactCTA from '@/components/ContactCTA'
import ClientLogosCarousel from '@/components/ClientLogosCarousel'

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(0)

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
      title: 'Descoberta de Produto',
      description:
        'Antes de escrever uma linha de código, mergulhamos no seu negócio para entender desafios, oportunidades e objetivos. Definimos juntos a estratégia técnica e funcional do produto, estruturando o escopo do MVP, escolhendo a arquitetura ideal, mapeando integrações necessárias e criando um roadmap realista de desenvolvimento. Esse processo evita retrabalho, reduz riscos e garante que o produto seja construído da forma certa desde o início.',
      icon: 'lightbulb',
      iconType: 'fa-jelly',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop',
      cards: [
        {
          title: 'Definição de MVP',
          description: 'Escopo mínimo viável para validar a ideia com usuários reais.',
          icon: 'flag',
          iconType: 'jelly',
        },
        {
          title: 'Arquitetura Técnica',
          description: 'Escolha das tecnologias e estrutura do sistema.',
          icon: 'city',
          iconType: 'jelly',
        },
        {
          title: 'Roadmap de Produto',
          description: 'Planejamento de entregas e evolução do produto.',
          icon: 'map',
          iconType: 'jelly',
        },
      ],
    },
    {
      title: 'UX/UI para Aplicativos',
      description:
        'Desenhamos interfaces que seus usuários vão adorar usar. Nosso processo começa com pesquisa e mapeamento de jornadas, passa por wireframes interativos e evolui para um design system completo e responsivo. Cada tela é pensada para resolver problemas reais, facilitar tarefas e criar experiências memoráveis — seja no mobile ou web. O resultado é um produto bonito, funcional e que converte usuários em fãs.',
      icon: 'palette',
      iconType: 'fa-jelly',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop',
      cards: [
        {
          title: 'Wireframes',
          description: 'Protótipos interativos de baixa e alta fidelidade.',
          icon: 'sidebar',
          iconType: 'jelly',
        },
        {
          title: 'Design System',
          description: 'Biblioteca de componentes e padrões visuais.',
          icon: 'sliders',
          iconType: 'jelly',
        },
        {
          title: 'UI Design',
          description: 'Interface visual responsiva para mobile e web.',
          icon: 'mobile',
          iconType: 'jelly',
        },
      ],
    },
    {
      title: 'Desenvolvimento de Apps',
      description:
        'Transformamos design em código de alta qualidade. Desenvolvemos aplicativos nativos iOS e Android, apps React Native para lançamento multiplataforma, e plataformas web modernas com Next.js ou React. Nosso código é limpo, escalável e preparado para crescer junto com seu negócio. Cuidamos de toda infraestrutura cloud, integrações com APIs externas, autenticação, pagamentos e tudo mais que seu produto precisar para operar em produção.',
      icon: 'code',
      iconType: 'fa-jelly',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop',
      cards: [
        {
          title: 'iOS',
          description: 'Apps nativos para iPhone e iPad com integração completa ao ecossistema Apple.',
          icon: 'apple',
          iconType: 'brands',
        },
        {
          title: 'Android',
          description: 'Apps nativos otimizados para a diversidade de dispositivos Android.',
          icon: 'android',
          iconType: 'brands',
        },
        {
          title: 'Web',
          description: 'Plataformas web responsivas e dashboards interativos.',
          icon: 'desktop',
          iconType: 'jelly',
        },
        {
          title: 'PWA',
          description: 'Apps web progressivos com capacidade de instalação.',
          icon: 'mobile',
          iconType: 'jelly',
        },
      ],
    },
    {
      title: 'Evolução e Suporte de Produto',
      description:
        'O lançamento é só o começo. Continuamos ao lado do seu produto, monitorando performance, corrigindo bugs, otimizando funcionalidades e desenvolvendo novas features baseadas no feedback dos usuários. Oferecemos suporte técnico dedicado, atualizações de segurança, melhorias de performance e ajustes para garantir que seu app evolua junto com as necessidades do mercado e dos seus clientes.',
      icon: 'arrows-rotate',
      iconType: 'fa-jelly',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
      cards: [
        {
          title: 'Monitoramento',
          description: 'Análise contínua de performance e comportamento dos usuários.',
          icon: 'desktop',
          iconType: 'jelly',
        },
        {
          title: 'Correção de Bugs',
          description: 'Identificação e resolução rápida de problemas técnicos.',
          icon: 'bug',
          iconType: 'jelly',
        },
        {
          title: 'Novas Funcionalidades',
          description: 'Desenvolvimento de features baseadas em feedback.',
          icon: 'sparkles',
          iconType: 'jelly',
        },
        {
          title: 'Atualizações',
          description: 'Manutenção de segurança e compatibilidade do sistema.',
          icon: 'bell',
          iconType: 'jelly',
        },
      ],
    },
  ]

  return (
    <div className="relative bg-white">
      {/* Custom Cursor */}
      {isHoveringCard && (
        <div
          className="pointer-events-none fixed z-50 flex items-center gap-2 rounded-button bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white shadow-xl transition-opacity duration-200"
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
      {/* New Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-orange/10 via-brand-orange/5 to-white py-16 sm:py-24 overflow-hidden -mt-28 pt-40 sm:pt-48">
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

          @keyframes rotateAndSlide {
            from {
              opacity: 0;
              transform: rotate(-60deg) translateY(-180px) translateX(-50px);
            }
            to {
              opacity: 1;
              transform: rotate(-25deg) translateY(40px) translateX(-240px);
            }
          }
          @keyframes rotateAndSlideMedium {
            from {
              opacity: 0;
              transform: rotate(-60deg) translateY(-180px) translateX(-50px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: rotate(-25deg) translateY(150px) translateX(-50px) scale(0.95);
            }
          }
          @keyframes rotateAndSlideSmallMedium {
            from {
              opacity: 0;
              transform: rotate(-60deg) translateY(-180px) translateX(-50px) scale(0.7);
            }
            to {
              opacity: 1;
              transform: rotate(-25deg) translateY(240px) translateX(290px) scale(0.7);
            }
          }
          @keyframes rotateAndSlideMobile {
            from {
              opacity: 0;
              transform: rotate(-60deg) translateY(-100px) translateX(0px) scale(0.5);
            }
            to {
              opacity: 1;
              transform: rotate(-25deg) translateY(80px) translateX(20px) scale(0.5);
            }
          }
          @keyframes rotateAndSlideTablet {
            from {
              opacity: 0;
              transform: rotate(-60deg) translateY(-180px) translateX(-50px) scale(0.7);
            }
            to {
              opacity: 1;
              transform: rotate(-15deg) translateY(185px) translateX(340px) scale(0.7);
            }
          }
          .rotate-slide {
            animation: rotateAndSlide 2.5s cubic-bezier(0.11, 0, 0, 1) forwards;
            transform-origin: -400px center;
            will-change: transform, opacity;
          }
          @media (max-width: 1549px) and (min-width: 1320px) {
            .rotate-slide {
              animation: rotateAndSlideMedium 2.5s cubic-bezier(0.11, 0, 0, 1) forwards;
              transform-origin: -400px center;
            }
          }
          @media (max-width: 1319px) and (min-width: 1024px) {
            .rotate-slide {
              animation: rotateAndSlideSmallMedium 2.5s cubic-bezier(0.11, 0, 0, 1) forwards;
              transform-origin: -400px center;
            }
          }
          @media (max-width: 1023px) {
            .rotate-slide {
              animation: rotateAndSlideTablet 2.5s cubic-bezier(0.11, 0, 0, 1) forwards;
              transform-origin: -400px center;
            }
          }
          @media (max-width: 767px) {
            .rotate-slide {
              display: none;
            }
          }
          .delay-500 { animation-delay: 0.5s; }

          /* Disable animations on mobile for better performance */
          @media (max-width: 767px) {
            :global(.word) {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
            .fade-in {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
            .slide-up {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>

        {/* Floating Image - Inside Hero */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-full">
          <div className="rotate-slide delay-500 absolute right-0 top-0 opacity-0">
            {/* Orange glow effects behind image */}
            <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand-orange/30 blur-[120px] sm:block hidden"></div>
            <div className="absolute -right-10 top-40 h-64 w-64 rounded-full bg-brand-orange-light/40 blur-[100px] sm:block hidden"></div>

            <Image
              src="/images/img-home-hero-device.png"
              alt="Phurshell Mobile Apps"
              width={500}
              height={500}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="md:max-w-md lg:max-w-2xl">
            {/* Main Title */}
            <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
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
              <span className="word-wrapper"><span className="word word-delay-12">ajudamos</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-13">startups</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-14">e</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-15">empresas</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-16">a</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-17">lançar</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-18">aplicativos</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-20">plataformas</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-21">digitais</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-22">que</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-23">crescem</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-24">com</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-25">o</span></span>{' '}
              <span className="word-wrapper"><span className="word word-delay-26">negócio.</span></span>
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <span className="word word-delay-27" style={{ display: 'inline-block' }}>
                <TransitionLink
                  href="/contato"
                  className="group inline-flex items-center gap-3 rounded-button bg-brand-orange px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-brand-orange/30 transition-all duration-300 hover:scale-105 hover:bg-brand-orange-light hover:shadow-brand-orange/50"
                >
                  Solicitar proposta
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Clients Carousel - Dark Section */}
      <section className="relative overflow-hidden bg-white pb-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <ClientLogosCarousel
            logos={[2, 1, 3, 4, 5, 6]}
            subtitle="Alguns de nossos clientes"
            title={
              <>
                Empresas ambiciosas
                <br />
                que trabalhamos em conjunto
              </>
            }
          />
        </div>
      </section>

      {/* Principais Serviços */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <p className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
            Nossos principais serviços
          </p>
          <h2 className="mb-6 max-w-4xl text-5xl font-black tracking-tight text-dark sm:text-6xl">
            Como ajudamos empresas a construir produtos digitais
          </h2>
          <p className="mb-16 max-w-4xl text-xl leading-relaxed text-dark/60">
            Cuidamos de todo o ciclo de desenvolvimento — da estratégia inicial até a evolução contínua do seu aplicativo ou plataforma.
          </p>

          {/* Accordion List */}
          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-dark/10"
              >
                {/* Accordion Header - Clickable */}
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-brand-orange"
                >
                  <div className="flex items-center gap-6">
                    <i className={`${service.iconType} fa-${service.icon} fa-2xl text-brand-orange`}></i>
                    <h3 className="text-2xl font-black text-dark sm:text-3xl">{service.title}</h3>
                  </div>
                  <i className={`fa-solid fa-chevron-down text-2xl text-brand-orange transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`}></i>
                </button>

                {/* Accordion Content - Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === index ? 'max-h-[1000px] pb-12' : 'max-h-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 pr-8">
                    {/* Left Column - Text Content */}
                    <div>
                      <p className="text-lg leading-relaxed text-dark/70 mb-8">
                        {service.description}{' '}
                        <TransitionLink
                          href={index === 2 ? '/servicos/desenvolvimento-de-apps' : '#'}
                          className="text-base font-bold text-brand-orange"
                        >
                          Ver mais
                        </TransitionLink>
                      </p>

                      {/* Service Cards - Only for Desenvolvimento de Apps */}
                      {service.cards && (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.cards.map((card: any, cardIndex: number) => (
                              <div
                                key={cardIndex}
                                className="rounded-button border border-dark/10 bg-white p-4"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <i className={`fa-${card.iconType} fa-${card.icon} fa-xl text-brand-orange`}></i>
                                  <h4 className="text-lg font-black text-dark">{card.title}</h4>
                                </div>
                                <p className="text-lg leading-relaxed text-dark/60">{card.description}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right Column - Image */}
                    <div className="hidden lg:block">
                      <div className="relative h-full min-h-[300px] overflow-hidden rounded-button">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="30vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <div className="mb-12">
            <p className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
              Alguns cases
            </p>
            <h2 className="mb-6 max-w-4xl text-5xl font-black tracking-tight text-dark sm:text-6xl">
              Produtos digitais que ajudamos a levar do zero ao mercado
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Aplicativos e plataformas que começaram como ideia e hoje atendem milhares de usuários.
            </p>
          </div>

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
                        <Image
                          src="/images/img-home-icon-psiapp.png"
                          alt={caseItem.name}
                          width={120}
                          height={40}
                          sizes="120px"
                          loading="lazy"
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
                          <Image
                            src="/images/img-home-case-psiapp.png"
                            alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                            loading="lazy"
                            className="h-auto w-full max-w-4xl transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </TransitionLink>
                  ) : index === 2 ? (
                    <div className="relative flex flex-col items-center gap-6 p-12 pt-8 pb-0 sm:p-16 sm:pt-10 sm:pb-0 lg:p-20 lg:pt-12 lg:pb-0 text-center">
                      {/* Logo */}
                      <Image
                        src="/images/img-home-icon-autoday.png"
                        alt="Autoday"
                        width={120}
                        height={40}
                        sizes="120px"
                        loading="lazy"
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
                        <Image
                          src="/images/img-home-case-autoday.png"
                          alt="Tela do aplicativo Autoday desenvolvido pela Phurshell"
                          width={800}
                          height={600}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                          loading="lazy"
                          className="h-auto w-full max-w-4xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center gap-6 p-12 pt-8 pb-0 sm:p-16 sm:pt-10 sm:pb-0 lg:p-20 lg:pt-12 lg:pb-0 text-center">
                      {/* Logo */}
                      <Image
                        src="/images/img-home-icon-diag.png"
                        alt={caseItem.name}
                        width={120}
                        height={40}
                        sizes="120px"
                        loading="lazy"
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
                        <Image
                          src="/images/img-home-case-diag.png"
                          alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                          width={800}
                          height={600}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                          loading="lazy"
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
                  src="/images/img-testimonial-autoday.png"
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

      {/* Why Phurshell */}
      <WhyPhurshell />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
