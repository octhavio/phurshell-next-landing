'use client'

import { useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import Image from 'next/image'
import ProcessCarousel from '@/components/ProcessCarousel'

export default function MobileAppDevelopmentPage() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
        'O aplicativo que conecta psicólogos a pacientes. Criamos todo fluxo e o desenvolvimento completo de todos os produtos.',
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
        'O melhor seguro para seu carro. O aplicativo que ajuda você a proteger seu carro com um seguro intermitente revolucionário.',
      screenshot: '/img-screenshot-autoday.png',
      tags: ['IOS', 'ANDROID'],
    },
    {
      name: 'Bluu',
      icon: '/img-icon_bluu.png',
      description:
        'A rede aplicativo que ajuda donos de pet a encontrar lugares e outros donos, trazendo interação social entre donos e seus pets.',
      screenshot: '/img-screenshot-bluu.png',
      tags: ['MOCKUP', 'BACKEND', 'IOS', 'ANDROID'],
    },
    {
      name: 'Devotee',
      icon: '/img-icon_devote_new.png',
      description:
        'Tivemos a honra de tirar do papel o único aplicativo de relacionamento exclusivo para deficientes físicos. Desde a concepção da ideia até o desenvolvimento do iOS e Android.',
      screenshot: '/img-screenshot-devotee.png',
      tags: ['MOCKUP', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'SISTEMA ADMINISTRATIVO'],
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
  const benefits = [
    {
      icon: 'mobile-screen',
      title: 'Cross-Platform',
      description: 'Apps que funcionam perfeitamente em iOS e Android com código compartilhado.',
    },
    {
      icon: 'bolt',
      title: 'Alta Performance',
      description: 'Otimização extrema garantindo experiência fluida mesmo em dispositivos mais antigos.',
    },
    {
      icon: 'shield',
      title: 'Segurança',
      description: 'Implementação de melhores práticas de segurança e proteção de dados sensíveis.',
    },
    {
      icon: 'palette',
      title: 'Design Responsivo',
      description: 'Interfaces adaptáveis que se ajustam perfeitamente a qualquer tamanho de tela.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'Entendemos seu negócio, objetivos e público-alvo para definir a estratégia ideal.',
    },
    {
      step: '02',
      title: 'Design & Prototipagem',
      description:
        'Criamos wireframes e protótipos interativos para validar a experiência do usuário.',
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description:
        'Codificamos o app com as melhores práticas, testes contínuos e code reviews.',
    },
    {
      step: '04',
      title: 'Testes & QA',
      description:
        'Testamos em múltiplos dispositivos garantindo qualidade e performance impecáveis.',
    },
    {
      step: '05',
      title: 'Deploy & Lançamento',
      description:
        'Publicamos nas App Store e Google Play e monitoramos o lançamento de perto.',
    },
    {
      step: '06',
      title: 'Manutenção & Suporte',
      description:
        'Suporte contínuo, atualizações e melhorias baseadas no feedback dos usuários.',
    },
  ]

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
    'Arquitetura e Estratégia Mobile',
    'Desenvolvimento iOS',
    'Desenvolvimento Android',
    'Desenvolvimento Cross-Platform',
    'Backend & Integração de APIs',
    'CI/CD & DevOps',
    'Design UX e UI',
    'Testes de Segurança para Apps',
  ]

  const solutions = [
    {
      title: 'Desenvolvimento Mobile',
      description:
        'Aplicativos nativos e cross-platform para iOS e Android com alta performance e design intuitivo.',
      icon: 'mobile-screen',
    },
    {
      title: 'UI/UX Design',
      description:
        'Interfaces modernas e experiências de usuário otimizadas para maximizar engajamento e conversão.',
      icon: 'palette',
    },
    {
      title: 'APIs RESTful',
      description:
        'Desenvolvimento de APIs escaláveis e documentadas para integração perfeita entre aplicativo e backend.',
      icon: 'code',
    },
    {
      title: 'Integrações de Sistemas',
      description:
        'Conexão com sistemas de pagamento, ERPs, CRMs e serviços de terceiros de forma segura.',
      icon: 'plug',
    },
    {
      title: 'Banco de Dados',
      description:
        'Modelagem e implementação de bancos de dados otimizados para performance e escalabilidade.',
      icon: 'database',
    },
    {
      title: 'Autenticação & Segurança',
      description:
        'Implementação de autenticação robusta, criptografia de dados e proteção contra vulnerabilidades.',
      icon: 'shield',
    },
    {
      title: 'Cloud Infrastructure',
      description:
        'Configuração de infraestrutura em nuvem escalável com AWS, Google Cloud ou Azure.',
      icon: 'cloud',
    },
    {
      title: 'CI/CD Pipeline',
      description:
        'Automação de testes, builds e deploys para entregas rápidas e confiáveis.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Testes Automatizados',
      description:
        'Testes unitários, de integração e end-to-end para garantir qualidade e estabilidade.',
      icon: 'gauge',
    },
  ]

  const technologies = [
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
    'Firebase',
    'AWS Amplify',
    'GraphQL',
    'REST APIs',
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-12 pt-24 sm:pb-16 sm:pt-32">
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .word-animate {
            display: inline-block;
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .word-animate:nth-child(1) { animation-delay: 0.1s; }
          .word-animate:nth-child(2) { animation-delay: 0.2s; }
          .word-animate:nth-child(3) { animation-delay: 0.3s; }
          .word-animate:nth-child(4) { animation-delay: 0.4s; }
          .word-animate:nth-child(5) { animation-delay: 0.5s; }
          .description-animate {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
            animation-delay: 0.5s;
          }
          .cta-animate {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
            animation-delay: 0.6s;
          }
          .image-animate {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
            animation-delay: 0.7s;
          }
        `}</style>
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          {/* Title */}
          <h1 className="mb-6 text-balance text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
            <span className="word-animate">Desenvolvimento</span>{' '}
            <span className="word-animate">de</span>{' '}
            <span className="word-animate">apps</span>
          </h1>

          {/* Description */}
          <p className="description-animate mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android. Criamos soluções sob medida que transformam suas ideias em produtos digitais de alta performance, com foco em experiência do usuário e excelência técnica.
          </p>

          {/* CTA */}
          <div className="cta-animate mb-12 flex items-center justify-between gap-6 rounded-button bg-brand-orange/10 p-6">
            <div className="flex items-center gap-4">
              {/* Team avatars */}
              <div className="flex -space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="flex h-full w-full items-center justify-center text-sm font-black text-white">
                    A
                  </div>
                </div>
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-purple-600">
                  <div className="flex h-full w-full items-center justify-center text-sm font-black text-white">
                    B
                  </div>
                </div>
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-green-500 to-green-600">
                  <div className="flex h-full w-full items-center justify-center text-sm font-black text-white">
                    C
                  </div>
                </div>
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-red-500 to-red-600">
                  <div className="flex h-full w-full items-center justify-center text-sm font-black text-white">
                    D
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-dark">
                Trabalhe com nossos especialistas em desenvolvimento de apps.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-xl"
            >
              Falar com especialista
              <i className="fa-jelly fa-arrow-right"></i>
            </a>
          </div>

          {/* Image */}
          <div className="image-animate relative aspect-[21/9] overflow-hidden rounded-button">
            <Image
              src="/img-hero.png"
              alt="Desenvolvimento de apps"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mb-12 bg-gray-50/50 py-8 sm:mb-16">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <p className="mb-6 text-xl leading-relaxed text-dark/60">
            Empresas que confiam na gente
          </p>
          <div className="flex flex-wrap items-center gap-8 opacity-50 grayscale sm:gap-12">
            {[2, 1, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative h-12 w-32 sm:h-16 sm:w-40">
                <Image
                  src={`/clients/img-partner-${num}.png`}
                  alt={`Cliente ${num}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              <h2 className="mb-6 text-5xl font-black leading-tight tracking-tight text-dark">
                Não importa o que você está construindo, nós podemos ajudar.
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-dark/70">
                Nossos serviços de desenvolvimento mobile abrangem todo o ciclo de vida do produto,
                desde estratégia e design até implantação e suporte pós-lançamento. De UI e backend
                até arquitetura e workflows de release, mantemos o desenvolvimento em movimento sem
                introduzir riscos de entrega.
              </p>

              {/* Stats */}
              <div className="mb-8 flex flex-wrap gap-8">
                <div>
                  <div className="mb-2 flex items-baseline gap-2">
                    <i className="fa-solid fa-check text-2xl text-brand-orange"></i>
                    <span className="text-3xl font-black text-dark">100+</span>
                  </div>
                  <p className="text-base font-bold text-dark/60">Apps desenvolvidos</p>
                </div>
                <div>
                  <div className="mb-2 flex items-baseline gap-2">
                    <i className="fa-solid fa-check text-2xl text-brand-orange"></i>
                    <span className="text-3xl font-black text-dark">10+</span>
                  </div>
                  <p className="text-base font-bold text-dark/60">Anos de mercado</p>
                </div>
              </div>

              {/* CTA */}
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Entrar em Contato
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </div>

            {/* Right Column - Services List */}
            <div>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 border-b border-dark/10 pb-4 last:border-0"
                  >
                    <i className="fa-solid fa-check text-xl text-brand-orange"></i>
                    <span className="text-xl font-bold text-dark">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-12">
            <h3 className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
              Cases de sucesso
            </h3>
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
                    <Image
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
                <Image
                  src={currentCase.screenshot}
                  alt={`Screenshot ${currentCase.name}`}
                  width={600}
                  height={800}
                  className="h-auto w-full max-w-md"
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
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
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
                  alt="Alec Maia"
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
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
              Nosso processo
            </h3>
            <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
              Da ideia ao lançamento
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, ajudaremos você com suas primeiras decisões críticas de produto, como tecnologia, branding, design e experiência. E configuraremos seu aplicativo e negócio para o sucesso.
            </p>
          </div>

          <div className="relative mt-16">
            {processStages.map((stage, index) => (
              <div key={stage.stage} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline Line & Circle */}
                <div className="relative flex flex-col items-center">
                  {/* Circle with icon */}
                  <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-orange shadow-lg">
                    {stage.icon && <i className={`fa-jelly fa-${stage.icon} text-white`}></i>}
                  </div>
                  {/* Vertical Line */}
                  {index !== processStages.length - 1 && (
                    <div className="absolute top-12 h-full w-0.5 bg-brand-orange/30"></div>
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-button border border-dark/10 bg-white p-6 transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg">
                  <h3 className="mb-3 text-xl font-black text-dark">{stage.title}</h3>
                  <p className="text-xl leading-relaxed text-dark/70">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <ProcessCarousel
        items={solutions}
        label="Nossas soluções"
        title="Serviços que fazem parte do processo"
        description="Oferecemos um conjunto completo de serviços especializados para transformar sua ideia em um aplicativo de sucesso. Cada serviço é cuidadosamente integrado ao processo de desenvolvimento, garantindo qualidade, segurança e performance em todas as etapas do projeto."
        bgColor="white"
        cardStyle="service"
      />

      {/* About Phurshell */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <h3 className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
            SOBRE A PHURSHELL
          </h3>
          <h2 className="mb-6 max-w-4xl text-5xl font-black tracking-tight text-dark sm:text-6xl">
            Por que trabalhar com a Phurshell? Somos confiados pelas melhores equipes de tecnologia.
          </h2>
          <p className="mb-16 max-w-4xl text-xl leading-relaxed text-dark/60">
            A Phurshell é uma empresa brasileira especializada em desenvolvimento de software. Desde
            2015, construímos software para empresas de todos os tamanhos—desde startups em
            crescimento até grandes corporações. Somos uma das empresas de desenvolvimento de
            software de mais rápido crescimento. Se você busca qualidade e inovação, somos o
            parceiro ideal para você.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Stat 1 */}
            <div>
              <div className="mb-2 text-5xl font-black text-brand-orange sm:text-6xl">50+</div>
              <div className="text-lg font-bold text-dark/70">
                Projetos
                <br />
                Entregues
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="mb-2 text-5xl font-black text-brand-orange sm:text-6xl">20+</div>
              <div className="text-lg font-bold text-dark/70">
                Desenvolvedores
                <br />
                no Time
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="mb-2 text-5xl font-black text-brand-orange sm:text-6xl">95%</div>
              <div className="text-lg font-bold text-dark/70">
                Taxa de Retenção
                <br />
                de Clientes
              </div>
            </div>

            {/* Stat 4 */}
            <div>
              <div className="mb-2 text-5xl font-black text-brand-orange sm:text-6xl">30+</div>
              <div className="text-lg font-bold text-dark/70">
                Clientes
                <br />
                Ativos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          {/* Card Container */}
          <div className="rounded-button bg-brand-orange/10 p-8 sm:p-12 lg:p-16">
            {/* Timeline Section */}
            <div className="mb-12">
              <h2 className="mb-16 text-4xl font-black tracking-tight text-dark sm:text-5xl">
                Inicie projetos de desenvolvimento de aplicativos mobile em 2-4 semanas.
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="hidden lg:block">
              <div className="mx-auto max-w-sm">
                <Image
                  src="/img-cta.png"
                  alt="Gustavo Bittar"
                  width={400}
                  height={533}
                  className="h-auto w-full"
                />
                <p className="mt-4 text-center text-lg font-bold text-dark">Gustavo Bittar</p>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange">
                <i className="fa-solid fa-phone fa-xl text-white"></i>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-dark/50">
                  STEP 1
                </p>
                <h3 className="mb-2 text-2xl font-black text-dark">
                  Participe de uma chamada exploratória.
                </h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Conte-nos mais sobre seu negócio em uma chamada de descoberta. Discutiremos
                  estrutura de time e abordagem, critérios de sucesso, cronograma, orçamento e
                  habilidades necessárias para ver como podemos ajudar.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange">
                <i className="fa-solid fa-users fa-xl text-white"></i>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-dark/50">
                  STEP 2
                </p>
                <h3 className="mb-2 text-2xl font-black text-dark">
                  Discuta a solução e a estrutura do time.
                </h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Em questão de dias, finalizaremos as especificações do seu projeto, acordaremos um
                  modelo de engajamento, selecionaremos e integraremos seu time.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange">
                <i className="fa-solid fa-arrow-up fa-xl text-white"></i>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-dark/50">
                  STEP 3
                </p>
                <h3 className="mb-2 text-2xl font-black text-dark">
                  Comece e acompanhe o desempenho.
                </h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Assim que acordarmos os marcos, começaremos imediatamente o trabalho.
                  Acompanharemos o progresso, reportaremos atualizações e nos adaptaremos
                  continuamente às suas necessidades.
                </p>
              </div>
            </div>
            </div>
          </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-base font-black tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Agendar uma conversa
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
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
                  O prazo varia de acordo com a complexidade e escopo do projeto. Projetos simples podem levar de 2 a 3 meses, enquanto aplicativos mais complexos podem levar de 4 a 8 meses. Durante o Discovery, mapeamos todas as funcionalidades e criamos um cronograma detalhado com marcos e entregas específicas.
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
                  Para iniciar, precisamos entender sua visão e objetivos de negócio. Começamos com reuniões de Discovery para mapear requisitos, definir funcionalidades prioritárias e entender seu público-alvo. Você não precisa ter especificações técnicas detalhadas - nossa equipe ajuda a transformar sua ideia em um plano de desenvolvimento estruturado.
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
                  Trabalhamos com comunicação transparente e constante. Realizamos reuniões semanais para apresentar o progresso, tirar dúvidas e alinhar próximos passos. Utilizamos ferramentas como Slack para comunicação diária, Jira para acompanhamento de tarefas e demos quinzenais para você visualizar o aplicativo em desenvolvimento.
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
