import { useTransition } from '../context/TransitionContext'
import TransitionLink from './TransitionLink'

function blendWithWhite(hexWithAlpha: string): string {
  const hex = hexWithAlpha.slice(1, 7)
  const alpha = parseInt(hexWithAlpha.slice(7, 9), 16) / 255
  const r = Math.round(parseInt(hex.slice(0, 2), 16) * alpha + 255 * (1 - alpha))
  const g = Math.round(parseInt(hex.slice(2, 4), 16) * alpha + 255 * (1 - alpha))
  const b = Math.round(parseInt(hex.slice(4, 6), 16) * alpha + 255 * (1 - alpha))
  return `rgb(${r}, ${g}, ${b})`
}

interface CaseCardProps {
  caseItem: {
    name: string
    icon: string
    segment: string
    description: string
    screenshot: string
    screenshot2?: string
    tags: string[]
    link?: string
  }
  hoverColor?: string
  getSegmentIcon: (segment: string) => string
  getTagIcon: (tag: string) => string
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  variant?: 'default' | 'colored'
  disableCustomCursor?: boolean
  forcePointer?: boolean
  gradientColor?: string
  hideLink?: boolean
}

export default function CaseCard({ caseItem, hoverColor = '#8046FB1A', getSegmentIcon, getTagIcon, onMouseMove, onMouseEnter, onMouseLeave, variant = 'default', disableCustomCursor = false, forcePointer = false, gradientColor, hideLink = false }: CaseCardProps) {
  const { startTransition } = useTransition()

  const handleCardClick = () => {
    if (caseItem.link && !hideLink) {
      startTransition(caseItem.link)
    }
  }

  return (
    <div
      className={`group relative border overflow-hidden rounded-button ${(caseItem.link || forcePointer) ? `cursor-pointer${disableCustomCursor ? '' : ' xl:[cursor:none]'}` : ''} ${variant === 'colored' ? 'border-transparent' : 'border-dark/10 bg-white'}`}
      style={variant === 'colored' ? { backgroundColor: hoverColor } : undefined}
      onClick={handleCardClick}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Circular background effect on hover - desktop only (default variant only) */}
      {variant === 'default' && (
        <div
          className="hidden xl:block absolute -right-96 top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full transition-all duration-500 pointer-events-none scale-0 group-hover:scale-100"
          style={{ backgroundColor: hoverColor }}
        ></div>
      )}

      <div className="relative grid grid-cols-1 items-center gap-12 p-12 sm:p-16 xl:grid-cols-2 xl:gap-16 lg:p-20">
        {/* Left Column - Content */}
        <div className="space-y-8 order-2 xl:order-1">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={caseItem.icon}
                  alt={`Logo do app ${caseItem.name} desenvolvido pela Phurshell`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-20 w-20 rounded-2xl border border-dark/10"
                />
                <h3 className="text-4xl font-black leading-tight text-dark sm:text-5xl">
                  {caseItem.name}
                </h3>
              </div>
              {/* Button Ver case (only if link exists and not hidden) - visible only on mobile/tablet */}
              {caseItem.link && !hideLink && (
                <TransitionLink
                  href={caseItem.link}
                  className="xl:hidden inline-flex items-center gap-2 rounded-button border px-6 py-3 text-base font-bold tracking-wider transition-smooth bg-dark border-dark text-white shadow-lg shadow-dark/30"
                >
                  Ver case
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
              )}
            </div>

            <p className="text-xl leading-relaxed text-dark/60">
              {caseItem.description}
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-dark/60">
              O que fizemos
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseItem.tags.map((tag, tagIndex) => {
                let formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
                if (tag.toUpperCase() === 'IOS') formattedTag = 'iOS'
                if (tag.toUpperCase() === 'IA') formattedTag = 'IA'

                return (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-4 py-2 text-sm font-bold text-dark/60"
                  >
                    <i className={`${getTagIcon(tag)} text-xs`}></i>
                    {formattedTag}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Segment */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-dark/60">
              Segmento
            </h4>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-4 py-2 text-sm font-bold text-dark/60">
                <i className={`${getSegmentIcon(caseItem.segment)} text-xs`}></i>
                {caseItem.segment}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Screenshot */}
        <div className="relative flex items-center justify-center order-1 xl:order-2 h-[375px] xl:h-auto xl:rounded-[44px] overflow-hidden xl:overflow-visible w-full">
          <div className="relative w-full h-full flex items-center justify-center xl:w-auto xl:h-auto">
            {/* Second screenshot - behind on the right (only if screenshot2 exists) */}
            {caseItem.screenshot2 && (
              <img
                src={caseItem.screenshot2}
                alt={`Tela secundária do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
                width={800}
                height={600}
                loading="lazy"
                className="hidden md:block md:absolute md:top-0 md:left-1/2 md:h-[450px] md:w-auto md:opacity-90 md:scale-90 md:translate-x-[10%] xl:top-1/2 xl:-translate-y-1/2 xl:left-auto xl:translate-x-[50%] xl:h-auto xl:w-full xl:max-w-[280px] xl:rounded-[44px] xl:right-0 transition-all duration-500"
              />
            )}
            {/* First screenshot - front */}
            <img
              src={caseItem.screenshot}
              alt={`Interface principal do aplicativo ${caseItem.name} desenvolvido pela Phurshell`}
              width={800}
              height={600}
              loading="lazy"
              className={`absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-auto xl:relative xl:top-auto xl:left-auto xl:translate-x-0 xl:translate-y-0 xl:h-auto xl:w-full xl:max-w-[280px] xl:rounded-[44px] transition-all duration-500 ${
                caseItem.screenshot2 ? 'xl:z-10 xl:shadow-[20px_0_40px_-10px_rgba(0,0,0,0.3)] xl:group-hover:-translate-x-8 xl:group-hover:translate-y-2 xl:group-hover:-rotate-2' : ''
              }`}
            />
          </div>
          {/* Gradient overlay - only mobile/tablet */}
          <div
            className="absolute inset-0 xl:hidden pointer-events-none"
            style={gradientColor
              ? { background: `linear-gradient(to bottom, transparent 40%, ${blendWithWhite(gradientColor)} 100%)` }
              : undefined}
          ></div>
        </div>
      </div>
    </div>
  )
}
