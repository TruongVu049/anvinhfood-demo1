"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ChevronDown, ChevronUp, Grid, List, SlidersHorizontal, X } from "lucide-react"

const searchProducts = [
  {
    id: "s1",
    name: "Viên uống Omega-3 For Kids Nutrimed giúp trẻ phát triển trí não, thị lực (100...",
    image: "/placeholder.svg?height=200&width=200",
    price: 450000,
    unit: "Hộp",
    packaging: "Hộp 100 Viên",
  },
  {
    id: "s2",
    name: "Thực phẩm bảo vệ sức khỏe OMEGA 3 PLUS Kenko hỗ trợ não bộ, thị lực và s...",
    image: "/placeholder.svg?height=200&width=200",
    price: 736000,
    originalPrice: 920000,
    unit: "Hộp",
    discount: 20,
    packaging: "Hộp 120 Viên",
  },
  {
    id: "s3",
    name: "Thực phẩm bảo vệ sức khỏe Bioamicus Omega-3 hỗ trợ tốt cho mắt và não...",
    image: "/placeholder.svg?height=200&width=200",
    price: 385000,
    unit: "Hộp",
    packaging: "Hộp x 30ml",
  },
  {
    id: "s4",
    name: "Viên uống Omega 3-6-9 Pharmekal hỗ trợ giảm nguy cơ xơ vữa động mạc...",
    image: "/placeholder.svg?height=200&width=200",
    price: 319000,
    unit: "Hộp",
    packaging: "Hộp 100 Viên",
  },
  {
    id: "s5",
    name: "Viên uống Omega 3 Power DAO Nordic Health hỗ trợ tăng cường sức khỏe tim...",
    image: "/placeholder.svg?height=200&width=200",
    price: 330000,
    unit: "Hộp",
    packaging: "Hộp 120 Viên",
  },
  {
    id: "s6",
    name: "Viên uống Pregnacare Plus Omega-3 Vitabiotics bổ sung Vitamin, Omega-3 v...",
    image: "/placeholder.svg?height=200&width=200",
    price: 584000,
    unit: "Hộp",
    isGift: true,
    packaging: "Hộp 56 Viên",
  },
  {
    id: "s7",
    name: "Siro Fitobimbi Omega Junior Gocce Pharmalife bổ sung acid béo không no...",
    image: "/placeholder.svg?height=200&width=200",
    price: 390000,
    unit: "Hộp",
    isGift: true,
    packaging: "Hộp 1 Lọ x 30ml",
  },
  {
    id: "s8",
    name: "Viên nhai Nature's Way Kids Smart Vita Gummies Omega-3 DHA Fish Oil hư...",
    image: "/placeholder.svg?height=200&width=200",
    price: 248000,
    originalPrice: 310000,
    unit: "Hộp",
    discount: 20,
    packaging: "Hộp 60 Viên",
  },
  {
    id: "s9",
    name: "Viên uống Omega 3 Fish Oil 1000mg Good Health giúp phát triển não bộ, tốt cho...",
    image: "/placeholder.svg?height=200&width=200",
    price: 395000,
    unit: "Hộp",
    packaging: "Hộp 150 Viên",
  },
  {
    id: "s10",
    name: "Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ...",
    image: "/placeholder.svg?height=200&width=200",
    price: 570000,
    unit: "Hộp",
    packaging: "Hộp 6 Vỉ x 20 Viên",
  },
  {
    id: "s11",
    name: "Viên uống Pregnacare Max Omega 3 DHA Vitabiotics cung cấp vitamin và...",
    image: "/placeholder.svg?height=200&width=200",
    price: 495000,
    originalPrice: 550000,
    unit: "Hộp",
    discount: 10,
    packaging: "Hộp 84 Viên",
  },
  {
    id: "s12",
    name: "Viên uống Omexxel 3-6-9 tốt cho trí não, giúp bổ mắt (100 viên)",
    image: "/placeholder.svg?height=200&width=200",
    price: 302400,
    originalPrice: 378000,
    unit: "Hộp",
    discount: 20,
    packaging: "Hộp 100 Viên",
  },
]

const recentlyViewed = [
  {
    id: "rv1",
    name: "Thực phẩm bảo vệ sức khỏe Bioamicus Omega-3 hỗ trợ tốt c...",
    image: "/placeholder.svg?height=200&width=200",
    price: 385000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 30ml",
  },
  {
    id: "rv2",
    name: "Sữa dưỡng trắng, ngừa nám da Transino Whitening Clear Milk...",
    image: "/placeholder.svg?height=200&width=200",
    price: 717600,
    originalPrice: 920000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 100ml",
  },
  {
    id: "rv3",
    name: "Sữa bột Ensure Gold StrengthPro Abbott hương vani, ít ngọt,...",
    image: "/placeholder.svg?height=200&width=200",
    price: 399000,
    originalPrice: 435000,
    unit: "Hộp",
    discount: 10,
    packaging: "Hộp x 380g",
  },
  {
    id: "rv4",
    name: "Thực phẩm bảo vệ sức khỏe Calcium Premium JpanWell bổ sung...",
    image: "/placeholder.svg?height=200&width=200",
    price: 736000,
    originalPrice: 920000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp 120 Viên",
  },
  {
    id: "rv5",
    name: "Nước hoa hồng dưỡng trắng, mờ thâm nám Transino Whitening...",
    image: "/transino-lotion.jpg",
    price: 717600,
    originalPrice: 920000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 150ml",
  },
  {
    id: "rv6",
    name: "Nước hoa hồng Transino Brightening Clear Lotion làm sạch...",
    image: "/placeholder.svg?height=200&width=200",
    price: 717600,
    originalPrice: 920000,
    unit: "Hộp",
    discount: 22,
    packaging: "Hộp x 150ml",
  },
]

const filterCategories = [
  {
    title: "Loại sản phẩm",
    key: "category",
    options: ["Tất cả", "Thuốc tim mạch huyết áp", "Thuốc trị mỡ máu", "Thuốc dạ dày", "Thuốc trị tiểu đường"],
    expanded: true,
  },
  {
    title: "Đối tượng sử dụng",
    key: "target",
    options: ["Tất cả", "Người cao tuổi", "Trẻ em", "Người lớn", "Phụ nữ có thai"],
    expanded: true,
  },
]

const priceRanges = [
  { label: "Dưới 100.000đ", value: "under100" },
  { label: "100.000đ đến 300.000đ", value: "100-300" },
  { label: "300.000đ đến 500.000đ", value: "300-500" },
  { label: "Trên 500.000đ", value: "over500" },
]

const additionalFilters = [
  { title: "Chỉ định", key: "indication" },
  { title: "Loại thuốc", key: "type" },
  { title: "Loại da", key: "skin" },
  { title: "Nước sản xuất", key: "country" },
  { title: "Thương hiệu", key: "brand" },
  { title: "Xuất xứ thương hiệu", key: "origin" },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("s") || "Omega 3"
  const [sortBy, setSortBy] = useState("bestselling")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({
    category: true,
    target: true,
    price: true,
  })
  const [searchType, setSearchType] = useState<"products" | "articles">("products")

  const toggleFilter = (key: string) => {
    setExpandedFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

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
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="searchType"
                checked={searchType === "articles"}
                onChange={() => setSearchType("articles")}
                className="w-4 h-4 text-[#1a56db]"
              />
              <span className="text-sm">Bài viết sức khỏe</span>
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
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={idx === 0}
                            className="w-4 h-4 rounded border-gray-300 text-[#1a56db] focus:ring-[#1a56db]"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
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
                  {expandedFilters["price"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
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

              {/* Other filters */}
              {additionalFilters.map((filter) => (
                <div key={filter.key} className="border-b pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
                  <button
                    onClick={() => toggleFilter(filter.key)}
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-900"
                  >
                    {filter.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="font-semibold text-gray-900">Danh sách sản phẩm</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Lưu ý: Thuốc kê đơn và một số sản phẩm sẽ cần tư vấn từ dược sĩ
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
                      className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-100 text-[#1a56db]" : "text-gray-400"}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list" ? "bg-gray-100 text-[#1a56db]" : "text-gray-400"}`}
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
                  <span className="text-gray-700">Bạn có hài lòng với kết quả tìm kiếm này không?</span>
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
            <h2 className="text-xl font-bold text-gray-900">Sản phẩm vừa xem</h2>
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
                  <h3 className="font-semibold text-[#1a56db] mb-3">{category.title}</h3>
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
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
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f7fb]" />}>
      <SearchContent />
    </Suspense>
  )
}
