import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { LineIcon } from "@/components/icons/line-icon";

export function Footer() {
  return (
    <footer className="border-t border-[#e6deb7] bg-[#fcf9e4]">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-[#4a4333]">
                DOG SALON Welina
              </h3>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#4a4333]">
              リンク
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#70695a] hover:text-[#4a4333]">
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="text-[#70695a] hover:text-[#4a4333]"
                >
                  料金
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#70695a] hover:text-[#4a4333]"
                >
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#70695a] hover:text-[#4a4333]"
                >
                  店舗概要
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="text-[#70695a] hover:text-[#4a4333]"
                >
                  予約
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#4a4333]">
              営業時間
            </h4>
            <ul className="space-y-2 text-sm text-[#70695a]">
              <li>営業時間: {siteConfig.hours.weekdays}</li>
              <li>{siteConfig.hours.holidays}</li>
              <li>駐車場あり</li>
              <li>登録番号：第4755-2号</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#4a4333]">
              お問い合わせ
            </h4>
            <ul className="space-y-2 text-sm text-[#70695a]">
              <li>電話: {siteConfig.contact.phone}</li>

              <li>住所: {siteConfig.contact.address}</li>
              <li>お支払い: 現金・クレジット決済</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link
                href={siteConfig.links.line}
                className="text-[#4a4333] hover:text-[#b7aa79]"
              >
                <LineIcon className="h-8 w-8" />
                <span className="sr-only">LINE</span>
              </Link>
              <Link
                href={siteConfig.links.instagram}
                className="text-[#4a4333] hover:text-[#b7aa79]"
              >
                <Instagram className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#e6deb7] pt-6 text-center text-sm text-[#8c8574]">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
