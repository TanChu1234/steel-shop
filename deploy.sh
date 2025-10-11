#!/bin/bash

# Build the project for production
echo "Building for production..."
NODE_ENV=production npm run build

# Create .nojekyll file in the out directory
echo "Creating .nojekyll file..."
touch out/.nojekyll

echo "Build complete! The 'out' directory is ready for deployment to GitHub Pages."
echo "You can now push the 'out' directory contents to your gh-pages branch."
