import { useEffect, useState } from 'react'
import TransitionLink from '../components/TransitionLink'
import WhyPhurshell from '../components/WhyPhurshell'
import ContactCTA from '../components/ContactCTA'
import ClientLogosCarousel from '../components/ClientLogosCarousel'
import SEO from '../components/SEO'

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
      title: 'Consultoria para Startups',
      description: 'Mais do que software, ajudamos a estruturar negócios sustentáveis, preparados para crescer e captar investimento.',
      longDescription: 'Ajudamos fundadores a transformar ideias em negócios estruturados e prontos para escalar. Nosso trabalho vai além do software: construímos junto o planejamento financeiro, a modelagem de receita e a estratégia de captação. Cada decisão é orientada por dados e métricas reais — de CAC e LTV até projeções de cenários. O resultado é uma startup com base sólida, pitch afiado e clareza para crescer.',
      icon: 'chart-pie',
      iconType: 'fa-jelly',
      slug: 'consultoria-para-startups',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
      services: [
        {
          title: 'Planejamento Financeiro Estratégico',
          description: 'Estruturação financeira com foco em crescimento sustentável.',
          icon: 'calculator',
        },
        {
          title: 'Projeção de Receita e Cenários',
          description: 'Modelagem otimista, realista e conservadora para tomada de decisão.',
          icon: 'chart-mixed',
        },
        {
          title: 'KPIs e Métricas de Crescimento',
          description: 'Acompanhamento de CAC, LTV, churn e margem.',
          icon: 'bullseye',
        },
        {
          title: 'Modelagem de Negócios e Monetização',
          description: 'Definição de pricing, recorrência e estratégias de receita.',
          icon: 'coins',
        },
        {
          title: 'Captação de Investimento e Valuation',
          description: 'Preparação financeira para conversas com investidores.',
          icon: 'handshake',
        },
        {
          title: 'Business Plan e Pitch Deck',
          description: 'Plano de negócio claro e pitch convincente.',
          icon: 'presentation-screen',
        },
      ],
    },
    {
      title: 'Design de Produto & Experiência',
      description: 'Criamos interfaces bonitas e funcionais que encantam usuários e convertem visitantes em clientes.',
      longDescription: 'Desenhamos interfaces que seus usuários vão adorar usar. Nosso processo começa com pesquisa e mapeamento de jornadas, passa por wireframes interativos e evolui para um design system completo e responsivo. Cada tela é pensada para resolver problemas reais, facilitar tarefas e criar experiências memoráveis — seja no mobile ou web. O resultado é um produto bonito, funcional e que converte usuários em fãs.',
      icon: 'palette',
      iconType: 'fa-jelly',
      slug: 'design-de-produto-e-experiencia',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop',
      services: [
        {
          title: 'UX Design',
          description: 'Experiências intuitivas focadas nas necessidades reais dos usuários.',
          icon: 'users',
        },
        {
          title: 'UI Design',
          description: 'Interfaces visuais modernas que refletem a identidade da sua marca.',
          icon: 'paintbrush',
        },
        {
          title: 'Wireframes & Prototipação',
          description: 'Fluxos de navegação para validar ideias antes do design final.',
          icon: 'drafting-compass',
        },
        {
          title: 'Design de Produto Digital',
          description: 'Design completo do conceito à interface final.',
          icon: 'palette',
        },
        {
          title: 'Web Design',
          description: 'Websites modernos e responsivos focados em conversão.',
          icon: 'desktop',
        },
      ],
    },
    {
      title: 'Desenvolvimento de Aplicativos',
      description: 'Aplicativos mobile completos para iOS e Android com design moderno, performance otimizada e experiência nativa de alta qualidade.',
      longDescription: 'Criamos aplicativos mobile completos que seus usuários vão querer abrir todo dia. Do conceito ao deploy nas stores, cuidamos de cada detalhe: arquitetura robusta, interface fluida, performance nativa e integração com APIs e serviços externos. Trabalhamos com iOS, Android e soluções híbridas — sempre priorizando qualidade, escalabilidade e a melhor experiência para o usuário final.',
      icon: 'mobile',
      iconType: 'fa-jelly',
      slug: 'desenvolvimento-de-aplicativos',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop',
      services: [
        {
          title: 'Apps iOS',
          description: 'Aplicativos nativos com Swift e SwiftUI para iPhone e iPad.',
          icon: 'apple',
        },
        {
          title: 'Apps Android',
          description: 'Aplicativos nativos com Kotlin para dispositivos Android.',
          icon: 'android',
        },
        {
          title: 'Apps Híbridos',
          description: 'Cross-platform com React Native e Flutter para iOS e Android.',
          icon: 'layer-group',
        },
        {
          title: 'Desenvolvimento de MVP',
          description: 'Produtos mínimos viáveis para validar sua ideia rapidamente.',
          icon: 'rocket',
        },
        {
          title: 'Apps sob Medida',
          description: 'Soluções mobile customizadas para necessidades complexas.',
          icon: 'wrench',
        },
      ],
    },
    {
      title: 'Desenvolvimento Web & SaaS',
      description: 'Plataformas web escaláveis e robustas utilizando as melhores tecnologias do mercado.',
      longDescription: 'Construímos plataformas web que escalam junto com o seu negócio. De landing pages a sistemas SaaS completos com multi-tenancy e billing, usamos as tecnologias mais modernas do mercado para entregar performance, segurança e uma experiência impecável. Seja um e-commerce, um dashboard administrativo ou uma solução enterprise — entregamos código limpo, arquitetura sólida e produto pronto para crescer.',
      icon: 'globe',
      iconType: 'fa-jelly',
      slug: 'desenvolvimento-web-e-saas',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop',
      services: [
        {
          title: 'Desenvolvimento Web',
          description: 'Plataformas escaláveis com Next.js e React.',
          icon: 'globe',
        },
        {
          title: 'Plataformas SaaS',
          description: 'Sistemas completos com multi-tenancy, billing e onboarding.',
          icon: 'cloud',
        },
        {
          title: 'E-commerce',
          description: 'Lojas online rápidas que maximizam conversão.',
          icon: 'cart-shopping',
        },
        {
          title: 'Dashboards & Admin',
          description: 'Painéis intuitivos para gestão de dados em tempo real.',
          icon: 'chart-pie',
        },
        {
          title: 'Soluções Enterprise',
          description: 'Sistemas corporativos robustos e escaláveis.',
          icon: 'building',
        },
        {
          title: 'Software Customizado',
          description: 'Soluções sob medida para processos específicos.',
          icon: 'gears',
        },
      ],
    },
    {
      title: 'Inteligência Artificial & Automação',
      description: 'Soluções inteligentes que automatizam processos, geram insights e criam experiências personalizadas para seus usuários.',
      longDescription: 'Integramos inteligência artificial nos seus produtos e processos para gerar resultados reais. De chatbots inteligentes que atendem seus clientes 24/7 a modelos de machine learning que identificam padrões e otimizam operações — transformamos dados em decisões e tarefas manuais em fluxos automatizados. O resultado é mais eficiência, menos custo e uma experiência personalizada para cada usuário.',
      icon: 'sparkles',
      iconType: 'fa-jelly',
      slug: 'inteligencia-artificial-e-automacao',
      image: 'https://images.unsplash.com/photo-1714036838363-f678d928915b?w=600&h=800&fit=crop',
      services: [
        {
          title: 'Implementação de IA',
          description: 'Automação inteligente e análise preditiva baseada em dados.',
          icon: 'brain',
        },
        {
          title: 'Machine Learning',
          description: 'Modelos customizados para reconhecimento de padrões e previsões.',
          icon: 'robot',
        },
        {
          title: 'Chatbots Inteligentes',
          description: 'Atendimento automatizado com IA 24/7.',
          icon: 'comments',
        },
        {
          title: 'Automação de Processos',
          description: 'Automatização de tarefas repetitivas e fluxos de trabalho.',
          icon: 'arrows-rotate',
        },
      ],
    },
  ]

  return (
    <div className="relative bg-white">
      <SEO
        title="Desenvolvimento de Apps Sob Medida"
        description="Construímos produtos digitais que transformam ideias em negócios reais. Desde 2015 ajudamos startups e empresas a lançar aplicativos e plataformas digitais."
        url="/"
      />
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

        {/* Floating Image - Inside Hero */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-full">
          <div className="rotate-slide delay-500 absolute right-0 top-0 opacity-0">
            {/* Orange glow effects behind image */}
            <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand-orange/30 blur-[120px] sm:block hidden"></div>
            <div className="absolute -right-10 top-40 h-64 w-64 rounded-full bg-brand-orange-light/40 blur-[100px] sm:block hidden"></div>

            <video
              autoPlay
              loop
              muted
              playsInline
              width={500}
              height={1016}
              className="relative z-10 drop-shadow-2xl"
              style={{ mixBlendMode: 'screen' }}
            >
              <source src="/images/video-home-hero.webm" type="video/webm" />
            </video>
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
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedService === index ? 'max-h-[2000px] pb-12' : 'max-h-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                    {/* Left Column - Text & Cards */}
                    <div>
                      {/* Long Description */}
                      <p className="text-lg leading-relaxed text-dark/70 mb-6">
                        {service.longDescription}
                      </p>

                      {/* Conhecer mais link */}
                      <div className="mb-8">
                        <TransitionLink
                          href={`/servicos/${service.slug}`}
                          className="group inline-flex items-center gap-2 text-base font-bold text-brand-orange hover:text-brand-orange-light transition-colors"
                        >
                          Conhecer mais
                          <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                        </TransitionLink>
                      </div>

                      {/* Services Cards - Horizontal Grid */}
                      {service.services && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.services.map((item: any, itemIndex: number) => (
                            <div
                              key={itemIndex}
                              className="rounded-button border border-dark/10 bg-white p-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                  <i className={`${item.icon === 'apple' || item.icon === 'android' ? 'fa-brands' : 'fa-solid'} fa-${item.icon} text-dark text-sm`}></i>
                                </div>
                                <h4 className="text-base font-bold text-dark">{item.title}</h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column - Image */}
                    <div className="hidden lg:block">
                      <div className="relative h-full min-h-[400px] overflow-hidden rounded-button">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Last item - Link to all services (not accordion) */}
            <div>
              <TransitionLink
                href="/servicos"
                className="group inline-flex items-center gap-3 py-8 transition-colors"
              >
                <h3 className="text-xl font-black text-brand-orange group-hover:text-brand-orange-light sm:text-2xl transition-colors">
                  Conhecer todos os serviços
                </h3>
                <i className="fa-solid fa-arrow-right text-xl text-brand-orange group-hover:text-brand-orange-light transition-all duration-200 group-hover:translate-x-1"></i>
              </TransitionLink>
            </div>
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
                    <TransitionLink href="/cases/autoday" className="block" style={{ cursor: 'none' }}>
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
                    </TransitionLink>
                  ) : (
                    <TransitionLink href="/cases/diag" className="block" style={{ cursor: 'none' }}>
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
                    </TransitionLink>
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
                      <img
                        src={caseItem.screenshot}
                        alt={`Tela do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                        width={600}
                        height={800}
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
                <img
                  src="/images/img-testimonial-autoday.png"
                  alt="Foto de Alec Maia, fundador da AutoDay"
                  width={80}
                  height={80}
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
