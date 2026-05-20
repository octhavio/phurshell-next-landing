'use client'
import Image from 'next/image'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function Educacao() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Discovery pedagógico & de produto',
      description: 'Entendemos o modelo pedagógico, os perfis de usuário (aluno, professor, gestor), os conteúdos e os indicadores de aprendizado que importam. Plataformas de educação têm dinâmicas únicas — engajamento e aprendizado real são métricas muito diferentes de simples visualizações.',
      color: 'red',
      icon: 'magnifying-glass',
    },
    {
      stage: 2,
      title: 'Wireframe & jornada de aprendizado',
      description: 'Desenhamos os fluxos de onboarding, consumo de conteúdo, avaliação, progresso e certificação. Cada tela é pensada para manter o aluno engajado e avançando — o maior desafio de qualquer plataforma educacional.',
      color: 'teal',
      icon: 'compass',
    },
    {
      stage: 3,
      title: 'Arquitetura para conteúdo em escala',
      description: 'Plataformas educacionais precisam entregar vídeos, exercícios e materiais de forma rápida e confiável. Estruturamos a infraestrutura com CDN para mídia, streaming otimizado e sincronização offline para uso sem internet.',
      color: 'blue',
      icon: 'server',
    },
    {
      stage: 4,
      title: 'Integrações educacionais',
      description: 'Conectamos com plataformas de videoconferência para aulas ao vivo, gateways de pagamento para matrículas, sistemas de certificação digital e APIs de conteúdo externo. Seu produto se integra ao ecossistema educacional.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Desenvolvimento & testes de aprendizado',
      description: 'Desenvolvemos com foco em acessibilidade e performance em diferentes dispositivos e conexões. Testamos os fluxos de consumo de conteúdo, avaliações e progressão para garantir que a experiência de aprendizado seja fluida.',
      color: 'blue',
      icon: 'code',
    },
    {
      stage: 6,
      title: 'QA & acessibilidade',
      description: 'Testamos todos os fluxos de conteúdo, avaliação e certificação. Validamos acessibilidade para garantir que a plataforma funcione bem para todos os perfis de alunos, incluindo aqueles com necessidades especiais.',
      color: 'teal',
      icon: 'check-double',
    },
    {
      stage: 7,
      title: 'Lançamento & onboarding de alunos',
      description: 'Acompanhamos o lançamento com métricas de ativação, engajamento e conclusão de cursos em tempo real. Um bom onboarding define se o aluno vai completar o primeiro módulo — e isso define a retenção.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Evolução baseada em dados de aprendizado',
      description: 'Analisamos onde os alunos abandonam, quais conteúdos geram mais engajamento e quais avaliações têm maior taxa de erro. Evoluímos o produto com base em dados reais de aprendizado para melhorar continuamente os resultados.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Apps iOS & Android',
      description: 'Aplicativos nativos com suporte a vídeo, exercícios offline, notificações de estudo e experiência otimizada para aprendizado mobile.',
      icon: 'mobile',
      iconType: 'jelly',
    },
    {
      title: 'Plataformas Web (LMS)',
      description: 'Sistemas de gestão de aprendizado web completos com cursos, turmas, avaliações, certificados e painel do professor.',
      icon: 'desktop',
      iconType: 'jelly',
    },
    {
      title: 'Aulas ao Vivo',
      description: 'Plataformas de videoconferência integradas para aulas síncronas com gravação, chat, exercícios e controle de presença.',
      icon: 'video',
      iconType: 'jelly',
    },
    {
      title: 'Backoffice Educacional',
      description: 'Painéis de gestão de alunos, professores, conteúdos, matrículas, financeiro e relatórios de desempenho.',
      icon: 'chart-pie',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Trilhas de aprendizado',
      description: 'Sistemas de trilhas com pré-requisitos, progressão não-linear e recomendações personalizadas baseadas no perfil do aluno.',
      icon: 'map',
    },
    {
      title: 'Gamificação & engajamento',
      description: 'Pontos, conquistas, rankings, streaks e recompensas para criar hábito de estudo e aumentar a conclusão de cursos.',
      icon: 'sparkles',
    },
    {
      title: 'Avaliações & quizzes',
      description: 'Sistema de avaliações com múltiplos formatos de questão, feedback imediato, banco de questões e análise de desempenho.',
      icon: 'clipboard',
    },
    {
      title: 'Certificação digital',
      description: 'Emissão automática de certificados com validação online, assinatura digital e compartilhamento em redes profissionais.',
      icon: 'check-double',
    },
    {
      title: 'Conteúdo offline',
      description: 'Sincronização de conteúdo para uso sem internet — fundamental para alunos com acesso intermitente à conexão.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Fórum & comunidade',
      description: 'Espaços de discussão por disciplina, tirar dúvidas com professores e interação entre alunos para aprendizado colaborativo.',
      icon: 'comments',
    },
    {
      title: 'Matrículas & pagamentos',
      description: 'Fluxo de matrícula com planos, parcelamento, boleto, PIX e gestão de inadimplência integrada.',
      icon: 'money-bill',
    },
    {
      title: 'Analytics de aprendizado',
      description: 'Dashboards com taxa de conclusão, engajamento por conteúdo, desempenho nas avaliações e alertas de alunos em risco.',
      icon: 'chart-pie',
    },
    {
      title: 'Multilíngue & internacionalização',
      description: 'Suporte a múltiplos idiomas, fusos horários e moedas para plataformas educacionais com alcance internacional.',
      icon: 'globe',
    },
    {
      title: 'Notificações de estudo',
      description: 'Lembretes inteligentes de estudo baseados no comportamento do aluno para manter o engajamento e reduzir o churn.',
      icon: 'bell',
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Educação</span></span>
          </h1>
          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            <span className="word-wrapper"><span className="word word-delay-2">Aprendizado</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">acontece</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">onde</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">o</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">aluno</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">está</span></span>
          </h2>
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">Educação</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">qualidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">precisa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">ser</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">acessível</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">envolvente.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">Desenvolvemos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">plataformas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">combinam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">boa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">experiência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">ferramentas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">realmente</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">ajudam</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">estudantes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">a</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">evoluir.</span></span>
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
                <Image src="/images/img-hero-educacao.webp" alt="Plataforma educacional desenvolvida pela Phurshell" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full sm:max-w-[70%] lg:max-w-[30%]">
                    <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                      Edtech é o segmento que usa <strong className="text-white">tecnologia para transformar a educação</strong>. Vai de <strong className="text-white">plataformas de cursos online, LMS corporativos e apps de idiomas</strong> a ferramentas de gestão escolar — produtos que tornam o aprendizado mais acessível, eficiente e engajante.
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <ProcessCarousel items={services} label="O que entregamos" labelIcon="book" title="Plataformas educacionais que engajam e ensinam." description="Do app do aluno ao painel do professor, desenvolvemos produtos edtech que tornam o aprendizado mais eficiente, acessível e prazeroso. Cada funcionalidade é pensada para aumentar a conclusão e os resultados reais." bgColor="white" cardStyle="service" />
      </section>

      <ProcessCarousel items={solutions} label="Outras Soluções" hideLabel={true} smallTitle={true} labelIcon="book" title="Módulos que transformam plataformas em experiências de aprendizado" showCta={true} description="Plataformas educacionais de sucesso combinam conteúdo, engajamento e dados. Oferecemos um conjunto completo de módulos para construir a solução certa." bgColor="white" cardStyle="service" />

      <ProcessCarousel items={processStages} label="Nosso Processo" labelIcon="clipboard" title="Como desenvolvemos plataformas educacionais" description="Projetos de edtech têm desafios únicos de engajamento e aprendizado. Nosso processo garante que o produto não apenas funcione tecnicamente, mas que realmente faça os alunos aprenderem e voltarem." bgColor="gray" cardStyle="process" />

      <CasesCarousel segment="Educação" />
      <TestimonialCarousel label="Depoimentos" labelIcon="comment" title="O que nossos clientes dizem" description="Construímos parcerias de longo prazo com founders e times de produto que confiam na nossa capacidade de transformar ideias em produtos digitais de alto impacto." />
      <WhyPhurshell />
      <ContactCTA />

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">Perguntas frequentes</h2>
          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Vocês desenvolvem tanto LMS quanto apps mobile educacionais?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Desenvolvemos desde plataformas LMS web completas até apps mobile nativos para iOS e Android. Na maioria dos projetos, o ideal é ter ambos — o LMS web para criação e gestão de conteúdo pelos professores, e o app mobile para consumo pelos alunos onde quer que estejam.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                É possível ter conteúdo disponível offline no app?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Sim. Implementamos sincronização de conteúdo para uso offline — o aluno baixa aulas, materiais e exercícios quando conectado e acessa tudo sem internet. Isso é especialmente importante para o mercado brasileiro, onde a conectividade ainda é irregular em muitas regiões.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como aumentar o engajamento e reduzir o abandono de cursos?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Implementamos gamificação (pontos, conquistas, streaks), notificações inteligentes baseadas no comportamento do aluno, trilhas progressivas bem estruturadas e feedback imediato nas avaliações. O produto é desenhado desde o início com loops de engajamento que criam o hábito de estudo.</p></div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Qual o prazo para lançar uma plataforma educacional?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4"><p className="text-xl leading-relaxed text-dark/70">Um MVP educacional com cursos, avaliações e certificação pode ser entregue em 3 a 4 meses. Plataformas mais completas com aulas ao vivo, gamificação, app mobile e backoffice completo normalmente levam de 5 a 8 meses.</p></div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
