/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'steel-shop';

const nextConfig = {
  basePath: isProduction && isGitHubPages ? `/${repositoryName}` : '',
  assetPrefix: isProduction && isGitHubPages ? `/${repositoryName}` : '',
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