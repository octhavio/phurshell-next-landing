import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fintech',
  description: 'A Phurshell desenvolve soluções digitais para fintechs: carteiras digitais, plataformas de crédito, open finance e apps financeiros com segurança e conformidade regulatória.',
  alternates: { canonical: 'https://phurshell.com/segmentos/fintech/' },
  openGraph: {
    title: 'Fintech | Phurshell',
    description: 'A Phurshell desenvolve soluções digitais para fintechs: carteiras digitais, plataformas de crédito, open finance e apps financeiros com segurança e conformidade regulatória.',
    url: 'https://phurshell.com/segmentos/fintech',
    images: [{ url: '/images/img-hero-fintech.webp', width: 1200, height: 630, alt: 'Fintech | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fintech | Phurshell',
    description: 'Soluções digitais para fintechs: carteiras digitais, crédito, open finance e apps financeiros.',
    images: ['/images/img-hero-fintech.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
