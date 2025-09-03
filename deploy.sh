#!/bin/bash

echo "🚀 Deploying Steel Shop Application..."

# Stop and remove existing containers
echo "📦 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

# Remove old images to free up space
echo "🧹 Cleaning up old images..."
docker image prune -f

# Build and start production containers
echo "🔨 Building production image..."
docker-compose -f docker-compose.prod.yml build --no-cache

echo "🚀 Starting production containers..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for the application to be ready
echo "⏳ Waiting for application to be ready..."
sleep 10

# Check if the application is running
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application is running successfully!"
    echo "🌐 Access your application at: http://localhost:3000"
    echo "📊 Health check: http://localhost:3000/api/health"
else
    echo "❌ Application failed to start. Check logs with:"
    echo "   docker-compose -f docker-compose.prod.yml logs web"
fi
