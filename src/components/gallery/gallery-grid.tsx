"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getGalleryImages } from "@/lib/gallery-api";
import { type GalleryImage } from "@/lib/supabase/spabase";

interface GalleryGridProps {
  onImageClick: (image: GalleryImage) => void;
  onImagesLoaded?: (images: GalleryImage[]) => void;
}

export function GalleryGrid({
  onImageClick,
  onImagesLoaded,
}: GalleryGridProps) {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryImages() {
      try {
        const images = await getGalleryImages();
        setGalleryImages(images);
        // 読み込み完了後、親コンポーネントに画像を通知
        if (onImagesLoaded) {
          onImagesLoaded(images);
        }
      } catch (error) {
        console.error("ギャラリー画像の取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGalleryImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
        現在ギャラリーに画像はありません。
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="group relative cursor-pointer overflow-hidden rounded-lg transition-all"
          onClick={() => onImageClick(image)}
        >
          <div className="aspect-square w-full overflow-hidden">
            <Image
              src={image.image_url}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-lg font-medium text-white">{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
