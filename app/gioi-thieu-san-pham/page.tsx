"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Award,
  Box,
  Clock12,
  MoveRight,
  Shield,
  Truck,
  Wrench,
  Building2,
  CheckCircle,
} from "lucide-react";

const qualityBadges = [
  { icon: Shield, title: "ISO 9001", description: "Chứng nhận hệ thống quản lý chất lượng" },
  { icon: Award, title: "ISO 14001", description: "Tiêu chuẩn quản lý môi trường" },
  { icon: CheckCircle, title: "TCVN", description: "Đạt tiêu chuẩn Việt Nam" },
  { icon: Building2, title: "Chính Hãng", description: "100% nguồn gốc rõ ràng" },
];

const timelineItems = [
  { number: 1, title: "Nhập Khẩu & Sản Xuất Chính Hãng", description: "Vật liệu được nhập khẩu từ các nhà máy uy tín hoặc sản xuất trong nước theo tiêu chuẩn quốc tế.", image: "/ximang.png" },
  { number: 2, title: "Kiểm Tra & Phân Loại", description: "Tất cả sản phẩm được kiểm tra kỹ lưỡng về chất lượng, kích thước và độ bền trước khi nhập kho.", image: "/kiểm tra và phân loại.png" },
  { number: 3, title: "Lưu Kho & Giao Hàng", description: "Hệ thống kho bãi rộng rãi, đội ngũ vận chuyển chuyên nghiệp giao hàng tận công trình.", image: "/lưu kho và giao hàng.png" },
];

const features = [
  { icon: Shield, title: "Chất Lượng Đảm Bảo", description: "Tất cả sản phẩm đều có chứng nhận chất lượng, nguồn gốc xuất xứ rõ ràng" },
  { icon: Clock12, title: "Giao Hàng Nhanh Chóng", description: "Giao hàng tận công trình trong vòng 24h, hỗ trợ bốc dỡ chuyên nghiệp" },
  { icon: Wrench, title: "Tư Vấn Kỹ Thuật", description: "Đội ngũ kỹ sư giàu kinh nghiệm tư vấn lựa chọn vật liệu phù hợp" },
  { icon: Box, title: "Đa Dạng Sản Phẩm", description: "Cung cấp đầy đủ các loại vật liệu xây dựng từ xi măng, thép, gạch đến sơn" },
  { icon: Truck, title: "Miễn Phí Vận Chuyển", description: "Miễn phí giao hàng cho đơn từ 5 triệu đồng trong bán kính 30km" },
  { icon: Award, title: "Giá Cả Cạnh Tranh", description: "Cam kết giá tốt nhất thị trường, chiết khấu cao cho khách hàng sỉ" },
];

const audienceData = [
  { icon: "🏠", title: "Hộ Gia Đình", description: "Xây nhà - sửa chữa - cải tạo với vật liệu chất lượng" },
  { icon: "🏗️", title: "Nhà Thầu Xây Dựng", description: "Cung cấp số lượng lớn - chiết khấu cao - giao hàng đúng tiến độ" },
  { icon: "🏢", title: "Dự Án & Công Trình", description: "Đối tác tin cậy cho các dự án lớn với nguồn hàng ổn định" },
];


const FadeInElement = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay);
      });
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={elementRef} className={`transition-all duration-600 h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"} ${className}`}>
      {children}
    </div>
  );
};

export default function GioiThieuSanPhamPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />
      <div className="font-sans leading-relaxed text-[#1a1a1a] overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-[#f8f9fa] to-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] z-0 hidden lg:block" style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-[1]">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] mb-6 leading-tight font-extrabold">
                Vật Liệu<br /><span className="text-[#1a56db]">Xây Dựng</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#1a56db] mb-4 font-semibold">Nền móng vững chắc cho mọi công trình</p>
              <p className="text-sm sm:text-base text-[#666] mb-10 leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                Chúng tôi cung cấp đầy đủ các loại vật liệu xây dựng chính hãng từ xi măng, thép, gạch đến sơn và thiết bị. Cam kết chất lượng tốt nhất, giá cả cạnh tranh.
              </p>
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                <button onClick={() => scrollToSection("features")} className="px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold bg-[#1a56db] text-white hover:bg-[#1976D2] transition-all inline-flex items-center gap-2">
                  Khám phá ngay <MoveRight className="w-5 h-5" />
                </button>
                <Link href="/" className="px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold bg-white text-[#1a56db] border-2 border-[#1a56db] hover:bg-[#1a56db] hover:text-white transition-all">
                  Xem sản phẩm
                </Link>
              </div>
            </div>
            <div className="relative z-[1]">
              <div className="w-full max-w-[500px] mx-auto rounded-[20px] shadow-lg overflow-hidden aspect-square bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center p-8">
                <Image src="/ximang.png" alt="Vật liệu xây dựng" width={400} height={400} className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Badges */}
        <section className="bg-white pt-12 sm:pt-20 border-b border-[#e0e0e0]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {qualityBadges.map((badge, index) => (
              <FadeInElement key={badge.title} delay={index * 100}>
                <div className="text-center h-full p-4 sm:p-10 rounded-[15px] bg-white border-2 border-[#f0f0f0] hover:border-[#1a56db] hover:shadow-lg transition-all">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1a56db] text-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <badge.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-[#1a1a1a] mb-1 sm:mb-2 text-base sm:text-xl font-bold">{badge.title}</h3>
                  <p className="text-[#666] text-xs sm:text-base">{badge.description}</p>
                </div>
              </FadeInElement>
            ))}
          </div>
        </section>


        {/* Story Section */}
        <section className="pt-16 sm:pt-24 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-[#1a56db] font-semibold tracking-[2px] uppercase text-xs sm:text-sm mb-4">QUY TRÌNH CUNG ỨNG</span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] text-[#1a1a1a] mb-4 font-extrabold">Từ Nhà Máy Đến Công Trình</h2>
              <p className="text-base sm:text-lg text-[#666] max-w-[700px] mx-auto">Quy trình khép kín đảm bảo chất lượng vật liệu từ nguồn đến tay khách hàng</p>
            </div>
            <div className="relative py-8">
              {timelineItems.map((item, index) => (
                <FadeInElement key={item.number} delay={index * 200} className="mb-12 sm:mb-20 last:mb-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                    {index % 2 === 1 ? (
                      <>
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                          <div className="inline-flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#1a56db] text-white rounded-full items-center justify-center text-xl font-bold mb-4">{item.number}</div>
                          <h3 className="text-xl sm:text-2xl text-[#1a1a1a] mb-3 font-bold">{item.title}</h3>
                          <p className="text-sm sm:text-base text-[#666] leading-relaxed">{item.description}</p>
                        </div>
                        <div className="rounded-[15px] overflow-hidden shadow-lg h-[200px] sm:h-[300px] lg:h-[400px] order-1 lg:order-2 bg-gray-100 flex items-center justify-center p-8">
                          <Image src={item.image} alt={item.title} width={300} height={300} className="w-auto h-full object-contain" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="rounded-[15px] overflow-hidden shadow-lg h-[200px] sm:h-[300px] lg:h-[400px] bg-gray-100 flex items-center justify-center p-8">
                          <Image src={item.image} alt={item.title} width={300} height={300} className="w-auto h-full object-contain" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="inline-flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#1a56db] text-white rounded-full items-center justify-center text-xl font-bold mb-4">{item.number}</div>
                          <h3 className="text-xl sm:text-2xl text-[#1a1a1a] mb-3 font-bold">{item.title}</h3>
                          <p className="text-sm sm:text-base text-[#666] leading-relaxed">{item.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 sm:py-24 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] text-[#1a1a1a] mb-4 font-extrabold">Danh Mục Sản Phẩm Chính</h2>
              <p className="text-base sm:text-lg text-[#666] max-w-[800px] mx-auto">Cung cấp đầy đủ vật liệu cho mọi giai đoạn xây dựng</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: "Xi Măng", image: "/ximang.png", count: "25+ sản phẩm" },
                { name: "Thép Xây Dựng", image: "/thep.png", count: "42+ sản phẩm" },
                { name: "Gạch - Ngói", image: "/gach.png", count: "38+ sản phẩm" },
                { name: "Sơn Nước", image: "/son.png", count: "56+ sản phẩm" },
                { name: "Cát - Đá", image: "/cat.png", count: "20+ sản phẩm" },
                { name: "Gỗ Xây Dựng", image: "/go.png", count: "32+ sản phẩm" },
              ].map((product, index) => (
                <FadeInElement key={product.name} delay={index * 100}>
                  <Link href="/" className="block">
                    <div className="bg-white rounded-xl p-4 sm:p-6 text-center border-2 border-gray-100 hover:border-[#1a56db] hover:shadow-lg transition-all group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 bg-gray-50 rounded-full flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                        <Image src={product.image} alt={product.name} width={60} height={60} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{product.count}</p>
                    </div>
                  </Link>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="pt-16 sm:pt-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-[#1a56db] font-semibold tracking-[2px] uppercase text-xs sm:text-sm mb-4">VÌ SAO CHỌN CHÚNG TÔI</span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] text-[#1a1a1a] font-extrabold">Đối Tác Tin Cậy Cho Mọi Công Trình</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-12 mt-8">
              {features.map((feature, index) => (
                <FadeInElement key={feature.title} delay={index * 100}>
                  <div className="p-6 sm:p-10 bg-white border-2 border-[#f0f0f0] rounded-[15px] text-center hover:border-[#1a56db] hover:shadow-lg transition-all">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1a56db] text-white flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-[#1a1a1a] mb-3 text-lg sm:text-xl font-bold">{feature.title}</h3>
                    <p className="text-[#666] text-sm sm:text-base">{feature.description}</p>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block text-[#1a56db] font-semibold tracking-[2px] uppercase text-xs sm:text-sm mb-4">KHÁCH HÀNG CỦA CHÚNG TÔI</span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] text-[#1a1a1a] font-extrabold">Phục Vụ Mọi Nhu Cầu Xây Dựng</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12 mt-8">
              {audienceData.map((audience, index) => (
                <FadeInElement key={audience.title} delay={index * 100}>
                  <div className="bg-[#fafafa] h-full p-8 sm:p-12 rounded-[15px] text-center border-2 border-[#f0f0f0] hover:bg-white hover:border-[#1a56db] hover:shadow-lg transition-all">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{audience.icon}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl mb-3 text-[#1a1a1a] font-bold">{audience.title}</h3>
                    <p className="text-sm sm:text-base text-[#666]">{audience.description}</p>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-[#1a56db]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4 sm:mb-6">Sẵn Sàng Cho Dự Án Của Bạn?</h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-[600px] mx-auto">Liên hệ ngay để được tư vấn và báo giá tốt nhất cho công trình của bạn</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1a56db] rounded-full font-semibold hover:bg-gray-100 transition-colors">Xem Sản Phẩm</Link>
              <Link href="tel:+842841099879" className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#1a56db] transition-colors">Gọi Ngay: (+84) 284 109 9879</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
