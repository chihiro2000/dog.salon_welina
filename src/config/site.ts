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
  name: "大阪府和泉市のドッグサロン DOG SALON Welina",
  description:
    "大阪府和泉市のトリミングサロン DOG SALON Welina。あなたの大切なペットを安心してお任せいただけます。その子その子に合わせた丁寧なトリミングで、可愛く健康に仕上げます。",

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
