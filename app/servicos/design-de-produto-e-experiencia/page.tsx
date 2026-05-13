'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ServicosDesign() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const cases = [
    {
      name: 'Diag',
      icon: '/img-icon-diag.svg',
      description:
        'Prescrições médicas simplificadas. Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico, e conteúdos médicos atualizados para facilitar o dia-a-dia dos médicos.',
      screenshot: '/images/img-screenshot-diag.png',
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
    },
    {
      name: 'MovSpot',
      icon: '/images/img-icon_movspot.svg',
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
      name: 'Autoday',
      icon: '/images/img-icon_autoday.png',
      description:
        'É uma insurtech especializada no desenvolvimento de soluções de seguros de mobilidade inovadores e acessíveis. O aplicativo que ajuda você a proteger seu carro com um seguro intermitente revolucionário.',
      screenshot: '/images/img-screenshot-autoday.png',
      tags: ['BACKOFFICE', 'WIREFRAME', 'IDENTIDADE VISUAL', 'INFRAESTRUTURA', 'LANDING PAGE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Bluu',
      icon: '/images/img-icon_bluu.png',
      description:
        'Aplicativo de saúde preventiva para pets, ajudando tutores a melhorar a saúde de seus bichinhos com atividades e práticas diárias. Além de atendimento veterinário para casos emergenciais.',
      screenshot: '/images/img-screenshot-bluu.png',
      tags: ['WIREFRAME', 'BACKOFFICE', 'LANDING PAGE', 'IDENTIDADE VISUAL', 'IOS', 'ANDROID'],
    },
    {
      name: 'Devotee',
      icon: '/images/img-icon_devote_new.png',
      description:
        'Tivemos a honra de tirar do papel o único aplicativo de relacionamento exclusivo para deficientes físicos. Desde a concepção da ideia até o desenvolvimento do iOS e Android.',
      screenshot: '/images/img-screenshot-devotee.png',
      tags: ['WIREFRAME', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE', 'IDENTIDADE VISUAL'],
    },
  ]

  const currentCase = cases[currentCaseIndex]

  const handleCaseChange = (newIndex: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentCaseIndex(newIndex)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrevCase = () => {
    const newIndex = currentCaseIndex === 0 ? cases.length - 1 : currentCaseIndex - 1
    handleCaseChange(newIndex)
  }

  const handleNextCase = () => {
    const newIndex = currentCaseIndex === cases.length - 1 ? 0 : currentCaseIndex + 1
    handleCaseChange(newIndex)
  }

  const processStages = [
    {
      stage: 1,
      title: 'Pesquisa com usuários',
      description:
        'Iniciamos o processo mergulhando fundo no universo dos usuários. Realizamos entrevistas, pesquisas qualitativas e análise de comportamento para entender necessidades reais, dores e expectativas. Esse embasamento garante que cada decisão de design seja orientada por dados concretos, não por suposições.',
      color: 'red',
      icon: 'users',
    },
    {
      stage: 2,
      title: 'Criação de wireframes',
      description:
        'Com os insights da pesquisa em mãos, estruturamos todos os fluxos de navegação e telas em wireframes detalhados. Essa etapa permite validar a arquitetura da informação e a experiência do usuário antes de qualquer investimento em design visual, economizando tempo e reduzindo retrabalho.',
      color: 'teal',
      icon: 'drafting-compass',
    },
    {
      stage: 3,
      title: 'Prototipação interativa',
      description:
        'Transformamos os wireframes em protótipos clicáveis que simulam a experiência real do produto. Isso permite testar fluxos completos, identificar pontos de fricção e validar hipóteses com usuários reais antes do design final, garantindo maior assertividade nas entregas.',
      color: 'blue',
      icon: 'mobile',
    },
    {
      stage: 4,
      title: 'Criação do design system',
      description:
        'Desenvolvemos um design system completo com tokens de cores, tipografia, espaçamentos e componentes reutilizáveis. Essa base garante consistência visual em todo o produto, acelera o processo de design nas próximas etapas e facilita a integração com o time de desenvolvimento.',
      color: 'teal',
      icon: 'layer-group',
    },
    {
      stage: 5,
      title: 'Design de UI',
      description:
        'Com o design system estabelecido, criamos as interfaces visuais finais: telas, estados, variações e microinterações. Cada detalhe é pensado para equilibrar estética e funcionalidade, refletindo a identidade da marca e proporcionando uma experiência visual memorável para os usuários.',
      color: 'blue',
      icon: 'paintbrush',
    },
    {
      stage: 6,
      title: 'Testes de usabilidade',
      description:
        'Realizamos sessões de teste com usuários reais para avaliar a usabilidade das interfaces criadas. Observamos como as pessoas interagem com o produto, identificamos obstáculos na jornada e coletamos feedbacks valiosos que orientam os ajustes finais antes da entrega.',
      color: 'teal',
      icon: 'vial-circle-check',
    },
    {
      stage: 7,
      title: 'Entrega e handoff',
      description:
        'Preparamos toda a documentação e especificações técnicas para a equipe de desenvolvimento. Utilizamos ferramentas como Figma para organizar os arquivos de forma estruturada, com anotações de comportamento, medidas, estados de componentes e guias de implementação para garantir fidelidade na entrega final.',
      color: 'green',
      icon: 'code',
    },
    {
      stage: 8,
      title: 'Iteração contínua',
      description:
        'O design nunca está terminado — ele evolui junto com o produto e os usuários. Coletamos métricas de uso, analisamos comportamentos reais, monitoramos feedbacks e identificamos oportunidades de melhoria. Esse ciclo contínuo de iteração garante que a experiência se mantenha relevante e cada vez melhor.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'UX Design',
      description: 'Criação de experiências intuitivas e envolventes focadas nas necessidades reais dos usuários.',
      icon: 'users',
      iconType: 'jelly',
    },
    {
      title: 'UI Design',
      description: 'Design de interfaces visuais modernas e atraentes que refletem a identidade da sua marca.',
      icon: 'paintbrush',
      iconType: 'jelly',
    },
    {
      title: 'Wireframes & Prototipação',
      description: 'Estruturação visual e fluxos de navegação para validar ideias antes do design final.',
      icon: 'drafting-compass',
      iconType: 'jelly',
    },
    {
      title: 'Web Design',
      description: 'Design visual de websites modernos e responsivos com foco em estética, usabilidade e conversão.',
      icon: 'desktop',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Design System',
      description: 'Biblioteca de componentes e tokens de design para garantir consistência em todo o produto.',
      icon: 'layer-group',
    },
    {
      title: 'Pesquisa com Usuários',
      description: 'Entrevistas e análise de comportamento para embasar decisões de design em dados reais.',
      icon: 'users',
    },
    {
      title: 'Testes de Usabilidade',
      description: 'Sessões de teste com usuários reais para identificar fricções e oportunidades de melhoria.',
      icon: 'vial-circle-check',
    },
    {
      title: 'Motion Design',
      description: 'Animações e microinterações que tornam a experiência mais fluida e agradável.',
      icon: 'wand-magic-sparkles',
    },
    {
      title: 'Design Responsivo',
      description: 'Interfaces adaptadas para todos os dispositivos e tamanhos de tela.',
      icon: 'mobile',
    },
    {
      title: 'Acessibilidade',
      description: 'Design inclusivo seguindo diretrizes WCAG para produtos acessíveis a todos os usuários.',
      icon: 'universal-access',
    },
    {
      title: 'Identidade Visual',
      description: 'Criação de marca completa com logo, paleta de cores, tipografia e guia de estilo.',
      icon: 'palette',
    },
    {
      title: 'Iconografia',
      description: 'Criação de conjuntos de ícones personalizados alinhados à identidade do produto.',
      icon: 'shapes',
    },
    {
      title: 'Design de Landing Pages',
      description: 'Páginas de alta conversão com layout estratégico e hierarquia visual eficiente.',
      icon: 'browser',
    },
    {
      title: 'Handoff para Desenvolvedores',
      description: 'Documentação e especificações técnicas completas para implementação fiel do design.',
      icon: 'code',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Design</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">Produto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Experiência</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">cria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">interfaces</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">bonitas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">funcionais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">encantam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">usuários</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">convertem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">visitantes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">clientes.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">Do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">UX</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">ao</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">UI,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">entregamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">experiências</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">digitais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">fazem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">diferença.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-32" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-33" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em design de produto da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-34">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-35">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-36">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-37">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-38">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-39" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.png"
                  alt="Interface de produto digital desenvolvida pela Phurshell mostrando design moderno e funcional"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/img-icon-psiapp.svg"
                        alt="Logo do aplicativo Psiapp"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Psiapp</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Um dos projetos desenvolvidos pela Phurshell, que conecta psicólogos a pacientes com uma plataforma web completa para agendamento de consultas e acompanhamento terapêutico.
                        <br />
                        <span className="font-bold">São quase 100 mil downloads</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white sm:text-xl">4.8</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="fa-solid fa-star text-white"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </span>
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

      {/* Services Overview */}
      <section className="pt-12">
        <ProcessCarousel
          items={services}
          label="Principais Serviços"
          labelIcon="palette"
          title="Criamos experiências digitais que encantam e convertem."
          description="Nossos serviços de design abrangem todo o ciclo criativo, desde pesquisa com usuários e wireframes até interfaces finais e design systems completos."
          bgColor="white"
          cardStyle="service"
        />
      </section>

      {/* CTA Button */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <TransitionLink
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
            >
              Solicitar proposta
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </TransitionLink>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-auto overflow-hidden rounded-full">
                <img
                  src="/images/img-cta-especialist.png"
                  alt="Equipe de especialistas em design de produto da Phurshell"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-cover"
                />
              </div>
              <p className="text-lg font-bold text-dark">
                Fale com um especialista agora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <div className="mb-12">
            <p className="mb-4 flex items-center gap-3 text-lg font-black uppercase tracking-wider text-brand-orange">
              <i className="fa-jelly fa-palette fa-xl"></i>
              Cases de sucesso
            </p>
            <h2 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
              Projetos que transformamos em realidade
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-white/70">
              Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até
              o lançamento e crescimento no mercado.
            </p>
          </div>

          <div className="overflow-hidden rounded-button border border-white/10 bg-dark">
            <div className="grid grid-cols-1 items-center gap-12 p-12 sm:p-16 lg:grid-cols-2 lg:gap-16 lg:p-20">
              {/* Left Column - Content */}
              <div
                className={`space-y-8 transition-all duration-300 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentCase.icon}
                      alt={currentCase.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-2xl border border-white/20"
                    />
                    <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                      {currentCase.name}
                    </h2>
                  </div>
                  <p className="text-xl leading-relaxed text-white/70">{currentCase.description}</p>
                </div>

                {/* O que fizemos */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-wider text-white/60">
                    O que fizemos?
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Screenshot */}
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <img
                  src={currentCase.screenshot}
                  alt={`Tela do projeto ${currentCase.name} desenvolvido pela Phurshell`}
                  width={600}
                  height={800}
                  className="h-auto w-full max-w-md cursor-pointer transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between border-t border-white/10 px-8 py-6 sm:px-12">
              <div className="flex gap-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleCaseChange(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentCaseIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Ir para case ${i + 1}`}
                  ></button>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePrevCase}
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-white/20 text-white transition-smooth hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Case anterior"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNextCase}
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-white/20 text-white transition-smooth hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Próximo case"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="relative mb-6 flex justify-center">
                <i className="fa-solid fa-quote-left fa-3x text-brand-orange"></i>
              </div>
              <blockquote className="text-3xl leading-tight text-dark sm:text-4xl">
                "Foi uma empresa muito parceira nossa, porque eles contribuíram não só no
                desenvolvimento, mas também com ideias pro negócio. Deram muito suporte pra gente."
              </blockquote>
            </div>

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

      {/* Process */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mb-8">
            <p className="mb-4 flex items-center gap-3 text-lg font-black uppercase tracking-wider text-brand-orange">
              <i className="fa-jelly fa-clipboard fa-xl"></i>
              Nosso processo
            </p>
            <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
              Da ideia ao lançamento
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, guiaremos você por cada etapa do processo criativo, desde a pesquisa com usuários até o handoff final para o time de desenvolvimento.
            </p>
          </div>

          <div className="relative mt-16">
            {processStages.map((stage, index) => (
              <div key={stage.stage} className="relative flex items-center gap-6 pb-12 last:pb-0">
                {/* Timeline Line & Circle */}
                <div className="relative flex flex-col items-center self-stretch justify-center">
                  {index !== processStages.length - 1 && (
                    <div className="absolute left-1/2 top-1/2 h-[calc(100%+3rem-1.5rem)] w-0.5 -translate-x-1/2 bg-brand-orange/30"></div>
                  )}
                  <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-orange shadow-lg">
                    <span className="text-lg font-black text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-button bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    {stage.icon && (
                      <i className={`fa-jelly fa-${stage.icon} fa-xl text-brand-orange`}></i>
                    )}
                    <h3 className="text-xl font-black text-dark">{stage.title}</h3>
                  </div>
                  <p className="text-xl leading-relaxed text-dark/70">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros Serviços */}
      <ProcessCarousel
        items={solutions}
        label="Outros Serviços"
        labelIcon="suitcase"
        title="Serviços que também fazem parte do processo"
        description="Oferecemos um conjunto completo de serviços especializados para criar produtos digitais que encantam usuários e impulsionam resultados. Cada serviço é cuidadosamente integrado ao processo criativo, garantindo consistência, acessibilidade e excelência visual em todas as etapas do projeto."
        bgColor="white"
        cardStyle="service"
      />

      {/* CTA */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <TransitionLink
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
            >
              Solicitar proposta
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </TransitionLink>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-auto overflow-hidden rounded-full">
                <img
                  src="/images/img-cta-especialist.png"
                  alt="Equipe de especialistas em design de produto da Phurshell"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-cover"
                />
              </div>
              <p className="text-lg font-bold text-dark">
                Fale com um especialista agora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <WhyPhurshell />

      {/* Contact CTA */}
      <ContactCTA />

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">
            Perguntas frequentes
          </h2>

          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como é o processo de design da Phurshell?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Nosso processo começa com pesquisa aprofundada com usuários para entender necessidades reais antes de colocar qualquer pixel na tela. A partir dos insights coletados, criamos wireframes para validar fluxos e arquitetura da informação, evoluímos para protótipos interativos e, só então, desenvolvemos as interfaces visuais finais. Cada etapa é validada com você e com usuários reais para garantir que o produto final seja intuitivo, bonito e eficaz.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quais ferramentas vocês utilizam no processo de design?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Utilizamos Figma como nossa principal ferramenta de design e prototipação, por ser a plataforma mais moderna e colaborativa do mercado. Para pesquisa com usuários, usamos ferramentas como Maze e Hotjar para testes de usabilidade e análise de comportamento. Todo o processo é documentado e organizado para facilitar a colaboração com o time de desenvolvimento durante o handoff.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quais são os entregáveis ao final do projeto de design?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Ao final do projeto, você recebe os arquivos Figma organizados com todas as telas, componentes e estados documentados, um design system completo com tokens de design e guia de estilos, protótipos interativos para apresentação e validação, especificações técnicas para o time de desenvolvimento e, quando aplicável, assets exportados (ícones, imagens, ilustrações). Tudo é entregue de forma estruturada para facilitar a implementação e futuras evoluções do produto.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quantas rodadas de revisão estão incluídas no projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Cada etapa do processo inclui uma rodada de revisão estruturada, onde apresentamos o trabalho, coletamos seu feedback e realizamos os ajustes necessários. Acreditamos que o melhor design nasce da colaboração, por isso mantemos comunicação constante ao longo do projeto. Rodadas adicionais de revisão podem ser acordadas conforme a complexidade e necessidade do projeto, sempre com alinhamento prévio sobre escopo e prazos.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona o handoff do design para a equipe de desenvolvimento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O handoff é uma das etapas mais críticas do processo e levamos muito a sério. Organizamos o arquivo Figma com nomenclatura clara, componentes estruturados e anotações de comportamento. Documentamos medidas, espaçamentos, cores e tipografia com os valores exatos para implementação. Quando trabalhamos com o time de desenvolvimento da Phurshell, acompanhamos de perto a implementação para garantir fidelidade ao design. Para times externos, realizamos uma reunião de handoff para esclarecer dúvidas e garantir que tudo está documentado adequadamente.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
