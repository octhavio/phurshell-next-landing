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
  const dropdownRef = useRef<HTMLDivElement>(null)
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

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
        <i
          className={`fa-solid fa-chevron-down text-xs transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        ></i>
      </button>

      {isOpen && (
        <div
          className={`fixed left-4 right-4 top-[88px] z-50 rounded-button border border-dark/10 bg-white p-4 shadow-lg xl:absolute xl:left-1/2 xl:right-auto xl:top-full xl:mt-6 xl:-translate-x-1/2 xl:w-max xl:max-w-[calc(100vw-2rem)]`}
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
                <div className="flex-1">
                  <div className="font-bold text-dark transition-colors group-hover:text-brand-orange xl:whitespace-nowrap">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="mt-1 text-sm text-dark/60">{item.description}</div>
                  )}
                </div>
              </TransitionLink>
            ))}
          </div>

          {/* Link para ver todos */}
          <div className="border-t border-dark/10 pt-2 mt-2">
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
                <div className="mt-1 text-sm text-dark/60">
                  {viewAllDescription}
                </div>
              </div>
            </TransitionLink>
          </div>
        </div>
      )}
    </div>
  )
}
