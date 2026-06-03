import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social | Plataformas e Redes Sociais Nichadas',
  description: 'A Phurshell desenvolve plataformas sociais e de comunidade: redes sociais nichadas, apps de conexão, fóruns e experiências que engajam e retêm usuários.',
  alternates: { canonical: 'https://phurshell.com/segmentos/social/' },
  openGraph: {
    title: 'Social | Phurshell',
    description: 'A Phurshell desenvolve plataformas sociais e de comunidade: redes sociais nichadas, apps de conexão, fóruns e experiências que engajam e retêm usuários.',
    url: 'https://phurshell.com/segmentos/social',
    images: [{ url: '/images/img-hero-social.webp', width: 1200, height: 630, alt: 'Social | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social | Phurshell',
    description: 'Plataformas sociais e de comunidade: redes nichadas, apps de conexão e experiências que engajam.',
    images: ['/images/img-hero-social.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
