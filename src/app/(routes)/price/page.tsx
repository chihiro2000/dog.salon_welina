import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PriceTable } from "@/components/price/price-table";

export const metadata: Metadata = {
  title: "料金表",
  description:
    "当店のトリミングサービスの料金表です。犬種やサイズに合わせた料金プランをご用意しています。",
};

export default function PricePage() {
  return (
    <div className="px-3 sm:px-4 md:container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            料金表
          </h1>
          <p className="text-lg text-muted-foreground">
            犬種、サイズ、毛質に合わせた最適なプランをご用意しています
          </p>
        </div>

        {/* 改良された料金表コンポーネント */}
        <div className="w-full">
          <PriceTable />
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-muted-foreground">
            料金についてのご質問やご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <Button size="lg" asChild>
            <Link href="/reservation">予約する</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
