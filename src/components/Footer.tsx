import TransitionLink from './TransitionLink'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full rounded-button border border-white/10 bg-dark/95 px-6 py-16 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10">
          {/* Menu */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-wider text-white/30">Menu</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              <TransitionLink href="/sobre" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Sobre
              </TransitionLink>
              <TransitionLink href="/servicos" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Serviços
              </TransitionLink>
              <TransitionLink href="/cases" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Cases
              </TransitionLink>
              <TransitionLink href="/insights" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Insights
              </TransitionLink>
              <TransitionLink href="/contato" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Contato
              </TransitionLink>
              <TransitionLink href="/calculadora" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Quanto custa um app?
              </TransitionLink>
            </nav>
          </div>

          {/* Serviços */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-wider text-white/30">Serviços</p>
            <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: '/servicos/estrategia-de-produto-digital', icon: 'compass', label: 'Estratégia de Produto Digital' },
                { href: '/servicos/consultoria-para-startups', icon: 'chart-pie', label: 'Consultoria para Startups' },
                { href: '/servicos/design-de-produto-e-experiencia', icon: 'palette', label: 'Design de Produto & Experiência' },
                { href: '/servicos/desenvolvimento-de-aplicativos', icon: 'mobile', label: 'Desenvolvimento de Aplicativos' },
                { href: '/servicos/desenvolvimento-web-e-saas', icon: 'globe', label: 'Desenvolvimento Web & SaaS' },
                { href: '/servicos/engenharia-e-arquitetura-de-software', icon: 'wrench', label: 'Engenharia & Arquitetura de Software' },
                { href: '/servicos/cloud-e-devops', icon: 'cloud', label: 'Cloud & DevOps' },
                { href: '/servicos/qualidade-de-software-e-seguranca', icon: 'shield', label: 'Qualidade de Software & Segurança' },
                { href: '/servicos/inteligencia-artificial-e-automacao', icon: 'sparkles', label: 'Inteligência Artificial & Automação' },
                { href: '/servicos/blockchain-e-web3', icon: 'link', label: 'Blockchain & Web3' },
                { href: '/servicos/solucoes-digitais-para-negocios', icon: 'suitcase', label: 'Soluções Digitais para Negócios' },
                { href: '/servicos', icon: 'grid', label: 'Ver todos os serviços' },
              ].map((item) => (
                <TransitionLink key={item.href} href={item.href} className="flex items-center gap-2 text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                  <i className={`fa-jelly fa-${item.icon} text-sm`}></i>
                  {item.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Cases */}
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-wider text-white/30">Cases de Sucesso</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              <TransitionLink href="/cases/psiapp" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Psiapp
              </TransitionLink>
              <TransitionLink href="/cases/diag" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Diag
              </TransitionLink>
              <TransitionLink href="/cases/autoday" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Autoday
              </TransitionLink>
              <TransitionLink href="/cases" className="text-xl font-bold text-white/60 transition-colors hover:text-brand-orange">
                Ver todos os cases
              </TransitionLink>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <TransitionLink href="/" className="group">
              <img
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
              <a
                href="https://www.youtube.com/@octhavio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-smooth hover:text-brand-orange"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/phurshell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-smooth hover:text-brand-orange"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a
                href="https://dribbble.com/becampanha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-smooth hover:text-brand-orange"
                aria-label="Dribbble"
              >
                <i className="fa-brands fa-dribbble fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
