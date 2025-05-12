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
