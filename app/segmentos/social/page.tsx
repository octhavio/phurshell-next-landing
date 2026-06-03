'use client'
import Image from 'next/image'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function Social() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Pesquisa de mercado & nicho',
      description: 'Mapeamos o mercado, analisamos os concorrentes e entendemos profundamente o comportamento do público-alvo. Apps sociais de nicho têm dinâmicas muito específicas — identificar o que cria engajamento real é o ponto de partida para qualquer projeto bem-sucedido.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Wireframe & loops de engajamento',
      description: 'Desenhamos os fluxos de onboarding, descoberta, conexão e interação com foco em criar hábito. Cada tela é pensada para maximizar o tempo de sessão e a taxa de retorno — os indicadores que definem o sucesso de um app social.',
      color: 'teal',
      icon: 'compass',
    },
    {
      stage: 3,
      title: 'Arquitetura para escala social',
      description: 'Sistemas sociais crescem de forma não-linear. Projetamos a infraestrutura para suportar picos de acesso, feeds em tempo real, sistemas de notificação em massa e moderação de conteúdo desde o primeiro dia.',
      color: 'blue',
      icon: 'server',
    },
    {
      stage: 4,
      title: 'Integrações sociais & de conteúdo',
      description: 'Configuramos login social, integração com redes existentes, sistemas de pagamento para recursos premium, CDN para mídia e APIs de geolocalização. Seu app se conecta ao ecossistema digital de forma fluida.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Desenvolvimento & testes de engajamento',
      description: 'Desenvolvemos com foco em performance e fluidez — apps sociais precisam ser rápidos. Testamos os loops de engajamento, a taxa de notificações e os fluxos de descoberta para garantir que a experiência seja irresistível.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'Moderação & segurança da comunidade',
      description: 'Implementamos sistemas de denúncia, moderação de conteúdo, bloqueio de usuários e filtros de segurança. Comunidades saudáveis retêm usuários — e isso começa com ferramentas de moderação bem projetadas.',
      color: 'teal',
      icon: 'shield',
    },
    {
      stage: 7,
      title: 'Lançamento & estratégia de crescimento',
      description: 'Apps sociais precisam de massa crítica para funcionar. Acompanhamos o lançamento com métricas de engajamento em tempo real e estratégias de crescimento orgânico para superar o cold start problem.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução baseada em dados',
      description: 'Analisamos o comportamento real dos usuários para evoluir o produto. Funcionalidades que ninguém usa são removidas, loops de engajamento que funcionam são amplificados. Seu app melhora continuamente com base em dados reais.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Apps iOS & Android',
      description: 'Aplicativos nativos de alta performance com feeds em tempo real, notificações push e experiência fluida em qualquer dispositivo.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas Web',
      description: 'Versões web responsivas da sua plataforma social, com todas as funcionalidades do app e otimizadas para SEO e descoberta orgânica.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'Apps de Relacionamento',
      description: 'Plataformas de match, perfis, chat e conexão entre pessoas com algoritmos de compatibilidade e fluxos de descoberta.',
      icon: 'heart',
      iconType: 'jelly',
    },
    {
      title: 'Comunidades & Redes de Nicho',
      description: 'Plataformas para grupos de interesse específico com fóruns, eventos, rankings e ferramentas de engajamento da comunidade.',
      icon: 'users',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Feed & descoberta de conteúdo',
      description: 'Algoritmos de feed personalizados, exploração por interesses e descoberta de novos usuários e conteúdos relevantes.',
      icon: 'sparkles',
    },
    {
      title: 'Chat & mensagens em tempo real',
      description: 'Sistemas de mensagens individuais e em grupo com suporte a texto, mídia, reações e indicadores de leitura.',
      icon: 'comments',
    },
    {
      title: 'Sistema de match & compatibilidade',
      description: 'Algoritmos de compatibilidade baseados em interesses, localização e comportamento para conectar as pessoas certas.',
      icon: 'heart',
    },
    {
      title: 'Notificações inteligentes',
      description: 'Sistema de push notifications contextual que aumenta o retorno ao app sem ser invasivo para o usuário.',
      icon: 'bell',
    },
    {
      title: 'Perfis & identidade digital',
      description: 'Sistemas de perfil ricos com fotos, vídeos, interesses, histórico e verificação de identidade para comunidades seguras.',
      icon: 'users',
    },
    {
      title: 'Geolocalização & eventos',
      description: 'Funcionalidades baseadas em localização para descobrir pessoas, eventos e oportunidades próximas.',
      icon: 'map',
    },
    {
      title: 'Monetização & recursos premium',
      description: 'Assinaturas, compras in-app, boosts de perfil e recursos exclusivos para gerar receita sem comprometer o engajamento.',
      icon: 'money-bill',
    },
    {
      title: 'Moderação & segurança',
      description: 'Ferramentas de denúncia, bloqueio, filtros de conteúdo e moderação para manter a comunidade saudável e segura.',
      icon: 'shield',
    },
    {
      title: 'Analytics de engajamento',
      description: 'Dashboards com métricas de DAU/MAU, tempo de sessão, retenção e funis de conversão para guiar a evolução do produto.',
      icon: 'chart-pie',
    },
    {
      title: 'Integração com redes sociais',
      description: 'Login social, compartilhamento nativo e integração com Instagram, TikTok e outras plataformas para crescimento orgânico.',
      icon: 'link',
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Desenvolvimento de apps sociais e plataformas de relacionamento
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Conexões reais em plataformas que engajam
          </h2>
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">Aplicativos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">sociais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">vivem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">ou</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">morrem</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">pelo</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">engajamento.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">Construímos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">experiências</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">criam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">hábito</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">—</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">desde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">primeiro</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">onboarding</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">até</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">as</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">interações</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">do</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">dia</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">dia.</span></span>
          </p>
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-29" style={{ display: 'inline-block' }}>
              <TransitionLink href="/contato" className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light">
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-30" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <Image src="/images/img-cta-especialist.webp" alt="Equipe Phurshell" width={120} height={48} className="h-12 w-auto object-contain" />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-31">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-32">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-33">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-34">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-35">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>
          <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-36" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <Image src="/images/img-hero-social.webp" alt="App social desenvolvido pela Phurshell" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full sm:max-w-[70%] lg:max-w-[30%]">
                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                      Apps sociais são plataformas que <strong className="text-white">conectam pessoas</strong> em torno de interesses, relacionamentos ou comunidades. Vão desde <strong className="text-white">apps de dating, redes de nicho e comunidades esportivas</strong> até plataformas de entretenimento e descoberta — todos movidos pelo engajamento.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <ProcessCarousel items={services} label="O que entregamos" labelIcon="users" title="Plataformas sociais que criam conexões reais." description="De apps de relacionamento a comunidades de nicho, desenvolvemos plataformas que engajam, retêm e crescem. Cada detalhe é pensado para criar o hábito de uso que define o sucesso de um produto social." bgColor="white" cardStyle="service" />
      </section>

      <ProcessCarousel items={solutions} label="Outras Soluções" hideLabel={true} smallTitle={true} labelIcon="users" title="Funcionalidades que fazem apps sociais crescerem" showCta={true} description="Apps sociais são ecossistemas complexos. Oferecemos um conjunto completo de módulos para construir a plataforma certa para o seu nicho." bgColor="white" cardStyle="service" />

      <ProcessCarousel items={processStages} label="Nosso Processo" labelIcon="clipboard" title="Como desenvolvemos apps sociais" description="Apps sociais têm desafios únicos: cold start, engajamento, moderação e escala. Nosso processo endereça cada um desses desafios desde o início do projeto." bgColor="gray" cardStyle="process" />

      <CasesCarousel segment="Social" />
      <TestimonialCarousel label="Depoimentos" labelIcon="comment" title="O que nossos clientes dizem" description="Construímos parcerias de longo prazo com founders e times de produto que confiam na nossa capacidade de transformar ideias em produtos digitais de alto impacto." />
      <WhyPhurshell />
      <ContactCTA />

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">Perguntas frequentes</h2>
          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como resolver o problema de cold start em apps sociais?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">O cold start é o maior desafio de qualquer plataforma social. Trabalhamos com estratégias de lançamento segmentado, convites limitados, conteúdo seed e loops de indicação para criar massa crítica de forma controlada. O produto já é desenhado desde o início com funcionalidades que funcionam mesmo com poucos usuários.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês desenvolvem sistemas de match e algoritmos de compatibilidade?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Desenvolvemos algoritmos de compatibilidade baseados em interesses, comportamento e localização. A complexidade do algoritmo depende do escopo — desde regras simples de filtro até modelos de machine learning para recomendação avançada. Definimos a abordagem certa para cada projeto durante o discovery.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantir a segurança dos usuários na plataforma?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Implementamos múltiplas camadas de segurança: verificação de identidade, sistema de denúncias, bloqueio de usuários, moderação de conteúdo (manual e automatizada), detecção de comportamentos suspeitos e LGPD compliance. Comunidades seguras retêm mais usuários.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A infraestrutura suporta crescimento rápido?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Projetamos a infraestrutura para escalar horizontalmente desde o início. Usamos arquitetura de microsserviços, filas de mensagens para notificações em massa, CDN para mídia e auto-scaling na nuvem. Seu app aguenta um pico viral sem cair.</p></div>
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
                  { "@type": "ListItem", "position": 3, "name": "Desenvolvimento de apps sociais e plataformas de relacionamento", "item": "https://phurshell.com/segmentos/social" }
            ]
          })
        }}
      />
    </div>
  )
}
