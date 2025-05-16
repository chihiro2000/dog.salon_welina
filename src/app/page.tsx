import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { AccessMap } from "@/components/home/access-map";
import { NewsSection } from "@/components/home/news-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Features } from "@/components/home/features";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <NewsSection />
      <Services />
      <GalleryPreview />
      <AccessMap />

      <section className="bg-background py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              あなたの大切なペットのために
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {siteConfig.name}
              では、その子その子に合わせたトリミングを心がけています。
              ペットの個性に合わせたスタイリングでお応えします。
              皆様とペットの笑顔のために、丁寧な施術と快適な空間をご用意しておりますので、ぜひお気軽にご来店ください。
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-muted p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">プロの技術</h3>
                <p className="text-sm text-muted-foreground">
                  熟練したトリマーによる確かな技術で、ペットに負担をかけない施術を行います。
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">駐車場完備</h3>
                <p className="text-sm text-muted-foreground">
                  駐車場を完備しておりますので、お車でのご来店も安心です。
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">
                  多様なお支払い方法
                </h3>
                <p className="text-sm text-muted-foreground">
                  現金だけでなく、クレジットカード決済も可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
