import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { LineIcon } from "@/components/icons/line-icon";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="text-muted-foreground hover:text-foreground"
                >
                  料金
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link
                  href="/access"
                  className="text-muted-foreground hover:text-foreground"
                >
                  アクセス
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="text-muted-foreground hover:text-foreground"
                >
                  予約
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">営業時間</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>営業時間: {siteConfig.hours.weekdays}</li>
              <li>{siteConfig.hours.holidays}</li>
              <li>駐車場あり</li>
              <li>登録番号：第4911-2号</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>電話: {siteConfig.contact.phone}</li>
              <li>メール: {siteConfig.contact.email}</li>
              <li>住所: {siteConfig.contact.address}</li>
              <li>お支払い: 現金・クレジット決済</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link
                href={siteConfig.links.line}
                className="text-foreground hover:text-primary"
              >
                <LineIcon className="h-8 w-8" />
                <span className="sr-only">LINE</span>
              </Link>
              <Link
                href={siteConfig.links.instagram}
                className="text-foreground hover:text-primary"
              >
                <Instagram className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
