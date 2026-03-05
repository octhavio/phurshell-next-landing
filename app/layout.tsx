import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { TransitionProvider } from '@/components/TransitionContext'

// Font Awesome PRO - Kit completo
import '@awesome.me/kit-3332d80fe0/icons/css/all.css'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Phurshell - Desenvolvimento de Apps Sob Medida',
    template: '%s | Phurshell',
  },
  description:
    'Somos uma fábrica de aplicativos especializada em desenvolvimento mobile e web sob medida. Transformamos ideias em produtos digitais de alta performance.',
  keywords: [
    'desenvolvimento de apps',
    'desenvolvimento mobile',
    'desenvolvimento web',
    'aplicativos sob medida',
    'software house',
    'React Native',
    'Next.js',
    'desenvolvimento de software',
  ],
  authors: [{ name: 'Phurshell' }],
  creator: 'Phurshell',
  publisher: 'Phurshell',
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Phurshell',
    title: 'Phurshell - Desenvolvimento de Apps Sob Medida',
    description:
      'Somos uma fábrica de aplicativos especializada em desenvolvimento mobile e web sob medida. Transformamos ideias em produtos digitais de alta performance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Phurshell - Desenvolvimento de Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phurshell - Desenvolvimento de Apps Sob Medida',
    description:
      'Somos uma fábrica de aplicativos especializada em desenvolvimento mobile e web sob medida.',
    images: ['/og-image.png'],
    creator: '@phurshell',
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    // Adicionar quando tiver as contas configuradas
    google: 'seu-codigo-google-search-console',
    // yandex: 'codigo',
    // bing: 'codigo',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-dark antialiased">
        <TransitionProvider>
          <PageTransition>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </PageTransition>
        </TransitionProvider>
      </body>
    </html>
  )
}
