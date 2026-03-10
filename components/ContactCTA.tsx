import TransitionLink from '@/components/TransitionLink'
import Image from 'next/image'

export default function ContactCTA() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
        {/* Card Container */}
        <div className="rounded-button bg-brand-orange/10 p-8 shadow-sm sm:p-12 lg:p-16">
          {/* Content Grid */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_350px]">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <p className="text-lg font-black uppercase tracking-wider text-brand-orange">
                ENTRAR EM CONTATO
              </p>

              <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                Receba sua proposta inicial rapidamente
              </h2>

              <p className="text-xl leading-relaxed text-dark/70">
                Assim que você enviar o formulário, nosso time entra em contato para entender melhor seu projeto. Em pouco tempo, você recebe uma proposta inicial com estimativa de escopo, investimento e próximos passos.
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-lg text-dark/70">
                  <span className="text-brand-orange">✓</span>
                  <span>Conversa rápida sobre seu projeto</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-dark/70">
                  <span className="text-brand-orange">✓</span>
                  <span>Estimativa inicial de investimento</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-dark/70">
                  <span className="text-brand-orange">✓</span>
                  <span>Próximos passos para começar</span>
                </li>
              </ul>

              {/* CTA Button with Fast Response Text */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <TransitionLink
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-base font-black tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
                >
                  Solicitar proposta
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>

                {/* Fast Response Text */}
                <div className="text-left">
                  <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-brand-orange">
                    <i className="fa-solid fa-bolt"></i>
                    Resposta rápida
                  </p>
                  <p className="text-sm font-medium text-dark/70">Tempo recorde de retorno</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-first lg:order-last">
              <div className="relative overflow-hidden rounded-button">
                <Image
                  src="/img-cta.png"
                  alt="Gustavo Bittar, co-fundador da Phurshell"
                  width={350}
                  height={466}
                  sizes="(max-width: 1024px) 100vw, 350px"
                  loading="lazy"
                  className="h-auto w-full"
                />

                {/* Overlay with Name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-base text-white/90 italic">
                    "Vamos conversar e transformar o seu negócio?"
                  </p>
                  <p className="text-2xl font-black text-white">Gustavo Bittar</p>
                  <p className="text-sm text-white/80">Co-fundador • Phurshell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
