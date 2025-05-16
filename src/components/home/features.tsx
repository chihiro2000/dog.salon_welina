"use client";

import React from "react";
import { User, ShieldCheck, Scissors } from "lucide-react";

export function Features() {
  return (
    <section className="py-16 bg-[#fcf9e4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3
            className="text-2xl md:text-3xl font-medium text-[#b7aa79] mb-1 md:mb-2 italic"
            style={{ fontFamily: "cursive" }}
          >
            Our Commitment
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4333] mb-4">
            当店のこだわり
          </h2>
        </div>

        {/* 特徴1：担当トリマー制 */}
        <div className="flex flex-col md:flex-row items-center mb-20 max-w-5xl mx-auto">
          <div className="md:w-1/2 p-6 md:pr-12">
            <div className="flex items-center mb-4">
              <User className="h-8 w-8 text-[#b7aa79] mr-3" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-[#4a4333]">
                担当トリマー制
              </h3>
            </div>
            <p className="text-[#70695a] text-lg leading-relaxed">
              トリマーが変わることなく、同じトリマーが担当するため、わんちゃんの小さな変化もすぐに分かります。
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden bg-[#fdfbea] h-64 md:h-80 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <User
                  className="h-16 w-16 text-[#b7aa79] mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-[#4a4333] font-medium">Trimming Salon</p>
                <p className="text-[#4a4333] font-medium">Welina</p>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴2：完全入れ替わり制 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-20 max-w-5xl mx-auto">
          <div className="md:w-1/2 p-6 md:pl-12">
            <div className="flex items-center mb-4">
              <ShieldCheck
                className="h-8 w-8 text-[#b7aa79] mr-3"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-semibold text-[#4a4333]">
                完全入れ替わり制
              </h3>
            </div>
            <p className="text-[#70695a] text-lg leading-relaxed">
              他の犬が苦手なわんちゃんも、完全入れ替わり制なので落ち着いた環境でトリミングを受けられます。
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden bg-[#fdfbea] h-64 md:h-80 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <ShieldCheck
                  className="h-16 w-16 text-[#b7aa79] mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-[#4a4333] font-medium">トリミング</p>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴3：オーダーメイドカット */}
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          <div className="md:w-1/2 p-6 md:pr-12">
            <div className="flex items-center mb-4">
              <Scissors
                className="h-8 w-8 text-[#b7aa79] mr-3"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-semibold text-[#4a4333]">
                オーダーメイドカット
              </h3>
            </div>
            <p className="text-[#70695a] text-lg leading-relaxed">
              可愛さだけでなく、わんちゃんが快適に暮らせるようにカットスタイルは飼い主様と相談しながら決めていきます。
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden bg-[#fdfbea] h-64 md:h-80 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Scissors
                  className="h-16 w-16 text-[#b7aa79] mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-[#4a4333] font-medium">
                  わんちゃんは一匹によって毛や皮膚の状態が違います。
                </p>
                <p className="text-[#4a4333] font-medium">
                  そのため、トリミングの際にはよく観察した上で
                </p>
                <p className="text-[#4a4333] font-medium">
                  そのわんちゃんにあったトリミングを行います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
