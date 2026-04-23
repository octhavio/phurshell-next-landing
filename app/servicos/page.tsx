import { Metadata } from 'next'
import ContactCTA from '../../src/components/ContactCTA'
import TransitionLink from '../../src/components/TransitionLink'

export const metadata: Metadata = {
  title: 'Servicos | Phurshell',
  description: 'Solucoes completas em desenvolvimento de software. Mobile, web, APIs e muito mais para transformar sua ideia em realidade.',
}

export default function Servicos() {
  const serviceCategories = [
    {
      id: 'estrategia-produto-digital',
      title: 'Estrategia de Produto Digital',
      slug: 'estrategia-de-produto-digital',
      icon: 'compass',
      description: 'Ajudamos voce a transformar sua ideia em um produto digital com direcao clara, validacao de mercado e um plano de execucao solido.',
      services: [
        {
          title: 'Discovery de Produto',
          icon: 'magnifying-glass',
          description:
            'Processo estruturado de pesquisa e validacao para entender profundamente seu mercado, usuarios e oportunidades.',
        },
        {
          title: 'Validacao de Ideia',
          icon: 'lightbulb',
          description:
            'Teste e valide sua ideia de negocio antes de investir em desenvolvimento completo, reduzindo riscos e aumentando chances de sucesso.',
        },
        {
          title: 'Definicao de MVP',
          icon: 'rocket',
          description:
            'Identificacao e validacao das funcionalidades essenciais para lancar seu produto com maximo valor e minimo investimento.',
        },
        {
          title: 'Planejamento de Produto',
          icon: 'clipboard-list',
          description:
            'Definicao de roadmap, features e estrategia de desenvolvimento alinhada aos objetivos de negocio e expectativas dos usuarios.',
        },
        {
          title: 'Roadmap de Produto',
          icon: 'map',
          description:
            'Planejamento estrategico de evolucao do produto definindo prioridades, milestones e entrega de valor ao longo do tempo.',
        },
      ],
    },
    {
      id: 'consultoria-startups',
      title: 'Consultoria para Startups',
      slug: 'consultoria-para-startups',
      icon: 'chart-pie',
      description: 'Mais do que software, ajudamos a estruturar negocios sustentaveis, preparados para crescer e captar investimento.',
      services: [
        {
          title: 'Planejamento Financeiro Estrategico',
          icon: 'calculator',
          description:
            'Estruturacao completa das financas do negocio com foco em crescimento sustentavel.',
        },
        {
          title: 'Projecao de Receita e Cenarios (Forecast)',
          icon: 'chart-mixed',
          description:
            'Modelagem de cenarios otimista, realista e conservador para tomada de decisao.',
        },
        {
          title: 'KPIs Financeiros e Metricas de Crescimento',
          icon: 'bullseye',
          description:
            'Definicao e acompanhamento de metricas como CAC, LTV, churn e margem para guiar decisoes.',
        },
        {
          title: 'Modelagem de Negocios e Monetizacao',
          icon: 'coins',
          description:
            'Definicao de pricing, recorrencia, planos e estrategias de receita.',
        },
        {
          title: 'Captacao de Investimento e Valuation',
          icon: 'handshake',
          description:
            'Preparacao financeira e construcao de indicadores para conversas com investidores.',
        },
        {
          title: 'Business Plan e Pitch para Investidores',
          icon: 'presentation-screen',
          description:
            'Estruturacao do plano de negocio e criacao de pitch deck claro, objetivo e convincente.',
        },
      ],
    },
    {
      id: 'design-produto-experiencia',
      title: 'Design de Produto & Experiencia',
      slug: 'design-de-produto-e-experiencia',
      icon: 'palette',
      description: 'Criamos interfaces bonitas e funcionais que encantam usuarios e convertem visitantes em clientes.',
      services: [
        {
          title: 'UX Design',
          icon: 'users',
          description:
            'Criacao de experiencias intuitivas e envolventes focadas nas necessidades reais dos usuarios.',
        },
        {
          title: 'UI Design',
          icon: 'paintbrush',
          description:
            'Design de interfaces visuais modernas e atraentes que refletem a identidade da sua marca.',
        },
        {
          title: 'Wireframes & Prototipacao',
          icon: 'drafting-compass',
          description:
            'Estruturacao visual e fluxos de navegacao para validar ideias e arquitetura de informacao antes do design final.',
        },
        {
          title: 'Design de Produto Digital',
          icon: 'palette',
          description:
            'Design completo de produtos digitais desde conceito ate interface final, garantindo consistencia e excelencia visual.',
        },
        {
          title: 'Web Design',
          icon: 'desktop',
          description:
            'Design visual de websites modernos e responsivos com foco em estetica, usabilidade e conversao.',
        },
      ],
    },
    {
      id: 'desenvolvimento-aplicativos',
      title: 'Desenvolvimento de Aplicativos',
      slug: 'desenvolvimento-de-aplicativos',
      icon: 'mobile',
      description: 'Aplicativos mobile completos para iOS e Android com design moderno, performance otimizada e experiencia nativa de alta qualidade.',
      hasPage: true,
      services: [
        {
          title: 'Apps iOS',
          icon: 'apple',
          description:
            'Aplicativos nativos para iPhone e iPad com Swift e SwiftUI garantindo maxima performance e integracao com ecossistema Apple.',
        },
        {
          title: 'Apps Android',
          icon: 'android',
          description:
            'Aplicativos nativos para dispositivos Android com Kotlin oferecendo performance otimizada e acesso a recursos nativos.',
        },
        {
          title: 'Apps Hibridos',
          icon: 'layer-group',
          description:
            'Desenvolvimento cross-platform com React Native e Flutter para lancar em iOS e Android simultaneamente com codigo compartilhado.',
        },
        {
          title: 'Desenvolvimento de MVP',
          icon: 'rocket',
          description:
            'Desenvolvimento rapido de produtos minimos viaveis para validar sua ideia no mercado com menor investimento e time-to-market.',
        },
        {
          title: 'Apps sob Medida',
          icon: 'wrench',
          description:
            'Aplicativos mobile customizados desenvolvidos especificamente para atender as necessidades unicas e complexas do seu negocio.',
        },
      ],
    },
    {
      id: 'desenvolvimento-web-saas',
      title: 'Desenvolvimento Web & SaaS',
      slug: 'desenvolvimento-web-e-saas',
      icon: 'globe',
      description: 'Plataformas web escalaveis e robustas utilizando as melhores tecnologias do mercado.',
      services: [
        {
          title: 'Desenvolvimento Web',
          icon: 'globe',
          description:
            'Plataformas web escalaveis e responsivas utilizando Next.js, React e as melhores praticas de desenvolvimento moderno.',
        },
        {
          title: 'Plataformas SaaS',
          icon: 'cloud',
          description:
            'Plataformas Software as a Service completas com multi-tenancy, billing, onboarding e infraestrutura escalavel para crescimento.',
        },
        {
          title: 'E-commerce',
          icon: 'cart-shopping',
          description:
            'Plataformas de vendas online rapidas e escalaveis que melhoram a experiencia do cliente e maximizam conversao.',
        },
        {
          title: 'Dashboards & Admin',
          icon: 'chart-pie',
          description:
            'Paineis administrativos completos e intuitivos para gestao de dados, metricas e operacoes do seu negocio em tempo real.',
        },
        {
          title: 'Solucoes Enterprise',
          icon: 'building',
          description:
            'Sistemas corporativos robustos e escalaveis para grandes organizacoes com alta disponibilidade, seguranca e compliance.',
        },
        {
          title: 'Software Customizado',
          icon: 'gears',
          description:
            'Solucoes sob medida desenvolvidas especificamente para atender necessidades unicas e processos especificos do seu negocio.',
        },
      ],
    },
    {
      id: 'engenharia-arquitetura-software',
      title: 'Engenharia & Arquitetura de Software',
      slug: 'engenharia-e-arquitetura-de-software',
      icon: 'wrench',
      description: 'Construimos a base tecnica solida que seus produtos precisam para escalar com seguranca e performance.',
      services: [
        {
          title: 'Arquitetura de Software',
          icon: 'building-columns',
          description:
            'Definicao de estrutura tecnica, padroes e tecnologias para garantir escalabilidade, performance e manutenibilidade a longo prazo.',
        },
        {
          title: 'Backend',
          icon: 'server',
          description:
            'Sistemas backend robustos e escalaveis com Node.js, Python ou Java para suportar suas aplicacoes com alta performance.',
        },
        {
          title: 'Frontend',
          icon: 'laptop-code',
          description:
            'Interfaces modernas e interativas com React, Vue ou Angular focadas em performance e experiencia excepcional do usuario.',
        },
        {
          title: 'APIs REST & GraphQL',
          icon: 'plug',
          description:
            'APIs robustas e escalaveis seguindo as melhores praticas para integracao com qualquer plataforma ou servico.',
        },
        {
          title: 'Microservices',
          icon: 'cubes',
          description:
            'Arquiteturas modulares e escalaveis baseadas em microsservicos que facilitam crescimento independente.',
        },
        {
          title: 'Banco de Dados',
          icon: 'database',
          description:
            'Modelagem e otimizacao de bancos de dados SQL e NoSQL para maxima performance, confiabilidade e integridade.',
        },
        {
          title: 'Integracoes de Sistemas',
          icon: 'arrows-left-right',
          description:
            'Conecte diferentes plataformas e servicos criando um ecossistema integrado e eficiente para seu negocio digital.',
        },
        {
          title: 'Autenticacao & Seguranca',
          icon: 'lock',
          description:
            'Implementacao de sistemas seguros de autenticacao, autorizacao e protecao de dados sensiveis seguindo melhores praticas.',
        },
      ],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      slug: 'cloud-e-devops',
      icon: 'cloud',
      description: 'Infraestrutura moderna e automatizada para que seus produtos rodem com alta disponibilidade e entregas continuas.',
      services: [
        {
          title: 'Cloud Infrastructure',
          icon: 'cloud-arrow-up',
          description:
            'Infraestrutura escalavel e resiliente na AWS, Google Cloud ou Azure para suportar seu crescimento com alta disponibilidade.',
        },
        {
          title: 'CI/CD Pipeline',
          icon: 'gears',
          description:
            'Automacao de deploy, testes e integracao continua garantindo entregas rapidas, confiaveis e sem downtime.',
        },
        {
          title: 'Containerizacao',
          icon: 'box',
          description:
            'Deploy com Docker e Kubernetes para garantir consistencia entre ambientes, facilitar escalabilidade e portabilidade.',
        },
        {
          title: 'Monitoramento & Logs',
          icon: 'chart-line',
          description:
            'Sistemas de observabilidade para monitorar performance, erros e comportamento da aplicacao em tempo real com alertas.',
        },
      ],
    },
    {
      id: 'qualidade-seguranca',
      title: 'Qualidade de Software & Seguranca',
      slug: 'qualidade-de-software-e-seguranca',
      icon: 'shield',
      description: 'Garantimos que seu produto funcione com excelencia, seguranca e confiabilidade em qualquer cenario.',
      services: [
        {
          title: 'Testes Automatizados',
          icon: 'vial-circle-check',
          description:
            'Suite completa de testes automatizados (unitarios, integracao, E2E) garantindo qualidade e confiabilidade continua do codigo.',
        },
        {
          title: 'QA & Software Testing',
          icon: 'check-double',
          description:
            'Garantia de qualidade abrangente com testes manuais e automatizados para identificar bugs e garantir excelencia do produto.',
        },
        {
          title: 'Testes de Performance',
          icon: 'gauge-high',
          description:
            'Analise e otimizacao de performance com testes de carga, stress e escalabilidade para garantir resposta rapida sob demanda.',
        },
        {
          title: 'Auditoria de Codigo',
          icon: 'file-code',
          description:
            'Analise profunda do codigo existente identificando problemas de performance, seguranca e qualidade para melhorias continuas.',
        },
        {
          title: 'Cyber Seguranca',
          icon: 'shield-halved',
          description:
            'Protecao completa contra ameacas digitais com auditoria de seguranca, pentesting e implementacao de melhores praticas.',
        },
      ],
    },
    {
      id: 'inteligencia-artificial-automacao',
      title: 'Inteligencia Artificial & Automacao',
      slug: 'inteligencia-artificial-e-automacao',
      icon: 'sparkles',
      description: 'Solucoes inteligentes que automatizam processos, geram insights e criam experiencias personalizadas para seus usuarios.',
      services: [
        {
          title: 'Implementacao de IA',
          icon: 'brain',
          description:
            'Solucoes de IA para automacao inteligente, analise preditiva e tomada de decisoes baseada em dados.',
        },
        {
          title: 'Machine Learning',
          icon: 'robot',
          description:
            'Modelos de Machine Learning customizados para reconhecimento de padroes, previsoes e otimizacao de processos de negocio.',
        },
        {
          title: 'Chatbots Inteligentes',
          icon: 'comments',
          description:
            'Chatbots com IA para automatizar atendimento, melhorar engajamento e otimizar suporte ao cliente 24/7.',
        },
        {
          title: 'Automacao de Processos',
          icon: 'arrows-rotate',
          description:
            'Automatize tarefas repetitivas e fluxos de trabalho com inteligencia artificial, aumentando eficiencia e reduzindo custos.',
        },
      ],
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3',
      slug: 'blockchain-e-web3',
      icon: 'link',
      description: 'Desenvolvimento de solucoes descentralizadas e contratos inteligentes para transparencia e seguranca nas transacoes.',
      services: [
        {
          title: 'Smart Contracts',
          icon: 'file-contract',
          description:
            'Desenvolvimento e auditoria de contratos inteligentes para automacao segura de transacoes e regras de negocio.',
        },
        {
          title: 'Aplicacoes Descentralizadas (dApps)',
          icon: 'network-wired',
          description:
            'Criacao de aplicacoes Web3 com integracao a blockchains e carteiras digitais.',
        },
        {
          title: 'Tokenizacao & NFTs',
          icon: 'coins',
          description:
            'Solucoes de tokenizacao de ativos e criacao de NFTs para novos modelos de negocio e engajamento.',
        },
      ],
    },
    {
      id: 'solucoes-digitais-negocios',
      title: 'Solucoes Digitais para Negocios',
      slug: 'solucoes-digitais-para-negocios',
      icon: 'suitcase',
      description: 'Sistemas e ferramentas que modernizam operacoes, melhoram a gestao e impulsionam resultados do seu negocio.',
      services: [
        {
          title: 'Transformacao Digital',
          icon: 'arrow-trend-up',
          description:
            'Modernize seus processos de negocio com tecnologias digitais que aumentam eficiencia, produtividade e competitividade.',
        },
        {
          title: 'ERP',
          icon: 'diagram-project',
          description:
            'Sistemas ERP integrados para gerenciar e otimizar processos core do negocio em toda sua organizacao com eficiencia.',
        },
        {
          title: 'CRM',
          icon: 'address-book',
          description:
            'Solucoes de Customer Relationship Management para gerenciar interacoes com clientes, impulsionar vendas e fidelizacao.',
        },
        {
          title: 'CMS',
          icon: 'file-lines',
          description:
            'Sistemas customizaveis de gestao de conteudo para simplificar criacao, gerenciamento e modificacao de conteudo web.',
        },
        {
          title: 'Business Intelligence',
          icon: 'chart-column',
          description:
            'Analise avancada de dados e dashboards interativos para decisoes de negocio informadas e crescimento estrategico.',
        },
        {
          title: 'Modernizacao de Sistemas',
          icon: 'arrows-rotate',
          description:
            'Atualizacao de aplicacoes legadas para tecnologias modernas melhorando performance, manutenibilidade e experiencia do usuario.',
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
            <span className="word-wrapper"><span className="word word-delay-2">servicos</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-5">Da</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">concepcao</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">ao</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">deploy,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">oferecemos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">tudo</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">voce</span></span>{' '}
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
            <span className="word-wrapper"><span className="word word-delay-23">usuarios</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">vao</span></span>{' '}
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
                return (
                  <TransitionLink
                    key={service.title}
                    href={`/servicos/${category.slug}`}
                    className="group flex h-full flex-col rounded-button bg-white p-8 transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <i className={`${service.icon === 'apple' || service.icon === 'android' ? 'fa-brands' : 'fa-solid'} fa-${service.icon} text-xl text-dark transition-colors duration-200 group-hover:text-brand-orange`}></i>
                      <h3 className="text-xl font-black text-dark transition-colors duration-200 group-hover:text-brand-orange">
                        {service.title}
                      </h3>
                    </div>
                    <p className="flex-grow text-xl leading-relaxed text-dark/60">
                      {service.description}
                    </p>
                  </TransitionLink>
                )
              })}
            </div>

            {/* Ver todos button */}
            <div className="mt-6">
              <TransitionLink
                href={`/servicos/${category.slug}`}
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Conhecer mais
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}
