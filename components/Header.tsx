'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import TransitionLink from './TransitionLink'
import NavDropdown from './NavDropdown'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicosOpen, setServicosOpen] = useState(false)
  const [segmentosOpen, setSegmentosOpen] = useState(false)

  const servicosDropdown = [
    {
      label: 'Desenvolvimento de Apps',
      href: '/servicos/mobile-app-development',
      description: 'Apps nativos e cross-platform para iOS e Android',
      icon: 'mobile',
    },
    {
      label: 'Desenvolvimento Web',
      href: '/servicos/web-development',
      description: 'Sites, plataformas SaaS e dashboards modernos',
      icon: 'desktop',
    },
    {
      label: 'Todos os Serviços',
      href: '/servicos',
      description: 'Ver catálogo completo de serviços',
      icon: 'layer-group',
    },
  ]

  const segmentosDropdown = [
    {
      label: 'Healthtech',
      href: '/industrias/healthtech',
      description: 'Soluções de tecnologia para saúde',
      icon: 'heart-pulse',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex h-20 w-full items-center justify-between rounded-button border border-dark/10 bg-white/80 px-6 backdrop-blur-xl sm:px-8 lg:px-12">
        {/* Logo */}
        <TransitionLink href="/" className="group flex items-center space-x-2">
          <Image
            src="/logos/img-navbar-logo-dark.svg"
            alt="Phurshell"
            width={180}
            height={40}
            className="h-8 w-auto transition-smooth group-hover:opacity-80"
            priority
          />
        </TransitionLink>

        {/* Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-2">
          <TransitionLink
            href="/sobre"
            className={`rounded-button px-4 py-2 text-base font-bold transition-all ${
              pathname === '/sobre'
                ? 'bg-brand-orange/10 text-brand-orange'
                : 'text-dark/70 hover:bg-brand-orange/10 hover:text-brand-orange'
            }`}
          >
            Sobre
          </TransitionLink>

          <NavDropdown
            label="Serviços"
            href="/servicos"
            items={servicosDropdown}
            isActive={pathname.startsWith('/servicos')}
          />

          <NavDropdown
            label="Segmentos"
            href="/industrias"
            items={segmentosDropdown}
            isActive={pathname.startsWith('/industrias')}
          />

          <TransitionLink
            href="/cases"
            className={`rounded-button px-4 py-2 text-base font-bold transition-all ${
              pathname === '/cases'
                ? 'bg-brand-orange/10 text-brand-orange'
                : 'text-dark/70 hover:bg-brand-orange/10 hover:text-brand-orange'
            }`}
          >
            Cases
          </TransitionLink>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <TransitionLink
            href="/contato"
            className="group hidden items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light md:inline-flex"
          >
            Solicitar proposta
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </TransitionLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-button p-2 text-dark/70 hover:bg-white/5 hover:text-brand-orange md:hidden"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          {/* Mobile Header */}
          <div className="flex h-20 items-center justify-between border-b border-dark/10 px-6">
            <Image
              src="/logos/img-navbar-logo-dark.svg"
              alt="Phurshell"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-button p-2 text-dark/70 hover:bg-dark/5"
              aria-label="Fechar menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="overflow-y-auto px-6 py-6">
            <nav className="rounded-button border border-dark/10 bg-white shadow-sm">
              {/* Sobre */}
              <TransitionLink
                href="/sobre"
                onClick={() => setMobileMenuOpen(false)}
                className={`block border-b border-dark/10 px-6 py-4 text-base font-bold transition-colors ${
                  pathname === '/sobre' ? 'text-brand-orange' : 'text-dark hover:bg-dark/5'
                }`}
              >
                Sobre
              </TransitionLink>

              {/* Serviços - Accordion */}
              <div className="border-b border-dark/10">
                <button
                  type="button"
                  onClick={() => setServicosOpen(!servicosOpen)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-bold text-dark transition-colors hover:bg-dark/5"
                >
                  <span
                    className={pathname.startsWith('/servicos') ? 'text-brand-orange' : 'text-dark'}
                  >
                    Serviços
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-sm transition-transform ${
                      servicosOpen ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {servicosOpen && (
                  <div className="border-t border-dark/5 bg-gray-50">
                    {servicosDropdown.map((item) => (
                      <TransitionLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-start gap-3 border-b border-dark/5 px-6 py-4 transition-colors last:border-0 hover:bg-white"
                      >
                        {item.icon && (
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                            <i className={`fa-jelly fa-${item.icon} text-brand-orange`}></i>
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="font-bold text-dark">{item.label}</div>
                          <div className="mt-1 text-sm text-dark/60">{item.description}</div>
                        </div>
                      </TransitionLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Segmentos - Accordion */}
              <div className="border-b border-dark/10">
                <button
                  type="button"
                  onClick={() => setSegmentosOpen(!segmentosOpen)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-bold text-dark transition-colors hover:bg-dark/5"
                >
                  <span
                    className={
                      pathname.startsWith('/industrias') ? 'text-brand-orange' : 'text-dark'
                    }
                  >
                    Segmentos
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-sm transition-transform ${
                      segmentosOpen ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {segmentosOpen && (
                  <div className="border-t border-dark/5 bg-gray-50">
                    {segmentosDropdown.map((item) => (
                      <TransitionLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-start gap-3 border-b border-dark/5 px-6 py-4 transition-colors last:border-0 hover:bg-white"
                      >
                        {item.icon && (
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-button bg-brand-orange/10">
                            <i className={`fa-jelly fa-${item.icon} text-brand-orange`}></i>
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="font-bold text-dark">{item.label}</div>
                          <div className="mt-1 text-sm text-dark/60">{item.description}</div>
                        </div>
                      </TransitionLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Cases */}
              <TransitionLink
                href="/cases"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-6 py-4 text-base font-bold transition-colors ${
                  pathname === '/cases' ? 'text-brand-orange' : 'text-dark hover:bg-dark/5'
                }`}
              >
                Cases
              </TransitionLink>
            </nav>

            {/* CTA Button */}
            <TransitionLink
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-button bg-brand-orange px-6 py-4 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
            >
              Solicitar proposta
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </TransitionLink>
          </div>
        </div>
      )}
    </header>
  )
}
