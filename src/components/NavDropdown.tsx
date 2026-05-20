import { useState, useRef, useEffect } from 'react'
import TransitionLink from './TransitionLink'

interface DropdownItem {
  label: string
  href: string
  description?: string
  icon?: string
}

interface NavDropdownProps {
  label: string
  href: string
  items: DropdownItem[]
  isActive: boolean
  viewAllLabel?: string
  viewAllDescription?: string
}

export default function NavDropdown({
  label,
  href,
  items,
  isActive,
  viewAllLabel = 'Ver todos os serviços',
  viewAllDescription = 'Todas as soluções que oferecemos'
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Recalculate position whenever the menu opens or window resizes
  useEffect(() => {
    function calculate() {
      if (!isOpen || !dropdownRef.current || !menuRef.current) return
      const isDesktop = window.innerWidth >= 1280
      if (!isDesktop) {
        setMenuStyle(null) // mobile: CSS handles it (fixed full-width)
        return
      }

      const trigger = dropdownRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const margin = 16
      const desiredWidth = items.length > 4 ? 1080 : 400
      const menuWidth = Math.min(desiredWidth, viewportWidth - margin * 2)

      let left = trigger.left + trigger.width / 2 - menuWidth / 2
      if (left < margin) left = margin
      if (left + menuWidth > viewportWidth - margin) left = viewportWidth - menuWidth - margin

      setMenuStyle({ position: 'fixed', top: trigger.bottom + 24, left, width: menuWidth })
    }

    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [isOpen, items.length])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
  }

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleClick}
        className={`flex items-center gap-1 rounded-button px-4 py-2 text-base font-bold transition-all ${
          isActive
            ? 'bg-brand-orange/10 text-brand-orange'
            : 'text-dark/70 hover:bg-brand-orange/10 hover:text-brand-orange'
        }`}
      >
        {label}
        <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed left-4 right-4 top-[88px] z-50 rounded-button border border-dark/10 bg-white p-4 shadow-lg xl:right-auto"
          style={menuStyle ?? undefined}
        >
          <div className={items.length > 4 ? 'grid grid-cols-1 gap-x-2 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-col'}>
            {items.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className="group flex items-start gap-4 rounded-button p-4 transition-colors hover:bg-gray-50"
              >
                {item.icon && (
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                    <i className={`fa-jelly fa-${item.icon} fa-lg text-brand-orange`}></i>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-dark transition-colors group-hover:text-brand-orange">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="mt-1 text-sm text-dark/60">{item.description}</div>
                  )}
                </div>
              </TransitionLink>
            ))}
          </div>

          <div className="mt-2 border-t border-dark/10 pt-2">
            <TransitionLink
              href={href}
              className="group flex items-start gap-4 rounded-button p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                <i className="fa-jelly fa-grid fa-lg text-brand-orange"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-dark transition-colors group-hover:text-brand-orange">
                  {viewAllLabel}
                </div>
                <div className="mt-1 text-sm text-dark/60">{viewAllDescription}</div>
              </div>
            </TransitionLink>
          </div>
        </div>
      )}
    </div>
  )
}
