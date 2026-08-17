'use client'
import Image from 'next/image'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function Healthtech() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Imersão no negócio de saúde',
      description:
        'Antes de escrever uma linha de código, mergulhamos fundo no seu contexto — entendemos o fluxo clínico, os perfis dos usuários (médicos, pacientes, gestores) e as regulamentações aplicáveis. Esta etapa garante que o produto resolva problemas reais com segurança e eficiência.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Wireframe & validação de fluxos',
      description:
        'Criamos wireframes detalhados de todas as telas e fluxos críticos — prontuário, agendamento, prescrição, teleconsulta. Validamos cada decisão com você antes de avançar, garantindo que a experiência do usuário seja intuitiva mesmo em cenários complexos.',
      color: 'teal',
      icon: 'compass',
    },
    {
      stage: 3,
      title: 'Arquitetura segura & conformidade',
      description:
        'Estruturamos a base técnica com foco em segurança de dados de saúde: banco de dados criptografado, autenticação robusta, controle de acesso por perfil e logs de auditoria. Projetamos para conformidade com LGPD e CFM desde o início.',
      color: 'blue',
      icon: 'shield',
    },
    {
      stage: 4,
      title: 'Integrações com o ecossistema de saúde',
      description:
        'Configuramos integrações com laboratórios, sistemas de prontuário eletrônico, gateways de pagamento para consultas, plataformas de videoconferência e APIs de dados clínicos. Seu produto se conecta ao ecossistema existente sem criar silos de informação.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Desenvolvimento & testes clínicos',
      description:
        'Nossa equipe desenvolve o produto com metodologias ágeis, entregando funcionalidades validadas a cada sprint. Realizamos testes exaustivos simulando cenários reais de uso clínico — incluindo edge cases críticos onde erros têm consequências sérias.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'QA & auditoria de segurança',
      description:
        'Antes do lançamento, realizamos auditoria completa de segurança, testes de penetração e revisão de conformidade. Cada ponto de acesso a dados sensíveis é testado. Nenhum dado de paciente fica exposto — isso não é negociável.',
      color: 'teal',
      icon: 'check-double',
    },
    {
      stage: 7,
      title: 'Lançamento & onboarding',
      description:
        'Gerenciamos o lançamento com zero downtime, acompanhando as primeiras horas de operação real. Preparamos materiais de onboarding para os diferentes perfis de usuário e ficamos de plantão para garantir que a transição seja suave.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução contínua do produto',
      description:
        'Saúde é um setor em constante evolução. Acompanhamos seu produto com manutenção proativa, implementação de novas funcionalidades baseadas em dados de uso e adaptações regulatórias. Seu produto cresce junto com as necessidades do negócio.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Apps iOS & Android',
      description: 'Aplicativos nativos para médicos, pacientes e gestores com performance otimizada e experiência fluida em qualquer dispositivo.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas Web',
      description: 'Sistemas web completos para gestão clínica, backoffice administrativo e portais de acesso para profissionais de saúde.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'Telemedicina',
      description: 'Plataformas de teleconsulta com vídeo integrado, chat clínico, assinatura digital de documentos e histórico de atendimentos.',
      icon: 'video',
      iconType: 'jelly',
    },
    {
      title: 'Backoffice & Admin',
      description: 'Painéis administrativos para gestão de profissionais, pacientes, agendamentos, financeiro e relatórios operacionais.',
      icon: 'chart-pie',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Prontuário Eletrônico (PEP)',
      description: 'Desenvolvimento de sistemas de prontuário eletrônico customizados, adaptados ao fluxo específico de cada especialidade médica.',
      icon: 'clipboard',
    },
    {
      title: 'Agendamento inteligente',
      description: 'Sistemas de agendamento online com gestão de agenda médica, lembretes automáticos e redução de faltas.',
      icon: 'calendar',
    },
    {
      title: 'Prescrição digital',
      description: 'Módulos de prescrição com banco de medicamentos, alertas de interação e assinatura digital com validade jurídica.',
      icon: 'pencil',
    },
    {
      title: 'Integrações laboratoriais',
      description: 'Conexão com laboratórios para recebimento automático de resultados de exames diretamente no prontuário do paciente.',
      icon: 'database',
    },
    {
      title: 'IA & suporte diagnóstico',
      description: 'Implementação de modelos de inteligência artificial para análise de sintomas, triagem automatizada e sugestões clínicas.',
      icon: 'sparkles',
    },
    {
      title: 'Monitoramento remoto de pacientes',
      description: 'Integração com dispositivos wearables e IoT para acompanhamento contínuo de sinais vitais fora do ambiente hospitalar.',
      icon: 'heart',
    },
    {
      title: 'Conformidade LGPD & CFM',
      description: 'Arquitetura de dados e processos projetados para conformidade regulatória com criptografia, auditoria e controle de acesso.',
      icon: 'shield-halved',
    },
    {
      title: 'Gestão financeira clínica',
      description: 'Módulos de cobrança, faturamento de convênios, controle de receitas e repasse para profissionais de saúde.',
      icon: 'money-bill',
    },
    {
      title: 'Notificações & engajamento',
      description: 'Push notifications inteligentes para lembretes de consulta, exames, medicamentos e acompanhamento de tratamentos.',
      icon: 'bell',
    },
    {
      title: 'Analytics & relatórios',
      description: 'Dashboards com métricas operacionais, indicadores de qualidade assistencial e relatórios para tomada de decisão clínica.',
      icon: 'chart-pie',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvimento de apps para healthtech e saúde digital
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Tecnologia que cuida de pessoas
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">Saúde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">é</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">segmento</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">onde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">mais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">atuamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">—</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">onde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">mais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">sentimos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">impacto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">real</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">construímos.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">Criamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">aplicativos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">médicos,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">plataformas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">telemedicina</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">sistemas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-32">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-33">gestão</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-34">clínica</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-35">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-36">conectam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-37">profissionais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-38">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-39">pacientes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-40">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-41">segurança.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-42" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato/"
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
                      alt="Equipe de especialistas em healthtech da Phurshell"
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
                <Image
                  src="/images/img-hero-healthctech.webp"
                  alt="Interface de aplicativo healthtech desenvolvido pela Phurshell"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                      Healthtech é o segmento que une <strong className="text-white">tecnologia e saúde</strong> para transformar a forma como pessoas cuidam do próprio bem-estar. Inclui apps de <strong className="text-white">telemedicina, gestão clínica, prontuários digitais, saúde preventiva</strong> e monitoramento de pacientes — produtos que impactam vidas diretamente.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <ProcessCarousel
          items={services}
          label="O que entregamos"
          labelIcon="plus"
          title="Soluções completas para o setor de saúde."
          description="Da triagem ao pós-atendimento, desenvolvemos produtos digitais para todos os momentos da jornada de saúde. Aplicativos para pacientes, sistemas para médicos, plataformas para clínicas e hospitais — construídos com a segurança e conformidade que o setor exige."
          bgColor="white"
          cardStyle="service"
        />
      </section>

      {/* Outras soluções */}
      <ProcessCarousel
        items={solutions}
        label="Outras Soluções"
        hideLabel={true}
        smallTitle={true}
        labelIcon="plus"
        title="Funcionalidades e módulos especializados em saúde"
        showCta={true}
        description="Cada projeto de saúde tem suas particularidades. Por isso oferecemos um conjunto amplo de módulos e integrações especializadas que podem ser combinados de acordo com as necessidades específicas do seu produto."
        bgColor="white"
        cardStyle="service"
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Como desenvolvemos produtos de saúde"
        description="Projetos de saúde têm um nível de responsabilidade diferente. Cada decisão de arquitetura, cada fluxo de dados, cada tela precisa ser pensada com segurança e conformidade em mente. Nosso processo garante que seu produto chegue ao mercado sólido, seguro e preparado para crescer."
        bgColor="gray"
        cardStyle="process"
      />

      {/* Cases */}
      <CasesCarousel segment="Healthtech" />

      {/* Testimonial */}
      <TestimonialCarousel label="Depoimentos" labelIcon="comment" title="O que nossos clientes dizem" description="Construímos parcerias de longo prazo com founders e times de produto que confiam na nossa capacidade de transformar ideias em produtos digitais de alto impacto." />

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
                Como vocês garantem a segurança dos dados de saúde?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Seguimos as melhores práticas de segurança desde a arquitetura do sistema: criptografia de dados em repouso e em trânsito, controle de acesso por perfil, logs de auditoria completos e autenticação multifator. Todos os projetos são desenvolvidos em conformidade com a LGPD e as resoluções do CFM aplicáveis, garantindo que dados sensíveis de pacientes estejam sempre protegidos.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês têm experiência com integração com sistemas legados de saúde?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. Muitos de nossos projetos envolvem integração com sistemas existentes — prontuários eletrônicos, sistemas de laboratório, ERPs hospitalares e plataformas de convênios. Realizamos um mapeamento detalhado das integrações necessárias no início do projeto e desenvolvemos conectores seguros que garantem a interoperabilidade sem comprometer a segurança dos dados.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual é o prazo para desenvolver um app de saúde?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  O prazo varia conforme a complexidade do produto. Um MVP focado em uma funcionalidade core (como agendamento ou teleconsulta) pode ser entregue em 3 a 4 meses. Plataformas mais completas, com prontuário, integrações laboratoriais e módulo financeiro, normalmente levam de 6 a 12 meses. Durante o discovery, mapeamos o escopo e criamos um cronograma realista com entregas incrementais.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês desenvolvem para clínicas, hospitais e startups de saúde?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim, atendemos todos os perfis. Para startups, ajudamos a validar a ideia, definir o MVP e lançar o produto rapidamente com o menor investimento inicial possível. Para clínicas e consultórios, desenvolvemos sistemas customizados que se adaptam ao fluxo de trabalho existente. Para hospitais e redes de saúde, construímos plataformas escaláveis com múltiplos perfis de acesso e integrações complexas.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O produto terá suporte e manutenção após o lançamento?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim. Oferecemos planos de suporte contínuo que incluem monitoramento de performance, correção de bugs, atualizações de compatibilidade com novas versões de iOS e Android, e evolução incremental do produto. Produtos de saúde exigem atenção constante — e estamos aqui para garantir que seu produto funcione com excelência todos os dias.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://phurshell.com" },
                  { "@type": "ListItem", "position": 2, "name": "Segmentos", "item": "https://phurshell.com/segmentos" },
                  { "@type": "ListItem", "position": 3, "name": "Desenvolvimento de apps para healthtech e saúde digital", "item": "https://phurshell.com/segmentos/healthtech" }
            ]
          })
        }}
      />
    </div>
  )
}
