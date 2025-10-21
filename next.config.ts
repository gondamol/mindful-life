import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during production builds
    // This allows the build to succeed even with linting warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
