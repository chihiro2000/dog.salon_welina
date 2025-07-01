"use client";

import React from "react";
import { User, ShieldCheck, Scissors } from "lucide-react";

export function Features() {
  return (
    <section className="relative overflow-hidden py-14 md:py-24 bg-[#fcf9e4]">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#e6deb7]/40 blur-3xl" />
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-[#b7aa79]/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#d4c99b]/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* セクション見出し */}
        <div className="text-center mb-16 relative z-10">
          <h3
            className="text-2xl sm:text-3xl font-medium text-[#b7aa79] mb-2 italic"
            style={{ fontFamily: "cursive" }}
          >
            Our Commitment
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a4333]">
            当店のこだわり
          </h2>
        </div>

        {/* ==== Feature 1 ==== */}
        <FeatureBlock
          reverse={false}
          Icon={User}
          title="担当トリマー制"
          text="トリマーが変わることなく、同じトリマーが担当するため、わんちゃんの小さな変化もすぐに分かります。"
          imageUrl="/images/irekawari1.jpg"
        />

        {/* ==== Feature 2 ==== */}
        <FeatureBlock
          reverse
          Icon={ShieldCheck}
          title="完全入れ替わり制"
          text="他の犬が苦手なわんちゃんも、完全入れ替わり制なので落ち着いた環境でトリミングを受けられます."
          imageUrl="/images/triming1.jpg"
        />

        {/* ==== Feature 3 ==== */}
        <FeatureBlock
          reverse={false}
          Icon={Scissors}
          title="オーダーメイドカット"
          text="可愛さだけでなく、わんちゃんが快適に暮らせるようにカットスタイルは飼い主様と相談しながら決めていきます。"
          imageUrl="/images/ordermade.jpg"
        />
      </div>
    </section>
  );
}

/* ---------- サブコンポーネント ---------- */
interface FeatureBlockProps {
  reverse?: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  imageUrl: string;
  bgText?: React.ReactNode; // オプショナルに変更
}

function FeatureBlock({
  reverse = false,
  Icon,
  title,
  text,
  imageUrl,
}: FeatureBlockProps) {
  return (
    <div
      className={`relative z-10 mb-20 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center max-w-5xl mx-auto`}
    >
      {/* テキスト側 */}
      <div
        className={`w-full md:w-1/2 p-6 ${
          reverse ? "md:pl-12" : "md:pr-12"
        } space-y-4`}
      >
        <div className="flex items-center">
          <Icon className="h-9 w-9 text-[#b7aa79] mr-3 flex-shrink-0" />
          <h3 className="text-2xl font-semibold text-[#4a4333]">{title}</h3>
        </div>
        <p className="text-[#70695a] text-lg leading-relaxed">{text}</p>
      </div>

      {/* 画像側 - モバイル対応修正 */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <div className="group relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-xl shadow-md">
          {/* 画像のみ表示 - absoluteポジショニングを削除 */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* 装飾要素 */}
          <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-[#a0e1a7]/40 rounded-full blur-2xl" />
          <div className="absolute -top-6 -right-6 h-20 w-20 bg-[#d4c99b]/40 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  );
}
