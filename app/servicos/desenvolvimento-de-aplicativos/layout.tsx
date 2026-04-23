import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desenvolvimento de Aplicativos',
  description: 'A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android. Criamos soluções sob medida que transformam suas ideias em produtos digitais de alta performance.',
  openGraph: {
    title: 'Desenvolvimento de Aplicativos | Phurshell',
    description: 'A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android. Criamos soluções sob medida que transformam suas ideias em produtos digitais de alta performance.',
    url: 'https://phurshell.com/servicos/desenvolvimento-de-aplicativos',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Desenvolvimento de Aplicativos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvimento de Aplicativos | Phurshell',
    description: 'A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android.',
    images: ['/images/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
