"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"

interface ProductSectionProps {
  title: string
  products: Array<{
    id: string
    name: string
    image: string
    price: number
    originalPrice?: number
    unit: string
    discount?: number
    isGift?: boolean
    badge?: string
  }>
  tabs?: string[]
  showViewAll?: boolean
}

export function ProductSection({ title, products, tabs, showViewAll = true }: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {showViewAll && <button className="text-[#1a56db] font-medium hover:underline text-sm">Xem tất cả →</button>}
      </div>

      {tabs && (
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                index === activeTab ? "bg-[#1a56db] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
