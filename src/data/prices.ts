export type DogBreed = {
  id: string;
  breeds: string[];
  quickShampoo: string;
  shampoo: string;
  cut: string | null;
};

export type OptionService = {
  id: string;
  name: string;
  price: string;
};

export type PartialService = {
  id: string;
  name: string;
  price: string;
  note?: string;
};

export const dogBreeds: DogBreed[] = [
  {
    id: "small-smooth",
    breeds: ["チワワ(スムース)", "ダックス(スムース)", "ミニチュアピンシャー"],
    quickShampoo: "¥2,310",
    shampoo: "¥3,300",
    cut: null,
  },
  {
    id: "small-long",
    breeds: ["チワワ(ロング)", "ダックス(ロング)"],
    quickShampoo: "¥2,660",
    shampoo: "¥3,800",
    cut: "¥5,500 / ¥4,950",
  },
  {
    id: "small-medium",
    breeds: ["パグ", "フレンチブルドッグ"],
    quickShampoo: "¥3,220",
    shampoo: "¥4,600",
    cut: null,
  },
  {
    id: "terrier",
    breeds: ["ヨークシャーテリア", "パピヨン", "マルチーズ"],
    quickShampoo: "¥3,080",
    shampoo: "¥4,400",
    cut: "¥6,600 / ¥5,940",
  },
  {
    id: "pomeranian",
    breeds: [
      "ポメラニアン",
      "ペキニーズ",
      "シーズー",
      "トイプードル",
      "シュナウザー",
    ],
    quickShampoo: "¥4,060",
    shampoo: "¥5,800",
    cut: "¥7,600 / ¥6,840",
  },
  {
    id: "bichon",
    breeds: ["ビションフリーゼ"],
    quickShampoo: "¥4,760",
    shampoo: "¥6,800",
    cut: "¥8,200 / ¥7,380",
  },
  {
    id: "medium-dog-15",
    breeds: ["柴犬", "中型犬(～15kg)"],
    quickShampoo: "¥4,900",
    shampoo: "¥7,000",
    cut: null,
  },
  {
    id: "medium-dog-16",
    breeds: ["中型犬(16kg～)"],
    quickShampoo: "¥5,390",
    shampoo: "¥7,700",
    cut: null,
  },
];

export const optionServices: OptionService[] = [
  {
    id: "teeth",
    name: "ハミガキ(歯ブラシ別途)",
    price: "¥550",
  },
  {
    id: "paw-care",
    name: "肉球ケア",
    price: "¥550",
  },
  {
    id: "mud-pack",
    name: "泥パック",
    price: "¥1,500",
  },
  {
    id: "silk-pack",
    name: "シルクたっぷり泡パック",
    price: "¥1,500",
  },
];

export const partialServices: PartialService[] = [
  {
    id: "nail-anal-ear",
    name: "爪切り・肛門腺絞り・耳掃除・足先バリカン・足裏バリカン・肛門バリカン・お腹バリカン・部分カット(目元・口元・お尻周り等)",
    price: "各 ¥550",
  },
  {
    id: "hair-removal",
    name: "抜け毛・毛玉",
    price: "10分～ ¥550",
    note: "※過度な毛玉の場合、ワンちゃんの負担を考え丸刈りにさせていただく場合がございます。ご理解頂けない場合、当店でのトリミングはお受けできかねますのでご了承ください。",
  },
];

export const notes: string[] = [
  "※料金はすべて税込です。",
  "※シャンプーコースには爪切り・肛門腺絞り・耳掃除・足裏、肛門、お腹バリカン・足周りカットが含まれます。",
  "※カットコースはシャンプーコース＋全身カットです。",
  "※前回のご来店から1ヶ月半以内のカットコースご利用は基本料金から10%OFFさせて頂きます。",
  "※クイックシャンプー＝シャンプー+ブローのみです。",
  "※前回のご来店から3週間以内のワンちゃん限定です。",
  "※雑種犬・MIXについては上記価格を参考にし、ご来店の上決定いたします。",
  "※記載のない犬種はお問い合わせください。",
];

// 後方互換性のため古い型定義も維持
export type PriceCategory = {
  id: string;
  name: string;
  description: string;
  items: PriceItem[];
};

export type PriceItem = {
  id: string;
  name: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
  notes?: string;
};

export const priceCategories: PriceCategory[] = [
  {
    id: "small-dogs",
    name: "小型犬",
    description:
      "チワワ、トイプードル、ポメラニアン、ミニチュアダックスフンドなど",
    items: [
      {
        id: "small-basic",
        name: "シャンプーコース",
        sizes: {
          small: "3,500円",
          medium: "4,000円",
          large: "4,500円",
        },
        notes: "シャンプー、コンディショナー、ブロー、爪切り、耳掃除込み",
      },
      {
        id: "small-cut",
        name: "カットコース",
        sizes: {
          small: "5,500円",
          medium: "6,000円",
          large: "6,500円",
        },
        notes:
          "シャンプー、コンディショナー、カット、ブロー、爪切り、耳掃除込み",
      },
    ],
  },
  {
    id: "medium-dogs",
    name: "中型犬",
    description: "シェルティ、コーギー、フレンチブルドッグなど",
    items: [
      {
        id: "medium-basic",
        name: "シャンプーコース",
        sizes: {
          small: "4,500円",
          medium: "5,000円",
          large: "5,500円",
        },
        notes: "シャンプー、コンディショナー、ブロー、爪切り、耳掃除込み",
      },
      {
        id: "medium-cut",
        name: "カットコース",
        sizes: {
          small: "7,000円",
          medium: "7,500円",
          large: "8,000円",
        },
        notes:
          "シャンプー、コンディショナー、カット、ブロー、爪切り、耳掃除込み",
      },
    ],
  },
  {
    id: "large-dogs",
    name: "大型犬",
    description:
      "ゴールデンレトリバー、ラブラドールレトリバー、シベリアンハスキーなど",
    items: [
      {
        id: "large-basic",
        name: "シャンプーコース",
        sizes: {
          small: "6,000円",
          medium: "7,000円",
          large: "8,000円",
        },
        notes: "シャンプー、コンディショナー、ブロー、爪切り、耳掃除込み",
      },
      {
        id: "large-cut",
        name: "カットコース",
        sizes: {
          small: "9,000円",
          medium: "10,000円",
          large: "11,000円",
        },
        notes:
          "シャンプー、コンディショナー、カット、ブロー、爪切り、耳掃除込み",
      },
    ],
  },
];

export const additionalServices = [
  {
    id: "addon-1",
    name: "肛門腺絞り",
    price: "500円",
  },
  {
    id: "addon-2",
    name: "歯磨き",
    price: "1,000円",
  },
  {
    id: "addon-3",
    name: "スパトリートメント",
    price: "1,500円〜",
  },
  {
    id: "addon-4",
    name: "ノミ・マダニ駆除",
    price: "1,200円〜",
  },
];
