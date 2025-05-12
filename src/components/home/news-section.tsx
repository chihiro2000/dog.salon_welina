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
        const newsData = await getNews(3); // 最新の3件を取得
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
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2
                className="text-4xl font-medium text-primary/80"
                style={{ fontFamily: "cursive" }}
              >
                News
              </h2>
              <p className="text-lg font-medium text-foreground">お知らせ</p>
            </div>
            <Link
              href="/news"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              一覧へ
              <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
            </div>
          ) : latestNews.length > 0 ? (
            <div className="space-y-4">
              {latestNews.map((news) => (
                <div key={news.id} className="border-b pb-4">
                  <Link href={`/news/${news.id}`} className="group block">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(news.date), "yyyy.MM.dd", {
                          locale: ja,
                        })}
                      </span>
                      <h3 className="group-hover:text-primary">
                        {news.isImportant && (
                          <span className="mr-2 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
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
            <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
              現在お知らせはありません。
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
