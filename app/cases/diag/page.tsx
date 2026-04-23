import { Metadata } from 'next'
import ContactCTA from '../../../src/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Case Diag | Phurshell',
  description: 'Transformando a rotina medica com tecnologia. Plataforma completa de gestao clinica com prontuarios, receitas medicas e IA para suporte diagnostico.',
}

export default function CaseDiag() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Simplificando</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">rotina</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">medica</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">inteligencia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">artificial</span></span>
          </h1>

          {/* Description */}
          <p className="mb-6 sm:mb-12 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-8">Uma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">plataforma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">completa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">gestao</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">clinica</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">otimiza</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">trabalho</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">dos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">medicos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">prontuarios</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">digitais,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">receitas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">medicas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">IA.</span></span>
          </p>

          {/* Hero Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-27" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-diag-hero.png"
                  alt="Interface do aplicativo Diag mostrando prontuarios digitais e receitas medicas"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    {/* Logo e Nome */}
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-diag-icon.png"
                        alt="Logo do aplicativo Diag"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Diag</span>
                    </div>

                    {/* Info Text */}
                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Plataforma desenvolvida pela Phurshell que revoluciona a rotina medica com prontuarios digitais, geracao de receitas e chat com IA para suporte diagnostico.
                        <br />
                        <span className="font-bold">Quase 15 mil medicos cadastrados</span>
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Overview & Project Info */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Overview Text */}
          <div className="mb-12 max-w-full lg:max-w-[70%]">
            <h2 className="mb-8 text-4xl font-black text-dark sm:text-5xl">
              Visao Geral
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-dark/70">
              O Diag nasceu da necessidade de modernizar a rotina dos medicos brasileiros. A gestao clinica ainda era feita de forma manual, com papeis e sistemas desconectados. Prescrever receitas, gerenciar prontuarios e buscar informacoes medicas consumia tempo valioso que poderia ser dedicado aos pacientes.
            </p>
            <p className="text-xl leading-relaxed text-dark/70">
              A Phurshell desenvolveu uma plataforma completa que centraliza todas as ferramentas essenciais do dia-a-dia medico: prontuarios eletronicos, geracao de receitas digitais com validade juridica, biblioteca de medicamentos sempre atualizada e um chat com inteligencia artificial que auxilia no processo diagnostico.
            </p>
          </div>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card Segmento */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-heart-pulse fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Segmento</h3>
              <p className="text-xl leading-relaxed text-dark/70">Gestao Clinica / Healthtech</p>
            </div>

            {/* Card Periodo */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-calendar fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Periodo</h3>
              <p className="text-xl leading-relaxed text-dark/70">2022 - Presente</p>
            </div>

            {/* Card Plataformas */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-mobile fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Plataformas</h3>
              <p className="text-xl leading-relaxed text-dark/70">iOS, Android, Web, Landing Page</p>
            </div>
          </div>

          {/* Case Image */}
          <div className="mt-12">
            <img
              src="/images/img-diag-case-1.png"
              alt="Diag case"
              className="w-full rounded-button"
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div>
            <h2 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
              O Desafio
            </h2>
            <div className="mb-12 max-w-full space-y-4 text-xl leading-relaxed text-dark/70 lg:max-w-[70%]">
              <p>
                Criar uma solucao que pudesse atender medicos de diferentes especialidades, com fluxos de trabalho distintos, mantendo a facilidade de uso e conformidade com regulamentacoes medicas.
              </p>
              <p>
                Para os <strong className="text-dark">medicos</strong>, era essencial ter uma ferramenta rapida e intuitiva que nao atrapalhasse o fluxo de atendimento. A plataforma precisava gerar receitas validas juridicamente, armazenar prontuarios de forma segura (LGPD) e oferecer suporte diagnostico confiavel.
              </p>
              <p>
                Alem disso, a <strong className="text-dark">inteligencia artificial</strong> precisava ser precisa e constantemente atualizada com as informacoes medicas mais recentes, auxiliando o profissional sem substituir seu julgamento clinico.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-clipboard fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Prontuarios Eletronicos</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Desenvolver sistema seguro e pratico de prontuarios digitais com conformidade LGPD e acesso rapido ao historico completo do paciente.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-plus fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Receitas Digitais</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Criar sistema de prescricao medica digital com validade juridica, integrado a base de medicamentos atualizada e com alertas de interacoes medicamentosas.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-sparkles fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">IA Diagnostica</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Implementar chat com inteligencia artificial treinada em literatura medica para auxiliar no processo diagnostico e sugerir condutas baseadas em evidencias.
                </p>
              </div>
            </div>

            {/* Case Images */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="h-full">
                <img
                  src="/images/img-diag-case-2.png"
                  alt="Diag case"
                  className="h-full w-full rounded-button object-cover"
                />
              </div>
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1">
                  <img
                    src="/images/img-diag-case-3.png"
                    alt="Diag case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/images/img-diag-case-4.png"
                    alt="Diag case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div>
            <h2 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
              Nosso Processo
            </h2>
            <div className="mb-12 max-w-full space-y-4 text-xl leading-relaxed text-dark/70 lg:max-w-[70%]">
              <p>
                Transformar a visao do Diag em realidade exigiu profunda imersao no universo medico. Desde entender o fluxo de trabalho dos profissionais de saude ate implementar IA confiavel, cada etapa foi pensada para criar uma ferramenta que medicos realmente utilizariam no dia-a-dia.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-plus fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Imersao Medica</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Pesquisa profunda com medicos de diferentes especialidades, mapeamento de fluxos de atendimento e validacao de funcionalidades. Design focado em agilidade e conformidade regulatoria.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-code fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Desenvolvimento</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Apps nativos iOS e Android, plataforma web, infraestrutura escalavel, integracao com base de dados de medicamentos (Anvisa), sistema de IA com modelos de linguagem medica e conformidade total com LGPD.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-arrows-rotate fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Evolucao Continua</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Lancamento gradual com onboarding de medicos beta-testers. Atualizacao constante da base de conhecimento da IA e melhorias baseadas no feedback real dos profissionais.
                </p>
              </div>
            </div>

            {/* Process Images */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1">
                  <img
                    src="/images/img-diag-case-5.png"
                    alt="Diag case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/images/img-diag-case-6.png"
                    alt="Diag case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
              </div>
              <div className="h-full">
                <img
                  src="/images/img-diag-case-7.png"
                  alt="Diag case"
                  className="h-full w-full rounded-button object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div>
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
              Resultados
            </h2>
            <div className="mb-12 max-w-full space-y-4 text-xl leading-relaxed text-white/70 lg:max-w-[70%]">
              <p>
                O Diag se tornou uma ferramenta essencial para milhares de medicos brasileiros, otimizando consultas, reduzindo tempo de prescricao e oferecendo suporte diagnostico baseado em evidencias cientificas atualizadas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-users fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">15k+</div>
                <h3 className="mb-2 text-xl font-black text-white">Medicos</h3>
                <p className="text-lg leading-relaxed text-white/70">Cadastrados na plataforma</p>
              </div>

              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-plus fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">10k+</div>
                <h3 className="mb-2 text-xl font-black text-white">Receitas Medicas</h3>
                <p className="text-lg leading-relaxed text-white/70">Geradas na plataforma</p>
              </div>

              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-clipboard fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">4k+</div>
                <h3 className="mb-2 text-xl font-black text-white">Prontuarios Medicos</h3>
                <p className="text-lg leading-relaxed text-white/70">Gerados na plataforma</p>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mt-12 flex items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="mb-6 text-3xl font-black text-white sm:text-4xl">
                  Impacto Real na Saude
                </h3>
                <p className="max-w-full text-xl leading-relaxed text-white/70 lg:max-w-3xl">
                  O Diag revolucionou a rotina de milhares de medicos brasileiros, permitindo que dediquem mais tempo aos pacientes e menos tempo com burocracia. A IA auxilia em diagnosticos mais precisos, reduzindo erros e aumentando a qualidade do atendimento medico.
                </p>
              </div>

              {/* Circular Stat */}
              <div className="relative hidden h-48 w-48 flex-shrink-0 items-center justify-center sm:h-56 sm:w-56 md:flex md:h-64 md:w-64">
                {/* Decorative circular text */}
                <div className="absolute inset-0">
                  <svg className="h-full w-full animate-spin-slow" viewBox="0 0 256 256">
                    <defs>
                      <path
                        id="impactCircle"
                        d="M 128, 128 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                      />
                    </defs>
                    <text className="fill-white/20 text-sm uppercase tracking-[0.3em]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      <textPath href="#impactCircle" startOffset="0%">
                        prontuarios - receitas - diagnosticos - medicina -
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Content */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-black text-white sm:text-5xl md:text-6xl">6k+</div>
                  <div className="text-lg text-brand-orange">pacientes</div>
                  <div className="text-lg text-brand-orange">atendidos</div>
                </div>
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
                "Sabe quando voce encontra parceiros que realmente vestem a camisa junto com voce? A Phurshell e exatamente isso. Uma empresa cheia de ideias impressionantes, com uma equipe batalhadora e extremamente dedicada, e o melhor: sempre disposta a ajudar de verdade."
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src="/images/img-testimonial-diag.png"
                  alt="Foto de Amanda Martins, Fundadora do Diag"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-1 text-xl font-black text-dark">Amanda Bernardes</h3>
                <p className="text-base font-bold text-dark/70">Fundadora do Diag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
