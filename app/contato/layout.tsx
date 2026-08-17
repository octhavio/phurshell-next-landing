import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Solicite um Orçamento para seu App',
  description: 'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia. Desenvolvimento de apps mobile, web e soluções customizadas.',
  alternates: { canonical: 'https://phurshell.com/contato/' },
  openGraph: {
    type: 'website',
    title: 'Contato | Phurshell',
    description: 'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia.',
    url: 'https://phurshell.com/contato',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'Phurshell - Contato' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | Phurshell',
    description: 'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia.',
    images: ['/og-image.webp'],
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
