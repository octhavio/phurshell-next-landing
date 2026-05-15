import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soluções Digitais para Negócios',
  description: 'A Phurshell cria sistemas e ferramentas que modernizam operações, melhoram a gestão e impulsionam resultados do seu negócio.',
  openGraph: {
    title: 'Soluções Digitais para Negócios | Phurshell',
    description: 'A Phurshell cria sistemas e ferramentas que modernizam operações, melhoram a gestão e impulsionam resultados do seu negócio.',
    url: 'https://phurshell.com/servicos/solucoes-digitais-para-negocios',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Soluções Digitais para Negócios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluções Digitais para Negócios | Phurshell',
    description: 'A Phurshell cria sistemas e ferramentas que modernizam operações, melhoram a gestão e impulsionam resultados do seu negócio.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
