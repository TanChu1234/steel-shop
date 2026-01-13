/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: process.env.VERCEL ? '' : (isProduction ? '/steel-shop' : ''),
  assetPrefix: process.env.VERCEL ? '' : (isProduction ? '/steel-shop' : ''),
  output: 'export',
  trailingSlash: true,
  allowedDevOrigins: ['192.168.52.101', 'http://192.168.52.101:3000'],
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.VERCEL ? '' : (isProduction ? '/steel-shop' : ''),
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