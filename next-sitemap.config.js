/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dogsalonwelina.vercel.app", // あなたのサイトのURLに変更
  generateRobotsTxt: true, // robots.txtも生成
  exclude: ["/admin", "/admin/*", "/server-sitemap.xml"], // クロール対象外のページ

  // 優先度と更新頻度の設定（オプション）
  changefreq: "weekly",
  priority: 0.7,
};
