# AI EMR Platform - Deployment Guide

This guide provides alternative deployment methods for the AI EMR Platform, especially useful if you encounter issues with the standard build process on 32-bit Windows systems.

## Prerequisites

- Node.js 18 or later (64-bit version recommended)
- npm 9 or later
- Git
- Docker (for containerized deployment)

## Deployment Options

### Option 1: Using Docker (Recommended)

The easiest way to deploy the application is using Docker:

1. Make sure Docker is installed and running on your system
2. Open a terminal in the project directory
3. Build the Docker image:
   ```bash
   docker build -t ai-emr-platform .
   ```
4. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env.local ai-emr-platform
   ```
5. Open http://localhost:3000 in your browser

### Option 2: Using a 64-bit System

If possible, use a 64-bit system for development and deployment:

1. Install 64-bit Node.js from https://nodejs.org/
2. Clone the repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the application:
   ```bash
   npm run build
   ```
5. Start the application:
   ```bash
   npm start
   ```

### Option 3: Using Vercel (Cloud Deployment)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Sign up for a Vercel account (https://vercel.com)
3. Import your repository
4. Configure environment variables in the Vercel dashboard
5. Deploy!

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

## Troubleshooting

### Build Failures

If you encounter build failures:
1. Try using Docker as described above
2. Make sure you're using a 64-bit version of Node.js
3. Clear the `.next` directory and `node_modules`, then reinstall dependencies:
   ```bash
   rm -rf .next node_modules
   npm install
   ```

### Docker Issues

If Docker fails to build or run:
1. Make sure Docker is running
2. Check available disk space
3. Try rebuilding with no cache:
   ```bash
   docker build --no-cache -t ai-emr-platform .
   ```

## Support

If you continue to experience issues, please open an issue on our GitHub repository with the following information:
- Your operating system and version
- Node.js version (`node -v`)
- npm version (`npm -v`)
- Docker version (if applicable)
- Any error messages you're seeing
