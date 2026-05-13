'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ConsultoriaParaStartups() {
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
      title: 'Diagnóstico do negócio',
      description:
        'Iniciamos com uma análise aprofundada do estágio atual da sua startup: modelo de negócio, mercado-alvo, estrutura financeira e principais desafios. Essa visão holística nos permite identificar gargalos e oportunidades antes de definir qualquer estratégia, garantindo que as recomendações sejam precisas e aderentes à realidade do seu negócio.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Planejamento financeiro',
      description:
        'Com base no diagnóstico, estruturamos o planejamento financeiro completo da empresa: organização do fluxo de caixa, definição de centros de custo, mapeamento de despesas fixas e variáveis, e construção de um modelo financeiro robusto que sirva de base para todas as decisões estratégicas do negócio.',
      color: 'teal',
      icon: 'calculator',
    },
    {
      stage: 3,
      title: 'Modelagem de negócios',
      description:
        'Revisamos e refinamos o modelo de negócio da startup, analisando proposta de valor, canais de distribuição, fontes de receita e estrutura de custos. Utilizamos frameworks como Business Model Canvas para visualizar e testar hipóteses, garantindo que o modelo seja sustentável e escalável no longo prazo.',
      color: 'blue',
      icon: 'diagram-project',
    },
    {
      stage: 4,
      title: 'Projeção de receita e forecast',
      description:
        'Construímos cenários financeiros detalhados — otimista, realista e conservador — com projeções de receita, crescimento de base de clientes, evolução de custos e ponto de equilíbrio. Esse forecast se torna a bússola da operação, orientando decisões de contratação, investimento e expansão ao longo do tempo.',
      color: 'teal',
      icon: 'chart-mixed',
    },
    {
      stage: 5,
      title: 'Definição de KPIs e métricas',
      description:
        'Definimos o conjunto de métricas essenciais para o seu estágio de crescimento: CAC, LTV, churn, MRR, margem de contribuição e NPS, entre outros. Criamos dashboards e rituais de acompanhamento para que você tenha clareza sobre a saúde do negócio e consiga tomar decisões baseadas em dados no dia a dia.',
      color: 'blue',
      icon: 'bullseye',
    },
    {
      stage: 6,
      title: 'Preparação para o pitch',
      description:
        'Estruturamos o storytelling financeiro e estratégico da startup para conversas com investidores. Revisamos o pitch deck sob a ótica dos números, ajudamos a construir a narrativa de tração e preparamos os fundadores para responder as perguntas mais críticas de due diligence com confiança e clareza.',
      color: 'teal',
      icon: 'presentation-screen',
    },
    {
      stage: 7,
      title: 'Captação de investimento',
      description:
        'Apoiamos a jornada de captação desde a definição do valuation até a preparação dos materiais exigidos por investidores. Ajudamos a estruturar o data room, validar premissas financeiras e garantir que os indicadores apresentados sejam sólidos e consistentes, aumentando a credibilidade perante fundos e angels.',
      color: 'green',
      icon: 'handshake',
    },
    {
      stage: 8,
      title: 'Crescimento e monitoramento',
      description:
        'Após a captação ou a consolidação da estratégia, continuamos ao seu lado acompanhando a execução do plano financeiro, revisando metas, ajustando o forecast conforme a operação evolui e identificando novas oportunidades de crescimento. A consultoria não termina no diagnóstico — ela vive junto com a sua startup.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Planejamento Financeiro Estratégico',
      description: 'Estruturação completa das finanças do negócio com foco em crescimento sustentável.',
      icon: 'calculator',
      iconType: 'jelly',
    },
    {
      title: 'Projeção de Receita e Forecast',
      description: 'Modelagem de cenários otimista, realista e conservador para tomada de decisão.',
      icon: 'chart-mixed',
      iconType: 'jelly',
    },
    {
      title: 'KPIs e Métricas de Crescimento',
      description: 'Definição e acompanhamento de métricas como CAC, LTV, churn e margem para guiar decisões.',
      icon: 'bullseye',
      iconType: 'jelly',
    },
    {
      title: 'Captação de Investimento',
      description: 'Preparação financeira e construção de indicadores para conversas com investidores.',
      icon: 'handshake',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Modelagem de Negócios',
      description: 'Estruturação do modelo de negócio com frameworks como Business Model Canvas.',
      icon: 'diagram-project',
    },
    {
      title: 'Pricing e Monetização',
      description: 'Definição de estratégias de precificação e modelos de monetização sustentáveis.',
      icon: 'coins',
    },
    {
      title: 'Business Plan',
      description: 'Elaboração de plano de negócios completo para guiar a execução e atrair parceiros.',
      icon: 'file-lines',
    },
    {
      title: 'Pitch Deck para Investidores',
      description: 'Criação e revisão de pitch deck com narrativa financeira e estratégica sólida.',
      icon: 'presentation-screen',
    },
    {
      title: 'Análise de Mercado',
      description: 'Pesquisa e análise de mercado para validar tamanho de oportunidade e competitividade.',
      icon: 'chart-bar',
    },
    {
      title: 'Valuation',
      description: 'Cálculo e justificativa do valuation da startup para rodadas de captação.',
      icon: 'scale-balanced',
    },
    {
      title: 'OKRs e Metas',
      description: 'Definição de objetivos e resultados-chave alinhados à estratégia de crescimento.',
      icon: 'bullseye',
    },
    {
      title: 'Estrutura Societária',
      description: 'Orientação sobre organização societária, vesting e acordos entre fundadores.',
      icon: 'building',
    },
    {
      title: 'Go-to-Market',
      description: 'Planejamento da estratégia de entrada no mercado e aquisição dos primeiros clientes.',
      icon: 'rocket',
    },
    {
      title: 'Due Diligence',
      description: 'Preparação e organização de dados financeiros e operacionais para processos de due diligence.',
      icon: 'magnifying-glass',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Consultoria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">Startups</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">vai</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">além</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">software.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">Ajudamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">estruturar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">negócios</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">sustentáveis,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">preparados</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">crescer</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">captar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">investimento,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">planejamento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">financeiro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">estratégia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">negócio</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">sólida.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-39" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-40" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em consultoria para startups da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-41">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-42">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-43">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-44">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-45">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-46" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.png"
                  alt="Consultoria para startups pela Phurshell — estruturação financeira e estratégia de negócio"
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
                        Um dos projetos acompanhados pela Phurshell, que estruturou o modelo financeiro, definiu métricas de crescimento e preparou a startup para suas primeiras rodadas de captação.
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
          labelIcon="chart-pie"
          title="Estruturamos seu negócio para crescer e captar investimento."
          description="Nossa consultoria para startups abrange planejamento financeiro, modelagem de negócios, projeção de receitas e preparação para captação de investimento."
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
                  alt="Equipe de especialistas em consultoria para startups da Phurshell"
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
              <i className="fa-jelly fa-chart-pie fa-xl"></i>
              Cases de sucesso
            </p>
            <h2 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
              Projetos que transformamos em realidade
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-white/70">
              Conheça alguns dos projetos que acompanhamos do zero, desde a estruturação financeira e
              modelagem de negócio até a captação de investimento e crescimento no mercado.
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
              Do diagnóstico à captação
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Você tem a visão. Agora você precisa de um parceiro especializado focado em estruturar o negócio para crescer com saúde financeira e atrair os investidores certos. Com isso em mente, guiamos você desde o diagnóstico até a captação de investimento, passando por planejamento, modelagem e KPIs.
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
        description="Oferecemos um conjunto completo de serviços especializados para transformar sua startup em um negócio sólido e preparado para escalar. Cada serviço é integrado à estratégia financeira e de negócio, garantindo coerência e consistência em todas as etapas da jornada."
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
                  alt="Equipe de especialistas em consultoria para startups da Phurshell"
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
                Como funciona o processo de consultoria para startups?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O processo começa com um diagnóstico completo do negócio, onde analisamos o modelo de receita, estrutura de custos, estágio de crescimento e objetivos de curto e longo prazo. A partir daí, desenvolvemos o planejamento financeiro, definimos KPIs, construímos projeções e preparamos a startup para conversas com investidores — tudo de forma estruturada e progressiva.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Precisamos ter o financeiro organizado antes de começar?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Não. A maioria das startups que nos procura ainda não tem o financeiro organizado — e é exatamente por isso que a consultoria existe. Partimos do zero junto com você: estruturamos o fluxo de caixa, organizamos as categorias de custos e receitas, e construímos o modelo financeiro desde a base, independentemente do estágio atual da empresa.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A consultoria ajuda diretamente na captação de investimento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. Preparamos os fundadores para conversar com investidores com segurança: revisamos o pitch deck sob a ótica financeira, estruturamos o data room, validamos o valuation e ajudamos a construir os indicadores que os investidores mais analisam — como CAC, LTV, MRR, margem e runway. Não fazemos a captação diretamente, mas garantimos que você chegue preparado.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o prazo para ver os primeiros entregáveis?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Os primeiros entregáveis — diagnóstico e estrutura financeira inicial — costumam ser concluídos nas primeiras duas semanas. O planejamento financeiro completo com projeções e KPIs é entregue em até um mês. Para projetos voltados à captação, o cronograma varia conforme a complexidade, mas em geral trabalhamos com ciclos de 4 a 12 semanas dependendo do escopo.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quais são os entregáveis concretos da consultoria?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Dependendo do escopo contratado, os entregáveis incluem: modelo financeiro em planilha, projeções de receita com cenários, dashboard de KPIs, business plan, revisão do pitch deck, estrutura de valuation e data room organizado. Todos os materiais são documentados e entregues de forma que você consiga utilizar e atualizar de forma autônoma após o encerramento da consultoria.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
