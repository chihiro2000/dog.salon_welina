"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューを閉じる関数
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e6deb7] bg-[#fffef8]/90 backdrop-blur-sm">
      <div className="container flex h-24 md:h-32 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={300}
              height={120}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="text-[#4a4333] md:hidden"
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
          <Button
            className="rounded-full bg-[#a0e1a7] text-[#4a4333] hover:bg-[#abefb3] transition-colors"
            asChild
          >
            <Link href="/reservation">予約する</Link>
          </Button>
        </nav>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
              <Navigation mobile onItemClick={closeMenu} />
              <Button
                asChild
                className="w-full rounded-full bg-[#a0e1a7] text-[#4a4333] hover:bg-[#abefb3] transition-colors"
              >
                <Link href="/reservation" onClick={closeMenu}>
                  予約する
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
