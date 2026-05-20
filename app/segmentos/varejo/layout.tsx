import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Varejo',
  description: 'A Phurshell desenvolve soluções digitais para o varejo: e-commerce, apps de compra, loyalty, PDV móvel e plataformas omnichannel que convertem e fidelizam clientes.',
  alternates: { canonical: 'https://phurshell.com/segmentos/varejo/' },
  openGraph: {
    title: 'Varejo | Phurshell',
    description: 'A Phurshell desenvolve soluções digitais para o varejo: e-commerce, apps de compra, loyalty, PDV móvel e plataformas omnichannel que convertem e fidelizam clientes.',
    url: 'https://phurshell.com/segmentos/varejo',
    images: [{ url: '/images/img-hero-varejo.webp', width: 1200, height: 630, alt: 'Varejo | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varejo | Phurshell',
    description: 'Soluções digitais para varejo: e-commerce, apps de compra, loyalty e plataformas omnichannel.',
    images: ['/images/img-hero-varejo.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
