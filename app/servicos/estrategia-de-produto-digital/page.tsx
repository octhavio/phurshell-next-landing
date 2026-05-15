'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ServicosEstrategiaProduto() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Discovery de produto',
      description:
        'Iniciamos com um processo estruturado de pesquisa para entender profundamente o seu mercado, os seus usuários e as oportunidades existentes. Realizamos entrevistas, análise de dados e benchmarking competitivo para mapear o terreno antes de qualquer decisão estratégica.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Validação da ideia',
      description:
        'Testamos e validamos sua ideia de negócio antes de investir em desenvolvimento completo, reduzindo riscos e aumentando as chances de sucesso. Criamos experimentos rápidos, questionários e protótipos de baixa fidelidade para coletar evidências reais do mercado.',
      color: 'teal',
      icon: 'lightbulb',
    },
    {
      stage: 3,
      title: 'Criação do wireframe',
      description:
        'Com as hipóteses validadas, mapeamos os fluxos e telas essenciais do produto em wireframes detalhados. Cada tela é pensada para refletir os objetivos do usuário e do negócio, permitindo visualizar e discutir a experiência antes de qualquer linha de código.',
      color: 'blue',
      icon: 'map',
    },
    {
      stage: 4,
      title: 'Definição do MVP',
      description:
        'Identificamos as funcionalidades essenciais para lançar seu produto com máximo valor e mínimo investimento. Priorizamos o que gera aprendizado e tração real, eliminando tudo que pode esperar uma segunda iteração.',
      color: 'teal',
      icon: 'paper-plane',
    },
    {
      stage: 5,
      title: 'Arquitetura da informação',
      description:
        'Estruturamos como o conteúdo, os dados e os fluxos do produto se organizam e se conectam. Uma arquitetura bem definida garante que o produto seja intuitivo para o usuário e fácil de escalar tecnicamente ao longo do tempo.',
      color: 'blue',
      icon: 'map',
    },
    {
      stage: 6,
      title: 'Testes com usuários',
      description:
        'Realizamos sessões de teste com usuários reais para validar hipóteses, identificar pontos de fricção e coletar feedbacks qualitativos. Os aprendizados são incorporados diretamente no refinamento do produto antes do lançamento.',
      color: 'teal',
      icon: 'check',
    },
    {
      stage: 7,
      title: 'Lançamento do produto',
      description:
        'Com o MVP definido, validado e refinado, seu produto está pronto para chegar ao mercado. Acompanhamos o lançamento de perto, monitorando métricas e comportamento dos primeiros usuários para garantir uma estreia consistente.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução contínua',
      description:
        'O lançamento é apenas o começo. A partir dos dados e feedbacks coletados, evoluímos continuamente o roadmap de produto, priorizando as iniciativas de maior impacto e mantendo o produto alinhado às necessidades reais do mercado.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Discovery de produto',
      description: 'Processo estruturado de pesquisa e validação para entender profundamente seu mercado, usuários e oportunidades.',
      icon: 'magnifying-glass',
      iconType: 'jelly',
    },
    {
      title: 'Validação de ideia',
      description: 'Teste e valide sua ideia de negócio antes de investir em desenvolvimento completo, reduzindo riscos.',
      icon: 'lightbulb',
      iconType: 'jelly',
    },
    {
      title: 'Definição de MVP',
      description: 'Identificação das funcionalidades essenciais para lançar seu produto com máximo valor e mínimo investimento.',
      icon: 'paper-plane',
      iconType: 'jelly',
    },
    {
      title: 'Roadmap de produto',
      description: 'Planejamento estratégico de evolução do produto definindo prioridades, milestones e entrega de valor.',
      icon: 'map',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Pesquisa de mercado',
      description: 'Análise profunda do mercado, tendências e oportunidades para embasar decisões estratégicas.',
      icon: 'chart-bar',
    },
    {
      title: 'Análise de concorrentes',
      description: 'Mapeamento detalhado do cenário competitivo para identificar diferenciais e posicionamento.',
      icon: 'magnifying-glass',
    },
    {
      title: 'Definição de personas',
      description: 'Criação de perfis detalhados dos usuários ideais para guiar decisões de produto e comunicação.',
      icon: 'users',
    },
    {
      title: 'Arquitetura da informação',
      description: 'Estruturação da navegação, conteúdo e fluxos para uma experiência intuitiva e escalável.',
      icon: 'map',
    },
    {
      title: 'Prototipação rápida',
      description: 'Criação ágil de protótipos para validar conceitos e fluxos antes do desenvolvimento.',
      icon: 'compass',
    },
    {
      title: 'Design UX e UI',
      description: 'Interfaces modernas e experiências de usuário otimizadas para engajamento e conversão.',
      icon: 'palette',
    },
    {
      title: 'Testes com usuários',
      description: 'Sessões de teste com usuários reais para validar hipóteses e identificar pontos de melhoria.',
      icon: 'check',
    },
    {
      title: 'Métricas e KPIs',
      description: 'Definição dos indicadores-chave para medir o sucesso e orientar a evolução do produto.',
      icon: 'gauge',
    },
    {
      title: 'Planejamento de go-to-market',
      description: 'Estratégia de lançamento e posicionamento para maximizar o impacto de entrada no mercado.',
      icon: 'paper-plane',
    },
    {
      title: 'Consultoria estratégica',
      description: 'Orientação especializada para tomada de decisões críticas de produto, negócio e tecnologia.',
      icon: 'compass',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Estratégia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">produto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">digital</span></span>
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Consultoria em estratégia e gestão de produto digital
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">é</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">especializada</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">estratégia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">produto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">digital.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">Ajudamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">você</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">transformar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">sua</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">ideia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">um</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">produto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">digital</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">direção</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">clara,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">validação</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">mercado</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">um</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-32">plano</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-33">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-34">execução</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-35">sólido.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-36" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-37" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.webp"
                      alt="Equipe de especialistas em estratégia de produto da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-38">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-39">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-40">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-41">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-42">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-43" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero-digital_product.webp"
                  alt="Estratégia de produto digital desenvolvida pela Phurshell"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-autoday-icon.webp"
                        alt="Logo do aplicativo Autoday"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Autoday</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Estruturamos a estratégia de produto da Autoday do zero: pesquisa de mercado, definição de roadmap, priorização de features e lançamento do seguro intermitente nos apps iOS e Android.
                        <br />
                        <span className="font-bold">Insurtech lançada em tempo recorde</span>
                      </p>
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
          labelIcon="compass"
          title="Transformamos sua ideia em um produto digital de sucesso."
          description="Nossos serviços de estratégia de produto abrangem todo o ciclo de validação e planejamento, desde discovery e pesquisa de mercado até definição de roadmap e MVP."
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
        labelIcon="compass"
        title="Outros serviços que também fazem parte do processo"
        showCta={true}
        description="Oferecemos um conjunto completo de serviços especializados para transformar sua ideia em um produto digital de sucesso. Cada serviço é cuidadosamente integrado ao processo estratégico, garantindo validação, clareza e direção em todas as etapas do projeto."
        bgColor="white"
        cardStyle="service"
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Da ideia ao lançamento"
        description="Você tem a visão. Agora você precisa de um parceiro especializado focado em transformar sua ideia em um produto digital com direção clara. Com isso em mente, conduziremos cada etapa do processo estratégico — discovery, validação, definição de MVP e planejamento de roadmap — para configurar seu produto para o sucesso."
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
                O que é discovery de produto e por que ele é importante?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Discovery de produto é um processo estruturado de pesquisa e validação que acontece antes do desenvolvimento. Ele serve para entender profundamente o mercado, os usuários e as oportunidades, evitando que você invista tempo e dinheiro construindo algo que o mercado não quer. Um bom discovery reduz riscos, economiza recursos e aumenta significativamente as chances de sucesso do produto.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que é MVP e como vocês ajudam a defini-lo?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  MVP (Minimum Viable Product) é a versão mais enxuta do seu produto que ainda entrega valor real aos usuários e permite coletar aprendizados. Ajudamos a defini-lo mapeando todas as funcionalidades desejadas, priorizando pelo impacto para o usuário e viabilidade técnica, e separando o que é essencial para o lançamento do que pode vir em versões futuras. O objetivo é chegar ao mercado rápido, com o mínimo de risco.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona o processo de validação de ideia?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Nosso processo de validação envolve criar experimentos rápidos e de baixo custo para testar as principais hipóteses do seu negócio antes de investir em desenvolvimento. Isso inclui entrevistas com potenciais usuários, análise de concorrentes, criação de landing pages de teste e protótipos de baixa fidelidade. Ao final, você terá evidências concretas para tomar decisões com mais confiança.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o resultado entregue ao final da estratégia de produto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Ao final do processo, você recebe um conjunto de entregáveis estratégicos que incluem: documento de discovery com insights de mercado e usuários, definição clara do MVP e suas funcionalidades prioritárias, wireframes dos principais fluxos do produto, roadmap de produto com milestones e um plano de go-to-market. Tudo documentado para guiar o desenvolvimento e as próximas decisões de negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A Phurshell também desenvolve o produto após a estratégia?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. A Phurshell é uma empresa full-service de produto digital. Após a etapa de estratégia, podemos conduzir também o design UX/UI, o desenvolvimento web, mobile e de plataformas SaaS. Trabalhar com o mesmo time do início ao fim garante total alinhamento entre a estratégia definida e o produto que será construído, sem ruídos de comunicação ou retrabalho.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
