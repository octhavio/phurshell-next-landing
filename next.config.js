/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Only use static export in production build
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true,
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
