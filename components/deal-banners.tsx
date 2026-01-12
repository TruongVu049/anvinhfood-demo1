import Link from "next/link";
import Image from "next/image";

const deals = [
  {
    image: "/banner1.png",
    alt: "Vật liệu xây dựng - Giảm đến 30%",
    href: "#",
  },
  {
    image: "/banner2.png",
    alt: "Chương trình ưu đãi đặc biệt",
    href: "#",
  },
];

const subDeals = [
  {
    image: "/banner1.png",
    alt: "Xi măng chính hãng",
    href: "#",
  },
  {
    image: "/banner2.png",
    alt: "Thép xây dựng",
    href: "#",
  },
  {
    image: "/banner3.png",
    alt: "Sơn cao cấp",
    href: "#",
  },
  {
    image: "/banner1.png",
    alt: "Gạch ốp lát",
    href: "#",
  },
];

export function DealBanners() {
  return (
    <section className="py-4 sm:py-8">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] sm:text-xs">🎁</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Ưu đãi hấp dẫn</h2>
      </div>

      {/* Top banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4">
        {deals.map((deal, index) => (
          <Link
            key={index}
            href={deal.href}
            className="rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-gray-100"
          >
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={deal.alt}
              width={600}
              height={300}
              className="w-full h-auto object-contain"
            />
          </Link>
        ))}
      </div>

      {/* Bottom banners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {subDeals.map((deal, index) => (
          <Link
            key={index}
            href={deal.href}
            className="rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-gray-100"
          >
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={deal.alt}
              width={300}
              height={200}
              className="w-full h-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
