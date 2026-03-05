'use client'

import { useState, useEffect } from 'react'

interface FormData {
  // Step 1
  projectType: string
  // Step 2
  projectStage: string
  // Step 3
  teamHelp: string[]
  // Step 4
  budget: string
  // Step 5
  timeline: string
  // Step 6
  howHeard: string
  // Step 7
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const initialFormData: FormData = {
  projectType: '',
  projectStage: '',
  teamHelp: [],
  budget: '',
  timeline: '',
  howHeard: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 7

  // Load saved data from localStorage
  // useEffect(() => {
  //   const savedData = localStorage.getItem('phurshell_form_software')
  //   if (savedData) {
  //     try {
  //       setFormData(JSON.parse(savedData))
  //     } catch (e) {
  //       console.error('Error loading saved form data:', e)
  //     }
  //   }
  // }, [])

  // Save data to localStorage whenever it changes
  // useEffect(() => {
  //   if (currentStep > 1) {
  //     localStorage.setItem('phurshell_form_software', JSON.stringify(formData))
  //   }
  // }, [formData, currentStep])

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.projectType !== ''
      case 2:
        return formData.projectStage !== ''
      case 3:
        return formData.teamHelp.length > 0
      case 4:
        return formData.budget !== ''
      case 5:
        return formData.timeline !== ''
      case 6:
        return formData.howHeard !== ''
      case 7:
        return formData.name !== '' && formData.email !== '' && formData.phone !== ''
      default:
        return true
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(7)) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Form submitted:', formData)
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.')

    // Clear form and localStorage
    setFormData(initialFormData)
    localStorage.removeItem('phurshell_form_software')
    setCurrentStep(1)
    setIsSubmitting(false)
  }

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleTeamHelp = (help: string) => {
    setFormData((prev) => ({
      ...prev,
      teamHelp: prev.teamHelp.includes(help)
        ? prev.teamHelp.filter((h) => h !== help)
        : [...prev.teamHelp, help],
    }))
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div>
      {/* Progress Bar */}
      <div className="relative mb-8 h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Form Content */}
      <div>
        <div className="mb-8">
          <div className="mb-2 text-sm font-black uppercase tracking-wider text-brand-orange">
            Etapa {currentStep} de {totalSteps}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">
                Que tipo de produto você quer construir?
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { id: 'mobile-app', label: 'Aplicativo Mobile', icon: 'mobile-screen', desc: 'iOS, Android ou ambos' },
                  { id: 'web-app', label: 'Aplicação Web', icon: 'globe', desc: 'Web app ou plataforma' },
                  { id: 'both', label: 'Mobile + Web', icon: 'layer-group', desc: 'Presença em múltiplas plataformas' },
                  { id: 'other', label: 'Outro tipo', icon: 'lightbulb', desc: 'API, sistema interno, etc.' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => updateFormData('projectType', type.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.projectType === type.id
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${type.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <div>
                      <div className="font-black text-dark">{type.label}</div>
                      <div className="text-sm text-dark/60">{type.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Project Stage */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Em que estágio está seu produto?</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    id: 'idea',
                    label: 'Ainda é uma ideia',
                    desc: 'Estou começando e preciso validar o conceito',
                    icon: 'lightbulb',
                  },
                  {
                    id: 'design',
                    label: 'Tenho designs ou protótipos',
                    desc: 'Já tenho a visão visual e preciso desenvolver',
                    icon: 'pen-ruler',
                  },
                  {
                    id: 'mvp',
                    label: 'Tenho um MVP funcionando',
                    desc: 'Já existe algo construído que precisa evoluir',
                    icon: 'rocket',
                  },
                  {
                    id: 'scale',
                    label: 'Produto em produção',
                    desc: 'Preciso escalar, adicionar features ou melhorar',
                    icon: 'chart-line',
                  },
                ].map((stage) => (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => updateFormData('projectStage', stage.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.projectStage === stage.id
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${stage.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <div>
                      <div className="font-black text-dark">{stage.label}</div>
                      <div className="text-sm text-dark/60">{stage.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Team Help */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">
                Com o que você precisa de ajuda?
              </h2>
              <p className="mb-6 text-dark/70">Selecione todas as opções que se aplicam</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { id: 'strategy', label: 'Estratégia de Produto', icon: 'chess', desc: 'Definir roadmap e prioridades' },
                  { id: 'design', label: 'Design UX/UI', icon: 'pen-ruler', desc: 'Interface e experiência do usuário' },
                  { id: 'development', label: 'Desenvolvimento', icon: 'code', desc: 'Construir o produto' },
                  { id: 'team', label: 'Aumentar o Time', icon: 'users', desc: 'Reforçar equipe existente' },
                  { id: 'maintenance', label: 'Manutenção', icon: 'screwdriver-wrench', desc: 'Suporte e melhorias contínuas' },
                  { id: 'consulting', label: 'Consultoria', icon: 'lightbulb', desc: 'Orientação técnica' },
                ].map((help) => (
                  <button
                    key={help.id}
                    type="button"
                    onClick={() => toggleTeamHelp(help.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.teamHelp.includes(help.id)
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${help.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-dark">{help.label}</div>
                      <div className="text-sm text-dark/60">{help.desc}</div>
                    </div>
                    {formData.teamHelp.includes(help.id) && (
                      <i className="fa-solid fa-check text-brand-orange"></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Qual o orçamento estimado?</h2>
              <p className="mb-6 text-dark/70">
                Isso nos ajuda a criar uma proposta mais adequada às suas necessidades
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { id: 'ate-50k', label: 'Até R$ 50 mil' },
                  { id: '50k-100k', label: 'R$ 50 - 100 mil' },
                  { id: '100k-200k', label: 'R$ 100 - 200 mil' },
                  { id: '200k-500k', label: 'R$ 200 - 500 mil' },
                  { id: 'acima-500k', label: 'Acima de R$ 500 mil' },
                  { id: 'nao-definido', label: 'Ainda não tenho definido' },
                ].map((budget) => (
                  <button
                    key={budget.id}
                    type="button"
                    onClick={() => updateFormData('budget', budget.id)}
                    className={`rounded-button border-2 p-6 text-left font-black transition-all ${
                      formData.budget === budget.id
                        ? 'border-brand-orange bg-brand-orange/5 text-dark'
                        : 'border-dark/10 text-dark hover:border-brand-orange/50'
                    }`}
                  >
                    {budget.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Timeline */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Quando você quer começar?</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    id: 'asap',
                    label: 'O quanto antes',
                    desc: 'Tenho urgência e quero começar já',
                    icon: 'bolt'
                  },
                  {
                    id: '1-month',
                    label: 'Nas próximas semanas',
                    desc: 'Pronto para começar em breve',
                    icon: 'calendar-days'
                  },
                  {
                    id: '2-3-months',
                    label: 'Em 2-3 meses',
                    desc: 'Planejando para médio prazo',
                    icon: 'calendar'
                  },
                  {
                    id: 'flexible',
                    label: 'Ainda estou explorando',
                    desc: 'Quero conversar sobre o projeto primeiro',
                    icon: 'compass'
                  },
                ].map((timeline) => (
                  <button
                    key={timeline.id}
                    type="button"
                    onClick={() => updateFormData('timeline', timeline.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.timeline === timeline.id
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${timeline.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <div>
                      <div className="font-black text-dark">{timeline.label}</div>
                      <div className="text-sm text-dark/60">{timeline.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: How Heard */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Como você conheceu a Phurshell?</h2>
              <p className="mb-6 text-dark/70">
                Isso nos ajuda a entender melhor nossos clientes
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { id: 'google', label: 'Busca no Google', icon: 'magnifying-glass' },
                  { id: 'social', label: 'Redes Sociais', icon: 'share-nodes' },
                  { id: 'referral', label: 'Indicação de alguém', icon: 'user-group' },
                  { id: 'portfolio', label: 'Vi um projeto seu', icon: 'briefcase' },
                  { id: 'event', label: 'Evento ou conferência', icon: 'calendar-days' },
                  { id: 'other', label: 'Outro', icon: 'ellipsis' },
                ].map((source) => (
                  <button
                    key={source.id}
                    type="button"
                    onClick={() => updateFormData('howHeard', source.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.howHeard === source.id
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${source.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <span className="font-black text-dark">{source.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Contact Info */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Como podemos entrar em contato?</h2>
              <p className="mb-6 text-dark/70">
                Preencha seus dados e entraremos em contato em até 24 horas com uma proposta personalizada.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-black text-dark">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="João Silva"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-black text-dark">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="joao@empresa.com.br"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-black text-dark">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-black text-dark">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateFormData('company', e.target.value)}
                      className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-black text-dark">
                    Conte mais sobre seu projeto
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    rows={4}
                    className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                    placeholder="Descreva seu projeto, objetivos, desafios..."
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-button border border-dark/10 px-6 py-3 font-black text-dark transition-smooth hover:border-brand-orange hover:text-brand-orange"
              >
                <i className="fa-solid fa-arrow-left mr-2"></i>
                Voltar
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep(currentStep)}
                className={`ml-auto rounded-button px-8 py-3 font-black text-white shadow-lg transition-smooth ${
                  validateStep(currentStep)
                    ? 'bg-brand-orange hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-xl'
                    : 'cursor-not-allowed bg-gray-400'
                }`}
              >
                Próximo
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!validateStep(7) || isSubmitting}
                className={`ml-auto rounded-button px-8 py-3 font-black text-white shadow-lg transition-smooth ${
                  validateStep(7) && !isSubmitting
                    ? 'bg-brand-orange hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-xl'
                    : 'cursor-not-allowed bg-gray-400'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar proposta
                    <i className="fa-solid fa-paper-plane ml-2"></i>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
