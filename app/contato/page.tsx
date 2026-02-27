export const metadata = {
  title: 'Contato - Entre em contato conosco',
  description: 'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia.',
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
                Contato
              </span>
            </div>

            <h1 className="mb-6 text-balance text-6xl font-black leading-[0.95] tracking-tight text-dark sm:text-7xl lg:text-8xl">
              Vamos{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                  conversar
                </span>
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-pretty text-xl leading-relaxed text-dark/70">
              Estamos prontos para transformar sua ideia em realidade. Entre em contato e vamos
              discutir como podemos ajudar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <div className="rounded-button border border-dark/10 bg-white p-8 shadow-xl sm:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-black text-dark">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-black text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-black text-dark">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-black text-dark">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-button border border-dark/10 px-4 py-3 text-dark transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-button bg-brand-orange px-8 py-4 text-sm font-bold tracking-wider text-white shadow-xl shadow-brand-orange/30 transition-smooth hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-2xl sm:w-auto"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
