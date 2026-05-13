'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ServicosQualidadeSeguranca() {
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
      title: 'Levantamento de requisitos de qualidade',
      description:
        'Iniciamos com uma análise profunda do seu produto, mapeando os requisitos de qualidade, critérios de aceitação e pontos críticos de negócio. Esta etapa define os padrões mínimos de funcionamento, as métricas de cobertura de testes e os riscos prioritários a serem mitigados ao longo de todo o ciclo de desenvolvimento.',
      color: 'red',
      icon: 'clipboard-list',
    },
    {
      stage: 2,
      title: 'Planejamento de testes',
      description:
        'Com base nos requisitos levantados, elaboramos um plano de testes detalhado que define estratégia, escopo, tipos de testes a serem aplicados, ferramentas, ambientes e responsabilidades. O planejamento garante que a cobertura seja completa, eficiente e alinhada aos objetivos de negócio.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Testes unitários',
      description:
        'Implementamos testes unitários para validar cada função, método e componente de forma isolada. Esta camada de testes é a base da pirâmide de qualidade, garantindo que cada unidade de código se comporte conforme esperado e permitindo refatorações com segurança e confiança.',
      color: 'blue',
      icon: 'vial-circle-check',
    },
    {
      stage: 4,
      title: 'Testes de integração',
      description:
        'Validamos como os diferentes módulos, serviços e APIs se comunicam entre si. Os testes de integração identificam falhas nas interfaces entre componentes, inconsistências nos contratos de API e problemas de fluxo de dados que só surgem quando os sistemas trabalham em conjunto.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Testes End-to-End (E2E)',
      description:
        'Simulamos o comportamento real do usuário, testando fluxos completos da aplicação do início ao fim. Os testes E2E garantem que todas as camadas do sistema funcionem corretamente em conjunto, validando a experiência completa antes de qualquer entrega em produção.',
      color: 'blue',
      icon: 'check-double',
    },
    {
      stage: 6,
      title: 'Auditoria de segurança',
      description:
        'Realizamos uma revisão técnica aprofundada do código, arquitetura e configurações do sistema em busca de vulnerabilidades. A auditoria cobre exposição de dados sensíveis, falhas de autenticação, injeção de código, dependências desatualizadas e não conformidades com as melhores práticas de segurança (OWASP, LGPD).',
      color: 'teal',
      icon: 'shield',
    },
    {
      stage: 7,
      title: 'Pentesting',
      description:
        'Executamos testes de penetração simulando ataques reais ao seu sistema. O pentesting identifica falhas que ferramentas automatizadas não detectam, como lógica de negócio vulnerável, escalação de privilégios e vetores de ataque encadeados. Entregamos um relatório detalhado com as vulnerabilidades encontradas e recomendações de correção priorizadas.',
      color: 'green',
      icon: 'bug',
    },
    {
      stage: 8,
      title: 'Relatório e melhoria contínua',
      description:
        'Ao final de cada ciclo, entregamos relatórios completos com cobertura de testes, vulnerabilidades encontradas, nível de risco, evidências e plano de ação corretivo. Estabelecemos um processo de melhoria contínua com revisões periódicas, atualização de testes e monitoramento constante para garantir que a qualidade e segurança evoluam junto com o produto.',
      color: 'blue',
      icon: 'chart-line',
    },
  ]

  const services = [
    {
      title: 'Testes Automatizados',
      description: 'Suite completa de testes unitários, integração e E2E garantindo qualidade e confiabilidade contínua.',
      icon: 'vial-circle-check',
      iconType: 'jelly',
    },
    {
      title: 'QA & Software Testing',
      description: 'Garantia de qualidade abrangente com testes manuais e automatizados para excelência do produto.',
      icon: 'check-double',
      iconType: 'jelly',
    },
    {
      title: 'Testes de Performance',
      description: 'Análise e otimização de performance com testes de carga e stress para resposta rápida sob demanda.',
      icon: 'gauge-high',
      iconType: 'jelly',
    },
    {
      title: 'Cyber Segurança',
      description: 'Proteção completa contra ameaças digitais com auditoria de segurança e pentesting.',
      icon: 'shield-halved',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Auditoria de Código',
      description: 'Revisão técnica profunda do código-fonte em busca de vulnerabilidades, más práticas e débitos técnicos.',
      icon: 'file-code',
    },
    {
      title: 'OWASP Compliance',
      description: 'Verificação e adequação do sistema às diretrizes OWASP Top 10 para aplicações web seguras.',
      icon: 'shield',
    },
    {
      title: 'Testes de Regressão',
      description: 'Validação contínua para garantir que novas funcionalidades não introduzam falhas em recursos existentes.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Load Testing',
      description: 'Testes de carga e stress para validar o comportamento do sistema sob alta demanda e tráfego intenso.',
      icon: 'gauge-high',
    },
    {
      title: 'Penetration Testing',
      description: 'Simulação de ataques reais para identificar falhas de segurança antes que agentes maliciosos o façam.',
      icon: 'bug',
    },
    {
      title: 'Análise de Vulnerabilidades',
      description: 'Varredura sistemática do sistema para identificar, classificar e priorizar vulnerabilidades de segurança.',
      icon: 'magnifying-glass',
    },
    {
      title: 'LGPD & Compliance',
      description: 'Adequação do produto às exigências da LGPD e demais regulamentações de proteção de dados.',
      icon: 'scale-balanced',
    },
    {
      title: 'Criptografia & Proteção de Dados',
      description: 'Implementação de criptografia robusta e mecanismos de proteção para dados sensíveis em trânsito e em repouso.',
      icon: 'lock',
    },
    {
      title: 'Monitoramento de Segurança',
      description: 'Monitoramento contínuo de eventos de segurança, alertas em tempo real e resposta a incidentes.',
      icon: 'chart-line',
    },
    {
      title: 'Treinamento em Segurança',
      description: 'Capacitação de equipes em boas práticas de segurança, desenvolvimento seguro e prevenção de ataques.',
      icon: 'graduation-cap',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Qualidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">Software</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Segurança</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">garante</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">seu</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">produto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">funcione</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">excelência,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">segurança</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">confiabilidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">qualquer</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">cenário.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">Testes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">automatizados,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">QA,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">pentesting</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">auditoria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">código</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">rigor</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">técnico.</span></span>
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
                      alt="Equipe de especialistas em qualidade e segurança da Phurshell"
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
                  alt="Dashboard de qualidade e segurança desenvolvido pela Phurshell"
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
          labelIcon="shield"
          title="Garantimos qualidade e segurança em cada linha de código."
          description="Nossos serviços de QA e segurança abrangem desde testes automatizados e auditoria de código até pentesting e conformidade com melhores práticas de segurança."
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
                  alt="Equipe de especialistas em qualidade e segurança da Phurshell"
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
              <i className="fa-jelly fa-shield fa-xl"></i>
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
              Da análise ao produto seguro
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Você tem o produto. Agora você precisa de um parceiro especializado focado em garantir qualidade, confiabilidade e segurança em cada entrega. Com isso em mente, estruturamos um processo completo de QA e segurança que cobre desde o levantamento de requisitos até a melhoria contínua pós-lançamento.
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
        description="Oferecemos um conjunto completo de serviços especializados em qualidade e segurança para proteger e validar seu produto digital. Cada serviço é integrado ao ciclo de desenvolvimento, garantindo conformidade, proteção de dados e performance em todas as etapas."
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
                  alt="Equipe de especialistas em qualidade e segurança da Phurshell"
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
                Quais tipos de testes a Phurshell realiza?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Realizamos testes unitários, de integração, end-to-end (E2E), de performance, de carga, de regressão e testes de segurança. Nossa abordagem cobre toda a pirâmide de testes, garantindo qualidade em todos os níveis do sistema — desde funções individuais até fluxos completos do usuário. Também realizamos testes manuais exploratórios quando necessário para cenários críticos de negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que é pentesting e quando devo contratar?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Pentesting (teste de penetração) é uma simulação controlada de ataques reais ao seu sistema, realizada por especialistas em segurança ofensiva. O objetivo é identificar vulnerabilidades antes que agentes maliciosos o façam. Recomendamos pentesting antes de lançamentos importantes, após mudanças significativas na arquitetura, periodicamente em sistemas críticos ou quando exigido por regulamentações como LGPD, PCI-DSS ou ISO 27001.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como a Phurshell ajuda na conformidade com a LGPD?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Realizamos uma auditoria completa do fluxo de dados pessoais no seu sistema, identificando coleta, armazenamento, processamento e compartilhamento de dados. A partir disso, mapeamos as lacunas em relação aos requisitos da LGPD e implementamos controles técnicos como criptografia, anonimização, gestão de consentimento, logs de auditoria e mecanismos para exercício dos direitos dos titulares de dados.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona o processo de QA no meu projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Integramos o QA ao longo de todo o ciclo de desenvolvimento, não apenas no final. Começamos com o levantamento de requisitos de qualidade, definimos critérios de aceitação claros, implementamos testes automatizados junto com o código e realizamos revisões de qualidade a cada entrega. Isso garante que problemas sejam identificados e corrigidos o mais cedo possível, reduzindo custo e tempo de correção.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Que tipo de relatório recebo ao final de uma auditoria ou pentesting?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Entregamos relatórios detalhados com sumário executivo para gestores e análise técnica aprofundada para a equipe de desenvolvimento. O relatório inclui todas as vulnerabilidades encontradas, classificadas por severidade (crítica, alta, média, baixa), evidências, descrição do impacto, passos para reprodução e recomendações de correção priorizadas. Após a correção, realizamos uma validação para confirmar que as vulnerabilidades foram devidamente tratadas.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
