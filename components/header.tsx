"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Car,
} from "lucide-react";

const mainCategories = [
  {
    label: "Vật liệu cơ bản",
    href: "/vat-lieu",
    hasDropdown: true,
    icon: "🧱",
    subCategories: [
      { label: "Xi măng các loại", icon: "/ximang.png" },
      { label: "Thép xây dựng", icon: "/thep.png" },
      { label: "Gạch - Ngói", icon: "/gach.png" },
      { label: "Cát - Đá - Sỏi", icon: "/cat.png" },
      { label: "Gỗ xây dựng", icon: "/go.png" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Xi măng Hà Tiên", icon: "🧱" },
      { label: "Xi măng Holcim", icon: "🧱" },
      { label: "Thép Pomina", icon: "🔩" },
      { label: "Thép Việt Nhật", icon: "🔩" },
      { label: "Gạch Tuynel", icon: "🏗️" },
      { label: "Gạch block", icon: "🏗️" },
      { label: "Cát xây dựng", icon: "⛰️" },
      { label: "Đá 1x2", icon: "⛰️" },
      { label: "Đá 4x6", icon: "⛰️" },
    ],
    bestSellers: [
      { name: "Xi măng Hà Tiên PCB40 50kg", price: 95000, image: "/ximang.png" },
      { name: "Thép Pomina phi 10mm cuộn", price: 890000, image: "/thep.png" },
      { name: "Gạch ống Tuynel 4 lỗ", price: 1800, image: "/gach.png" },
      { name: "Cát xây dựng loại 1", price: 350000, image: "/cat.png" },
      { name: "Gỗ xây dựng cao cấp", price: 420000, image: "/go.png" },
    ],
  },
  {
    label: "Sơn - Chống thấm",
    href: "/son",
    hasDropdown: true,
    icon: "🎨",
    subCategories: [
      { label: "Sơn nội thất", icon: "/son.png" },
      { label: "Sơn ngoại thất", icon: "/son2.png" },
      { label: "Sơn chống thấm", icon: "/son3.png" },
      { label: "Sơn lót", icon: "/son4.png" },
      { label: "Bột bả tường", icon: "/son5.png" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "Sơn Dulux", icon: "🎨" },
      { label: "Sơn Jotun", icon: "🎨" },
      { label: "Sơn Nippon", icon: "🎨" },
      { label: "Sơn TOA", icon: "🎨" },
      { label: "Kova chống thấm", icon: "💧" },
      { label: "Sika chống thấm", icon: "💧" },
    ],
    bestSellers: [
      { name: "Sơn Dulux nội thất 18L", price: 1650000, image: "/son.png" },
      { name: "Sơn Jotun Essence 5L", price: 485000, image: "/son2.png" },
      { name: "Chống thấm Sika 5kg", price: 280000, image: "/son3.png" },
    ],
  },
  {
    label: "Thiết bị vệ sinh",
    href: "/ve-sinh",
    hasDropdown: true,
    icon: "🚿",
    subCategories: [
      { label: "Bồn cầu", icon: "/boncau.png" },
      { label: "Lavabo - Chậu rửa", icon: "/dungcunhavesinh.png" },
      { label: "Vòi sen - Sen tắm", icon: "/shower.png" },
      { label: "Phụ kiện phòng tắm", icon: "/accessories.png" },
      { label: "Xem thêm", icon: "" },
    ],
    sideItems: [
      { label: "TOTO", icon: "🚿" },
      { label: "INAX", icon: "🚿" },
      { label: "American Standard", icon: "🚿" },
      { label: "Caesar", icon: "🚿" },
    ],
    bestSellers: [
      { name: "Bồn cầu TOTO 1 khối", price: 3850000, image: "/boncau.png" },
      { name: "Lavabo INAX chân đứng", price: 1250000, image: "/dungcunhavesinh.png" },
    ],
  },
  { label: "Giới thiệu sản phẩm", href: "/gioi-thieu-san-pham", icon: "📋" },
  { label: "Khuyến mãi", href: "/khuyen-mai", icon: "🔥" },
  { label: "Combo tiết kiệm", href: "/combo", icon: "📦" },
  { label: "Hệ thống cửa hàng", href: "/he-thong-cua-hang", icon: "🏪" },
];

const quickSearchTerms = [
  "Xi măng",
  "Thép xây dựng",
  "Gạch ống",
  "Sơn Dulux",
  "Cát đá",
  "Bồn cầu",
  "Gạch men",
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSideItem, setActiveSideItem] = useState<number>(0);

  const activeMenu = mainCategories.find(
    (c) => c.label === activeCategory && c.hasDropdown
  );

  // Xử lý tìm kiếm
  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/tim-kiem?s=${encodeURIComponent(
        searchQuery.trim()
      )}`;
    }
  };

  // Xử lý khi nhấn Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className=" z-50">
      {/* Top bar */}
      <div className="bg-[#1a56db] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 md:flex hidden fitems-center justify-between h-9">
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-sm">
              Vật liệu xây dựng chính hãng - Giá tốt nhất
            </span>
            <Link
              href="#"
              className="text-yellow-300 hover:underline ml-1 hidden sm:inline text-sm"
            >
              Tìm hiểu ngay
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="tel:19001234"
              className="flex items-center gap-1.5 hover:text-yellow-300 text-sm"
            >
              <Car />
              <span>GIAO HÀNG TẬN CÔNG TRÌNH</span>
            </Link>
            <Link
              href="tel:19001234"
              className="flex items-center gap-1.5 hover:text-yellow-300 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>7:30 - 17:30 | Thứ 2 - Thứ 7</span>
            </Link>
            <Link
              href="tel:+842841099879"
              className="flex items-center gap-1.5 hover:text-yellow-300 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Hotline: (+84) 2841099879</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#1a56db] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-3 md:flex-nowrap flex-wrap">
            {/* Logo */}
            <Link href="/" className="shrink-0 md:w-auto w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Logo Vật liệu xây dựng"
                  width={48}
                  height={48}
                  className="w-24 h-auto object-contain"
                />
              </div>
            </Link>

            {/* Search bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm xi măng, thép, gạch, sơn, thiết bị vệ sinh..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full h-11 pl-4 pr-28 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                  <button
                    onClick={handleSearch}
                    className="p-2 bg-[#1a56db] text-white rounded-full hover:bg-[#1e40af] transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Quick search tags */}
              <div className="mt-3 hidden md:flex items-center gap-2 overflow-x-auto">
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

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                href="/"
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
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
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
                      className={`w-4 h-4 transition-transform ${
                        activeCategory === category.label ? "rotate-180" : ""
                      }`}
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
                      <h3 className="text-lg font-bold text-gray-900">
                        Bán chạy nhất
                      </h3>
                      <span className="text-sm text-gray-400">|</span>
                      <Link
                        href="#"
                        className="text-sm text-[#1a56db] hover:underline flex items-center gap-1"
                      >
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
                          <p className="text-[#1a56db] font-bold text-sm">
                            {product.price.toLocaleString("vi-VN")}đ
                          </p>
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
                    href="/"
                    className="flex items-center justify-between px-3 py-3 text-sm text-gray-700 hover:text-[#1a56db] hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.label}
                    </span>
                    {category.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
