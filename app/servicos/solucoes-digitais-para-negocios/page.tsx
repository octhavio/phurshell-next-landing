'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ServicosDigitais() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Diagnóstico de processos',
      description:
        'Iniciamos com um levantamento detalhado dos processos atuais do negócio. Identificamos gargalos, ineficiências e oportunidades de melhoria, compreendendo o fluxo de trabalho real da empresa para embasar as decisões técnicas e estratégicas da solução digital.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Mapeamento de necessidades',
      description:
        'Com base no diagnóstico, mapeamos todas as necessidades funcionais e não-funcionais da solução. Envolvemos os principais stakeholders para garantir que o escopo reflita a realidade do negócio e que nenhum requisito crítico seja negligenciado antes do início do projeto.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Arquitetura da solução',
      description:
        'Definimos a arquitetura tecnológica mais adequada: módulos do sistema, integrações necessárias, estrutura de banco de dados e infraestrutura. Esta etapa garante que a solução seja escalável, segura e preparada para crescer junto com o negócio.',
      color: 'blue',
      icon: 'map',
    },
    {
      stage: 4,
      title: 'Desenvolvimento',
      description:
        'Nossa equipe desenvolve a solução em ciclos iterativos, com entregas incrementais e validações frequentes. Utilizamos as melhores práticas de engenharia de software para garantir qualidade, manutenibilidade e performance em cada módulo entregue.',
      color: 'teal',
      icon: 'code',
    },
    {
      stage: 5,
      title: 'Migração de dados',
      description:
        'Realizamos a migração dos dados existentes para a nova solução com total segurança e integridade. Mapeamos todas as fontes de dados legadas, tratamos inconsistências e garantimos que o histórico da empresa seja preservado sem perda de informação.',
      color: 'blue',
      icon: 'database',
    },
    {
      stage: 6,
      title: 'Treinamento da equipe',
      description:
        'Capacitamos os usuários finais e administradores da solução com treinamentos práticos e materiais de apoio. Garantimos que a equipe esteja preparada para utilizar o sistema com autonomia desde o primeiro dia de operação.',
      color: 'teal',
      icon: 'book-open',
    },
    {
      stage: 7,
      title: 'Go-live',
      description:
        'Com todos os módulos validados, dados migrados e equipe treinada, realizamos a entrada em produção da solução. Acompanhamos de perto as primeiras operações para garantir estabilidade, corrigir eventuais ajustes e assegurar a continuidade do negócio.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Suporte e evolução',
      description:
        'Após o go-live, oferecemos suporte contínuo e evoluímos a solução conforme as necessidades do negócio mudam. Coletamos feedbacks dos usuários, monitoramos o desempenho do sistema e implementamos melhorias para maximizar o retorno sobre o investimento.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Transformação digital',
      description: 'Modernize seus processos com tecnologias digitais que aumentam eficiência, produtividade e competitividade.',
      icon: 'arrow-up',
      iconType: 'jelly',
    },
    {
      title: 'ERP',
      description: 'Sistemas ERP integrados para gerenciar e otimizar processos core do negócio com eficiência.',
      icon: 'map',
      iconType: 'jelly',
    },
    {
      title: 'CRM',
      description: 'Soluções de CRM para gerenciar interações com clientes, impulsionar vendas e fidelização.',
      icon: 'address-card',
      iconType: 'jelly',
    },
    {
      title: 'Business intelligence',
      description: 'Análise avançada de dados e dashboards interativos para decisões de negócio informadas.',
      icon: 'chart-bar',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'CMS',
      description: 'Gestão de conteúdo corporativo com flexibilidade e controle para equipes de qualquer porte.',
      icon: 'file',
    },
    {
      title: 'Portais corporativos',
      description: 'Portais web centralizados para acesso a informações, serviços e ferramentas da empresa.',
      icon: 'building',
    },
    {
      title: 'Intranet & comunicação interna',
      description: 'Plataformas de intranet para melhorar a comunicação e colaboração entre equipes.',
      icon: 'link',
    },
    {
      title: 'Automação de processos',
      description: 'Automação de tarefas repetitivas e fluxos de trabalho para ganhar eficiência operacional.',
      icon: 'gear',
    },
    {
      title: 'Integração de sistemas',
      description: 'Conectamos sistemas distintos para eliminar silos de dados e unificar operações.',
      icon: 'arrow-right-arrow-left',
    },
    {
      title: 'Modernização de sistemas legados',
      description: 'Atualização e migração de sistemas antigos para arquiteturas modernas e escaláveis.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Relatórios e dashboards',
      description: 'Painéis e relatórios personalizados para visualização de indicadores e tomada de decisão.',
      icon: 'chart-pie',
    },
    {
      title: 'E-commerce B2B',
      description: 'Plataformas de vendas online para negócios B2B com catálogos, pedidos e integrações.',
      icon: 'cart-shopping',
    },
    {
      title: 'Gestão de documentos',
      description: 'Sistemas de gestão documental para organizar, versionar e controlar acesso a documentos.',
      icon: 'folder',
    },
    {
      title: 'Suporte e manutenção',
      description: 'Suporte técnico especializado e manutenção evolutiva para garantir a continuidade dos sistemas.',
      icon: 'headphones',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Soluções</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">digitais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">negócios</span></span>
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Desenvolvimento de soluções digitais personalizadas para empresas
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">cria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">sistemas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">ferramentas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">modernizam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">operações,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">melhoram</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">gestão</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">impulsionam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">resultados.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">Transformação</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">digital,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">ERP,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">CRM</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">Business</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">Intelligence</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">seu</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">negócio</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">crescer.</span></span>
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
                      alt="Equipe de especialistas em soluções digitais da Phurshell"
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
                  src="/images/img-hero-business_solution.webp"
                  alt="Sistema de gestão empresarial desenvolvido pela Phurshell mostrando dashboard e módulos integrados"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-gente-icon.webp"
                        alt="Logo da Gente Seguradora"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Gente Seguradora</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Digitalizamos os processos manuais da Gente Seguradora construindo apps iOS, Android e web que transformaram completamente a experiência dos clientes com seus seguros.
                        <br />
                        <span className="font-bold">Processos manuais 100% digitalizados</span>
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
          labelIcon="suitcase"
          title="Modernizamos operações e impulsionamos resultados do seu negócio."
          description="Nossos serviços de soluções digitais abrangem desde transformação digital e implementação de ERPs até CRM, BI e modernização de sistemas legados."
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
        description="Oferecemos um conjunto completo de serviços especializados para modernizar o seu negócio digitalmente. Cada serviço é cuidadosamente integrado ao processo de transformação, garantindo que sua empresa ganhe eficiência, visibilidade e competitividade em todas as frentes."
        bgColor="white"
        cardStyle="service"
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Do diagnóstico ao go-live"
        description="Você tem o negócio. Agora você precisa de um parceiro especializado focado em entregar soluções digitais que gerem valor real. Com isso em mente, conduzimos um processo estruturado — do diagnóstico de processos até o suporte contínuo — para garantir que a solução entregue transforme operações e impulsione resultados."
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
                Como é feito o diagnóstico de processos antes de iniciar o projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O diagnóstico começa com entrevistas e workshops com os principais usuários e gestores da empresa. Mapeamos os processos atuais, identificamos gargalos, ineficiências e oportunidades de melhoria. A partir desse levantamento, definimos o escopo da solução e priorizamos as funcionalidades com maior impacto para o negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como é feita a migração de dados do sistema antigo para o novo?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  A migração de dados é planejada com antecedência e realizada de forma segura e incremental. Mapeamos todas as fontes de dados existentes, tratamos inconsistências e validamos a integridade das informações antes e após a migração. O processo é executado com a empresa em operação, minimizando qualquer impacto no dia a dia do negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A solução pode se integrar com os sistemas que já utilizamos?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. Desenvolvemos integrações com os sistemas existentes da empresa — ERPs, CRMs, plataformas de e-commerce, sistemas financeiros e outros. Nossa equipe avalia as APIs e protocolos disponíveis de cada sistema e implementa as conexões necessárias para garantir que os dados fluam de forma consistente entre todas as plataformas.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como é o treinamento da equipe para usar a nova solução?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O treinamento é realizado antes do go-live e é adaptado para cada perfil de usuário — operadores, gestores e administradores do sistema. Combinamos sessões práticas, gravações de vídeo e materiais de apoio para garantir que a equipe tenha autonomia desde o primeiro dia. Também oferecemos suporte durante as primeiras semanas de operação para sanar dúvidas que surjam na prática.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o suporte oferecido após a implantação do sistema?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Após o go-live, oferecemos planos de suporte e manutenção contínua que incluem correção de bugs, atualizações de segurança, monitoramento de performance e evolução funcional do sistema. O nível de suporte é definido conforme as necessidades da empresa, com SLAs customizados para sistemas críticos. Nossa equipe permanece como parceira de longo prazo na evolução da solução.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
