import type { Metadata } from 'next'
import TransitionLink from '../../../src/components/TransitionLink'

export const metadata: Metadata = {
  title: 'Contato Enviado',
  description: 'Sua solicitação de contato foi enviada com sucesso. Entraremos em contato em breve.',
}

export default function ContatoSucesso() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-white via-brand-orange/5 to-white px-6 py-24">
      <div className="max-w-2xl text-center">
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-brand-orange/10">
          <i className="fa-solid fa-check text-5xl text-brand-orange"></i>
        </div>

        <h1 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
          Solicitação de contato enviada com sucesso
        </h1>

        <div className="mb-12 flex items-center justify-center gap-3 text-xl text-dark/70">
          <i className="fa-brands fa-whatsapp text-2xl text-[#25D366]"></i>
          <span>Fique de olho no seu WhatsApp</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <TransitionLink
            href="/"
            className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 font-bold text-white shadow-lg transition-smooth hover:bg-brand-orange-light"
          >
            <i className="fa-solid fa-home"></i>
            Voltar ao início
          </TransitionLink>

          <TransitionLink
            href="/insights"
            className="group inline-flex items-center gap-2 rounded-button border border-dark/10 bg-white px-8 py-4 font-bold text-dark shadow-lg transition-smooth hover:border-brand-orange hover:text-brand-orange"
          >
            Ver nossos insights
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}
