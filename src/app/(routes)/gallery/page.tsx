"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ImageModal } from "@/components/gallery/image-modal";
import { type GalleryImage } from "@/lib/supabase/spabase";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // モバイルかPCかを検出
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // 1ページあたりの画像数
  const itemsPerPage = isMobile ? 10 : 30;

  // 総ページ数を計算
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // 表示する画像をページに応じてフィルタリング
  const displayImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  // ページを変更する関数
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">ギャラリー</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          当店でのトリミング実績をご紹介します。かわいく仕上がったペットたちをご覧ください。
        </p>
      </div>

      {images.length === 0 ? (
        // 最初のデータ読み込み
        <GalleryGrid
          onImageClick={handleImageClick}
          onImagesLoaded={handleImagesLoaded}
        />
      ) : (
        // 表示用（ページネーション適用済み）
        <GalleryGrid
          onImageClick={handleImageClick}
          onImagesLoaded={() => {}}
          displayImages={displayImages}
          hideTitle={true}
          columnCount={isMobile ? 2 : 5} // PC時は5カラム
        />
      )}

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              aria-label="前のページへ"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // 現在のページ、最初のページ、最後のページ、現在のページの前後は常に表示
              const shouldShow =
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1 ||
                totalPages <= 7;

              // 「...」を表示する条件
              const showEllipsis =
                (page === currentPage - 2 && currentPage > 3) ||
                (page === currentPage + 2 && currentPage < totalPages - 2);

              if (shouldShow) {
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                      ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                      }`}
                  >
                    {page}
                  </button>
                );
              } else if (showEllipsis) {
                return (
                  <span key={page} className="px-2">
                    ...
                  </span>
                );
              }

              return null;
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              aria-label="次のページへ"
            >
              &gt;
            </button>
          </nav>
        </div>
      )}

      {/* インスタグラムリンク */}
      <div className="mt-16 flex flex-col items-center">
        <p className="mb-4 text-center text-lg text-muted-foreground">
          Instagramでも、トリミングしたわんちゃんの可愛い写真を投稿しています！
          <br />
          ぜひフォローしてチェックしてみてください♪
        </p>
        <Link
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition-transform hover:scale-105"
        >
          <Instagram size={48} className="text-pink-500 mb-2" />
          <span className="text-lg font-medium">Instagram</span>
        </Link>
      </div>

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
