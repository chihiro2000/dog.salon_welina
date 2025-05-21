import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/config/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

// 構造化データの定義
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "DOG SALON Welina",
  description:
    "大阪府和泉市のトリミングサロン DOG SALON Welina。あなたの大切なペットを安心してお任せいただけます。",
  url: "https://dogsalonwelina.vercel.app",
  telephone: "090-6846-5356",
  address: {
    "@type": "PostalAddress",
    streetAddress: "上町373-4",
    addressLocality: "和泉市",
    addressRegion: "大阪府",
    postalCode: "594-0002",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "34.510505",
    longitude: "135.448616",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  image: "https://dogsalonwelina.vercel.app/images/logo.jpg",
  priceRange: "¥¥",
  paymentAccepted: "Cash, Credit Card",
  services: ["ドッグトリミング", "シャンプー", "カット", "ブロー"],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ペットサロン",
    "トリミング",
    "ドッグサロン",
    "ペットケア",
    "シャンプー",
    "カット",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "DOG SALON Welina",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="JAl1C5XcyFfBODiIA8IGJ1sJaG-dMMZtvif0nAfY1A8"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
