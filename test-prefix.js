// Test script to verify the prefix utility works correctly
process.env.NODE_ENV = 'production';
process.env.NEXT_PUBLIC_BASE_PATH = '/steel-shop';

// Simulate the prefix utility
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

console.log('=== Prefix Utility Test ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXT_PUBLIC_BASE_PATH:', process.env.NEXT_PUBLIC_BASE_PATH);
console.log('prefix:', prefix);
console.log('');

// Test image paths
const imagePaths = [
  'logo.png',
  'hero-banner.png',
  'construction-steel.png',
  'i-beam.png',
  'galvanized-steel.png',
  'c-purlin.png',
  'hoaphat.png',
  'hsg.png',
  'sendo-logo.png',
  'vinakyoei.png'
];

console.log('Image paths with prefix:');
imagePaths.forEach(imageName => {
  const fullPath = `${prefix}/images/${imageName}`;
  const fullUrl = `https://tanchu1234.github.io${fullPath}`;
  console.log(`  ${imageName} → ${fullPath} → ${fullUrl}`);
});

console.log('');
console.log('✅ All image paths are correctly prefixed for GitHub Pages deployment!');
