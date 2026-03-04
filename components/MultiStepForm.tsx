'use client'

import { useState, useEffect } from 'react'

interface FormData {
  // Step 1
  serviceType: string
  // Step 2
  projectScope: string
  // Step 3
  platforms: string[]
  // Step 4
  budget: string
  // Step 5
  timeline: string
  // Step 6
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const initialFormData: FormData = {
  serviceType: '',
  projectScope: '',
  platforms: [],
  budget: '',
  timeline: '',
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

  const totalSteps = 6

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('phurshell_form_software')
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData))
      } catch (e) {
        console.error('Error loading saved form data:', e)
      }
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('phurshell_form_software', JSON.stringify(formData))
  }, [formData])

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
        return formData.serviceType !== ''
      case 2:
        return formData.projectScope !== ''
      case 3:
        return formData.platforms.length > 0
      case 4:
        return formData.budget !== ''
      case 5:
        return formData.timeline !== ''
      case 6:
        return formData.name !== '' && formData.email !== '' && formData.phone !== ''
      default:
        return true
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(6)) return

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

  const togglePlatform = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="rounded-button border border-dark/10 bg-white shadow-xl">
      {/* Progress Bar */}
      <div className="relative h-2 overflow-hidden rounded-t-button bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Form Content */}
      <div className="p-8 sm:p-12">
        <div className="mb-8">
          <div className="mb-2 text-sm font-black uppercase tracking-wider text-brand-orange">
            Etapa {currentStep} de {totalSteps}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">
                Que tipo de serviço você precisa?
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { id: 'app-mobile', label: 'App Mobile', icon: 'mobile-screen' },
                  { id: 'web-app', label: 'Aplicação Web', icon: 'globe' },
                  { id: 'api-backend', label: 'API/Backend', icon: 'server' },
                  { id: 'ecommerce', label: 'E-commerce', icon: 'cart-shopping' },
                  { id: 'mvp', label: 'MVP/Prototipo', icon: 'lightbulb' },
                  { id: 'consultoria', label: 'Consultoria', icon: 'users' },
                ].map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => updateFormData('serviceType', service.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.serviceType === service.id
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${service.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <span className="font-black text-dark">{service.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Project Scope */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Qual o escopo do projeto?</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    id: 'novo',
                    label: 'Criar do zero',
                    desc: 'Projeto completamente novo',
                    icon: 'rocket',
                  },
                  {
                    id: 'existente',
                    label: 'Melhorar existente',
                    desc: 'Adicionar funcionalidades ou otimizar',
                    icon: 'wrench',
                  },
                  {
                    id: 'manutencao',
                    label: 'Manutenção',
                    desc: 'Suporte e correções',
                    icon: 'screwdriver-wrench',
                  },
                  {
                    id: 'migracao',
                    label: 'Migração',
                    desc: 'Migrar de uma tecnologia para outra',
                    icon: 'rotate',
                  },
                ].map((scope) => (
                  <button
                    key={scope.id}
                    type="button"
                    onClick={() => updateFormData('projectScope', scope.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.projectScope === scope.id
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i className={`fa-solid fa-${scope.icon} text-xl text-brand-orange`}></i>
                    </div>
                    <div>
                      <div className="font-black text-dark">{scope.label}</div>
                      <div className="text-sm text-dark/60">{scope.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Platforms */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">
                Quais plataformas você precisa?
              </h2>
              <p className="mb-6 text-dark/70">Você pode selecionar mais de uma opção</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { id: 'ios', label: 'iOS', icon: 'apple' },
                  { id: 'android', label: 'Android', icon: 'android' },
                  { id: 'web', label: 'Web', icon: 'globe' },
                  { id: 'desktop', label: 'Desktop', icon: 'desktop' },
                  { id: 'api', label: 'API/Backend', icon: 'server' },
                  { id: 'admin', label: 'Painel Admin', icon: 'gauge' },
                ].map((platform) => (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => togglePlatform(platform.id)}
                    className={`flex items-center gap-4 rounded-button border-2 p-6 text-left transition-all ${
                      formData.platforms.includes(platform.id)
                        ? 'border-brand-orange bg-brand-orange/5'
                        : 'border-dark/10 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                      <i
                        className={`fa-brands fa-${platform.icon} text-xl text-brand-orange`}
                      ></i>
                    </div>
                    <span className="font-black text-dark">{platform.label}</span>
                    {formData.platforms.includes(platform.id) && (
                      <i className="fa-solid fa-check ml-auto text-brand-orange"></i>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Qual seu orçamento estimado?</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: 'ate-30k', label: 'Até R$ 30 mil' },
                  { id: '30k-60k', label: 'R$ 30 - 60 mil' },
                  { id: '60k-100k', label: 'R$ 60 - 100 mil' },
                  { id: '100k-200k', label: 'R$ 100 - 200 mil' },
                  { id: 'acima-200k', label: 'Acima de R$ 200 mil' },
                  { id: 'nao-sei', label: 'Não tenho certeza ainda' },
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
              <h2 className="mb-6 text-3xl font-black text-dark">Qual o prazo desejado?</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: '1-mes', label: 'Até 1 mês', icon: 'bolt' },
                  { id: '1-3-meses', label: '1 a 3 meses', icon: 'calendar' },
                  { id: '3-6-meses', label: '3 a 6 meses', icon: 'calendar-days' },
                  { id: '6-meses', label: 'Mais de 6 meses', icon: 'calendar-week' },
                  { id: 'flexivel', label: 'Flexível', icon: 'clock' },
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
                    <span className="font-black text-dark">{timeline.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Contact Info */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-black text-dark">Seus dados de contato</h2>
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
                      placeholder="Seu nome completo"
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
                      placeholder="seu@email.com"
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
                      placeholder="(00) 00000-0000"
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
                disabled={!validateStep(6) || isSubmitting}
                className={`ml-auto rounded-button px-8 py-3 font-black text-white shadow-lg transition-smooth ${
                  validateStep(6) && !isSubmitting
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
