'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ProcessStage {
  stage: number
  title: string
  description: string
  color: 'red' | 'blue' | 'teal' | 'green'
  icon: string
}

interface ProcessCarouselProps {
  stages: ProcessStage[]
}

export default function ProcessCarousel({ stages }: ProcessCarouselProps) {
  const swiperRef = useRef<SwiperType>()

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
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
            Processo
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-dark/60">
            Fornecemos serviços de desenvolvimento mobile específicos para iOS e Android e
            consultoria de desenvolvimento de apps. Colaboramos com você para refinar sua ideia e
            garantir o sucesso do projeto desde o primeiro conceito até um app totalmente
            funcional. Seu desenvolvimento mobile está em mãos capazes quando você trabalha
            conosco.
          </p>
        </div>
      </div>

      {/* Carousel - Full Width Right */}
      <div className="relative mt-16">
        {/* Grid Lines Background */}
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

        <div className="container relative z-10 mx-auto max-w-screen-2xl pl-6 sm:pl-8 lg:pl-12">
          <div className="relative">
            {/* Desktop navigation - above */}
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

            {/* Swiper */}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Navigation, Pagination, Mousewheel, FreeMode]}
              spaceBetween={24}
              slidesPerView={1.2}
              freeMode={true}
              mousewheel={{
                forceToAxis: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="process-swiper"
            >
              {stages.map((stage, index) => {
                const colors = colorClasses[stage.color]
                return (
                  <SwiperSlide key={index}>
                    <div className="group h-full overflow-hidden rounded-button bg-white transition-smooth hover:-translate-y-1">
                      {/* Header colorido */}
                      <div className={`flex items-center gap-3 ${colors.bg} p-4`}>
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button ${colors.iconBg}`}
                        >
                          <i className={`fa-jelly fa-${stage.icon} text-white`}></i>
                        </div>
                        <h3 className={`text-lg font-black ${colors.text}`}>{stage.title}</h3>
                      </div>
                      {/* Conteúdo */}
                      <div className="p-6">
                        <p className="text-sm leading-relaxed text-dark/70">{stage.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Mobile navigation - below */}
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
          </div>
        </div>
      </div>
    </section>
  )
}
