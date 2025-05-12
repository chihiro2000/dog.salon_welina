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
