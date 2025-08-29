# Deployment Guide

This document provides detailed instructions for deploying the AI-Enhanced EMR Platform to various environments.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Docker Deployment](#docker-deployment)
- [Vercel Deployment](#vercel-deployment)
- [AWS Deployment](#aws-deployment)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 18 or later
- npm 9 or later
- Git
- Docker (for containerized deployment)
- A Vercel account (for Vercel deployment)
- An AWS account (for AWS deployment)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-emr-platform.git
   cd ai-emr-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (create `.env.local`):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   # Add other environment variables as needed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Docker Deployment

### Build the Docker Image

```bash
docker build -t ai-emr-platform .
```

### Run the Container

```bash
docker run -p 3000:3000 --env-file .env.local ai-emr-platform
```

### Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env.local
    restart: unless-stopped
```

Then run:
```bash
docker-compose up -d
```

## Vercel Deployment

1. Push your code to a Git repository
2. Import the repository in Vercel
3. Configure environment variables in Vercel's project settings
4. Deploy!

Vercel will automatically detect this is a Next.js application and configure the build settings.

## AWS Deployment

### Using AWS ECS

1. Build and push the Docker image to Amazon ECR
2. Create an ECS cluster
3. Create a task definition
4. Configure the service and load balancer
5. Deploy the service

### Using AWS Amplify

1. Push your code to a Git repository (GitHub, CodeCommit, etc.)
2. In AWS Amplify Console, connect your repository
3. Configure build settings (use default Next.js settings)
4. Add environment variables
5. Deploy

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | Yes | - | Base URL for API requests |
| `NEXT_PUBLIC_GA_TRACKING_ID` | No | - | Google Analytics tracking ID |
| `NODE_ENV` | No | `development` | Runtime environment |

## Troubleshooting

### Build Failures
- Ensure all dependencies are installed
- Check Node.js version (should be 18+)
- Verify environment variables are properly set

### Docker Issues
- Make sure Docker is running
- Check container logs with `docker logs <container_id>`
- Ensure ports are not in use

### Performance Issues
- Enable production mode (`NODE_ENV=production`)
- Use a CDN for static assets
- Implement caching where appropriate

This guide explains how to deploy the OpenEMR Clinic Platform to various hosting providers.

## Prerequisites

- Node.js 16.8 or later
- Git
- An account with your chosen hosting provider

## 1. Vercel (Recommended)

### Automatic Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fopenemr-clinic-platform&project-name=openemr-clinic-platform&repository-name=openemr-clinic-platform)

1. Click the "Deploy" button above
2. Sign in with GitHub, GitLab, or Bitbucket
3. Click "Create Project"
4. Wait for deployment to complete

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## 2. Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Set environment variables if needed
6. Click "Deploy site"

## 3. Self-Hosted (Node.js Server)

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Use a process manager like PM2 for production:
   ```bash
   npm install -g pm2
   pm2 start npm --name "openemr-clinic" -- start
   pm2 save
   pm2 startup
   ```

## 4. Docker Deployment

1. Create a `Dockerfile` in the project root:
   ```dockerfile
   # Use the official Node.js image
   FROM node:18-alpine AS builder
   
   # Set working directory
   WORKDIR /app
   
   # Copy package files
   COPY package*.json ./
   
   # Install dependencies
   RUN npm ci
   
   # Copy project files
   COPY . .
   
   # Build the application
   RUN npm run build
   
   # Production image
   FROM node:18-alpine
   
   WORKDIR /app
   
   # Copy built assets
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json
   
   # Expose the port the app runs on
   EXPOSE 3000
   
   # Start the application
   CMD ["npm", "start"]
   ```

2. Build and run the Docker container:
   ```bash
   docker build -t openemr-clinic .
   docker run -p 3000:3000 openemr-clinic
   ```

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other environment variables as needed
```

## SSL/TLS Configuration

For production, ensure you have SSL/TLS enabled. Most hosting providers handle this automatically. For self-hosted deployments:

1. Use Let's Encrypt with Certbot:
   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Caching Headers

For optimal performance, configure these caching headers in your hosting provider's settings:

- `_next/static/*`: Cache-Control: public, max-age=31536000, immutable
- `/*.js`: Cache-Control: public, max-age=31536000, immutable
- `/*.css`: Cache-Control: public, max-age=31536000, immutable
- `/*.woff2`: Cache-Control: public, max-age=31536000, immutable
- `/`: Cache-Control: public, max-age=0, must-revalidate

## Monitoring

Set up monitoring for your production deployment:

1. **Error Tracking**: Consider using Sentry or LogRocket
2. **Performance Monitoring**: Use Next.js Analytics or Vercel Analytics
3. **Uptime Monitoring**: Set up UptimeRobot or similar service

## Backups

Regularly back up your:
- Database (if using one)
- Uploaded files
- Environment variables
- Configuration files
