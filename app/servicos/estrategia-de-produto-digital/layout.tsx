import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estratégia de Produto Digital',
  description: 'A Phurshell ajuda você a transformar sua ideia em um produto digital com direção clara, validação de mercado e um plano de execução sólido.',
  openGraph: {
    title: 'Estratégia de Produto Digital | Phurshell',
    description: 'A Phurshell ajuda você a transformar sua ideia em um produto digital com direção clara, validação de mercado e um plano de execução sólido.',
    url: 'https://phurshell.com/servicos/estrategia-de-produto-digital',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Estratégia de Produto Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estratégia de Produto Digital | Phurshell',
    description: 'A Phurshell ajuda você a transformar sua ideia em um produto digital com direção clara, validação de mercado e um plano de execução sólido.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
