import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Soluções completas em desenvolvimento de software. Mobile, web, APIs e muito mais para transformar sua ideia em realidade.',
}

export default function ServicosPage() {
  const serviceCategories = [
    {
      id: 'development',
      title: 'Desenvolvimento & Design',
      icon: 'code',
      services: [
        {
          title: 'Desenvolvimento Mobile',
          description:
            'Apps nativos e cross-platform de alta performance para iOS e Android com React Native e tecnologias modernas.',
        },
        {
          title: 'Desenvolvimento Web',
          description:
            'Plataformas web escaláveis e responsivas utilizando Next.js, React e as melhores práticas de desenvolvimento.',
        },
        {
          title: 'Progressive Web Apps (PWA)',
          description:
            'Aplicações web que funcionam como apps nativos, com experiência offline e instalação no dispositivo.',
        },
        {
          title: 'UI/UX Design',
          description:
            'Interfaces intuitivas e atraentes focadas na experiência do usuário e nas melhores práticas de design.',
        },
        {
          title: 'E-commerce',
          description:
            'Plataformas de vendas online rápidas e escaláveis que melhoram a experiência do cliente e taxas de conversão.',
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
    {
      id: 'consulting',
      title: 'Consultoria & Estratégia',
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
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
              Soluções completas para{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                  transformar
                </span>
              </span>{' '}
              seu negócio
            </h1>
            <p className="text-pretty text-xl leading-relaxed text-dark/70">
              Da concepção ao deploy, oferecemos tudo que você precisa para criar produtos digitais
              de alta performance que seus usuários vão amar.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          className={`py-16 sm:py-24 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
            {/* Category Header */}
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10">
                <i className={`fa-jelly fa-${category.icon} fa-2x text-brand-orange`}></i>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                {category.title}
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-button border border-dark/10 bg-white p-8 transition-all hover:border-brand-orange hover:shadow-lg hover:shadow-brand-orange/10"
                >
                  <h3 className="mb-3 text-xl font-black text-dark transition-colors group-hover:text-brand-orange">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark/60">{service.description}</p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-dark to-dark py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-button bg-white opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pronto para começar seu projeto?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Agende uma conversa sem compromisso e descubra como podemos ajudar
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
            >
              <i className="fa-jelly fa-calendar fa-lg"></i>
              Agendar Conversa
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-transparent px-8 py-4 text-sm font-black tracking-wider text-white backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:bg-white hover:text-brand-orange"
            >
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              Chat no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
