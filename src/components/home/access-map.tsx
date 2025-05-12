import Link from "next/link";
import { Map, Clock, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function AccessMap() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            アクセス
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            便利な立地で、お気軽にお越しいただけます
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div>
            <div className="mb-8 space-y-6">
              <div className="flex gap-4">
                <Map className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">所在地</h3>
                  <p className="text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">営業時間</h3>
                  <p className="text-muted-foreground">
                    平日: {siteConfig.hours.weekdays}
                    <br />
                    土日: {siteConfig.hours.weekends}
                    <br />
                    {siteConfig.hours.holidays}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">お問い合わせ</h3>
                  <p className="text-muted-foreground">
                    電話: {siteConfig.contact.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center md:text-left">
              <Button variant="outline" size="lg" asChild>
                <Link href="/access">
                  詳しいアクセス情報
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="h-[300px] overflow-hidden rounded-lg border md:h-[350px]">
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
    </section>
  );
}
