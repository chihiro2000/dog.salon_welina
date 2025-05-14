"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Upload, Home } from "lucide-react";

import {
  getGalleryImages,
  createGalleryImage,
  deleteGalleryImage,
} from "@/lib/gallery-api";
import { type GalleryImage } from "@/lib/supabase/spabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const galleryImages = await getGalleryImages(100); // 最大100件取得
      setImages(galleryImages);
    } catch (error) {
      console.error("ギャラリー画像の取得に失敗しました:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenDialog() {
    setSelectedImage(null);
    setImageFile(null);
    setPreviewUrl(null);
    setIsDialogOpen(true);
  }

  function handleOpenDeleteDialog(image: GalleryImage) {
    setSelectedImage(image);
    setIsDeleteDialogOpen(true);
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // 新規作成
      if (!imageFile) {
        alert("画像を選択してください。");
        return;
      }

      // タイトルと説明はデフォルト値を設定
      const currentDate = new Date();
      const defaultTitle = `画像 ${currentDate.toLocaleDateString()}`;
      const defaultDescription = `アップロード日時: ${currentDate.toLocaleString()}`;

      await createGalleryImage(imageFile, {
        title: defaultTitle,
        description: defaultDescription,
      });

      // ダイアログを閉じてデータを再取得
      setIsDialogOpen(false);
      fetchImages();
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    } catch (error) {
      console.error("ギャラリー画像の保存に失敗しました:", error);
      alert("ギャラリー画像の保存に失敗しました。");
    }
  }

  async function handleDelete() {
    if (!selectedImage) return;

    try {
      // 画像のパスを抽出（例: 'gallery/1234567890.jpg'）
      const imagePath = selectedImage.image_url.split("/").slice(-2).join("/");
      await deleteGalleryImage(selectedImage.id, imagePath);
      setIsDeleteDialogOpen(false);
      fetchImages();
    } catch (error) {
      console.error("ギャラリー画像の削除に失敗しました:", error);
      alert("ギャラリー画像の削除に失敗しました。");
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
          <h1 className="text-3xl font-bold">ギャラリー管理</h1>
        </div>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" />
          新規アップロード
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      ) : images.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image
                  src={image.image_url}
                  alt="ギャラリー画像"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <Button
                  variant="destructive"
                  size="sm"
                  className="w-full"
                  onClick={() => handleOpenDeleteDialog(image)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  削除
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
          ギャラリー画像がありません。「新規アップロード」ボタンをクリックして最初の画像をアップロードしてください。
        </div>
      )}

      {/* 画像アップロードダイアログ */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>新しい画像をアップロード</DialogTitle>
            <DialogDescription>
              ギャラリーに表示する画像を選択してください。
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              {/* 画像プレビュー */}
              {previewUrl && (
                <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-lg">
                  <Image
                    src={previewUrl}
                    alt="プレビュー"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* 画像アップロード */}
              <div className="grid gap-2">
                <Label htmlFor="image">画像を選択</Label>
                <div
                  className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center hover:bg-muted/50"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
                  <p className="mb-1 text-sm font-medium">
                    クリックして画像をアップロード
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, GIF (最大 5MB)
                  </p>
                  <input
                    ref={fileInputRef}
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    required
                  />
                </div>
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
              <Button type="submit">アップロード</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 削除確認ダイアログ */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ギャラリー画像を削除</DialogTitle>
            <DialogDescription>
              この画像を削除してもよろしいですか？この操作は元に戻せません。
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
