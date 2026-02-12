import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  webpack(config, { isServer }) {
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

    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          framework: {
            name: "framework",
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            priority: 40,
            chunks: "all" as const,
            enforce: true,
          },
          lottie: {
            name: "lottie",
            test: /[\\/]node_modules[\\/]@lottiefiles[\\/]/,
            priority: 30,
            chunks: "async" as const,
          },
          lib: {
            name: "lib",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "async" as const,
            minSize: 20000,
          },
        },
      };
    }

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "date-fns",
      "@lottiefiles/dotlottie-react",
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
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
