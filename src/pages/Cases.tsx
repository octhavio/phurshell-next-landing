import { useState } from 'react'
import TransitionLink from '../components/TransitionLink'
import ContactCTA from '../components/ContactCTA'
import SEO from '../components/SEO'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Cases() {
  const [selectedSegment, setSelectedSegment] = useState('all')

  const cases = [
    {
      name: 'Diag',
      icon: '/images/img-cases-diag-icon.png',
      segment: 'Healthtech',
      description:
        'Prescrições médicas simplificadas. Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico, e conteúdos médicos atualizados para facilitar o dia-a-dia dos médicos.',
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
      icon: '/img-icon-psiapp.svg',
      segment: 'Healthtech',
      description:
        'O aplicativo que conecta psicólogos a pacientes. Desenvolvimento completo dos aplicativos para pacientes e psicólogos, criação do backoffice para gestão e suporte dos atendimentos. Análise de dados para crescimento do projeto e manutenção contínua.',
      screenshot: '/images/img-screenshot-psiapp.png',
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
      icon: '/images/img-icon_autoday.png',
      segment: 'Insurtech',
      description:
        'É uma insurtech especializada no desenvolvimento de soluções de seguros de mobilidade inovadores e acessíveis. O aplicativo que ajuda você a proteger seu carro com um seguro intermitente revolucionário.',
      screenshot: '/images/img-screenshot-autoday.png',
      tags: ['BACKOFFICE', 'WIREFRAME', 'IDENTIDADE VISUAL', 'INFRAESTRUTURA', 'LANDING PAGE', 'IOS', 'ANDROID'],
      link: '/cases/autoday',
    },
    {
      name: 'Bluu',
      icon: '/images/img-icon_bluu.png',
      segment: 'Healthtech',
      description:
        'Aplicativo de saúde preventiva para pets, ajudando tutores a melhorar a saúde de seus bichinhos com atividades e práticas diárias. Além de atendimento veterinário para casos emergenciais.',
      screenshot: '/images/img-screenshot-bluu.png',
      tags: ['WIREFRAME', 'BACKOFFICE', 'LANDING PAGE', 'IDENTIDADE VISUAL', 'IOS', 'ANDROID'],
    },
    {
      name: 'MovSpot',
      icon: '/images/img-icon_movspot.svg',
      segment: 'Social',
      description:
        'Tiramos a ideia do papel, estudamos o mercado, criamos a identidade e desenvolvemos a única plataforma que mostra onde os filmes foram gravados na internet.',
      screenshot: '/images/img-screenshot-movspot.png',
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
      name: 'Devotee',
      icon: '/images/img-icon_devote_new.png',
      segment: 'Social',
      description:
        'Tivemos a honra de tirar do papel o único aplicativo de relacionamento exclusivo para deficientes físicos. Desde a concepção da ideia até o desenvolvimento do iOS e Android.',
      screenshot: '/images/img-screenshot-devotee.png',
      tags: ['WIREFRAME', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE', 'IDENTIDADE VISUAL'],
    },
    {
      name: 'Chefe de Plantão',
      icon: '/images/icon_chefedeplantao.svg',
      segment: 'Healthtech',
      description:
        'Aplicativo que ajuda médicos recém formados com suas consultas. Projeto que construímos todos os produtos, desde a identidade até todos os aplicativos.',
      screenshot: '/images/screenshot_chefedeplantao.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: '4Traders',
      icon: '/images/icon_4traders.png',
      segment: 'Fintech',
      description:
        'Aplicativo de informações de mercado para quem investe em ações. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
      screenshot: '/images/screenshot_sapiens.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Goplayer',
      icon: '/images/icon_goplayer.svg',
      segment: 'Social',
      description:
        'Aplicativo conecta jogadores de futebol com times. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
      screenshot: '/images/screenshot_goplayer.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Ganho',
      icon: '/images/icon_ganho.svg',
      segment: 'Varejo',
      description:
        'Aplicativo que reuni a vitrine e os descontos de todas as lojas da cidade. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
      screenshot: '/images/screenshot_ganho.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Megatroca',
      icon: '/images/icon_megatroca.svg',
      segment: 'Varejo',
      description:
        'Aplicativo para venda e compra de veículos. Tiramos o projeto do papel criando e desenvolvendo todos os produtos desde a concepção até a publicação.',
      screenshot: '/images/screenshot_megatroca.png',
      tags: ['LOGO', 'MOCKUP', 'BACKEND', 'BACKOFFICE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Goin',
      icon: '/images/icon_goin.svg',
      segment: 'Social',
      description:
        'Montando um time exclusivo para o desenvolvimento do aplicativo que trás entretenimento na palma das mãos pra quem não aguenta ficar sentado no sofá.',
      screenshot: '/images/screenshot_goin.png',
      tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'IOS', 'WEB', 'BACKOFFICE'],
    },
    {
      name: 'Dr Luke',
      icon: '/images/icon_drluke.svg',
      segment: 'Healthtech',
      description:
        'Desenvolvemos a versão Android do aplicativo que está ajudando as mães com a vacinação de seus filhos.',
      screenshot: '/images/screenshot_drluke.png',
      tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
    },
    {
      name: 'Hapgrab',
      icon: '/images/icon_hapgrab.svg',
      segment: 'Corporativo',
      description:
        'Desenvolvemos o sistema web feitos sob medida, realizamos ajustes nas versões iOS e Android e a construção do backoffice para gestão das empresas cadastradas.',
      screenshot: '/images/screenshot_hapgrab.png',
      tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'IOS', 'ANDROID', 'WEB', 'BACKOFFICE'],
    },
    {
      name: 'Gente Seguradora',
      icon: '/images/icon_gente.svg',
      segment: 'Insurtech',
      description:
        'Estivemos dia-a-dia estudando o fluxo de dados de nosso cliente. Baseado na maneira como as pessoas utilizavam o serviços da Gente Seguradora nós construimos os aplicativos para digitalizar diversos processos que eram feitos manualmente.',
      screenshot: '/images/screenshot_gente.png',
      tags: ['MOCKUP', 'BACKEND', 'FRONTEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE'],
    },
    {
      name: 'Quotas Ambipar',
      icon: '/images/icon_quotas.svg',
      segment: 'Corporativo',
      description:
        'Aplicativo de incentivo para melhorar a performance e o dia-a-dia dos funiconários da Ambipar. Além de controle das atividades, você pode acumular pontos e retirar em vantagens.',
      screenshot: '/images/screenshot_quotas.png',
      tags: ['MOCKUP', 'BACKEND', 'IOS'],
    },
    {
      name: 'Momentos',
      icon: '/images/icon_4i20.svg',
      segment: 'Social',
      description:
        'Trouxemos um novo conceito visual para o aplicativo, desde a identidade visual, logo, mockup até a implementação no aplicativo iOS.',
      screenshot: '/images/screenshot_4i20.png',
      tags: ['IOS', 'MOCKUP', 'IDENTIDADE VISUAL', 'LOGO'],
    },
    {
      name: 'Polifitema',
      icon: '/images/icon_polifitema.svg',
      segment: 'Indústria',
      description:
        'Desenvolvemos os aplicativos para inspeção e levantamento de irregularidades nas fitas de segurança fabricados pela Polifitema.',
      screenshot: '/images/screenshot_polifitema.png',
      tags: ['IOS', 'ANDROID', 'BACKEND', 'BACKOFFICE'],
    },
    {
      name: 'Buyapp',
      icon: '/images/icon_buyapp.svg',
      segment: 'Varejo',
      description:
        'O aplicativo que ajuda você a fazer suas compras seja em mercados ou em distribuidores.',
      screenshot: '/images/screenshot_buyapp.png',
      tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
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
      'Corporativo': 'fa-solid fa-building',
      'Indústria': 'fa-solid fa-industry',
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

  // Filter cases based on selected segment
  const filteredCases = selectedSegment === 'all'
    ? cases
    : cases.filter(c => c.segment.toLowerCase() === selectedSegment)

  return (
    <div className="bg-white">
      <SEO
        title="Cases"
        description="Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até o lançamento e crescimento no mercado."
        url="/cases"
      />
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
                  {category.name} ({category.count})
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
              <div
                key={index}
                className={`group border border-dark/10 bg-white overflow-hidden rounded-button ${caseItem.link ? 'cursor-pointer' : ''}`}
              >
                <div className="grid grid-cols-1 items-center gap-12 p-12 sm:p-16 xl:grid-cols-2 xl:gap-16 lg:p-20">
                  {/* Left Column - Content */}
                  <div className="space-y-8 order-2 xl:order-1">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between gap-4">
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
                        {/* Button Ver case (only if link exists) */}
                        {caseItem.link && (
                          <TransitionLink
                            href={caseItem.link}
                            className="inline-flex items-center gap-2 rounded-button border px-6 py-3 text-base font-bold tracking-wider transition-smooth bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/30 lg:bg-white lg:border-dark/10 lg:text-dark/60 lg:shadow-none group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-orange/30"
                          >
                            Ver case
                            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                          </TransitionLink>
                        )}
                      </div>

                      <p className="text-xl leading-relaxed text-dark/60">
                        {caseItem.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-black uppercase tracking-wider text-dark/60">
                        O que fizemos
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag, tagIndex) => {
                          let formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
                          if (tag.toUpperCase() === 'IOS') formattedTag = 'iOS'
                          if (tag.toUpperCase() === 'IA') formattedTag = 'IA'

                          return (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-4 py-2 text-sm font-bold text-dark/60"
                            >
                              <i className={`${getTagIcon(tag)} text-xs`}></i>
                              {formattedTag}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Segment */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-black uppercase tracking-wider text-dark/60">
                        Segmento
                      </h4>
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-4 py-2 text-sm font-bold text-dark/60">
                          <i className={`${getSegmentIcon(caseItem.segment)} text-xs`}></i>
                          {caseItem.segment}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Screenshot */}
                  <div className="relative flex items-center justify-center order-1 xl:order-2 h-[375px] xl:h-auto xl:rounded-[44px] overflow-hidden xl:overflow-visible w-full">
                    <div className="relative w-full h-full xl:flex xl:items-center xl:gap-0 xl:w-auto xl:h-auto">
                      {/* Second screenshot - behind on the right (only for Diag) */}
                      {caseItem.screenshot2 && (
                        <img
                          src={caseItem.screenshot2}
                          alt={`Screenshot do ${caseItem.name} desenvolvido pela Phurshell`}
                          width={800}
                          height={600}
                          className="hidden xl:block xl:h-auto xl:w-full xl:max-w-xs xl:rounded-[44px] xl:opacity-90 xl:scale-90 xl:absolute xl:right-0 xl:translate-x-[50%] transition-all duration-500"
                        />
                      )}
                      {/* First screenshot - front */}
                      <img
                        src={caseItem.screenshot}
                        alt={`Screenshot do ${caseItem.name} desenvolvido pela Phurshell`}
                        width={800}
                        height={600}
                        className={`absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-auto xl:relative xl:left-auto xl:translate-x-0 xl:h-auto xl:w-full xl:max-w-xs xl:rounded-[44px] transition-all duration-500 ${
                          caseItem.screenshot2 ? 'xl:z-10 xl:shadow-[20px_0_40px_-10px_rgba(0,0,0,0.3)]' : ''
                        }`}
                      />
                    </div>
                    {/* Gradient overlay - only mobile/tablet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 via-20% to-transparent xl:hidden pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
              Alguns outros projetos incríveis que entregamos
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-dark/70">
              Além de centenas de aplicativos, também tivemos a oportunidade de entregar diversas plataformas de alto impacto para milhares de usuários
            </p>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            <SwiperSlide>
              <div className="overflow-hidden rounded-button border border-dark/10 shadow-lg transition-transform hover:scale-105">
                <img
                  src="/images/screenshot_notanova.jpg"
                  alt="Nota Nova"
                  className="h-auto w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-button border border-dark/10 shadow-lg transition-transform hover:scale-105">
                <img
                  src="/images/screenshot_nesha.jpg"
                  alt="Nesha"
                  className="h-auto w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-button border border-dark/10 shadow-lg transition-transform hover:scale-105">
                <img
                  src="/images/screenshot_chefedeplantao.jpg"
                  alt="Chefe de Plantão"
                  className="h-auto w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-button border border-dark/10 shadow-lg transition-transform hover:scale-105">
                <img
                  src="/images/screenshot_movspot.jpg"
                  alt="MovSpot"
                  className="h-auto w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden rounded-button border border-dark/10 shadow-lg transition-transform hover:scale-105">
                <img
                  src="/images/screenshot_megatroca.jpg"
                  alt="Megatroca"
                  className="h-auto w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
