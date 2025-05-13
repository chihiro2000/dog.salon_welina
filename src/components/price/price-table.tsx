import Image from "next/image";
import {
  dogBreeds,
  optionServices,
  partialServices,
  notes,
} from "@/data/prices";

export function PriceTable() {
  return (
    <div className="space-y-8">
      {/* タイトルと犬のシルエット */}
      <div className="relative mx-auto mb-10 flex max-w-sm items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#e6deb7]"></div>
        </div>
        <div className="relative z-10 bg-background px-4">
          <div className="relative flex items-center space-x-2 rounded-md border border-[#e6deb7] bg-white px-6 py-2">
            <h2 className="text-2xl font-medium tracking-tight text-[#4a4333]">
              Price List
            </h2>
          </div>
        </div>
      </div>

      {/* メイン料金表 */}
      <div className="overflow-x-auto rounded-lg border border-[#e6deb7]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0e9c7] text-left">
              <th className="border border-[#e6deb7] p-3 text-[#4a4333]">
                犬種
              </th>
              <th className="border border-[#e6deb7] p-3 text-center text-[#4a4333]">
                クイック
                <br />
                シャンプー
              </th>
              <th className="border border-[#e6deb7] p-3 text-center text-[#4a4333]">
                シャンプーコース
              </th>
              <th className="border border-[#e6deb7] p-3 text-center text-[#4a4333]">
                カットコース
                <br />
                <span className="text-xs font-medium">基本料金10%OFF</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dogBreeds.map((breed, index) => (
              <tr
                key={breed.id}
                className={index % 2 === 0 ? "bg-[#fdfbea]" : "bg-white"}
              >
                <td className="border border-[#e6deb7] p-3 text-[#4a4333]">
                  {breed.breeds.map((name, i) => (
                    <div key={i}>{name}</div>
                  ))}
                </td>
                <td className="border border-[#e6deb7] p-3 text-center text-[#4a4333]">
                  {breed.quickShampoo}
                </td>
                <td className="border border-[#e6deb7] p-3 text-center text-[#4a4333]">
                  {breed.shampoo}
                </td>
                <td className="border border-[#e6deb7] p-3 text-center text-[#4a4333]">
                  {breed.cut || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* オプションメニュー */}
      <div className="overflow-x-auto rounded-lg border border-[#e6deb7]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0e9c7]">
              <th
                className="border border-[#e6deb7] p-3 text-center text-[#4a4333]"
                colSpan={4}
              >
                オプションメニュー
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#fdfbea]">
              <td
                className="border border-[#e6deb7] p-3 text-center"
                colSpan={2}
              >
                <div className="font-medium text-[#4a4333]">
                  {optionServices[0].name}
                </div>
                <div className="text-[#70695a]">{optionServices[0].price}</div>
              </td>
              <td
                className="border border-[#e6deb7] p-3 text-center"
                colSpan={2}
              >
                <div className="font-medium text-[#4a4333]">
                  {optionServices[1].name}
                </div>
                <div className="text-[#70695a]">{optionServices[1].price}</div>
              </td>
            </tr>
            <tr className="bg-[#fdfbea]">
              <td
                className="border border-[#e6deb7] p-3 text-center"
                colSpan={2}
              >
                <div className="font-medium text-[#4a4333]">
                  {optionServices[2].name}
                </div>
                <div className="text-[#70695a]">{optionServices[2].price}</div>
              </td>
              <td
                className="border border-[#e6deb7] p-3 text-center"
                colSpan={2}
              >
                <div className="font-medium text-[#4a4333]">
                  {optionServices[3].name}
                </div>
                <div className="text-[#70695a]">{optionServices[3].price}</div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-1 text-right text-xs text-[#8c8574]" colSpan={4}>
                ※料金はすべて税込です。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 部分メニュー */}
      <div className="overflow-x-auto rounded-lg border border-[#e6deb7]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0e9c7]">
              <th
                className="border border-[#e6deb7] p-3 text-center text-[#4a4333]"
                colSpan={4}
              >
                部分メニュー
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#fdfbea]">
              <td className="border border-[#e6deb7] p-3" colSpan={4}>
                <div className="mb-1 text-[#4a4333]">
                  {partialServices[0].name}
                </div>
                <div className="text-right font-medium text-[#4a4333]">
                  {partialServices[0].price}
                </div>
              </td>
            </tr>
            <tr className="bg-[#fdfbea]">
              <td className="border border-[#e6deb7] p-3" colSpan={4}>
                <div className="mb-1 text-[#4a4333]">
                  {partialServices[1].name}
                </div>
                <div className="text-right font-medium text-[#4a4333]">
                  {partialServices[1].price}
                </div>
                {partialServices[1].note && (
                  <div className="mt-2 text-sm text-[#8c8574]">
                    {partialServices[1].note}
                  </div>
                )}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-1 text-right text-xs text-[#8c8574]" colSpan={4}>
                ※料金はすべて税込です。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 注意事項 */}
      <div className="space-y-1 text-sm text-[#70695a]">
        {notes.slice(1, -2).map((note, index) => (
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
