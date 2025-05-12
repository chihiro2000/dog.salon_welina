import { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

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
    "ペットのトリミングサービスのご予約はこちらから。お電話またはオンラインで簡単に予約できます。",
};

export default function ReservationPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          ご予約
        </h1>
        <p className="text-lg text-muted-foreground">
          お電話またはオンラインでカンタンにご予約いただけます
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Phone className="mb-2 h-10 w-10 text-primary" />
            <CardTitle>お電話でのご予約</CardTitle>
            <CardDescription>
              直接お電話いただければ、ご希望の日時をご相談いただけます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{siteConfig.contact.phone}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              営業時間:
              <br />
              平日: {siteConfig.hours.weekdays}
              <br />
              土日: {siteConfig.hours.weekends}
              <br />
              {siteConfig.hours.holidays}
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              ご予約のキャンセルは前日までにご連絡ください。
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Calendar className="mb-2 h-10 w-10 text-primary" />
            <CardTitle>オンラインでのご予約</CardTitle>
            <CardDescription>
              24時間いつでもオンラインで簡単にご予約いただけます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              以下のボタンから予約サイトへ移動し、ご希望の日時とメニューをお選びください。
              初めてご利用の方は、会員登録が必要です。
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" asChild>
              <Link href="https://epark.jp" target="_blank">
                EPARKで予約する
              </Link>
            </Button>
          </CardFooter>
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
