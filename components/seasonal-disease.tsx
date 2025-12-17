"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"

const tabs = ["Bữa sáng nhanh", "Tiệc BBQ", "Lẩu cuối tuần", "Bữa tối gia đình"]

const breakfastProducts = [
  {
    id: "bf1",
    name: "Xúc xích Đức Johnsonville nguyên chất 360g",
    image: "/sausages.jpg",
    price: 145000,
    originalPrice: 175000,
    unit: "Gói",
    discount: 17,
    packaging: "360g",
  },
  {
    id: "bf2",
    name: "Bánh mì hamburger đông lạnh 6 chiếc",
    image: "/hamburger-buns-frozen.jpg",
    price: 45000,
    originalPrice: 55000,
    unit: "Gói",
    discount: 18,
    packaging: "6 chiếc",
  },
  {
    id: "bf3",
    name: "Trứng gà omega 3 tươi sạch 10 quả",
    image: "/omega-3-eggs-carton.jpg",
    price: 52000,
    originalPrice: 65000,
    unit: "Vỉ",
    discount: 20,
    packaging: "10 quả",
  },
  {
    id: "bf4",
    name: "Phô mai Mozzarella đông lạnh 200g",
    image: "/frozen-mozzarella-cheese.jpg",
    price: 89000,
    originalPrice: 110000,
    unit: "Gói",
    discount: 19,
    packaging: "200g",
  },
]

export function SeasonalDisease() {
  const [activeTab, setActiveTab] = useState("Bữa sáng nhanh")

  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-xs">🍽️</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Gợi ý theo bữa ăn</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab ? "bg-[#1a56db] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-4">
            Bữa sáng nhanh gọn chỉ 10 phút! Các sản phẩm đông lạnh giúp bạn tiết kiệm thời gian mà vẫn đảm bảo dinh
            dưỡng.
          </h3>
          <p className="text-cyan-100 text-sm mb-6">
            Chỉ cần rã đông nhẹ và chế biến, bạn đã có ngay bữa sáng đầy đủ năng lượng cho cả gia đình. Đông lạnh giữ
            trọn hương vị tươi ngon.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">👨‍🍳</span>
            </div>
            <button className="px-4 py-2 bg-white text-[#1a56db] rounded-full text-sm font-medium hover:bg-cyan-50 transition-colors">
              Xem công thức nấu
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {breakfastProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
