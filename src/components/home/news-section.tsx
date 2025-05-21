"use client";

import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { getNews } from "@/lib/news-api";
import { type News } from "@/lib/supabase/spabase";

export function NewsSection() {
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsData = await getNews(5); // 最新の3件を取得
        setLatestNews(newsData);
      } catch (error) {
        console.error("ニュースの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <section className=" bg-[#fefbf2]/100 py-8 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 sm:mb-8 flex items-center justify-between">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-medium text-[#b7aa79]"
                style={{ fontFamily: "cursive" }}
              >
                News
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#4a4333]">
                お知らせ
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#a0e1a7] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#4a4333] hover:bg-[#abefb3] transition-colors"
            >
              一覧へ
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-4 sm:py-8">
              <div className="h-6 w-6 sm:h-8 sm:w-8 animate-spin rounded-full border-b-2 border-[#b7aa79]"></div>
            </div>
          ) : latestNews.length > 0 ? (
            <div className="space-y-3 sm:space-y-4">
              {latestNews.map((news) => (
                <div
                  key={news.id}
                  className="border-b border-[#e6deb7] pb-3 sm:pb-4"
                >
                  <Link href={`/news/${news.id}`} className="group block">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
                      <span className="text-xs sm:text-sm text-[#8c8574]">
                        {format(new Date(news.date), "yyyy.MM.dd", {
                          locale: ja,
                        })}
                      </span>
                      <h3 className="text-sm sm:text-base group-hover:text-[#b7aa79] transition-colors">
                        {news.isImportant && (
                          <span className="mr-1 sm:mr-2 rounded-full bg-red-100 px-1.5 sm:px-2 py-0.5 sm:py-1 text-2xs sm:text-xs font-medium text-red-800">
                            重要
                          </span>
                        )}
                        {news.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[#e6deb7] bg-white p-4 sm:p-8 text-center text-[#70695a]">
              現在お知らせはありません。
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
