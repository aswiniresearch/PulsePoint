/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable all optimizations that might use SWC
  experimental: {
    forceSwcTransforms: false,
    swcMinify: false,
    swcLoader: false,
    swcTraceProfiling: false,
  },
  // Disable SWC minifier
  swcMinify: false,
  // Disable styled-components as we're using Tailwind
  compiler: {
    styledComponents: false,
  },
  // Disable static optimization to avoid SWC issues
  output: 'standalone',
  // Disable image optimization
  images: {
    unoptimized: true,
  },
  // Disable webpack optimizations that might use SWC
  webpack: (config, { isServer }) => {
    // Disable SWC loader
    const swcLoaderIndex = config.module.rules.findIndex(
      (rule) => rule.use && rule.use.loader === 'next-swc-loader'
    );
    if (swcLoaderIndex !== -1) {
      config.module.rules.splice(swcLoaderIndex, 1);
    }
    
    // Add Babel loader for all JavaScript/TypeScript files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: [],
        },
      },
    });
    
    return config;
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://www.open-emr.org/wiki/index.php/OpenEMR_Documentation',
        permanent: true,
      },
      {
        source: '/community',
        destination: 'https://community.open-emr.org/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
