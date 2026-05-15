import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

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

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
}

// Validação de nome completo (nome + sobrenome)
function validateFullName(name: string): boolean {
  const parts = name.trim().split(/\s+/)
  return parts.length >= 2 && parts.every(part => part.length >= 2)
}

// Validação de email
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validação de telefone (brasileiro ou internacional)
function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  // Brasileiro: 10-11 dígitos, Internacional: até 15 dígitos
  return digits.length >= 10 && digits.length <= 15
}

// Detecta se é número internacional (começa com + ou tem mais de 11 dígitos)
function isInternational(value: string): boolean {
  const hasPlus = value.trim().startsWith('+')
  const digits = value.replace(/\D/g, '')
  return hasPlus || digits.length > 11
}

// Máscara de telefone brasileiro
function formatBrazilianPhone(digits: string): string {
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

// Máscara de telefone internacional (espaços a cada 3 dígitos)
function formatInternationalPhone(value: string): string {
  const cleaned = value.replace(/[^\d+]/g, '')
  if (cleaned.length === 0) return ''

  const hasPlus = cleaned.startsWith('+')
  const digits = cleaned.replace(/\D/g, '').slice(0, 15)

  if (digits.length === 0) return hasPlus ? '+' : ''

  // Agrupa em blocos: código país (1-3) + resto em grupos de 3
  const formatted = digits.replace(/(\d{1,3})(?=\d)/g, '$1 ').trim()
  return hasPlus ? `+${formatted}` : formatted
}

// Máscara de telefone (detecta automaticamente)
function formatPhone(value: string): string {
  if (isInternational(value)) {
    return formatInternationalPhone(value)
  }
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return formatBrazilianPhone(digits)
}

export default function MultiStepForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})

  const totalSteps = 7

  // Permite pular para um step específico via ?step=N (para testes)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const stepParam = params.get('step')
    if (stepParam) {
      const step = parseInt(stepParam, 10)
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step)
      }
    }
  }, [])

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
        return isStep7Valid()
      default:
        return true
    }
  }

  // Validação sem setar erros (para habilitar/desabilitar botão)
  const isStep7Valid = (): boolean => {
    return validateFullName(formData.name) &&
           validateEmail(formData.email) &&
           validatePhone(formData.phone)
  }

  // Validação com erros (para mostrar mensagens ao submeter)
  const validateStep7WithErrors = (): boolean => {
    const newErrors: FieldErrors = {}

    if (!validateFullName(formData.name)) {
      newErrors.name = 'Digite nome e sobrenome'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Digite um email válido'
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Digite um telefone válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep7WithErrors()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.phurshell.com/api/new-landing/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.status) {
        setFormData(initialFormData)
        localStorage.removeItem('phurshell_form_software')
        router.push('/contato/sucesso')
      } else {
        alert('Erro ao enviar formulário. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
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
                  { id: 'app-mobile', label: 'Aplicativo Mobile', icon: 'mobile-screen', desc: 'iOS, Android ou ambos' },
                  { id: 'aplicacao-web', label: 'Aplicação Web', icon: 'globe', desc: 'Web app ou plataforma' },
                  { id: 'mobile-e-web', label: 'Mobile + Web', icon: 'layer-group', desc: 'Presença em múltiplas plataformas' },
                  { id: 'outro', label: 'Outro tipo', icon: 'lightbulb', desc: 'API, sistema interno, etc.' },
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
                    id: 'ideia',
                    label: 'Ainda é uma ideia',
                    desc: 'Estou começando e preciso validar o conceito',
                    icon: 'lightbulb',
                  },
                  {
                    id: 'prototipo',
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
                    id: 'em-producao',
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
                  { id: 'estrategia', label: 'Estratégia de Produto', icon: 'chess', desc: 'Definir roadmap e prioridades' },
                  { id: 'design', label: 'Design UX/UI', icon: 'pen-ruler', desc: 'Interface e experiência do usuário' },
                  { id: 'desenvolvimento', label: 'Desenvolvimento', icon: 'code', desc: 'Construir o produto' },
                  { id: 'aumento-time', label: 'Aumentar o Time', icon: 'users', desc: 'Reforçar equipe existente' },
                  { id: 'manutencao', label: 'Manutenção', icon: 'screwdriver-wrench', desc: 'Suporte e melhorias contínuas' },
                  { id: 'consultoria', label: 'Consultoria', icon: 'lightbulb', desc: 'Orientação técnica' },
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
                    id: 'urgente',
                    label: 'O quanto antes',
                    desc: 'Tenho urgência e quero começar já',
                    icon: 'bolt'
                  },
                  {
                    id: 'proximas-semanas',
                    label: 'Nas próximas semanas',
                    desc: 'Pronto para começar em breve',
                    icon: 'calendar-days'
                  },
                  {
                    id: '2-3-meses',
                    label: 'Em 2-3 meses',
                    desc: 'Planejando para médio prazo',
                    icon: 'calendar'
                  },
                  {
                    id: 'flexivel',
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
                  { id: 'redes-sociais', label: 'Redes Sociais', icon: 'share-nodes' },
                  { id: 'indicacao', label: 'Indicação de alguém', icon: 'user-group' },
                  { id: 'portfolio', label: 'Vi um projeto seu', icon: 'briefcase' },
                  { id: 'evento', label: 'Evento ou conferência', icon: 'calendar-days' },
                  { id: 'outro', label: 'Outro', icon: 'ellipsis' },
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
                      onChange={(e) => {
                        updateFormData('name', e.target.value)
                        if (errors.name) setErrors(prev => ({ ...prev, name: undefined }))
                      }}
                      className={`w-full rounded-button border px-4 py-3 text-dark transition-colors focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-dark/10 focus:border-brand-orange focus:ring-brand-orange/20'
                      }`}
                      placeholder="João Silva"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-black text-dark">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        updateFormData('email', e.target.value)
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
                      }}
                      className={`w-full rounded-button border px-4 py-3 text-dark transition-colors focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-dark/10 focus:border-brand-orange focus:ring-brand-orange/20'
                      }`}
                      placeholder="joao@empresa.com.br"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
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
                      onChange={(e) => {
                        updateFormData('phone', formatPhone(e.target.value))
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }))
                      }}
                      className={`w-full rounded-button border px-4 py-3 text-dark transition-colors focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-dark/10 focus:border-brand-orange focus:ring-brand-orange/20'
                      }`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
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
                disabled={isSubmitting}
                className={`ml-auto rounded-button px-8 py-3 font-black text-white shadow-lg transition-smooth ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-gray-400'
                    : 'bg-brand-orange hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-xl'
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
