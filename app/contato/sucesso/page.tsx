import type { Metadata } from 'next'
import TransitionLink from '../../../src/components/TransitionLink'
import BrandVideoPlayer from '../../../src/components/BrandVideoPlayer'

export const metadata: Metadata = {
  title: 'Contato Enviado',
  description: 'Sua solicitação de contato foi enviada com sucesso. Entraremos em contato em breve.',
  robots: { index: false, follow: false },
}

const VIDEO_BASE = 'https://phurshell.s3-sa-east-1.amazonaws.com/videos'

export default function ContatoSucesso() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-white via-brand-orange/5 to-white px-6 py-24">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-brand-orange/10">
          <i className="fa-solid fa-check text-5xl text-brand-orange"></i>
        </div>

        <h1 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
          Solicitação de contato enviada com sucesso
        </h1>

        <div className="mb-14 flex items-center justify-center gap-3 text-xl text-dark/70">
          <i className="fa-brands fa-whatsapp text-2xl text-[#25D366]"></i>
          <span>Fique de olho no seu WhatsApp</span>
        </div>

        <div className="mb-14">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-orange">Enquanto isso</p>
          <h2 className="mb-6 text-2xl font-black text-dark sm:text-3xl">Veja em 1 minuto por que a Phurshell</h2>
          <BrandVideoPlayer
            src={`${VIDEO_BASE}/por-que-a-phurshell.mp4`}
            poster={`${VIDEO_BASE}/por-que-a-phurshell-poster.jpg`}
            title="Por que a Phurshell?"
            trackingName="por-que-a-phurshell"
          />
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
