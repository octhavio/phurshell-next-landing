import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quanto Custa um App | Calculadora de Custo',
  description: 'Estime o custo do seu aplicativo com a calculadora da Phurshell. Responda algumas perguntas sobre o projeto e receba uma estimativa em minutos.',
  alternates: { canonical: 'https://phurshell.com/calculadora/' },
  openGraph: {
    type: 'website',
    title: 'Quanto custa um app? | Phurshell',
    description: 'Use a calculadora da Phurshell para estimar o custo do seu aplicativo. Responda algumas perguntas sobre seu projeto e receba uma estimativa personalizada em minutos.',
    url: 'https://phurshell.com/calculadora',
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Calculadora de custo de app | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quanto custa um app? | Phurshell',
    description: 'Estime o custo do seu aplicativo com a calculadora da Phurshell.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
