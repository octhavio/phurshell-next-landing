import TransitionLink from '@/components/TransitionLink'

export const metadata = {
  title: 'Healthtech - Soluções de Tecnologia para Saúde',
  description:
    'Desenvolvemos soluções tecnológicas inovadoras para o setor de saúde. Aplicativos médicos, telemedicina, prontuário eletrônico e muito mais.',
}

export default function HealthtechPage() {
  const benefits = [
    {
      icon: 'heart-pulse',
      title: 'Telemedicina',
      description: 'Plataformas completas para consultas remotas, com videochamada, prescrição digital e integração com laboratórios.',
    },
    {
      icon: 'file-medical',
      title: 'Prontuário Eletrônico',
      description: 'Gestão completa de prontuários digitais com segurança, rastreabilidade e conformidade com a LGPD.',
    },
    {
      icon: 'mobile-screen-button',
      title: 'Apps de Saúde',
      description: 'Aplicativos para pacientes e profissionais com monitoramento, agendamento e acompanhamento médico.',
    },
    {
      icon: 'shield-halved',
      title: 'Segurança de Dados',
      description: 'Proteção máxima de dados sensíveis com criptografia, backup e conformidade com regulamentações de saúde.',
    },
  ]

  const solutions = [
    {
      title: 'Plataforma de Telemedicina',
      description: 'Sistema completo para consultas online com videochamada HD, chat, compartilhamento de documentos e prescrição digital.',
      features: ['Videochamada segura', 'Prontuário integrado', 'Prescrição digital', 'Agendamento online'],
    },
    {
      title: 'Prontuário Eletrônico',
      description: 'Gestão digital de prontuários médicos com histórico completo do paciente, exames, prescrições e evolução clínica.',
      features: ['Histórico completo', 'Assinatura digital', 'Integração com exames', 'Relatórios automáticos'],
    },
    {
      title: 'App de Monitoramento',
      description: 'Aplicativo para acompanhamento contínuo de pacientes com diabetes, hipertensão e outras condições crônicas.',
      features: ['Lembretes de medicação', 'Gráficos de evolução', 'Alertas inteligentes', 'Compartilhamento com médicos'],
    },
    {
      title: 'Sistema de Agendamento',
      description: 'Plataforma para gestão de consultas, exames e procedimentos com confirmação automática e redução de faltas.',
      features: ['Agenda inteligente', 'Confirmação por SMS/Email', 'Lembretes automáticos', 'Lista de espera'],
    },
  ]

  const cases = [
    {
      client: 'Clínica Médica',
      solution: 'Sistema de Telemedicina',
      result: '300% de aumento em consultas online',
    },
    {
      client: 'Hospital Regional',
      solution: 'Prontuário Eletrônico',
      result: '70% de redução no tempo de atendimento',
    },
    {
      client: 'Rede de Laboratórios',
      solution: 'App de Resultados',
      result: '95% de satisfação dos pacientes',
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
                  Healthtech
                </span>
              </div>

              <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
                Tecnologia para{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                    salvar vidas
                  </span>
                </span>
              </h1>

              <p className="mb-8 text-pretty text-xl leading-relaxed text-dark/70">
                Desenvolvemos soluções tecnológicas inovadoras para hospitais, clínicas, laboratórios e
                profissionais de saúde. Telemedicina, prontuário eletrônico, apps médicos e muito mais.
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
                <i className="fa-jelly fa-heart-pulse fa-10x text-brand-orange opacity-20"></i>
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
              Soluções que transformam a saúde
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

      {/* Solutions */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Nossas Soluções
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-orange"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-button border border-dark/10 bg-white transition-smooth hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-black text-dark">{solution.title}</h3>
                  <p className="mb-6 leading-relaxed text-dark/70">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-dark/60">
                        <i className="fa-jelly fa-check text-brand-orange"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Casos de Sucesso
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-orange"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cases.map((case_, index) => (
              <div
                key={index}
                className="rounded-button border border-dark/10 bg-white p-8 text-center transition-smooth hover:-translate-y-2"
              >
                <h3 className="mb-2 text-xl font-black text-dark">{case_.client}</h3>
                <p className="mb-4 text-sm text-dark/60">{case_.solution}</p>
                <div className="text-3xl font-black text-brand-orange">{case_.result}</div>
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
            Vamos revolucionar a saúde juntos
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Transforme a experiência dos seus pacientes com tecnologia de ponta
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
