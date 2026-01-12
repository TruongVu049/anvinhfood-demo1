import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BannerSlider } from "@/components/banner-slider";
import { FlashSale } from "@/components/flash-sale";
import { CategoryIcons } from "@/components/category-icons";
import { QuickActions } from "@/components/quick-actions";
import { SeasonalDisease } from "@/components/seasonal-disease";
import { BestSellers } from "@/components/best-sellers";
import { DealBanners } from "@/components/deal-banners";
import { ProductCard } from "@/components/product-card";

const recentlyViewed = [
  {
    id: "rv1",
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    image: "/ximang.png",
    price: 95000,
    originalPrice: 110000,
    unit: "Bao",
    discount: 14,
    packaging: "50kg",
  },
  {
    id: "rv2",
    name: "Thép Pomina phi 10mm cuộn 50kg",
    image: "/thep.png",
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn",
    discount: 9,
    packaging: "50kg",
  },
  {
    id: "rv3",
    name: "Sơn Dulux nội thất cao cấp 18L",
    image: "/son.png",
    price: 1650000,
    originalPrice: 1850000,
    unit: "Thùng",
    discount: 11,
    packaging: "18L",
  },
  {
    id: "rv4",
    name: "Gạch ống Tuynel 4 lỗ loại A",
    image: "/gach.png",
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    packaging: "Viên",
  },
  {
    id: "rv5",
    name: "Gỗ xây dựng cao cấp",
    image: "/go.png",
    price: 165000,
    originalPrice: 195000,
    unit: "m²",
    discount: 15,
    packaging: "m²",
  },
  {
    id: "rv6",
    name: "Cát xây dựng loại 1 mịn",
    image: "/cat.png",
    price: 350000,
    originalPrice: 400000,
    unit: "Khối",
    discount: 12,
    packaging: "1m³",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Banner Section */}
        <BannerSlider />

        {/* Quick Actions */}
        <QuickActions />

        {/* Flash Sale */}
        <FlashSale />

        {/* Best Sellers */}
        <BestSellers />

        {/* Deal Banners */}
        <DealBanners />

        {/* Category Icons */}
        <CategoryIcons />

        {/* Seasonal Disease -> Meal Suggestions */}
        <SeasonalDisease />

        {/* Recently Viewed */}
        <section className="py-4 sm:py-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs">👁️</span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-gray-900">
              Sản phẩm vừa xem
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
