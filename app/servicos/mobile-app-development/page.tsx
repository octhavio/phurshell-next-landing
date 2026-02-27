import TransitionLink from '@/components/TransitionLink'
import ProcessCarousel from '@/components/ProcessCarousel'
import ProjectTimeline from '@/components/ProjectTimeline'

export default function MobileAppDevelopmentPage() {
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
      title: 'Validação de ideias',
      description:
        'Começamos analisando cuidadosamente as necessidades do seu aplicativo mobile. Esta etapa crítica inclui discussões em grupo para escolher os conceitos de app mais promissores e conduzir uma análise detalhada de viabilidade. Criamos uma estratégia de projeto sólida que visa o sucesso a longo prazo na indústria mobile.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Inovação & desenvolvimento',
      description:
        'Nossa equipe qualificada de desenvolvimento mobile é excelente em criar soluções mobile personalizadas que correspondem precisamente aos seus requisitos. Usamos os frameworks e tecnologias mais recentes para criar uma aplicação impressionante, até mesmo aproveitando correções criativas para quaisquer lacunas em sua configuração de TI atual.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 3,
      title: 'Testes de software',
      description:
        'Usamos um procedimento de teste minucioso para garantir a qualidade e usabilidade do seu aplicativo mobile. Isso inclui garantia de qualidade de software e testes para verificar funcionalidade, performance e aderência aos padrões. Também fazemos testes de aceitação do usuário e identificamos áreas para melhoria.',
      color: 'teal',
      icon: 'check-circle',
    },
    {
      stage: 4,
      title: 'Governança de projeto',
      description:
        'Esta etapa garante que seu aplicativo mobile seja lançado suavemente e continue a ter sucesso. Compreende um ponto único de contato, funções e responsabilidades bem definidas, e total transparência no gerenciamento e resolução de problemas em uma atmosfera colaborativa.',
      color: 'green',
      icon: 'rocket',
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

  const timelinePhases = [
    {
      phase: 'Início',
      color: 'gray' as const,
      steps: [
        {
          id: 'briefing',
          label: 'Briefing',
          description:
            'Reunião inicial para entender completamente seus objetivos, público-alvo, funcionalidades desejadas e requisitos técnicos do projeto.',
        },
        {
          id: 'kickoff',
          label: 'Kickoff',
          description:
            'Apresentação oficial do projeto, alinhamento de expectativas, definição de cronograma e estabelecimento de canais de comunicação com o time.',
        },
        {
          id: 'entrega-continua',
          label: 'Entrega contínua',
          description:
            'Configuração de pipeline de CI/CD para entregas incrementais, permitindo feedback rápido e ajustes ao longo do desenvolvimento.',
        },
      ],
    },
    {
      phase: 'Design',
      color: 'pink' as const,
      steps: [
        {
          id: 'design',
          label: 'Design',
          description:
            'Criação de wireframes, protótipos interativos e design visual completo da interface, focando em UX/UI e identidade da marca.',
        },
      ],
    },
    {
      phase: 'Desenvolvimento',
      color: 'teal' as const,
      steps: [
        {
          id: 'desenvolvimento-manutencao',
          label: 'Desenvolvimento e Manutenção',
          description:
            'Codificação do aplicativo seguindo as melhores práticas, code reviews constantes, e planejamento para manutenção futura e escalabilidade.',
        },
        {
          id: 'testes-qa',
          label: 'Testes de QA',
          description:
            'Testes rigorosos de funcionalidade, performance, segurança e compatibilidade em múltiplos dispositivos e versões de sistema operacional.',
        },
      ],
    },
    {
      phase: 'Lançamento',
      color: 'purple' as const,
      steps: [
        {
          id: 'publicar',
          label: 'Publicar',
          description:
            'Submissão do app para App Store e Google Play, acompanhamento do processo de revisão, e suporte completo durante o lançamento.',
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-button border border-brand-orange/30 bg-brand-orange/10 px-4 py-2">
                <span className="text-sm font-black tracking-wider text-brand-orange">
                  Desenvolvimento Mobile
                </span>
              </div>

              <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
                Apps que seus{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                    usuários amam
                  </span>
                </span>
              </h1>

              <p className="mb-8 text-pretty text-xl leading-relaxed text-dark/70">
                Desenvolvemos aplicativos mobile nativos e cross-platform de alta performance para
                iOS e Android, com foco em experiência do usuário e excelência técnica.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-sm font-bold tracking-wider text-white shadow-xl shadow-brand-orange/30 transition-smooth hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-2xl"
                >
                  <i className="fa-jelly fa-rocket"></i>
                  Começar Projeto
                </a>
                <TransitionLink
                  href="/cases"
                  className="inline-flex items-center gap-2 rounded-button border-2 border-dark/10 bg-transparent px-8 py-4 text-sm font-black tracking-wider text-dark transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
                >
                  Ver Cases
                  <i className="fa-jelly fa-arrow-right"></i>
                </TransitionLink>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-button bg-gradient-to-br from-brand-orange/10 via-gray-50 to-brand-orange-light/10">
              <div className="flex h-full items-center justify-center">
                <i className="fa-jelly fa-mobile-screen fa-10x text-brand-orange opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Por que escolher nossos serviços mobile
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-orange"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group text-center transition-smooth hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:scale-110 group-hover:bg-brand-orange">
                  <i
                    className={`fa-jelly fa-${benefit.icon} fa-2x text-brand-orange transition-colors group-hover:text-white`}
                  ></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-dark/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessCarousel stages={processStages} />

      {/* Project Timeline */}
      <ProjectTimeline phases={timelinePhases} />

      {/* Technologies */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Tecnologias que Dominamos
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-orange"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-button border border-dark/10 bg-white px-6 py-3 font-black text-dark transition-smooth hover:border-brand-orange hover:text-brand-orange"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-dark to-dark py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-button bg-white opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Vamos criar seu app mobile juntos
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Transforme sua ideia em um aplicativo de sucesso
          </p>

          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
          >
            <i className="fa-jelly fa-calendar fa-lg"></i>
            Agendar Conversa
          </a>
        </div>
      </section>
    </div>
  )
}
