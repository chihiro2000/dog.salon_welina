import { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ご予約",
  description:
    "ペットのトリミングサービスのご予約はこちらから。オンラインまたはお電話で簡単に予約できます。",
};

export default function ReservationPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          ご予約
        </h1>
        <p className="text-lg text-muted-foreground">
          24時間いつでもオンラインで簡単にご予約いただけます
        </p>
      </div>

      <div className="mx-auto mb-8 max-w-4xl">
        <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-secondary/40 to-primary/10">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Calendar className="mr-3 h-12 w-12 text-primary" />
              <div>
                <CardTitle className="text-2xl">EPARKでのご予約</CardTitle>
                <CardDescription className="text-base">
                  24時間いつでも簡単にご予約可能
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg">
              ネットから簡単にご予約いただけます。スマホやパソコンからいつでもどこでも予約できるため、お電話が混み合う時間帯でもストレスなくご予約可能です。初めての方も安心してご利用ください。
            </p>
            <div className="flex justify-center">
              <a
                href="https://petlife.asia/salon/17897/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md"
              >
                <Button className="w-full py-6 text-lg" size="lg">
                  EPARKで予約する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </CardContent>
          <CardFooter className="bg-primary/5 pt-4">
            <p className="text-center text-sm text-muted-foreground">
              EPARKペットライフは24時間いつでも予約可能。キャンセルもオンラインで簡単に行えます。
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="mx-auto max-w-4xl">
        <Card className="border border-muted bg-muted/20">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Phone className="mr-3 h-6 w-6 text-muted-foreground" />
              <div>
                <CardTitle className="text-base">
                  お電話でのご予約も可能です
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-between pb-4 pt-0">
            <div>
              <p className="text-lg font-medium">{siteConfig.contact.phone}</p>
              <p className="text-sm text-muted-foreground">
                営業時間: {siteConfig.hours.weekdays} /{" "}
                {siteConfig.hours.holidays}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              ※ご予約のキャンセルは前日までにご連絡ください
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-semibold">予約時のご注意</h2>
        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
          <li>初めてご利用の方は、ワクチン接種証明書をご持参ください。</li>
          <li>
            当日は余裕を持ってお越しください。混雑状況により、多少お待ちいただく場合がございます。
          </li>
          <li>体調の悪いペットのトリミングはお断りする場合がございます。</li>
          <li>特別なご要望がある場合は、予約時にお申し付けください。</li>
        </ul>
      </div>
    </div>
  );
}
