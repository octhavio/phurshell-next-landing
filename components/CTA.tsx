import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-dark to-dark py-24 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-button bg-brand-orange opacity-20 blur-3xl"></div>
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-button bg-white opacity-10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-button border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-button bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-button bg-white"></span>
            </span>
            <span className="text-sm font-black tracking-wider text-white">
              Vagas Limitadas para 2026
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Fale com nossos especialistas e descubra como podemos ajudar seu negócio a crescer com
            tecnologia de ponta.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:contato@phurshell.com"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
            >
              <i className="fa-jelly fa-envelope fa-lg"></i>
              Enviar E-mail
            </Link>
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-transparent px-8 py-4 text-sm font-black tracking-wider text-white backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:bg-white hover:text-brand-orange"
            >
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              WhatsApp
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-button border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-black text-white">24h</div>
              <div className="text-sm font-medium tracking-wide text-white/80">
                Resposta em até 24 horas
              </div>
            </div>
            <div className="rounded-button border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-black text-white">Grátis</div>
              <div className="text-sm font-medium tracking-wide text-white/80">
                Consultoria inicial sem custo
              </div>
            </div>
            <div className="rounded-button border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-black text-white">100%</div>
              <div className="text-sm font-medium tracking-wide text-white/80">
                Compromisso com qualidade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
