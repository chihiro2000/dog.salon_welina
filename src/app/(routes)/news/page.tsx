"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { ArrowRight } from "lucide-react";

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

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const news = await getNews(50); // 最大50件表示
        setNewsItems(news);
      } catch (error) {
        console.error("ニュースの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">お知らせ</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          当店からのお知らせやキャンペーン情報をご確認ください。
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      ) : newsItems.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.id} className="flex h-full flex-col">
              <CardHeader>
                <CardDescription>
                  {format(new Date(item.date), "yyyy年MM月dd日", {
                    locale: ja,
                  })}
                </CardDescription>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3 text-muted-foreground">
                  {item.content}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                {item.isImportant && (
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    重要
                  </span>
                )}
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <Link href={`/news/${item.id}`}>
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
          現在お知らせはありません。
        </div>
      )}
    </div>
  );
}
