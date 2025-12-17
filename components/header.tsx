"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, ChevronDown, Menu, X, Mic, Camera } from "lucide-react"

const mainCategories = [
  {
    label: "Thịt đông lạnh",
    href: "/thit-dong-lanh",
    hasDropdown: true,
    icon: "🥩",
    subCategories: [
      { label: "Thịt bò nhập khẩu", icon: "/juicy-beef-steak.png" },
      { label: "Thịt heo", icon: "/pork-meat.jpg" },
      { label: "Thịt gà", icon: "/raw-chicken-pieces.png" },
      { label: "Thịt cừu", icon: "/raw-lamb-chops.png" },
      { label: "Thịt vịt", icon: "/roasted-duck.png" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Bò Úc", icon: "🇦🇺" },
      { label: "Bò Mỹ", icon: "🇺🇸" },
      { label: "Bò Nhật Wagyu", icon: "🇯🇵" },
      { label: "Thịt heo Iberico", icon: "🐷" },
      { label: "Gà ta", icon: "🐔" },
      { label: "Gà công nghiệp", icon: "🐓" },
      { label: "Thịt cừu New Zealand", icon: "🐑" },
      { label: "Ba chỉ bò", icon: "🥓" },
      { label: "Sườn bò", icon: "🍖" },
    ],
    bestSellers: [
      { name: "Thăn nội bò Úc đông lạnh Pacow 500g", price: 285000, image: "/perfectly-seared-beef-tenderloin.png" },
      { name: "Ba chỉ bò Mỹ cắt lát BBQ 300g", price: 189000, image: "/beef-belly-sliced.jpg" },
      { name: "Sườn non heo Iberico Tây Ban Nha", price: 450000, image: "/iberico-pork-ribs.jpg" },
      { name: "Đùi gà rút xương đông lạnh 1kg", price: 125000, image: "/chicken-thigh.jpg" },
      { name: "Thịt cừu cắt lát New Zealand", price: 320000, image: "/lamb-slices.jpg" },
    ],
  },
  {
    label: "Hải sản",
    href: "/hai-san",
    hasDropdown: true,
    icon: "🦐",
    subCategories: [
      { label: "Tôm các loại", icon: "/cooked-shrimp-platter.png" },
      { label: "Cá hồi - Cá ngừ", icon: "/salmon-fish.jpg" },
      { label: "Mực - Bạch tuộc", icon: "/squid-octopus.jpg" },
      { label: "Nghêu - Sò - Ốc", icon: "/clams-on-sand.png" },
      { label: "Cua - Ghẹ", icon: "/solitary-crab.png" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Tôm sú", icon: "🦐" },
      { label: "Tôm hùm", icon: "🦞" },
      { label: "Cá hồi Na Uy", icon: "🐟" },
      { label: "Cá ngừ đại dương", icon: "🐠" },
      { label: "Mực ống", icon: "🦑" },
      { label: "Bạch tuộc", icon: "🐙" },
      { label: "Cua hoàng đế", icon: "🦀" },
      { label: "Nghêu trắng", icon: "🐚" },
      { label: "Sò điệp", icon: "🦪" },
    ],
    bestSellers: [
      { name: "Cá hồi Na Uy phi lê đông lạnh 500g", price: 320000, image: "/pan-seared-salmon.png" },
      { name: "Tôm sú size 20 đông lạnh 1kg", price: 450000, image: "/tiger-shrimp.jpg" },
      { name: "Mực ống làm sạch đông lạnh 500g", price: 185000, image: "/cleaned-squid.jpg" },
      { name: "Sò điệp Nhật Bản size L 500g", price: 380000, image: "/japanese-scallop.jpg" },
      { name: "Cua hoàng đế Alaska 1kg", price: 1200000, image: "/king-crab.jpg" },
    ],
  },
  {
    label: "Rau củ đông lạnh",
    href: "/rau-cu",
    hasDropdown: true,
    icon: "🥦",
    subCategories: [
      { label: "Rau xanh đông lạnh", icon: "/frozen-vegetables.png" },
      { label: "Khoai tây chiên", icon: "/frozen-fries.jpg" },
      { label: "Ngô - Đậu", icon: "/frozen-corn-peas.jpg" },
      { label: "Nấm các loại", icon: "/forest-floor-mushrooms.png" },
      { label: "Mix rau củ", icon: "/mixed-vegetables.jpg" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Khoai tây McCain", icon: "🍟" },
      { label: "Bông cải xanh", icon: "🥦" },
      { label: "Đậu Hà Lan", icon: "🫛" },
      { label: "Ngô ngọt", icon: "🌽" },
      { label: "Cà rốt baby", icon: "🥕" },
      { label: "Rau spinach", icon: "🥬" },
      { label: "Nấm đông cô", icon: "🍄" },
      { label: "Edamame", icon: "🫛" },
    ],
    bestSellers: [
      { name: "Khoai tây McCain Shoestring 1kg", price: 89000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Bông cải xanh đông lạnh 500g", price: 45000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Mix rau củ 3 màu 500g", price: 55000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Đậu Hà Lan đông lạnh 1kg", price: 65000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Edamame Nhật Bản 500g", price: 75000, image: "/placeholder.svg?height=120&width=120" },
    ],
  },
  {
    label: "Đồ ăn chế biến sẵn",
    href: "/che-bien-san",
    hasDropdown: true,
    icon: "🍱",
    subCategories: [
      { label: "Há cảo - Sủi cảo", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Chả giò - Nem", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Pizza - Bánh", icon: "/frozen-pizza.png" },
      { label: "Xúc xích - Lạp xưởng", icon: "/sausages.jpg" },
      { label: "Đồ nướng BBQ", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Há cảo tôm", icon: "🥟" },
      { label: "Sủi cảo Hàn Quốc", icon: "🥟" },
      { label: "Chả giò Việt Nam", icon: "🌯" },
      { label: "Pizza Ý", icon: "🍕" },
      { label: "Xúc xích Đức", icon: "🌭" },
      { label: "Burger patty", icon: "🍔" },
      { label: "Gà rán tẩm bột", icon: "🍗" },
      { label: "Cá viên chiên", icon: "🍢" },
    ],
    bestSellers: [
      { name: "Há cảo tôm CP 500g", price: 95000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Chả giò rế mini 500g", price: 75000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Pizza phô mai Margherita 12 inch", price: 129000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Xúc xích Đức Johnsonville 360g", price: 145000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Burger bò Úc 4 miếng", price: 165000, image: "/placeholder.svg?height=120&width=120" },
    ],
  },
  {
    label: "Kem & Tráng miệng",
    href: "/kem-trang-mieng",
    hasDropdown: true,
    icon: "🍦",
    subCategories: [
      { label: "Kem hộp", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Kem que - Kem ốc quế", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Bánh ngọt đông lạnh", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Trái cây đông lạnh", icon: "/placeholder.svg?height=40&width=40" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Häagen-Dazs", icon: "🍨" },
      { label: "Baskin Robbins", icon: "🍦" },
      { label: "Magnum", icon: "🍫" },
      { label: "Cornetto", icon: "🍦" },
      { label: "Bánh tiramisu", icon: "🍰" },
      { label: "Dâu tây đông lạnh", icon: "🍓" },
      { label: "Việt quất đông lạnh", icon: "🫐" },
    ],
    bestSellers: [
      { name: "Kem Häagen-Dazs Vanilla 473ml", price: 225000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Kem Magnum Almond 3 que", price: 89000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Bánh Tiramisu đông lạnh 500g", price: 185000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Mix berries đông lạnh 500g", price: 125000, image: "/placeholder.svg?height=120&width=120" },
      { name: "Kem Cornetto Classic 4 que", price: 65000, image: "/placeholder.svg?height=120&width=120" },
    ],
  },
  { label: "Khuyến mãi", href: "/khuyen-mai", icon: "🔥" },
  { label: "Combo tiết kiệm", href: "/combo", icon: "💰" },
  { label: "Hệ thống cửa hàng", href: "/he-thong-cua-hang" },
]

const quickSearchTerms = [
  "Bò Úc",
  "Cá hồi",
  "Tôm sú",
  "Khoai tây chiên",
  "Há cảo",
  "Pizza",
  "Kem Häagen-Dazs",
  "Thịt heo Iberico",
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSideItem, setActiveSideItem] = useState<number>(0)

  const activeMenu = mainCategories.find((c) => c.label === activeCategory && c.hasDropdown)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a56db] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-sm">Thực phẩm đông lạnh chất lượng cao</span>
            <Link href="#" className="text-yellow-300 hover:underline ml-1 hidden sm:inline text-sm">
              Tìm hiểu ngay
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-1.5 hover:text-yellow-300 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden sm:inline">Tải ứng dụng</span>
            </Link>
            <Link href="tel:19001234" className="flex items-center gap-1.5 hover:text-yellow-300 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Hotline: 1900 1234</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#1a56db] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-3">
            {/* Logo - Updated for frozen food */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg">
                  <div className="text-center">
                    <div className="text-[#1a56db] font-bold text-[11px] leading-tight">FRESH</div>
                    <div className="text-[#0ea5e9] font-bold text-xs leading-tight">FROZEN</div>
                    <div className="text-[6px] text-gray-500">Premium Food</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Search bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm thực phẩm đông lạnh, hải sản, thịt nhập khẩu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-4 pr-28 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-[#1a56db] text-white rounded-full hover:bg-[#1e40af] transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/dang-nhap"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-sm font-medium">Đăng nhập</span>
              </Link>
              <Link
                href="/gio-hang"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#0ea5e9] text-white rounded-lg hover:bg-[#0284c7] transition-colors font-medium"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="text-sm">Giỏ hàng</span>
              </Link>
              <button
                className="md:hidden p-2 hover:bg-white/10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Quick search tags */}
          <div className="hidden md:flex items-center gap-2 pb-3 overflow-x-auto">
            {quickSearchTerms.map((term) => (
              <Link
                key={term}
                href={`/tim-kiem?s=${encodeURIComponent(term)}`}
                className="px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-xs whitespace-nowrap hover:bg-white/30 transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation with mega menu */}
      <nav className="bg-white border-b shadow-sm hidden md:block relative">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-0 overflow-x-auto">
            {mainCategories.map((category) => (
              <li
                key={category.label}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.label)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  href={category.href}
                  className={`flex items-center gap-1 px-4 py-3.5 text-sm transition-colors whitespace-nowrap font-medium ${
                    activeCategory === category.label
                      ? "text-[#1a56db] bg-blue-50"
                      : "text-gray-700 hover:text-[#1a56db] hover:bg-blue-50"
                  }`}
                >
                  {category.label}
                  {category.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeCategory === category.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenu && (
          <div
            className="absolute left-0 right-0 bg-white border-t shadow-xl z-50"
            onMouseEnter={() => setActiveCategory(activeMenu.label)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex gap-6">
                {/* Left sidebar with categories */}
                <div className="w-64 border-r pr-6">
                  <ul className="space-y-1">
                    {activeMenu.sideItems?.map((item, index) => (
                      <li key={item.label}>
                        <button
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                            activeSideItem === index
                              ? "bg-blue-50 text-[#1a56db] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                          onMouseEnter={() => setActiveSideItem(index)}
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right side with subcategories */}
                <div className="flex-1">
                  {/* Subcategory cards */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {activeMenu.subCategories?.map((sub) => (
                      <Link
                        key={sub.label}
                        href="#"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        {sub.icon && (
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm">
                            <Image
                              src={sub.icon || "/placeholder.svg"}
                              alt={sub.label}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#1a56db]">
                          {sub.label}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Best sellers section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg font-bold text-gray-900">Bán chạy nhất</h3>
                      <span className="text-sm text-gray-400">|</span>
                      <Link href="#" className="text-sm text-[#1a56db] hover:underline flex items-center gap-1">
                        Xem tất cả
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {activeMenu.bestSellers?.map((product, index) => (
                        <Link key={index} href="#" className="group">
                          <div className="bg-gray-50 rounded-xl p-3 mb-2 group-hover:shadow-md transition-shadow">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={120}
                              height={120}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="text-sm text-gray-700 line-clamp-2 group-hover:text-[#1a56db] mb-1">
                            {product.name}
                          </h4>
                          <p className="text-[#1a56db] font-bold text-sm">{product.price.toLocaleString("vi-VN")}đ</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-2">
            <ul className="space-y-1">
              {mainCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="flex items-center justify-between px-3 py-3 text-sm text-gray-700 hover:text-[#1a56db] hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.label}
                    </span>
                    {category.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
