import TransitionLink from '../components/TransitionLink'
import SEO from '../components/SEO'

export default function Sobre() {
  return (
    <div className="bg-white">
      <SEO
        title="Sobre Nós"
        description="Conheça a Phurshell: uma equipe de especialistas apaixonados por criar aplicativos excepcionais que transformam negócios."
        url="/sobre"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-balance text-5xl font-black leading-tight tracking-tight text-dark sm:text-6xl lg:text-7xl">
                Nossa equipe tem paixão por{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                    aplicativos excepcionais
                  </span>
                </span>
              </h1>
              <p className="text-pretty text-xl leading-relaxed text-dark/70">
                Se há algo que amamos, é trabalhar em produtos digitais — garantindo que cada
                detalhe reflita sua visão única e alcance seus objetivos de negócio.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-square overflow-hidden rounded-button bg-gradient-to-br from-brand-orange/10 via-gray-50 to-brand-orange-light/10">
              <div className="flex h-full items-center justify-center">
                <i className="fa-jelly fa-users fa-10x text-brand-orange opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Tried, tested, trusted */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-sm font-black tracking-wider text-brand-orange">
              Testado, Aprovado, Confiável
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-brand-orange">11+</div>
              <div className="text-sm font-medium tracking-wide text-dark/60">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-brand-orange">50+</div>
              <div className="text-sm font-medium tracking-wide text-dark/60">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-brand-orange">4.9/5</div>
              <div className="text-sm font-medium tracking-wide text-dark/60">
                Avaliação Média
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-black text-brand-orange">85%</div>
              <div className="text-sm font-medium tracking-wide text-dark/60">
                Contratam Novamente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              O que nossos clientes dizem
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-orange"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-button border border-dark/10 bg-dark/5 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <i className="fa-jelly fa-quote-left fa-2x text-brand-orange opacity-20"></i>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                "A Phurshell transformou nossa ideia em um aplicativo incrível. A atenção aos
                detalhes e o profissionalismo da equipe superaram nossas expectativas."
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-user fa-lg text-brand-orange"></i>
                </div>
                <div>
                  <div className="font-black text-dark">João Silva</div>
                  <div className="text-sm text-dark/60">CEO, TechStart</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-button border border-dark/10 bg-dark/5 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <i className="fa-jelly fa-quote-left fa-2x text-brand-orange opacity-20"></i>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                "Trabalhar com a Phurshell foi uma experiência excepcional. Entregaram muito além
                do que esperávamos, e no prazo!"
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-user fa-lg text-brand-orange"></i>
                </div>
                <div>
                  <div className="font-black text-dark">Maria Santos</div>
                  <div className="text-sm text-dark/60">Fundadora, HealthApp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-button border border-dark/10 bg-dark/5 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <i className="fa-jelly fa-quote-left fa-2x text-brand-orange opacity-20"></i>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                "Código limpo, arquitetura sólida e comunicação transparente. A Phurshell é nosso
                parceiro de confiança para todos os projetos."
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-button bg-brand-orange/10">
                  <i className="fa-jelly fa-user fa-lg text-brand-orange"></i>
                </div>
                <div>
                  <div className="font-black text-dark">Carlos Mendes</div>
                  <div className="text-sm text-dark/60">CTO, FinanceHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
              Nossos Valores
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-orange"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="group text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:scale-110">
                <i className="fa-jelly fa-chart-bar fa-2x text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Crescimento</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Expandimos constantemente nossa base de conhecimento, sempre aprendendo com cada
                projeto e desafio.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:scale-110">
                <i className="fa-jelly fa-trophy fa-2x text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Excelência</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Não nos contentamos com o bom. Buscamos o excepcional em cada linha de código e
                decisão de design.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:scale-110">
                <i className="fa-jelly fa-heart fa-2x text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Paixão</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Fazemos o que amamos. Cada projeto é tratado com dedicação genuína e entusiasmo.
              </p>
            </div>

            {/* Value 4 */}
            <div className="group text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-button bg-brand-orange/10 transition-smooth group-hover:scale-110">
                <i className="fa-jelly fa-users fa-2x text-brand-orange"></i>
              </div>
              <h3 className="mb-3 text-xl font-black text-dark">Sinergia</h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Trabalhamos em equipe. Juntos, alcançamos resultados que vão além da soma das
                partes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-dark to-dark py-24 sm:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-button bg-white opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 sm:text-xl">
            Descubra como podemos transformar seu produto digital de bom para excepcional
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <TransitionLink
              href="/contato"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-8 py-4 text-sm font-black tracking-wider text-brand-orange shadow-xl transition-smooth hover:-translate-y-1 hover:shadow-2xl"
            >
              <i className="fa-jelly fa-calendar fa-lg"></i>
              Agendar Conversa
            </TransitionLink>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-transparent px-8 py-4 text-sm font-black tracking-wider text-white backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:bg-white hover:text-brand-orange"
            >
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              Chat no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
