import Link from "next/link";
import Image from "next/image";

const deals = [
  {
    image: "/frozen-seafood-promotion-blue-background.jpg",
    alt: "Hải sản tươi sống - Giảm đến 30%",
    href: "#",
  },
  {
    image: "/banner1.png",
    alt: "Hải sản tươi sống - Giảm đến 30%",
    href: "#",
  },
];

const subDeals = [
  {
    image: "/banner2.png",
    alt: "Thịt nhập khẩu",
    href: "#",
  },
  {
    image: "/banner3.png",
    alt: "Rau củ đông lạnh",
    href: "#",
  },
  {
    image: "/banner1.png",
    alt: "Kem & Tráng miệng",
    href: "#",
  },
  {
    image: "/banner3.png",
    alt: "Đồ ăn chế biến sẵn",
    href: "#",
  },
];

export function DealBanners() {
  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-xs">🎁</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Ưu đãi hấp dẫn</h2>
      </div>

      {/* Top banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {deals.map((deal, index) => (
          <Link
            key={index}
            href={deal.href}
            className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={deal.alt}
              width={400}
              height={200}
              className="w-full h-32 md:h-40 object-cover"
            />
          </Link>
        ))}
      </div>

      {/* Bottom banners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subDeals.map((deal, index) => (
          <Link
            key={index}
            href={deal.href}
            className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={deal.alt}
              width={300}
              height={300}
              className="w-full aspect-square object-cover"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
