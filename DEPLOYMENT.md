# 🚀 Steel Shop Application Deployment Guide

This guide will help you deploy your Steel Shop Next.js application using Docker.

## 📋 Prerequisites

- Docker Desktop installed and running
- Docker Compose available
- Port 3000 available on your machine

## 🐳 Quick Deployment

### Option 1: Using PowerShell Script (Windows)
```powershell
# Navigate to your project directory
cd steel-shop

# Run the deployment script
.\deploy.ps1
```

### Option 2: Manual Deployment
```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yml up -d --build

# Check if containers are running
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs web
```

## 🌐 Access Your Application

Once deployed successfully, your application will be available at:
- **Main Application**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

## 🔧 Management Commands

### Start the application
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Stop the application
```bash
docker-compose -f docker-compose.prod.yml down
```

### View logs
```bash
docker-compose -f docker-compose.prod.yml logs web
```

### Restart the application
```bash
docker-compose -f docker-compose.prod.yml restart
```

### Update and redeploy
```bash
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
```

## 📊 Monitoring

### Check container status
```bash
docker-compose -f docker-compose.prod.yml ps
```

### Monitor resource usage
```bash
docker stats
```

### Health check
```bash
curl http://localhost:3000/api/health
```

## 🚨 Troubleshooting

### Application won't start
1. Check if port 3000 is available:
   ```bash
   netstat -an | findstr :3000
   ```

2. View detailed logs:
   ```bash
   docker-compose -f docker-compose.prod.yml logs web
   ```

3. Check Docker container status:
   ```bash
   docker ps -a
   ```

### Port already in use
If port 3000 is already in use, you can change it in `docker-compose.prod.yml`:
```yaml
ports:
  - "3001:3000"  # Change 3001 to any available port
```

### Build issues
1. Clean Docker cache:
   ```bash
   docker system prune -a
   ```

2. Rebuild without cache:
   ```bash
   docker-compose -f docker-compose.prod.yml build --no-cache
   ```

## 🔒 Production Considerations

- The application runs with `NODE_ENV=production`
- Static files are optimized for production
- Health checks are enabled for monitoring
- Container restart policy is set to `unless-stopped`

## 📝 Environment Variables

You can customize the deployment by setting environment variables in `docker-compose.prod.yml`:
- `NODE_ENV`: Set to `production`
- `PORT`: Application port (default: 3000)
- `HOSTNAME`: Bind address (default: 0.0.0.0)

## 🎉 Success!

Your Steel Shop application is now deployed and running! You can access it at http://localhost:3000
