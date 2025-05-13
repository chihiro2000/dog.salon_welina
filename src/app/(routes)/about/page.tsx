import { Metadata } from "next";
import { Map, Clock, Phone, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "店舗概要",
  description: "当店の店舗情報と第一種動物取扱業者標識についての情報です。",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#4a4333] sm:text-4xl md:text-5xl">
          店舗概要
        </h1>
        <p className="text-lg text-[#70695a]">
          当店の基本情報と動物取扱業の登録情報をご案内いたします
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div>
          <div className="mb-8 space-y-6">
            <div className="flex gap-4">
              <Map className="h-6 w-6 shrink-0 text-[#b7aa79]" />
              <div>
                <h2 className="mb-2 text-xl font-semibold text-[#4a4333]">
                  所在地
                </h2>
                <p className="text-[#70695a]">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-[#b7aa79]" />
              <div>
                <h2 className="mb-2 text-xl font-semibold text-[#4a4333]">
                  営業時間
                </h2>
                <p className="text-[#70695a]">
                  営業時間: {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.holidays}
                  <br />
                  駐車場あり
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-6 w-6 shrink-0 text-[#b7aa79]" />
              <div>
                <h2 className="mb-2 text-xl font-semibold text-[#4a4333]">
                  お問い合わせ
                </h2>
                <p className="text-[#70695a]">
                  電話: {siteConfig.contact.phone}
                  <br />
                  お支払い: 現金・クレジット決済
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#e6deb7] p-6 bg-[#fdfbea]/50">
            <h2 className="mb-4 text-xl font-semibold text-[#4a4333]">
              アクセス方法
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-medium text-[#4a4333]">
                  電車でお越しの場合
                </h3>
                <p className="text-sm text-[#70695a]">
                  JR阪和線「信太山駅」より徒歩15分
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-[#4a4333]">
                  お車でお越しの場合
                </h3>
                <p className="text-sm text-[#70695a]">駐車場あり</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border border-[#e6deb7] overflow-hidden">
            <div className="bg-[#2e4357] text-white p-4 text-center font-bold">
              第一種動物取扱業者標識
            </div>
            <div className="divide-y divide-[#e6deb7]">
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  名称
                </div>
                <div className="p-4 text-[#4a4333]">DOG SALON Welina</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  所在地
                </div>
                <div className="p-4 text-[#4a4333]">和泉市上町373-4</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  種別
                </div>
                <div className="p-4 text-[#4a4333]">保管</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  登録番号
                </div>
                <div className="p-4 text-[#4a4333]">第4911-2号</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  登録日
                </div>
                <div className="p-4 text-[#4a4333]">令和7年4月4日</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  有効期限
                </div>
                <div className="p-4 text-[#4a4333]">令和12年4月3日</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="bg-[#f5f3e7] p-4 font-medium text-[#4a4333]">
                  動物取扱責任者
                </div>
                <div className="p-4 text-[#4a4333]">菊池　岬</div>
              </div>
            </div>
          </div>

          <div className="h-[300px] overflow-hidden rounded-lg border border-[#e6deb7] md:h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.7887113086784!2d135.44861597654984!3d34.510505279674155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dad297455575%3A0x222cbb44f5594dbe!2z44CSNTk0LTAwMDIg5aSn6Ziq5bqc5ZKM5rG95biC5LiK55S377yT77yX77yT4oiS77yU!5e0!3m2!1sja!2sjp!4v1715626815407!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
