'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next-image-export-optimizer'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import TransitionLink from './TransitionLink'
import NavDropdown from './NavDropdown'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [servicosOpen, setServicosOpen] = useState(false)
  const [shouldCollapse, setShouldCollapse] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const closeMobileMenu = () => {
    setIsExiting(true)
    // Aguarda animação terminar antes de realmente fechar
    setTimeout(() => {
      setMobileMenuOpen(false)
      setIsExiting(false)
    }, 900) // Total: cascata 450ms + delay 450ms + fundo 400ms = ~900ms
  }

  useEffect(() => {
    const checkSpacing = () => {
      if (!headerRef.current || !logoRef.current || !navRef.current || !ctaRef.current) return

      const headerRect = headerRef.current.getBoundingClientRect()
      const logoRect = logoRef.current.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      const ctaRect = ctaRef.current.getBoundingClientRect()

      // Calcula o espaço disponível
      const spaceBeforeNav = navRect.left - logoRect.right
      const spaceAfterNav = ctaRect.left - navRect.right

      // Se qualquer espaço for menor que 20px, colapsa
      if (spaceBeforeNav < 20 || spaceAfterNav < 20) {
        setShouldCollapse(true)
      } else {
        setShouldCollapse(false)
      }
    }

    checkSpacing()
    window.addEventListener('resize', checkSpacing)

    return () => window.removeEventListener('resize', checkSpacing)
  }, [])

  const servicosDropdown = [
    {
      label: 'Desenvolvimento de Apps',
      href: '/servicos/desenvolvimento-de-apps',
      description: 'Apps nativos e cross-platform para iOS e Android',
      icon: 'mobile',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div
        ref={headerRef}
        className="flex h-20 w-full items-center justify-between rounded-button border border-dark/10 bg-white/80 px-6 backdrop-blur-xl sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div ref={logoRef}>
          {pathname === '/' ? (
            <button
              onClick={() => window.location.reload()}
              className="group flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="/logos/img-navbar-logo-dark.svg"
                alt="Phurshell"
                width={180}
                height={40}
                className="h-8 w-auto transition-smooth group-hover:opacity-80"
                priority
              />
            </button>
          ) : (
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
          )}
        </div>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={`items-center space-x-2 ${shouldCollapse ? 'hidden' : 'hidden md:flex'}`}
        >
          <NavDropdown
            label="Serviços"
            href="/servicos"
            items={servicosDropdown}
            isActive={pathname.startsWith('/servicos')}
          />

          <TransitionLink
            href="/insights"
            className={`rounded-button px-4 py-2 text-base font-bold transition-all ${
              pathname.startsWith('/insights')
                ? 'bg-brand-orange/10 text-brand-orange'
                : 'text-dark/70 hover:bg-brand-orange/10 hover:text-brand-orange'
            }`}
          >
            Insights
          </TransitionLink>
        </nav>

        {/* CTA Button */}
        <div ref={ctaRef} className="flex items-center space-x-4">
          <TransitionLink
            href="/contato"
            className={`group items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light ${
              shouldCollapse ? 'hidden' : 'hidden md:inline-flex'
            }`}
          >
            Solicitar proposta
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </TransitionLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : setMobileMenuOpen(true))}
            className={`inline-flex items-center justify-center rounded-button p-2 hover:bg-white/5 ${
              shouldCollapse ? '' : 'md:hidden'
            }`}
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark text-2xl text-dark"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl text-dark"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              delay: isExiting ? 0.45 : 0, // Na saída, espera a cascata (300ms + 150ms)
            }}
            className={`fixed inset-0 z-50 bg-white ${shouldCollapse ? '' : 'md:hidden'}`}
          >
            {/* Mobile Header - Floating Card */}
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between rounded-button border border-dark/10 bg-white/80 px-6 backdrop-blur-xl sm:px-8 lg:px-12">
                <TransitionLink href="/" className="flex items-center" onClick={closeMobileMenu}>
                  <Image
                    src="/logos/img-navbar-logo-dark.svg"
                    alt="Phurshell"
                    width={180}
                    height={40}
                    className="h-8 w-auto"
                  />
                </TransitionLink>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center rounded-button p-2 hover:bg-dark/5"
                  aria-label="Fechar menu"
                >
                  <i className="fa-solid fa-xmark text-2xl text-dark"></i>
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <motion.div
              initial="hidden"
              animate={isExiting ? 'exit' : 'visible'}
              exit="exit"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.4, // Espera o fundo descer completamente
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.15,
                    staggerDirection: -1,
                    delayChildren: 0, // Começa imediatamente na saída
                  },
                },
              }}
              className="overflow-y-auto px-6 pt-3 pb-6"
            >
              <motion.nav
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
                }}
                className="rounded-button border border-dark/10 bg-white shadow-sm"
              >
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
                          onClick={closeMobileMenu}
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

                {/* Insights */}
                <TransitionLink
                  href="/insights"
                  onClick={closeMobileMenu}
                  className={`block border-b border-dark/10 px-6 py-4 text-base font-bold transition-colors ${
                    pathname.startsWith('/insights') ? 'text-brand-orange' : 'text-dark hover:bg-dark/5'
                  }`}
                >
                  Insights
                </TransitionLink>
              </motion.nav>

              {/* CTA Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
                }}
              >
                <TransitionLink
                  href="/contato"
                  onClick={closeMobileMenu}
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-button bg-brand-orange px-6 py-4 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
                >
                  Solicitar proposta
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </TransitionLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
