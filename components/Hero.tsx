import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Dots Pattern Background */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-30"></div>

      {/* Blur Decorativo - Posições Assimétricas */}
      <div className="absolute right-1/4 top-0 h-96 w-96 rounded-button bg-brand-orange opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 h-[600px] w-[600px] rounded-button bg-dark opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-button bg-brand-orange opacity-5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Layout Assimétrico */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Content - Posição assimétrica (8 colunas) */}
          <div className="space-y-8 lg:col-span-7 lg:col-start-1 lg:pt-20">
            {/* Badge - Flutuante à esquerda */}
            <div className="inline-flex items-center gap-2 rounded-button border border-dark/10 bg-dark/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-button bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-button bg-brand-orange"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-dark/90">
                +11 ANOS NO MERCADO
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-5xl font-black leading-[1.1] tracking-tight text-dark sm:text-6xl lg:text-7xl">
                Transformamos ideias em{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange-light bg-clip-text text-transparent">
                    aplicativos de sucesso
                  </span>
                  <span className="absolute -bottom-2 left-0 h-3 w-full bg-gradient-to-r from-brand-orange/20 to-brand-orange-light/20 blur-lg"></span>
                </span>
              </h1>
              <p className="text-pretty max-w-xl text-lg leading-relaxed text-dark/70 sm:text-xl">
                Somos uma <strong className="font-black text-dark">fábrica de software</strong> especializada em desenvolvimento mobile e web sob
                medida. Criamos produtos digitais escaláveis com foco em performance e experiência
                do usuário.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contato"
                className="touch-action-manipulation group inline-flex items-center justify-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:-translate-y-1 hover:bg-brand-orange-light hover:shadow-xl hover:shadow-brand-orange/40"
              >
                Falar com Especialista
                <i className="fa-jelly fa-arrow-right fa-lg transition-transform group-hover:translate-x-1"></i>
              </Link>
              <Link
                href="#cases"
                className="touch-action-manipulation group inline-flex items-center justify-center gap-2 rounded-button border-2 border-dark/20 bg-dark/5 px-8 py-4 text-sm font-black text-dark backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange"
              >
                Ver Nossos Projetos
                <i className="fa-jelly fa-images fa-lg transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>

            {/* Stats - Grid Irregular */}
            <div className="grid grid-cols-3 gap-4 pt-12">
              <div className="rounded-button border border-dark/10 bg-dark/5 p-4 backdrop-blur-sm">
                <div className="mb-1 text-3xl font-black text-brand-orange">50+</div>
                <div className="text-xs font-medium tracking-wide text-dark/60">
                  Projetos
                </div>
              </div>
              <div className="rounded-button border border-dark/10 bg-dark/5 p-4 backdrop-blur-sm">
                <div className="mb-1 text-3xl font-black text-brand-orange">98%</div>
                <div className="text-xs font-medium tracking-wide text-dark/60">
                  Satisfação
                </div>
              </div>
              <div className="rounded-button border border-dark/10 bg-dark/5 p-4 backdrop-blur-sm">
                <div className="mb-1 text-3xl font-black text-brand-orange">5+</div>
                <div className="text-xs font-medium tracking-wide text-dark/60">
                  Anos
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element - Overlapping e Assimétrico (5 colunas, offset) */}
          <div className="relative lg:col-span-5 lg:col-start-8 lg:-mt-10">
            {/* Card Principal com Overlap */}
            <div className="relative">
              {/* Glow Effect Assimétrico */}
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-button bg-gradient-to-br from-brand-orange/30 to-brand-orange-light/30 blur-3xl"></div>

              {/* Main Card - Rotacionado */}
              <div className="relative rounded-button border border-dark/10 bg-dark/5 p-8 backdrop-blur-lg lg:rotate-3 lg:transform">
                <div className="space-y-6">
                  {/* Icon Principal */}
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-button bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 backdrop-blur-sm">
                    <i className="fa-jelly fa-mobile fa-3x text-brand-orange fa-beat-fade"></i>
                  </div>

                  <div>
                    <h3 className="mb-2 text-2xl font-black text-dark">Apps que escalam</h3>
                    <p className="text-sm leading-relaxed text-dark/60">
                      Arquitetura sólida para crescer com seu negócio
                    </p>
                  </div>

                  {/* Mini badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-button border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                      React Native
                    </span>
                    <span className="rounded-button border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                      Next.js
                    </span>
                    <span className="rounded-button border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange">
                      Node.js
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Posições Diagonais */}
              <div className="absolute -left-6 top-20 flex h-16 w-16 items-center justify-center rounded-button border border-dark/10 bg-brand-orange/10 backdrop-blur-lg lg:-rotate-12 lg:transform">
                <i className="fa-jelly fa-circle-check fa-2x text-brand-orange"></i>
              </div>

              <div className="absolute -right-4 bottom-10 flex h-20 w-20 items-center justify-center rounded-button border border-dark/10 bg-brand-orange/10 backdrop-blur-lg lg:rotate-6 lg:transform">
                <i className="fa-jelly fa-bolt fa-2x text-brand-orange fa-beat"></i>
              </div>

              <div className="absolute -bottom-8 left-1/3 flex h-14 w-14 items-center justify-center rounded-button border border-dark/10 bg-dark/5 backdrop-blur-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
