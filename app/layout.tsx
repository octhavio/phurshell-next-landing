import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Script from 'next/script'
import '@awesome.me/kit-3332d80fe0/icons/css/all.css'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import StructuredData from '@/components/StructuredData'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://phurshell.com'),
  title: {
    default: 'Phurshell | Software House em São Paulo: Apps e Sistemas Sob Medida',
    template: '%s | Phurshell',
  },
  description: 'Software house em São Paulo com 10 anos e +100 produtos digitais lançados. Apps, sistemas web e SaaS sob medida, da ideia ao produto lucrativo.',
  keywords: ['software house', 'desenvolvimento de aplicativos', 'fabrica de apps', 'desenvolvimento mobile', 'iOS', 'Android', 'React Native', 'Flutter', 'startup', 'MVP'],
  authors: [{ name: 'Phurshell' }],
  creator: 'Phurshell',
  publisher: 'Phurshell',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://phurshell.com',
    siteName: 'Phurshell',
    title: 'Phurshell | Software House em São Paulo: Apps e Sistemas Sob Medida',
    description: 'Software house em São Paulo com 10 anos e +100 produtos digitais lançados. Apps, sistemas web e SaaS sob medida, da ideia ao produto lucrativo.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Phurshell | Software House em São Paulo: Apps e Sistemas Sob Medida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phurshell | Software House em São Paulo: Apps e Sistemas Sob Medida',
    description: 'Software house em São Paulo com 10 anos e +100 produtos digitais lançados. Apps, sistemas web e SaaS sob medida, da ideia ao produto lucrativo.',
    images: ['/og-image.webp'],
  },
  verification: {
    google: 'sCu8UBfKJNVpH_qibZSfDjN1_7qPDMvGRz-JJOzmh7g',
    other: {
      'msvalidate.01': 'E46F2E97AFBA3E9CB5485CA23F5D8DD8',
    },
  },
  alternates: {
    canonical: 'https://phurshell.com/',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NF9RL69');
          `}
        </Script>

        {/* OpenAI Pixel */}
        <Script id="openai-pixel" strategy="afterInteractive">
          {`
            !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};
            q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;
            var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)
            }(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
            oaiq("init",{pixelId:"Rnsw4MXAY9XimgtaSEYAf8"});
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF9RL69"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <StructuredData />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
