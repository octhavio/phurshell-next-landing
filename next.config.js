/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['next-image-export-optimizer'],
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    unoptimized: false,
  },
  env: {
    storePicturesInWEBP: 'true',
    generateAndUseBlurImages: 'true',
    // Desabilita placeholder para imagens pequenas
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
  },
  // Redirecionamentos permanentes (301) para SEO
  async redirects() {
    return [
      // Redirecionamentos para a página principal de desenvolvimento de apps
      {
        source: '/desenvolvimento-de-aplicativos',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-de-app',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-de-apps',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-mobile',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-de-aplicativo',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-de-aplicativo-mobile',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/fabrica-de-aplicativos',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/fabrica-de-apps',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/empresa-de-aplicativos',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/empresa-de-desenvolvimento-de-aplicativos',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/empresa-de-desenvolvimento-de-app',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/criar-aplicativo',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/criar-app',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/criar-aplicativo-empresa',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/software-sob-medida',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-de-software-sob-medida',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
      {
        source: '/desenvolvimento-de-aplicativos-brasil',
        destination: '/servicos/desenvolvimento-de-apps',
        permanent: true,
      },
    ]
  },
  // Cache headers para produção
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
