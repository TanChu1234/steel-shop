/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProduction ? '/steel-shop' : '',
  assetPrefix: isProduction ? '/steel-shop' : '',
  output: 'export',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? '/steel-shop' : '',
  },
  images: {
    // Disable optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 