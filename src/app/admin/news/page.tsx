"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Trash2, Edit, Plus, Home } from "lucide-react"; // Homeアイコンを追加
import Link from "next/link"; // Next.jsのLinkコンポーネントをインポート

import { getNews, createNews, updateNews, deleteNews } from "@/lib/news-api";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// 最大文字数を定数として定義
const MAX_CONTENT_LENGTH = 400;

export default function AdminNewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: format(new Date(), "yyyy-MM-dd"),
    isImportant: false,
  });

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setIsLoading(true);
    try {
      const newsData = await getNews(100); // 最大100件取得
      setNews(newsData);
    } catch (error) {
      console.error("ニュースの取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenDialog(newsItem?: News) {
    if (newsItem) {
      setSelectedNews(newsItem);
      setFormData({
        title: newsItem.title,
        content: newsItem.content,
        date: format(new Date(newsItem.date), "yyyy-MM-dd"),
        isImportant: newsItem.isImportant,
      });
    } else {
      setSelectedNews(null);
      setFormData({
        title: "",
        content: "",
        date: format(new Date(), "yyyy-MM-dd"),
        isImportant: false,
      });
    }
    setIsDialogOpen(true);
  }

  function handleOpenDeleteDialog(newsItem: News) {
    setSelectedNews(newsItem);
    setIsDeleteDialogOpen(true);
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    // contentフィールドの場合、最大文字数を制限
    if (name === "content" && value.length > MAX_CONTENT_LENGTH) {
      // 最大文字数を超えた場合は切り詰める
      setFormData((prev) => ({
        ...prev,
        [name]: value.substring(0, MAX_CONTENT_LENGTH),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(checked: boolean) {
    setFormData((prev) => ({ ...prev, isImportant: checked }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 送信前に再度文字数チェック
    if (formData.content.length > MAX_CONTENT_LENGTH) {
      alert(`内容は${MAX_CONTENT_LENGTH}文字以内で入力してください。`);
      return;
    }

    try {
      if (selectedNews) {
        // 更新
        await updateNews(selectedNews.id, {
          title: formData.title,
          content: formData.content,
          date: formData.date,
          isImportant: formData.isImportant,
        });
      } else {
        // 新規作成
        await createNews({
          title: formData.title,
          content: formData.content,
          date: formData.date,
          isImportant: formData.isImportant,
        });
      }
      // ダイアログを閉じてデータを再取得
      setIsDialogOpen(false);
      fetchNews();
    } catch (error) {
      console.error("ニュースの保存に失敗しました:", error);
      alert("ニュースの保存に失敗しました。");
    }
  }

  async function handleDelete() {
    if (!selectedNews) return;

    try {
      await deleteNews(selectedNews.id);
      setIsDeleteDialogOpen(false);
      fetchNews();
    } catch (error) {
      console.error("ニュースの削除に失敗しました:", error);
      alert("ニュースの削除に失敗しました。");
    }
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* ダッシュボードに戻るボタンを追加 */}
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin">
              <Home className="mr-2 h-4 w-4" />
              ダッシュボード
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">お知らせ管理</h1>
        </div>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" />
          新規作成
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      ) : news.length > 0 ? (
        <div className="grid gap-4">
          {news.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardDescription>
                      {format(new Date(item.date), "yyyy年MM月dd日", {
                        locale: ja,
                      })}
                    </CardDescription>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleOpenDialog(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleOpenDeleteDialog(item)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {item.isImportant && (
                  <span className="mt-2 inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    重要
                  </span>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
          お知らせがありません。「新規作成」ボタンをクリックして最初のお知らせを作成してください。
        </div>
      )}

      {/* ニュース編集/作成ダイアログ */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {selectedNews ? "お知らせを編集" : "新しいお知らせを作成"}
            </DialogTitle>
            <DialogDescription>
              以下のフォームに必要事項を入力し、保存ボタンをクリックしてください。
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">タイトル</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="content">内容</Label>
                <Textarea
                  id="content"
                  name="content"
                  rows={5}
                  value={formData.content}
                  onChange={handleInputChange}
                  maxLength={MAX_CONTENT_LENGTH}
                  required
                />
                <div className="text-right text-sm text-muted-foreground">
                  {formData.content.length}/{MAX_CONTENT_LENGTH}文字
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="date">日付</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isImportant"
                  checked={formData.isImportant}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="isImportant">重要なお知らせとして表示</Label>
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                キャンセル
              </Button>
              <Button type="submit">保存</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 削除確認ダイアログ */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>お知らせを削除</DialogTitle>
            <DialogDescription>
              このお知らせを削除してもよろしいですか？この操作は元に戻せません。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              キャンセル
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              削除
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
