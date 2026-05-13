import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engenharia & Arquitetura de Software',
  description: 'A Phurshell constrói a base técnica sólida que seus produtos precisam para escalar com segurança e performance.',
  openGraph: {
    title: 'Engenharia & Arquitetura de Software | Phurshell',
    description: 'A Phurshell constrói a base técnica sólida que seus produtos precisam para escalar com segurança e performance.',
    url: 'https://phurshell.com/servicos/engenharia-e-arquitetura-de-software',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Engenharia & Arquitetura de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engenharia & Arquitetura de Software | Phurshell',
    description: 'A Phurshell constrói a base técnica sólida que seus produtos precisam para escalar com segurança e performance.',
    images: ['/images/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
