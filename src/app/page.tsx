import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { NewsSection } from "@/components/home/news-section";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <NewsSection />

      <section className="bg-background py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              あなたの大切なペットのために
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {siteConfig.name}
              では、ペットの健康と美しさを第一に考え、安心・安全なトリミングサービスを提供しています。
              熟練したトリマーが、ペットの個性や好みに合わせたスタイリングを心がけています。
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
                <h3 className="mb-2 text-xl font-semibold">快適な空間</h3>
                <p className="text-sm text-muted-foreground">
                  清潔で明るい店内で、ペットもリラックスして施術を受けられます。
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">
                  丁寧なカウンセリング
                </h3>
                <p className="text-sm text-muted-foreground">
                  ペットの状態や飼い主様のご要望をしっかりとお聞きし、最適なプランをご提案します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
