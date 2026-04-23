import { Metadata } from 'next'
import ContactCTA from '../../../src/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Case Psiapp | Phurshell',
  description: 'Conectando psicologos e pacientes atraves da tecnologia. Desenvolvimento completo dos aplicativos iOS e Android, backoffice e analise de dados.',
}

export default function CasePsiapp() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Conectando</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">psicologos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">pacientes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">atraves</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">da</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">tecnologia</span></span>
          </h1>

          {/* Description */}
          <p className="mb-6 sm:mb-12 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-8">Uma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">plataforma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">completa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">facilita</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">acesso</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">psicoterapia,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">conectando</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">profissionais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">pacientes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">forma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">simples,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">segura</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">eficiente.</span></span>
          </p>

          {/* Hero Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-27" style={{ display: 'block', height: '100%', position: 'relative' }}>
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
                        Um dos aplicativos desenvolvidos pela Phurshell, que conecta psicologos a pacientes, facilitando o agendamento de consultas e o acompanhamento terapeutico de forma pratica e segura.
                        <br />
                        <span className="font-bold">Sao quase 100 mil downloads</span>
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-white">4.8</span>
                      <div className="flex gap-0.5">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </div>
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
              O Psiapp nasceu com a missao de democratizar o acesso a psicoterapia no Brasil. Em 2020, quando a ideia surgiu, encontrar um psicologo compativel com suas necessidades era um processo complexo e demorado. A pandemia acelerou a necessidade de solucoes digitais na area da saude mental.
            </p>
            <p className="text-xl leading-relaxed text-dark/70">
              A Phurshell foi escolhida como parceira tecnologica para transformar essa visao em realidade, desenvolvendo uma plataforma completa que conecta psicologos e pacientes de forma simples, segura e eficiente.
            </p>
          </div>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card Segmento */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-landmark fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Segmento</h3>
              <p className="text-xl leading-relaxed text-dark/70">Saude Mental / Healthtech</p>
            </div>

            {/* Card Periodo */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-calendar fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Periodo</h3>
              <p className="text-xl leading-relaxed text-dark/70">2020 - Presente</p>
            </div>

            {/* Card Plataformas */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-clipboard fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Plataformas</h3>
              <p className="text-xl leading-relaxed text-dark/70">iOS, Android, Web, Backoffice</p>
            </div>
          </div>

          {/* Case Image */}
          <div className="mt-12">
            <img
              src="/images/img-psiapp-case-1.png"
              alt="Psiapp case"
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
                Criar uma plataforma que atendesse simultaneamente dois publicos distintos — psicologos e pacientes — cada um com necessidades e expectativas diferentes.
              </p>
              <p>
                Para os <strong className="text-dark">psicologos</strong>, era essencial oferecer ferramentas profissionais de gestao: agenda, prontuarios, controle financeiro e um perfil que destacasse suas especializacoes.
              </p>
              <p>
                Para os <strong className="text-dark">pacientes</strong>, a experiencia precisava ser acolhedora e descomplicada: buscar profissionais por especializacao, agendar consultas com facilidade e ter um ambiente seguro para suas sessoes online.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-users fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Dupla Persona</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Equilibrar as necessidades de profissionais de saude com a experiencia de usuarios finais buscando ajuda.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-bolt fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Agendamento Rapido</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Conectar pacientes e psicologos em consultas imediatas, como um "Uber da psicoterapia", permitindo atendimento instantaneo quando o paciente mais precisa.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-video fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Videochamadas Estaveis</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Implementar sistema de videochamadas confiavel para sessoes terapeuticas sem interrupcoes.
                </p>
              </div>
            </div>

            {/* Case Images */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="h-full">
                <img
                  src="/images/img-psiapp-case-2.png"
                  alt="Psiapp case"
                  className="h-full w-full rounded-button object-cover"
                />
              </div>
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1">
                  <img
                    src="/images/img-psiapp-case-3.png"
                    alt="Psiapp case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/images/img-psiapp-case-4.png"
                    alt="Psiapp case"
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
                Transformar a visao do Psiapp em realidade exigiu um processo estruturado e colaborativo. Desde a imersao no universo da psicoterapia ate o lancamento e evolucao continua, cada etapa foi cuidadosamente planejada para garantir uma plataforma que atendesse as necessidades reais de psicologos e pacientes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-pencil fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Design e Validacao</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Imersao profunda com psicologos e pacientes, prototipagem rapida e validacao de hipoteses. Criacao de wireframes e identidade visual que transmite profissionalismo e acolhimento.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-code fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Desenvolvimento</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Construcao de apps nativos iOS e Android, backoffice web, infraestrutura escalavel com videochamadas WebRTC, pagamentos e seguranca end-to-end com conformidade LGPD.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-flag fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Lancamento e Evolucao</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Lancamento estrategico com onboarding gradual. Ciclo continuo de melhorias baseado em dados de uso e feedbacks, evoluindo constantemente para atender necessidades reais.
                </p>
              </div>
            </div>

            {/* Process Images */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1">
                  <img
                    src="/images/img-psiapp-case-5.png"
                    alt="Psiapp case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/images/img-psiapp-case-6.png"
                    alt="Psiapp case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
              </div>
              <div className="h-full">
                <img
                  src="/images/img-psiapp-case-7.png"
                  alt="Psiapp case"
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
                O Psiapp se consolidou como uma das principais plataformas de psicoterapia online do Brasil, facilitando o acesso a saude mental para milhares de pessoas e proporcionando aos psicologos uma ferramenta profissional completa para gerenciar suas praticas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-users fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">100k+</div>
                <h3 className="mb-2 text-xl font-black text-white">Pacientes</h3>
                <p className="text-lg leading-relaxed text-white/70">Ativos na plataforma</p>
              </div>

              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-star fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">4.8</div>
                <h3 className="mb-2 text-xl font-black text-white">Avaliacao</h3>
                <p className="text-lg leading-relaxed text-white/70">Media nas app stores</p>
              </div>

              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-user fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">4k+</div>
                <h3 className="mb-2 text-xl font-black text-white">Psicologos</h3>
                <p className="text-lg leading-relaxed text-white/70">Ativos na plataforma</p>
              </div>

              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-arrow-right-arrow-left fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">2.7mi+</div>
                <h3 className="mb-2 text-xl font-black text-white">Receita Gerada</h3>
                <p className="text-lg leading-relaxed text-white/70">Para psicologos na plataforma</p>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mt-12 flex items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="mb-6 text-3xl font-black text-white sm:text-4xl">
                  Impacto Real na Saude Mental
                </h3>
                <p className="max-w-full text-xl leading-relaxed text-white/70 lg:max-w-3xl">
                  O Psiapp se consolidou como uma das principais plataformas de psicoterapia online do Brasil, facilitando o acesso a saude mental para milhares de pessoas e proporcionando aos psicologos uma ferramenta profissional completa para gerenciar suas praticas.
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
                        consultas - sessoes - atendimentos - psicoterapia -
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Content */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-black text-white sm:text-5xl md:text-6xl">20k+</div>
                  <div className="text-lg text-brand-orange">consultas</div>
                  <div className="text-lg text-brand-orange">realizadas</div>
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
                "Ficou muito, muito bom! Eu adorei, nao conseguiria pensar em algo melhor, ficou incrivel, amei!"
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src="/images/img-testimonial-psiapp.png"
                  alt="Foto de Pamela Magalhaes, Idealizadora do Psiapp"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-1 text-xl font-black text-dark">Pamela Magalhaes</h3>
                <p className="text-base font-bold text-dark/70">Idealizadora</p>
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
