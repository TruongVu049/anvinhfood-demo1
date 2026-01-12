"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "/banner1.png",
    alt: "Vật liệu xây dựng chất lượng cao",
  },
  {
    id: 2,
    image: "/banner2.png",
    title: "Vật liệu xây dựng - Giá tốt mỗi ngày",
    cta: "Khám phá",
  },
];

const sideBanners = [
  {
    id: 1,
    image: "/ximang.png",
    title: "Xi măng chính hãng - Giảm đến 20%",
    cta: "Mua ngay",
  },
  {
    id: 2,
    image: "/thep.png",
    title: "Thép xây dựng Pomina - Chất lượng cao",
    cta: "Khám phá",
  },
  {
    id: 3,
    image: "/son.png",
    title: "Freeship từ 5 triệu - Giao tận công trình",
    cta: "Xem chi tiết",
  },
];

const smallBanners = [
  {
    image: "/banner2.png",
    alt: "Combo vật liệu tiết kiệm",
  },
  {
    image: "/banner3.png",
    alt: "Ưu đãi khách hàng mới",
  },
];

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4">
      {/* Main banner - takes 8 columns */}
      <div className="lg:col-span-8 relative rounded-xl sm:rounded-2xl overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[2/1]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.alt || "Banner"}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-4 sm:w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Small banners below main */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4">
          {smallBanners.map((banner, index) => (
            <div
              key={index}
              className="rounded-lg sm:rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            >
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.alt}
                width={400}
                height={150}
                className="w-full h-16 sm:h-24 object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side banners - takes 4 columns */}
      <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 sm:gap-3">
        {sideBanners.map((banner) => (
          <div
            key={banner.id}
            className="rounded-lg sm:rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all relative group"
          >
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.title}
              width={300}
              height={200}
              className="w-full h-24 sm:h-28 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center px-3 sm:px-4">
              <div>
                <h3 className="text-white font-bold text-xs sm:text-sm leading-tight mb-1 sm:mb-2">
                  {banner.title}
                </h3>
                <button className="px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500 text-white text-[10px] sm:text-xs rounded-full hover:bg-cyan-600 transition-colors">
                  {banner.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
