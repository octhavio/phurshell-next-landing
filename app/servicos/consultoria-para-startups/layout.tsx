import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consultoria para Startups',
  description: 'A Phurshell ajuda startups a estruturar negócios sustentáveis, preparados para crescer e captar investimento.',
  openGraph: {
    title: 'Consultoria para Startups | Phurshell',
    description: 'A Phurshell ajuda startups a estruturar negócios sustentáveis, preparados para crescer e captar investimento.',
    url: 'https://phurshell.com/servicos/consultoria-para-startups',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Consultoria para Startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoria para Startups | Phurshell',
    description: 'A Phurshell ajuda startups a estruturar negócios sustentáveis, preparados para crescer e captar investimento.',
    images: ['/images/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
