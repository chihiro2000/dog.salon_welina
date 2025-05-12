// src/app/(routes)/gallery/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "当店でトリミングしたワンちゃんの素敵な写真ギャラリーです。",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
