"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery-api";
import { type GalleryImage } from "@/lib/supabase/spabase";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryImages() {
      try {
        const images = await getGalleryImages(6); // 最新の6枚のみ取得
        setGalleryImages(images);
      } catch (error) {
        console.error("ギャラリー画像の取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGalleryImages();
  }, []);

  return (
    <section className="bg-[#fefbf2]/70 py-8 sm:py-24">
      <div className="container">
        <div className="mb-6 sm:mb-12 text-center">
          <h3
            className="text-2xl md:text-3xl font-medium text-[#b7aa79] mb-1 md:mb-2 italic"
            style={{ fontFamily: "cursive" }}
          >
            Gallery
          </h3>
          <h2 className="mb-1 sm:mb-2 text-3xl font-bold tracking-tight text-[#4a4333] md:text-4xl">
            ギャラリー
          </h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-6 sm:py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-[#b7aa79]"></div>
          </div>
        ) : galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
            {galleryImages.map((image) => (
              <Link
                key={image.id}
                href={`/gallery`}
                className="group relative overflow-hidden rounded-xl transition-all hover:shadow-md"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={image.image_url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-[#e6deb7] bg-[#fdfbea]/50 p-4 sm:p-8 text-center text-[#70695a]">
            現在ギャラリーに画像はありません。
          </div>
        )}

        <div className="mt-6 sm:mt-12 text-center">
          <Button
            size="lg"
            className="rounded-full bg-[#a0e1a7] text-[#4a4333] hover:bg-[#abefb3] transition-colors"
            asChild
          >
            <Link href="/gallery">
              すべての写真を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
