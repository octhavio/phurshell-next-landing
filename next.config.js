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
}

module.exports = nextConfig
