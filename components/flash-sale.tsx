"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./product-card";
import { ChevronRight } from "lucide-react";

const timeSlots = [
  { time: "08:00 - 22:00, 17/12", status: "Đang diễn ra", active: true },
  { time: "08:00 - 12:59, 18/12", status: "Sắp diễn ra", active: false },
  { time: "13:00 - 17:59, 18/12", status: "Sắp diễn ra", active: false },
  { time: "18:00 - 22:00, 18/12", status: "Sắp diễn ra", active: false },
];

const flashSaleProducts = [
  {
    id: "1",
    name: "Xi măng Holcim PCB40 bao 50kg",
    image: "/ximang2.png",
    price: 85000,
    originalPrice: 105000,
    unit: "Bao",
    discount: 19,
    showFlashDeal: true,
  },
  {
    id: "2",
    name: "Thép Việt Nhật phi 12mm cuộn",
    image: "/thep2.png",
    price: 780000,
    originalPrice: 920000,
    unit: "Cuộn",
    discount: 15,
    showFlashDeal: true,
  },
  {
    id: "3",
    name: "Sơn Jotun Essence nội thất 5L",
    image: "/son2.png",
    price: 485000,
    originalPrice: 595000,
    unit: "Thùng",
    discount: 18,
    showFlashDeal: true,
  },
  {
    id: "4",
    name: "Gạch men 60x60 cao cấp",
    image: "/gach2.png",
    price: 165000,
    originalPrice: 212000,
    unit: "m²",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "5",
    name: "Ngói nhà cao cấp chống nóng",
    image: "/ngoi.png",
    price: 25000,
    originalPrice: 32000,
    unit: "Viên",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "6",
    name: "Gỗ xây dựng cao cấp",
    image: "/go.png",
    price: 420000,
    originalPrice: 500000,
    unit: "m²",
    discount: 17,
    showFlashDeal: true,
  },
];

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 51,
    seconds: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="my-8">
      {/* Flash Sale Header Banner */}
      <div className="relative bg-gradient-to-r from-[#1a56db] via-[#3b82f6] to-[#60a5fa] rounded-t-2xl p-3 sm:p-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
            <h2
              className="text-xl sm:text-3xl font-bold text-white italic"
              style={{ fontFamily: "cursive" }}
            >
              Flash<span className="text-cyan-300">sale</span> GIÁ SỐC
            </h2>
            <span className="text-white text-xs sm:text-sm hidden sm:inline">🏗️ Vật liệu chất lượng</span>
          </div>
          <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full text-xs sm:text-sm hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg">
            XEM NGAY {">"}
          </button>
        </div>
        <div className="text-right text-white text-xs sm:text-sm mt-1 hidden sm:block">
          Xem thể lệ {">"}
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-white border-x border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className={`flex-1 min-w-[120px] sm:min-w-[180px] py-2 sm:py-3 px-2 sm:px-4 text-center border-b-2 transition-colors ${
                slot.active
                  ? "border-[#1a56db] bg-blue-50"
                  : "border-transparent hover:bg-gray-50"
              }`}
            >
              <div
                className={`font-semibold text-xs sm:text-sm ${
                  slot.active ? "text-[#1a56db]" : "text-gray-700"
                }`}
              >
                {slot.time}
              </div>
              <div
                className={`text-[10px] sm:text-xs ${
                  slot.active ? "text-[#ff3b3b]" : "text-gray-500"
                }`}
              >
                {slot.status}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Countdown */}
      <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 border-x border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-xs sm:text-sm">Kết thúc sau</span>
          <div className="flex items-center gap-1">
            <div className="bg-[#1a56db] text-white font-bold w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center text-xs sm:text-sm" suppressHydrationWarning>
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="text-gray-800 font-bold text-xs sm:text-sm">:</span>
            <div className="bg-[#1a56db] text-white font-bold w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center text-xs sm:text-sm" suppressHydrationWarning>
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="text-gray-800 font-bold text-xs sm:text-sm">:</span>
            <div className="bg-[#1a56db] text-white font-bold w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center text-xs sm:text-sm" suppressHydrationWarning>
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white rounded-b-2xl border border-t-0 border-gray-200 p-2 sm:p-4">
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 z-10 hidden sm:flex">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
        <div className="text-center mt-4 sm:mt-6">
          <button className="text-[#1a56db] font-medium hover:underline text-sm sm:text-base">
            Xem tất cả {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
