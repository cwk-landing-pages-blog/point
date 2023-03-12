/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en',
        locale: false,
      },
    ];
  },
  images: {
    domains: ['goo.gl'],
  },
};

module.exports = nextConfig;
