/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: '/offline', // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md'],
  reactStrictMode: true,
  dangerouslyAllowSVG: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'ui-avatars.com', 'firebasestorage.googleapis.com'],
  },
};

module.exports = withPWA(nextConfig);
