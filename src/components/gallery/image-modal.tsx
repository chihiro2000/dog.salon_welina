import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { type GalleryImage } from "@/lib/supabase/spabase";

interface ImageModalProps {
  isOpen: boolean;
  image: GalleryImage | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function ImageModal({
  isOpen,
  image,
  onClose,
  onPrevious,
  onNext,
}: ImageModalProps) {
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
        <div className="relative h-[70vh] w-full max-w-4xl">
          <Image
            src={image.image_url}
            alt={image.title}
            fill
            className="rounded-lg object-contain"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 rounded-full bg-black/20 text-white hover:bg-black/40"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">閉じる</span>
          </Button>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/20 text-white hover:bg-black/40"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">前の画像</span>
            </Button>
            <div className="rounded-lg bg-black/30 p-2 text-center text-white">
              <h3 className="text-lg font-medium">{image.title}</h3>
              {image.description && (
                <p className="text-sm text-white/80">{image.description}</p>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/20 text-white hover:bg-black/40"
              onClick={onNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">次の画像</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
