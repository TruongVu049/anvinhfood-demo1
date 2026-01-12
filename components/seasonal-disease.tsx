"use client";

import { useState } from "react";
import { ProductCard } from "./product-card";

const tabs = [
  "Xây thô",
  "Hoàn thiện",
  "Sửa chữa",
  "Trang trí nội thất",
];

const constructionProducts = [
  {
    id: "ct1",
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    image: "/ximang.png",
    price: 95000,
    originalPrice: 110000,
    unit: "Bao",
    discount: 14,
    packaging: "50kg",
  },
  {
    id: "ct2",
    name: "Thép Pomina phi 10mm cuộn 50kg",
    image: "/thep.png",
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn",
    discount: 9,
    packaging: "50kg",
  },
  {
    id: "ct3",
    name: "Gạch ống Tuynel 4 lỗ loại A",
    image: "/gach.png",
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    packaging: "Viên",
  },
  {
    id: "ct4",
    name: "Cát xây dựng loại 1 mịn",
    image: "/cat.png",
    price: 350000,
    originalPrice: 400000,
    unit: "Khối",
    discount: 12,
    packaging: "1m³",
  },
];

export function SeasonalDisease() {
  const [activeTab, setActiveTab] = useState("Xây thô");

  return (
    <section className="py-4 sm:py-8">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] sm:text-xs">🏗️</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Gợi ý theo công trình</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-[#1a56db] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
            Xây thô chất lượng - Nền móng vững chắc cho ngôi nhà mơ ước!
          </h3>
          <p className="text-cyan-100 text-xs sm:text-sm mb-4 sm:mb-6">
            Chúng tôi cung cấp đầy đủ vật liệu xây thô từ xi măng, thép, gạch đến cát đá. 
            Cam kết hàng chính hãng, giá tốt nhất thị trường.
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">👷</span>
            </div>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-[#1a56db] rounded-full text-xs sm:text-sm font-medium hover:bg-cyan-50 transition-colors">
              Xem hướng dẫn thi công
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {constructionProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
