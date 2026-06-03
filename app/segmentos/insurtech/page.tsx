'use client'
import Image from 'next/image'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function Insurtech() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Mapeamento do negócio de seguros',
      description: 'Entendemos profundamente o modelo de negócio, os produtos de seguro, os perfis de usuário (segurado, corretor, backoffice) e as regulamentações da SUSEP aplicáveis. Esta etapa define a arquitetura do produto antes de qualquer linha de código.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Wireframe & fluxos de contratação',
      description: 'Desenhamos todos os fluxos críticos — cotação, contratação, ativação de cobertura, sinistro e cancelamento. Validamos cada tela com você para garantir que o processo seja simples para o usuário final e eficiente para a operação.',
      color: 'teal',
      icon: 'compass',
    },
    {
      stage: 3,
      title: 'Arquitetura & integrações regulatórias',
      description: 'Estruturamos a base técnica com foco em conformidade com SUSEP, integração com registradoras e corretoras, e segurança de dados financeiros. Projetamos APIs robustas para conectar seguradoras, resseguradoras e canais de distribuição.',
      color: 'blue',
      icon: 'shield',
    },
    {
      stage: 4,
      title: 'Integrações com o ecossistema de seguros',
      description: 'Conectamos o produto com gateways de pagamento, sistemas de antifraude, bureaus de dados veiculares, APIs de rastreamento e plataformas de gestão de sinistros. Seu produto se integra ao ecossistema existente de forma segura.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Desenvolvimento & testes de cobertura',
      description: 'Desenvolvemos com metodologias ágeis, entregando funcionalidades validadas a cada sprint. Testamos exaustivamente os fluxos de ativação e desativação de cobertura, garantindo que nenhum cenário crítico passe despercebido.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'QA & auditoria de conformidade',
      description: 'Antes do lançamento, auditamos todos os fluxos de dados financeiros, testamos cenários de edge case em contratações e sinistros, e validamos a conformidade regulatória. Segurança e precisão não são negociáveis neste setor.',
      color: 'teal',
      icon: 'check-double',
    },
    {
      stage: 7,
      title: 'Lançamento & monitoramento',
      description: 'Gerenciamos o lançamento monitorando de perto as primeiras transações reais. Acompanhamos taxas de conversão, ativações, sinistros e performance do sistema para garantir que tudo funcione conforme esperado.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução & novos produtos',
      description: 'Seguros são um setor em transformação. Acompanhamos seu produto com manutenção proativa, lançamento de novos produtos de seguro e adaptações às atualizações regulatórias da SUSEP. Seu portfólio cresce com agilidade.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Apps iOS & Android',
      description: 'Aplicativos nativos para segurados e corretores com experiência fluida na contratação, gestão e acionamento de seguros.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas Web',
      description: 'Sistemas web para gestão de apólices, backoffice de sinistros e portais para corretores e parceiros de distribuição.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'Seguros sob demanda',
      description: 'Plataformas de seguro intermitente com ativação e desativação em tempo real pelo próprio aplicativo do segurado.',
      icon: 'bolt',
      iconType: 'jelly',
    },
    {
      title: 'Backoffice & Admin',
      description: 'Painéis operacionais para gestão de apólices, sinistros, comissões, relatórios e conformidade regulatória.',
      icon: 'chart-pie',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Cotação & contratação digital',
      description: 'Fluxos simplificados de cotação com poucos passos, comparação de coberturas e assinatura digital de apólices.',
      icon: 'clipboard',
    },
    {
      title: 'Ativação intermitente de cobertura',
      description: 'Tecnologia para ligar e desligar coberturas em tempo real, com telemetria e cobrança proporcional ao uso.',
      icon: 'bolt',
    },
    {
      title: 'Gestão digital de sinistros',
      description: 'Fluxos de abertura, acompanhamento e resolução de sinistros com notificações em tempo real para o segurado.',
      icon: 'shield',
    },
    {
      title: 'Integração com bureaus de dados',
      description: 'Conexão com bases de dados veiculares, CPF, score de risco e histórico de sinistros para precificação inteligente.',
      icon: 'database',
    },
    {
      title: 'Antifraude & análise de risco',
      description: 'Implementação de camadas de detecção de fraude em contratações, sinistros e comportamento de uso.',
      icon: 'sparkles',
    },
    {
      title: 'Portal do corretor',
      description: 'Plataforma dedicada para corretores gerenciarem sua carteira, acompanharem comissões e contratarem produtos.',
      icon: 'users',
    },
    {
      title: 'Conformidade SUSEP',
      description: 'Arquitetura e processos desenvolvidos em conformidade com as normas da SUSEP e regulamentações do setor.',
      icon: 'check-double',
    },
    {
      title: 'Pagamentos & cobrança recorrente',
      description: 'Integração com gateways de pagamento, gestão de inadimplência e cobrança recorrente para seguros mensais.',
      icon: 'money-bill',
    },
    {
      title: 'Notificações inteligentes',
      description: 'Push notifications para vencimento de apólice, status de sinistro, alertas de cobertura e renovação automática.',
      icon: 'bell',
    },
    {
      title: 'Analytics & relatórios',
      description: 'Dashboards com indicadores de sinistralidade, conversão, churn e performance de produtos para tomada de decisão.',
      icon: 'chart-pie',
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvimento de apps e plataformas insurtech
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Seguros reinventados para o mundo digital
          </h2>
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">O</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">setor</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">seguros</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">está</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">passando</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">por</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">uma</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">revolução</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">digital</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">—</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">nós</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">estamos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">no</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">centro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">dela.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">Construímos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">plataformas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">digitalizam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">processos,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">criam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">novos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">modelos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-32">contratação</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-33">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-34">aproximam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-35">seguradoras</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-36">dos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-37">seus</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-38">clientes.</span></span>
          </p>
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-39" style={{ display: 'inline-block' }}>
              <TransitionLink href="/contato" className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light">
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-40" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <Image src="/images/img-cta-especialist.webp" alt="Equipe Phurshell" width={120} height={48} className="h-12 w-auto object-contain" />
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
          <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-46" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <Image src="/images/img-hero-insurtech.webp" alt="Plataforma insurtech desenvolvida pela Phurshell" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full sm:max-w-[70%] lg:max-w-[30%]">
                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                      Insurtech combina <strong className="text-white">tecnologia e inovação</strong> para transformar o setor de seguros. Abrange plataformas de <strong className="text-white">contratação digital, seguros sob demanda, gestão de sinistros</strong> e backoffice para seguradoras — tornando a proteção mais acessível e transparente.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <ProcessCarousel items={services} label="O que entregamos" labelIcon="shield" title="Soluções completas para o setor de seguros." description="Da cotação ao sinistro, desenvolvemos produtos digitais para toda a cadeia de valor do seguro. Aplicativos para segurados, portais para corretores, sistemas para seguradoras — com a conformidade e segurança que o setor exige." bgColor="white" cardStyle="service" />
      </section>

      <ProcessCarousel items={solutions} label="Outras Soluções" hideLabel={true} smallTitle={true} labelIcon="shield" title="Funcionalidades e módulos especializados em seguros" showCta={true} description="Cada insurtech tem suas particularidades. Por isso oferecemos um conjunto amplo de módulos especializados que podem ser combinados de acordo com as necessidades do seu produto." bgColor="white" cardStyle="service" />

      <ProcessCarousel items={processStages} label="Nosso Processo" labelIcon="clipboard" title="Como desenvolvemos produtos de seguro" description="Projetos de seguro têm complexidade regulatória e técnica específica. Nosso processo garante que cada detalhe — da precificação ao sinistro — seja desenvolvido com precisão e conformidade." bgColor="gray" cardStyle="process" />

      <CasesCarousel segment="Insurtech" />
      <TestimonialCarousel label="Depoimentos" labelIcon="comment" title="O que nossos clientes dizem" description="Construímos parcerias de longo prazo com founders e times de produto que confiam na nossa capacidade de transformar ideias em produtos digitais de alto impacto." />
      <WhyPhurshell />
      <ContactCTA />

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">Perguntas frequentes</h2>
          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como vocês garantem conformidade com as normas da SUSEP?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Desenvolvemos com conformidade regulatória desde a arquitetura. Mapeamos as normas aplicáveis ao seu produto no início do projeto e estruturamos os fluxos, dados e integrações para atender às exigências da SUSEP. Trabalhamos junto ao seu time jurídico e de compliance para garantir que nada seja deixado de lado.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês desenvolvem seguros intermitentes e sob demanda?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Temos experiência direta com o desenvolvimento de plataformas de seguro intermitente — onde o segurado ativa e desativa a cobertura em tempo real pelo aplicativo. Desenvolvemos toda a lógica de cobrança proporcional, telemetria e integração com seguradoras parceiras.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                É possível integrar com sistemas legados de seguradoras?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Muitos projetos de insurtech envolvem integração com sistemas legados de seguradoras, resseguradoras e corretoras. Desenvolvemos conectores e middlewares que permitem que seu produto digital se comunique com esses sistemas sem a necessidade de substituí-los.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual o prazo para desenvolver uma plataforma de seguros?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Um MVP focado em um produto de seguro específico (como seguro automotivo intermitente) pode ser entregue em 3 a 5 meses. Plataformas mais completas, com múltiplos produtos, portal do corretor e backoffice de sinistros, normalmente levam de 6 a 12 meses.</p></div>
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
                  { "@type": "ListItem", "position": 3, "name": "Desenvolvimento de apps e plataformas insurtech", "item": "https://phurshell.com/segmentos/insurtech" }
            ]
          })
        }}
      />
    </div>
  )
}
