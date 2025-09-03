/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Ensure these static routes are never caught by [slug]
        {
          source: '/templates',
          destination: '/templates',
        },
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
        {
          source: '/debug',
          destination: '/debug',
        },
      ],
    }
  },
};

export default config;
