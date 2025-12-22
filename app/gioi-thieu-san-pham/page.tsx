"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  AlignHorizontalDistributeCenter,
  Award,
  BookText,
  Box,
  Clock12,
  Leaf,
  MoveRight,
  Shield,
  Soup,
  ThermometerSnowflake,
} from "lucide-react";
import { BrandPhilosophy } from "@/components/brand-philosophy";

// Quality Badges Data
const qualityBadges = [
  {
    icon: Shield,
    title: "HACCP",
    description: "Chứng nhận an toàn thực phẩm quốc tế",
  },
  {
    icon: Award,
    title: "ISO 22000",
    description: "Hệ thống quản lý an toàn thực phẩm",
  },
  {
    icon: ThermometerSnowflake,
    title: "Chuẩn -18°C",
    description: "Bảo quản lạnh đúng tiêu chuẩn",
  },
  {
    icon: Leaf,
    title: "100% Tự Nhiên",
    description: "Không chất bảo quản độc hại",
  },
];

// Timeline Data
const timelineItems = [
  {
    number: 1,
    title: "Tuyển Chọn Từ Nguồn Uy Tín",
    description:
      "Tôm được lựa chọn từ các vùng biển sạch, nuôi trồng theo tiêu chuẩn VietGAP. Chỉ những con tôm đạt kích thước chuẩn, tươi ngon mới được thu mua.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
  },
  {
    number: 2,
    title: "Sơ Chế & Phơi Khô Công Nghệ",
    description:
      "Tôm được làm sạch, loại bỏ tạp chất và phơi khô bằng công nghệ hiện đại, kiểm soát nhiệt độ và độ ẩm để giữ trọn dinh dưỡng và hương vị tự nhiên.",
    image: "/pan-seared-salmon.png",
  },
  {
    number: 3,
    title: "Đóng Gói & Bảo Quản Chuẩn",
    description:
      "Sản phẩm được đóng gói kín, bảo quản ở nhiệt độ tối ưu trong suốt quá trình vận chuyển và lưu trữ, đảm bảo chất lượng đến tay người tiêu dùng.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
  },
];

// Features Data
const features = [
  {
    icon: Shield,
    title: "Giữ Trọn Dinh Dưỡng",
    description:
      "Công nghệ phơi khô tiên tiến giúp bảo toàn protein, khoáng chất và hương vị tự nhiên của tôm",
  },
  {
    icon: Clock12,
    title: "Tiện Lợi Sẵn Dùng",
    description:
      "Không cần rửa nhiều lần, dễ bảo quản, sẵn sàng chế biến cho mọi món ăn từ cơm, bún đến canh",
  },
  {
    icon: Shield,
    title: "An Toàn Vệ Sinh",
    description:
      "Quy trình sản xuất khép kín, kiểm soát chất lượng nghiêm ngặt, đạt chuẩn HACCP và ISO 22000",
  },
  {
    icon: Box,
    title: "Bảo Quản Lâu Dài",
    description:
      "Có thể bảo quản đến 12 tháng trong điều kiện thích hợp, không lo lãng phí thực phẩm",
  },
  {
    icon: Soup,
    title: "Hương Vị Đậm Đà",
    description:
      "Giữ nguyên vị ngọt tự nhiên của tôm biển, tạo nên món ăn thơm ngon, hấp dẫn",
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: "Chất Lượng Ổn Định",
    description:
      "Mỗi lô sản xuất đều được kiểm định kỹ lưỡng, đảm bảo chất lượng đồng nhất",
  },
];

// Audience Data
const audienceData = [
  {
    icon: "👨‍👩‍👧",
    title: "Gia Đình Bận Rộn",
    description: "Tiện lợi - nhanh gọn - an tâm cho mỗi bữa ăn gia đình",
  },
  {
    icon: "👩‍🍳",
    title: "Bếp Ăn & Nhà Hàng",
    description: "Chất lượng ổn định - dễ kiểm soát - tối ưu chi phí vận hành",
  },
  {
    icon: "🧑‍💼",
    title: "Người Tiêu Dùng Thông Thái",
    description: "Ăn ngon - ăn sạch - không đánh đổi chất lượng",
  },
];

// Trust Items
const trustItems = [
  { title: "Kiểm Soát Chất Lượng" },
  { title: "An Toàn Thực Phẩm" },
  { title: "Chuỗi Lạnh Khép Kín" },
];

// Fade In Component
const FadeInElement = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-600 h-full${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function BaiVietPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />
      <div className="font-sans leading-relaxed text-[#1a1a1a] overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-[#f8f9fa] to-white  overflow-hidden"
        >
          {/* Background Shape */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] z-0 hidden lg:block"
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          />

          <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center relative z-[1]">
            {/* Hero Content */}
            <div className="animate-slideInLeft relative z-[1] text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-[#1a1a1a] mb-6 leading-tight font-extrabold">
                Tôm Khô
                <br />
                An Vĩnh
              </h1>
              <p className="text-xl md:text-[1.3rem] text-[#1a56db] mb-4 font-semibold">
                Giữ trọn hương vị biển cả trong từng sợi tôm
              </p>
              <p className="text-base md:text-lg text-[#666] mb-10 leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                Được tuyển chọn từ những con tôm tươi ngon nhất, qua quy trình
                phơi khô và bảo quản hiện đại, tôm khô An Vĩnh Food mang đến
                hương vị đậm đà tự nhiên, an toàn và tiện lợi cho mọi món ăn.
              </p>
              <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("features")}
                  className="px-10 py-4 rounded-full font-semibold text-lg bg-[#1a56db] text-white shadow-[0_4px_15px_rgba(33,150,243,0.3)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(33,150,243,0.4)] hover:bg-[#1976D2] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer border-none"
                >
                  Khám phá ngay
                  <MoveRight />
                </button>
                <button className="px-10 py-4 rounded-full font-semibold text-lg bg-white text-[#1a56db] border-2 border-[#1a56db] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-[#1a56db] hover:text-white hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
                  <Link href={"/san-pham/2"}>Mua ngay</Link>
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slideInRight relative z-[1]">
              <div className="relative">
                <div className="w-full max-w-[500px] mx-auto rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-floatProduct overflow-hidden aspect-square bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center">
                  <Image
                    src="/product.png"
                    alt="Product Image"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Badges */}
        <section className="bg-white pt-20 border-b border-[#e0e0e0]">
          <div className="max-w-[1400px] mx-auto items-stretch px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {qualityBadges.map((badge, index) => (
              <FadeInElement key={badge.title} delay={index * 100}>
                <div className="text-center h-full p-10 rounded-[15px] bg-white border-2 border-[#f0f0f0] transition-all duration-300 cursor-pointer hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(33,150,243,0.15)] hover:border-[#1a56db] group">
                  {/* <div className="text-5xl mb-4 inline-block transition-transform duration-300 group-hover:scale-110">
                    <badge.icon className="h-8 w-8 text-navy" />
                  </div> */}
                  <div className="w-16 h-16 rounded-full bg-[#1a56db] text-white flex items-center justify-center mx-auto mb-4">
                    <badge.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-[#1a1a1a] mb-2 text-xl font-bold">
                    {badge.title}
                  </h3>
                  <p className="text-[#666] text-base leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </FadeInElement>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="pt-24 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-[#1a56db] font-semibold tracking-[2px] uppercase text-sm mb-4">
                HÀNH TRÌNH CHẤT LƯỢNG
              </span>
              <h2 className="text-3xl md:text-[2.5rem] text-[#1a1a1a] mb-4 font-extrabold">
                Từ Biển Cả Đến Bàn Ăn
              </h2>
              <p className="text-lg md:text-xl text-[#666] max-w-[700px] mx-auto">
                Mỗi sản phẩm tôm khô đều trải qua hành trình nghiêm ngặt để đảm
                bảo chất lượng tốt nhất
              </p>
            </div>

            {/* Timeline */}
            <div className="relative py-8">
              {timelineItems.map((item, index) => (
                <FadeInElement
                  key={item.number}
                  delay={index * 200}
                  className="mb-20 last:mb-0"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 ${
                      index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {index % 2 === 1 ? (
                      <>
                        {/* Content First for Even Items on Desktop */}
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                          <div className="inline-flex w-[50px] h-[50px] bg-[#1a56db] text-white rounded-full items-center justify-center text-2xl font-bold mb-6">
                            {item.number}
                          </div>
                          <h3 className="text-2xl md:text-[1.8rem] text-[#1a1a1a] mb-4 font-bold">
                            {item.title}
                          </h3>
                          <p className="text-base md:text-lg text-[#666] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        {/* Image Second */}
                        <div className="rounded-[15px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] order-1 lg:order-2 group">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Image First for Odd Items */}
                        <div className="rounded-[15px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] group">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                          />
                        </div>
                        {/* Content Second */}
                        <div className="flex flex-col justify-center">
                          <div className="inline-flex w-[50px] h-[50px] bg-[#1a56db] text-white rounded-full items-center justify-center text-2xl font-bold mb-6">
                            {item.number}
                          </div>
                          <h3 className="text-2xl md:text-[1.8rem] text-[#1a1a1a] mb-4 font-bold">
                            {item.title}
                          </h3>
                          <p className="text-base md:text-lg text-[#666] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>

        {/* Product Detail Section - Tôm Khô */}
        <section id="product-detail" className="py-24 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[2.5rem] text-[#1a1a1a] mb-4 font-extrabold">
                Tôm Khô An Vĩnh - Đặc Sản Biển Việt Nam
              </h2>
              <p className="text-lg md:text-xl text-[#666] max-w-[800px] mx-auto">
                Được chế biến từ nguồn tôm tươi thiên nhiên, mang đến hương vị
                thơm ngon đậm đà
              </p>
            </div>

            {/* Product Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
              {/* Product Image */}
              <FadeInElement delay={100}>
                <div className="relative">
                  <div className="rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]">
                    <Image
                      src="/product.png"
                      alt="Tôm Khô An Vĩnh"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain p-8"
                    />
                  </div>
                </div>
              </FadeInElement>

              {/* Product Description */}
              <FadeInElement delay={200}>
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-[15px] border-l-4 border-[#1a56db] shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                      Đặc Sản Biển Việt Nam
                    </h3>
                    <p className="text-[#666] leading-relaxed text-lg">
                      Tôm khô là một đặc sản ngon và bổ dưỡng của nhiều vùng
                      biển ở Việt Nam. Tôm khô tại Công ty An Vĩnh được chế biến
                      từ các nguồn tôm tươi thiên nhiên trải qua các giai đoạn
                      làm sạch, phơi/sấy cho ra những con tôm có màu đỏ tươi,
                      hương vị thơm ngon.
                    </p>
                  </div>
                </div>
              </FadeInElement>
            </div>

            {/* Product Specifications */}
            <FadeInElement delay={400}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Info Card */}
                <div className="bg-white rounded-[20px] p-4 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1a56db] rounded-full flex items-center justify-center">
                      <BookText className="text-white" />
                    </div>
                    Thông Tin Sản Phẩm
                  </h3>

                  <div className="space-y-4">
                    <div className="flex flex-wrap md:flex-nowrap items-start gap-4 p-4 bg-[#fafafa] rounded-[10px]">
                      <span className="text-[#1a56db] font-bold min-w-[140px]">
                        Thành phần:
                      </span>
                      <span className="text-[#1a1a1a]">Tôm 96%, muối 4%</span>
                    </div>

                    <div className="flex  flex-wrap md:flex-nowrap items-start gap-4 p-4 bg-[#E3F2FD] rounded-[10px]">
                      <span className="text-[#1a56db] font-bold min-w-[140px]">
                        Cam kết:
                      </span>
                      <span className="text-[#1a1a1a] font-medium">
                        Không sử dụng chất tạo màu, chất bảo quản
                      </span>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap items-start gap-4 p-4 bg-[#fafafa] rounded-[10px]">
                      <span className="text-[#1a56db] font-bold min-w-[140px]">
                        Kích cỡ S:
                      </span>
                      <span className="text-[#1a1a1a]">2000-3000 con/kg</span>
                    </div>

                    <div className="flex  flex-wrap md:flex-nowrap items-start gap-4 p-4 bg-[#fafafa] rounded-[10px]">
                      <span className="text-[#1a56db] font-bold min-w-[140px]">
                        Khối lượng:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {["100g", "200g", "400g"].map((weight) => (
                          <span
                            key={weight}
                            className=" text-black py-1 rounded-full text-sm font-medium"
                          >
                            {weight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Storage Guide Card */}
                <div className="rounded-[20px] p-4 md:p-8 text-[#1a1a1a] shadow-[0_10px_40px_rgba(26,86,219,0.3)]">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1a56db] rounded-full flex items-center justify-center">
                      <ThermometerSnowflake className="w-6 h-6 text-white" />
                    </div>
                    Hướng Dẫn Bảo Quản
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Nhiệt độ bảo quản
                        </h4>
                        <p className="opacity-90">
                          Bảo quản ở nhiệt độ từ 0-5°C
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Khi đã mở nắp
                        </h4>
                        <p className="opacity-90">
                          Đậy kín nắp hộp sản phẩm và trữ trong ngăn mát tủ lạnh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Sử dụng tốt nhất
                        </h4>
                        <p className="opacity-90">
                          Sử dụng trong thời gian ngắn sau khi mở để đảm bảo
                          chất lượng tốt nhất
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white/10 rounded-[10px] border border-white/20">
                    <p className="text-sm opacity-90 italic">
                      💡 Mẹo: Để tôm khô ngon hơn, ngâm nước ấm 5-10 phút trước
                      khi chế biến
                    </p>
                  </div>
                </div>
              </div>
            </FadeInElement>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="pt-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-[#1a56db] font-semibold tracking-[2px] uppercase text-sm mb-4">
                VÌ SAO CHỌN CHÚNG TÔI
              </span>
              <h2 className="text-3xl md:text-[2.5rem] text-[#1a1a1a] font-extrabold">
                Tôm Khô An Vĩnh - Lựa Chọn Thông Minh
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12">
              {features.map((feature, index) => (
                <FadeInElement key={feature.title} delay={index * 100}>
                  <div className="p-10 bg-white border-2 border-[#f0f0f0] rounded-[15px] text-center transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[#1a56db] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:translate-y-[-5px] hover:shadow-[0_15px_40px_rgba(33,150,243,0.15)] hover:border-[#1a56db] group">
                    <div className="w-16 h-16 rounded-full bg-[#1a56db] text-white flex items-center justify-center mx-auto mb-4">
                      <feature.icon />
                    </div>
                    <h3 className="text-[#1a1a1a] mb-4 text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-[#666] leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-[#1a56db] font-semibold tracking-[2px] uppercase text-sm mb-4">
                DÀNH CHO MỌI GIA ĐÌNH
              </span>
              <h2 className="text-3xl md:text-[2.5rem] text-[#1a1a1a] font-extrabold">
                An Vĩnh Food Đồng Hành Cùng Bạn
              </h2>
            </div>

            {/* Audience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-3 gap-6 md:gap-12 mt-12">
              {audienceData.map((audience, index) => (
                <FadeInElement key={audience.title} delay={index * 100}>
                  <div className="bg-[#fafafa] h-full p-12 rounded-[15px] text-center border-2 border-[#f0f0f0] transition-all duration-300 hover:bg-white hover:translate-y-[-5px] hover:border-[#1a56db] hover:shadow-[0_10px_30px_rgba(33,150,243,0.15)] group">
                    <h3 className="text-xl md:text-2xl mb-4 text-[#1a1a1a] font-bold">
                      {audience.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#666] leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </FadeInElement>
              ))}
            </div>
          </div>
        </section>
        <BrandPhilosophy />

        {/* Custom Keyframes Styles */}
        <style jsx global>{`
          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-80px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(80px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes floatProduct {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-slideInRight {
            animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              0.2s forwards;
            opacity: 0;
          }

          .animate-floatProduct {
            animation: floatProduct 4s ease-in-out infinite;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}
