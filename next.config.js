/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  basePath: isVercel ? '' : (isProduction ? '/steel-shop' : ''),
  assetPrefix: isVercel ? '' : (isProduction ? '/steel-shop' : ''),
  // Only use static export for GitHub Pages, not for Vercel
  output: isVercel ? undefined : 'export',
  trailingSlash: true,
  allowedDevOrigins: ['192.168.52.101', 'http://192.168.52.101:3000'],
  env: {
    NEXT_PUBLIC_BASE_PATH: isVercel ? '' : (isProduction ? '/steel-shop' : ''),
  },
  images: {
    // Disable optimization for static export (GitHub Pages)
    unoptimized: !isVercel,
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