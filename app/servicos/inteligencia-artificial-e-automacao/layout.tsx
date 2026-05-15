import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inteligência Artificial & Automação',
  description: 'A Phurshell cria soluções inteligentes que automatizam processos, geram insights e criam experiências personalizadas para seus usuários.',
  openGraph: {
    title: 'Inteligência Artificial & Automação | Phurshell',
    description: 'A Phurshell cria soluções inteligentes que automatizam processos, geram insights e criam experiências personalizadas para seus usuários.',
    url: 'https://phurshell.com/servicos/inteligencia-artificial-e-automacao',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Inteligência Artificial & Automação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inteligência Artificial & Automação | Phurshell',
    description: 'A Phurshell cria soluções inteligentes que automatizam processos, geram insights e criam experiências personalizadas para seus usuários.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
