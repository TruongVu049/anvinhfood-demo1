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
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    image: "/ximang.png",
    price: 95000,
    unit: "Bao",
    packaging: "50kg",
  },
  {
    id: "s2",
    name: "Thép Pomina phi 10mm cuộn 50kg",
    image: "/thep.png",
    price: 890000,
    unit: "Cuộn",
    packaging: "50kg",
  },
  {
    id: "s3",
    name: "Gạch ống Tuynel 4 lỗ loại A",
    image: "/gach.png",
    price: 1800,
    unit: "Viên",
    packaging: "Viên",
  },
  {
    id: "s4",
    name: "Sơn Dulux nội thất cao cấp 18L",
    image: "/son.png",
    price: 1650000,
    unit: "Thùng",
    packaging: "18L",
  },
  {
    id: "s5",
    name: "Cát xây dựng loại 1 mịn",
    image: "/cat.png",
    price: 350000,
    unit: "Khối",
    packaging: "1m³",
  },
  {
    id: "s6",
    name: "Gỗ xây dựng cao cấp",
    image: "/go.png",
    price: 420000,
    unit: "m²",
    packaging: "m²",
  },
  {
    id: "s7",
    name: "Ngói nhà cao cấp",
    image: "/ngoi.png",
    price: 25000,
    unit: "Viên",
    packaging: "Viên",
  },
  {
    id: "s8",
    name: "Xi măng Holcim PCB40 50kg",
    image: "/ximang2.png",
    price: 98000,
    unit: "Bao",
    packaging: "50kg",
  },
  {
    id: "s9",
    name: "Thép Việt Nhật phi 12mm",
    image: "/thep2.png",
    price: 950000,
    unit: "Cuộn",
    packaging: "50kg",
  },
  {
    id: "s10",
    name: "Gạch block xây dựng",
    image: "/gach2.png",
    price: 3500,
    unit: "Viên",
    packaging: "Viên",
  },
  {
    id: "s11",
    name: "Sơn Jotun Essence 5L",
    image: "/son2.png",
    price: 485000,
    unit: "Thùng",
    packaging: "5L",
  },
  {
    id: "s12",
    name: "Cát vàng xây dựng",
    image: "/cat2.png",
    price: 320000,
    unit: "Khối",
    packaging: "1m³",
  },
];

const recentlyViewed = [
  {
    id: "rv1",
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    image: "/ximang.png",
    price: 95000,
    unit: "Bao",
    discount: 14,
    packaging: "50kg",
  },
  {
    id: "rv2",
    name: "Thép Pomina phi 10mm cuộn 50kg",
    image: "/thep.png",
    price: 890000,
    unit: "Cuộn",
    discount: 9,
    packaging: "50kg",
  },
  {
    id: "rv3",
    name: "Sơn Dulux nội thất cao cấp 18L",
    image: "/son.png",
    price: 1650000,
    unit: "Thùng",
    discount: 11,
    packaging: "18L",
  },
  {
    id: "rv4",
    name: "Gạch ống Tuynel 4 lỗ loại A",
    image: "/gach.png",
    price: 1800,
    unit: "Viên",
    discount: 18,
    packaging: "Viên",
  },
  {
    id: "rv5",
    name: "Gỗ xây dựng cao cấp",
    image: "/go.png",
    price: 420000,
    unit: "m²",
    discount: 15,
    packaging: "m²",
  },
  {
    id: "rv6",
    name: "Cát xây dựng loại 1 mịn",
    image: "/cat.png",
    price: 350000,
    unit: "Khối",
    discount: 12,
    packaging: "1m³",
  },
];

const filterCategories = [
  {
    title: "Loại sản phẩm",
    key: "category",
    options: [
      "Tất cả",
      "Xi măng - Vữa",
      "Thép xây dựng",
      "Gạch - Ngói",
      "Sơn - Chống thấm",
      "Cát - Đá - Sỏi",
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

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Search Type Toggle */}
        <div className="bg-white rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm text-gray-600">Tìm kiếm theo:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="searchType"
                checked={searchType === "products"}
                onChange={() => setSearchType("products")}
                className="w-4 h-4 text-[#1a56db]"
              />
              <span className="text-xs sm:text-sm">Sản phẩm</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
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
            <div className="bg-white rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h1 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Danh sách sản phẩm
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">
                    Lưu ý: Thuốc kê đơn và một số sản phẩm sẽ cần tư vấn từ dược
                    sĩ
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap hidden sm:inline">Sắp xếp:</span>
                    <div className="flex gap-1">
                      {[
                        { key: "bestselling", label: "Bán chạy" },
                        { key: "price_asc", label: "Giá thấp" },
                        { key: "price_desc", label: "Giá cao" },
                      ].map((option) => (
                        <button
                          key={option.key}
                          onClick={() => setSortBy(option.key)}
                          className={`px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-colors whitespace-nowrap ${
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

                  <div className="hidden sm:flex items-center gap-1 border-l pl-4">
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
              className="lg:hidden w-full mb-3 sm:mb-4 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-white rounded-xl border text-sm"
            >
              <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Bộ lọc nâng cao</span>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {searchProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-6 sm:mt-8">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-[#1a56db] font-medium hover:underline flex items-center gap-2 mx-auto text-sm sm:text-base">
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                Xem thêm 284 sản phẩm
              </button>
            </div>

            {/* Feedback */}
            <div className="bg-white rounded-xl p-4 sm:p-6 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">😊</span>
                </div>
                <div>
                  <span className="text-gray-700 text-xs sm:text-base">
                    Bạn có hài lòng với kết quả tìm kiếm này không?
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 sm:px-6 py-1.5 sm:py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm">
                  Có
                </button>
                <button className="flex-1 sm:flex-none px-4 sm:px-6 py-1.5 sm:py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm">
                  Không
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <section className="mt-8 sm:mt-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs">👁️</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Sản phẩm vừa xem
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
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
