/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dogsalonwelina.vercel.app", // あなたのサイトのURLに変更
  generateRobotsTxt: true, // robots.txtも生成
  exclude: ["/admin", "/admin/*"], // クロール対象外のページ
  robotsTxtOptions: {
    additionalSitemaps: [
      // 追加のサイトマップ（動的コンテンツ用などに必要な場合）
      "https://dogsalonwelina.vercel.app/server-sitemap.xml",
    ],
  },
  // 優先度と更新頻度の設定（オプション）
  changefreq: "weekly",
  priority: 0.7,
};
