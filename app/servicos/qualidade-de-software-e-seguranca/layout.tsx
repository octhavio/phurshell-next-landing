import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qualidade de Software & Segurança',
  description: 'A Phurshell garante que seu produto funcione com excelência, segurança e confiabilidade em qualquer cenário.',
  openGraph: {
    title: 'Qualidade de Software & Segurança | Phurshell',
    description: 'A Phurshell garante que seu produto funcione com excelência, segurança e confiabilidade em qualquer cenário.',
    url: 'https://phurshell.com/servicos/qualidade-de-software-e-seguranca',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Qualidade de Software & Segurança',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qualidade de Software & Segurança | Phurshell',
    description: 'A Phurshell garante que seu produto funcione com excelência, segurança e confiabilidade em qualquer cenário.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
