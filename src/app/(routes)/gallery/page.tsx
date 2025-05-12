"use client";
// src / app / routes / gallery / page.tsx;

import React, { useState } from "react";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ImageModal } from "@/components/gallery/image-modal";
import { type GalleryImage } from "@/lib/supabase/spabase";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);

  // モーダルで画像を表示
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // 前の画像を表示
  const handlePrevious = () => {
    if (!selectedImage || images.length === 0) return;

    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  // 次の画像を表示
  const handleNext = () => {
    if (!selectedImage || images.length === 0) return;

    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  // 画像をロードした後に全ての画像を保存
  const handleImagesLoaded = (loadedImages: GalleryImage[]) => {
    setImages(loadedImages);
  };

  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">ギャラリー</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          当店でのトリミング実績をご紹介します。かわいく仕上がったペットたちをご覧ください。
        </p>
      </div>

      <GalleryGrid
        onImageClick={handleImageClick}
        onImagesLoaded={handleImagesLoaded}
      />

      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
