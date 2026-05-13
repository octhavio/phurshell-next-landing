'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ServicosEngenharia() {
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
      title: 'Levantamento de requisitos técnicos',
      description:
        'Iniciamos com uma análise aprofundada das necessidades do seu projeto. Mapeamos os requisitos funcionais e não-funcionais, entendemos as restrições de negócio, volumes esperados de dados e usuários, e definimos os critérios de sucesso técnico. Esta etapa é essencial para tomar decisões arquiteturais corretas desde o início.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Definição da arquitetura',
      description:
        'Com os requisitos claros, desenhamos a arquitetura do sistema. Escolhemos os padrões arquiteturais mais adequados — monolito, microsserviços ou arquitetura híbrida — e definimos como os componentes se comunicam. Documentamos decisões técnicas, trade-offs e o diagrama de arquitetura para garantir alinhamento com toda a equipe.',
      color: 'teal',
      icon: 'building-columns',
    },
    {
      stage: 3,
      title: 'Modelagem do banco de dados',
      description:
        'Projetamos o modelo de dados que sustentará o sistema. Definimos entidades, relacionamentos, índices e estratégias de particionamento. Escolhemos os bancos de dados mais adequados para cada caso de uso — SQL, NoSQL ou uma combinação — garantindo integridade, performance nas consultas e facilidade de evolução do schema.',
      color: 'blue',
      icon: 'database',
    },
    {
      stage: 4,
      title: 'Desenvolvimento do backend',
      description:
        'Construímos a camada de negócios do sistema com código limpo, testável e bem documentado. Implementamos as regras de negócio, integramos com bancos de dados e serviços externos, e garantimos que cada módulo seja coeso e com baixo acoplamento. Utilizamos Node.js, Python ou Java conforme a melhor escolha para o contexto do projeto.',
      color: 'teal',
      icon: 'server',
    },
    {
      stage: 5,
      title: 'Desenvolvimento do frontend',
      description:
        'Criamos interfaces modernas e performáticas com React e Next.js, alinhadas ao design e às necessidades dos usuários. Focamos em componentização, acessibilidade e performance — garantindo que o frontend consuma as APIs de forma eficiente e entregue uma experiência fluida em qualquer dispositivo.',
      color: 'blue',
      icon: 'laptop-code',
    },
    {
      stage: 6,
      title: 'Integrações e APIs',
      description:
        'Implementamos as integrações com serviços externos e desenvolvemos as APIs que conectam todo o ecossistema. Seguimos as melhores práticas REST e GraphQL, versionamos as APIs, implementamos autenticação segura e documentamos cada endpoint. Garantimos que as integrações sejam resilientes a falhas e fáceis de evoluir.',
      color: 'teal',
      icon: 'plug',
    },
    {
      stage: 7,
      title: 'Testes e qualidade de código',
      description:
        'Aplicamos uma estratégia robusta de testes em todas as camadas do sistema: unitários, de integração e end-to-end. Realizamos code reviews detalhados para garantir que o código siga os padrões definidos, seja legível e mantenível. Análise estática de código e cobertura de testes fazem parte do processo antes de qualquer entrega.',
      color: 'green',
      icon: 'code',
    },
    {
      stage: 8,
      title: 'Deploy e manutenção',
      description:
        'Configuramos pipelines de CI/CD para automação de build, testes e deploy. Preparamos os ambientes de staging e produção, monitoramos a saúde do sistema após o lançamento e atuamos rapidamente em caso de incidentes. A manutenção contínua garante que o sistema evolua com segurança, absorvendo novas funcionalidades sem degradar a estabilidade.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Arquitetura de Software',
      description: 'Definição de estrutura técnica e padrões para garantir escalabilidade, performance e manutenibilidade.',
      icon: 'building-columns',
      iconType: 'jelly',
    },
    {
      title: 'Backend',
      description: 'Sistemas backend robustos e escaláveis com Node.js, Python ou Java para alta performance.',
      icon: 'server',
      iconType: 'jelly',
    },
    {
      title: 'APIs REST & GraphQL',
      description: 'APIs robustas e escaláveis seguindo as melhores práticas para integração com qualquer plataforma.',
      icon: 'plug',
      iconType: 'jelly',
    },
    {
      title: 'Microservices',
      description: 'Arquiteturas modulares baseadas em microsserviços que facilitam crescimento independente.',
      icon: 'cubes',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Frontend',
      description: 'Interfaces modernas e performáticas com React e Next.js para qualquer tipo de aplicação.',
      icon: 'laptop-code',
    },
    {
      title: 'Banco de Dados',
      description: 'Modelagem e implementação de bancos de dados relacionais e NoSQL otimizados para performance.',
      icon: 'database',
    },
    {
      title: 'Integrações de Sistemas',
      description: 'Conexão com sistemas de pagamento, ERPs, CRMs e qualquer serviço de terceiros.',
      icon: 'arrows-left-right',
    },
    {
      title: 'Autenticação & Segurança',
      description: 'Implementação de autenticação robusta, criptografia e proteção de dados sensíveis.',
      icon: 'lock',
    },
    {
      title: 'Code Review',
      description: 'Revisão técnica aprofundada para garantir qualidade, segurança e boas práticas no código.',
      icon: 'code',
    },
    {
      title: 'Refatoração de Código',
      description: 'Modernização e reestruturação de código legado para melhorar manutenibilidade e performance.',
      icon: 'gears',
    },
    {
      title: 'Documentação Técnica',
      description: 'Criação de documentação clara e completa de arquitetura, APIs e processos técnicos.',
      icon: 'file-code',
    },
    {
      title: 'Performance Optimization',
      description: 'Análise e otimização de gargalos de performance em backend, frontend e banco de dados.',
      icon: 'gauge-high',
    },
    {
      title: 'Mentoria Técnica',
      description: 'Acompanhamento técnico para times de desenvolvimento crescerem com boas práticas e excelência.',
      icon: 'graduation-cap',
    },
    {
      title: 'Modernização de Sistemas',
      description: 'Migração e atualização de sistemas legados para arquiteturas modernas e escaláveis.',
      icon: 'arrows-rotate',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Engenharia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">Arquitetura</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Software</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">constrói</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">base</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">técnica</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">sólida</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">seus</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">precisam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">escalar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">segurança</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">performance.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">Backend,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">frontend,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">APIs</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">arquitetura</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">microsserviços</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">excelência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-32">técnica.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-33" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-34" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em engenharia de software da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-35">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-36">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-37">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-38">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-39">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-40" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.png"
                  alt="Arquitetura de software desenvolvida pela Phurshell mostrando sistemas escaláveis e robustos"
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
                        Um dos projetos desenvolvidos pela Phurshell, com arquitetura backend escalável que suporta milhares de consultas simultâneas entre psicólogos e pacientes.
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
          labelIcon="wrench"
          title="Construímos a base técnica que seus produtos precisam para escalar."
          description="Nossos serviços de engenharia abrangem desde arquitetura e backend até frontend, APIs e banco de dados, com foco em escalabilidade, segurança e performance."
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
                  alt="Equipe de especialistas em engenharia de software da Phurshell"
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
              <i className="fa-jelly fa-wrench fa-xl"></i>
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
              Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, construímos a base técnica sólida do seu produto, tomando as decisões arquiteturais certas em cada etapa para garantir escalabilidade, segurança e performance.
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
        description="Oferecemos um conjunto completo de serviços especializados para garantir que cada camada do seu sistema seja construída com qualidade, segurança e performance. Cada serviço é integrado ao processo de engenharia para entregar um produto técnico robusto e escalável."
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
                  alt="Equipe de especialistas em engenharia de software da Phurshell"
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
                Quais tecnologias vocês utilizam no desenvolvimento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Trabalhamos com as principais tecnologias do mercado, escolhendo a stack mais adequada para cada contexto. No backend, utilizamos Node.js, Python e Java. No frontend, React e Next.js. Para banco de dados, PostgreSQL, MySQL, MongoDB e Redis. A escolha da tecnologia é sempre baseada nos requisitos técnicos do projeto, não em preferências pessoais — o que garante a melhor solução para o seu negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como vocês definem a arquitetura do sistema?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  A definição da arquitetura começa pelo entendimento profundo dos requisitos de negócio e técnicos: volume de usuários, frequência de atualizações, integrações necessárias, orçamento de infraestrutura e time de manutenção disponível. Com essas informações, avaliamos as opções — monolito, microsserviços ou arquitetura híbrida — e documentamos as decisões com justificativas claras para que toda a equipe esteja alinhada.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o prazo estimado para um projeto de engenharia de software?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O prazo depende diretamente da complexidade e do escopo do projeto. Um sistema simples com uma API e banco de dados pode ser entregue em 4 a 8 semanas. Projetos maiores com múltiplas integrações, microsserviços e alta escalabilidade podem levar de 3 a 6 meses. Durante o levantamento de requisitos técnicos, criamos um cronograma detalhado com entregas incrementais para que você acompanhe o progresso em cada etapa.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês fazem code review em projetos já existentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. Oferecemos um serviço completo de code review e auditoria técnica para projetos em andamento ou já em produção. Analisamos qualidade do código, segurança, performance, cobertura de testes, aderência a boas práticas e potenciais gargalos. Ao final, entregamos um relatório detalhado com os pontos críticos e um plano de ação priorizado para correção e melhoria do codebase.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona a manutenção após a entrega do projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Oferecemos planos de manutenção contínua que incluem monitoramento de performance, correção de bugs, atualizações de segurança e evolução do sistema conforme as necessidades do negócio crescem. Trabalhamos com SLA customizado para sistemas críticos, garantindo tempo de resposta e resolução adequados ao nível de impacto de cada incidente. A manutenção proativa evita problemas antes que eles afetem seus usuários.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
