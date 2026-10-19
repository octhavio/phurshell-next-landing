// Slugs dos posts que vieram do WordPress. O blog antigo publicava em /{slug}/;
// o site novo, em /insights/{slug}/. Lista explicita em vez de /:slug coringa,
// que capturaria /sobre, /contato, /calculadora etc.
const insightSlugs = require('./src/data/insight-slugs.json')

const insights = (slug) => `/insights/${slug}/`

// URLs do site antigo sem slug igual em /insights/ (Search Console, out/2026).
const manualRedirects = [
  ['/psiapp-revolucao-na-psicoterapia-digital-com-ia-e-seguranca-conectando-60-mil-pacientes-a-2-mil-psicologos', '/cases/psiapp/'],
  ['/parceria-phurshell-e-grupo-ambipar-transforma-gestao-de-incentivos-com-projeto-inovador-de-quotas-globalmente', '/cases/'],
  ['/quanto-custa-um-app', '/calculadora/'],
  ['/contato-ecommerce', '/contato/'],
  ['/empresa-criadora-de-app-com-ia-inovacao-e-inteligencia-em-aplicativos', '/servicos/desenvolvimento-de-aplicativos/'],
  ['/desenvolvimento-de-aplicativos-moveis-experiencia-em-android-e-ios', '/servicos/desenvolvimento-de-aplicativos/'],
  ['/desenvolvimento-de-aplicativos-low-code-rapidez-e-eficiencia-para-seu-projeto', insights('diferenca-entre-app-low-code-e-app-no-code-e-quando-usar-cada-um')],
  ['/empresa-de-desenvolvimento-de-app-no-code-solucoes-ageis-e-sem-programacao', insights('diferenca-entre-app-low-code-e-app-no-code-e-quando-usar-cada-um')],
  ['/desenvolvimento-de-software-multiplataforma-apps-para-web-android-e-ios', insights('desenvolvimento-de-software-multiplataforma-vantagens-e-desvantagens')],
  ['/passo-a-passo-para-desenvolver-um-app-para-android-e-ios-do-zero', insights('guia-completo-sobre-desenvolvimento-de-aplicativos-android-para-empresas')],
  ['/br/pages/services/:path*', '/servicos/'],
  ['/br/:path*', '/'],
  // Restos do WordPress
  ['/blog/:path*', '/insights/'],
  ['/author/:path*', '/insights/'],
  ['/category/:path*', '/insights/'],
  ['/tag/:path*', '/insights/'],
  ['/:y(\\d{4})/:path*', '/insights/'],
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'wp-api.phurshell.com' },
      { protocol: 'https', hostname: '*.wp.com' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
    ],
  },
  async redirects() {
    return [
      // Language redirect
      { source: '/en', destination: '/', permanent: false },
      { source: '/en/:path*', destination: '/:path*', permanent: false },
      // SEO Redirects - All legacy URLs to canonical service page
      { source: '/desenvolvimento-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-app', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-apps', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-mobile', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-aplicativo', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-aplicativo-mobile', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/fabrica-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/fabrica-de-apps', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/fabrica-de-software-brasil', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/empresa-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/empresa-de-desenvolvimento-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/empresa-de-desenvolvimento-de-app', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/criar-aplicativo', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/criar-app', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/criar-aplicativo-empresa', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/software-sob-medida', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-software-sob-medida', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-aplicativos-brasil', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      ...insightSlugs.map((slug) => ({ source: `/${slug}`, destination: insights(slug), permanent: true })),
      ...manualRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
    ]
  },
}

module.exports = nextConfig
