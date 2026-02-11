import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.lottie$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        include: /src[\\/]assets/,
        type: "asset/resource",
      },
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Powered-By", value: "" },
          { key: "Server", value: "" },
        ],
      },
    ];
  },
};

export default nextConfig;
