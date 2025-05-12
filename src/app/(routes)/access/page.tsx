import { Metadata } from "next";
import { Map, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "当店へのアクセス情報です。最寄り駅からの道順や駐車場情報などをご確認いただけます。",
};

export default function AccessPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          アクセス
        </h1>
        <p className="text-lg text-muted-foreground">
          当店への交通アクセス情報をご案内いたします
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div>
          <div className="mb-8 space-y-6">
            <div className="flex gap-4">
              <Map className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h2 className="mb-2 text-xl font-semibold">所在地</h2>
                <p className="text-muted-foreground">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h2 className="mb-2 text-xl font-semibold">営業時間</h2>
                <p className="text-muted-foreground">
                  営業時間: {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.holidays}
                  <br />
                  駐車場あり
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h2 className="mb-2 text-xl font-semibold">お問い合わせ</h2>
                <p className="text-muted-foreground">
                  電話: {siteConfig.contact.phone}
                  <br />
                  メール: {siteConfig.contact.email}
                  <br />
                  お支払い: 現金・クレジット決済
                  <br />
                  登録番号：第4911-2号
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">アクセス方法</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-medium">電車でお越しの場合</h3>
                <p className="text-sm text-muted-foreground">
                  JR阪和線「信太山駅」より徒歩15分
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-medium">お車でお越しの場合</h3>
                <p className="text-sm text-muted-foreground">駐車場あり</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] overflow-hidden rounded-lg border md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.7887113086784!2d135.44861597654984!3d34.510505279674155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dad297455575%3A0x222cbb44f5594dbe!2z44CSNTk0LTAwMDIg5aSn6Ziq5bqc5ZKM5rG95biC5LiK55S377yT77yX77yT4oiS77yU!5e0!3m2!1sja!2sjp!4v1715626815407!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
