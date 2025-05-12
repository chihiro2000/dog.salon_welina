"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NewspaperIcon, ImageIcon, LogOutIcon } from "lucide-react";
import { supabase } from "@/lib/supabase/spabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.push("/admin/login");
        return;
      }

      setUserName(data.user.email ?? null);
      setIsLoading(false);
    }

    getUserData();
  }, [router]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">管理者ダッシュボード</h1>
          <p className="text-muted-foreground">こんにちは、{userName} さん</p>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          ログアウト
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <NewspaperIcon className="h-6 w-6" />
              お知らせ管理
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              サイトのお知らせを追加、編集、削除します。
            </p>
            <Button asChild>
              <Link href="/admin/news">お知らせ管理へ</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-6 w-6" />
              ギャラリー管理
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              ギャラリーの画像を追加、編集、削除します。
            </p>
            <Button asChild>
              <Link href="/admin/gallery">ギャラリー管理へ</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
