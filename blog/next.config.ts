import type { NextConfig } from 'next';

module.exports = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
