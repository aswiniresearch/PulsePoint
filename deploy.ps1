# Deployment Script for AI EMR Platform
# This script helps deploy the application in different environments

param (
    [string]$environment = "development",
    [switch]$install,
    [switch]$build,
    [switch]$start,
    [switch]$docker,
    [switch]$help
)

function Show-Help {
    Write-Host "Deployment Script for AI EMR Platform" -ForegroundColor Cyan
    Write-Host "Usage: .\deploy.ps1 [options]"
    Write-Host ""
    Write-Host "Options:"
    Write-Host "  -environment <env>    Set the environment (development, staging, production). Default: development"
    Write-Host "  -install              Install dependencies"
    Write-Host "  -build                Build the application"
    Write-Host "  -start                Start the application"
    Write-Host "  -docker               Use Docker for deployment"
    Write-Host "  -help                 Show this help message"
    Write-Host ""
    Write-Host "Examples:"
    Write-Host "  .\deploy.ps1 -install -build -start"
    Write-Host "  .\deploy.ps1 -environment production -docker"
}

if ($help) {
    Show-Help
    exit 0
}

# Set environment variables
$env:NODE_ENV = $environment

# Install dependencies
if ($install) {
    Write-Host "Installing dependencies..." -ForegroundColor Green
    npm install
    
    # Additional Windows-specific dependencies
    if ($IsWindows) {
        Write-Host "Installing Windows build tools..." -ForegroundColor Green
        npm install --global --production windows-build-tools
    }
}

# Build the application
if ($build) {
    Write-Host "Building application for $environment..." -ForegroundColor Green
    
    # Clean previous builds
    if (Test-Path ".next") {
        Remove-Item -Recurse -Force .next
    }
    
    # Set build command based on environment
    if ($environment -eq "production") {
        $env:NEXT_TELEMETRY_DISABLED = "1"
        npm run build
    }
    else {
        npm run build
    }
}

# Start the application
if ($start) {
    Write-Host "Starting application in $environment mode..." -ForegroundColor Green
    
    if ($environment -eq "production") {
        npm start
    }
    else {
        npm run dev
    }
}

# Docker deployment
if ($docker) {
    Write-Host "Building Docker image..." -ForegroundColor Green
    docker build -t ai-emr-platform .
    
    Write-Host "Starting Docker container..." -ForegroundColor Green
    docker run -p 3000:3000 --env-file .env.local ai-emr-platform
}

if (-not ($install -or $build -or $start -or $docker)) {
    Write-Host "No action specified. Use -help to see available options." -ForegroundColor Yellow
    Show-Help
}
