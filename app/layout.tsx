import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import PageTransition from '@/components/PageTransition'
import { TransitionProvider } from '@/components/TransitionContext'
import StructuredData from '@/components/StructuredData'

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
        url: '/images/og-image.png',
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
    images: ['/images/og-image.png'],
    creator: '@phurshell',
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    // Google Search Console: https://search.google.com/search-console
    // Adicione o código de verificação na variável NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),

    // Bing Webmaster Tools: https://www.bing.com/webmasters
    // Adicione o código de verificação na variável NEXT_PUBLIC_BING_SITE_VERIFICATION
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
      },
    }),
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
      <head>
        <StructuredData />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-dark antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF9RL69"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NF9RL69');
          `}
        </Script>
        {/* End Google Tag Manager */}

        <TransitionProvider>
          <PageTransition>
            <ConditionalLayout>{children}</ConditionalLayout>
          </PageTransition>
        </TransitionProvider>
      </body>
    </html>
  )
}
