import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BannerSlider } from "@/components/banner-slider"
import { FlashSale } from "@/components/flash-sale"
import { CategoryIcons } from "@/components/category-icons"
import { BrandLogos } from "@/components/brand-logos"
import { HealthCheckBanner } from "@/components/health-check-banner"
import { QuickActions } from "@/components/quick-actions"
import { SeasonalDisease } from "@/components/seasonal-disease"
import { BestSellers } from "@/components/best-sellers"
import { DealBanners } from "@/components/deal-banners"
import { ProductCard } from "@/components/product-card"

const recentlyViewed = [
  {
    id: "rv1",
    name: "Thăn nội bò Úc đông lạnh Pacow cao cấp 500g",
    image: "/perfectly-seared-beef-tenderloin.png",
    price: 285000,
    unit: "Khay",
    discount: 22,
    packaging: "500g",
  },
  {
    id: "rv2",
    name: "Cá hồi Na Uy phi lê đông lạnh tươi ngon 500g",
    image: "/pan-seared-salmon.png",
    price: 320000,
    originalPrice: 410000,
    unit: "Khay",
    discount: 22,
    packaging: "500g",
  },
  {
    id: "rv3",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    image: "/tiger-shrimp.jpg",
    price: 450000,
    originalPrice: 520000,
    unit: "Hộp",
    discount: 15,
    packaging: "1kg",
  },
  {
    id: "rv4",
    name: "Pizza phô mai 4 vị đông lạnh 12 inch",
    image: "/frozen-pizza.png",
    price: 159000,
    originalPrice: 199000,
    unit: "Chiếc",
    discount: 20,
    packaging: "12 inch",
  },
  {
    id: "rv5",
    name: "Sò điệp Nhật Bản size L đông lạnh 500g",
    image: "/japanese-scallop.jpg",
    price: 380000,
    originalPrice: 450000,
    unit: "Hộp",
    discount: 15,
    packaging: "500g",
  },
  {
    id: "rv6",
    name: "Khoai tây McCain Shoestring chiên giòn 1kg",
    image: "/frozen-fries.jpg",
    price: 89000,
    originalPrice: 110000,
    unit: "Gói",
    discount: 19,
    packaging: "1kg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
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

        {/* Brand Logos */}
        <BrandLogos />

        {/* Health Check Banner */}
        <HealthCheckBanner />

        {/* Seasonal Disease -> Meal Suggestions */}
        <SeasonalDisease />

        {/* Recently Viewed */}
        <section className="py-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👁️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Sản phẩm vừa xem</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
