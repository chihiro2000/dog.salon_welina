"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section className="py-8 bg-[#fcf9e4] sm:py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <div className="mb-4 sm:mb-8 text-center">
          <h3
            className="text-2xl md:text-3xl font-medium text-[#b7aa79] mb-1 md:mb-2 italic"
            style={{ fontFamily: "cursive" }}
          >
            Our Services
          </h3>
          <h2 className="mb-1 sm:mb-2 text-3xl font-bold tracking-tight md:text-5xl text-[#4a4333]">
            サービス
          </h2>
        </div>

        {/* トリミング */}
        <div className="mb-10 sm:mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 mb-4 md:mb-0 order-1 md:order-2">
              <div
                className="relative w-full overflow-hidden rounded-3xl"
                style={{ paddingTop: "75%" }}
              >
                <Image
                  src="/images/services/trimming.png"
                  alt="トリミング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 order-2 md:order-1 md:pr-12">
              <h3
                className="text-2xl md:text-3xl font-medium text-[#b7aa79] mb-1 md:mb-2 italic"
                style={{ fontFamily: "cursive" }}
              >
                Trimming
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4a4333] mb-2 md:mb-6">
                トリミング
              </h2>
              <p className="text-sm md:text-lg text-[#70695a] mb-4 md:mb-8 leading-relaxed">
                トリミングは見た目を整えるだけでなく、ワンちゃんの健康や快適さを守る大切なケアです。
                当サロンでは、一匹一匹の性格や体質、被毛や皮膚の状態を丁寧に見極めながら、
                その子に合ったスタイルと施術を行っています。
                <br />
                <br />
                シャンプーには、トリマー目線で開発された『Leadog（リードッグ）』を使用し、
                やさしく汚れを落としながら、ふんわりとした仕上がりに。
                カットもしやすく、時短でワンちゃんの負担も軽減できるため、
                最後まで安心してお任せいただけます。
                <br />
                <br />
                可愛さだけでなく、過ごしやすさやお手入れのしやすさまで考えた
                "その子らしさ"を大切にしたトリミングを心がけています。
              </p>

              <div>
                <Link
                  href="/price"
                  className="inline-flex items-center rounded-full bg-[#a0e1a7] hover:bg-[#abefb3] px-5 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium text-[#4a4333] transition-colors"
                >
                  MORE
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* シャンプー */}
        <div className="mb-10 sm:mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-3/5 mb-4 md:mb-0 order-1">
              <div
                className="relative w-full overflow-hidden rounded-3xl"
                style={{ paddingTop: "75%" }}
              >
                <Image
                  src="/images/services/shampoo.png"
                  alt="シャンプー"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 order-2 md:pl-12">
              <h3
                className="text-2xl md:text-3xl font-medium text-[#b7aa79] mb-1 md:mb-2 italic"
                style={{ fontFamily: "cursive" }}
              >
                Shampoo Care
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4a4333] mb-2 md:mb-6">
                シャンプー
              </h2>
              <p className="text-sm md:text-lg text-[#70695a] mb-4 md:mb-8 leading-relaxed">
                ワンちゃんの皮膚は人よりもデリケートでとても敏感です。
                当サロンでは、健康な肌と美しい被毛を守るために、
                トリマー目線で開発された高品質シャンプー『Leadog（リードッグ）』を使用しています。
                <br />
                <br />
                脂性肌用・普通肌用・敏感肌用の3種類があり、
                それぞれのワンちゃんの肌質や毛質に合わせて最適なものを使い分けています。
                <br />
                <br />
                コンディショナーなしでもふんわり柔らかく仕上がり、
                乾きやすく、カットのしやすさも特長です。
                短時間で負担をかけずにケアができるよう配慮しています。
                <br />
                <br />
                『Leadog』は、やさしい成分で洗い上げることはもちろん、
                トリミング作業のしやすさや仕上がりの可愛さにもこだわった、
                ワンちゃんにもトリマーにもやさしいシャンプーです。
              </p>

              <div>
                <Link
                  href="/price"
                  className="inline-flex items-center rounded-full bg-[#a0e1a7] hover:bg-[#abefb3] px-5 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium text-[#4a4333] transition-colors"
                >
                  MORE
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 料金表ボタン */}
      </div>
    </section>
  );
}
