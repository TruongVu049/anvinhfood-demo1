"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const banners = [
  {
    id: 1,
    image: "/premium-frozen-seafood-salmon-shrimp-blue-backgrou.jpg",
    alt: "Hải sản đông lạnh cao cấp",
  },
  {
    id: 2,
    image: "/imported-beef-steak-premium-quality-winter-promoti.jpg",
    alt: "Thịt bò nhập khẩu",
  },
  {
    id: 3,
    image: "/frozen-vegetables-healthy-food-green-background.jpg",
    alt: "Rau củ đông lạnh tươi ngon",
  },
]

const sideBanners = [
  {
    id: 1,
    image: "/frozen-lobster-crab-seafood.jpg",
    title: "Hải sản cao cấp - Giảm đến 30%",
    cta: "Mua ngay",
  },
  {
    id: 2,
    image: "/wagyu-beef-premium-steak.jpg",
    title: "Bò Wagyu Nhật Bản - Mới về",
    cta: "Khám phá",
  },
  {
    id: 3,
    image: "/frozen-food-delivery-truck.jpg",
    title: "Freeship đơn từ 500K - Giao lạnh 2h",
    cta: "Xem chi tiết",
  },
]

const smallBanners = [
  {
    image: "/placeholder.svg?height=150&width=200",
    alt: "Combo tiết kiệm",
  },
  {
    image: "/placeholder.svg?height=150&width=200",
    alt: "Ưu đãi thành viên mới",
  },
]

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Main banner - takes 8 columns */}
      <div className="lg:col-span-8 relative rounded-2xl overflow-hidden">
        <div className="relative aspect-[2/1]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Small banners below main */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {smallBanners.map((banner, index) => (
            <div key={index} className="rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.alt}
                width={200}
                height={150}
                className="w-full h-24 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side banners - takes 4 columns */}
      <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
        {sideBanners.map((banner) => (
          <div
            key={banner.id}
            className="rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all relative group"
          >
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.title}
              width={300}
              height={200}
              className="w-full h-28 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center px-4">
              <div>
                <h3 className="text-white font-bold text-sm leading-tight mb-2">{banner.title}</h3>
                <button className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full hover:bg-cyan-600 transition-colors">
                  {banner.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
