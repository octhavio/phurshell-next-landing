import type { Metadata } from 'next'
import ContactCTA from '../../src/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a Phurshell: uma equipe de especialistas apaixonados por criar aplicativos excepcionais que transformam negócios.',
}

const teamMembers = [
  {
    name: 'Gustavo Bittar',
    role: 'Co-Fundador',
    image: '/images/team/guga.jpg',
  },
  {
    name: 'Bruno Campanhã',
    role: 'Co-Fundador',
    image: '/images/team/bruno.jpg',
  },
  {
    name: 'Octhavio Martins',
    role: 'Co-Fundador',
    image: '/images/team/octhavio.jpg',
  },
  {
    name: 'Andrews Alves',
    role: 'Desenvolvedor',
    image: '/images/team/andrews.jpg',
  },
  {
    name: 'Paulo Marinho',
    role: 'Desenvolvedor',
    image: '/images/team/paulo.jpg',
  },
  {
    name: 'Vinicius Alves',
    role: 'Desenvolvedor',
    image: '/images/team/vinnie.jpg',
  },
  {
    name: 'Máquina de café',
    role: 'Assistente',
    image: '/images/maquina.jpg',
  },
]

const whyWorkWithUs = [
  {
    icon: 'fa-clock',
    title: 'Metodologias ágeis',
    description:
      'Dobro do trabalho em metade do tempo. Nosso time trabalha de forma organizada e eficiente, sempre focando o resultado final.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Crescimento rápido',
    description:
      'Não esperamos ficar pra trás. Nós estudamos, testamos, e colocamos em prática novas tecnologias de maneira ágil.',
  },
  {
    icon: 'fa-door-open',
    title: 'Ambiente flexível',
    description:
      'Nem todo mundo trabalha da mesma maneira. Nosso time tem a liberdade para escolher como preferem trabalhar, nosso comprometimento é com os resultados.',
  },
]

export default function Sobre() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Quem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">somos?</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-3">Na</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">Phurshell,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">te</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">ajudamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">transformar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">seu</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">negócio</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">combinando</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">design</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">minimalista</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">máxima</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">usabilidade.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">Temos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">equipes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">multidisciplinares</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">podem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">te</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">ajudar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">todas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">as</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">fases</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">dos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">seus</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">produtos.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-12 flex items-center gap-6">
            <span className="word word-delay-31" style={{ display: 'inline-block' }}>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </a>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-32" style={{ display: 'inline-block' }}>
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
                    <span className="word-wrapper"><span className="word word-delay-33">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-34">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-35">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-36">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-37">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* About - Um time que faz acontecer */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                Um time que faz acontecer!
              </h2>
              <p className="text-xl leading-relaxed text-dark/70">
                Somos uma equipe de entusiastas em tecnologia sempre focada em trazer o que há de
                mais novo no mercado para nossos parceiros.
              </p>
              <p className="text-xl leading-relaxed text-dark/70">
                Gostamos do que fazemos e nos divertimos enquanto estamos trabalhando.
              </p>
            </div>
            <div className="overflow-hidden rounded-button shadow-lg">
              <img
                src="/images/team-1.jpg"
                alt="Equipe Phurshell"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Porque trabalhar com a gente?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyWorkWithUs.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className={`fa-solid ${item.icon} text-2xl text-brand-orange`}></i>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-black text-dark">{item.title}</h3>
                  <p className="leading-relaxed text-dark/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photos Grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-button shadow-lg">
              <img
                src="/images/phurshell-team-1.jpg"
                alt="Equipe Phurshell 1"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-button shadow-lg">
              <img
                src="/images/phurshell-team-2.jpg"
                alt="Equipe Phurshell 2"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-button shadow-lg">
              <img
                src="/images/phurshell-team-3.jpg"
                alt="Equipe Phurshell 3"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Time principal
            </h2>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-button border border-dark/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 overflow-hidden rounded-button">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg font-black text-dark">{member.name}</h3>
                <p className="text-sm text-dark/60">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-dark/70">
              Quer trabalhar com a gente? Envie seu currículo para{' '}
              <a
                href="mailto:contato@phurshell.com"
                className="font-bold text-brand-orange transition-colors hover:text-brand-orange-light"
              >
                contato@phurshell.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
