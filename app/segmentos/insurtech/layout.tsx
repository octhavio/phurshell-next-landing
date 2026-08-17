import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurtech | Plataformas Digitais para Seguros',
  description: 'A Phurshell desenvolve soluções para insurtechs: cotação online, gestão de apólices, sinistros digitais e plataformas de seguros modernas.',
  alternates: { canonical: 'https://phurshell.com/segmentos/insurtech/' },
  openGraph: {
    type: 'website',
    title: 'Insurtech | Phurshell',
    description: 'A Phurshell desenvolve soluções digitais para insurtechs: cotação online, gestão de apólices, sinistros digitais e plataformas de seguros com experiência moderna.',
    url: 'https://phurshell.com/segmentos/insurtech',
    images: [{ url: '/images/img-hero-insurtech.webp', width: 1200, height: 630, alt: 'Insurtech | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurtech | Phurshell',
    description: 'Soluções digitais para insurtechs: cotação online, apólices, sinistros e plataformas de seguros.',
    images: ['/images/img-hero-insurtech.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
