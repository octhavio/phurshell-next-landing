'use client'

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
}

interface ProcessCarouselProps {
  items: ProcessStage[]
  label?: string
  title?: string
  description?: string
  bgColor?: 'white' | 'gray'
  cardStyle?: 'process' | 'service'
}

export default function ProcessCarousel({
  items: stages,
  label,
  title = 'Processo',
  description = 'Fornecemos serviços de desenvolvimento mobile específicos para iOS e Android e consultoria de desenvolvimento de apps. Colaboramos com você para refinar sua ideia e garantir o sucesso do projeto desde o primeiro conceito até um app totalmente funcional. Seu desenvolvimento mobile está em mãos capazes quando você trabalha conosco.',
  bgColor = 'gray',
  cardStyle = 'process',
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
      <div className="container mx-auto mb-8 max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        {label && (
          <h3 className="mb-4 text-lg font-black uppercase tracking-wider text-brand-orange">
            {label}
          </h3>
        )}
        <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
          {title}
        </h2>
        <p className="max-w-4xl text-xl leading-relaxed text-dark/60">{description}</p>
      </div>

      {/* Carousel - Full Width Right */}
      <div className="relative mt-16">
        {/* Grid Lines Background */}
        {cardStyle === 'process' && (
          <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
            {/* Horizontal lines */}
            <div className="absolute left-0 right-0 top-0 border-t border-dark/5"></div>
            <div className="absolute left-0 right-0 top-1/4 border-t border-dark/5"></div>
            <div className="absolute left-0 right-0 top-1/2 border-t border-dark/5"></div>
            <div className="absolute left-0 right-0 top-3/4 border-t border-dark/5"></div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-dark/5"></div>

            {/* Vertical lines */}
            {[0, 8.33, 16.66, 25, 33.33, 41.66, 50, 58.33, 66.66, 75, 83.33, 91.66].map((percent, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 border-r border-dark/5"
                style={{ left: `${percent}%` }}
              ></div>
            ))}
          </div>
        )}

        <div className={cardStyle === 'process' ? 'container relative z-10 mx-auto max-w-screen-2xl pl-6 sm:pl-8 lg:pl-12' : 'relative z-10'}>
          <div className="relative">
            {/* Desktop navigation - above */}
            {cardStyle === 'process' && (
              <div className="mb-8 hidden justify-end pr-6 sm:pr-8 md:flex lg:pr-12">
                <div className="flex gap-2">
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
              </div>
            )}

            {/* Swiper */}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Navigation, Pagination, Mousewheel, FreeMode]}
              spaceBetween={24}
              slidesPerView={cardStyle === 'service' ? 1.5 : 1.2}
              freeMode={true}
              mousewheel={{
                forceToAxis: true,
              }}
              breakpoints={
                cardStyle === 'service'
                  ? {
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 24,
                      },
                      1280: {
                        slidesPerView: 5.5,
                        spaceBetween: 24,
                      },
                    }
                  : {
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                      },
                    }
              }
              className={cardStyle === 'service' ? 'process-swiper' : 'process-swiper'}
              style={
                cardStyle === 'service'
                  ? {
                      paddingLeft: 'max(1.5rem, calc((100vw - 1536px) / 2 + 1.5rem))',
                    }
                  : undefined
              }
            >
              {stages.map((stage, index) => {
                const colors = stage.color ? colorClasses[stage.color] : null
                const displayNumber = stage.step || stage.stage?.toString()
                return (
                  <SwiperSlide key={index}>
                    {cardStyle === 'service' ? (
                      // Service Card Style
                      <div className="h-full rounded-button border border-dark/10 bg-white p-6">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-button bg-brand-orange/10">
                          <i className={`fa-jelly fa-${stage.icon} fa-xl text-brand-orange`}></i>
                        </div>
                        <h3 className="mb-3 text-xl font-black text-dark">{stage.title}</h3>
                        <p className="text-base leading-relaxed text-dark/60">{stage.description}</p>
                      </div>
                    ) : (
                      // Process Card Style
                      <div className="group h-full overflow-hidden rounded-button border border-dark/10 bg-white transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg">
                        {/* Header */}
                        {colors ? (
                          <div className={`flex items-center gap-3 ${colors.bg} p-4`}>
                            {stage.icon && (
                              <div
                                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button ${colors.iconBg}`}
                              >
                                <i className={`fa-jelly fa-${stage.icon} text-white`}></i>
                              </div>
                            )}
                            <h3 className={`text-lg font-black ${colors.text}`}>{stage.title}</h3>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 border-b border-dark/10 bg-brand-orange/5 p-4">
                            {displayNumber && (
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10 text-brand-orange">
                                <span className="text-lg font-black">{displayNumber}</span>
                              </div>
                            )}
                            <h3 className="text-lg font-black text-dark">{stage.title}</h3>
                          </div>
                        )}
                        {/* Conteúdo */}
                        <div className="p-6">
                          <p className="text-sm leading-relaxed text-dark/70">{stage.description}</p>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Mobile navigation - below */}
            {cardStyle === 'process' && (
              <div className="mt-6 flex justify-center gap-2 pr-6 sm:pr-8 md:hidden lg:pr-12">
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
