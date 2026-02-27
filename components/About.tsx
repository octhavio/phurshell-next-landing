export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-24 sm:py-32">
      {/* Decorative Blurs */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-button bg-dark opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-button bg-brand-orange opacity-5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        {/* Asymmetric Header Layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Title Column - Offset */}
          <div className="lg:col-span-5 lg:col-start-2">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Sobre a Phurshell
            </h2>
            <div className="mb-6 h-1 w-20 bg-brand-orange"></div>
          </div>

          {/* Content Column - Offset */}
          <div className="space-y-6 text-lg leading-relaxed text-dark/70 lg:col-span-6 lg:col-start-7">
            <p>
              Somos uma <strong className="font-black text-dark">fábrica de software</strong>{' '}
              especializada em desenvolvimento de aplicativos sob medida. Nossa missão é
              transformar desafios complexos em soluções digitais elegantes e escaláveis.
            </p>
            <p>
              Com uma equipe de engenheiros experientes, arquitetos de software e designers de
              produto, entregamos aplicações mobile e web de alta performance que impulsionam
              resultados reais para nossos clientes.
            </p>
            <p>
              Acreditamos em <strong className="font-black text-brand-orange">código limpo</strong>,{' '}
              <strong className="font-black text-brand-orange">arquitetura sólida</strong> e{' '}
              <strong className="font-black text-dark">entrega contínua de valor</strong>. Cada
              projeto é tratado com atenção aos mínimos detalhes, desde a concepção até a
              manutenção.
            </p>
          </div>
        </div>

        {/* Values - Overlapping & Asymmetric */}
        <div className="relative mt-24 grid grid-cols-1 gap-8 sm:grid-cols-12">
          {/* Value 1 - Rotated left */}
          <div className="group relative z-20 overflow-visible sm:col-span-4 sm:col-start-1 lg:-rotate-2 lg:transform">
            <div className="rounded-button border border-dark/10 bg-dark/5 p-8 text-center backdrop-blur-sm transition-smooth group-hover:border-brand-orange group-hover:bg-brand-orange/5">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-button border border-dark/10 bg-dark/5 backdrop-blur-sm transition-smooth group-hover:border-brand-orange group-hover:bg-brand-orange/10 group-hover:scale-110">
                <i className="fa-jelly fa-circle-check fa-2x text-brand-orange fa-bounce"></i>
              </div>
              <h3 className="mb-2 text-xl font-black text-dark">Qualidade</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Código testado, arquitetura escalável e atenção a cada detalhe
              </p>
            </div>
          </div>

          {/* Value 2 - Overlapping center, elevated */}
          <div className="group relative z-30 overflow-visible sm:col-span-4 sm:col-start-5 sm:-mt-8 lg:scale-105 lg:transform">
            <div className="rounded-button border border-dark/10 bg-dark/5 p-8 text-center backdrop-blur-sm shadow-2xl transition-smooth group-hover:border-brand-orange group-hover:bg-brand-orange/5">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-button border border-dark/10 bg-dark/5 backdrop-blur-sm transition-smooth group-hover:border-brand-orange group-hover:bg-brand-orange/10 group-hover:scale-110">
                <i className="fa-jelly fa-bolt fa-2x text-brand-orange fa-fade"></i>
              </div>
              <h3 className="mb-2 text-xl font-black text-dark">Agilidade</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Entregas iterativas com feedback constante e evolução contínua
              </p>
            </div>
          </div>

          {/* Value 3 - Rotated right */}
          <div className="group relative z-20 overflow-visible sm:col-span-4 sm:col-start-9 lg:rotate-2 lg:transform">
            <div className="rounded-button border border-dark/10 bg-dark/5 p-8 text-center backdrop-blur-sm transition-smooth group-hover:border-brand-orange group-hover:bg-brand-orange/5">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-button border border-dark/10 bg-dark/5 backdrop-blur-sm transition-smooth group-hover:border-brand-orange group-hover:bg-brand-orange/10 group-hover:scale-110">
                <i className="fa-jelly fa-sparkles fa-2x text-brand-orange fa-beat-fade"></i>
              </div>
              <h3 className="mb-2 text-xl font-black text-dark">Inovação</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Tecnologias modernas e soluções criativas para problemas complexos
              </p>
            </div>
          </div>

          {/* Floating Decorative Element */}
          <div className="absolute -right-4 top-1/2 hidden h-24 w-24 -translate-y-1/2 items-center justify-center rounded-button border border-dark/5 bg-gradient-to-br from-brand-orange/10 to-brand-orange-light/10 backdrop-blur-lg lg:flex lg:rotate-12 lg:transform">
            <span className="text-4xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}
