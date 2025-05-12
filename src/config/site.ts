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
  name: "DOG SALON Welina",
  description:
    "あなたの大切なペットを安心してお任せください。その子その子に合わせたトリミングをさせて頂きます。",
  url: "https://dogsalonwelina.vercel.app",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/dogsalonwelina",
    instagram: "https://instagram.com/dogsalonwelina",
    facebook: "https://facebook.com/dogsalonwelina",
  },
  contact: {
    phone: "090-6846-5356",
    email: "info@dogsalonwelina.com",
    address: "〒594-0002 大阪府和泉市上町373-4",
  },
  hours: {
    weekdays: "9:00 - 18:00",
    weekends: "9:00 - 18:00",
    holidays: "不定休",
  },
};
