'use client'
import Image from 'next/image'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function Fintech() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Discovery financeiro & regulatório',
      description: 'Mapeamos o modelo de negócio, os produtos financeiros, as obrigações regulatórias (BACEN, CVM, LGPD) e os perfis de usuário. Projetos fintech têm complexidade regulatória significativa — entender o escopo completo antes de começar é fundamental.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Wireframe & fluxos financeiros',
      description: 'Desenhamos todos os fluxos críticos — onboarding KYC, transações, investimentos, extrato e suporte. Cada tela precisa transmitir confiança e clareza. Validamos com você antes de avançar para garantir que a experiência seja impecável.',
      color: 'teal',
      icon: 'compass',
    },
    {
      stage: 3,
      title: 'Arquitetura segura & compliance',
      description: 'Estruturamos a base técnica com criptografia end-to-end, autenticação multifator, logs de auditoria imutáveis e controle de acesso granular. Projetamos para conformidade com BACEN, Open Finance e LGPD desde o primeiro commit.',
      color: 'blue',
      icon: 'shield',
    },
    {
      stage: 4,
      title: 'Integrações financeiras',
      description: 'Conectamos com gateways de pagamento, APIs bancárias Open Finance, boletos, PIX, sistemas antifraude, bureaus de crédito e corretoras. Seu produto se integra ao sistema financeiro brasileiro de forma segura e confiável.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Desenvolvimento & testes financeiros',
      description: 'Desenvolvemos com foco em precisão financeira — erros de centavo não são aceitáveis. Testamos exaustivamente todos os fluxos de transação, cálculos de rendimento, conciliação e cenários de falha de pagamento.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'Pentest & auditoria de segurança',
      description: 'Antes do lançamento, realizamos testes de penetração, auditoria de segurança completa e validação de todos os fluxos financeiros. Fintechs são alvos prioritários de ataques — segurança não é opcional.',
      color: 'teal',
      icon: 'check-double',
    },
    {
      stage: 7,
      title: 'Lançamento controlado',
      description: 'Lançamos com um grupo controlado de usuários beta para validar os fluxos financeiros em produção antes de abrir para todos. Monitoramos transações, erros e comportamento em tempo real nas primeiras semanas.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução & novos produtos financeiros',
      description: 'Acompanhamos seu produto com manutenção proativa, adaptações regulatórias e lançamento de novos produtos financeiros. O mercado de fintechs evolui rapidamente — e seu produto precisa acompanhar.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Apps iOS & Android',
      description: 'Aplicativos nativos com performance em tempo real, biometria, criptografia e experiência que compete com os maiores bancos digitais.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas Web',
      description: 'Plataformas web financeiras com dashboards em tempo real, relatórios e gestão completa de produtos e clientes.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'Wallets & Pagamentos',
      description: 'Carteiras digitais com PIX, boleto, TED, transferências e gestão de saldo com experiência fluida e segura.',
      icon: 'bag-shopping',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas de Investimento',
      description: 'Dashboards de portfólio, cotações em tempo real, ordens de compra e venda e relatórios de performance.',
      icon: 'chart-pie',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'KYC & onboarding digital',
      description: 'Fluxos de verificação de identidade com OCR de documentos, selfie liveness e consulta a bureaus para onboarding rápido e seguro.',
      icon: 'users',
    },
    {
      title: 'PIX & pagamentos instantâneos',
      description: 'Integração com o ecossistema PIX do BACEN para pagamentos e recebimentos instantâneos com QR Code e chaves PIX.',
      icon: 'bolt',
    },
    {
      title: 'Open Finance & APIs bancárias',
      description: 'Integração com o ecossistema Open Finance brasileiro para agregação de contas, portabilidade e novos produtos financeiros.',
      icon: 'link',
    },
    {
      title: 'Antifraude & análise de risco',
      description: 'Camadas de detecção de fraude em tempo real, análise comportamental e score de risco para proteger usuários e a operação.',
      icon: 'shield',
    },
    {
      title: 'Autenticação & segurança avançada',
      description: 'Biometria, autenticação em dois fatores, criptografia de dados financeiros e sessões seguras para máxima proteção.',
      icon: 'check-double',
    },
    {
      title: 'Score de crédito & bureau',
      description: 'Integração com Serasa, SPC e outras fontes para consulta de score, análise de crédito e decisões automatizadas.',
      icon: 'database',
    },
    {
      title: 'Extrato & conciliação',
      description: 'Módulos de extrato detalhado, categorização de transações e conciliação automática para gestão financeira completa.',
      icon: 'clipboard',
    },
    {
      title: 'Cobrança recorrente & assinaturas',
      description: 'Gestão de cobranças recorrentes, planos de assinatura, inadimplência e retentativas automáticas de pagamento.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Notificações financeiras',
      description: 'Alertas de transação, movimentações suspeitas, vencimentos e oportunidades de investimento em tempo real.',
      icon: 'bell',
    },
    {
      title: 'Relatórios & analytics',
      description: 'Dashboards financeiros com métricas de volume, churn, inadimplência e crescimento da base para decisões estratégicas.',
      icon: 'chart-pie',
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvimento de apps e soluções fintech
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Finanças acessíveis na palma da mão
          </h2>
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">Dinheiro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">é</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">um</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">assunto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">sério</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">—</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">aplicativos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">financeiros</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">precisam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">transmitir</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">confiança</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">desde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">primeira</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">tela.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">Desenvolvemos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">fintechs</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">foco</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">segurança,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">compliance</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">experiência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">impecável.</span></span>
          </p>
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-32" style={{ display: 'inline-block' }}>
              <TransitionLink href="/contato/" className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light">
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-33" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <Image src="/images/img-cta-especialist.webp" alt="Equipe Phurshell" width={120} height={48} className="h-12 w-auto object-contain" />
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
          <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-39" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <Image src="/images/img-hero-fintech.webp" alt="App fintech desenvolvido pela Phurshell" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full sm:max-w-[70%] lg:max-w-[30%]">
                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                      Fintech é o segmento que aplica <strong className="text-white">tecnologia ao mercado financeiro</strong> para criar produtos mais rápidos, acessíveis e inteligentes. Inclui <strong className="text-white">carteiras digitais, plataformas de investimento, crédito, pagamentos e open finance</strong> — experiências que substituem o banco tradicional.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <ProcessCarousel items={services} label="O que entregamos" labelIcon="chart-pie" title="Soluções financeiras seguras e escaláveis." description="Da wallet ao app de investimentos, desenvolvemos fintechs com a segurança, conformidade e experiência que o mercado financeiro exige. Cada produto é construído para competir com os maiores players do setor." bgColor="white" cardStyle="service" />
      </section>

      <ProcessCarousel items={solutions} label="Outras Soluções" hideLabel={true} smallTitle={true} labelIcon="chart-pie" title="Módulos e integrações especializados em finanças" showCta={true} description="Fintechs são ecossistemas complexos de integrações. Oferecemos um conjunto completo de módulos financeiros que podem ser combinados para construir o produto certo." bgColor="white" cardStyle="service" />

      <ProcessCarousel items={processStages} label="Nosso Processo" labelIcon="clipboard" title="Como desenvolvemos fintechs" description="Projetos financeiros têm exigências únicas de segurança, precisão e conformidade. Nosso processo garante que cada transação, cada dado e cada integração seja desenvolvida com o rigor que o setor exige." bgColor="gray" cardStyle="process" />

      <CasesCarousel segment="Fintech" />
      <TestimonialCarousel label="Depoimentos" labelIcon="comment" title="O que nossos clientes dizem" description="Construímos parcerias de longo prazo com founders e times de produto que confiam na nossa capacidade de transformar ideias em produtos digitais de alto impacto." />
      <WhyPhurshell />
      <ContactCTA />

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">Perguntas frequentes</h2>
          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem a segurança dos dados financeiros?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Implementamos criptografia end-to-end em todos os dados financeiros, autenticação multifator, biometria, logs de auditoria imutáveis e testes de penetração antes do lançamento. Seguimos as melhores práticas de segurança do setor financeiro e realizamos auditorias periódicas.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês integram com o ecossistema PIX e Open Finance?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Temos experiência com integração PIX direto com o BACEN e via PSPs parceiros. Também trabalhamos com Open Finance para agregação de contas, portabilidade de dados e novos produtos financeiros baseados no ecossistema regulatório brasileiro.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                É necessário ter licença do BACEN para lançar uma fintech?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Depende do produto. Algumas fintechs operam como correspondente bancário ou via parceria com instituições financeiras reguladas, sem precisar de licença própria. Outras precisam de autorização do BACEN ou CVM. Ajudamos a entender o modelo regulatório mais adequado para o seu produto durante o discovery.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual o prazo para desenvolver uma fintech?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Um MVP de fintech (como uma wallet com PIX) pode ser entregue em 3 a 5 meses. Plataformas mais completas com múltiplos produtos financeiros, KYC completo e backoffice regulatório normalmente levam de 6 a 12 meses. O prazo depende muito da complexidade das integrações e requisitos regulatórios.</p></div>
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
                  { "@type": "ListItem", "position": 3, "name": "Desenvolvimento de apps e soluções fintech", "item": "https://phurshell.com/segmentos/fintech" }
            ]
          })
        }}
      />
    </div>
  )
}
