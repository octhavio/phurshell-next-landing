'use client'

import Link from 'next/link'
import Image from 'next-image-export-optimizer'
import TransitionLink from './TransitionLink'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full rounded-button border border-white/10 bg-dark/95 px-6 py-16 backdrop-blur-xl sm:px-8 lg:px-12">
        <div>
          {/* Brand */}
          <div>
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6">
              <TransitionLink
                href="/sobre"
                className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange"
              >
                Sobre
              </TransitionLink>
              <TransitionLink
                href="/servicos/desenvolvimento-de-apps"
                className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange"
              >
                Desenvolvimento Mobile
              </TransitionLink>
              <TransitionLink
                href="/cases"
                className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange"
              >
                Cases
              </TransitionLink>
              <TransitionLink
                href="/insights"
                className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange"
              >
                Insights
              </TransitionLink>
              <TransitionLink
                href="/contato"
                className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange"
              >
                Contato
              </TransitionLink>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <TransitionLink href="/" className="group">
              <Image
                src="/logos/img-navbar-logo-light.svg"
                alt="Phurshell"
                width={180}
                height={40}
                className="h-8 w-auto transition-smooth group-hover:opacity-80"
              />
            </TransitionLink>
            <p className="text-xl text-white/50">
              © 2015-{currentYear} Phurshell. Todos os direitos reservados.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com/company/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-smooth hover:text-brand-orange"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a
                href="https://instagram.com/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-smooth hover:text-brand-orange"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
