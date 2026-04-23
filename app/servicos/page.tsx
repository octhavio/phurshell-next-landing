import { Metadata } from 'next'
import ContactCTA from '../../src/components/ContactCTA'
import TransitionLink from '../../src/components/TransitionLink'

export const metadata: Metadata = {
  title: 'Serviços | Phurshell',
  description: 'Soluções completas em desenvolvimento de software. Mobile, web, APIs e muito mais para transformar sua ideia em realidade.',
}

export default function Servicos() {
  const serviceCategories = [
    {
      id: 'estrategia-produto-digital',
      title: 'Estratégia de Produto Digital',
      slug: 'estrategia-de-produto-digital',
      icon: 'compass',
      description: 'Ajudamos você a transformar sua ideia em um produto digital com direção clara, validação de mercado e um plano de execução sólido.',
      services: [
        {
          title: 'Discovery de Produto',
          icon: 'magnifying-glass',
          description:
            'Processo estruturado de pesquisa e validação para entender profundamente seu mercado, usuários e oportunidades.',
        },
        {
          title: 'Validação de Ideia',
          icon: 'lightbulb',
          description:
            'Teste e valide sua ideia de negócio antes de investir em desenvolvimento completo, reduzindo riscos e aumentando chances de sucesso.',
        },
        {
          title: 'Definição de MVP',
          icon: 'rocket',
          description:
            'Identificação e validação das funcionalidades essenciais para lançar seu produto com máximo valor e mínimo investimento.',
        },
        {
          title: 'Planejamento de Produto',
          icon: 'clipboard-list',
          description:
            'Definição de roadmap, features e estratégia de desenvolvimento alinhada aos objetivos de negócio e expectativas dos usuários.',
        },
        {
          title: 'Roadmap de Produto',
          icon: 'map',
          description:
            'Planejamento estratégico de evolução do produto definindo prioridades, milestones e entrega de valor ao longo do tempo.',
        },
      ],
    },
    {
      id: 'consultoria-startups',
      title: 'Consultoria para Startups',
      slug: 'consultoria-para-startups',
      icon: 'chart-pie',
      description: 'Mais do que software, ajudamos a estruturar negócios sustentáveis, preparados para crescer e captar investimento.',
      services: [
        {
          title: 'Planejamento Financeiro Estratégico',
          icon: 'calculator',
          description:
            'Estruturação completa das finanças do negócio com foco em crescimento sustentável.',
        },
        {
          title: 'Projeção de Receita e Cenários (Forecast)',
          icon: 'chart-mixed',
          description:
            'Modelagem de cenários otimista, realista e conservador para tomada de decisão.',
        },
        {
          title: 'KPIs Financeiros e Métricas de Crescimento',
          icon: 'bullseye',
          description:
            'Definição e acompanhamento de métricas como CAC, LTV, churn e margem para guiar decisões.',
        },
        {
          title: 'Modelagem de Negócios e Monetização',
          icon: 'coins',
          description:
            'Definição de pricing, recorrência, planos e estratégias de receita.',
        },
        {
          title: 'Captação de Investimento e Valuation',
          icon: 'handshake',
          description:
            'Preparação financeira e construção de indicadores para conversas com investidores.',
        },
        {
          title: 'Business Plan e Pitch para Investidores',
          icon: 'presentation-screen',
          description:
            'Estruturação do plano de negócio e criação de pitch deck claro, objetivo e convincente.',
        },
      ],
    },
    {
      id: 'design-produto-experiencia',
      title: 'Design de Produto & Experiência',
      slug: 'design-de-produto-e-experiencia',
      icon: 'palette',
      description: 'Criamos interfaces bonitas e funcionais que encantam usuários e convertem visitantes em clientes.',
      services: [
        {
          title: 'UX Design',
          icon: 'users',
          description:
            'Criação de experiências intuitivas e envolventes focadas nas necessidades reais dos usuários.',
        },
        {
          title: 'UI Design',
          icon: 'paintbrush',
          description:
            'Design de interfaces visuais modernas e atraentes que refletem a identidade da sua marca.',
        },
        {
          title: 'Wireframes & Prototipação',
          icon: 'drafting-compass',
          description:
            'Estruturação visual e fluxos de navegação para validar ideias e arquitetura de informação antes do design final.',
        },
        {
          title: 'Design de Produto Digital',
          icon: 'palette',
          description:
            'Design completo de produtos digitais desde conceito até interface final, garantindo consistência e excelência visual.',
        },
        {
          title: 'Web Design',
          icon: 'desktop',
          description:
            'Design visual de websites modernos e responsivos com foco em estética, usabilidade e conversão.',
        },
      ],
    },
    {
      id: 'desenvolvimento-aplicativos',
      title: 'Desenvolvimento de Aplicativos',
      slug: 'desenvolvimento-de-aplicativos',
      icon: 'mobile',
      description: 'Aplicativos mobile completos para iOS e Android com design moderno, performance otimizada e experiência nativa de alta qualidade.',
      hasPage: true,
      services: [
        {
          title: 'Apps iOS',
          icon: 'apple',
          description:
            'Aplicativos nativos para iPhone e iPad com Swift e SwiftUI garantindo máxima performance e integração com ecossistema Apple.',
        },
        {
          title: 'Apps Android',
          icon: 'android',
          description:
            'Aplicativos nativos para dispositivos Android com Kotlin oferecendo performance otimizada e acesso a recursos nativos.',
        },
        {
          title: 'Apps Híbridos',
          icon: 'layer-group',
          description:
            'Desenvolvimento cross-platform com React Native e Flutter para lançar em iOS e Android simultaneamente com código compartilhado.',
        },
        {
          title: 'Desenvolvimento de MVP',
          icon: 'rocket',
          description:
            'Desenvolvimento rápido de produtos mínimos viáveis para validar sua ideia no mercado com menor investimento e time-to-market.',
        },
        {
          title: 'Apps sob Medida',
          icon: 'wrench',
          description:
            'Aplicativos mobile customizados desenvolvidos especificamente para atender as necessidades únicas e complexas do seu negócio.',
        },
      ],
    },
    {
      id: 'desenvolvimento-web-saas',
      title: 'Desenvolvimento Web & SaaS',
      slug: 'desenvolvimento-web-e-saas',
      icon: 'globe',
      description: 'Plataformas web escaláveis e robustas utilizando as melhores tecnologias do mercado.',
      services: [
        {
          title: 'Desenvolvimento Web',
          icon: 'globe',
          description:
            'Plataformas web escaláveis e responsivas utilizando Next.js, React e as melhores práticas de desenvolvimento moderno.',
        },
        {
          title: 'Plataformas SaaS',
          icon: 'cloud',
          description:
            'Plataformas Software as a Service completas com multi-tenancy, billing, onboarding e infraestrutura escalável para crescimento.',
        },
        {
          title: 'E-commerce',
          icon: 'cart-shopping',
          description:
            'Plataformas de vendas online rápidas e escaláveis que melhoram a experiência do cliente e maximizam conversão.',
        },
        {
          title: 'Dashboards & Admin',
          icon: 'chart-pie',
          description:
            'Painéis administrativos completos e intuitivos para gestão de dados, métricas e operações do seu negócio em tempo real.',
        },
        {
          title: 'Soluções Enterprise',
          icon: 'building',
          description:
            'Sistemas corporativos robustos e escaláveis para grandes organizações com alta disponibilidade, segurança e compliance.',
        },
        {
          title: 'Software Customizado',
          icon: 'gears',
          description:
            'Soluções sob medida desenvolvidas especificamente para atender necessidades únicas e processos específicos do seu negócio.',
        },
      ],
    },
    {
      id: 'engenharia-arquitetura-software',
      title: 'Engenharia & Arquitetura de Software',
      slug: 'engenharia-e-arquitetura-de-software',
      icon: 'wrench',
      description: 'Construímos a base técnica sólida que seus produtos precisam para escalar com segurança e performance.',
      services: [
        {
          title: 'Arquitetura de Software',
          icon: 'building-columns',
          description:
            'Definição de estrutura técnica, padrões e tecnologias para garantir escalabilidade, performance e manutenibilidade a longo prazo.',
        },
        {
          title: 'Backend',
          icon: 'server',
          description:
            'Sistemas backend robustos e escaláveis com Node.js, Python ou Java para suportar suas aplicações com alta performance.',
        },
        {
          title: 'Frontend',
          icon: 'laptop-code',
          description:
            'Interfaces modernas e interativas com React, Vue ou Angular focadas em performance e experiência excepcional do usuário.',
        },
        {
          title: 'APIs REST & GraphQL',
          icon: 'plug',
          description:
            'APIs robustas e escaláveis seguindo as melhores práticas para integração com qualquer plataforma ou serviço.',
        },
        {
          title: 'Microservices',
          icon: 'cubes',
          description:
            'Arquiteturas modulares e escaláveis baseadas em microsserviços que facilitam crescimento independente.',
        },
        {
          title: 'Banco de Dados',
          icon: 'database',
          description:
            'Modelagem e otimização de bancos de dados SQL e NoSQL para máxima performance, confiabilidade e integridade.',
        },
        {
          title: 'Integrações de Sistemas',
          icon: 'arrows-left-right',
          description:
            'Conecte diferentes plataformas e serviços criando um ecossistema integrado e eficiente para seu negócio digital.',
        },
        {
          title: 'Autenticação & Segurança',
          icon: 'lock',
          description:
            'Implementação de sistemas seguros de autenticação, autorização e proteção de dados sensíveis seguindo melhores práticas.',
        },
      ],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      slug: 'cloud-e-devops',
      icon: 'cloud',
      description: 'Infraestrutura moderna e automatizada para que seus produtos rodem com alta disponibilidade e entregas contínuas.',
      services: [
        {
          title: 'Cloud Infrastructure',
          icon: 'cloud-arrow-up',
          description:
            'Infraestrutura escalável e resiliente na AWS, Google Cloud ou Azure para suportar seu crescimento com alta disponibilidade.',
        },
        {
          title: 'CI/CD Pipeline',
          icon: 'gears',
          description:
            'Automação de deploy, testes e integração contínua garantindo entregas rápidas, confiáveis e sem downtime.',
        },
        {
          title: 'Containerização',
          icon: 'box',
          description:
            'Deploy com Docker e Kubernetes para garantir consistência entre ambientes, facilitar escalabilidade e portabilidade.',
        },
        {
          title: 'Monitoramento & Logs',
          icon: 'chart-line',
          description:
            'Sistemas de observabilidade para monitorar performance, erros e comportamento da aplicação em tempo real com alertas.',
        },
      ],
    },
    {
      id: 'qualidade-seguranca',
      title: 'Qualidade de Software & Segurança',
      slug: 'qualidade-de-software-e-seguranca',
      icon: 'shield',
      description: 'Garantimos que seu produto funcione com excelência, segurança e confiabilidade em qualquer cenário.',
      services: [
        {
          title: 'Testes Automatizados',
          icon: 'vial-circle-check',
          description:
            'Suite completa de testes automatizados (unitários, integração, E2E) garantindo qualidade e confiabilidade contínua do código.',
        },
        {
          title: 'QA & Software Testing',
          icon: 'check-double',
          description:
            'Garantia de qualidade abrangente com testes manuais e automatizados para identificar bugs e garantir excelência do produto.',
        },
        {
          title: 'Testes de Performance',
          icon: 'gauge-high',
          description:
            'Análise e otimização de performance com testes de carga, stress e escalabilidade para garantir resposta rápida sob demanda.',
        },
        {
          title: 'Auditoria de Código',
          icon: 'file-code',
          description:
            'Análise profunda do código existente identificando problemas de performance, segurança e qualidade para melhorias contínuas.',
        },
        {
          title: 'Cyber Segurança',
          icon: 'shield-halved',
          description:
            'Proteção completa contra ameaças digitais com auditoria de segurança, pentesting e implementação de melhores práticas.',
        },
      ],
    },
    {
      id: 'inteligencia-artificial-automacao',
      title: 'Inteligência Artificial & Automação',
      slug: 'inteligencia-artificial-e-automacao',
      icon: 'sparkles',
      description: 'Soluções inteligentes que automatizam processos, geram insights e criam experiências personalizadas para seus usuários.',
      services: [
        {
          title: 'Implementação de IA',
          icon: 'brain',
          description:
            'Soluções de IA para automação inteligente, análise preditiva e tomada de decisões baseada em dados.',
        },
        {
          title: 'Machine Learning',
          icon: 'robot',
          description:
            'Modelos de Machine Learning customizados para reconhecimento de padrões, previsões e otimização de processos de negócio.',
        },
        {
          title: 'Chatbots Inteligentes',
          icon: 'comments',
          description:
            'Chatbots com IA para automatizar atendimento, melhorar engajamento e otimizar suporte ao cliente 24/7.',
        },
        {
          title: 'Automação de Processos',
          icon: 'arrows-rotate',
          description:
            'Automatize tarefas repetitivas e fluxos de trabalho com inteligência artificial, aumentando eficiência e reduzindo custos.',
        },
      ],
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3',
      slug: 'blockchain-e-web3',
      icon: 'link',
      description: 'Desenvolvimento de soluções descentralizadas e contratos inteligentes para transparência e segurança nas transações.',
      services: [
        {
          title: 'Smart Contracts',
          icon: 'file-contract',
          description:
            'Desenvolvimento e auditoria de contratos inteligentes para automação segura de transações e regras de negócio.',
        },
        {
          title: 'Aplicações Descentralizadas (dApps)',
          icon: 'network-wired',
          description:
            'Criação de aplicações Web3 com integração a blockchains e carteiras digitais.',
        },
        {
          title: 'Tokenização & NFTs',
          icon: 'coins',
          description:
            'Soluções de tokenização de ativos e criação de NFTs para novos modelos de negócio e engajamento.',
        },
      ],
    },
    {
      id: 'solucoes-digitais-negocios',
      title: 'Soluções Digitais para Negócios',
      slug: 'solucoes-digitais-para-negocios',
      icon: 'suitcase',
      description: 'Sistemas e ferramentas que modernizam operações, melhoram a gestão e impulsionam resultados do seu negócio.',
      services: [
        {
          title: 'Transformação Digital',
          icon: 'arrow-trend-up',
          description:
            'Modernize seus processos de negócio com tecnologias digitais que aumentam eficiência, produtividade e competitividade.',
        },
        {
          title: 'ERP',
          icon: 'diagram-project',
          description:
            'Sistemas ERP integrados para gerenciar e otimizar processos core do negócio em toda sua organização com eficiência.',
        },
        {
          title: 'CRM',
          icon: 'address-book',
          description:
            'Soluções de Customer Relationship Management para gerenciar interações com clientes, impulsionar vendas e fidelização.',
        },
        {
          title: 'CMS',
          icon: 'file-lines',
          description:
            'Sistemas customizáveis de gestão de conteúdo para simplificar criação, gerenciamento e modificação de conteúdo web.',
        },
        {
          title: 'Business Intelligence',
          icon: 'chart-column',
          description:
            'Análise avançada de dados e dashboards interativos para decisões de negócio informadas e crescimento estratégico.',
        },
        {
          title: 'Modernização de Sistemas',
          icon: 'arrows-rotate',
          description:
            'Atualização de aplicações legadas para tecnologias modernas melhorando performance, manutenibilidade e experiência do usuário.',
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Nossos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">serviços</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">Da</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">concepção</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">ao</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">deploy,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">oferecemos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">tudo</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">você</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">precisa</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">criar</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">produtos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">digitais</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">alta</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">performance</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">seus</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">usuários</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">vão</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">amar.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-26" style={{ display: 'inline-block' }}>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </a>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-27" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  {/* Team photo */}
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em desenvolvimento de software da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-28">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-29">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-30">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-31">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-32">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          className="py-12 bg-gray-50"
        >
          <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
            {/* Category Header */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-4">
                <i className={`fa-jelly fa-${category.icon} text-4xl text-brand-orange`}></i>
                <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                  {category.title}
                </h2>
                {category.hasPage && (
                  <span className="rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-bold text-brand-orange">
                    Mais procurado
                  </span>
                )}
              </div>
              {category.description && (
                <p className="max-w-4xl text-xl leading-relaxed text-dark/70">
                  {category.description}
                </p>
              )}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => {
                const hasPage = category.slug === 'desenvolvimento-de-aplicativos'
                const CardWrapper = hasPage ? TransitionLink : 'div'
                const cardProps = hasPage
                  ? { href: `/servicos/${category.slug}` }
                  : {}

                return (
                  <CardWrapper
                    key={service.title}
                    {...cardProps}
                    className={`flex h-full flex-col rounded-button bg-white p-8 ${hasPage ? 'group transition-all duration-200 hover:shadow-lg' : ''}`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <i className={`${service.icon === 'apple' || service.icon === 'android' ? 'fa-brands' : 'fa-solid'} fa-${service.icon} text-xl ${hasPage ? 'text-dark transition-colors duration-200 group-hover:text-brand-orange' : 'text-brand-orange'}`}></i>
                      <h3 className={`text-xl font-black text-dark ${hasPage ? 'transition-colors duration-200 group-hover:text-brand-orange' : ''}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="flex-grow text-xl leading-relaxed text-dark/60">
                      {service.description}
                    </p>
                  </CardWrapper>
                )
              })}
            </div>

            {/* Saiba mais button - only for categories with pages */}
            {category.slug === 'desenvolvimento-de-aplicativos' && (
              <div className="mt-8">
                <TransitionLink
                  href={`/servicos/${category.slug}`}
                  className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
                >
                  Saiba mais
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}
