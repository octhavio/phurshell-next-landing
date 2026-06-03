'use client'
import Image from 'next/image'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function Varejo() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Mapeamento do negócio de varejo',
      description: 'Entendemos o catálogo, os fluxos de pedido, os modelos de entrega, os perfis de usuário (comprador, vendedor, logística) e as integrações necessárias. Projetos de varejo têm jornadas complexas — mapear tudo antes de começar evita retrabalho caro.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Wireframe & jornada de compra',
      description: 'Desenhamos todos os fluxos da jornada de compra — descoberta, catálogo, carrinho, checkout, pagamento e pós-venda. Cada tela é otimizada para conversão. Validamos com você antes de avançar.',
      color: 'teal',
      icon: 'compass',
    },
    {
      stage: 3,
      title: 'Arquitetura para alto volume',
      description: 'Sistemas de varejo precisam aguentar picos sazonais — Black Friday, datas comemorativas e campanhas. Projetamos a infraestrutura para escalar sob demanda e garantir disponibilidade mesmo nos momentos de maior tráfego.',
      color: 'blue',
      icon: 'server',
    },
    {
      stage: 4,
      title: 'Integrações com o ecossistema de varejo',
      description: 'Conectamos com gateways de pagamento, ERPs, sistemas de estoque, transportadoras, marketplaces e sistemas de nota fiscal. Seu app se integra ao ecossistema operacional da empresa de forma confiável.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Desenvolvimento & otimização de conversão',
      description: 'Desenvolvemos com foco em performance e conversão — cada milissegundo de carregamento importa no varejo. Testamos os fluxos de checkout, recuperação de carrinho abandonado e experiência de busca e filtro.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'QA & testes de carga',
      description: 'Antes do lançamento, simulamos picos de acesso, testamos todos os fluxos de pagamento e validamos integrações com fornecedores. Nenhum bug de checkout chega à produção.',
      color: 'teal',
      icon: 'check-double',
    },
    {
      stage: 7,
      title: 'Lançamento & monitoramento de vendas',
      description: 'Acompanhamos o lançamento com métricas de conversão, abandono de carrinho e performance em tempo real. Ajustamos rapidamente qualquer atrito identificado nas primeiras horas de operação.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução & novas funcionalidades',
      description: 'Varejo digital evolui rápido. Acompanhamos com novas funcionalidades, otimizações de conversão baseadas em dados, expansão para novos canais e sazonalidades. Seu produto cresce com o negócio.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Apps iOS & Android',
      description: 'Aplicativos nativos de e-commerce com catálogo, carrinho, checkout otimizado e experiência de compra fluida em qualquer dispositivo.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas Web',
      description: 'Lojas virtuais e marketplaces web responsivos, rápidos e otimizados para SEO e conversão.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'Marketplace',
      description: 'Plataformas de múltiplos vendedores com gestão de catálogo, repasse financeiro, avaliações e painel do seller.',
      icon: 'bag-shopping',
      iconType: 'jelly',
    },
    {
      title: 'Backoffice & Admin',
      description: 'Painéis de gestão de pedidos, estoque, vendedores, relatórios e operações logísticas em tempo real.',
      icon: 'chart-pie',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Catálogo & busca inteligente',
      description: 'Sistemas de catálogo com busca por texto, filtros avançados, variações de produto e recomendações personalizadas.',
      icon: 'magnifying-glass',
    },
    {
      title: 'Checkout otimizado',
      description: 'Fluxo de checkout com o menor número de passos possível, salvamento de endereço e pagamentos rápidos para maximizar conversão.',
      icon: 'bolt',
    },
    {
      title: 'Pagamentos & split',
      description: 'Integração com múltiplos meios de pagamento, PIX, cartão, boleto e split automático para marketplaces multi-seller.',
      icon: 'money-bill',
    },
    {
      title: 'Gestão de estoque',
      description: 'Integração com sistemas de estoque para sincronização em tempo real de disponibilidade e alertas de ruptura.',
      icon: 'database',
    },
    {
      title: 'Logística & rastreamento',
      description: 'Integração com transportadoras, cálculo de frete em tempo real e rastreamento de pedidos com notificações automáticas.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Recuperação de carrinho',
      description: 'Automações de recuperação de carrinho abandonado via push, e-mail e SMS para aumentar a receita sem novo investimento em mídia.',
      icon: 'bell',
    },
    {
      title: 'Programa de fidelidade',
      description: 'Sistemas de pontos, cashback e recompensas para aumentar o LTV e a frequência de compra dos clientes.',
      icon: 'sparkles',
    },
    {
      title: 'Avaliações & social proof',
      description: 'Sistema de avaliações de produtos e vendedores com moderação, fotos de clientes e respostas do seller.',
      icon: 'comments',
    },
    {
      title: 'Analytics de vendas',
      description: 'Dashboards com ticket médio, conversão, produtos mais vendidos, churn e ROI de campanhas para decisões estratégicas.',
      icon: 'chart-pie',
    },
    {
      title: 'Scan & compra rápida',
      description: 'Funcionalidades de leitura de código de barras e QR Code para compra rápida em ambientes físicos e digitais.',
      icon: 'clipboard',
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvimento de apps para varejo e e-commerce
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Experiências de compra que convertem
          </h2>
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">No</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">varejo</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">digital,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">cada</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">segundo</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">fricção</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">custa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">conversão.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">Construímos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">apps</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">e-commerce</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">marketplaces</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">rápidos,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">intuitivos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">otimizados</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">venda.</span></span>
          </p>
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-27" style={{ display: 'inline-block' }}>
              <TransitionLink href="/contato" className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light">
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-28" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <Image src="/images/img-cta-especialist.webp" alt="Equipe Phurshell" width={120} height={48} className="h-12 w-auto object-contain" />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-29">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-30">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-31">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-32">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-33">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>
          <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-34" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <Image src="/images/img-hero-varejo.webp" alt="App de varejo desenvolvido pela Phurshell" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full sm:max-w-[70%] lg:max-w-[30%]">
                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                      Varejo digital abrange toda a tecnologia que <strong className="text-white">conecta produtos a compradores</strong> no ambiente online. Inclui <strong className="text-white">e-commerce, marketplaces, apps de compra, programas de fidelidade</strong> e integrações com ERP e logística — do catálogo ao pós-venda.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <ProcessCarousel items={services} label="O que entregamos" labelIcon="bag-shopping" title="Soluções completas para o varejo digital." description="Do catálogo ao pós-venda, desenvolvemos produtos de e-commerce e marketplace que convertem. Cada detalhe é pensado para reduzir fricção, aumentar o ticket médio e fidelizar o cliente." bgColor="white" cardStyle="service" />
      </section>

      <ProcessCarousel items={solutions} label="Outras Soluções" hideLabel={true} smallTitle={true} labelIcon="bag-shopping" title="Funcionalidades que aumentam vendas e retenção" showCta={true} description="Varejo digital é um ecossistema complexo. Oferecemos um conjunto completo de módulos para construir a operação certa para o seu negócio." bgColor="white" cardStyle="service" />

      <ProcessCarousel items={processStages} label="Nosso Processo" labelIcon="clipboard" title="Como desenvolvemos produtos de varejo" description="Projetos de varejo têm complexidade operacional e técnica específica. Nosso processo garante que cada integração, cada fluxo de pagamento e cada detalhe de UX seja desenvolvido para maximizar vendas." bgColor="gray" cardStyle="process" />

      <CasesCarousel segment="Varejo" />
      <TestimonialCarousel label="Depoimentos" labelIcon="comment" title="O que nossos clientes dizem" description="Construímos parcerias de longo prazo com founders e times de produto que confiam na nossa capacidade de transformar ideias em produtos digitais de alto impacto." />
      <WhyPhurshell />
      <ContactCTA />

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">Perguntas frequentes</h2>
          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês desenvolvem marketplaces com múltiplos vendedores?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Desenvolvemos marketplaces completos com painel do seller, gestão de catálogo por vendedor, split de pagamento automático, avaliações e backoffice de gestão. A complexidade varia conforme o modelo de negócio — durante o discovery mapeamos tudo o que é necessário.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A plataforma aguenta picos como Black Friday?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim, desde que a infraestrutura seja dimensionada para isso. Usamos auto-scaling na nuvem, CDN para assets estáticos, cache inteligente e filas de processamento para garantir disponibilidade em picos de tráfego. Realizamos testes de carga antes de datas críticas.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês integram com sistemas de ERP e estoque existentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Integramos com os principais ERPs do mercado (TOTVS, SAP, Bling, Tiny) e sistemas de estoque proprietários. Desenvolvemos conectores que sincronizam catálogo, preços e disponibilidade em tempo real entre seu sistema de gestão e o app.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual o prazo para lançar um app de e-commerce?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Um app de e-commerce com catálogo, carrinho, checkout e integrações básicas pode ser entregue em 3 a 4 meses. Marketplaces com múltiplos sellers, split de pagamento e backoffice completo normalmente levam de 5 a 8 meses.</p></div>
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
                  { "@type": "ListItem", "position": 3, "name": "Desenvolvimento de apps para varejo e e-commerce", "item": "https://phurshell.com/segmentos/varejo" }
            ]
          })
        }}
      />
    </div>
  )
}
