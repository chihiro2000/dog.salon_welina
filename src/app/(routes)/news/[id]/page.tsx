"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { ChevronLeft } from "lucide-react";

import { getNewsById } from "@/lib/news-api";
import { type News } from "@/lib/supabase/spabase";
import { Button } from "@/components/ui/button";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const [news, setNews] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchNewsItem() {
      try {
        const newsItem = await getNewsById(params.id);
        if (!newsItem) {
          router.push("/news");
          return;
        }
        setNews(newsItem);
      } catch (error) {
        console.error("ニュースの取得に失敗しました:", error);
        router.push("/news");
      } finally {
        setIsLoading(false);
      }
    }

    fetchNewsItem();
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="container flex justify-center py-16">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!news) {
    return null; // ページ遷移中
  }

  return (
    <div className="container py-16">
      <Button variant="outline" className="mb-8" asChild>
        <Link href="/news">
          <ChevronLeft className="mr-2 h-4 w-4" />
          お知らせ一覧に戻る
        </Link>
      </Button>

      <article className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <time
              className="text-sm text-muted-foreground"
              dateTime={news.date}
            >
              {format(new Date(news.date), "yyyy年MM月dd日", {
                locale: ja,
              })}
            </time>
            {news.isImportant && (
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                重要
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold">{news.title}</h1>
        </div>

        <div className="prose max-w-none">
          {news.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
