import { priceCategories, additionalServices } from "@/data/prices";

export function PriceTable() {
  return (
    <div className="space-y-12">
      {priceCategories.map((category) => (
        <div key={category.id} className="rounded-lg border p-6 shadow-sm">
          <h3 className="mb-2 text-2xl font-bold">{category.name}</h3>
          <p className="mb-6 text-muted-foreground">{category.description}</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-2">コース</th>
                  <th className="pb-2 text-center">S</th>
                  <th className="pb-2 text-center">M</th>
                  <th className="pb-2 text-center">L</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">{item.name}</td>
                    <td className="py-4 text-center">{item.sizes.small}</td>
                    <td className="py-4 text-center">{item.sizes.medium}</td>
                    <td className="py-4 text-center">{item.sizes.large}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {category.items.some((item) => item.notes) && (
            <div className="mt-4 space-y-2">
              {category.items
                .filter((item) => item.notes)
                .map((item) => (
                  <p key={item.id} className="text-sm text-muted-foreground">
                    <span className="font-medium">{item.name}：</span>
                    {item.notes}
                  </p>
                ))}
            </div>
          )}
        </div>
      ))}

      <div className="rounded-lg border p-6 shadow-sm">
        <h3 className="mb-2 text-2xl font-bold">オプションメニュー</h3>
        <p className="mb-6 text-muted-foreground">
          基本コースに追加できるオプションメニューです。
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {additionalServices.map((service) => (
            <div
              key={service.id}
              className="flex justify-between rounded-lg border p-4"
            >
              <span>{service.name}</span>
              <span className="font-medium">{service.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border p-6 shadow-sm">
        <h3 className="mb-4 text-2xl font-bold">ご利用上の注意</h3>
        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            料金は、犬種、毛量、毛の状態などにより変動する場合がございます。
          </li>
          <li>
            毛玉や毛のもつれがひどい場合は、追加料金をいただく場合がございます。
          </li>
          <li>予約のキャンセルは、前日までにご連絡をお願いいたします。</li>
          <li>
            当日キャンセルの場合、次回ご利用時にキャンセル料をいただく場合がございます。
          </li>
        </ul>
      </div>
    </div>
  );
}
