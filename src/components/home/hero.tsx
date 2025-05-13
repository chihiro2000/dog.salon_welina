"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// 複数の画像を使用する準備
const heroImages = [
  { src: "/images/hero/hero-dog-1.jpg", alt: "トリミング中の可愛い犬 1" },
  { src: "/images/hero/hero-dog-2.jpg", alt: "トリミング中の可愛い犬 2" },
  { src: "/images/hero/hero-dog-3.jpg", alt: "トリミング中の可愛い犬 3" },
  { src: "/images/hero/hero-dog-4.jpg", alt: "トリミング中の可愛い犬 4" },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 4秒ごとに画像を切り替えるための効果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#fcf9e4] py-16 md:py-24 lg:py-28">
      {/* 装飾的な背景 - 控えめに設定 */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute h-64 w-64 rounded-full bg-[#b7aa79]/30 blur-3xl -left-20 -top-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-[#e6deb7]/30 blur-3xl right-10 top-40"></div>
        <div className="absolute h-64 w-64 rounded-full bg-[#d4c99b]/30 blur-3xl -right-20 -bottom-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-[95%] lg:max-w-[98%] xl:max-w-[1800px]">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* 左側：テキストコンテンツ */}
          <div className="order-2 w-full md:order-1 md:w-[45%] lg:pr-6">
            <div className="relative mb-3">
              <span className="inline-block h-1.5 w-16 rounded-full bg-[#b7aa79] absolute -top-6 left-0"></span>
              <h3 className="text-lg font-semibold text-[#b7aa79] mb-2">
                トリミングサロン
              </h3>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#4a4333] md:text-5xl lg:text-6xl">
              その子にぴったりの
              <br />
              スタイルを
              <br />
              ご提案します
            </h1>

            <p
              className="mb-8 text-xl font-medium text-[#b7aa79] md:text-2xl"
              style={{ fontFamily: "cursive" }}
            >
              Dog Salon &amp; Welina
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-[#b7aa79] text-white hover:bg-[#a0936a] transition-all shadow-md font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link href="/reservation">ご予約はこちら</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-[#b7aa79] text-[#4a4333] hover:bg-[#e6deb7]/20 hover:border-[#a0936a] transition-all font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link href="/price">料金を見る</Link>
              </Button>
            </div>
          </div>

          {/* 右側：画像スライダー */}
          <div className="order-1 w-full md:order-2 md:w-[55%] lg:w-[90%] relative">
            {/* 装飾フレーム */}
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-dashed border-[#b7aa79]/40 rounded-3xl"></div>

            {/* メイン画像コンテナ */}
            <div className="relative rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] overflow-hidden aspect-[4/3] md:aspect-[5/4] lg:aspect-[16/10]">
              {/* 画像スライダー */}
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 h-full w-full transition-opacity duration-1000"
                  style={{
                    opacity: index === currentImageIndex ? 1 : 0,
                    zIndex: index === currentImageIndex ? 1 : 0,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#b7aa79]/10 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
