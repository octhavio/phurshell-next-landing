'use client'

import Link from 'next/link'
import TransitionLink from './TransitionLink'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark/10 bg-gray-50">
      <div className="container mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <TransitionLink href="/" className="inline-block">
              <div className="mb-4 text-2xl font-black tracking-tight text-dark">phurshell</div>
            </TransitionLink>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-dark/60">
              Fábrica de aplicativos especializada em desenvolvimento mobile e web sob medida.
              Transformamos ideias em produtos digitais de alta performance.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-button border border-dark/10 bg-dark/5 text-dark/60 transition-smooth hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://github.com/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-button border border-dark/10 bg-dark/5 text-dark/60 transition-smooth hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a
                href="https://instagram.com/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-button border border-dark/10 bg-dark/5 text-dark/60 transition-smooth hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-black tracking-wider text-dark">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <TransitionLink
                  href="/sobre"
                  className="text-sm text-dark/60 transition-colors hover:text-brand-orange"
                >
                  Sobre Nós
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/servicos"
                  className="text-sm text-dark/60 transition-colors hover:text-brand-orange"
                >
                  Serviços
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/cases"
                  className="text-sm text-dark/60 transition-colors hover:text-brand-orange"
                >
                  Cases
                </TransitionLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-black tracking-wider text-dark">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@phurshell.com"
                  className="text-sm text-dark/60 transition-colors hover:text-brand-orange"
                >
                  contato@phurshell.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="text-sm text-dark/60 transition-colors hover:text-brand-orange"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-dark/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-dark/50">
              © {currentYear} Phurshell. Todos os direitos reservados.
            </p>
            <p className="text-xs text-dark/40">
              Desenvolvido com tecnologia de ponta
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
