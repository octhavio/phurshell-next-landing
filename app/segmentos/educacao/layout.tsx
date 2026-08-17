import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educação | Apps e Plataformas de Ensino',
  description: 'A Phurshell desenvolve soluções edtech: plataformas LMS, apps de aprendizado, gamificação e gestão escolar que rodam em qualquer dispositivo.',
  alternates: { canonical: 'https://phurshell.com/segmentos/educacao/' },
  openGraph: {
    type: 'website',
    title: 'Educação | Phurshell',
    description: 'A Phurshell desenvolve soluções edtech: plataformas LMS, apps de aprendizado, gamificação, gestão escolar e experiências educacionais que funcionam em qualquer dispositivo.',
    url: 'https://phurshell.com/segmentos/educacao',
    images: [{ url: '/images/img-hero-educacao.webp', width: 1200, height: 630, alt: 'Educação | Phurshell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educação | Phurshell',
    description: 'Soluções edtech: LMS, apps de aprendizado, gamificação e gestão escolar.',
    images: ['/images/img-hero-educacao.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
