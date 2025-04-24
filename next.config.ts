import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      domains: ['m.media-amazon.com'], // Add the domain(s) you want to allow
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };

export default nextConfig;
