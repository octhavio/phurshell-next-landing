import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ProcessStage {
  stage?: number
  step?: string
  title: string
  description: string
  color?: 'red' | 'blue' | 'teal' | 'green'
  icon?: string
  iconType?: string
}

interface ProcessCarouselProps {
  items: ProcessStage[]
  label?: string
  labelIcon?: string
  title?: string
  description?: string
  bgColor?: 'white' | 'gray'
  cardStyle?: 'process' | 'service'
  showCta?: boolean
  ctaImageAlt?: string
  hideLabel?: boolean
  smallTitle?: boolean
}

export default function ProcessCarousel({
  items: stages,
  label,
  labelIcon,
  title = 'Processo',
  description = 'Fornecemos serviços de desenvolvimento mobile específicos para iOS e Android e consultoria de desenvolvimento de apps. Colaboramos com você para refinar sua ideia e garantir o sucesso do projeto desde o primeiro conceito até um app totalmente funcional. Seu desenvolvimento mobile está em mãos capazes quando você trabalha conosco.',
  bgColor = 'gray',
  cardStyle = 'process',
  showCta = false,
  ctaImageAlt = 'Equipe de especialistas da Phurshell',
  hideLabel = false,
  smallTitle = false,
}: ProcessCarouselProps) {
  const swiperRef = useRef<SwiperType>()
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-gray-50'

  const colorClasses: Record<string, { bg: string; iconBg: string; text: string }> = {
    red: {
      bg: 'bg-red-100',
      iconBg: 'bg-red-500',
      text: 'text-red-900',
    },
    blue: {
      bg: 'bg-blue-100',
      iconBg: 'bg-blue-500',
      text: 'text-blue-900',
    },
    teal: {
      bg: 'bg-teal-100',
      iconBg: 'bg-teal-500',
      text: 'text-teal-900',
    },
    green: {
      bg: 'bg-green-100',
      iconBg: 'bg-green-600',
      text: 'text-green-900',
    },
  }

  return (
    <section className={`${bgClass} py-12 sm:py-16`}>
      <div className={`container mx-auto mb-8 max-w-screen-2xl px-10 sm:px-14 lg:px-20 ${cardStyle === 'process' ? 'text-center' : ''}`}>
        {label && !hideLabel && (
          <h3 className={`mb-4 text-lg font-black uppercase tracking-wider text-brand-orange ${cardStyle === 'process' ? 'justify-center' : ''} flex items-center gap-3`}>
            {labelIcon && <i className={`fa-jelly fa-${labelIcon} fa-xl`}></i>}
            {label}
          </h3>
        )}
        <h2 className={`mb-6 font-black tracking-tight text-dark ${smallTitle ? 'text-3xl sm:text-4xl' : 'text-5xl sm:text-6xl'}`}>
          {title}
        </h2>
        <p className={`text-xl leading-relaxed text-dark/60 ${cardStyle === 'process' ? 'mx-auto' : ''} max-w-4xl`}>{description}</p>
      </div>

      {/* Carousel - Full Width Right */}
      <div className="relative mt-16">
        {cardStyle === 'service' ? (
          // Service: grid fixo alinhado à grid do site
          <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map((stage, index) => (
                <div key={index} className="h-full rounded-button border border-dark/10 bg-white p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-button bg-brand-orange/10">
                    <i className={`fa-${stage.iconType || 'jelly'} fa-${stage.icon} fa-xl text-brand-orange`}></i>
                  </div>
                  <h3 className="mb-3 text-xl font-black text-dark">{stage.title}</h3>
                  <p className="text-xl leading-relaxed text-dark/60">{stage.description}</p>
                </div>
              ))}
            </div>

            {showCta && (
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a
                  href="/contato"
                  className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
                >
                  Solicitar proposta
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.webp"
                      alt={ctaImageAlt}
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">Fale com um especialista agora</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Process: carousel full-bleed right, alinhado ao grid à esquerda
          <div className="relative z-10">
            <div className="relative">
              <div className="mb-8 flex justify-center gap-2">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="flex h-12 w-12 items-center justify-center rounded-button border border-dark/10 bg-white text-dark transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Slide anterior"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="flex h-12 w-12 items-center justify-center rounded-button border border-dark/10 bg-white text-dark transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Próximo slide"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              <div className="relative">
              <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                modules={[Navigation, Pagination, Mousewheel, FreeMode]}
                spaceBetween={24}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                mousewheel={{ forceToAxis: true }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 24 },
                  1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
                className="process-swiper"
              >
                {stages.map((stage, index) => {
                  const displayNumber = stage.step || stage.stage?.toString()
                  return (
                    <SwiperSlide key={index} className="process-slide">
                      <div className="h-full rounded-button border border-dark/10 bg-white cursor-pointer p-6 text-center">
                        {stage.icon && (
                          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-button bg-brand-orange/10">
                            <i className={`fa-jelly fa-${stage.icon} fa-xl text-brand-orange`}></i>
                          </div>
                        )}
                        <h3 className="mb-3 text-xl font-black text-dark">{index + 1}. {stage.title}</h3>
                        <p className="text-xl leading-relaxed text-dark/60">{stage.description}</p>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
