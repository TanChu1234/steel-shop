/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'steel-shop';

// Debug logging
console.log('Environment variables:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);
console.log('GITHUB_REPOSITORY:', process.env.GITHUB_REPOSITORY);
console.log('Repository name:', repositoryName);
console.log('Is GitHub Pages:', isProduction && isGitHubPages);

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

console.log('Final config:', {
  basePath: nextConfig.basePath,
  assetPrefix: nextConfig.assetPrefix
});

module.exports = nextConfig

module.exports = nextConfig 