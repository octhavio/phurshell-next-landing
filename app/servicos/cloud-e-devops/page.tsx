'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ServicosCloudDevOps() {
  const processStages = [
    {
      stage: 1,
      title: 'Auditoria de infraestrutura',
      description:
        'Analisamos a infraestrutura existente para identificar gargalos, pontos de falha e oportunidades de melhoria. Essa etapa inclui revisão de custos, segurança, performance e disponibilidade, gerando um diagnóstico completo que orienta todas as decisões técnicas seguintes.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Planejamento da arquitetura cloud',
      description:
        'Com base no diagnóstico, desenhamos a arquitetura ideal para o seu produto na nuvem. Definimos provedores (AWS, Google Cloud ou Azure), regiões, serviços, estratégias de redundância e estimativas de custo, garantindo uma base sólida antes de qualquer implementação.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Configuração do ambiente',
      description:
        'Provisionamos toda a infraestrutura cloud utilizando Infraestrutura como Código (IaC) com Terraform ou ferramentas nativas. Configuramos redes, segurança, permissões e ambientes de desenvolvimento, staging e produção de forma padronizada e reproduzível.',
      color: 'blue',
      icon: 'cloud',
    },
    {
      stage: 4,
      title: 'Pipelines de CI/CD',
      description:
        'Implementamos pipelines de integração e entrega contínua que automatizam build, testes e deploy. Com isso, cada commit pode ser validado e lançado em produção com segurança e velocidade, eliminando deploys manuais e reduzindo riscos de erros humanos.',
      color: 'teal',
      icon: 'gear',
    },
    {
      stage: 5,
      title: 'Containerização',
      description:
        'Containerizamos as aplicações com Docker e orquestramos com Kubernetes, garantindo consistência entre ambientes e facilitando o escalonamento horizontal. Essa etapa simplifica deploys, isola dependências e torna o produto mais portável e resiliente.',
      color: 'blue',
      icon: 'box',
    },
    {
      stage: 6,
      title: 'Monitoramento e observabilidade',
      description:
        'Configuramos sistemas completos de monitoramento com métricas, logs centralizados e rastreamento de erros em tempo real. Dashboards e alertas proativos garantem visibilidade total do comportamento do produto em produção e permitem reação rápida a incidentes.',
      color: 'teal',
      icon: 'chart-bar',
    },
    {
      stage: 7,
      title: 'Segurança em nuvem',
      description:
        'Aplicamos as melhores práticas de segurança cloud: gestão de credenciais, políticas de acesso mínimo, criptografia em trânsito e em repouso, scans de vulnerabilidade e conformidade com padrões como SOC 2 e ISO 27001. Segurança integrada em cada camada da infraestrutura.',
      color: 'green',
      icon: 'shield',
    },
    {
      stage: 8,
      title: 'Otimização de custos e manutenção',
      description:
        'Monitoramos continuamente o uso de recursos para identificar desperdícios e oportunidades de economia. Ajustamos capacidade, aplicamos reserved instances e revisamos arquiteturas com o objetivo de reduzir custos sem sacrificar performance ou disponibilidade.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Cloud infrastructure',
      description: 'Infraestrutura escalável e resiliente na AWS, Google Cloud ou Azure para alta disponibilidade.',
      icon: 'cloud',
      iconType: 'jelly',
    },
    {
      title: 'CI/CD pipeline',
      description: 'Automação de deploy, testes e integração contínua garantindo entregas rápidas e confiáveis.',
      icon: 'gear',
      iconType: 'jelly',
    },
    {
      title: 'Containerização',
      description: 'Deploy com Docker e Kubernetes para consistência entre ambientes e escalabilidade.',
      icon: 'box',
      iconType: 'jelly',
    },
    {
      title: 'Monitoramento & logs',
      description: 'Sistemas de observabilidade para monitorar performance e comportamento em tempo real.',
      icon: 'chart-bar',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'AWS',
      description: 'Infraestrutura e serviços gerenciados na Amazon Web Services para alta disponibilidade.',
      icon: 'cloud',
    },
    {
      title: 'Google Cloud',
      description: 'Soluções em nuvem com Google Cloud Platform para escalabilidade e machine learning.',
      icon: 'cloud',
    },
    {
      title: 'Azure',
      description: 'Infraestrutura Microsoft Azure para empresas que precisam de integração com ecossistema Microsoft.',
      icon: 'cloud',
    },
    {
      title: 'Kubernetes',
      description: 'Orquestração de containers para gerenciar deploys, escalonamento e resiliência de aplicações.',
      icon: 'box',
    },
    {
      title: 'Docker',
      description: 'Containerização de aplicações para consistência entre ambientes e facilidade de deploy.',
      icon: 'box',
    },
    {
      title: 'Terraform & IaC',
      description: 'Infraestrutura como código para provisionamento automatizado, versionado e reproduzível.',
      icon: 'gear',
    },
    {
      title: 'Alertas & incident response',
      description: 'Sistemas de alertas proativos e playbooks de resposta a incidentes para minimizar downtime.',
      icon: 'bell',
    },
    {
      title: 'Backup & disaster recovery',
      description: 'Estratégias de backup e recuperação de desastres para garantir continuidade do negócio.',
      icon: 'database',
    },
    {
      title: 'Otimização de custos cloud',
      description: 'Análise e redução de gastos em nuvem sem comprometer performance ou disponibilidade.',
      icon: 'money-bill',
    },
    {
      title: 'Segurança em nuvem',
      description: 'Políticas de acesso, criptografia e conformidade para proteger dados e infraestrutura.',
      icon: 'shield',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Cloud</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">DevOps</span></span>
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Serviços de cloud computing, infraestrutura e DevOps
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-4">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">fornece</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">infraestrutura</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">moderna</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">automatizada</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">seus</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">rodem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">alta</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">disponibilidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">entregas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">contínuas.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">AWS,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">Google</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">Cloud,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">Azure</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">as</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">melhores</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">práticas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">DevOps.</span></span>
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
                      src="/images/img-cta-especialist.webp"
                      alt="Equipe de especialistas em Cloud & DevOps da Phurshell"
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
                  src="/images/img-hero-cloud_devops.webp"
                  alt="Infraestrutura cloud gerenciada pela Phurshell com alta disponibilidade e entregas contínuas"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-psiapp-icon.webp"
                        alt="Logo do aplicativo Psiapp"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Psiapp</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Estruturamos toda a infraestrutura cloud do Psiapp com pipelines de CI/CD, deploys automatizados e monitoramento em tempo real para suportar o crescimento acelerado.
                        <br />
                        <span className="font-bold">Quase 100 mil usuários ativos</span>
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
          labelIcon="cloud"
          title="Infraestrutura moderna para produtos que não param de crescer."
          description="Nossos serviços de Cloud & DevOps garantem que seus produtos rodem com alta disponibilidade, segurança e entregas contínuas usando as melhores práticas do mercado."
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
        description="Oferecemos um conjunto completo de serviços especializados em Cloud & DevOps para garantir que sua infraestrutura seja segura, eficiente e preparada para crescer. Cada serviço é cuidadosamente integrado ao seu ambiente, assegurando alta disponibilidade e operações sem interrupções."
        bgColor="white"
        cardStyle="service"
        showCta={true}
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Da auditoria ao deploy contínuo"
        description="Você tem o produto. Agora você precisa de uma infraestrutura que acompanhe o crescimento. Com isso em mente, conduzimos cada etapa com rigor técnico: auditamos o que existe, planejamos o que deve ser, construímos com as melhores práticas e garantimos operação contínua e segura."
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
                Quais provedores de nuvem vocês trabalham?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Trabalhamos com os três principais provedores de nuvem do mercado: AWS (Amazon Web Services), Google Cloud Platform e Microsoft Azure. A escolha do provedor depende das necessidades do seu produto, integrações existentes, exigências de compliance e otimização de custos. Nossa equipe ajuda a avaliar qual opção faz mais sentido para o seu contexto antes de qualquer implementação.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona a migração de infraestrutura existente para a nuvem?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  A migração começa com uma auditoria completa da infraestrutura atual para mapear dependências, riscos e o estado dos sistemas. A partir disso, elaboramos um plano de migração faseado que minimiza o impacto no produto em produção. Realizamos migrações com estratégias de blue-green deployment ou migração incremental por serviço, garantindo que não haja downtime inesperado durante o processo.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem alta disponibilidade e uptime do produto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Utilizamos arquiteturas multi-zona e multi-região para eliminar pontos únicos de falha. Implementamos load balancers, auto-scaling e health checks automáticos para que o sistema se recupere sozinho de falhas. Configuramos pipelines de CI/CD com rollback automático e monitoramos continuamente com alertas proativos para reagir antes que qualquer problema afete os usuários.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como ajudam a controlar e reduzir custos na nuvem?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Auditamos regularmente o uso de recursos para identificar serviços ociosos, instâncias superdimensionadas e oportunidades de economia. Aplicamos estratégias como reserved instances, spot instances para cargas não críticas, auto-scaling ajustado e rightsizing. Além disso, implementamos dashboards de custos em tempo real para que você tenha visibilidade total dos gastos e possa tomar decisões informadas.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que está incluído no monitoramento e como funciona o suporte a incidentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Configuramos sistemas de observabilidade completos com coleta de métricas, logs centralizados e rastreamento de erros. Alertas proativos notificam a equipe imediatamente quando qualquer indicador sai do padrão esperado. Para incidentes, temos playbooks documentados com procedimentos de resposta e escalonamento. O nível de suporte (horário comercial, 24/7 ou SLA customizado) é definido conforme o plano contratado.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
