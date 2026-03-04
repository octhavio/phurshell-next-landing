import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desenvolvimento de Apps Mobile iOS e Android | Phurshell',
  description: 'Desenvolvimento de aplicativos customizados para iOS e Android. Soluções sob medida com foco em experiência do usuário e excelência técnica. Mais de 100 apps desenvolvidos em 10 anos.',
  keywords: [
    'desenvolvimento mobile',
    'apps iOS',
    'apps Android',
    'React Native',
    'Flutter',
    'desenvolvimento de aplicativos',
    'desenvolvimento app',
    'criar aplicativo',
    'empresa desenvolvimento mobile',
  ],
  openGraph: {
    title: 'Desenvolvimento de Apps Mobile iOS e Android | Phurshell',
    description:
      'Criamos aplicativos mobile de alta performance para iOS e Android. Mais de 100 apps desenvolvidos em 10 anos de experiência.',
    url: '/servicos/mobile-app-development',
    siteName: 'Phurshell',
    images: [
      {
        url: '/img-hero.png',
        width: 1200,
        height: 630,
        alt: 'Desenvolvimento de aplicativos mobile pela Phurshell',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvimento de Apps Mobile iOS e Android | Phurshell',
    description:
      'Criamos aplicativos mobile de alta performance para iOS e Android. Mais de 100 apps desenvolvidos.',
    images: ['/img-hero.png'],
  },
  alternates: {
    canonical: '/servicos/mobile-app-development',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
