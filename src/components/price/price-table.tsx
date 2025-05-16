"use client";

import { useState } from "react";
import {
  dogBreeds,
  optionServices,
  partialServices,
  notes,
} from "@/data/prices";

// 料金カテゴリータブ
const PriceCategories = [
  { id: "shampoo", label: "シャンプーコース", icon: "🧴" },
  { id: "cut", label: "カットコース", icon: "✂️" },
  { id: "quick", label: "クイックシャンプー", icon: "💨" },
  { id: "option", label: "オプションメニュー", icon: "✨" },
  { id: "partial", label: "部分メニュー", icon: "🐾" },
];

export function PriceTable() {
  const [activeCategory, setActiveCategory] = useState("shampoo");

  return (
    <div className="space-y-8">
      {/* カテゴリータブ */}
      <div className="grid grid-cols-2 gap-2 mb-6 md:flex md:flex-wrap md:justify-center md:gap-3">
        {PriceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative flex flex-col items-center justify-center rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 md:text-base md:flex-row md:gap-2 ${
              activeCategory === category.id
                ? "bg-[#b7aa79] text-white shadow-md transform -translate-y-1"
                : "bg-[#f0e9c7] text-[#4a4333] hover:bg-[#e6deb7] hover:-translate-y-0.5 hover:shadow-sm"
            }`}
          >
            <span className="text-lg mb-1 md:mb-0">{category.icon}</span>
            <span>{category.label}</span>
            {activeCategory === category.id && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[#b7aa79] text-lg">
                •
              </span>
            )}
          </button>
        ))}
      </div>

      {/* メインコンテンツエリア */}
      <div className="rounded-xl border border-[#e6deb7] bg-white p-6">
        {/* タイトルと肉球アイコン */}
        <div className="mb-6 flex items-center justify-center">
          <div className="mr-3 text-2xl text-[#b7aa79]">🐾</div>
          <h2 className="text-2xl font-bold text-[#4a4333]">
            {PriceCategories.find((c) => c.id === activeCategory)?.label}
          </h2>
          <div className="ml-3 text-2xl text-[#b7aa79]">🐾</div>
        </div>

        {/* シャンプーコース */}
        {activeCategory === "shampoo" && (
          <div className="space-y-4">
            <p className="mb-4 text-center text-sm text-[#70695a]">
              {notes[1]}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {dogBreeds.map((breed) => (
                <div
                  key={breed.id}
                  className="rounded-xl border border-[#e6deb7] bg-[#fdfbea] p-4 shadow-sm"
                >
                  <div className="space-y-1 mb-2">
                    {breed.breeds.map((name, i) => (
                      <div key={i} className="font-medium text-[#4a4333]">
                        {name}
                      </div>
                    ))}
                  </div>
                  <div className="text-right text-lg font-bold text-[#b7aa79]">
                    {breed.shampoo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* カットコース */}
        {activeCategory === "cut" && (
          <div className="space-y-4">
            <p className="mb-4 text-center text-sm text-[#70695a]">
              {notes[2]}
              <br />
              {notes[3]}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {dogBreeds
                .filter((breed) => breed.cut !== null)
                .map((breed) => (
                  <div
                    key={breed.id}
                    className="rounded-xl border border-[#e6deb7] bg-[#fdfbea] p-4 shadow-sm"
                  >
                    <div className="space-y-1 mb-2">
                      {breed.breeds.map((name, i) => (
                        <div key={i} className="font-medium text-[#4a4333]">
                          {name}
                        </div>
                      ))}
                    </div>
                    <div className="text-right text-lg font-bold text-[#b7aa79]">
                      {breed.cut}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* クイックシャンプー */}
        {activeCategory === "quick" && (
          <div className="space-y-4">
            <p className="mb-4 text-center text-sm text-[#70695a]">
              {notes[4]}
              <br />
              {notes[5]}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {dogBreeds.map((breed) => (
                <div
                  key={breed.id}
                  className="rounded-xl border border-[#e6deb7] bg-[#fdfbea] p-4 shadow-sm"
                >
                  <div className="space-y-1 mb-2">
                    {breed.breeds.map((name, i) => (
                      <div key={i} className="font-medium text-[#4a4333]">
                        {name}
                      </div>
                    ))}
                  </div>
                  <div className="text-right text-lg font-bold text-[#b7aa79]">
                    {breed.quickShampoo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* オプションメニュー */}
        {activeCategory === "option" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {optionServices.map((option) => (
                <div
                  key={option.id}
                  className="rounded-lg border border-[#e6deb7] bg-[#fdfbea] p-4"
                >
                  <div className="mb-2 font-medium text-[#4a4333]">
                    {option.name}
                  </div>
                  <div className="text-right text-lg font-bold text-[#b7aa79]">
                    {option.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 部分メニュー */}
        {activeCategory === "partial" && (
          <div className="space-y-6">
            {/* 各部分メニューを分割して表示 */}
            <div className="rounded-lg border border-[#e6deb7] bg-[#fdfbea] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-medium text-[#4a4333]">
                  部分メニュー
                </div>
                <div className="text-lg font-bold text-[#b7aa79]">各 ¥550</div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "爪切り",
                  "肛門腺絞り",
                  "耳掃除",
                  "足先バリカン",
                  "足裏バリカン",
                  "肛門バリカン",
                  "お腹バリカン",
                  "部分カット(目元), (口元),(お尻周り)等",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center rounded-md px-2 py-1.5 hover:bg-[#f0e9c7]/50"
                  >
                    <span className="mr-2 text-[#b7aa79]">•</span>
                    <span className="text-[#4a4333]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#e6deb7] bg-[#fdfbea] p-4">
              <div className="mb-2 text-[#4a4333]">
                {partialServices[1].name}
              </div>
              <div className="text-right text-lg font-bold text-[#b7aa79]">
                {partialServices[1].price}
              </div>
              {partialServices[1].note && (
                <div className="mt-2 text-sm text-[#8c8574]">
                  {partialServices[1].note}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 共通の注意事項フッター */}
        <div className="mt-8 text-center text-xs text-[#8c8574]">
          {notes[0]}
        </div>
      </div>

      {/* 追加の注意事項 */}
      <div className="space-y-1 text-sm text-[#70695a]">
        {notes.slice(6).map((note, index) => (
          <p key={index} className="flex items-start">
            <span className="mr-1 inline-block">🐾</span> {note}
          </p>
        ))}
      </div>

      {/* サロン名 */}
      <div className="mt-8 bg-[#f0e9c7] p-4 text-center text-xl font-bold text-[#4a4333]">
        DOG SALON Welina
      </div>
    </div>
  );
}
