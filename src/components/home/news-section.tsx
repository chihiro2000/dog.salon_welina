"use client";

import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { getNews } from "@/lib/news-api";
import { type News } from "@/lib/supabase/spabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NewsSection() {
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsData = await getNews(4); // 最新の4件を取得
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
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            お知らせ
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            最新のキャンペーンや営業日のお知らせはこちらでご確認ください。
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        ) : latestNews.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((news) => (
              <Card key={news.id} className="flex h-full flex-col">
                <CardHeader>
                  <CardDescription>
                    {format(new Date(news.date), "yyyy年MM月dd日", {
                      locale: ja,
                    })}
                  </CardDescription>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {news.content}
                  </p>
                </CardContent>
                <CardFooter>
                  {news.isImportant && (
                    <span className="mr-2 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                      重要
                    </span>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
            現在お知らせはありません。
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/news">
              すべてのお知らせを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
