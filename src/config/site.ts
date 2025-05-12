export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    line: string;
    instagram: string;
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
    line: "https://line.me/R/ti/p/@888whmrz?oat_content=url&ts=04032211",
    instagram:
      "https://www.instagram.com/dog.salon_welina?igsh=em1seGhoejkwdnVq",
  },
  contact: {
    phone: "090-6846-5356",
    email: "------.com",
    address: "〒594-0002 大阪府和泉市上町373-4",
  },
  hours: {
    weekdays: "9:00 - 18:00",
    weekends: "9:00 - 18:00",
    holidays: "不定休",
  },
};
