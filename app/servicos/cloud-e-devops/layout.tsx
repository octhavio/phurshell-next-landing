import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud & DevOps',
  description: 'A Phurshell fornece infraestrutura moderna e automatizada para que seus produtos rodem com alta disponibilidade e entregas contínuas.',
  openGraph: {
    title: 'Cloud & DevOps | Phurshell',
    description: 'A Phurshell fornece infraestrutura moderna e automatizada para que seus produtos rodem com alta disponibilidade e entregas contínuas.',
    url: 'https://phurshell.com/servicos/cloud-e-devops',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Cloud & DevOps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevOps | Phurshell',
    description: 'A Phurshell fornece infraestrutura moderna e automatizada para que seus produtos rodem com alta disponibilidade e entregas contínuas.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
