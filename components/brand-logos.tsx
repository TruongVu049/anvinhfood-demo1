import Link from "next/link"

const brands = [
  {
    name: "JpanWell",
    discount: "Giảm đến 35%",
    image: "/jpanwell-supplement-brand.jpg",
    bgColor: "from-amber-100 to-amber-50",
  },
  {
    name: "KENKO",
    discount: "Giảm đến 33%",
    image: "/kenko-vitamins-brand.jpg",
    bgColor: "from-purple-100 to-purple-50",
  },
  {
    name: "BRAUER",
    discount: "Giảm đến 20%",
    image: "/brauer-baby-vitamins.jpg",
    bgColor: "from-green-100 to-green-50",
  },
  {
    name: "Vitamins For Life",
    discount: "Giảm đến 20%",
    image: "/vitamins-for-life-brand.jpg",
    bgColor: "from-orange-100 to-orange-50",
  },
  {
    name: "VITABIOTICS",
    discount: "Voucher Giảm đến 20%",
    image: "/vitabiotics-pregnacare.jpg",
    bgColor: "from-blue-100 to-blue-50",
  },
]

export function BrandLogos() {
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-xs">💝</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Thương hiệu yêu thích</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {brands.map((brand, index) => (
          <Link
            key={index}
            href="#"
            className={`bg-gradient-to-br ${brand.bgColor} rounded-xl p-4 hover:shadow-lg transition-all border border-gray-100`}
          >
            <div className="aspect-[3/2] mb-3 flex items-center justify-center">
              <img src={brand.image || "/placeholder.svg"} alt={brand.name} className="max-h-16 object-contain" />
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800 text-sm">{brand.name}</div>
              <div className="text-[#1a56db] text-xs font-medium mt-1">{brand.discount}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
