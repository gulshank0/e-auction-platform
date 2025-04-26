/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/e-auction-platform' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/e-auction-platform/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Fix npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig