import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-muted/30 py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="可愛い犬と猫"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              あなたの大切な家族に
              <span className="text-primary">最高のケア</span>を
            </h1>
            <p className="mb-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Pet
              Salonでは、プロのトリマーが愛情を込めて、ペットの美しさと健康をサポートします。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/reservation">今すぐ予約する</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/price">料金を見る</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl sm:h-[400px] md:h-[500px]">
            <Image
              src="/images/hero/hero-dog.jpg"
              alt="トリミング後の可愛い犬"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
