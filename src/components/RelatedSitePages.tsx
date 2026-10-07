import TransitionLink from './TransitionLink'
import { RelatedSitePage } from '../lib/wordpress'

const TYPE_LABEL: Record<RelatedSitePage['type'], { label: string; icon: string }> = {
  servico: { label: 'Serviço', icon: 'fa-gear' },
  segmento: { label: 'Segmento', icon: 'fa-layer-group' },
  case: { label: 'Case', icon: 'fa-star' },
}

export default function RelatedSitePages({ pages }: { pages: RelatedSitePage[] }) {
  if (pages.length === 0) return null

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
        <h2 className="mb-8 text-4xl font-black text-dark sm:text-5xl">Como a Phurshell pode ajudar</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => {
            const type = TYPE_LABEL[page.type] ?? TYPE_LABEL.servico
            return (
              <TransitionLink
                key={page.href}
                href={page.href}
                className="group flex flex-col rounded-button border border-dark/10 bg-white p-6 transition-smooth hover:border-brand-orange"
              >
                <span className="mb-4 inline-flex items-center gap-2 self-start rounded-button bg-brand-orange/10 px-3 py-1 text-sm font-bold text-brand-orange">
                  <i className={`fa-solid ${type.icon}`}></i>
                  {type.label}
                </span>
                <h3 className="mb-2 text-2xl font-black text-dark">{page.title}</h3>
                <p className="mb-6 flex-1 text-dark/70">{page.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-black text-brand-orange">
                  Conhecer
                  <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </span>
              </TransitionLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
