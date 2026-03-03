/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configuração para imagens do WordPress quando integrar
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'seu-wordpress-url.com', // Substituir quando tiver o domínio
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
