/** @type {import('next').NextConfig} */

// Since you're deploying to GitHub Pages, let's force the configuration
const repositoryName = 'steel-shop';

console.log('=== Next.js Config Debug ===');
console.log('Repository name:', repositoryName);
console.log('BasePath:', `/${repositoryName}`);
console.log('AssetPrefix:', `/${repositoryName}`);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);
console.log('============================');

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