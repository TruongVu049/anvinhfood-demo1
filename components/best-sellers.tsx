"use client";

import { ProductCard } from "./product-card";

const bestSellerProducts = [
  {
    id: "bs1",
    name: "Cá hồi Na Uy nguyên con đông lạnh 2-3kg",
    image: "/salmon-fish.jpg",
    price: 890000,
    originalPrice: 1100000,
    unit: "Con",
    discount: 20,
    packaging: "2-3kg",
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
    name: "Cá hồi Na Uy nguyên con đông lạnh 2-3kg",
    image: "/salmon-fish.jpg",
    price: 890000,
    originalPrice: 1100000,
    unit: "Con",
    discount: 20,
    packaging: "2-3kg",
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
    name: "Cá hồi Na Uy nguyên con đông lạnh 2-3kg",
    image: "/salmon-fish.jpg",
    price: 890000,
    originalPrice: 1100000,
    unit: "Con",
    discount: 20,
    packaging: "2-3kg",
  },
];

export function BestSellers() {
  return (
    <section className="relative bg-gradient-to-r from-[#1a56db] via-[#3b82f6] to-[#60a5fa] rounded-t-2xl py-8 px-3 overflow-hidden">
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
      <div className="py-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
