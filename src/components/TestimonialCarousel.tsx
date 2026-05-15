'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const testimonials = [
  {
    quote:
      'Foi uma empresa muito parceira nossa, porque eles contribuíram não só no desenvolvimento, mas também com ideias pro negócio. Deram muito suporte pra gente.',
    name: 'Alec Maia',
    role: 'CEO da Autoday',
    photo: '/images/img-testimonial-autoday.webp',
    alt: 'Foto de Alec Maia, CEO da Autoday',
    companyLogo: '/images/icon_autoday.svg',
    companyAlt: 'Logo da Autoday',
  },
  {
    quote:
      'Sabe quando você encontra parceiros que realmente vestem a camisa junto com você? A Phurshell é exatamente isso. Uma empresa cheia de ideias impressionantes, com uma equipe batalhadora e extremamente dedicada, é o melhor: sempre disposta a ajudar de verdade.',
    name: 'Amanda Bernardes',
    role: 'Fundadora do Diag',
    photo: '/images/img-testimonial-diag.webp',
    alt: 'Foto de Amanda Bernardes, fundadora do Diag',
    companyLogo: '/images/icon_diag.svg',
    companyAlt: 'Logo do Diag',
  },
  {
    quote:
      'Ficou muito, muito bom! Eu adorei, não conseguiria pensar em algo melhor, ficou incrível, amei!',
    name: 'Pamela Magalhães',
    role: 'Idealizadora do Psiapp',
    photo: '/images/img-testimonial-psiapp.webp',
    alt: 'Foto de Pamela Magalhães, idealizadora do Psiapp',
    companyLogo: '/images/img-cases-psiapp-icon.webp',
    companyAlt: 'Logo do Psiapp',
  },
]

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

export default function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType>()

  return (
    <section className="bg-white py-12 sm:py-16 overflow-hidden">
      <style>{`
        .testimonial-swiper {
          align-items: stretch;
        }
        .testimonial-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .testimonial-swiper .swiper-slide {
          height: auto;
          opacity: 0.35;
          transform: scale(0.92);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .testimonial-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="mb-8 flex justify-center gap-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-button border border-dark/10 bg-white text-dark transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
          aria-label="Depoimento anterior"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-12 w-12 items-center justify-center rounded-button border border-dark/10 bg-white text-dark transition-smooth hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
          aria-label="Próximo depoimento"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        modules={[Autoplay, Mousewheel]}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        mousewheel={{ forceToAxis: true }}
        centeredSlides={true}
        loop={false}
        initialSlide={3}
        speed={600}
        slidesPerView={1.05}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 32 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
          1280: { slidesPerView: 2, spaceBetween: 48 },
        }}
        className="testimonial-swiper"
      >
        {loopedTestimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex h-full flex-col items-center justify-center rounded-button border border-dark/10 bg-white p-8 sm:p-10 text-center">
              <div className="mb-8">
                <div className="mb-4 flex justify-center">
                  <i className="fa-solid fa-quote-left fa-2x text-brand-orange"></i>
                </div>
                <blockquote className="text-2xl leading-tight text-dark sm:text-3xl">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl">
                    <img
                      src={t.photo}
                      alt={t.alt}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-7 w-7 overflow-hidden rounded-lg border-2 border-white bg-white shadow-md">
                    <img
                      src={t.companyLogo}
                      alt={t.companyAlt}
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-black text-dark">{t.name}</h3>
                  <p className="text-sm font-bold text-dark/60">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
