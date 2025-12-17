"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import {
  ChevronDown,
  ChevronUp,
  Grid,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";

const searchProducts = [
  {
    id: "s1",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s2",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/king-crab.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s3",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/king-crab.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s4",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s5",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/king-crab.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s6",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/king-crab.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s7",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s8",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s9",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s10",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s11",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
  {
    id: "s12",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    unit: "kg",
    packaging: "1kg",
  },
];

const recentlyViewed = [
  {
    id: "rv1",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
  {
    id: "rv2",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
  {
    id: "rv3",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
  {
    id: "rv4",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
  {
    id: "rv5",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
  {
    id: "rv6",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
];

const filterCategories = [
  {
    title: "Loại sản phẩm",
    key: "category",
    options: [
      "Tất cả",
      "Hàng nhập khẩu",
      "Hải sản tươi sống",
      "Hải sản đông lạnh",
      "Hải sản chế biến sẵn",
    ],
    expanded: true,
  },
];

const priceRanges = [
  { label: "Dưới 100.000đ", value: "under100" },
  { label: "100.000đ đến 300.000đ", value: "100-300" },
  { label: "300.000đ đến 500.000đ", value: "300-500" },
  { label: "Trên 500.000đ", value: "over500" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("s") || "Omega 3";
  const [sortBy, setSortBy] = useState("bestselling");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<
    Record<string, boolean>
  >({
    category: true,
    target: true,
    price: true,
  });
  const [searchType, setSearchType] = useState<"products" | "articles">(
    "products"
  );

  const toggleFilter = (key: string) => {
    setExpandedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Type Toggle */}
        <div className="bg-white rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Tìm kiếm theo:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="searchType"
                checked={searchType === "products"}
                onChange={() => setSearchType("products")}
                className="w-4 h-4 text-[#1a56db]"
              />
              <span className="text-sm">Sản phẩm</span>
            </label>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 sticky top-24">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                <SlidersHorizontal className="w-5 h-5 text-gray-700" />
                <h2 className="font-bold text-gray-900">Bộ lọc nâng cao</h2>
              </div>

              {filterCategories.map((category) => (
                <div key={category.key} className="border-b pb-4 mb-4">
                  <button
                    onClick={() => toggleFilter(category.key)}
                    className="flex items-center justify-between w-full text-left font-semibold text-[#1a56db] mb-3"
                  >
                    {category.title}
                    {expandedFilters[category.key] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedFilters[category.key] && (
                    <div className="space-y-2">
                      {category.options.map((option, idx) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            defaultChecked={idx === 0}
                            className="w-4 h-4 rounded border-gray-300 text-[#1a56db] focus:ring-[#1a56db]"
                          />
                          <span className="text-sm text-gray-700">
                            {option}
                          </span>
                        </label>
                      ))}
                      <button className="text-sm text-[#1a56db] mt-2 hover:underline flex items-center gap-1">
                        <ChevronDown className="w-3 h-3" />
                        Xem thêm
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Price Range */}
              <div className="border-b pb-4 mb-4">
                <button
                  onClick={() => toggleFilter("price")}
                  className="flex items-center justify-between w-full text-left font-semibold text-[#1a56db] mb-3"
                >
                  Giá bán
                  {expandedFilters["price"] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {expandedFilters["price"] && (
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 text-left border border-gray-200"
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="font-semibold text-gray-900">
                    Danh sách sản phẩm
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Lưu ý: Thuốc kê đơn và một số sản phẩm sẽ cần tư vấn từ dược
                    sĩ
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sắp xếp theo:</span>
                    <div className="flex gap-1">
                      {[
                        { key: "bestselling", label: "Bán chạy" },
                        { key: "price_asc", label: "Giá thấp" },
                        { key: "price_desc", label: "Giá cao" },
                      ].map((option) => (
                        <button
                          key={option.key}
                          onClick={() => setSortBy(option.key)}
                          className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                            sortBy === option.key
                              ? "bg-[#1a56db] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 border-l pl-4">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${
                        viewMode === "grid"
                          ? "bg-gray-100 text-[#1a56db]"
                          : "text-gray-400"
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${
                        viewMode === "list"
                          ? "bg-gray-100 text-[#1a56db]"
                          : "text-gray-400"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile filter button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden w-full mb-4 flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Bộ lọc nâng cao</span>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-8 py-3 text-[#1a56db] font-medium hover:underline flex items-center gap-2 mx-auto">
                <ChevronDown className="w-5 h-5" />
                Xem thêm 284 sản phẩm
              </button>
            </div>

            {/* Feedback */}
            <div className="bg-white rounded-xl p-6 mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <span className="text-gray-700">
                    Bạn có hài lòng với kết quả tìm kiếm này không?
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium">
                  Có
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium">
                  Không
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👁️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Sản phẩm vừa xem
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
              <h2 className="font-bold">Bộ lọc</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              {filterCategories.map((category) => (
                <div key={category.key} className="border-b pb-4 mb-4">
                  <h3 className="font-semibold text-[#1a56db] mb-3">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-[#1a56db] focus:ring-[#1a56db]"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t sticky bottom-0 bg-white">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-[#1a56db] text-white font-medium rounded-lg"
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f7fb]" />}>
      <SearchContent />
    </Suspense>
  );
}
