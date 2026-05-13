import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desenvolvimento Web & SaaS',
  description: 'A Phurshell é uma empresa especializada em desenvolvimento web e plataformas SaaS. Criamos soluções escaláveis e robustas utilizando as melhores tecnologias do mercado.',
  openGraph: {
    title: 'Desenvolvimento Web & SaaS | Phurshell',
    description: 'A Phurshell é uma empresa especializada em desenvolvimento web e plataformas SaaS. Criamos soluções escaláveis e robustas utilizando as melhores tecnologias do mercado.',
    url: 'https://phurshell.com/servicos/desenvolvimento-web-e-saas',
    images: [
      {
        url: '/images/og-image.png',
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
    images: ['/images/og-image.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
