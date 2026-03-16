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
}

export default function NavDropdown({ label, href, items, isActive }: NavDropdownProps) {
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
        <div className="absolute left-1/2 top-full z-50 mt-6 w-[400px] -translate-x-1/2 rounded-button border border-dark/10 bg-white p-4 shadow-lg">
          <div className="flex flex-col">
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
                  <div className="font-bold text-dark transition-colors group-hover:text-brand-orange">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="mt-1 text-sm text-dark/60">{item.description}</div>
                  )}
                </div>
              </TransitionLink>
            ))}

            {/* Link para ver todos os serviços */}
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
                    Ver todos os serviços
                  </div>
                  <div className="mt-1 text-sm text-dark/60">
                    Todas as soluções que oferecemos
                  </div>
                </div>
              </TransitionLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
