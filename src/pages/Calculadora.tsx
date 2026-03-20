'use client'

import { useState } from 'react'
import SEO from '../components/SEO'
import TransitionLink from '../components/TransitionLink'

interface Answer {
  text: string
  price: string
  icon: string
  value: number
  selected: boolean
}

interface Question {
  q: string
  description: string
  userAnswer: string
  a: Answer[]
}

export default function Calculadora() {
  const multiplier = 0.85
  const [step, setStep] = useState(0)
  const [value, setValue] = useState(0)
  const [scheduleCount, setScheduleCount] = useState(12)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_description: '',
  })

  const [content, setContent] = useState<Question[]>([
    {
      q: 'Qual tipo de aplicativo você está procurando?',
      description:
        'Estamos aqui para ajudar você a escolher o tipo de aplicativo que melhor atende às suas necessidades. Selecione uma das opções abaixo para prosseguir e descobrir como podemos transformar sua ideia em realidade.',
      userAnswer: '',
      a: [
        {
          text: 'Aplicativo para iOS (iPhones)',
          price: '$$',
          icon: 'fa-brands fa-apple',
          value: multiplier * 10000,
          selected: false,
        },
        {
          text: 'Aplicativo para Android (smartphones)',
          price: '$$',
          icon: 'fa-brands fa-android',
          value: multiplier * 10000,
          selected: false,
        },
        {
          text: 'Aplicativo para web',
          price: '$$$',
          icon: 'fa-solid fa-globe',
          value: multiplier * 7500,
          selected: false,
        },
      ],
    },
    {
      q: 'Você precisa de uma identidade visual customizada para o seu aplicativo?',
      description:
        'Por favor, selecione uma ou mais opções abaixo para prosseguir. Uma interface de usuário customizada e um logo profissional podem ajudar a criar uma experiência de uso excepcional e fortalecer a identidade da sua marca.',
      userAnswer: '',
      a: [
        {
          text: 'Logo',
          price: '$',
          icon: 'fa-solid fa-palette',
          value: multiplier * 5000,
          selected: false,
        },
        {
          text: 'Interface customizada',
          price: '$$$',
          icon: 'fa-solid fa-pen-ruler',
          value: multiplier * 15000,
          selected: false,
        },
        {
          text: 'Não',
          price: '$',
          icon: 'fa-solid fa-xmark',
          value: multiplier * 0,
          selected: false,
        },
      ],
    },
    {
      q: 'Qual a categoria principal do seu aplicativo?',
      description: 'Escolha a categoria principal do seu aplicativo para definir seu propósito e público-alvo.',
      userAnswer: '',
      a: [
        { text: 'Mobilidade urbana', price: '$', icon: 'fa-solid fa-car', value: 0, selected: false },
        { text: 'Rastreamento e entrega', price: '$$', icon: 'fa-solid fa-truck-fast', value: 0, selected: false },
        { text: 'Marketplace', price: '$$$', icon: 'fa-solid fa-store', value: 0, selected: false },
        { text: 'Comércio eletrônico', price: '$$$', icon: 'fa-solid fa-cart-shopping', value: 0, selected: false },
        { text: 'Gestão e processos', price: '$$$', icon: 'fa-solid fa-clipboard-list', value: 0, selected: false },
        { text: 'Financeiro', price: '$$$', icon: 'fa-solid fa-money-bill-trend-up', value: 0, selected: false },
        { text: 'Conteúdo e ensino', price: '$$$', icon: 'fa-solid fa-graduation-cap', value: 0, selected: false },
        { text: 'Rede social', price: '$$$', icon: 'fa-solid fa-users', value: 0, selected: false },
        { text: 'Outros', price: '$$$', icon: 'fa-solid fa-ellipsis', value: 0, selected: false },
      ],
    },
    {
      q: 'Quais funcionalidades serão implementadas em seu aplicativo?',
      description:
        'Selecione as funcionalidades que você deseja incluir. Cada funcionalidade adicional pode impactar no tempo de desenvolvimento e no custo total. Escolha as opções que melhor atendem às necessidades do seu projeto.',
      userAnswer: '',
      a: [
        { text: 'Autenticação e login', price: 'Sem custo', icon: 'fa-solid fa-user-lock', value: multiplier * 10000, selected: false },
        { text: 'Perfis de usuário', price: 'Sem custo', icon: 'fa-solid fa-user', value: multiplier * 5000, selected: false },
        { text: 'Envio de notificações', price: 'Sem custo', icon: 'fa-solid fa-bell', value: multiplier * 5000, selected: false },
        { text: 'Integração com redes sociais', price: 'Sem custo', icon: 'fa-solid fa-share-nodes', value: multiplier * 10000, selected: false },
        { text: 'Videoconferência', price: 'Sem custo', icon: 'fa-solid fa-video', value: multiplier * 20000, selected: false },
        { text: 'Pagamentos e transações', price: 'Sem custo', icon: 'fa-solid fa-credit-card', value: multiplier * 20000, selected: false },
        { text: 'Serviço de assinatura', price: 'Sem custo', icon: 'fa-solid fa-repeat', value: multiplier * 20000, selected: false },
        { text: 'Chat e mensagens', price: 'Sem custo', icon: 'fa-solid fa-comments', value: multiplier * 15000, selected: false },
        { text: 'Serviço de localização (Geolocalização)', price: 'Sem custo', icon: 'fa-solid fa-location-dot', value: multiplier * 15000, selected: false },
        { text: 'Buscas e filtros', price: 'Sem custo', icon: 'fa-solid fa-magnifying-glass', value: multiplier * 15000, selected: false },
      ],
    },
    {
      q: 'Seu aplicativo vai precisar de um sistema administrativo?',
      description:
        'Um sistema administrativo permite gerenciar usuários, conteúdo, e outras funcionalidades essenciais de forma eficiente. Isso pode incluir painéis de controle, relatórios, gerenciamento de permissões e muito mais. A inclusão desse sistema pode influenciar o custo e o tempo de desenvolvimento do seu projeto.',
      userAnswer: '',
      a: [
        { text: 'Sim', price: 'Sem custo', icon: 'fa-solid fa-check', value: multiplier * 15000, selected: false },
        { text: 'Não', price: '$', icon: 'fa-solid fa-xmark', value: 0, selected: false },
      ],
    },
    {
      q: 'Seu aplicativo vai precisar de um site institucional?',
      description:
        'Informe se você deseja incluir um site institucional (landing page) para o seu projeto. Um site institucional ajuda a apresentar seu aplicativo, destacando suas funcionalidades e benefícios, além de atrair e engajar potenciais usuários. A inclusão de uma landing page pode influenciar o custo e o tempo de desenvolvimento do seu projeto.',
      userAnswer: '',
      a: [
        { text: 'Sim', price: 'Sem custo', icon: 'fa-solid fa-check', value: multiplier * 5000, selected: false },
        { text: 'Não', price: '$', icon: 'fa-solid fa-xmark', value: 0, selected: false },
      ],
    },
    {
      q: 'Seu aplicativo precisa de integração com sistemas ou APIs de terceiros?',
      description:
        'Informe se você precisa que seu aplicativo se integre com sistemas ou APIs de terceiros. A integração pode incluir serviços como pagamentos, redes sociais, mapas, ou outras plataformas que podem enriquecer a funcionalidade do seu aplicativo. A inclusão dessas integrações pode influenciar o custo e o tempo de desenvolvimento do seu projeto.',
      userAnswer: '',
      a: [
        { text: 'Sim', price: 'Sem custo', icon: 'fa-solid fa-check', value: multiplier * 30000, selected: false },
        { text: 'Não', price: '$$$', icon: 'fa-solid fa-xmark', value: 0, selected: false },
      ],
    },
  ])

  const toggleCardSelection = (questionIndex: number, answerIndex: number) => {
    const newContent = content.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return {
          ...question,
          a: question.a.map((answer, aIndex) => {
            if (aIndex === answerIndex) {
              return { ...answer, selected: !answer.selected }
            }
            return answer
          }),
        }
      }
      return question
    })
    setContent(newContent)
    calcPrice(newContent)
  }

  const calcPrice = (currentContent: Question[]) => {
    let totalSum = 0
    currentContent.forEach((question) => {
      question.a.forEach((answer) => {
        if (answer.selected) {
          totalSum += answer.value
        }
      })
    })
    setValue(totalSum)
    calcScheduleCount(totalSum)
  }

  const calcScheduleCount = (currentValue: number) => {
    if (currentValue < 60000) {
      setScheduleCount(12)
    } else if (currentValue < 80000) {
      setScheduleCount(16)
    } else if (currentValue < 120000) {
      setScheduleCount(18)
    } else {
      setScheduleCount(20)
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const backButton = () => {
    setStep(step - 1)
  }

  const endStep = () => {
    setStep(step + 1)
  }

  const refresh = () => {
    window.location.reload()
  }

  const getFormattedPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
  }

  const answersString = (questions: Question[]): string => {
    let result = ''
    questions.forEach((question) => {
      const selectedAnswers = question.a.filter((answer) => answer.selected)
      if (selectedAnswers.length > 0) {
        result += `${question.q}\n`
        selectedAnswers.forEach((answer) => {
          result += ` - ${answer.text}\n`
        })
        result += '\n'
      }
    })
    return result
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      ...formData,
      answers: answersString(content),
      total: value,
      schedule_week_count: scheduleCount,
      language: 'pt',
    }

    try {
      const response = await fetch('https://api.phurshell.com/api/landing/leads/calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      setLoading(false)
      setSuccess(data.status)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isFormValid = formData.name && formData.email && formData.phone && formData.project_description

  return (
    <div className="bg-white">
      <SEO
        title="Calculadora de Custos - Quanto custa um app?"
        description="Descubra quanto custa desenvolver seu aplicativo com nossa calculadora interativa. Obtenha uma estimativa personalizada baseada nas suas necessidades."
        url="/calculadora"
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex h-20 w-full items-center justify-between rounded-button border border-dark/10 bg-white/80 px-6 backdrop-blur-xl sm:px-8 lg:px-12">
          {/* Logo */}
          <div>
            <TransitionLink href="/" className="group flex items-center space-x-2">
              <img
                src="/logos/img-navbar-logo-dark.svg"
                alt="Phurshell"
                width={180}
                height={40}
                className="h-8 w-auto transition-smooth group-hover:opacity-80"
              />
            </TransitionLink>
          </div>

          {/* Title */}
          <div className="flex items-center gap-2">
            <i className="fa-jelly fa-mobile text-brand-orange"></i>
            <span className="text-base font-bold text-dark">Quanto custa um app?</span>
          </div>
        </div>
      </header>

      {/* Fixed Bottom Menu */}
      {step >= 0 && step !== content.length + 1 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 py-4">
          <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
            <div className="flex items-center justify-between rounded-button border border-dark/10 bg-white/80 backdrop-blur-xl px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
              <div>
                {step > 1 && step < content.length + 1 && (
                  <button onClick={backButton} className="btn-pill mr-2 rounded-button border border-dark/10 px-6 py-3 font-bold text-dark transition-smooth hover:bg-dark/5">
                    <i className="fa-solid fa-arrow-left mr-1"></i>
                    Voltar
                  </button>
                )}
                {step === content.length + 1 && (
                  <button onClick={refresh} className="btn-pill mr-2 rounded-button border border-dark/10 px-6 py-3 font-bold text-dark transition-smooth hover:bg-dark/5">
                    <i className="fa-solid fa-rotate-left mr-1"></i>
                    Recomeçar
                  </button>
                )}
              </div>
              <div>
                {step > 0 && step < content.length + 1 && (
                  <span className="font-bold text-dark/60">
                    {step} de {content.length}
                  </span>
                )}
              </div>
              <div>
                {step === 0 && (
                  <button onClick={nextStep} className="rounded-button bg-brand-orange px-6 py-3 font-bold text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light">
                    Iniciar
                    <i className="fa-solid fa-arrow-right ml-1"></i>
                  </button>
                )}
                {step > 0 && step <= content.length && (
                  <button onClick={nextStep} className="rounded-button bg-brand-orange px-6 py-3 font-bold text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light">
                    Continuar
                    <i className="fa-solid fa-arrow-right ml-1"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-screen-2xl px-10 pb-32 pt-12 sm:px-14 lg:px-20">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Intro */}
            {step === 0 && (
              <article>
                <div className="mb-6 flex flex-col items-start gap-6">
                  <img src="/images/img-calculator-hero.png" alt="Calculadora" className="h-20" />
                  <h2 className="text-4xl font-black text-dark">Quanto custa desenvolver um app com um time de especialistas?</h2>
                </div>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  O desenvolvimento de aplicativos é um processo complexo que envolve várias etapas, desde a concepção
                  inicial até o lançamento e manutenção contínua. Nossa equipe de especialistas está aqui para guiá-lo por
                  cada fase do processo, garantindo que sua visão seja transformada em uma realidade digital de sucesso.
                </p>

                <hr className="my-8" />

                <h3 className="mb-4 text-2xl font-black text-dark">Uma equipe de profissionais experientes</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  A equipe da Phurshell é composta por profissionais apaixonados e experientes, cada um trazendo habilidades
                  únicas para o processo de desenvolvimento. Desde designers criativos e desenvolvedores habilidosos até
                  especialistas em garantia de qualidade, nossa equipe trabalha em conjunto para oferecer soluções
                  inovadoras e de alta qualidade aos nossos clientes.
                </p>

                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-user-tie mr-2 text-brand-orange"></i>
                      Product Owner
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      O Product Owner é quem entende em detalhes cada funcionalidade do seu projeto. É o responsável por
                      documentar e coordenar toda a construção do aplicativo.
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-paint-brush mr-2 text-brand-orange"></i>
                      Design
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Equipe especializada em usabilidade e na experiência do usuário. Eles transformam e dão identidade à sua
                      ideia em um protótipo completo do seu aplicativo.
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fab fa-apple mr-2 text-brand-orange"></i>
                      iOS
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Equipe especialista na plataforma da Apple. Codificam o aplicativo utilizando as linguagens Swift e
                      JavaScript (React Native)
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fab fa-android mr-2 text-brand-orange"></i>
                      Android
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Equipe especialista na plataforma da Google. Codificam o aplicativo utilizando as linguagens Kotlin e
                      JavaScript (React Native)
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-server mr-2 text-brand-orange"></i>
                      Back-end
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Equipe dedicada na API, infraestrutura de servidores, banco de dados, etc. São especialistas na
                      linguagem de PHP (Laravel).
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-check-circle mr-2 text-brand-orange"></i>
                      Q.A
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Equipe de Quality Assurance dedicada em testar o aplicativo e assegurar que tudo está funcionando como
                      deveria.
                    </p>
                  </div>
                </div>

                <hr className="my-8" />

                <h3 className="mb-4 text-2xl font-black text-dark">O processo de desenvolvimento</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  Desenvolver um aplicativo envolve diversas fases, cada uma com sua importância e complexidade. As etapas
                  principais incluem:
                </p>

                <div className="mb-6 space-y-4">
                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-lightbulb mr-2 text-brand-orange"></i>
                      1. Concepção e Planejamento
                    </h4>
                    <ul className="list-inside list-disc space-y-2 text-xl text-dark/70">
                      <li>Pesquisa de Mercado: Entender as necessidades do mercado e o público-alvo.</li>
                      <li>Definição de Requisitos: Especificar as funcionalidades e objetivos do aplicativo.</li>
                      <li>Wireframing e Prototipagem: Criar esboços e protótipos para visualização do fluxo e design do app.</li>
                    </ul>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-pencil-ruler mr-2 text-brand-orange"></i>
                      2. Design de Interface (UI/UX)
                    </h4>
                    <ul className="list-inside list-disc space-y-2 text-xl text-dark/70">
                      <li>Design Visual: Criação do layout e aparência visual do aplicativo.</li>
                      <li>
                        Experiência do Usuário: Planejar a navegação e a interação do usuário para garantir uma experiência
                        intuitiva e agradável.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-code mr-2 text-brand-orange"></i>
                      3. Desenvolvimento e Programação
                    </h4>
                    <ul className="list-inside list-disc space-y-2 text-xl text-dark/70">
                      <li>Front-End: Desenvolvimento da interface que o usuário irá interagir.</li>
                      <li>Back-End: Desenvolvimento da lógica do servidor, banco de dados, e integração de APIs.</li>
                    </ul>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-check mr-2 text-brand-orange"></i>
                      4. Testes e Qualidade
                    </h4>
                    <ul className="list-inside list-disc space-y-2 text-xl text-dark/70">
                      <li>Testes de Funcionalidade: Garantir que todas as funcionalidades funcionem corretamente.</li>
                      <li>Testes de Usabilidade: Avaliar a experiência do usuário.</li>
                      <li>Correção de Bugs: Identificar e corrigir problemas.</li>
                    </ul>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-rocket mr-2 text-brand-orange"></i>
                      5. Lançamento e Manutenção
                    </h4>
                    <ul className="list-inside list-disc space-y-2 text-xl text-dark/70">
                      <li>Publicação: Lançar o aplicativo nas lojas de apps (Google Play, App Store).</li>
                      <li>Atualizações: Manter o aplicativo atualizado com novas funcionalidades e melhorias.</li>
                      <li>Suporte Técnico: Oferecer suporte aos usuários e resolver possíveis problemas.</li>
                    </ul>
                  </div>
                </div>

                <hr className="my-8" />

                <h3 className="mb-4 text-2xl font-black text-dark">Outros custos envolvidos</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  Os custos de desenvolvimento de um aplicativo podem variar amplamente, dependendo de diversos fatores,
                  incluindo:
                </p>

                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-layer-group mr-2 text-brand-orange"></i>
                      Complexidade do App
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Aplicativos com funcionalidades complexas, como integração com outros serviços, recursos de segurança
                      avançados, ou personalizações específicas, tendem a ser mais caros.
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-paint-brush mr-2 text-brand-orange"></i>
                      Design e Experiência do Usuário
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Investir em um design atraente e uma experiência de usuário fluida pode aumentar os custos, mas é
                      crucial para o sucesso do aplicativo.
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-mobile-alt mr-2 text-brand-orange"></i>
                      Plataformas de Desenvolvimento
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Desenvolver para múltiplas plataformas (iOS, Android, Web) pode aumentar o custo.
                    </p>
                  </div>

                  <div className="rounded-button border border-dark/10 bg-white p-6 shadow-sm">
                    <h4 className="mb-3 text-xl font-black text-dark">
                      <i className="fas fa-tools mr-2 text-brand-orange"></i>
                      Manutenção e Suporte
                    </h4>
                    <p className="text-xl leading-relaxed text-dark/70">
                      Após o lançamento, é necessário considerar os custos contínuos de manutenção e suporte.
                    </p>
                  </div>
                </div>

                <hr className="my-8" />

                <h3 className="mb-4 text-2xl font-black text-dark">Nossa Abordagem</h3>
                <p className="mb-4 text-xl leading-relaxed text-dark/70">
                  Na <strong>Phurshell</strong>, oferecemos uma abordagem personalizada para cada projeto, garantindo que seu aplicativo não apenas atenda às suas expectativas, mas também entregue uma experiência
                  excepcional para seus usuários. Nossa equipe de especialistas está aqui para guiá-lo em cada etapa do
                  processo, fornecendo soluções inovadoras e eficientes.
                </p>
                <p className="text-xl leading-relaxed text-dark/70">
                  Investir no desenvolvimento de um aplicativo é investir no futuro da sua empresa. Entre em contato conosco
                  para saber mais sobre como podemos transformar sua ideia em realidade.
                </p>
              </article>
            )}

            {/* Questions */}
            {step > 0 && step <= content.length && (
              <div>
                {content.map((question, i) => (
                  <div key={i} className={step - 1 !== i ? 'hidden' : ''}>
                    <h2 className="mb-4 text-3xl font-black text-dark">
                      {step}. {question.q}
                    </h2>
                    <p className="mb-8 text-xl leading-relaxed text-dark/70">{question.description}</p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {question.a.map((answer, k) => (
                        <div
                          key={k}
                          onClick={() => toggleCardSelection(i, k)}
                          className={`cursor-pointer rounded-button border p-6 transition-all hover:shadow-lg ${
                            answer.selected ? 'border-brand-orange bg-brand-orange/5' : 'border-dark/10 bg-white'
                          }`}
                        >
                          <div className="mb-4 flex items-start justify-between">
                            <div className="flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10">
                              <i className={`${answer.icon} text-3xl text-brand-orange`}></i>
                            </div>
                            <i
                              className={`text-2xl ${
                                answer.selected ? 'fa-solid fa-circle-check text-brand-orange' : 'fa-regular fa-circle text-dark/20'
                              }`}
                            ></i>
                          </div>
                          <h3 className="font-bold text-dark">{answer.text}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Results */}
            {step === content.length + 1 && (
              <div>
                {!success ? (
                  <>
                    <h2 className="mb-6 flex items-center text-3xl font-black text-dark">
                      <i className="fa-solid fa-circle-check mr-3 text-brand-orange"></i>
                      O custo e prazo aproximado do seu app fica:
                    </h2>

                    <p className="mb-8 text-xl leading-relaxed text-dark/70">
                      Baseado nas suas respostas conseguimos levantar o custo aproximado para iniciar o desenvolvimento do seu app,
                      para saber mais informações, tirar dúvidas ou solicitar um orçamento completo entre em contato com a gente
                      logo abaixo.
                    </p>

                    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="flex flex-col items-center rounded-button border border-dark/10 bg-white p-8 text-center shadow-sm">
                        <h3 className="mb-4 text-2xl font-black text-dark">
                          <i className="fas fa-coins mr-2 text-brand-orange"></i>
                          Custo aproximado
                        </h3>
                        <span className="text-5xl font-black text-brand-orange">{getFormattedPrice(value)}</span>
                      </div>

                      <div className="flex flex-col items-center rounded-button border border-dark/10 bg-white p-8 text-center shadow-sm">
                        <h3 className="mb-4 text-2xl font-black text-dark">
                          <i className="fa-regular fa-calendar mr-2 text-brand-orange"></i>
                          Prazo estimado
                        </h3>
                        <span className="text-5xl font-black text-brand-orange">{scheduleCount} semanas</span>
                      </div>
                    </div>

                    <p className="mb-8 text-xl leading-relaxed text-dark/70">
                      Importante lembrar que todos esses valores são aproximados e podem variar conforme a complexidade do projeto. O ideal é ter uma conversa com nossos especialistas, que poderão ajudar não só no desenvolvimento, mas também na estratégia do seu negócio.
                    </p>

                    <div className="mb-8">
                      <button
                        onClick={refresh}
                        className="rounded-button border border-dark/10 px-6 py-3 font-bold text-dark transition-smooth hover:bg-dark/5"
                      >
                        <i className="fa-solid fa-rotate-left mr-2"></i>
                        Recomeçar cálculo
                      </button>
                    </div>

                    <div className="rounded-button border border-dark/10 bg-white p-8 shadow-sm">
                      <form onSubmit={handleSubmit}>
                        <h2 className="mb-4 text-3xl font-black text-dark">Vamos conversar sobre seu projeto?</h2>
                        <p className="mb-6 text-xl leading-relaxed text-dark/70">
                          Preencha seus dados abaixo e entraremos em contato no mesmo dia para conversar e transformar o seu
                          negócio.
                        </p>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div>
                            <label className="mb-2 block font-bold text-dark">Seu nome</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Nome"
                              className="w-full rounded-button border border-dark/10 px-4 py-3 text-xl"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div>
                            <label className="mb-2 block font-bold text-dark">Seu email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              className="w-full rounded-button border border-dark/10 px-4 py-3 text-xl"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div>
                            <label className="mb-2 block font-bold text-dark">Seu telefone</label>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Telefone"
                              className="w-full rounded-button border border-dark/10 px-4 py-3 text-xl"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="mb-2 block font-bold text-dark">Nos conte um pouco do seu projeto</label>
                          <textarea
                            name="project_description"
                            placeholder="Descreva seu projeto para nós."
                            rows={4}
                            className="w-full rounded-button border border-dark/10 px-4 py-3 text-xl"
                            value={formData.project_description}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={!isFormValid || loading}
                          className="w-full rounded-button bg-brand-orange px-6 py-4 text-xl font-bold text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light disabled:opacity-50"
                        >
                          {loading ? (
                            <span className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent"></span>
                          ) : (
                            <>
                              Enviar
                              <i className="fa-solid fa-envelope ml-2"></i>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <div>
                    <h2 className="mb-4 text-3xl font-black text-brand-orange">
                      <i className="fa-solid fa-circle-check mr-2"></i>
                      Mensagem enviada com sucesso!
                    </h2>
                    <p className="mb-6 text-xl leading-relaxed text-dark/70">
                      Obrigado por compartilhar seu projeto conosco! Entraremos em contato com você pelo Whatsapp ainda hoje para começar a trabalhar na sua ideia.
                    </p>
                    <hr className="my-6" />
                    <div className="flex gap-4">
                      <button
                        onClick={refresh}
                        className="rounded-button border border-dark/10 px-6 py-3 font-bold text-dark transition-smooth hover:bg-dark/5"
                      >
                        <i className="fa-solid fa-rotate-left mr-2"></i>
                        Recomeçar
                      </button>
                      <TransitionLink
                        href="/"
                        className="rounded-button border border-dark/10 px-6 py-3 font-bold text-dark transition-smooth hover:bg-dark/5"
                      >
                        <i className="fa-solid fa-house mr-2"></i>
                        Voltar para a home
                      </TransitionLink>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          {step > 0 && step < content.length + 1 && (
            <div className="hidden w-80 lg:block">
              <div className="sticky top-24 rounded-button border border-dark/10 bg-white shadow-lg">
                <div className="rounded-t-button bg-dark p-4 text-white">
                  <h3 className="text-xl font-black">
                    <i className="fa-solid fa-calculator mr-2"></i>
                    Resumo
                  </h3>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-dark/70">
                    <i className="fa-solid fa-coins mr-2"></i>
                    Custo do projeto
                  </p>
                  <p className="mb-6 text-2xl font-black text-dark">{getFormattedPrice(value)}</p>

                  <hr className="my-6" />

                  <p className="mb-2 text-dark/70">
                    <i className="fa-regular fa-calendar mr-2"></i>
                    Prazo de entrega
                  </p>
                  <p className="mb-6 text-2xl font-black text-dark">{scheduleCount} semanas</p>

                  <hr className="my-6" />

                  <p className="text-dark/60">
                    Os cálculos fornecidos são estimativas e podem variar. A realidade do custo final pode ser diferente dependendo dos requisitos específicos do projeto.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
