import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desenvolvimento Web & SaaS Sob Medida',
  description: 'A Phurshell é especializada em desenvolvimento web e plataformas SaaS, criando soluções escaláveis e robustas com as melhores tecnologias.',
  alternates: { canonical: 'https://phurshell.com/servicos/desenvolvimento-web-e-saas/' },
  openGraph: {
    type: 'website',
    title: 'Desenvolvimento Web & SaaS | Phurshell',
    description: 'A Phurshell é uma empresa especializada em desenvolvimento web e plataformas SaaS. Criamos soluções escaláveis e robustas utilizando as melhores tecnologias do mercado.',
    url: 'https://phurshell.com/servicos/desenvolvimento-web-e-saas',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Desenvolvimento Web & SaaS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvimento Web & SaaS | Phurshell',
    description: 'A Phurshell é uma empresa especializada em desenvolvimento web e plataformas SaaS.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
