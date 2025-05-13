"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getGalleryImages } from "@/lib/gallery-api";
import { type GalleryImage } from "@/lib/supabase/spabase";

interface GalleryGridProps {
  onImageClick: (image: GalleryImage) => void;
  onImagesLoaded: (images: GalleryImage[]) => void;
  displayImages?: GalleryImage[];
  hideTitle?: boolean;
  columnCount?: number;
}

export function GalleryGrid({
  onImageClick,
  onImagesLoaded,
  displayImages,
  hideTitle = false,
  columnCount = 3,
}: GalleryGridProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const imagesData = await getGalleryImages(100); // 最大100枚取得
        setImages(imagesData);
        onImagesLoaded(imagesData);
      } catch (error) {
        console.error("ギャラリー画像の取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!displayImages) {
      loadImages();
    } else {
      setImages(displayImages);
      setIsLoading(false);
    }
  }, [onImagesLoaded, displayImages]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  // グリッドのカラム数を設定（PCは5カラム）
  const gridClass = `grid gap-4 ${
    columnCount === 2
      ? "grid-cols-2 sm:grid-cols-2"
      : columnCount === 5
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  }`;

  return (
    <div className={gridClass}>
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative aspect-square overflow-hidden rounded-lg border bg-muted"
          onClick={() => onImageClick(image)}
        >
          <Image
            src={image.image_url}
            alt={image.title || "ギャラリー画像"}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {!hideTitle && image.title && (
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-sm font-medium text-white">{image.title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
