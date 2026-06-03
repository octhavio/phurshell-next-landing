import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases | Projetos de Apps Desenvolvidos do Zero',
  description: 'Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até o lançamento e crescimento no mercado.',
  alternates: { canonical: 'https://phurshell.com/cases/' },
  openGraph: {
    title: 'Cases | Phurshell',
    description: 'Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até o lançamento e crescimento no mercado.',
    url: 'https://phurshell.com/cases',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'Phurshell - Cases' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cases | Phurshell',
    description: 'Conheça os projetos que desenvolvemos do zero até o lançamento no mercado.',
    images: ['/og-image.webp'],
  },
}

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
