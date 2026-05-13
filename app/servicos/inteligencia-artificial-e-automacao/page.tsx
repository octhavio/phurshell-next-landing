'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ServicosIA() {
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
      title: 'Mapeamento de processos',
      description:
        'Iniciamos com um levantamento detalhado dos processos do seu negócio. Identificamos gargalos, tarefas repetitivas e oportunidades onde IA e automação podem gerar mais valor. Esta etapa é fundamental para garantir que as soluções desenvolvidas atendam às reais necessidades operacionais e estratégicas da sua empresa.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Definição e coleta de dados',
      description:
        'Toda solução de IA começa com dados. Mapeamos as fontes de dados disponíveis, avaliamos qualidade e volume, e definimos a estratégia de coleta e armazenamento. Identificamos quais dados são necessários para treinar os modelos e estabelecemos pipelines para garantir um fluxo contínuo e confiável de informações.',
      color: 'teal',
      icon: 'database',
    },
    {
      stage: 3,
      title: 'Treinamento de modelos',
      description:
        'Com os dados preparados, iniciamos o desenvolvimento e treinamento dos modelos de machine learning. Selecionamos os algoritmos mais adequados para cada problema, realizamos experimentos e iterações para otimizar a performance. Cada modelo é ajustado para maximizar precisão e generalização dentro do contexto do seu negócio.',
      color: 'blue',
      icon: 'brain',
    },
    {
      stage: 4,
      title: 'Validação e avaliação',
      description:
        'Os modelos passam por um rigoroso processo de validação com dados não vistos durante o treinamento. Avaliamos métricas de performance, identificamos vieses e verificamos se os resultados fazem sentido para o negócio. Somente após esta validação criteriosa os modelos avançam para a fase de integração.',
      color: 'teal',
      icon: 'gauge',
    },
    {
      stage: 5,
      title: 'Integração com sistemas',
      description:
        'As soluções de IA são integradas ao ecossistema tecnológico existente da sua empresa. Desenvolvemos APIs, conectores e interfaces que permitem que os modelos operem em conjunto com seus sistemas atuais — ERPs, CRMs, plataformas web ou aplicativos — sem interromper a operação em andamento.',
      color: 'blue',
      icon: 'link',
    },
    {
      stage: 6,
      title: 'Testes e homologação',
      description:
        'Realizamos testes abrangentes em ambiente de homologação antes do lançamento em produção. Simulamos cenários reais de uso, testamos edge cases e validamos o comportamento do sistema sob carga. A equipe do cliente participa ativamente desta etapa para garantir que os resultados atendam às expectativas do negócio.',
      color: 'teal',
      icon: 'code',
    },
    {
      stage: 7,
      title: 'Deploy e go-live',
      description:
        'Com todos os testes concluídos e aprovados, realizamos o deploy das soluções em produção de forma controlada e segura. Monitoramos de perto as primeiras horas e dias de operação, acompanhando métricas de performance e garantindo que os modelos se comportem conforme esperado no ambiente real.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Monitoramento e melhoria contínua',
      description:
        'Modelos de IA precisam evoluir continuamente. Implementamos dashboards de monitoramento para acompanhar a performance dos modelos ao longo do tempo, detectar degradação e identificar oportunidades de melhoria. Realizamos retreinamentos periódicos com novos dados, garantindo que as soluções permaneçam precisas e relevantes.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Implementação de IA',
      description: 'Soluções de IA para automação inteligente, análise preditiva e tomada de decisões baseada em dados.',
      icon: 'brain',
      iconType: 'jelly',
    },
    {
      title: 'Machine Learning',
      description: 'Modelos customizados para reconhecimento de padrões, previsões e otimização de processos de negócio.',
      icon: 'robot',
      iconType: 'jelly',
    },
    {
      title: 'Chatbots Inteligentes',
      description: 'Chatbots com IA para automatizar atendimento e otimizar suporte ao cliente 24/7.',
      icon: 'comments',
      iconType: 'jelly',
    },
    {
      title: 'Automação de Processos',
      description: 'Automatize tarefas repetitivas com inteligência artificial, aumentando eficiência e reduzindo custos.',
      icon: 'arrows-rotate',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'NLP & Processamento de Linguagem',
      description: 'Extração de informações, classificação de textos e compreensão de linguagem natural.',
      icon: 'comments',
    },
    {
      title: 'Visão Computacional',
      description: 'Reconhecimento de imagens, detecção de objetos e análise visual automatizada.',
      icon: 'eye',
    },
    {
      title: 'Análise Preditiva',
      description: 'Modelos que antecipam tendências, comportamentos e resultados com base em dados históricos.',
      icon: 'chart-line',
    },
    {
      title: 'Recomendação Personalizada',
      description: 'Sistemas de recomendação que entregam experiências únicas para cada usuário.',
      icon: 'thumbs-up',
    },
    {
      title: 'Integração com LLMs',
      description: 'Incorporação de modelos de linguagem de grande escala como GPT e Claude nas suas aplicações.',
      icon: 'brain',
    },
    {
      title: 'Automação de Marketing',
      description: 'Segmentação inteligente, personalização de campanhas e otimização de conversão com IA.',
      icon: 'bullhorn',
    },
    {
      title: 'Análise de Sentimentos',
      description: 'Monitoramento e interpretação de opiniões de clientes em tempo real.',
      icon: 'face-smile',
    },
    {
      title: 'Detecção de Fraudes',
      description: 'Modelos de anomalia e classificação para identificar transações e comportamentos suspeitos.',
      icon: 'shield',
    },
    {
      title: 'Business Intelligence com IA',
      description: 'Dashboards inteligentes e relatórios automatizados para decisões estratégicas mais rápidas.',
      icon: 'chart-column',
    },
    {
      title: 'RAG & Knowledge Base',
      description: 'Sistemas de recuperação aumentada por geração para respostas precisas a partir de sua base de conhecimento.',
      icon: 'book',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Inteligência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">Artificial</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">Automação</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">cria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">soluções</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">inteligentes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">automatizam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">processos,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">geram</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">insights</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">criam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">experiências</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">personalizadas.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">IA,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">Machine</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">Learning</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">automação</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">impulsionar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">seu</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">negócio.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-28" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-29" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em inteligência artificial da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-30">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-31">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-32">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-33">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-34">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-35" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.png"
                  alt="Soluções de inteligência artificial desenvolvidas pela Phurshell"
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
          labelIcon="sparkles"
          title="Automatizamos processos e geramos insights com inteligência artificial."
          description="Nossos serviços de IA e automação transformam dados em decisões inteligentes, automatizando processos repetitivos e criando experiências personalizadas para seus usuários."
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
                  alt="Equipe de especialistas em inteligência artificial da Phurshell"
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
              <i className="fa-jelly fa-sparkles fa-xl"></i>
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
              Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, ajudaremos você com suas primeiras decisões críticas de produto, como tecnologia, branding, design e experiência. E configuraremos sua plataforma e negócio para o sucesso.
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
        description="Oferecemos um conjunto completo de serviços especializados em inteligência artificial e automação para transformar dados em valor real para o seu negócio. Cada serviço é cuidadosamente integrado ao processo de desenvolvimento, garantindo qualidade, escalabilidade e resultados mensuráveis em todas as etapas."
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
                  alt="Equipe de especialistas em inteligência artificial da Phurshell"
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
                Que tipo de dados são necessários para desenvolver uma solução de IA?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Os dados necessários variam conforme o tipo de solução. Para modelos preditivos, precisamos de histórico de eventos relevantes para o problema (vendas, comportamentos, transações). Para NLP, precisamos de textos e exemplos rotulados. Para visão computacional, precisamos de imagens anotadas. Durante a fase de mapeamento, fazemos um diagnóstico completo dos dados disponíveis na sua empresa e definimos o que precisa ser coletado ou enriquecido antes de iniciar o desenvolvimento.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem a privacidade e segurança dos nossos dados?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Levamos a privacidade e segurança dos dados muito a sério. Trabalhamos em conformidade com a LGPD e outras regulamentações aplicáveis. Os dados são processados em ambientes seguros, com criptografia em trânsito e em repouso. Firmamos acordos de confidencialidade (NDA) antes de qualquer acesso a dados sensíveis. Sempre que possível, trabalhamos com dados anonimizados ou pseudonimizados durante o desenvolvimento e testes dos modelos.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o processo de treinamento e quanto tempo leva para um modelo ficar pronto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O processo de treinamento envolve preparação dos dados, seleção de algoritmos, experimentação e ajuste fino dos hiperparâmetros. O tempo varia muito conforme a complexidade do problema e a quantidade de dados disponíveis. Soluções mais simples, como modelos de classificação com dados estruturados, podem estar prontos em 4 a 8 semanas. Modelos mais complexos, como sistemas de recomendação ou modelos de linguagem customizados, podem levar de 2 a 4 meses. Apresentamos cronogramas detalhados ao início de cada projeto.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como as soluções de IA se integram aos nossos sistemas existentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  As soluções de IA são expostas como APIs REST ou microserviços, o que permite integração com praticamente qualquer sistema moderno — ERPs, CRMs, plataformas web, aplicativos mobile ou qualquer outro software que consuma APIs. Também desenvolvemos conectores específicos para sistemas legados quando necessário. O objetivo é sempre minimizar o impacto na operação existente, entregando a inteligência artificial como uma camada adicional que potencializa o que você já tem.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Os modelos precisam de manutenção após o lançamento? Como funciona?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim, modelos de IA precisam de manutenção contínua. Com o tempo, os dados do mundo real mudam — um fenômeno chamado de data drift ou concept drift — e os modelos podem perder precisão. Oferecemos planos de monitoramento e retreinamento periódico, onde acompanhamos métricas de performance, detectamos degradação e realizamos atualizações com novos dados. Também ajustamos os modelos conforme o seu negócio evolui e novos padrões emergem, garantindo que a solução permaneça eficaz a longo prazo.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
