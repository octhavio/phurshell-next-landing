import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blockchain & Web3',
  description: 'A Phurshell desenvolve soluções descentralizadas e contratos inteligentes para transparência e segurança nas transações.',
  openGraph: {
    title: 'Blockchain & Web3 | Phurshell',
    description: 'A Phurshell desenvolve soluções descentralizadas e contratos inteligentes para transparência e segurança nas transações.',
    url: 'https://phurshell.com/servicos/blockchain-e-web3',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Blockchain & Web3',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain & Web3 | Phurshell',
    description: 'A Phurshell desenvolve soluções descentralizadas e contratos inteligentes para transparência e segurança nas transações.',
    images: ['/images/og-image.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
