import { useState } from 'react'
import TransitionLink from '../components/TransitionLink'
import ProcessCarousel from '../components/ProcessCarousel'
import WhyPhurshell from '../components/WhyPhurshell'
import ContactCTA from '../components/ContactCTA'
import ClientLogosCarousel from '../components/ClientLogosCarousel'
import SEO from '../components/SEO'

export default function ServicosApps() {
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
      title: 'Validação da ideia',
      description:
        'Começamos analisando cuidadosamente as necessidades do seu aplicativo mobile. Esta etapa crítica inclui discussões em grupo para escolher os conceitos de app mais promissores e conduzir uma análise detalhada de viabilidade. Criamos uma estratégia de projeto sólida que visa o sucesso a longo prazo na indústria mobile.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Criação do Wireframe',
      description:
        'Baseado na sua ideia, criamos wireframes detalhados com todas as telas e fluxos de navegação do aplicativo. Transformamos conceitos abstratos em representações visuais concretas, permitindo que você visualize e valide cada etapa da jornada do usuário antes mesmo de iniciar o desenvolvimento. Este processo garante alinhamento total entre sua visão e o produto final.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Criação da infraestrutura',
      description:
        'Para iniciar o projeto, estruturamos toda a base tecnológica necessária: configuramos o banco de dados, desenvolvemos a API RESTful, estabelecemos integrações com serviços externos e preparamos o ambiente de servidor. Esta fundação sólida garante que o aplicativo tenha escalabilidade, segurança e performance desde o primeiro dia de desenvolvimento.',
      color: 'blue',
      icon: 'database',
    },
    {
      stage: 4,
      title: 'Integração com terceiros',
      description:
        'Todo projeto moderno depende de serviços externos: gateways de pagamento, sistemas de autenticação, serviços de e-mail, armazenamento em nuvem, APIs de mapas, entre outros. Auxiliamos na criação e configuração de todas as contas necessárias, gerenciamos credenciais e implementamos as integrações de forma segura, garantindo que seu projeto esteja conectado ao ecossistema digital de forma robusta.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Arquitetura e desenvolvimento',
      description:
        'Nossa equipe de desenvolvimento cria soluções personalizadas utilizando os frameworks e tecnologias mais modernas do mercado. Uma arquitetura bem planejada é fundamental para o crescimento sustentável do projeto, garantindo que o aplicativo seja escalável, fácil de manter e preparado para evoluir conforme as necessidades do negócio mudam ao longo do tempo.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'Testes automatizados',
      description:
        'Implementamos uma estratégia completa de testes automatizados incluindo testes unitários para validar cada componente individualmente e testes end-to-end para simular o fluxo completo do usuário. Esta abordagem identifica bugs e problemas antes que cheguem à produção, prevenindo falhas críticas, reduzindo custos de correção e garantindo que novas funcionalidades não quebrem recursos existentes.',
      color: 'teal',
      icon: 'gauge',
    },
    {
      stage: 7,
      title: 'Lançamento do projeto',
      description:
        'Com a infraestrutura configurada, o desenvolvimento concluído e todos os testes validados, seu projeto está pronto para nascer. Configuramos o ambiente de produção e acompanhamos de perto as primeiras horas de vida. A partir deste momento, usuários reais começam a validar o produto, gerando feedbacks valiosos que guiarão as próximas evoluções.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Manutenção contínua',
      description:
        'Esta etapa nasce junto com o lançamento e permanece viva enquanto o projeto existir. É um processo colaborativo constante entre nossa equipe, você e seus usuários. Coletamos feedbacks, identificamos oportunidades de melhoria, corrigimos bugs, implementamos novas funcionalidades e evoluímos o produto continuamente. Seu projeto é um organismo vivo que cresce e se adapta às necessidades do mercado.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'iOS',
      description: 'Aplicativos para iPhone e iPad com design intuitivo e integração com o ecossistema Apple.',
      icon: 'apple',
      iconType: 'brands',
    },
    {
      title: 'Android',
      description: 'Aplicativos para smartphones e tablets com interface moderna e otimizados para diferentes dispositivos.',
      icon: 'android',
      iconType: 'brands',
    },
    {
      title: 'Web',
      description: 'Aplicações web responsivas, dashboards interativos e plataformas SaaS completas.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'PWA',
      description: 'Progressive Web Apps com experiência mobile completa e capacidade de instalação.',
      icon: 'mobile',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Arquitetura e Estratégia Mobile',
      description: 'Planejamento estratégico e arquitetura escalável para aplicações mobile.',
      icon: 'city',
    },
    {
      title: 'Backend & Integração de APIs',
      description: 'Desenvolvimento de APIs robustas e integração com serviços externos.',
      icon: 'wrench',
    },
    {
      title: 'CI/CD & DevOps',
      description: 'Automação de deploy e infraestrutura para entrega contínua.',
      icon: 'arrow-up-from-line',
    },
    {
      title: 'Design UX e UI',
      description: 'Interfaces modernas e experiências de usuário otimizadas para maximizar engajamento.',
      icon: 'palette',
    },
    {
      title: 'Testes de Segurança para Apps',
      description: 'Análise de vulnerabilidades e testes de penetração em aplicações mobile.',
      icon: 'shield-halved',
    },
    {
      title: 'Banco de Dados',
      description: 'Modelagem e implementação de bancos de dados otimizados para performance.',
      icon: 'database',
    },
    {
      title: 'Autenticação & Segurança',
      description: 'Implementação de autenticação robusta, criptografia e proteção de dados.',
      icon: 'shield',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Configuração de infraestrutura em nuvem escalável com AWS, Google Cloud ou Azure.',
      icon: 'cloud',
    },
    {
      title: 'Testes Automatizados',
      description: 'Testes unitários, de integração e end-to-end para garantir qualidade.',
      icon: 'gauge',
    },
    {
      title: 'Integrações de Sistemas',
      description: 'Conexão com sistemas de pagamento, ERPs, CRMs e serviços de terceiros.',
      icon: 'link',
    },
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Desenvolvimento de Aplicativos"
        description="A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android. Criamos soluções sob medida que transformam suas ideias em produtos digitais de alta performance."
        url="/servicos/desenvolvimento-de-aplicativos"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Desenvolvimento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">aplicativos</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-4">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">é</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">uma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">empresa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">especializada</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">desenvolvimento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">aplicativos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">customizados</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">iOS</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">Android.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">Criamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">soluções</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">sob</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">medida</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">transformam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">suas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">ideias</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">digitais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">alta</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-32">performance,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-33">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-34">foco</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-35">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-36">experiência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-37">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-38">usuário</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-39">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-40">excelência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-41">técnica.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-42" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-43" style={{ display: 'inline-block' }}>
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
                    <span className="word-wrapper"><span className="word word-delay-44">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-45">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-46">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-47">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-48">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-49" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.png"
                  alt="Interface de aplicativo mobile desenvolvido pela Phurshell mostrando design moderno e funcional"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
              <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                {/* Logo e Nome */}
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

                {/* Info Text */}
                <div>
                  <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                    Um dos aplicativos desenvolvidos pela Phurshell, que conecta psicólogos a pacientes, facilitando o agendamento de consultas e o acompanhamento terapêutico de forma prática e segura.
                    <br />
                    <span className="font-bold">São quase 100 mil downloads</span>
                  </p>
                </div>

                {/* Rating */}
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
          labelIcon="suitcase"
          title="Não importa o que você quer construir, nós podemos ajudar."
          description="Nossos serviços de desenvolvimento mobile abrangem todo o ciclo de vida do produto, desde estratégia e design até implantação e suporte pós-lançamento. De UI e backend até arquitetura e workflows de release, mantemos o desenvolvimento em movimento sem introduzir riscos de entrega."
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
                  alt="Equipe de especialistas em desenvolvimento mobile da Phurshell"
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
              <i className="fa-jelly fa-mobile fa-xl"></i>
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
                  alt={`Tela do aplicativo ${currentCase.name} desenvolvido pela Phurshell`}
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
              Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, ajudaremos você com suas primeiras decisões críticas de produto, como tecnologia, branding, design e experiência. E configuraremos seu aplicativo e negócio para o sucesso.
            </p>
          </div>

          <div className="relative mt-16">
            {processStages.map((stage, index) => (
              <div key={stage.stage} className="relative flex items-center gap-6 pb-12 last:pb-0">
                {/* Timeline Line & Circle */}
                <div className="relative flex flex-col items-center self-stretch justify-center">
                  {/* Continuous Line Behind */}
                  {index !== processStages.length - 1 && (
                    <div className="absolute left-1/2 top-1/2 h-[calc(100%+3rem-1.5rem)] w-0.5 -translate-x-1/2 bg-brand-orange/30"></div>
                  )}
                  {/* Circle with number */}
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
        description="Oferecemos um conjunto completo de serviços especializados para transformar sua ideia em um aplicativo de sucesso. Cada serviço é cuidadosamente integrado ao processo de desenvolvimento, garantindo qualidade, segurança e performance em todas as etapas do projeto."
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
                  alt="Equipe de especialistas em desenvolvimento mobile da Phurshell"
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
            {/* Question 1 */}
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o prazo estimado para o projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O prazo varia de acordo com a complexidade e escopo do projeto. Projetos simples podem levar de 2 a 3 meses, enquanto aplicativos mais complexos podem levar de 4 a 8 meses. Durante a reunião de validação da ideia, mapeamos todas as funcionalidades e criamos um cronograma detalhado com marcos e entregas específicas.
                </p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que é preciso para iniciar o desenvolvimento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Para iniciar, precisamos entender sua visão e objetivos de negócio. Começamos com uma reunião de validação da ideia para mapear requisitos, definir funcionalidades prioritárias e entender seu público-alvo. Você não precisa ter especificações técnicas detalhadas - nossa equipe ajuda a transformar sua ideia em um plano de desenvolvimento estruturado.
                </p>
              </div>
            </details>

            {/* Question 3 */}
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como será a comunicação (reuniões, canais, frequência)?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Realizamos uma reunião em cada etapa do nosso processo para apresentar o progresso, tirar dúvidas e alinhar próximos passos. Além disso, criamos um grupo no WhatsApp dedicado ao projeto para facilitar a comunicação rápida em caso de dúvidas ou qualquer outro assunto relacionado ao desenvolvimento.
                </p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem que o software atenderá o escopo?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Utilizamos metodologias ágeis com sprints bem definidos e entregas incrementais. Cada funcionalidade passa por validação com você antes de avançarmos. Mantemos documentação detalhada, realizamos code reviews constantes e testes automatizados. Você terá acesso ao projeto em desenvolvimento e poderá acompanhar cada etapa do progresso.
                </p>
              </div>
            </details>

            {/* Question 5 */}
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Há suporte técnico após o encerramento do projeto? Qual o custo?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim, oferecemos planos de suporte e manutenção contínua. Isso inclui correção de bugs, atualizações de compatibilidade com novas versões do iOS/Android, monitoramento de performance e pequenas melhorias. O custo varia de acordo com o nível de suporte (básico, intermediário ou premium). Também oferecemos SLA customizado para aplicativos críticos.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
