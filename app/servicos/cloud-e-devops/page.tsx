'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ServicosCloudDevOps() {
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
      title: 'Auditoria de infraestrutura',
      description:
        'Analisamos a infraestrutura existente para identificar gargalos, pontos de falha e oportunidades de melhoria. Essa etapa inclui revisão de custos, segurança, performance e disponibilidade, gerando um diagnóstico completo que orienta todas as decisões técnicas seguintes.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Planejamento da arquitetura cloud',
      description:
        'Com base no diagnóstico, desenhamos a arquitetura ideal para o seu produto na nuvem. Definimos provedores (AWS, Google Cloud ou Azure), regiões, serviços, estratégias de redundância e estimativas de custo, garantindo uma base sólida antes de qualquer implementação.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Configuração do ambiente',
      description:
        'Provisionamos toda a infraestrutura cloud utilizando Infraestrutura como Código (IaC) com Terraform ou ferramentas nativas. Configuramos redes, segurança, permissões e ambientes de desenvolvimento, staging e produção de forma padronizada e reproduzível.',
      color: 'blue',
      icon: 'cloud-arrow-up',
    },
    {
      stage: 4,
      title: 'Pipelines de CI/CD',
      description:
        'Implementamos pipelines de integração e entrega contínua que automatizam build, testes e deploy. Com isso, cada commit pode ser validado e lançado em produção com segurança e velocidade, eliminando deploys manuais e reduzindo riscos de erros humanos.',
      color: 'teal',
      icon: 'gears',
    },
    {
      stage: 5,
      title: 'Containerização',
      description:
        'Containerizamos as aplicações com Docker e orquestramos com Kubernetes, garantindo consistência entre ambientes e facilitando o escalonamento horizontal. Essa etapa simplifica deploys, isola dependências e torna o produto mais portável e resiliente.',
      color: 'blue',
      icon: 'box',
    },
    {
      stage: 6,
      title: 'Monitoramento e observabilidade',
      description:
        'Configuramos sistemas completos de monitoramento com métricas, logs centralizados e rastreamento de erros em tempo real. Dashboards e alertas proativos garantem visibilidade total do comportamento do produto em produção e permitem reação rápida a incidentes.',
      color: 'teal',
      icon: 'chart-line',
    },
    {
      stage: 7,
      title: 'Segurança em nuvem',
      description:
        'Aplicamos as melhores práticas de segurança cloud: gestão de credenciais, políticas de acesso mínimo, criptografia em trânsito e em repouso, scans de vulnerabilidade e conformidade com padrões como SOC 2 e ISO 27001. Segurança integrada em cada camada da infraestrutura.',
      color: 'green',
      icon: 'shield',
    },
    {
      stage: 8,
      title: 'Otimização de custos e manutenção',
      description:
        'Monitoramos continuamente o uso de recursos para identificar desperdícios e oportunidades de economia. Ajustamos capacidade, aplicamos reserved instances e revisamos arquiteturas com o objetivo de reduzir custos sem sacrificar performance ou disponibilidade.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Infraestrutura escalável e resiliente na AWS, Google Cloud ou Azure para alta disponibilidade.',
      icon: 'cloud-arrow-up',
      iconType: 'jelly',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Automação de deploy, testes e integração contínua garantindo entregas rápidas e confiáveis.',
      icon: 'gears',
      iconType: 'jelly',
    },
    {
      title: 'Containerização',
      description: 'Deploy com Docker e Kubernetes para consistência entre ambientes e escalabilidade.',
      icon: 'box',
      iconType: 'jelly',
    },
    {
      title: 'Monitoramento & Logs',
      description: 'Sistemas de observabilidade para monitorar performance e comportamento em tempo real.',
      icon: 'chart-line',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'AWS',
      description: 'Infraestrutura e serviços gerenciados na Amazon Web Services para alta disponibilidade.',
      icon: 'cloud',
    },
    {
      title: 'Google Cloud',
      description: 'Soluções em nuvem com Google Cloud Platform para escalabilidade e machine learning.',
      icon: 'cloud',
    },
    {
      title: 'Azure',
      description: 'Infraestrutura Microsoft Azure para empresas que precisam de integração com ecossistema Microsoft.',
      icon: 'cloud',
    },
    {
      title: 'Kubernetes',
      description: 'Orquestração de containers para gerenciar deploys, escalonamento e resiliência de aplicações.',
      icon: 'box',
    },
    {
      title: 'Docker',
      description: 'Containerização de aplicações para consistência entre ambientes e facilidade de deploy.',
      icon: 'box',
    },
    {
      title: 'Terraform & IaC',
      description: 'Infraestrutura como código para provisionamento automatizado, versionado e reproduzível.',
      icon: 'gears',
    },
    {
      title: 'Alertas & Incident Response',
      description: 'Sistemas de alertas proativos e playbooks de resposta a incidentes para minimizar downtime.',
      icon: 'bell',
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Estratégias de backup e recuperação de desastres para garantir continuidade do negócio.',
      icon: 'database',
    },
    {
      title: 'Otimização de Custos Cloud',
      description: 'Análise e redução de gastos em nuvem sem comprometer performance ou disponibilidade.',
      icon: 'coins',
    },
    {
      title: 'Segurança em Nuvem',
      description: 'Políticas de acesso, criptografia e conformidade para proteger dados e infraestrutura.',
      icon: 'shield',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Cloud</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">DevOps</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-4">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">fornece</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">infraestrutura</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">moderna</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">automatizada</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">seus</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">rodem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">alta</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">disponibilidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">entregas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">contínuas.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">AWS,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">Google</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">Cloud,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">Azure</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">as</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">melhores</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">práticas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">DevOps.</span></span>
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
                      alt="Equipe de especialistas em Cloud & DevOps da Phurshell"
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
                  alt="Infraestrutura cloud gerenciada pela Phurshell com alta disponibilidade e entregas contínuas"
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
          labelIcon="cloud"
          title="Infraestrutura moderna para produtos que não param de crescer."
          description="Nossos serviços de Cloud & DevOps garantem que seus produtos rodem com alta disponibilidade, segurança e entregas contínuas usando as melhores práticas do mercado."
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
                  alt="Equipe de especialistas em Cloud & DevOps da Phurshell"
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
              <i className="fa-jelly fa-cloud fa-xl"></i>
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
              Da auditoria ao deploy contínuo
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Você tem o produto. Agora você precisa de uma infraestrutura que acompanhe o crescimento. Com isso em mente, conduzimos cada etapa com rigor técnico: auditamos o que existe, planejamos o que deve ser, construímos com as melhores práticas e garantimos operação contínua e segura.
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
        description="Oferecemos um conjunto completo de serviços especializados em Cloud & DevOps para garantir que sua infraestrutura seja segura, eficiente e preparada para crescer. Cada serviço é cuidadosamente integrado ao seu ambiente, assegurando alta disponibilidade e operações sem interrupções."
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
                  alt="Equipe de especialistas em Cloud & DevOps da Phurshell"
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
                Quais provedores de nuvem vocês trabalham?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Trabalhamos com os três principais provedores de nuvem do mercado: AWS (Amazon Web Services), Google Cloud Platform e Microsoft Azure. A escolha do provedor depende das necessidades do seu produto, integrações existentes, exigências de compliance e otimização de custos. Nossa equipe ajuda a avaliar qual opção faz mais sentido para o seu contexto antes de qualquer implementação.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona a migração de infraestrutura existente para a nuvem?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  A migração começa com uma auditoria completa da infraestrutura atual para mapear dependências, riscos e o estado dos sistemas. A partir disso, elaboramos um plano de migração faseado que minimiza o impacto no produto em produção. Realizamos migrações com estratégias de blue-green deployment ou migração incremental por serviço, garantindo que não haja downtime inesperado durante o processo.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem alta disponibilidade e uptime do produto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Utilizamos arquiteturas multi-zona e multi-região para eliminar pontos únicos de falha. Implementamos load balancers, auto-scaling e health checks automáticos para que o sistema se recupere sozinho de falhas. Configuramos pipelines de CI/CD com rollback automático e monitoramos continuamente com alertas proativos para reagir antes que qualquer problema afete os usuários.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como ajudam a controlar e reduzir custos na nuvem?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Auditamos regularmente o uso de recursos para identificar serviços ociosos, instâncias superdimensionadas e oportunidades de economia. Aplicamos estratégias como reserved instances, spot instances para cargas não críticas, auto-scaling ajustado e rightsizing. Além disso, implementamos dashboards de custos em tempo real para que você tenha visibilidade total dos gastos e possa tomar decisões informadas.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que está incluído no monitoramento e como funciona o suporte a incidentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Configuramos sistemas de observabilidade completos com coleta de métricas, logs centralizados e rastreamento de erros. Alertas proativos notificam a equipe imediatamente quando qualquer indicador sai do padrão esperado. Para incidentes, temos playbooks documentados com procedimentos de resposta e escalonamento. O nível de suporte (horário comercial, 24/7 ou SLA customizado) é definido conforme o plano contratado.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
