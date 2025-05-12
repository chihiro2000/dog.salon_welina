export type NewsItem = {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant?: boolean;
  imageUrl?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "夏季限定！涼しくさっぱりスペシャルコース",
    content:
      "暑い夏を快適に過ごせるよう、ひんやりクールシャンプーと特別なカットを組み合わせたスペシャルコースをご用意しました。7月1日から8月31日までの期間限定です。",
    date: "2025-06-15",
    isImportant: true,
    imageUrl: "/images/news/summer-special.jpg",
  },
  {
    id: "news-2",
    title: "新しいスタッフが加わりました",
    content:
      "経験豊富なトリマーの田中さんが新しく加わりました。特に小型犬のカットを得意としています。よろしくお願いいたします。",
    date: "2025-05-10",
    imageUrl: "/images/news/new-staff.jpg",
  },
  {
    id: "news-3",
    title: "オーガニックシャンプー導入のお知らせ",
    content:
      "敏感肌のわんちゃんにも安心のオーガニックシャンプーを新たに導入しました。優しい洗い心地と自然の香りをぜひお試しください。",
    date: "2025-04-22",
  },
  {
    id: "news-4",
    title: "ゴールデンウィーク営業日のお知らせ",
    content:
      "5月3日〜5月5日は通常通り営業いたします。混雑が予想されますので、予約は早めにお願いいたします。",
    date: "2025-04-15",
    isImportant: true,
  },
];
