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
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative z-10 bg-background px-4">
          <div className="relative flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-6 py-2">
            <h2 className="text-2xl font-medium tracking-tight">Price List</h2>
            <div className="h-8 w-6">
              <Image
                src="/images/dog-silhouette.png"
                alt="犬のシルエット"
                width={24}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* メイン料金表 */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#d5e8ed] text-left">
              <th className="border p-3">犬種</th>
              <th className="border p-3 text-center">
                クイック
                <br />
                シャンプー
              </th>
              <th className="border p-3 text-center">シャンプーコース</th>
              <th className="border p-3 text-center">
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
                className={index % 2 === 0 ? "bg-[#e8f4f8]" : "bg-white"}
              >
                <td className="border p-3">
                  {breed.breeds.map((name, i) => (
                    <div key={i}>{name}</div>
                  ))}
                </td>
                <td className="border p-3 text-center">{breed.quickShampoo}</td>
                <td className="border p-3 text-center">{breed.shampoo}</td>
                <td className="border p-3 text-center">{breed.cut || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* オプションメニュー */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#d5e8ed]">
              <th className="border p-3 text-center" colSpan={4}>
                オプションメニュー
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#e8f4f8]">
              <td className="border p-3 text-center" colSpan={2}>
                <div className="font-medium">{optionServices[0].name}</div>
                <div>{optionServices[0].price}</div>
              </td>
              <td className="border p-3 text-center" colSpan={2}>
                <div className="font-medium">{optionServices[1].name}</div>
                <div>{optionServices[1].price}</div>
              </td>
            </tr>
            <tr className="bg-[#e8f4f8]">
              <td className="border p-3 text-center" colSpan={2}>
                <div className="font-medium">{optionServices[2].name}</div>
                <div>{optionServices[2].price}</div>
              </td>
              <td className="border p-3 text-center" colSpan={2}>
                <div className="font-medium">{optionServices[3].name}</div>
                <div>{optionServices[3].price}</div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-1 text-right text-xs" colSpan={4}>
                ※料金はすべて税込です。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 部分メニュー */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#d5e8ed]">
              <th className="border p-3 text-center" colSpan={4}>
                部分メニュー
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#e8f4f8]">
              <td className="border p-3" colSpan={4}>
                <div className="mb-1">{partialServices[0].name}</div>
                <div className="text-right font-medium">
                  {partialServices[0].price}
                </div>
              </td>
            </tr>
            <tr className="bg-[#e8f4f8]">
              <td className="border p-3" colSpan={4}>
                <div className="mb-1">{partialServices[1].name}</div>
                <div className="text-right font-medium">
                  {partialServices[1].price}
                </div>
                {partialServices[1].note && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    {partialServices[1].note}
                  </div>
                )}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-1 text-right text-xs" colSpan={4}>
                ※料金はすべて税込です。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 注意事項 */}
      <div className="space-y-1 text-sm text-muted-foreground">
        {notes.slice(1, -2).map((note, index) => (
          <p key={index} className="flex items-start">
            <span className="mr-1 inline-block">🐾</span> {note}
          </p>
        ))}
      </div>

      {/* サロン名 */}
      <div className="mt-8 bg-[#d5e8ed] p-4 text-center text-xl font-bold">
        DOG SALON Welina
      </div>
    </div>
  );
}
