import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 pb-16 md:pb-6">
      {" "}
      {/* pb-16を追加 */}
      <div className="container py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent p-2 transition-colors hover:bg-accent/80"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">営業時間</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium">平日: </span>
                {siteConfig.hours.weekdays}
              </li>
              <li>
                <span className="font-medium">土日: </span>
                {siteConfig.hours.weekends}
              </li>
              <li>
                <span className="font-medium">定休日: </span>
                {siteConfig.hours.holidays}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium">住所: </span>
                {siteConfig.contact.address}
              </li>
              <li>
                <span className="font-medium">電話: </span>
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {siteConfig.contact.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
