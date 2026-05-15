import { ReactNode } from 'react'

interface ClientLogosCarouselProps {
  /** Array of logo numbers to display (e.g., [2, 1, 3, 4, 5, 6]) */
  logos: number[]
  /** Title text above carousel (optional) */
  title?: ReactNode
  /** Subtitle/description text (optional) */
  subtitle?: string
  /** Background color for the card (default: #1a1a1a) */
  bgColor?: string
  /** Whether to show the dark card container (default: true) */
  showCard?: boolean
  /** Custom container classes */
  className?: string
}

export default function ClientLogosCarousel({
  logos,
  title,
  subtitle = 'Alguns de nossos clientes',
  bgColor = '#1a1a1a',
  showCard = true,
  className = '',
}: ClientLogosCarouselProps) {
  const cardClasses = showCard
    ? `overflow-hidden rounded-button px-10 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24`
    : ''

  const content = (
    <>
      {/* Header */}
      {(subtitle || title) && (
        <div className="mb-16">
          {subtitle && (
            <p className="mb-4 text-lg font-bold uppercase tracking-wider text-white/50">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Logo Carousel */}
      <div className="relative">
        {/* Gradient overlays */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r to-transparent"
          style={{
            backgroundImage: bgColor === 'transparent'
              ? 'linear-gradient(to right, white, transparent)'
              : `linear-gradient(to right, ${bgColor}, transparent)`
          }}
        ></div>
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l to-transparent"
          style={{
            backgroundImage: bgColor === 'transparent'
              ? 'linear-gradient(to left, white, transparent)'
              : `linear-gradient(to left, ${bgColor}, transparent)`
          }}
        ></div>

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <div className="animate-logos-scroll flex gap-16">
            {/* First set of logos */}
            {logos.map((num) => (
              <div key={`first-${num}`} className="relative h-16 w-40 flex-shrink-0 sm:h-20 sm:w-48">
                <img
                  src={`/images/clients/img-partner-${num}.webp`}
                  alt={`Logo de empresa cliente da Phurshell`}
                  width={192}
                  height={80}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain brightness-0 invert opacity-60"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((num) => (
              <div key={`second-${num}`} className="relative h-16 w-40 flex-shrink-0 sm:h-20 sm:w-48">
                <img
                  src={`/images/clients/img-partner-${num}.webp`}
                  alt={`Logo de empresa cliente da Phurshell`}
                  width={192}
                  height={80}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain brightness-0 invert opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  if (!showCard) {
    return <div className={className}>{content}</div>
  }

  return (
    <div className={className}>
      <div className={cardClasses} style={{ backgroundColor: bgColor }}>
        {content}
      </div>
    </div>
  )
}
