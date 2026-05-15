import { Metadata } from 'next'
import ContactCTA from '../../../src/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Case Autoday | Phurshell',
  description: 'Revolucionando o mercado de seguros com tecnologia. MVP de insurtech que permite seguro automotivo sob demanda — pague apenas pelos dias que usar o veículo.',
}

export default function CaseAutoday() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Seguro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">carro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">sob</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">demanda</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">mais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">acessível</span></span>
          </h1>

          {/* Description */}
          <p className="mb-6 sm:mb-12 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-9">Um</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">MVP</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">insurtech</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">revolucionou</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">mercado</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">seguro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">intermitente</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">—</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">você</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">paga</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">apenas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">pelos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">dias</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">usar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">veículo.</span></span>
          </p>

          {/* Hero Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-30" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-autoday-hero.webp"
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
                        src="/images/img-icon-autoday.webp"
                        alt="Logo do aplicativo Autoday"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Autoday</span>
                    </div>

                    {/* Info Text */}
                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Insurtech desenvolvida pela Phurshell que trouxe inovação ao mercado de seguros automotivos. Tecnologia que permite ativar e desativar a cobertura conforme a necessidade do usuário.
                        <br />
                        <span className="font-bold">Pioneira em seguro sob demanda no Brasil</span>
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
              Visão Geral
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-dark/70">
              O Autoday nasceu com uma proposta disruptiva: revolucionar o mercado de seguros automotivos no Brasil. A ideia era simples mas inovadora — por que pagar seguro integral se você só usa o carro ocasionalmente? Em 2021, esse conceito ainda era totalmente novo no mercado brasileiro.
            </p>
            <p className="text-xl leading-relaxed text-dark/70">
              A Phurshell foi escolhida como parceira tecnológica para transformar essa visão em MVP funcional, desenvolvendo uma solução completa que permitisse aos usuários ativar e desativar a cobertura do seguro sob demanda, pagando apenas pelos dias de uso real do veículo.
            </p>
          </div>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card Segmento */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-shield-check fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Segmento</h3>
              <p className="text-xl leading-relaxed text-dark/70">Insurtech / Seguros</p>
            </div>

            {/* Card Periodo */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-calendar fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Período</h3>
              <p className="text-xl leading-relaxed text-dark/70">2021</p>
            </div>

            {/* Card Plataformas */}
            <div className="rounded-button border border-dark/10 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-clipboard fa-xl text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Plataformas</h3>
              <p className="text-xl leading-relaxed text-dark/70">iOS, Android, Backoffice</p>
            </div>
          </div>

          {/* Case Image */}
          <div className="mt-12">
            <img
              src="/images/img-autoday-case-1.webp"
              alt="Autoday case"
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
                Criar uma solução tecnológica completamente inovadora para um modelo de negócio inexistente no mercado brasileiro — um seguro automotivo que pudesse ser ativado e desativado sob demanda.
              </p>
              <p>
                O grande desafio técnico era <strong className="text-dark">desenvolver a infraestrutura</strong> que permitisse calcular preços de forma dinâmica, processar ativações/desativações em tempo real, e garantir conformidade regulatória com as normas da SUSEP.
              </p>
              <p>
                Além disso, a <strong className="text-dark">experiência do usuário</strong> precisava ser extremamente simples — em poucos toques, o motorista deveria conseguir ativar sua cobertura e sair dirigindo com tranquilidade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-lightbulb fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Modelo Inédito</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Desenvolver tecnologia para um modelo de negócio completamente novo no Brasil, sem referências de mercado para seguir.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-bolt fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Ativação em Tempo Real</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Criar sistema que permita ligar e desligar a cobertura do seguro instantaneamente, com cálculo dinâmico de preços e validação de cobertura.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-mobile fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">UX Simplificada</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Tornar todo o processo extremamente simples — do cadastro à ativação da cobertura em poucos toques na tela.
                </p>
              </div>
            </div>

            {/* Case Images */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="h-full">
                <img
                  src="/images/img-autoday-case-2.webp"
                  alt="Autoday case"
                  className="h-full w-full rounded-button object-cover"
                />
              </div>
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1">
                  <img
                    src="/images/img-autoday-case-3.webp"
                    alt="Autoday case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/images/img-autoday-case-4.webp"
                    alt="Autoday case"
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
                Transformar a visão do Autoday em MVP funcional exigiu um processo ágil e focado. Desde o entendimento do modelo de negócio inovador até o lançamento no mercado, cada etapa foi executada com objetivo claro: validar a viabilidade técnica e comercial do seguro sob demanda no Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-pencil fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Descoberta e Design</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Imersão no modelo de negócio, mapeamento de jornada do usuário e definição de arquitetura técnica. Criação de wireframes e identidade visual moderna que transmite inovação e confiança.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-code fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Desenvolvimento do MVP</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Construção de apps nativos iOS e Android, backoffice para gestão, APIs para cálculo dinâmico de preços, integração com sistemas de pagamento e infraestrutura cloud robusta.
                </p>
              </div>

              <div className="rounded-button border border-dark/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-flag fa-xl text-brand-orange"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Lançamento</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Validação técnica e regulatória com SUSEP, testes de carga e segurança, e lançamento estratégico no mercado. Suporte no go-to-market e primeiros usuários.
                </p>
              </div>
            </div>

            {/* Process Images */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1">
                  <img
                    src="/images/img-autoday-case-5.webp"
                    alt="Autoday case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/images/img-autoday-case-6.webp"
                    alt="Autoday case"
                    className="h-full w-full rounded-button object-cover"
                  />
                </div>
              </div>
              <div className="h-full">
                <img
                  src="/images/img-autoday-case-7.webp"
                  alt="Autoday case"
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
              Resultado
            </h2>
            <div className="mb-12 max-w-full space-y-4 text-xl leading-relaxed text-white/70 lg:max-w-[70%]">
              <p>
                O Autoday foi pioneiro em trazer o conceito de seguro sob demanda para o Brasil, validando tecnicamente a viabilidade desse modelo inovador e abrindo caminho para uma nova forma de pensar seguros automotivos no país.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-lightbulb fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">1o</div>
                <h3 className="mb-2 text-xl font-black text-white">Pioneirismo</h3>
                <p className="text-lg leading-relaxed text-white/70">Primeira insurtech de seguro sob demanda no Brasil</p>
              </div>

              <div className="rounded-button border border-white/10 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-users fa-xl text-brand-orange"></i>
                </div>
                <div className="mb-2 text-4xl font-black text-white">200k+</div>
                <h3 className="mb-2 text-xl font-black text-white">Usuários</h3>
                <p className="text-lg leading-relaxed text-white/70">Motoristas cadastrados na plataforma</p>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mt-12 flex items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="mb-6 text-3xl font-black text-white sm:text-4xl">
                  Transformando o Mercado de Seguros
                </h3>
                <p className="max-w-full text-xl leading-relaxed text-white/70 lg:max-w-3xl">
                  O Autoday validou tecnicamente um modelo de negócio inovador, provando que é possível oferecer seguro automotivo de forma mais flexível e acessível. A tecnologia desenvolvida abriu caminho para uma nova categoria de produtos no mercado brasileiro de seguros.
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
                        apólices - seguros - coberturas - proteção -
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Content */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-black text-white sm:text-5xl md:text-6xl">70k+</div>
                  <div className="text-lg text-brand-orange">apólices</div>
                  <div className="text-lg text-brand-orange">emitidas</div>
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
                "Foi uma empresa muito parceira nossa, porque eles contribuíram não só no desenvolvimento, mas também com ideias pro negócio. Deram muito suporte pra gente."
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src="/images/img-testimonial-autoday.webp"
                  alt="Foto de Alec Maia, CEO da Autoday"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-1 text-xl font-black text-dark">Alec Maia</h3>
                <p className="text-base font-bold text-dark/70">CEO da Autoday</p>
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
