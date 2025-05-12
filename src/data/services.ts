export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string[];
  icon: string;
  color: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "shampoo",
    title: "シャンプーコース",
    description:
      "丁寧な施術で、ワンちゃんの毛並みがふわふわツヤツヤに仕上がります。",
    imageUrl: "/images/services/shampoo.jpg",
    details: [
      "高品質なシャンプー剤使用",
      "耳掃除・爪切り込み",
      "肛門腺絞り込み",
      "足裏、肛門、お腹バリカン込み",
    ],
    icon: "droplet",
    color: "bg-blue-50",
  },
  {
    id: "cut",
    title: "カットコース",
    description:
      "ワンちゃんの個性や飼い主様のご要望に合わせたスタイリングをいたします。",
    imageUrl: "/images/services/cut.jpg",
    details: [
      "シャンプーコース内容を含む",
      "全身カット込み",
      "ご希望のスタイルに対応",
      "カット後のブロー仕上げ",
    ],
    icon: "scissors",
    color: "bg-amber-50",
  },
  {
    id: "option",
    title: "オプションメニュー",
    description:
      "ワンちゃんの健康と美しさを保つための追加メニューをご用意しています。",
    imageUrl: "/images/services/option.jpg",
    details: [
      "ハミガキ(歯ブラシ別途)",
      "肉球ケア",
      "泥パック",
      "シルクたっぷり泡パック",
    ],
    icon: "sparkles",
    color: "bg-pink-50",
  },
  {
    id: "partial",
    title: "部分メニュー",
    description: "必要な部分だけのケアも可能です。お気軽にご相談ください。",
    imageUrl: "/images/services/partial.jpg",
    details: [
      "爪切り、耳掃除",
      "部分カット（目元・口元）",
      "肛門腺絞り",
      "抜け毛・毛玉処理",
    ],
    icon: "target",
    color: "bg-green-50",
  },
];

// 後方互換性のために古い型定義も維持
export type Service = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
};

export const services: Service[] = [
  {
    id: "basic-grooming",
    title: "ベーシックグルーミング",
    description:
      "シャンプー、ブロー、耳掃除、爪切りを含む基本的なグルーミングサービスです。",
    imageUrl: "/images/services/grooming.jpg",
    price: "3,000円〜",
  },
  {
    id: "full-trimming",
    title: "フルトリミング",
    description:
      "シャンプー、カット、ブロー、耳掃除、爪切り、肛門腺絞りなど、全身のケアが含まれます。",
    imageUrl: "/images/services/trimming.jpg",
    price: "5,000円〜",
  },
  {
    id: "spa-treatment",
    title: "スパトリートメント",
    description:
      "オーガニックシャンプーと保湿剤を使用した、贅沢なスパ体験を提供します。",
    imageUrl: "/images/services/spa.jpg",
    price: "4,500円〜",
  },
  {
    id: "teeth-cleaning",
    title: "歯のクリーニング",
    description:
      "ペットの歯の健康を維持するための専門的なクリーニングサービスです。",
    imageUrl: "/images/services/teeth.jpg",
    price: "2,000円〜",
  },
];
