'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ServicosApps() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Validação da ideia',
      description:
        'Começamos analisando cuidadosamente as necessidades do seu aplicativo mobile. Esta etapa crítica inclui discussões em grupo para escolher os conceitos de app mais promissores e conduzir uma análise detalhada de viabilidade. Criamos uma estratégia de projeto sólida que visa o sucesso a longo prazo na indústria mobile.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Criação do wireframe',
      description:
        'Baseado na sua ideia, criamos wireframes detalhados com todas as telas e fluxos de navegação do aplicativo. Transformamos conceitos abstratos em representações visuais concretas, permitindo que você visualize e valide cada etapa da jornada do usuário antes mesmo de iniciar o desenvolvimento. Este processo garante alinhamento total entre sua visão e o produto final.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Criação da infraestrutura',
      description:
        'Para iniciar o projeto, estruturamos toda a base tecnológica necessária: configuramos o banco de dados, desenvolvemos a API RESTful, estabelecemos integrações com serviços externos e preparamos o ambiente de servidor. Esta fundação sólida garante que o aplicativo tenha escalabilidade, segurança e performance desde o primeiro dia de desenvolvimento.',
      color: 'blue',
      icon: 'database',
    },
    {
      stage: 4,
      title: 'Integração com terceiros',
      description:
        'Todo projeto moderno depende de serviços externos: gateways de pagamento, sistemas de autenticação, serviços de e-mail, armazenamento em nuvem, APIs de mapas, entre outros. Auxiliamos na criação e configuração de todas as contas necessárias, gerenciamos credenciais e implementamos as integrações de forma segura, garantindo que seu projeto esteja conectado ao ecossistema digital de forma robusta.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Arquitetura e desenvolvimento',
      description:
        'Nossa equipe de desenvolvimento cria soluções personalizadas utilizando os frameworks e tecnologias mais modernas do mercado. Uma arquitetura bem planejada é fundamental para o crescimento sustentável do projeto, garantindo que o aplicativo seja escalável, fácil de manter e preparado para evoluir conforme as necessidades do negócio mudam ao longo do tempo.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'Testes automatizados',
      description:
        'Implementamos uma estratégia completa de testes automatizados incluindo testes unitários para validar cada componente individualmente e testes end-to-end para simular o fluxo completo do usuário. Esta abordagem identifica bugs e problemas antes que cheguem à produção, prevenindo falhas críticas, reduzindo custos de correção e garantindo que novas funcionalidades não quebrem recursos existentes.',
      color: 'teal',
      icon: 'gauge',
    },
    {
      stage: 7,
      title: 'Lançamento do projeto',
      description:
        'Com a infraestrutura configurada, o desenvolvimento concluído e todos os testes validados, seu projeto está pronto para nascer. Configuramos o ambiente de produção e acompanhamos de perto as primeiras horas de vida. A partir deste momento, usuários reais começam a validar o produto, gerando feedbacks valiosos que guiarão as próximas evoluções.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Manutenção contínua',
      description:
        'Esta etapa nasce junto com o lançamento e permanece viva enquanto o projeto existir. É um processo colaborativo constante entre nossa equipe, você e seus usuários. Coletamos feedbacks, identificamos oportunidades de melhoria, corrigimos bugs, implementamos novas funcionalidades e evoluímos o produto continuamente. Seu projeto é um organismo vivo que cresce e se adapta às necessidades do mercado.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'iOS',
      description: 'Aplicativos para iPhone e iPad com design intuitivo e integração com o ecossistema Apple.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Android',
      description: 'Aplicativos para smartphones e tablets com interface moderna e otimizados para diferentes dispositivos.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Web',
      description: 'Aplicações web responsivas, dashboards interativos e plataformas SaaS completas.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'PWA',
      description: 'Progressive Web Apps com experiência mobile completa e capacidade de instalação.',
      icon: 'mobile',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Arquitetura e estratégia mobile',
      description: 'Planejamento estratégico e arquitetura escalável para aplicações mobile.',
      icon: 'city',
    },
    {
      title: 'Backend & integração de APIs',
      description: 'Desenvolvimento de APIs robustas e integração com serviços externos.',
      icon: 'wrench',
    },
    {
      title: 'CI/CD & DevOps',
      description: 'Automação de deploy e infraestrutura para entrega contínua.',
      icon: 'arrow-up-from-line',
    },
    {
      title: 'Design UX e UI',
      description: 'Interfaces modernas e experiências de usuário otimizadas para maximizar engajamento.',
      icon: 'palette',
    },
    {
      title: 'Testes de segurança para apps',
      description: 'Análise de vulnerabilidades e testes de penetração em aplicações mobile.',
      icon: 'shield-halved',
    },
    {
      title: 'Banco de dados',
      description: 'Modelagem e implementação de bancos de dados otimizados para performance.',
      icon: 'database',
    },
    {
      title: 'Autenticação & segurança',
      description: 'Implementação de autenticação robusta, criptografia e proteção de dados.',
      icon: 'shield',
    },
    {
      title: 'Cloud infrastructure',
      description: 'Configuração de infraestrutura em nuvem escalável com AWS, Google Cloud ou Azure.',
      icon: 'cloud',
    },
    {
      title: 'Testes automatizados',
      description: 'Testes unitários, de integração e end-to-end para garantir qualidade.',
      icon: 'gauge',
    },
    {
      title: 'Integrações de sistemas',
      description: 'Conexão com sistemas de pagamento, ERPs, CRMs e serviços de terceiros.',
      icon: 'link',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Desenvolvimento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">aplicativos</span></span>
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Empresa de desenvolvimento de aplicativos iOS e Android
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-4">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">é</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">uma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">empresa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">especializada</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">desenvolvimento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">aplicativos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">customizados</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">iOS</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">Android.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">Criamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">soluções</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">sob</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">medida</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">transformam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">suas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">ideias</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">digitais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">alta</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-32">performance,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-33">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-34">foco</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-35">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-36">experiência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-37">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-38">usuário</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-39">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-40">excelência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-41">técnica.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-42" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-43" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.webp"
                      alt="Equipe de especialistas em desenvolvimento mobile da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-44">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-45">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-46">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-47">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-48">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-49" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.webp"
                  alt="Interface de aplicativo mobile desenvolvido pela Phurshell mostrando design moderno e funcional"
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
                        Um dos aplicativos desenvolvidos pela Phurshell, que conecta psicólogos a pacientes, facilitando o agendamento de consultas e o acompanhamento terapêutico de forma prática e segura.
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
          labelIcon="suitcase"
          title="Não importa o que você quer construir, nós podemos ajudar."
          description="Nossos serviços de desenvolvimento mobile abrangem todo o ciclo de vida do produto, desde estratégia e design até implantação e suporte pós-lançamento. De UI e backend até arquitetura e workflows de release, mantemos o desenvolvimento em movimento sem introduzir riscos de entrega."
          bgColor="white"
          cardStyle="service"
        />
      </section>

      {/* Outros Serviços */}
      <ProcessCarousel
        items={solutions}
        label="Outros Serviços"
        hideLabel={true}
        smallTitle={true}
        labelIcon="suitcase"
        title="Outros serviços que também fazem parte do processo"
        showCta={true}
        description="Oferecemos um conjunto completo de serviços especializados para transformar sua ideia em um aplicativo de sucesso. Cada serviço é cuidadosamente integrado ao processo de desenvolvimento, garantindo qualidade, segurança e performance em todas as etapas do projeto."
        bgColor="white"
        cardStyle="service"
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Da ideia ao lançamento"
        description="Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, ajudaremos você com suas primeiras decisões críticas de produto, como tecnologia, branding, design e experiência. E configuraremos seu aplicativo e negócio para o sucesso."
        bgColor="gray"
        cardStyle="process"
      />

      {/* Cases */}
      <CasesCarousel />

      {/* Testimonial */}
      <TestimonialCarousel />

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
                Qual é o prazo estimado para o projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O prazo varia de acordo com a complexidade e escopo do projeto. Projetos simples podem levar de 2 a 3 meses, enquanto aplicativos mais complexos podem levar de 4 a 8 meses. Durante a reunião de validação da ideia, mapeamos todas as funcionalidades e criamos um cronograma detalhado com marcos e entregas específicas.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que é preciso para iniciar o desenvolvimento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Para iniciar, precisamos entender sua visão e objetivos de negócio. Começamos com uma reunião de validação da ideia para mapear requisitos, definir funcionalidades prioritárias e entender seu público-alvo. Você não precisa ter especificações técnicas detalhadas - nossa equipe ajuda a transformar sua ideia em um plano de desenvolvimento estruturado.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como será a comunicação (reuniões, canais, frequência)?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Realizamos uma reunião em cada etapa do nosso processo para apresentar o progresso, tirar dúvidas e alinhar próximos passos. Além disso, criamos um grupo no WhatsApp dedicado ao projeto para facilitar a comunicação rápida em caso de dúvidas ou qualquer outro assunto relacionado ao desenvolvimento.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem que o software atenderá o escopo?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Utilizamos metodologias ágeis com sprints bem definidos e entregas incrementais. Cada funcionalidade passa por validação com você antes de avançarmos. Mantemos documentação detalhada, realizamos code reviews constantes e testes automatizados. Você terá acesso ao projeto em desenvolvimento e poderá acompanhar cada etapa do progresso.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Há suporte técnico após o encerramento do projeto? Qual o custo?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim, oferecemos planos de suporte e manutenção contínua. Isso inclui correção de bugs, atualizações de compatibilidade com novas versões do iOS/Android, monitoramento de performance e pequenas melhorias. O custo varia de acordo com o nível de suporte (básico, intermediário ou premium). Também oferecemos SLA customizado para aplicativos críticos.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
