Write-Host "🚀 Deploying Steel Shop Application..." -ForegroundColor Green

# Stop and remove existing containers
Write-Host "📦 Stopping existing containers..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml down

# Remove old images to free up space
Write-Host "🧹 Cleaning up old images..." -ForegroundColor Yellow
docker image prune -f

# Build and start production containers
Write-Host "🔨 Building production image..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml build --no-cache

Write-Host "🚀 Starting production containers..." -ForegroundColor Yellow
docker-compose -f docker-compose.prod.yml up -d

# Wait for the application to be ready
Write-Host "⏳ Waiting for application to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Check if the application is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/api/health" -UseBasicParsing -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Application is running successfully!" -ForegroundColor Green
        Write-Host "🌐 Access your application at: http://localhost:3000" -ForegroundColor Cyan
        Write-Host "📊 Health check: http://localhost:3000/api/health" -ForegroundColor Cyan
    }
} catch {
    Write-Host "❌ Application failed to start. Check logs with:" -ForegroundColor Red
    Write-Host "   docker-compose -f docker-compose.prod.yml logs web" -ForegroundColor Yellow
}
