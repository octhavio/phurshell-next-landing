'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { cases, caseHoverColors, getSegmentIcon, getTagIcon } from '../data/cases'
import CaseCard from './CaseCard'
import 'swiper/css'

interface CasesCarouselProps {
  title?: string
  description?: string
  bgColor?: 'white' | 'dark'
}

export default function CasesCarousel({
  title = 'Grandes projetos que já construímos',
  description = 'Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até o lançamento e crescimento no mercado.',
  bgColor = 'white',
}: CasesCarouselProps) {
  const swiperRef = useRef<SwiperType>()
  const bgClass = bgColor === 'dark' ? 'bg-dark' : 'bg-white'
  const titleClass = bgColor === 'dark' ? 'text-white' : 'text-dark'
  const descClass = bgColor === 'dark' ? 'text-white/70' : 'text-dark/60'
  const labelClass = bgColor === 'dark' ? 'text-brand-orange' : 'text-brand-orange'

  return (
    <section className={`${bgClass} pt-16 sm:pt-24`}>
      <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
        <div className="mb-12 text-center">
          <p className={`mb-4 flex items-center justify-center gap-3 text-lg font-black uppercase tracking-wider ${labelClass}`}>
            <i className="fa-jelly fa-trophy fa-xl"></i>
            Cases de sucesso
          </p>
          <h2 className={`mb-6 text-5xl font-black tracking-tight sm:text-6xl ${titleClass}`}>
            {title}
          </h2>
          <p className={`mx-auto max-w-2xl text-xl leading-relaxed ${descClass}`}>
            {description}
          </p>
        </div>
        <div className="mb-8 flex justify-center gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-12 w-12 items-center justify-center rounded-button border border-dark/10 bg-white text-dark transition-smooth hover:border-brand-orange hover:text-brand-orange"
            aria-label="Slide anterior"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-12 w-12 items-center justify-center rounded-button border border-dark/10 bg-white text-dark transition-smooth hover:border-brand-orange hover:text-brand-orange"
            aria-label="Próximo slide"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        modules={[Mousewheel, FreeMode]}
        spaceBetween={24}
        slidesPerView={1.05}
        centeredSlides={true}
        loop={true}
        mousewheel={{ forceToAxis: true }}
        breakpoints={{
          768: { slidesPerView: 1.2, spaceBetween: 24 },
          1024: { slidesPerView: 1.4, spaceBetween: 32 },
        }}
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', cursor: 'grab' }}
        className="cases-carousel"
      >
        {cases.map((caseItem, index) => (
          <SwiperSlide key={index} className="cases-slide">
            <CaseCard
              caseItem={caseItem}
              hoverColor={caseHoverColors[caseItem.name] || '#8046FB1A'}
              getSegmentIcon={getSegmentIcon}
              getTagIcon={getTagIcon}
              variant="colored"
              disableCustomCursor={true}
              forcePointer={true}
              gradientColor={caseHoverColors[caseItem.name] || '#8046FB1A'}
              hideLink={['Diag', 'Psiapp', 'Autoday'].includes(caseItem.name)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}
