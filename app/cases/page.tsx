'use client'

import { useState } from 'react'
import TransitionLink from '../../src/components/TransitionLink'
import ContactCTA from '../../src/components/ContactCTA'
import CaseCard from '../../src/components/CaseCard'

export default function Cases() {
  const [selectedSegment, setSelectedSegment] = useState('all')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHoveringCard, setIsHoveringCard] = useState(false)

  const cases = [
    {
      name: 'Diag',
      icon: '/images/img-cases-diag-icon.png',
      segment: 'Healthtech',
      description:
        'Prescricoes medicas simplificadas. Plataforma completa de gestao de saude com geracao de prontuarios e receitas medicas, chat com IA para suporte diagnostico, e conteudos medicos atualizados para facilitar o dia-a-dia dos medicos.',
      screenshot: '/images/img-cases-diag-screenshot-1.png',
      screenshot2: '/images/img-cases-diag-screenshot-2.png',
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
      link: '/cases/diag',
    },
    {
      name: 'Psiapp',
      icon: '/images/img-cases-psiapp-icon.png',
      segment: 'Healthtech',
      description:
        'O aplicativo que conecta psicologos a pacientes. Desenvolvimento completo dos aplicativos para pacientes e psicologos, criacao do backoffice para gestao e suporte dos atendimentos. Analise de dados para crescimento do projeto e manutencao continua.',
      screenshot: '/images/img-cases-psiapp-screenshot-1.png',
      screenshot2: '/images/img-cases-psiapp-screenshot-2.png',
      tags: [
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
        'BACKOFFICE',
      ],
      link: '/cases/psiapp',
    },
    {
      name: 'Autoday',
      icon: '/images/img-cases-autoday-icon.png',
      segment: 'Insurtech',
      description:
        'E uma insurtech especializada no desenvolvimento de solucoes de seguros de mobilidade inovadores e acessiveis. O aplicativo que ajuda voce a proteger seu carro com um seguro intermitente revolucionario.',
      screenshot: '/images/img-cases-autoday-screenshot-1.png',
      screenshot2: '/images/img-cases-autoday-screenshot-2.png',
      tags: ['BACKOFFICE', 'WIREFRAME', 'IDENTIDADE VISUAL', 'INFRAESTRUTURA', 'LANDING PAGE', 'IOS', 'ANDROID'],
      link: '/cases/autoday',
    },
    {
      name: 'Bluu',
      icon: '/images/img-cases-bluu-icon.png',
      segment: 'Healthtech',
      description:
        'Aplicativo de saude preventiva para pets, ajudando tutores a melhorar a saude de seus bichinhos com atividades e praticas diarias. Alem de atendimento veterinario para casos emergenciais.',
      screenshot: '/images/img-cases-bluu-screenshot-1.png',
      screenshot2: '/images/img-cases-bluu-screenshot-2.png',
      tags: ['WIREFRAME', 'BACKOFFICE', 'LANDING PAGE', 'IDENTIDADE VISUAL', 'IOS', 'ANDROID'],
    },
    {
      name: 'Novva',
      icon: '/images/img-cases-novva-icon.png',
      segment: 'Educacao',
      description:
        'Aplicativo para alunos americanos que vao ingressar nas universidades e querem conhecer as instituicoes de ensino. Uma plataforma completa que facilita a jornada de descoberta e conexao com as melhores universidades.',
      screenshot: '/images/img-cases-novva-screenshot-1.png',
      screenshot2: '/images/img-cases-novva-screenshot-2.png',
      tags: ['IDENTIDADE VISUAL', 'WIREFRAME', 'IOS', 'ANDROID'],
    },
    {
      name: 'Devotee',
      icon: '/images/img-cases-devotee-icon.png',
      segment: 'Social',
      description:
        'Tivemos a honra de tirar do papel o unico aplicativo de relacionamento exclusivo para deficientes fisicos. Desde a concepcao da ideia ate o desenvolvimento do iOS e Android.',
      screenshot: '/images/img-cases-devotee-screenshot-1.png',
      screenshot2: '/images/img-cases-devotee-screenshot-2.png',
      tags: ['WIREFRAME', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE', 'IDENTIDADE VISUAL'],
    },
    {
      name: '4Traders',
      icon: '/images/img-cases-4traders-icon.png',
      segment: 'Fintech',
      description:
        'Aplicativo de informacoes de mercado para quem investe em acoes. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepcao ate a publicacao.',
      screenshot: '/images/img-cases-4traders-screenshot-1.png',
      screenshot2: '/images/img-cases-4traders-screenshot-2.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'MovSpot',
      icon: '/images/img-cases-movspot-icon.png',
      segment: 'Social',
      description:
        'Tiramos a ideia do papel, estudamos o mercado, criamos a identidade e desenvolvemos a unica plataforma que mostra onde os filmes foram gravados na internet.',
      screenshot: '/images/img-cases-movspot-screenshot-1.png',
      screenshot2: '/images/img-cases-movspot-screenshot-2.png',
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
      name: 'Chefe de Plantao',
      icon: '/images/img-cases-chefe-icon.png',
      segment: 'Healthtech',
      description:
        'Aplicativo que ajuda medicos recem formados com suas consultas. Projeto que construimos todos os produtos, desde a identidade ate todos os aplicativos.',
      screenshot: '/images/img-cases-chefe-screenshot-1.png',
      screenshot2: '/images/img-cases-chefe-screenshot-2.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Goplayer',
      icon: '/images/img-cases-goplayer-icon.png',
      segment: 'Social',
      description:
        'Aplicativo conecta jogadores de futebol com times. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepcao ate a publicacao.',
      screenshot: '/images/img-cases-goplayer-screenshot-1.png',
      screenshot2: '/images/img-cases-goplayer-screenshot-2.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Buyapp',
      icon: '/images/img-cases-buyapp-icon.png',
      segment: 'Varejo',
      description:
        'O aplicativo que ajuda voce a fazer suas compras seja em mercados ou em distribuidores.',
      screenshot: '/images/img-cases-buyapp-screenshot-1.png',
      screenshot2: '/images/img-cases-buyapp-screenshot-2.png',
      tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
    },
    {
      name: 'Megatroca',
      icon: '/images/img-cases-megatroca-icon.png',
      segment: 'Varejo',
      description:
        'Aplicativo para venda e compra de veiculos. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepcao ate a publicacao.',
      screenshot: '/images/img-cases-megatroca-screenshot-1.png',
      screenshot2: '/images/img-cases-megatroca-screenshot-2.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Goin',
      icon: '/images/img-cases-goin-icon.png',
      segment: 'Social',
      description:
        'Montando um time exclusivo para o desenvolvimento do aplicativo que tras entretenimento na palma das maos pra quem nao aguenta ficar sentado no sofa.',
      screenshot: '/images/img-cases-goin-screenshot-1.png',
      screenshot2: '/images/img-cases-goin-screenshot-2.png',
      tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'IOS', 'WEB', 'BACKOFFICE'],
    },
    {
      name: 'Dr Luke',
      icon: '/images/img-cases-drluke-icon.png',
      segment: 'Healthtech',
      description:
        'Desenvolvemos a versao Android do aplicativo que esta ajudando as maes com a vacinacao de seus filhos.',
      screenshot: '/images/img-cases-drluke-screenshot-1.png',
      screenshot2: '/images/img-cases-drluke-screenshot-2.png',
      tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
    },
    {
      name: 'Gente Seguradora',
      icon: '/images/img-cases-gente-icon.png',
      segment: 'Insurtech',
      description:
        'Estivemos dia-a-dia estudando o fluxo de dados de nosso cliente. Baseado na maneira como as pessoas utilizavam o servicos da Gente Seguradora nos construimos os aplicativos para digitalizar diversos processos que eram feitos manualmente.',
      screenshot: '/images/img-cases-gente-screenshot-1.png',
      screenshot2: '/images/img-cases-gente-screenshot-2.png',
      tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE'],
    },
  ]

  // Icon mapping for segments
  const getSegmentIcon = (segment: string) => {
    const segmentIconMap: { [key: string]: string } = {
      'Healthtech': 'fa-solid fa-heart-pulse',
      'Insurtech': 'fa-solid fa-shield-halved',
      'Social': 'fa-solid fa-users',
      'Fintech': 'fa-solid fa-chart-line',
      'Varejo': 'fa-solid fa-store',
      'Educacao': 'fa-solid fa-graduation-cap',
    }
    return segmentIconMap[segment] || 'fa-solid fa-tag'
  }

  // Icon mapping for tags
  const getTagIcon = (tag: string) => {
    const tagUpper = tag.toUpperCase()
    const iconMap: { [key: string]: string } = {
      'IOS': 'fa-brands fa-apple',
      'ANDROID': 'fa-brands fa-android',
      'WEB': 'fa-solid fa-globe',
      'BACKEND': 'fa-solid fa-server',
      'FRONTEND': 'fa-solid fa-laptop-code',
      'BACKOFFICE': 'fa-solid fa-chart-pie',
      'IDENTIDADE VISUAL': 'fa-solid fa-palette',
      'WIREFRAME': 'fa-solid fa-drafting-compass',
      'INFRAESTRUTURA': 'fa-solid fa-cloud',
      'LANDING PAGE': 'fa-solid fa-file-code',
      'IA': 'fa-solid fa-brain',
      'PESQUISA DE MERCADO': 'fa-solid fa-magnifying-glass-chart',
      'LOGO': 'fa-solid fa-pen-nib',
      'MOCKUP': 'fa-solid fa-pencil-ruler',
    }
    return iconMap[tagUpper] || 'fa-solid fa-check'
  }

  // Get unique segments and count
  const segments = Array.from(new Set(cases.map(c => c.segment)))
  const categories = [
    { id: 'all', name: 'Todos', count: cases.length },
    ...segments.map(segment => ({
      id: segment.toLowerCase(),
      name: segment,
      count: cases.filter(c => c.segment === segment).length
    }))
  ]

  // Hover colors for each case
  const caseHoverColors: { [key: string]: string } = {
    'Diag': '#8046FB1A',
    'Psiapp': '#FD97731A',
    'Autoday': '#5E239F1A',
    'Bluu': '#D80A831A',
    'Chefe de Plantao': '#0E97931A',
    'Dr Luke': '#FEC2671A',
    'Gente Seguradora': '#2692D71A',
    'MovSpot': '#FF8E0A1A',
    'Devotee': '#F96B6C1A',
    'Goplayer': '#21BD441A',
    'Goin': '#FE4F4E1A',
    '4Traders': '#F75A381A',
    'Buyapp': '#F75A381A',
    'Megatroca': '#007AFF1A',
    'Novva': '#ED61251A',
  }

  // Filter cases based on selected segment
  const filteredCases = selectedSegment === 'all'
    ? cases
    : cases.filter(c => c.segment.toLowerCase() === selectedSegment)

  return (
    <div className="bg-white">
      {/* Custom Cursor - Desktop only */}
      {isHoveringCard && (
        <div
          className="pointer-events-none fixed z-50 hidden xl:flex items-center gap-2 rounded-button bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white shadow-xl transition-opacity duration-200"
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12">
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
            <span className="word-wrapper"><span className="word word-delay-7">Conheca</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">alguns</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">dos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">projetos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">desenvolvemos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">zero,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">desde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">concepcao</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">da</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">ideia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">ate</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">lancamento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">crescimento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">no</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">mercado.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
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
                onClick={() => setSelectedSegment(category.id)}
                className={`group relative overflow-hidden rounded-button px-6 py-3 text-sm font-black transition-all ${
                  selectedSegment === category.id
                    ? 'bg-dark text-white'
                    : 'border border-dark/10 bg-white text-dark/70 hover:bg-dark/5'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.id !== 'all' && (
                    <i className={`${getSegmentIcon(category.name)} text-xs`}></i>
                  )}
                  {category.name}
                </span>
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
            {filteredCases.map((caseItem, index) => (
              <CaseCard
                key={index}
                caseItem={caseItem}
                hoverColor={caseHoverColors[caseItem.name] || '#8046FB1A'}
                getSegmentIcon={getSegmentIcon}
                getTagIcon={getTagIcon}
                onMouseMove={caseItem.link ? (e) => {
                  setCursorPosition({ x: e.clientX, y: e.clientY })
                } : undefined}
                onMouseEnter={caseItem.link ? () => setIsHoveringCard(true) : undefined}
                onMouseLeave={caseItem.link ? () => setIsHoveringCard(false) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
