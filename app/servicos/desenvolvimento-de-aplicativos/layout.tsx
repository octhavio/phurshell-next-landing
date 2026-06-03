import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desenvolvimento de Aplicativos | Apps iOS e Android Sob Medida',
  description: 'A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android. Criamos soluções sob medida que transformam suas ideias em produtos digitais de alta performance.',
  alternates: { canonical: 'https://phurshell.com/servicos/desenvolvimento-de-aplicativos/' },
  openGraph: {
    title: 'Desenvolvimento de Aplicativos | Phurshell',
    description: 'A Phurshell é uma empresa especializada em desenvolvimento de aplicativos customizados para iOS e Android. Criamos soluções sob medida que transformam suas ideias em produtos digitais de alta performance.',
    url: 'https://phurshell.com/servicos/desenvolvimento-de-aplicativos',
    images: [
      {
        url: '/images/og-image.webp',
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
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
