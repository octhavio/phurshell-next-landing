import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthtech',
  description: 'A Phurshell desenvolve soluções digitais para healthtech: prontuário eletrônico, telemedicina, agendamento inteligente e plataformas de saúde com conformidade LGPD e CFM.',
  alternates: { canonical: 'https://phurshell.com/segmentos/healthtech/' },
  openGraph: {
    title: 'Healthtech | Phurshell',
    description: 'A Phurshell desenvolve soluções digitais para healthtech: prontuário eletrônico, telemedicina, agendamento inteligente e plataformas de saúde com conformidade LGPD e CFM.',
    url: 'https://phurshell.com/segmentos/healthtech',
    images: [{ url: '/images/img-hero-healthctech.webp', width: 1200, height: 630, alt: 'Healthtech | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthtech | Phurshell',
    description: 'Soluções digitais para saúde: prontuário eletrônico, telemedicina e plataformas com conformidade regulatória.',
    images: ['/images/img-hero-healthctech.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
