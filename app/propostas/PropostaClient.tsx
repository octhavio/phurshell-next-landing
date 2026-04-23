'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

// Tipos da API
interface PropostaClient {
  name: string
  contact: string
  email: string
}

interface PropostaProject {
  name: string
  description: string
  deadline: string
  value: number
  maintenance: number
  maintenance_hours: number | null
  infrastructure: number | null
}

interface PropostaScope {
  título: string
  itens: string[]
}

interface PropostaData {
  id: number
  code: string
  client: PropostaClient
  project: PropostaProject
  created_date: string
  validity_days: number
  scope: PropostaScope[]
}

interface ApiResponse {
  status: boolean
  data: PropostaData
  message?: string
}

// Dados hardcodados (não vem da API)
const hardcodedData = {
  etapas: [
    { número: 1, título: 'Kickoff e Discovery', descrição: 'Alinhamento do projeto, definição detalhada do escopo e arquitetura técnica.' },
    { número: 2, título: 'UX/UI Design', descrição: 'Wireframes, protótipos interativos e design final de todas as telas.' },
    { número: 3, título: 'Desenvolvimento', descrição: 'Desenvolvimento dos produtos contratados com entregas incrementais e validação contínua.' },
    { número: 4, título: 'Testes e Publicação', descrição: 'QA completo, ajustes finais e publicação nas lojas.' },
  ],
  tecnologias: [
    { categoria: 'Apps Mobile', opcoes: 'React Native, Flutter, PWA' },
    { categoria: 'Backend', opcoes: 'Node.js, Laravel, Go, Python' },
    { categoria: 'Frontend Web', opcoes: 'React, Vue.js, Angular' },
    { categoria: 'Banco de Dados', opcoes: 'PostgreSQL, MySQL, MongoDB' },
    { categoria: 'Cloud', opcoes: 'AWS, Google Cloud, Azure' },
  ],
  infraestrutura: [
    'API RESTful escalável',
    'Banco de dados otimizado',
    'Servidores com auto-scaling',
    'CDN para imagens e assets',
    'Sistema de filas para processamento',
    'Monitoramento e alertas',
  ],
  cases: [
    {
      nome: 'Psiapp',
      descrição: 'Aplicativo que conecta psicólogos a pacientes. Desenvolvimento completo dos apps, backoffice e análise de dados.',
      imagem: '/images/img-home-case-psiapp.png',
      tags: ['iOS', 'Android', 'Web', 'Backoffice'],
      destaques: [
        { valor: '3.000+', label: 'psicólogos ativos' },
        { valor: '60.000+', label: 'pacientes cadastrados' },
        { valor: '20.000+', label: 'consultas realizadas' },
      ],
    },
    {
      nome: 'Diag',
      descrição: 'Plataforma de gestão de saúde com prontuários, receitas médicas e chat com IA para suporte diagnóstico.',
      imagem: '/images/img-home-case-diag.png',
      tags: ['iOS', 'Android', 'Web', 'IA'],
      destaques: [
        { valor: '16.000+', label: 'médicos usuários' },
      ],
    },
    {
      nome: 'Autoday',
      descrição: 'Insurtech de seguro de carro sob demanda. MVP completo com app, backoffice e landing page.',
      destaque_texto: 'A empresa recebeu múltiplos aportes milionários e foi vendida para o Sem Parar.',
      imagem: '/images/img-home-case-autoday.png',
      tags: ['iOS', 'Android', 'Backoffice'],
    },
  ],
}

// URL base da API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.phurshell.com'

const sections = [
  { id: 'intro', label: 'Introdução' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'como-trabalhamos', label: 'Como Trabalhamos' },
  { id: 'cases', label: 'Cases de Sucesso' },
  { id: 'escopo', label: 'Escopo do Projeto' },
  { id: 'cronograma', label: 'Cronograma' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'investimento', label: 'Investimento' },
  { id: 'proximos-passos', label: 'Próximos Passos' },
]

export default function PropostaClientComponent() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState('intro')
  const [proposta, setProposta] = useState<PropostaData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Extract code from query param (?code=AP0HQV)
  const code = searchParams?.get('code')
  const hasCode = !!code

  // Fetch proposta data from API
  useEffect(() => {
    const fetchProposta = async () => {
      if (!hasCode) {
        setError('Código da proposta não informado')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/proposals/code/${code}`)
        const data: ApiResponse = await response.json()

        if (!response.ok || !data.status) {
          throw new Error(data.message || 'Proposta não encontrada')
        }

        setProposta(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar proposta')
      } finally {
        setLoading(false)
      }
    }

    fetchProposta()
  }, [hasCode, code])

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00')
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
  }

  const getValidityDate = () => {
    if (!proposta) return ''
    const createdDate = new Date(proposta.created_date + 'T00:00:00')
    const validityDate = new Date(createdDate.getTime() + proposta.validity_days * 24 * 60 * 60 * 1000)
    return validityDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-brand-orange mx-auto"></div>
          <p className="text-gray-500">Carregando proposta...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !proposta) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mb-4 text-6xl text-gray-300">
            <i className="fa-solid fa-file-circle-exclamation"></i>
          </div>
          <h1 className="mb-2 text-2xl font-black text-dark">Proposta não encontrada</h1>
          <p className="mb-6 text-gray-500">{error || 'Não foi possível carregar a proposta.'}</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 font-bold text-white transition-all hover:bg-brand-orange-light"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Voltar ao site
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-gray-100 bg-white pt-10 lg:flex lg:flex-col">
        <div className="flex-1 px-6">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/logos/img-navbar-logo-dark.svg"
              alt="Phurshell"
              className="h-8 w-auto"
            />
          </div>

          {/* Client Info */}
          <div className="mb-8 rounded-button bg-gray-50 p-4">
            <p className="text-sm font-bold text-gray-500">Proposta para</p>
            <p className="text-lg font-black text-dark">{proposta.client.name}</p>
            <p className="text-sm text-gray-500">{proposta.client.contact}</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-bold transition-all ${
                  activeSection === section.id
                    ? 'bg-brand-orange text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-orange'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Date Info - Bottom */}
        <div className="border-t border-gray-100 px-6 py-4">
          <div className="space-y-1 text-xs text-gray-400">
            <p>Gerada em {formatDate(proposta.created_date)}</p>
            <p>Válida até <span className="font-bold text-gray-500">{getValidityDate()}</span></p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white px-6 py-4 lg:hidden">
        <div className="flex items-center justify-between">
          <img
            src="/logos/img-navbar-logo-dark.svg"
            alt="Phurshell"
            className="h-6 w-auto"
          />
          <span className="text-sm font-bold text-gray-500">
            Proposta: {proposta.client.name}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 lg:ml-72 lg:pt-0">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12 lg:py-20">

          {/* Intro Section */}
          <section id="intro" className="mb-20">
            <div className="mb-8">
              <p className="mb-2 text-lg font-bold uppercase tracking-wider text-brand-orange">
                Proposta Comercial
              </p>
              <h1 className="mb-4 text-4xl font-black leading-tight text-dark sm:text-5xl lg:text-6xl">
                {proposta.project.name}
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                {proposta.project.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-button bg-gray-50 p-6 text-center">
                <p className="text-2xl font-black text-brand-orange whitespace-nowrap">{proposta.project.deadline}</p>
                <p className="text-sm font-bold text-gray-500">Prazo estimado</p>
              </div>
              <div className="rounded-button bg-gray-50 p-6 text-center">
                <p className="text-3xl font-black text-brand-orange">{proposta.scope.length}</p>
                <p className="text-sm font-bold text-gray-500">{proposta.scope.length === 1 ? 'Produto' : 'Produtos'}</p>
              </div>
              <div className="rounded-button bg-gray-50 p-6 text-center">
                <p className="text-3xl font-black text-brand-orange">4</p>
                <p className="text-sm font-bold text-gray-500">Etapas</p>
              </div>
              <div className="rounded-button bg-gray-50 p-6 text-center">
                <p className="text-3xl font-black text-brand-orange">AWS</p>
                <p className="text-sm font-bold text-gray-500">Infraestrutura</p>
              </div>
            </div>
          </section>

          {/* Quem Somos Section */}
          <section id="quem-somos" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Quem é a Phurshell
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Desde 2015 desenvolvemos produtos digitais sob medida para startups e empresas que querem crescer com tecnologia. Já ajudamos a lançar dezenas de aplicativos, plataformas e sistemas que hoje operam em produção, atendendo usuários reais e evoluindo junto com o negócio de nossos clientes.
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-6">
              <div className="rounded-button border border-gray-100 p-6 text-center">
                <p className="text-4xl font-black text-dark">50+</p>
                <p className="text-sm font-bold text-brand-orange">Projetos Entregues</p>
              </div>
              <div className="rounded-button border border-gray-100 p-6 text-center">
                <p className="text-4xl font-black text-dark">100+</p>
                <p className="text-sm font-bold text-brand-orange">Apps Desenvolvidos</p>
              </div>
              <div className="rounded-button border border-gray-100 p-6 text-center">
                <p className="text-4xl font-black text-dark">10+</p>
                <p className="text-sm font-bold text-brand-orange">Anos de Mercado</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-600">
              Nossa equipe é formada por especialistas em desenvolvimento mobile, web, UX/UI e infraestrutura cloud. Trabalhamos com metodologias ágeis e entregas incrementais, garantindo transparência e qualidade em cada etapa do projeto.
            </p>
          </section>

          {/* Como Trabalhamos Section */}
          <section id="como-trabalhamos" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Como Trabalhamos
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <i className="fa-jelly fa-lightbulb"></i>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-black text-dark">Descoberta de Produto</h3>
                  <p className="text-gray-600">
                    Antes de escrever código, mergulhamos no seu negócio para entender desafios, oportunidades e objetivos. Definimos juntos a estratégia técnica e funcional do produto, estruturando o escopo do MVP e criando um roadmap realista.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <i className="fa-jelly fa-palette"></i>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-black text-dark">UX/UI Design</h3>
                  <p className="text-gray-600">
                    Desenhamos interfaces que seus usuários vão adorar usar. Nosso processo começa com wireframes interativos e evolui para um design system completo e responsivo. Cada tela é pensada para resolver problemas reais.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <i className="fa-jelly fa-code"></i>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-black text-dark">Desenvolvimento Ágil</h3>
                  <p className="text-gray-600">
                    Transformamos design em código de alta qualidade. Trabalhamos em sprints com entregas incrementais, permitindo validação contínua e ajustes durante o desenvolvimento. Nosso código é limpo, escalável e preparado para crescer.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <i className="fa-jelly fa-arrows-rotate"></i>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-black text-dark">Suporte Contínuo</h3>
                  <p className="text-gray-600">
                    O lançamento é só o começo. Continuamos ao lado do seu produto, monitorando performance, corrigindo bugs, otimizando funcionalidades e desenvolvendo novas features baseadas no feedback dos usuários.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cases Section */}
          <section id="cases" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Cases de Sucesso
            </h2>

            <p className="mb-8 text-lg text-gray-600">
              Conheça alguns dos projetos que desenvolvemos e que hoje atendem milhares de usuários:
            </p>

            <div className="space-y-6">
              {hardcodedData.cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-button border border-gray-100 transition-all hover:border-brand-orange hover:shadow-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 md:p-8">
                      <h3 className="mb-2 text-2xl font-black text-dark">{caseItem.nome}</h3>
                      <p className="mb-4 text-gray-600">{caseItem.descrição}</p>

                      {/* Destaques numéricos */}
                      {caseItem.destaques && caseItem.destaques.length > 0 && (
                        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {caseItem.destaques.map((destaque, destaqueIndex) => (
                            <div
                              key={destaqueIndex}
                              className="border-l-2 border-brand-orange pl-3"
                            >
                              <p className="text-lg font-black text-dark">{destaque.valor}</p>
                              <p className="text-sm text-gray-500">{destaque.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Destaque texto (Autoday) */}
                      {caseItem.destaque_texto && (
                        <div className="mb-4 border-l-2 border-brand-orange pl-3">
                          <p className="text-gray-600">
                            A empresa recebeu múltiplos <span className="font-bold text-dark">aportes milionários</span> e foi vendida para o <span className="font-bold text-dark">Sem Parar</span>.
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-bold text-brand-orange"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 md:h-auto">
                      <img
                        src={caseItem.imagem}
                        alt={caseItem.nome}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Escopo Section */}
          <section id="escopo" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Escopo do Projeto
            </h2>

            <p className="mb-8 text-lg text-gray-600">
              Detalhamento das funcionalidades e entregas previstas para o {proposta.project.name}:
            </p>

            <div className="space-y-6">
              {proposta.scope.map((section, index) => (
                <div key={index} className="rounded-button border border-gray-100 p-6">
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-black text-dark">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm text-white">
                      {index + 1}
                    </span>
                    {section.título}
                  </h3>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {section.itens.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <i className="fa-solid fa-check mt-1 text-sm text-brand-orange"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Cronograma Section */}
          <section id="cronograma" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Cronograma
            </h2>

            <p className="mb-8 text-lg text-gray-600">
              Estimamos {proposta.project.deadline} para desenvolvimento completo do projeto, dividido nas seguintes etapas:
            </p>

            <div className="space-y-4">
              {hardcodedData.etapas.map((etapa, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 rounded-button border border-gray-100 p-6 transition-all hover:border-brand-orange"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-dark text-lg font-black text-white">
                    {etapa.número}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-black text-dark">{etapa.título}</h3>
                    <p className="text-gray-600">{etapa.descrição}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tecnologias Section */}
          <section id="tecnologias" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Tecnologias
            </h2>

            <div className="mb-8 border-l-2 border-brand-orange pl-4">
              <p className="text-lg text-gray-600">
                Não somos fãs de tecnologia A ou B - somos fãs de <span className="font-bold text-dark">resolver problema</span>. Se precisar usar o "melhor do mercado", usamos. Se precisar misturar tudo, também. O importante é funcionar bem e ficar bonito.
              </p>
            </div>

            <div className="mb-8 space-y-4">
              {hardcodedData.tecnologias.map((tech, index) => (
                <div key={index} className="flex items-center gap-4 rounded-button border border-gray-100 p-4">
                  <p className="font-black text-dark whitespace-nowrap">{tech.categoria}</p>
                  <p className="text-gray-500">{tech.opcoes}</p>
                </div>
              ))}
            </div>

            {/* Infraestrutura */}
            <h3 className="mb-4 text-xl font-black text-dark">Infraestrutura</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {hardcodedData.infraestrutura.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <i className="fa-solid fa-check text-sm text-brand-orange"></i>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Investimento Section */}
          <section id="investimento" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Investimento
            </h2>

            <div className="mb-6 overflow-hidden rounded-button border-2 border-brand-orange">
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="font-bold text-dark">Desenvolvimento Completo</p>
                  <p className="text-sm text-gray-500">Prazo estimado: {proposta.project.deadline}</p>
                </div>
                <p className="text-3xl font-black text-brand-orange">
                  {formatCurrency(proposta.project.value)}
                </p>
              </div>
            </div>

            <div className="mb-4 rounded-button border border-gray-100 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-dark">Manutenção Contínua</p>
                  <p className="text-sm text-gray-500">
                    {proposta.project.maintenance_hours
                      ? `${proposta.project.maintenance_hours}h de suporte, correções e melhorias`
                      : 'Suporte, correções e melhorias'}
                  </p>
                </div>
                <p className="text-xl font-black text-dark">
                  {formatCurrency(proposta.project.maintenance)}<span className="text-sm font-bold text-gray-500">/mês</span>
                </p>
              </div>
            </div>

            {proposta.project.infrastructure && (
              <div className="mb-8 rounded-button border border-gray-100 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-dark">Custo de infraestrutura</p>
                    <p className="text-sm text-gray-500">Servidores, banco de dados e serviços</p>
                  </div>
                  <p className="text-xl font-black text-dark">
                    {formatCurrency(proposta.project.infrastructure)}<span className="text-sm font-bold text-gray-500">/mês</span>
                  </p>
                </div>
              </div>
            )}

            {!proposta.project.infrastructure && <div className="mb-4"></div>}

            <div className="rounded-button bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-black text-dark">Formas de Pagamento</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-orange"></i>
                  Entrada + parcelas mensais durante o desenvolvimento
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-orange"></i>
                  Pagamento por etapa/sprint concluída
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-orange"></i>
                  Condições especiais para pagamento à vista
                </li>
              </ul>
            </div>
          </section>

          {/* Proximos Passos Section */}
          <section id="proximos-passos" className="mb-20">
            <h2 className="mb-8 text-3xl font-black text-dark sm:text-4xl">
              Próximos Passos
            </h2>

            <div className="mb-8 space-y-4">
              <div className="flex gap-4 rounded-button border border-gray-100 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  1
                </div>
                <div>
                  <h3 className="font-black text-dark">Agendar reunião de alinhamento</h3>
                  <p className="text-gray-600">Esclarecemos dúvidas e refinamos o escopo conforme necessário.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-button border border-gray-100 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  2
                </div>
                <div>
                  <h3 className="font-black text-dark">Aprovação e contrato</h3>
                  <p className="text-gray-600">Formalizamos o acordo e definimos as condições comerciais.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-button border border-gray-100 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  3
                </div>
                <div>
                  <h3 className="font-black text-dark">Kickoff do projeto</h3>
                  <p className="text-gray-600">Iniciamos a fase de discovery e planejamento detalhado.</p>
                </div>
              </div>
            </div>

            <div className="rounded-button bg-dark p-8 text-center">
              <p className="mb-4 text-lg text-white/70">
                Esta proposta é válida por <span className="font-bold text-white">{proposta.validity_days} dias</span> a partir do recebimento.
              </p>
              <a
                href={`https://wa.me/5511991341871?text=Olá! Gostaria de conversar sobre a proposta ${proposta.code}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-button bg-brand-orange px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-orange-light"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Falar com um especialista
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-100 pt-8 text-center">
            <img
              src="/logos/img-navbar-logo-dark.svg"
              alt="Phurshell"
              className="mx-auto mb-4 h-8 w-auto"
            />
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Phurshell. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              PHURSHELL DESENVOLVIMENTO DE SITES E APLICATIVOS LTDA - CNPJ 26.689.276/0001-12
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
