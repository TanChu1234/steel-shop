/** @type {import('next').NextConfig} */

// Since you're deploying to GitHub Pages, let's force the configuration
const repositoryName = 'steel-shop';

const nextConfig = {
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}`,
  output: 'export',
  trailingSlash: true,
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