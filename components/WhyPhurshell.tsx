import Image from 'next-image-export-optimizer'

export default function WhyPhurshell() {
  return (
    <section className="relative bg-dark py-16 sm:py-24 overflow-hidden">
      {/* Orange Gradient Shadow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-l from-brand-orange/20 via-brand-orange/5 to-transparent"></div>

      {/* Background Logo */}
      <div className="absolute bottom-0 right-0 z-0 opacity-20">
        <Image
          src="/images/img-background-logo.png"
          alt=""
          width={800}
          height={800}
          sizes="(max-width: 640px) 500px, 700px"
          className="h-auto w-[500px] sm:w-[700px]"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
        <div>
          {/* Top - Text */}
          <div className="mb-16">
            <p className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
              SOBRE A PHURSHELL
            </p>
            <h2 className="mb-6 text-5xl font-black text-white sm:text-6xl">
              Porque trabalhar com a Phurshell?
            </h2>
            <p className="mb-12 max-w-5xl text-xl leading-relaxed text-white/70">
              Desde 2015 desenvolvemos produtos digitais sob medida para startups e empresas que querem crescer com tecnologia. Já ajudamos a lançar dezenas de aplicativos, plataformas e sistemas que hoje operam em produção, atendendo usuários reais e evoluindo junto com o negócio de nossos clientes.
            </p>
          </div>

          {/* Circular Stats - Three Circles Side by Side */}
          <div className="mb-16 flex flex-wrap justify-start gap-8 sm:gap-12 lg:gap-16">
            {/* Projects Circle */}
            <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56 md:h-64 md:w-64">
              {/* Decorative circular text */}
              <div className="absolute inset-0">
                <svg className="h-full w-full animate-spin-slow" viewBox="0 0 256 256">
                  <defs>
                    <path
                      id="projectsCircle"
                      d="M 128, 128 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                    />
                  </defs>
                  <text className="fill-white/20 text-sm uppercase tracking-[0.3em]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    <textPath href="#projectsCircle" startOffset="0%">
                      projetos · qualidade · sucesso · entregues ·
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl font-black text-white sm:text-5xl md:text-6xl">50+</div>
                <div className="text-lg text-brand-orange">projetos</div>
                <div className="text-lg text-brand-orange">entregues</div>
              </div>
            </div>

            {/* Apps Circle */}
            <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56 md:h-64 md:w-64">
              {/* Decorative circular text */}
              <div className="absolute inset-0">
                <svg className="h-full w-full animate-spin-slow" viewBox="0 0 256 256">
                  <defs>
                    <path
                      id="appsCircle"
                      d="M 128, 128 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                    />
                  </defs>
                  <text className="fill-white/20 text-sm uppercase tracking-[0.3em]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    <textPath href="#appsCircle" startOffset="0%">
                      apps mobile · apps web · plataformas · soluções ·
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl font-black text-white sm:text-5xl md:text-6xl">100+</div>
                <div className="text-lg text-brand-orange">apps</div>
                <div className="text-lg text-brand-orange">desenvolvidos</div>
              </div>
            </div>

            {/* Years Circle */}
            <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56 md:h-64 md:w-64">
              {/* Decorative circular text */}
              <div className="absolute inset-0">
                <svg className="h-full w-full animate-spin-slow-reverse" viewBox="0 0 256 256">
                  <defs>
                    <path
                      id="yearsCircle"
                      d="M 128, 128 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                    />
                  </defs>
                  <text className="fill-white/20 text-sm uppercase tracking-[0.3em]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    <textPath href="#yearsCircle" startOffset="0%">
                      experiência · excelência · inovação · qualidade ·
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl font-black text-white sm:text-5xl md:text-6xl">10+</div>
                <div className="text-lg text-brand-orange">anos de</div>
                <div className="text-lg text-brand-orange">mercado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
