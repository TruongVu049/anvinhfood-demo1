"use client"

import { ProductCard } from "./product-card"

const bestSellerProducts = [
  {
    id: "bs1",
    name: "Combo thịt bò Úc cao cấp 1kg (Thăn + Ba chỉ)",
    image: "/juicy-beef-steak.png",
    price: 485000,
    originalPrice: 580000,
    unit: "Combo",
    discount: 25,
    packaging: "1kg",
  },
  {
    id: "bs2",
    name: "Cá hồi Na Uy nguyên con đông lạnh 2-3kg",
    image: "/salmon-fish.jpg",
    price: 890000,
    originalPrice: 1100000,
    unit: "Con",
    discount: 20,
    packaging: "2-3kg",
  },
  {
    id: "bs3",
    name: "Tôm hùm Alaska size L đông lạnh 500g",
    image: "/cooked-shrimp-platter.png",
    price: 650000,
    originalPrice: 720000,
    unit: "Hộp",
    discount: 10,
    packaging: "500g",
  },
  {
    id: "bs4",
    name: "Pizza phô mai 4 vị đông lạnh 12 inch",
    image: "/frozen-pizza.png",
    price: 159000,
    originalPrice: 199000,
    unit: "Chiếc",
    discount: 20,
    packaging: "12 inch",
  },
  {
    id: "bs5",
    name: "Cua hoàng đế Alaska nguyên con 1.5kg",
    image: "/king-crab.jpg",
    price: 1850000,
    unit: "Con",
    badge: "Mua 1 tặng 1",
    packaging: "1.5kg",
  },
  {
    id: "bs6",
    name: "Xúc xích Đức Johnsonville Original 360g",
    image: "/sausages.jpg",
    price: 145000,
    unit: "Gói",
    packaging: "360g",
  },
]

export function BestSellers() {
  return (
    <section className="py-8">
      {/* Section Header */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-2 rounded-full font-bold text-lg shadow-lg">
            ❄️ Sản phẩm bán chạy
          </div>
        </div>
        <div className="border-t-2 border-dashed border-cyan-300" />
      </div>

      {/* Products Grid */}
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
