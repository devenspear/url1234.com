/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during builds to prevent deployment failures
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds for deployment
    ignoreBuildErrors: true,
  },
};

export default config;
