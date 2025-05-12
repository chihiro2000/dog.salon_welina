export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    instagram: string;
    facebook: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    holidays: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Pet Salon",
  description:
    "あなたの大切なペットを安心してお任せください。美しく、健康的な仕上がりをお約束します。",
  url: "https://petsalon.vercel.app",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/petsalon",
    instagram: "https://instagram.com/petsalon",
    facebook: "https://facebook.com/petsalon",
  },
  contact: {
    phone: "06-1234-5678",
    email: "info@petsalon.com",
    address: "〒530-0001 大阪府大阪市北区梅田1-1-1",
  },
  hours: {
    weekdays: "10:00 - 19:00",
    weekends: "10:00 - 18:00",
    holidays: "定休日：毎週水曜日、年末年始",
  },
};
