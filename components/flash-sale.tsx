"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "./product-card"
import { ChevronRight } from "lucide-react"

const timeSlots = [
  { time: "08:00 - 22:00, 17/12", status: "Đang diễn ra", active: true },
  { time: "08:00 - 12:59, 18/12", status: "Sắp diễn ra", active: false },
  { time: "13:00 - 17:59, 18/12", status: "Sắp diễn ra", active: false },
  { time: "18:00 - 22:00, 18/12", status: "Sắp diễn ra", active: false },
]

const flashSaleProducts = [
  {
    id: "1",
    name: "Thăn nội bò Úc đông lạnh Pacow cao cấp 500g",
    image: "/perfectly-seared-beef-tenderloin.png",
    price: 245000,
    originalPrice: 315000,
    unit: "Khay",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "2",
    name: "Cá hồi Na Uy phi lê đông lạnh tươi ngon 500g",
    image: "/pan-seared-salmon.png",
    price: 289000,
    originalPrice: 370000,
    unit: "Khay",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "3",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    originalPrice: 495000,
    unit: "Hộp",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "4",
    name: "Ba chỉ bò Mỹ cắt lát BBQ đông lạnh 300g",
    image: "/beef-belly-sliced.jpg",
    price: 165000,
    originalPrice: 212000,
    unit: "Khay",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "5",
    name: "Sò điệp Nhật Bản size L đông lạnh 500g",
    image: "/japanese-scallop.jpg",
    price: 325000,
    originalPrice: 420000,
    unit: "Hộp",
    discount: 22,
    showFlashDeal: true,
  },
  {
    id: "6",
    name: "Khoai tây McCain Shoestring chiên giòn 1kg",
    image: "/frozen-fries.jpg",
    price: 75000,
    originalPrice: 95000,
    unit: "Gói",
    discount: 22,
    showFlashDeal: true,
  },
]

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 51,
    seconds: 2,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="my-8">
      {/* Flash Sale Header Banner */}
      <div className="relative bg-gradient-to-r from-[#1a56db] via-[#3b82f6] to-[#60a5fa] rounded-t-2xl p-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white italic" style={{ fontFamily: "cursive" }}>
              Flash<span className="text-cyan-300">sale</span> GIÁ SỐC
            </h2>
            <span className="text-white text-sm">❄️ Đông lạnh tươi ngon</span>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full text-sm hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg">
            XEM NGAY {">"}
          </button>
        </div>
        <div className="text-right text-white text-sm mt-1">Xem thể lệ {">"}</div>
      </div>

      {/* Time Slots */}
      <div className="bg-white border-x border-gray-200">
        <div className="flex overflow-x-auto">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className={`flex-1 min-w-[180px] py-3 px-4 text-center border-b-2 transition-colors ${
                slot.active ? "border-[#1a56db] bg-blue-50" : "border-transparent hover:bg-gray-50"
              }`}
            >
              <div className={`font-semibold ${slot.active ? "text-[#1a56db]" : "text-gray-700"}`}>{slot.time}</div>
              <div className={`text-xs ${slot.active ? "text-[#ff3b3b]" : "text-gray-500"}`}>{slot.status}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Countdown */}
      <div className="bg-white px-4 py-3 border-x border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Kết thúc sau</span>
          <div className="flex items-center gap-1">
            <div className="bg-[#1a56db] text-white font-bold w-8 h-8 rounded flex items-center justify-center text-sm">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="text-gray-800 font-bold">:</span>
            <div className="bg-[#1a56db] text-white font-bold w-8 h-8 rounded flex items-center justify-center text-sm">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="text-gray-800 font-bold">:</span>
            <div className="bg-[#1a56db] text-white font-bold w-8 h-8 rounded flex items-center justify-center text-sm">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white rounded-b-2xl border border-t-0 border-gray-200 p-4">
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="text-center mt-6">
          <button className="text-[#1a56db] font-medium hover:underline">Xem tất cả {">"}</button>
        </div>
      </div>
    </section>
  )
}
