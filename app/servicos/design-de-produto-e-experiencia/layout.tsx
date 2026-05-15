import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design de Produto & Experiência',
  description: 'A Phurshell cria interfaces bonitas e funcionais que encantam usuários e convertem visitantes em clientes.',
  openGraph: {
    title: 'Design de Produto & Experiência | Phurshell',
    description: 'A Phurshell cria interfaces bonitas e funcionais que encantam usuários e convertem visitantes em clientes.',
    url: 'https://phurshell.com/servicos/design-de-produto-e-experiencia',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Design de Produto & Experiência',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design de Produto & Experiência | Phurshell',
    description: 'A Phurshell cria interfaces bonitas e funcionais que encantam usuários e convertem visitantes em clientes.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
