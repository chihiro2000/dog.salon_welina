"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trash2, Edit, Plus, Upload } from "lucide-react";

import {
  getGalleryImages,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} from "@/lib/gallery-api";
import { type GalleryImage } from "@/lib/supabase/spabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { Label } from "@/components/ui/label";

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
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

  function handleOpenDialog(image?: GalleryImage) {
    if (image) {
      setSelectedImage(image);
      setFormData({
        title: image.title,
        description: image.description,
      });
      setPreviewUrl(image.image_url);
    } else {
      setSelectedImage(null);
      setFormData({
        title: "",
        description: "",
      });
      setImageFile(null);
      setPreviewUrl(null);
    }
    setIsDialogOpen(true);
  }

  function handleOpenDeleteDialog(image: GalleryImage) {
    setSelectedImage(image);
    setIsDeleteDialogOpen(true);
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      if (selectedImage) {
        // 更新（メタデータのみ）
        await updateGalleryImage(selectedImage.id, {
          title: formData.title,
          description: formData.description,
        });
      } else {
        // 新規作成
        if (!imageFile) {
          alert("画像を選択してください。");
          return;
        }

        await createGalleryImage(imageFile, {
          title: formData.title,
          description: formData.description,
        });
      }
      // ダイアログを閉じてデータを再取得
      setIsDialogOpen(false);
      fetchImages();
      if (previewUrl && !selectedImage) {
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
        <h1 className="text-3xl font-bold">ギャラリー管理</h1>
        <Button onClick={() => handleOpenDialog()}>
          <Plus className="mr-2 h-4 w-4" />
          新規作成
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
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1 text-lg">
                  {image.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {image.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleOpenDialog(image)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  編集
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleOpenDeleteDialog(image)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  削除
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
          ギャラリー画像がありません。「新規作成」ボタンをクリックして最初の画像をアップロードしてください。
        </div>
      )}

      {/* ギャラリー編集/作成ダイアログ */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {selectedImage
                ? "ギャラリー画像を編集"
                : "新しいギャラリー画像を追加"}
            </DialogTitle>
            <DialogDescription>
              以下のフォームに必要事項を入力し、保存ボタンをクリックしてください。
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

              {/* 画像アップロード（新規作成時のみ） */}
              {!selectedImage && (
                <div className="grid gap-2">
                  <Label htmlFor="image">画像</Label>
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
                      required={!selectedImage}
                    />
                  </div>
                </div>
              )}

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
                <Label htmlFor="description">説明</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                />
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
