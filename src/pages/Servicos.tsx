import SEO from '../components/SEO'
import ContactCTA from '../components/ContactCTA'
import TransitionLink from '../components/TransitionLink'

export default function Servicos() {
  const serviceCategories = [
    {
      id: 'estrategia-produto-digital',
      title: 'Estratégia & Produto Digital',
      icon: 'compass',
      services: [
        {
          title: 'Estratégia de Produto',
          slug: 'estrategia-de-produto',
          icon: 'chart-line',
          description:
            'Planejamento estratégico completo para seu produto digital, alinhando objetivos de negócio com necessidades do mercado.',
        },
        {
          title: 'Discovery de Produto',
          slug: 'discovery-de-produto',
          icon: 'magnifying-glass',
          description:
            'Processo estruturado de pesquisa e validação para entender profundamente seu mercado, usuários e oportunidades.',
        },
        {
          title: 'Validação de Ideia',
          slug: 'validacao-de-ideia',
          icon: 'lightbulb',
          description:
            'Teste e valide sua ideia de negócio antes de investir em desenvolvimento completo, reduzindo riscos e aumentando chances de sucesso.',
        },
        {
          title: 'Planejamento de Produto',
          slug: 'planejamento-de-produto',
          icon: 'clipboard-list',
          description:
            'Definição de roadmap, features e estratégia de desenvolvimento alinhada aos objetivos de negócio e expectativas dos usuários.',
        },
        {
          title: 'Definição de MVP',
          slug: 'definicao-de-mvp',
          icon: 'rocket',
          description:
            'Identificação e validação das funcionalidades essenciais para lançar seu produto com máximo valor e mínimo investimento.',
        },
        {
          title: 'Roadmap de Produto',
          slug: 'roadmap-de-produto',
          icon: 'map',
          description:
            'Planejamento estratégico de evolução do produto definindo prioridades, milestones e entrega de valor ao longo do tempo.',
        },
        {
          title: 'Consultoria Técnica',
          slug: 'consultoria-tecnica',
          icon: 'user-tie',
          description:
            'Orientação especializada em arquitetura, tecnologias e melhores práticas para garantir o sucesso técnico do seu projeto.',
        },
        {
          title: 'Auditoria de Código',
          slug: 'auditoria-de-codigo',
          icon: 'file-code',
          description:
            'Análise profunda do código existente identificando problemas de performance, segurança e qualidade para melhorias contínuas.',
        },
        {
          title: 'Modernização de Sistemas',
          slug: 'modernizacao-de-sistemas',
          icon: 'arrows-rotate',
          description:
            'Atualização de aplicações legadas para tecnologias modernas melhorando performance, manutenibilidade e experiência do usuário.',
        },
      ],
    },
    {
      id: 'design-produto-experiencia',
      title: 'Design de Produto & Experiência',
      icon: 'palette',
      services: [
        {
          title: 'UI Design',
          slug: 'ui-design',
          icon: 'paintbrush',
          description:
            'Design de interfaces visuais modernas e atraentes que refletem a identidade da sua marca e encantam usuários.',
        },
        {
          title: 'UX Design',
          slug: 'ux-design',
          icon: 'users',
          description:
            'Criação de experiências intuitivas e envolventes focadas nas necessidades reais dos usuários e melhores práticas de usabilidade.',
        },
        {
          title: 'Wireframes',
          slug: 'wireframes',
          icon: 'drafting-compass',
          description:
            'Estruturação visual e fluxos de navegação para validar ideias e arquitetura de informação antes do design final.',
        },
        {
          title: 'Design de Produto Digital',
          slug: 'design-de-produto-digital',
          icon: 'palette',
          description:
            'Design completo de produtos digitais desde conceito até interface final, garantindo consistência e excelência visual.',
        },
        {
          title: 'Web Design',
          slug: 'web-design',
          icon: 'desktop',
          description:
            'Design visual de websites modernos e responsivos com foco em estética, usabilidade e conversão de visitantes.',
        },
        {
          title: 'Design de Interfaces',
          slug: 'design-de-interfaces',
          icon: 'window-maximize',
          description:
            'Criação de interfaces intuitivas e funcionais que facilitam a interação do usuário com seu produto digital.',
        },
      ],
    },
    {
      id: 'desenvolvimento-aplicativos',
      title: 'Desenvolvimento de Aplicativos',
      icon: 'mobile',
      services: [
        {
          title: 'Desenvolvimento de Aplicativos',
          slug: 'desenvolvimento-de-aplicativos',
          icon: 'mobile-screen-button',
          description:
            'Aplicativos mobile completos para iOS e Android com design moderno, performance otimizada e experiência nativa de alta qualidade.',
        },
        {
          title: 'Desenvolvimento de Apps iOS',
          slug: 'desenvolvimento-de-apps-ios',
          icon: 'apple',
          description:
            'Aplicativos nativos para iPhone e iPad com Swift e SwiftUI garantindo máxima performance e integração com ecossistema Apple.',
        },
        {
          title: 'Desenvolvimento de Apps Android',
          slug: 'desenvolvimento-de-apps-android',
          icon: 'android',
          description:
            'Aplicativos nativos para dispositivos Android com Kotlin oferecendo performance otimizada e acesso a recursos nativos da plataforma.',
        },
        {
          title: 'Desenvolvimento de Apps Híbridos',
          slug: 'desenvolvimento-de-apps-hibridos',
          icon: 'layer-group',
          description:
            'Desenvolvimento cross-platform com React Native e Flutter para lançar em iOS e Android simultaneamente com código compartilhado.',
        },
        {
          title: 'Desenvolvimento de MVP',
          slug: 'desenvolvimento-de-mvp',
          icon: 'rocket',
          description:
            'Desenvolvimento rápido de produtos mínimos viáveis para validar sua ideia no mercado com menor investimento e time-to-market.',
        },
        {
          title: 'Desenvolvimento de Apps sob medida',
          slug: 'desenvolvimento-de-apps-sob-medida',
          icon: 'wrench',
          description:
            'Aplicativos mobile customizados desenvolvidos especificamente para atender as necessidades únicas e complexas do seu negócio.',
        },
      ],
    },
    {
      id: 'desenvolvimento-software',
      title: 'Desenvolvimento de Software',
      icon: 'code',
      services: [
        {
          title: 'Desenvolvimento Web',
          slug: 'desenvolvimento-web',
          icon: 'globe',
          description:
            'Plataformas web escaláveis e responsivas utilizando Next.js, React e as melhores práticas de desenvolvimento moderno.',
        },
        {
          title: 'Desenvolvimento SaaS',
          slug: 'desenvolvimento-saas',
          icon: 'cloud',
          description:
            'Plataformas Software as a Service completas com multi-tenancy, billing, onboarding e infraestrutura escalável para crescimento.',
        },
        {
          title: 'Desenvolvimento de E-commerce',
          slug: 'desenvolvimento-de-ecommerce',
          icon: 'cart-shopping',
          description:
            'Plataformas de vendas online rápidas e escaláveis que melhoram a experiência do cliente e maximizam taxas de conversão.',
        },
        {
          title: 'Desenvolvimento de Software Customizado',
          slug: 'desenvolvimento-de-software-customizado',
          icon: 'gears',
          description:
            'Soluções sob medida desenvolvidas especificamente para atender as necessidades únicas e processos específicos do seu negócio.',
        },
        {
          title: 'Soluções Enterprise',
          slug: 'solucoes-enterprise',
          icon: 'building',
          description:
            'Sistemas corporativos robustos e escaláveis para grandes organizações com alta disponibilidade, segurança e compliance.',
        },
        {
          title: 'Dashboards & Admin',
          slug: 'dashboards-admin',
          icon: 'chart-pie',
          description:
            'Painéis administrativos completos e intuitivos para gestão de dados, métricas e operações do seu negócio em tempo real.',
        },
      ],
    },
    {
      id: 'engenharia-arquitetura-software',
      title: 'Engenharia & Arquitetura de Software',
      icon: 'wrench',
      services: [
        {
          title: 'Arquitetura de Software',
          slug: 'arquitetura-de-software',
          icon: 'building-columns',
          description:
            'Definição de estrutura técnica, padrões e tecnologias para garantir escalabilidade, performance e manutenibilidade a longo prazo.',
        },
        {
          title: 'Backend',
          slug: 'backend',
          icon: 'server',
          description:
            'Sistemas backend robustos e escaláveis com Node.js, Python ou Java para suportar suas aplicações com alta performance.',
        },
        {
          title: 'Frontend',
          slug: 'frontend',
          icon: 'laptop-code',
          description:
            'Interfaces modernas e interativas com React, Vue ou Angular focadas em performance e experiência excepcional do usuário.',
        },
        {
          title: 'APIs REST',
          slug: 'apis-rest',
          icon: 'plug',
          description:
            'APIs RESTful robustas e escaláveis seguindo padrões REST para integração com qualquer plataforma ou serviço externo.',
        },
        {
          title: 'GraphQL',
          slug: 'graphql',
          icon: 'code-branch',
          description:
            'APIs GraphQL flexíveis que permitem consultas precisas e reduzem o tráfego de dados desnecessário aumentando eficiência.',
        },
        {
          title: 'Microservices',
          slug: 'microservices',
          icon: 'cubes',
          description:
            'Arquiteturas modulares e escaláveis baseadas em microserviços que facilitam manutenção e permitem crescimento independente.',
        },
        {
          title: 'Banco de Dados',
          slug: 'banco-de-dados',
          icon: 'database',
          description:
            'Modelagem e otimização de bancos de dados SQL e NoSQL para máxima performance, confiabilidade e integridade de dados.',
        },
        {
          title: 'Integrações de Sistemas',
          slug: 'integracoes-de-sistemas',
          icon: 'arrows-left-right',
          description:
            'Conecte diferentes plataformas e serviços criando um ecossistema integrado e eficiente para seu negócio digital.',
        },
        {
          title: 'Autenticação & Segurança',
          slug: 'autenticacao-seguranca',
          icon: 'lock',
          description:
            'Implementação de sistemas seguros de autenticação, autorização e proteção de dados sensíveis seguindo melhores práticas.',
        },
      ],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: 'cloud',
      services: [
        {
          title: 'Cloud Infrastructure',
          slug: 'cloud-infrastructure',
          icon: 'cloud-arrow-up',
          description:
            'Infraestrutura escalável e resiliente na AWS, Google Cloud ou Azure para suportar seu crescimento com alta disponibilidade.',
        },
        {
          title: 'CI/CD Pipeline',
          slug: 'ci-cd-pipeline',
          icon: 'gears',
          description:
            'Automação de deploy, testes e integração contínua garantindo entregas rápidas, confiáveis e sem downtime.',
        },
        {
          title: 'Containerização',
          slug: 'containerizacao',
          icon: 'box',
          description:
            'Deploy com Docker e Kubernetes para garantir consistência entre ambientes, facilitar escalabilidade e portabilidade.',
        },
        {
          title: 'Monitoramento & Logs',
          slug: 'monitoramento-logs',
          icon: 'chart-line',
          description:
            'Sistemas de observabilidade para monitorar performance, erros e comportamento da aplicação em tempo real com alertas.',
        },
      ],
    },
    {
      id: 'qualidade-seguranca',
      title: 'Qualidade & Segurança',
      icon: 'shield',
      services: [
        {
          title: 'Testes Automatizados',
          slug: 'testes-automatizados',
          icon: 'vial-circle-check',
          description:
            'Suite completa de testes automatizados (unitários, integração, E2E) garantindo qualidade e confiabilidade contínua do código.',
        },
        {
          title: 'QA & Software Testing',
          slug: 'qa-software-testing',
          icon: 'check-double',
          description:
            'Garantia de qualidade abrangente com testes manuais e automatizados para identificar bugs e garantir excelência do produto.',
        },
        {
          title: 'Testes de Performance',
          slug: 'testes-de-performance',
          icon: 'gauge-high',
          description:
            'Análise e otimização de performance com testes de carga, stress e escalabilidade para garantir resposta rápida sob demanda.',
        },
        {
          title: 'Cyber Segurança',
          slug: 'cyber-seguranca',
          icon: 'shield-halved',
          description:
            'Proteção completa contra ameaças digitais com auditoria de segurança, pentesting e implementação de melhores práticas de segurança.',
        },
      ],
    },
    {
      id: 'inteligencia-artificial-tecnologias',
      title: 'Inteligência Artificial & Tecnologias Avançadas',
      icon: 'sparkles',
      services: [
        {
          title: 'Inteligência Artificial',
          slug: 'inteligencia-artificial',
          icon: 'brain',
          description:
            'Implementação de soluções de IA para automação inteligente, análise preditiva e tomada de decisões baseada em dados.',
        },
        {
          title: 'Machine Learning',
          slug: 'machine-learning',
          icon: 'robot',
          description:
            'Modelos de Machine Learning customizados para reconhecimento de padrões, previsões e otimização de processos de negócio.',
        },
        {
          title: 'Blockchain & Smart Contracts',
          slug: 'blockchain-smart-contracts',
          icon: 'link',
          description:
            'Desenvolvimento de soluções blockchain e contratos inteligentes para automação, transparência e segurança de transações.',
        },
      ],
    },
    {
      id: 'solucoes-digitais-negocios',
      title: 'Soluções Digitais para Negócios',
      icon: 'suitcase',
      services: [
        {
          title: 'Transformação Digital',
          slug: 'transformacao-digital',
          icon: 'arrow-trend-up',
          description:
            'Modernize seus processos de negócio com tecnologias digitais que aumentam eficiência, produtividade e competitividade.',
        },
        {
          title: 'ERP Development',
          slug: 'erp-development',
          icon: 'diagram-project',
          description:
            'Sistemas ERP integrados para gerenciar e otimizar processos core do negócio em toda sua organização com eficiência.',
        },
        {
          title: 'CRM',
          slug: 'crm',
          icon: 'address-book',
          description:
            'Soluções de Customer Relationship Management para gerenciar interações com clientes, impulsionar vendas e fidelização.',
        },
        {
          title: 'CMS',
          slug: 'cms',
          icon: 'file-lines',
          description:
            'Sistemas customizáveis de gestão de conteúdo para simplificar criação, gerenciamento e modificação de conteúdo web.',
        },
        {
          title: 'Chatbots',
          slug: 'chatbots',
          icon: 'comments',
          description:
            'Chatbots inteligentes com IA para automatizar atendimento, melhorar engajamento e otimizar suporte ao cliente 24/7.',
        },
        {
          title: 'Business Intelligence',
          slug: 'business-intelligence',
          icon: 'chart-column',
          description:
            'Análise avançada de dados e dashboards interativos para decisões de negócio informadas e crescimento estratégico baseado em insights.',
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      <SEO
        title="Serviços"
        description="Soluções completas em desenvolvimento de software. Mobile, web, APIs e muito mais para transformar sua ideia em realidade."
        url="/servicos"
      />
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
            <div className="mb-12 flex items-center gap-4">
              <i className={`fa-jelly fa-${category.icon} text-4xl text-brand-orange`}></i>
              <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                {category.title}
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => {
                const hasPage = service.slug === 'desenvolvimento-de-aplicativos'
                const linkUrl = hasPage ? `/servicos/${service.slug}` : '#'

                return (
                  <div
                    key={service.title}
                    className="group flex h-full flex-col rounded-button bg-white p-8 cursor-pointer"
                  >
                    {hasPage ? (
                      <TransitionLink href={linkUrl} className="flex h-full flex-col">
                        <div className="mb-3 flex items-center gap-3">
                          <i className={`${service.icon === 'apple' || service.icon === 'android' ? 'fa-brands' : 'fa-solid'} fa-${service.icon} text-xl text-dark`}></i>
                          <h3 className="text-xl font-black text-dark">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mb-4 flex-grow text-xl leading-relaxed text-dark/60">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-xl font-bold text-dark/60 transition-colors group-hover:text-brand-orange">
                            Ver mais
                            <i className="fa-solid fa-arrow-right opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"></i>
                          </span>
                          <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-bold text-brand-orange">
                            Mais procurado
                          </span>
                        </div>
                      </TransitionLink>
                    ) : (
                      <>
                        <div className="mb-3 flex items-center gap-3">
                          <i className={`${service.icon === 'apple' || service.icon === 'android' ? 'fa-brands' : 'fa-solid'} fa-${service.icon} text-xl text-dark`}></i>
                          <h3 className="text-xl font-black text-dark">
                            {service.title}
                          </h3>
                        </div>
                        <p className="flex-grow text-xl leading-relaxed text-dark/60">
                          {service.description}
                        </p>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}
