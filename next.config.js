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
  // 静的生成中に問題となるページを除外
  experimental: {
    // クライアントコンポーネントを利用するページはここで指定
    serverComponentsExternalPackages: ["react-dom/server"],
  },
  // 動的ルートとして扱うパス
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      // '/news' と '/news/:id' は含めない（クライアントサイドレンダリングとする）
    };
  },
};

module.exports = nextConfig;
