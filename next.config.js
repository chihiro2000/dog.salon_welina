/** @type {import('next').NextConfig} */
const nextConfig = {
  // outputは削除（デフォルトのサーバーサイドレンダリングを使用）
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
