'use client'

import Image from 'next-image-export-optimizer'
import ContactCTA from '@/components/ContactCTA'

export default function ServicosPage() {
  const serviceCategories = [
    {
      id: 'consulting',
      title: 'Negócio',
      icon: 'lightbulb',
      services: [
        {
          title: 'Consultoria Técnica',
          description:
            'Orientação especializada em arquitetura, tecnologias e melhores práticas para seu projeto.',
        },
        {
          title: 'Auditoria de Código',
          description:
            'Análise profunda do código existente identificando problemas de performance, segurança e qualidade.',
        },
        {
          title: 'Planejamento de Produto',
          description:
            'Definição de roadmap, features e estratégia de desenvolvimento alinhada aos objetivos de negócio.',
        },
        {
          title: 'Modernização de Sistemas',
          description:
            'Atualização de aplicações legadas para tecnologias modernas melhorando performance e manutenibilidade.',
        },
      ],
    },
    {
      id: 'design',
      title: 'Design & Produto',
      icon: 'palette',
      services: [
        {
          title: 'Definição de MVP',
          description:
            'Identificação e validação das funcionalidades essenciais para lançar seu produto com máximo valor e mínimo investimento.',
        },
        {
          title: 'Roadmap de Produto',
          description:
            'Planejamento estratégico de evolução do produto definindo prioridades, milestones e entrega de valor ao longo do tempo.',
        },
        {
          title: 'Arquitetura Técnica',
          description:
            'Definição de estrutura técnica, tecnologias e padrões para garantir escalabilidade, performance e manutenibilidade.',
        },
        {
          title: 'Wireframes',
          description:
            'Estruturação visual e fluxos de navegação para validar ideias antes do desenvolvimento e design final.',
        },
        {
          title: 'UI/UX Design',
          description:
            'Interfaces intuitivas e atraentes focadas na experiência do usuário e nas melhores práticas de design.',
        },
        {
          title: 'Web Design',
          description:
            'Design visual de websites modernos e responsivos com foco em estética, usabilidade e conversão.',
        },
      ],
    },
    {
      id: 'development',
      title: 'Desenvolvimento',
      icon: 'code',
      services: [
        {
          title: 'MVP',
          description:
            'Desenvolvimento rápido de produtos mínimos viáveis para validar sua ideia no mercado com menor investimento.',
        },
        {
          title: 'Desenvolvimento de Apps',
          description:
            'Aplicativos mobile completos para iOS e Android com design moderno, performance otimizada e experiência nativa.',
        },
        {
          title: 'Apps iOS',
          description:
            'Aplicativos nativos para iPhone e iPad com Swift e UIKit garantindo máxima performance e experiência.',
        },
        {
          title: 'Apps Android',
          description:
            'Aplicativos nativos para dispositivos Android com Kotlin oferecendo performance otimizada e recursos nativos.',
        },
        {
          title: 'Apps Híbridos',
          description:
            'Desenvolvimento cross-platform com React Native e Flutter para lançar em iOS e Android simultaneamente.',
        },
        {
          title: 'Desenvolvimento Web',
          description:
            'Plataformas web escaláveis e responsivas utilizando Next.js, React e as melhores práticas de desenvolvimento.',
        },
        {
          title: 'Frontend',
          description:
            'Interfaces modernas e interativas com React, Vue ou Angular focadas em performance e experiência do usuário.',
        },
        {
          title: 'Backend',
          description:
            'Sistemas backend robustos e escaláveis com Node.js, Python ou Java para suportar suas aplicações.',
        },
        {
          title: 'E-commerce',
          description:
            'Plataformas de vendas online rápidas e escaláveis que melhoram a experiência do cliente e taxas de conversão.',
        },
        {
          title: 'SaaS',
          description:
            'Desenvolvimento de plataformas Software as a Service completas com multi-tenancy e infraestrutura escalável.',
        },
        {
          title: 'Soluções Enterprise',
          description:
            'Sistemas corporativos robustos e escaláveis para grandes organizações com alta disponibilidade e segurança.',
        },
        {
          title: 'Desenvolvimento Customizado',
          description:
            'Soluções sob medida desenvolvidas especificamente para atender as necessidades únicas do seu negócio.',
        },
        {
          title: 'Dashboards & Admin',
          description:
            'Painéis administrativos completos para gestão de dados, métricas e operações do seu negócio.',
        },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Integrações',
      icon: 'server',
      services: [
        {
          title: 'APIs RESTful',
          description:
            'APIs robustas e escaláveis seguindo padrões REST para integração com qualquer plataforma ou serviço.',
        },
        {
          title: 'GraphQL',
          description:
            'APIs GraphQL flexíveis que permitem consultas precisas e reduzem o tráfego de dados desnecessário.',
        },
        {
          title: 'Integrações de Sistemas',
          description:
            'Conecte diferentes plataformas e serviços criando um ecossistema integrado para seu negócio.',
        },
        {
          title: 'Microserviços',
          description:
            'Arquiteturas modulares e escaláveis que facilitam manutenção e permitem crescimento independente.',
        },
        {
          title: 'Banco de Dados',
          description:
            'Modelagem e otimização de bancos de dados SQL e NoSQL para máxima performance e confiabilidade.',
        },
        {
          title: 'Autenticação & Segurança',
          description:
            'Implementação de sistemas seguros de autenticação, autorização e proteção de dados sensíveis.',
        },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: 'cloud',
      services: [
        {
          title: 'Cloud Infrastructure',
          description:
            'Infraestrutura escalável na AWS, Google Cloud ou Azure para suportar seu crescimento.',
        },
        {
          title: 'CI/CD Pipeline',
          description:
            'Automação de deploy e testes garantindo entregas rápidas e confiáveis sem downtime.',
        },
        {
          title: 'Containerização',
          description:
            'Deploy com Docker e Kubernetes para garantir consistência entre ambientes e facilitar escalabilidade.',
        },
        {
          title: 'Monitoramento & Logs',
          description:
            'Sistemas de observabilidade para monitorar performance, erros e comportamento da aplicação em tempo real.',
        },
      ],
    },
    {
      id: 'advanced',
      title: 'Tecnologias Avançadas',
      icon: 'brain',
      services: [
        {
          title: 'Inteligência Artificial',
          description:
            'Implementação de soluções de IA e Machine Learning para automação, análise preditiva e tomada de decisões inteligentes.',
        },
        {
          title: 'Cyber Segurança',
          description:
            'Proteção completa contra ameaças digitais com auditoria de segurança, pentesting e implementação de melhores práticas.',
        },
        {
          title: 'Testes Automatizados',
          description:
            'Suite completa de testes automatizados (unitários, integração, E2E) garantindo qualidade e confiabilidade do código.',
        },
        {
          title: 'Blockchain & Smart Contracts',
          description:
            'Desenvolvimento de soluções blockchain e contratos inteligentes para automação e segurança de transações.',
        },
      ],
    },
    {
      id: 'business',
      title: 'Business & Digital Solutions',
      icon: 'briefcase',
      services: [
        {
          title: 'Transformação Digital',
          description:
            'Modernize seus processos de negócio com tecnologias digitais que aumentam eficiência e competitividade.',
        },
        {
          title: 'ERP Development',
          description:
            'Sistemas integrados para gerenciar e otimizar processos core do negócio em toda sua organização.',
        },
        {
          title: 'CRM',
          description:
            'Soluções de Customer Relationship Management para gerenciar interações com clientes e impulsionar vendas.',
        },
        {
          title: 'Business Intelligence',
          description:
            'Análise de dados para decisões de negócio informadas e crescimento mais rápido através de insights.',
        },
        {
          title: 'CMS',
          description:
            'Sistemas customizáveis de gestão de conteúdo para simplificar criação, gerenciamento e modificação de conteúdo.',
        },
        {
          title: 'Chatbots',
          description:
            'Chatbots inteligentes para automatizar interações com clientes, melhorar engajamento e otimizar suporte.',
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <style jsx>{`
          @keyframes slideUpWord {
            from {
              opacity: 0;
              transform: translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          :global(.word-wrapper) {
            display: inline-block;
            overflow: hidden;
            vertical-align: bottom;
            padding-bottom: 0.05em;
          }
          :global(.word) {
            display: inline-block;
            opacity: 0;
            animation: slideUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          :global(.word-delay-1) { animation-delay: 0.1s; }
          :global(.word-delay-2) { animation-delay: 0.15s; }
          :global(.word-delay-3) { animation-delay: 0.2s; }
          :global(.word-delay-4) { animation-delay: 0.25s; }
          :global(.word-delay-5) { animation-delay: 0.28s; }
          :global(.word-delay-6) { animation-delay: 0.31s; }
          :global(.word-delay-7) { animation-delay: 0.34s; }
          :global(.word-delay-8) { animation-delay: 0.37s; }
          :global(.word-delay-9) { animation-delay: 0.40s; }
          :global(.word-delay-10) { animation-delay: 0.43s; }
          :global(.word-delay-11) { animation-delay: 0.46s; }
          :global(.word-delay-12) { animation-delay: 0.49s; }
          :global(.word-delay-13) { animation-delay: 0.52s; }
          :global(.word-delay-14) { animation-delay: 0.55s; }
          :global(.word-delay-15) { animation-delay: 0.58s; }
          :global(.word-delay-16) { animation-delay: 0.61s; }
          :global(.word-delay-17) { animation-delay: 0.64s; }
          :global(.word-delay-18) { animation-delay: 0.67s; }
          :global(.word-delay-19) { animation-delay: 0.70s; }
          :global(.word-delay-20) { animation-delay: 0.73s; }
          :global(.word-delay-21) { animation-delay: 0.76s; }
          :global(.word-delay-22) { animation-delay: 0.79s; }
          :global(.word-delay-23) { animation-delay: 0.82s; }
          :global(.word-delay-24) { animation-delay: 0.85s; }
          :global(.word-delay-25) { animation-delay: 0.88s; }
          :global(.word-delay-26) { animation-delay: 0.91s; }
          :global(.word-delay-27) { animation-delay: 0.94s; }
          :global(.word-delay-28) { animation-delay: 0.97s; }
          :global(.word-delay-29) { animation-delay: 1.00s; }
          :global(.word-delay-30) { animation-delay: 1.03s; }
          :global(.word-delay-31) { animation-delay: 1.06s; }
          :global(.word-delay-32) { animation-delay: 1.09s; }
          :global(.word-delay-33) { animation-delay: 1.12s; }
          :global(.word-delay-34) { animation-delay: 1.15s; }
          :global(.word-delay-35) { animation-delay: 1.18s; }
          :global(.word-delay-36) { animation-delay: 1.21s; }
          :global(.word-delay-37) { animation-delay: 1.24s; }
          :global(.word-delay-38) { animation-delay: 1.27s; }
          :global(.word-delay-39) { animation-delay: 1.30s; }
          :global(.word-delay-40) { animation-delay: 1.33s; }
          :global(.word-delay-41) { animation-delay: 1.36s; }
          :global(.word-delay-42) { animation-delay: 1.40s; }
          :global(.word-delay-43) { animation-delay: 1.45s; }
          :global(.word-delay-44) { animation-delay: 1.50s; }
          :global(.word-delay-45) { animation-delay: 1.55s; }
          :global(.word-delay-46) { animation-delay: 1.60s; }
          :global(.word-delay-47) { animation-delay: 1.65s; }
          :global(.word-delay-48) { animation-delay: 1.70s; }
          :global(.word-delay-49) { animation-delay: 1.75s; }

          /* Disable animations on mobile for better performance */
          @media (max-width: 767px) {
            :global(.word) {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
            .fade-in {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
            .slide-up {
              opacity: 1 !important;
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>
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
                    <Image
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em desenvolvimento de software da Phurshell"
                      width={120}
                      height={48}
                      sizes="120px"
                      loading="lazy"
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
              {category.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-button bg-white p-8"
                >
                  <h3 className="mb-3 text-xl font-black text-dark">
                    {service.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-dark/60">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}
