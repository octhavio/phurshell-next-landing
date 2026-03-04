import MultiStepForm from '@/components/MultiStepForm'

export const metadata = {
  title: 'Contato - Entre em contato conosco | Phurshell',
  description:
    'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia. Desenvolvimento de apps mobile, web e soluções customizadas.',
}

export default function ContatoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-button border border-brand-orange/30 bg-brand-orange/10 px-4 py-2">
              <span className="text-sm font-black tracking-wider text-brand-orange">
                SOLICITAR PROPOSTA
              </span>
            </div>

            <h1 className="mb-6 text-balance text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
              Vamos{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                  conversar
                </span>
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-pretty text-xl leading-relaxed text-dark/70">
              Responda algumas perguntas rápidas e receba uma proposta personalizada para seu
              projeto. Leva menos de 2 minutos.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Step Form Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <MultiStepForm />
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
              Outras formas de contato
            </h2>
            <p className="mb-12 text-xl text-dark/70">
              Prefere falar diretamente? Entre em contato pelos nossos canais
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-button border border-dark/10 bg-white p-8 transition-smooth hover:-translate-y-2 hover:border-brand-orange hover:shadow-xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:bg-brand-orange">
                  <i className="fa-brands fa-whatsapp text-3xl text-brand-orange transition-colors group-hover:text-white"></i>
                </div>
                <h3 className="mb-2 text-xl font-black text-dark">WhatsApp</h3>
                <p className="text-dark/60">Converse com a gente</p>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@phurshell.com"
                className="group rounded-button border border-dark/10 bg-white p-8 transition-smooth hover:-translate-y-2 hover:border-brand-orange hover:shadow-xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:bg-brand-orange">
                  <i className="fa-solid fa-envelope text-3xl text-brand-orange transition-colors group-hover:text-white"></i>
                </div>
                <h3 className="mb-2 text-xl font-black text-dark">Email</h3>
                <p className="text-dark/60">contato@phurshell.com</p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-button border border-dark/10 bg-white p-8 transition-smooth hover:-translate-y-2 hover:border-brand-orange hover:shadow-xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:bg-brand-orange">
                  <i className="fa-brands fa-linkedin text-3xl text-brand-orange transition-colors group-hover:text-white"></i>
                </div>
                <h3 className="mb-2 text-xl font-black text-dark">LinkedIn</h3>
                <p className="text-dark/60">Siga nossa empresa</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
