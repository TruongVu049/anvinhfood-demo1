import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  unit: string
  discount?: number
  isGift?: boolean
  badge?: string
  packaging?: string
  showFlashDeal?: boolean
}

export function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  unit,
  discount,
  isGift,
  badge,
  packaging,
  showFlashDeal,
}: ProductCardProps) {
  const formatPrice = (p: number) => {
    return p.toLocaleString("vi-VN") + "đ"
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-2 sm:p-3 hover:shadow-lg transition-shadow group flex flex-col h-full">
      <Link href={`/san-pham/${id}`} className="flex-1 flex flex-col">
        <div className="relative mb-2 sm:mb-3 overflow-hidden rounded-lg bg-gray-50">
          <div className="w-full aspect-square">
            {discount && (
              <div className="absolute top-0 left-0 bg-[#ff3b3b] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-br-lg rounded-tl-lg z-10">
                -{discount}%
              </div>
            )}
            {badge && (
              <div className="absolute top-0 right-0 bg-[#00ab56] text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-bl-lg rounded-tr-lg z-10">
                {badge}
              </div>
            )}
            {isGift && (
              <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 bg-[#fff3e0] text-[#f57c00] text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-lg text-center z-10 flex items-center justify-center gap-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                  />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
                <span className="hidden sm:inline">Quà tặng</span>
              </div>
            )}
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
        <h3 className="text-xs sm:text-sm text-gray-800 font-medium line-clamp-2 min-h-[32px] sm:min-h-[40px] mb-1 sm:mb-2 leading-4 sm:leading-5">{name}</h3>
        <div className="mt-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1 mb-1">
            <span className="text-[#1a56db] font-bold text-sm sm:text-base">{formatPrice(price)}</span>
            <span className="text-gray-500 text-xs sm:text-sm">/ {unit}</span>
          </div>
          {originalPrice && <div className="text-gray-400 text-xs sm:text-sm line-through">{formatPrice(originalPrice)}</div>}
          {packaging && <div className="text-gray-500 text-[10px] sm:text-xs mt-1 hidden sm:block">{packaging}</div>}
        </div>
      </Link>
      {showFlashDeal && (
        <button className="w-full mt-1.5 sm:mt-2 py-1 sm:py-1.5 bg-[#fff3e0] text-[#f57c00] text-[10px] sm:text-xs font-medium rounded-lg flex items-center justify-center gap-1">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden xs:inline">Ưu đãi giá sốc</span>
          <span className="xs:hidden">Giá sốc</span>
        </button>
      )}
      <button className="w-full mt-1.5 sm:mt-2 py-2 sm:py-2.5 bg-[#1a56db] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#1e40af] transition-colors">
        Chọn mua
      </button>
    </div>
  )
}
