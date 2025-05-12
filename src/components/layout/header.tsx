"use client";

import { useState } from "react";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ImageModal } from "@/components/gallery/image-modal";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="inline-block text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
          <span className="sr-only">メニューを開く</span>
        </Button>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Navigation />
          <Button asChild>
            <Link href="/reservation">予約する</Link>
          </Button>
        </nav>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-background p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
              <Navigation mobile />
              <Button asChild className="w-full">
                <Link href="/reservation">予約する</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
