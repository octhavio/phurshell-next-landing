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
      // SEO Redirects - All legacy URLs to canonical service page
      { source: '/desenvolvimento-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-app', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-apps', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-mobile', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-aplicativo', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-aplicativo-mobile', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/fabrica-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/fabrica-de-apps', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/empresa-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/empresa-de-desenvolvimento-de-aplicativos', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/empresa-de-desenvolvimento-de-app', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/criar-aplicativo', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/criar-app', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/criar-aplicativo-empresa', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/software-sob-medida', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-software-sob-medida', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
      { source: '/desenvolvimento-de-aplicativos-brasil', destination: '/servicos/desenvolvimento-de-aplicativos', permanent: true },
    ]
  },
}

module.exports = nextConfig
