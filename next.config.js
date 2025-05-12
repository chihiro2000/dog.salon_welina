/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // App Routerプロジェクトでは、exportPathMapは使用できません
  // 代わりに基本的な設定だけを適用
  experimental: {
    serverComponentsExternalPackages: ["react-dom/server"],
  },
};

module.exports = nextConfig;
