"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceItems = [
  {
    id: "shampoo",
    title: "シャンプー",
    titleEn: "Shampoo",
    description:
      "高品質なシャンプー剤とこだわりのシャワーマシーンで洗浄。ふわふわの仕上がりに。",
    imageUrl: "/images/services/shampoo.png",
  },
  {
    id: "cut",
    title: "トリミング",
    titleEn: "Trimming",
    description:
      "わんちゃん一匹一匹の毛質や個性に合わせた、丁寧なカットで理想のスタイルに。",
    imageUrl: "/images/services/trimming.png",
  },
  {
    id: "option",
    title: "オプションメニュー",
    titleEn: "Option",
    description:
      "泡パック、炭酸泉、肉球ケア、歯磨きなど、愛犬の美容と健康をサポートするメニュー。",
    imageUrl: "/images/services/option.png",
  },
  {
    id: "partial",
    title: "部分メニュー",
    titleEn: "Partial Care",
    description:
      "爪切り、耳掃除、肛門腺絞りなど、必要な部分のみのケアもご提供しています。",
    imageUrl: "/images/services/partial.png",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = serviceItems.length;
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_SLIDE_INTERVAL = 4000; // 4秒ごとに自動スライド

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  // スライダーを自動的に進める
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    // クリーンアップ関数
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  // ユーザーが操作した場合、自動スライドをリセット
  const handleManualNavigation = (action: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    action();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);
  };

  // スライダーのスクロール位置を更新
  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth / totalItems;
      sliderRef.current.scrollTo({
        left: activeIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, totalItems]);

  return (
    <section className="py-24 bg-[#f7f4ef] sm:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl text-[#6b5a45]">
            サービス
          </h2>
          <p className="mx-auto max-w-[700px] text-xl text-[#8a7b68]">
            当店では、ワンちゃん一匹一匹に合わせた最適なケアをご提供しています
          </p>
        </div>

        <div className="relative">
          {/* スライダーナビゲーション */}
          <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-6">
            <button
              onClick={() => handleManualNavigation(prevSlide)}
              className="rounded-full bg-white/80 p-3 text-[#6b5a45] shadow-md hover:bg-white transition-all"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={() => handleManualNavigation(nextSlide)}
              className="rounded-full bg-white/80 p-3 text-[#6b5a45] shadow-md hover:bg-white transition-all"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>

          {/* スライダー */}
          <div
            ref={sliderRef}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-scroll scroll-smooth"
          >
            {serviceItems.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "min-w-full snap-center px-4",
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-30 hover:opacity-70 transition-opacity"
                )}
              >
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                  <div className="flex flex-col lg:flex-row">
                    <div className="order-2 w-full p-10 lg:order-1 lg:w-1/2 lg:p-16 flex flex-col justify-center">
                      <h3
                        className="mb-2 text-2xl font-medium text-[#c19a6b]"
                        style={{ fontFamily: "cursive" }}
                      >
                        {service.titleEn}
                      </h3>
                      <h2 className="mb-6 text-4xl font-bold text-[#6b5a45]">
                        {service.title}
                      </h2>
                      <p className="mb-10 text-xl leading-relaxed text-[#8a7b68]">
                        {service.description}
                      </p>
                      <Link
                        href="/price"
                        className="group inline-flex items-center text-[#c19a6b] text-lg font-medium"
                      >
                        MORE
                        <span className="ml-2 rounded-full transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-6 w-6" />
                        </span>
                      </Link>
                    </div>
                    <div className="order-1 h-96 md:h-[400px] w-full lg:order-2 lg:h-[600px] lg:w-1/2">
                      <div className="relative h-full w-full">
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* スライダーインジケーター */}
        <div className="mt-10 flex justify-center space-x-3">
          {serviceItems.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-3 w-12 rounded-full transition-all",
                activeIndex === index ? "bg-[#c19a6b]" : "bg-[#d9cfc2]"
              )}
              onClick={() =>
                handleManualNavigation(() => setActiveIndex(index))
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="rounded-full bg-[#c19a6b] hover:bg-[#a88252] px-10 py-7 text-lg text-white"
            asChild
          >
            <Link href="/price">
              料金表を見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* スクロールバーを隠すためのグローバルスタイル追加 */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
