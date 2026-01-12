"use client";

import { ProductCard } from "./product-card";

const bestSellerProducts = [
  {
    id: "bs1",
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    image: "/ximang.png",
    price: 95000,
    originalPrice: 110000,
    unit: "Bao",
    discount: 14,
    packaging: "50kg",
  },
  {
    id: "bs2",
    name: "Thép Pomina phi 10mm cuộn 50kg",
    image: "/thep.png",
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn",
    discount: 9,
    packaging: "50kg",
  },
  {
    id: "bs3",
    name: "Gạch ống Tuynel 4 lỗ loại A",
    image: "/gach.png",
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    packaging: "Viên",
  },
  {
    id: "bs4",
    name: "Sơn Dulux nội thất cao cấp 18L",
    image: "/son.png",
    price: 1650000,
    originalPrice: 1850000,
    unit: "Thùng",
    discount: 11,
    packaging: "18L",
  },
  {
    id: "bs5",
    name: "Cát xây dựng loại 1 mịn",
    image: "/cat.png",
    price: 350000,
    unit: "Khối",
    badge: "Bán chạy",
    packaging: "1m³",
  },
  {
    id: "bs6",
    name: "Gỗ xây dựng cao cấp",
    image: "/go.png",
    price: 420000,
    originalPrice: 480000,
    unit: "m²",
    discount: 12,
    packaging: "m²",
  },
];

export function BestSellers() {
  return (
    <section className="relative bg-gradient-to-r from-[#1a56db] via-[#3b82f6] to-[#60a5fa] rounded-t-2xl py-4 sm:py-8 px-2 sm:px-3 overflow-hidden">
      {/* Section Header */}
      <div className="relative mb-4 sm:mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 sm:px-8 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-lg shadow-lg">
            🏗️ Sản phẩm bán chạy
          </div>
        </div>
        <div className="border-t-2 border-dashed border-cyan-300" />
      </div>

      {/* Products Grid */}
      <div className="py-4 sm:py-6 mt-4 sm:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
