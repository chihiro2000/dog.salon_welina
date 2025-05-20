"use client";

import Image from "next/image";
import {
  User,
  ShieldCheck,
  Heart,
  Clock,
  Camera,
  CheckCircle2,
} from "lucide-react";

export default function CommitmentPage() {
  return (
    <div className="bg-[#fdfbea]/30 overflow-x-hidden">
      {/* ===== Hero ===== */}
      <section className="py-14 md:py-24 relative overflow-hidden">
        {/* 背景のぼかし円 */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute h-72 w-72 rounded-full bg-[#b7aa79]/40 blur-3xl -left-28 -top-20" />
          <div className="absolute h-72 w-72 rounded-full bg-[#e6deb7]/40 blur-3xl right-10 top-36" />
          <div className="absolute h-72 w-72 rounded-full bg-[#d4c99b]/40 blur-3xl -right-24 -bottom-24" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#4a4333]">
              わんちゃんファーストの想い
            </h1>
            <p className="mb-8 text-lg text-[#70695a]">
              当サロンでは、わんちゃんの気持ちを第一に考えた丁寧な施術と安心できる環境づくりを大切にしています。
              トリミング技術はもちろん、「わんちゃんの幸せ」を最優先にした特別なサービスをご提供します。
            </p>
          </div>

          <div className="mt-8 relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3] sm:aspect-[3/2] md:aspect-[21/9] relative">
              <Image
                src="/images/hero/hero-dog-1.jpg"
                alt="わんちゃんファーストのトリミング"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xl sm:text-2xl font-semibold">
                  わんちゃんの「快適」と「安心」にこだわった施術
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== トリマーと環境へのこだわり ===== */}
      <section className="py-14 md:py-24 bg-[#fcf9e4] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 説明 */}
            <div className="order-2 md:order-1 space-y-6">
              <div className="relative">
                <span className="inline-block h-1.5 w-12 rounded-full bg-[#b7aa79] absolute -top-4 left-0" />
                <h3 className="text-lg font-semibold text-[#b7aa79] mb-2">
                  信頼関係を大切に
                </h3>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#4a4333]">
                トリマーと環境へのこだわり
              </h2>

              {/* 2項目 */}
              {[
                {
                  icon: User,
                  title: "担当トリマー制",
                  text: "毎回同じトリマーが担当するので、わんちゃんの小さな変化も見逃しません。信頼関係を築きながら、お子様に合った施術をご提供します。",
                },
                {
                  icon: ShieldCheck,
                  title: "完全入れ替わり制",
                  text: "他の犬が苦手なわんちゃんも安心して施術が受けられる環境を整えています。落ち着いた雰囲気の中でトリミングを受けられます。",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#a0e1a7]/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#4a4333]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#4a4333] mb-1">
                      {title}
                    </h3>
                    <p className="text-[#70695a]">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 画像 */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/hero/hero-dog-2.jpg"
                    alt="担当トリマーとわんちゃん"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-[#a0e1a7]/40 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 施術へのこだわり ===== */}
      <section className="py-14 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className="text-2xl sm:text-3xl font-medium text-[#b7aa79] mb-2 italic"
              style={{ fontFamily: "cursive" }}
            >
              Our Process
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4a4333] mb-4">
              施術へのこだわり
            </h2>
            <p className="max-w-3xl mx-auto text-[#70695a]">
              わんちゃんのストレスを最小限に抑え、リラックスした状態でトリミングを行うための工夫をご紹介します。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "トリミング前のスキンシップ",
                text: "トリミング前にはわんちゃんの様子を伺いながらスキンシップを取り、リラックスした状態で施術に入ります。",
              },
              {
                icon: Clock,
                title: "シャンプー後の休憩時間",
                text: "シャンプー後には少し休憩時間を設けています。 ストレスを軽減し、リラックスした状態でトリミングを行います。",
              },
              {
                icon: Camera,
                title: "思い出のプレゼント",
                text: "施術中のかわいい姿を写真や動画に収めてプレゼント。大切なわんちゃんの特別な瞬間をお持ち帰りいただけます。",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-[#e6deb7] p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="mb-4 rounded-full bg-[#fdfbea] h-14 w-14 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-[#b7aa79]" />
                </div>
                <h3 className="text-xl font-semibold text-[#4a4333] mb-2">
                  {title}
                </h3>
                <p className="text-[#70695a]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== カットスタイルへのこだわり ===== */}
      <section className="py-14 md:py-24 bg-[#fdfbea]/60 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 画像 */}
            <div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/hero/hero-dog-3.jpg"
                    alt="カスタムスタイリング"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-[#b7aa79]/30 rounded-full blur-xl" />
              </div>
            </div>

            {/* 説明 */}
            <div className="space-y-6">
              <div className="relative">
                <span className="inline-block h-1.5 w-12 rounded-full bg-[#b7aa79] absolute -top-4 left-0" />
                <h3 className="text-lg font-semibold text-[#b7aa79] mb-2">
                  その子らしさを大切に
                </h3>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#4a4333]">
                カットスタイルへのこだわり
              </h2>

              {[
                {
                  title: "豊富なデザイン",
                  text: "スッキリしたスタイルからふんわりとしたスタイルまで幅広く対応します。 様々な犬種や毛質に合わせたカットをご提案できます。",
                },
                {
                  title: "飼い主様との相談",
                  text: "見た目の可愛さだけでなく、わんちゃんが快適に過ごせるようなカットスタイルを 飼い主様と一緒に考えます。ライフスタイルに合わせた提案をいたします。",
                },
                {
                  title: "ゆとりある施術",
                  text: "急かすことなく、わんちゃんのペースに合わせたゆったりとした時間の中で トリミングを行います。丁寧なカットで仕上がりにも差が出ます。",
                },
              ].map(({ title, text }) => (
                <div key={title} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#a0e1a7] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#4a4333]">
                      {title}
                    </h3>
                    <p className="text-[#70695a]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== まとめ ===== */}
      <section className="py-14 md:py-24 bg-[#fcf9e4] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-2xl sm:text-3xl font-medium text-[#b7aa79] mb-2 italic"
              style={{ fontFamily: "cursive" }}
            >
              Our Promise
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4a4333] mb-6">
              わんちゃんと飼い主様への約束
            </h2>
            <p className="text-lg text-[#70695a]">
              当サロンでは、わんちゃんの健康と快適さを最優先に考え、
              愛情を持って丁寧に施術いたします。
              飼い主様にも安心してお任せいただけるよう、
              わんちゃん一頭一頭に合わせたサービスをご提供いたします。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
