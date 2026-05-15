'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ConsultoriaParaStartups() {
  const processStages = [
    {
      stage: 1,
      title: 'Diagnóstico do negócio',
      description:
        'Iniciamos com uma análise aprofundada do estágio atual da sua startup: modelo de negócio, mercado-alvo, estrutura financeira e principais desafios. Essa visão holística nos permite identificar gargalos e oportunidades antes de definir qualquer estratégia, garantindo que as recomendações sejam precisas e aderentes à realidade do seu negócio.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Planejamento financeiro',
      description:
        'Com base no diagnóstico, estruturamos o planejamento financeiro completo da empresa: organização do fluxo de caixa, definição de centros de custo, mapeamento de despesas fixas e variáveis, e construção de um modelo financeiro robusto que sirva de base para todas as decisões estratégicas do negócio.',
      color: 'teal',
      icon: 'chart-bar',
    },
    {
      stage: 3,
      title: 'Modelagem de negócios',
      description:
        'Revisamos e refinamos o modelo de negócio da startup, analisando proposta de valor, canais de distribuição, fontes de receita e estrutura de custos. Utilizamos frameworks como Business Model Canvas para visualizar e testar hipóteses, garantindo que o modelo seja sustentável e escalável no longo prazo.',
      color: 'blue',
      icon: 'map',
    },
    {
      stage: 4,
      title: 'Projeção de receita e forecast',
      description:
        'Construímos cenários financeiros detalhados — otimista, realista e conservador — com projeções de receita, crescimento de base de clientes, evolução de custos e ponto de equilíbrio. Esse forecast se torna a bússola da operação, orientando decisões de contratação, investimento e expansão ao longo do tempo.',
      color: 'teal',
      icon: 'chart-pie',
    },
    {
      stage: 5,
      title: 'Definição de KPIs e métricas',
      description:
        'Definimos o conjunto de métricas essenciais para o seu estágio de crescimento: CAC, LTV, churn, MRR, margem de contribuição e NPS, entre outros. Criamos dashboards e rituais de acompanhamento para que você tenha clareza sobre a saúde do negócio e consiga tomar decisões baseadas em dados no dia a dia.',
      color: 'blue',
      icon: 'gauge',
    },
    {
      stage: 6,
      title: 'Preparação para o pitch',
      description:
        'Estruturamos o storytelling financeiro e estratégico da startup para conversas com investidores. Revisamos o pitch deck sob a ótica dos números, ajudamos a construir a narrativa de tração e preparamos os fundadores para responder as perguntas mais críticas de due diligence com confiança e clareza.',
      color: 'teal',
      icon: 'desktop',
    },
    {
      stage: 7,
      title: 'Captação de investimento',
      description:
        'Apoiamos a jornada de captação desde a definição do valuation até a preparação dos materiais exigidos por investidores. Ajudamos a estruturar o data room, validar premissas financeiras e garantir que os indicadores apresentados sejam sólidos e consistentes, aumentando a credibilidade perante fundos e angels.',
      color: 'green',
      icon: 'users',
    },
    {
      stage: 8,
      title: 'Crescimento e monitoramento',
      description:
        'Após a captação ou a consolidação da estratégia, continuamos ao seu lado acompanhando a execução do plano financeiro, revisando metas, ajustando o forecast conforme a operação evolui e identificando novas oportunidades de crescimento. A consultoria não termina no diagnóstico — ela vive junto com a sua startup.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Planejamento financeiro estratégico',
      description: 'Estruturação completa das finanças do negócio com foco em crescimento sustentável.',
      icon: 'chart-bar',
      iconType: 'jelly',
    },
    {
      title: 'Projeção de receita e forecast',
      description: 'Modelagem de cenários otimista, realista e conservador para tomada de decisão.',
      icon: 'chart-pie',
      iconType: 'jelly',
    },
    {
      title: 'KPIs e métricas de crescimento',
      description: 'Definição e acompanhamento de métricas como CAC, LTV, churn e margem para guiar decisões.',
      icon: 'gauge',
      iconType: 'jelly',
    },
    {
      title: 'Captação de investimento',
      description: 'Preparação financeira e construção de indicadores para conversas com investidores.',
      icon: 'users',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Modelagem de negócios',
      description: 'Estruturação do modelo de negócio com frameworks como Business Model Canvas.',
      icon: 'map',
    },
    {
      title: 'Pricing e monetização',
      description: 'Definição de estratégias de precificação e modelos de monetização sustentáveis.',
      icon: 'money-bill',
    },
    {
      title: 'Business plan',
      description: 'Elaboração de plano de negócios completo para guiar a execução e atrair parceiros.',
      icon: 'file',
    },
    {
      title: 'Pitch deck para investidores',
      description: 'Criação e revisão de pitch deck com narrativa financeira e estratégica sólida.',
      icon: 'desktop',
    },
    {
      title: 'Análise de mercado',
      description: 'Pesquisa e análise de mercado para validar tamanho de oportunidade e competitividade.',
      icon: 'chart-bar',
    },
    {
      title: 'Valuation',
      description: 'Cálculo e justificativa do valuation da startup para rodadas de captação.',
      icon: 'sliders',
    },
    {
      title: 'OKRs e metas',
      description: 'Definição de objetivos e resultados-chave alinhados à estratégia de crescimento.',
      icon: 'gauge',
    },
    {
      title: 'Estrutura societária',
      description: 'Orientação sobre organização societária, vesting e acordos entre fundadores.',
      icon: 'building',
    },
    {
      title: 'Go-to-market',
      description: 'Planejamento da estratégia de entrada no mercado e aquisição dos primeiros clientes.',
      icon: 'paper-plane',
    },
    {
      title: 'Due diligence',
      description: 'Preparação e organização de dados financeiros e operacionais para processos de due diligence.',
      icon: 'magnifying-glass',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Consultoria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">Startups</span></span>
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Consultoria especializada em startups e produtos digitais
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">vai</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">além</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">software.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">Ajudamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">estruturar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">negócios</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">sustentáveis,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">preparados</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">crescer</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">captar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">investimento,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">planejamento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">financeiro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">estratégia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">negócio</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">sólida.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-39" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-40" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.webp"
                      alt="Equipe de especialistas em consultoria para startups da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-41">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-42">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-43">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-44">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-45">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-46" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero-startups-consulting.webp"
                  alt="Consultoria para startups pela Phurshell — estruturação financeira e estratégia de negócio"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-bluu-icon.webp"
                        alt="Logo do aplicativo Bluu"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Bluu</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Apoiamos a Bluu desde a validação da ideia até o lançamento: estruturamos o modelo de negócio, definimos métricas e preparamos a startup para crescer no mercado pet health.
                        <br />
                        <span className="font-bold">Do zero ao app em produção</span>
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
          labelIcon="chart-pie"
          title="Estruturamos seu negócio para crescer e captar investimento."
          description="Nossa consultoria para startups abrange planejamento financeiro, modelagem de negócios, projeção de receitas e preparação para captação de investimento."
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
        description="Oferecemos um conjunto completo de serviços especializados para transformar sua startup em um negócio sólido e preparado para escalar. Cada serviço é integrado à estratégia financeira e de negócio, garantindo coerência e consistência em todas as etapas da jornada."
        bgColor="white"
        cardStyle="service"
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Do diagnóstico à captação"
        description="Você tem a visão. Agora você precisa de um parceiro especializado focado em estruturar o negócio para crescer com saúde financeira e atrair os investidores certos. Com isso em mente, guiamos você desde o diagnóstico até a captação de investimento, passando por planejamento, modelagem e KPIs."
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
                Como funciona o processo de consultoria para startups?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O processo começa com um diagnóstico completo do negócio, onde analisamos o modelo de receita, estrutura de custos, estágio de crescimento e objetivos de curto e longo prazo. A partir daí, desenvolvemos o planejamento financeiro, definimos KPIs, construímos projeções e preparamos a startup para conversas com investidores — tudo de forma estruturada e progressiva.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Precisamos ter o financeiro organizado antes de começar?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Não. A maioria das startups que nos procura ainda não tem o financeiro organizado — e é exatamente por isso que a consultoria existe. Partimos do zero junto com você: estruturamos o fluxo de caixa, organizamos as categorias de custos e receitas, e construímos o modelo financeiro desde a base, independentemente do estágio atual da empresa.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A consultoria ajuda diretamente na captação de investimento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. Preparamos os fundadores para conversar com investidores com segurança: revisamos o pitch deck sob a ótica financeira, estruturamos o data room, validamos o valuation e ajudamos a construir os indicadores que os investidores mais analisam — como CAC, LTV, MRR, margem e runway. Não fazemos a captação diretamente, mas garantimos que você chegue preparado.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o prazo para ver os primeiros entregáveis?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Os primeiros entregáveis — diagnóstico e estrutura financeira inicial — costumam ser concluídos nas primeiras duas semanas. O planejamento financeiro completo com projeções e KPIs é entregue em até um mês. Para projetos voltados à captação, o cronograma varia conforme a complexidade, mas em geral trabalhamos com ciclos de 4 a 12 semanas dependendo do escopo.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quais são os entregáveis concretos da consultoria?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Dependendo do escopo contratado, os entregáveis incluem: modelo financeiro em planilha, projeções de receita com cenários, dashboard de KPIs, business plan, revisão do pitch deck, estrutura de valuation e data room organizado. Todos os materiais são documentados e entregues de forma que você consiga utilizar e atualizar de forma autônoma após o encerramento da consultoria.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
