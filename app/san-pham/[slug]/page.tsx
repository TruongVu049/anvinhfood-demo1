"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Star } from "lucide-react";
import Link from "next/link";

// Database sản phẩm
const productsData: Record<string, any> = {
  // Xi măng
  "rv1": {
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    images: ["/ximang.png", "/ximang2.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
    price: 95000,
    originalPrice: 110000,
    unit: "Bao 50kg",
    discount: 14,
    code: "MEU-XM-001",
    category: "Xi măng - Vữa",
    brand: "Hà Tiên",
    description: "Xi măng Hà Tiên PCB40 là sản phẩm xi măng Portland hỗn hợp đạt tiêu chuẩn TCVN 2682:2020.",
  },
  "bs1": {
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    images: ["/ximang.png", "/ximang2.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
    price: 95000,
    originalPrice: 110000,
    unit: "Bao 50kg",
    discount: 14,
    code: "MEU-XM-001",
    category: "Xi măng - Vữa",
    brand: "Hà Tiên",
    description: "Xi măng Hà Tiên PCB40 là sản phẩm xi măng Portland hỗn hợp đạt tiêu chuẩn TCVN 2682:2020.",
  },
  "ct1": {
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    images: ["/ximang.png", "/ximang2.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
    price: 95000,
    originalPrice: 110000,
    unit: "Bao 50kg",
    discount: 14,
    code: "MEU-XM-001",
    category: "Xi măng - Vữa",
    brand: "Hà Tiên",
    description: "Xi măng Hà Tiên PCB40 là sản phẩm xi măng Portland hỗn hợp đạt tiêu chuẩn TCVN 2682:2020.",
  },
  "s1": {
    name: "Xi măng Hà Tiên PCB40 bao 50kg",
    images: ["/ximang.png", "/ximang2.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
    price: 95000,
    originalPrice: 110000,
    unit: "Bao 50kg",
    discount: 14,
    code: "MEU-XM-001",
    category: "Xi măng - Vữa",
    brand: "Hà Tiên",
    description: "Xi măng Hà Tiên PCB40 là sản phẩm xi măng Portland hỗn hợp đạt tiêu chuẩn TCVN 2682:2020.",
  },
  "1": {
    name: "Xi măng Holcim PCB40 bao 50kg",
    images: ["/ximang2.png", "/ximang.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
    price: 85000,
    originalPrice: 105000,
    unit: "Bao 50kg",
    discount: 19,
    code: "MEU-XM-002",
    category: "Xi măng - Vữa",
    brand: "Holcim",
    description: "Xi măng Holcim PCB40 chất lượng cao, đóng rắn nhanh.",
  },
  "s8": {
    name: "Xi măng Holcim PCB40 50kg",
    images: ["/ximang2.png", "/ximang.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
    price: 98000,
    originalPrice: 115000,
    unit: "Bao 50kg",
    discount: 15,
    code: "MEU-XM-002",
    category: "Xi măng - Vữa",
    brand: "Holcim",
    description: "Xi măng Holcim PCB40 chất lượng cao, đóng rắn nhanh.",
  },
  // Thép
  "rv2": {
    name: "Thép Pomina phi 10mm cuộn 50kg",
    images: ["/thep.png", "/thep2.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn 50kg",
    discount: 9,
    code: "MEU-TH-001",
    category: "Thép xây dựng",
    brand: "Pomina",
    description: "Thép Pomina phi 10mm chất lượng cao, độ bền vượt trội cho công trình.",
  },
  "bs2": {
    name: "Thép Pomina phi 10mm cuộn 50kg",
    images: ["/thep.png", "/thep2.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn 50kg",
    discount: 9,
    code: "MEU-TH-001",
    category: "Thép xây dựng",
    brand: "Pomina",
    description: "Thép Pomina phi 10mm chất lượng cao, độ bền vượt trội cho công trình.",
  },
  "ct2": {
    name: "Thép Pomina phi 10mm cuộn 50kg",
    images: ["/thep.png", "/thep2.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn 50kg",
    discount: 9,
    code: "MEU-TH-001",
    category: "Thép xây dựng",
    brand: "Pomina",
    description: "Thép Pomina phi 10mm chất lượng cao, độ bền vượt trội cho công trình.",
  },
  "rp1": {
    name: "Thép Pomina phi 10mm cuộn 50kg",
    images: ["/thep.png", "/thep2.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn 50kg",
    discount: 9,
    code: "MEU-TH-001",
    category: "Thép xây dựng",
    brand: "Pomina",
    description: "Thép Pomina phi 10mm chất lượng cao, độ bền vượt trội cho công trình.",
  },
  "s2": {
    name: "Thép Pomina phi 10mm cuộn 50kg",
    images: ["/thep.png", "/thep2.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 890000,
    originalPrice: 980000,
    unit: "Cuộn 50kg",
    discount: 9,
    code: "MEU-TH-001",
    category: "Thép xây dựng",
    brand: "Pomina",
    description: "Thép Pomina phi 10mm chất lượng cao, độ bền vượt trội cho công trình.",
  },
  "2": {
    name: "Thép Việt Nhật phi 12mm cuộn",
    images: ["/thep2.png", "/thep.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 780000,
    originalPrice: 920000,
    unit: "Cuộn 50kg",
    discount: 15,
    code: "MEU-TH-002",
    category: "Thép xây dựng",
    brand: "Việt Nhật",
    description: "Thép Việt Nhật phi 12mm chất lượng Nhật Bản.",
  },
  "s9": {
    name: "Thép Việt Nhật phi 12mm",
    images: ["/thep2.png", "/thep.png", "/thep3.png", "/thep4.png", "/thep5.png"],
    price: 950000,
    originalPrice: 1100000,
    unit: "Cuộn 50kg",
    discount: 14,
    code: "MEU-TH-002",
    category: "Thép xây dựng",
    brand: "Việt Nhật",
    description: "Thép Việt Nhật phi 12mm chất lượng Nhật Bản.",
  },

  // Sơn
  "rv3": {
    name: "Sơn Dulux nội thất cao cấp 18L",
    images: ["/son.png", "/son2.png", "/son3.png", "/son4.png", "/son5.png"],
    price: 1650000,
    originalPrice: 1850000,
    unit: "Thùng 18L",
    discount: 11,
    code: "MEU-SN-001",
    category: "Sơn - Chống thấm",
    brand: "Dulux",
    description: "Sơn Dulux nội thất cao cấp, màu sắc bền đẹp, dễ lau chùi.",
  },
  "bs4": {
    name: "Sơn Dulux nội thất cao cấp 18L",
    images: ["/son.png", "/son2.png", "/son3.png", "/son4.png", "/son5.png"],
    price: 1650000,
    originalPrice: 1850000,
    unit: "Thùng 18L",
    discount: 11,
    code: "MEU-SN-001",
    category: "Sơn - Chống thấm",
    brand: "Dulux",
    description: "Sơn Dulux nội thất cao cấp, màu sắc bền đẹp, dễ lau chùi.",
  },
  "rp2": {
    name: "Sơn Dulux nội thất cao cấp 18L",
    images: ["/son.png", "/son2.png", "/son3.png", "/son4.png", "/son5.png"],
    price: 1650000,
    originalPrice: 1850000,
    unit: "Thùng 18L",
    discount: 11,
    code: "MEU-SN-001",
    category: "Sơn - Chống thấm",
    brand: "Dulux",
    description: "Sơn Dulux nội thất cao cấp, màu sắc bền đẹp, dễ lau chùi.",
  },
  "s4": {
    name: "Sơn Dulux nội thất cao cấp 18L",
    images: ["/son.png", "/son2.png", "/son3.png", "/son4.png", "/son5.png"],
    price: 1650000,
    originalPrice: 1850000,
    unit: "Thùng 18L",
    discount: 11,
    code: "MEU-SN-001",
    category: "Sơn - Chống thấm",
    brand: "Dulux",
    description: "Sơn Dulux nội thất cao cấp, màu sắc bền đẹp, dễ lau chùi.",
  },
  "3": {
    name: "Sơn Jotun Essence nội thất 5L",
    images: ["/son2.png", "/son.png", "/son3.png", "/son4.png", "/son5.png"],
    price: 485000,
    originalPrice: 595000,
    unit: "Thùng 5L",
    discount: 18,
    code: "MEU-SN-002",
    category: "Sơn - Chống thấm",
    brand: "Jotun",
    description: "Sơn Jotun Essence nội thất cao cấp từ Na Uy.",
  },
  "s11": {
    name: "Sơn Jotun Essence 5L",
    images: ["/son2.png", "/son.png", "/son3.png", "/son4.png", "/son5.png"],
    price: 485000,
    originalPrice: 580000,
    unit: "Thùng 5L",
    discount: 16,
    code: "MEU-SN-002",
    category: "Sơn - Chống thấm",
    brand: "Jotun",
    description: "Sơn Jotun Essence nội thất cao cấp từ Na Uy.",
  },
  // Gạch
  "rv4": {
    name: "Gạch ống Tuynel 4 lỗ loại A",
    images: ["/gach.png", "/gach2.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    code: "MEU-GC-001",
    category: "Gạch - Ngói",
    brand: "Tuynel",
    description: "Gạch ống Tuynel 4 lỗ loại A, chất lượng cao cho xây tường.",
  },
  "bs3": {
    name: "Gạch ống Tuynel 4 lỗ loại A",
    images: ["/gach.png", "/gach2.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    code: "MEU-GC-001",
    category: "Gạch - Ngói",
    brand: "Tuynel",
    description: "Gạch ống Tuynel 4 lỗ loại A, chất lượng cao cho xây tường.",
  },
  "ct3": {
    name: "Gạch ống Tuynel 4 lỗ loại A",
    images: ["/gach.png", "/gach2.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    code: "MEU-GC-001",
    category: "Gạch - Ngói",
    brand: "Tuynel",
    description: "Gạch ống Tuynel 4 lỗ loại A, chất lượng cao cho xây tường.",
  },
  "rp3": {
    name: "Gạch ống Tuynel 4 lỗ loại A",
    images: ["/gach.png", "/gach2.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    code: "MEU-GC-001",
    category: "Gạch - Ngói",
    brand: "Tuynel",
    description: "Gạch ống Tuynel 4 lỗ loại A, chất lượng cao cho xây tường.",
  },
  "s3": {
    name: "Gạch ống Tuynel 4 lỗ loại A",
    images: ["/gach.png", "/gach2.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 1800,
    originalPrice: 2200,
    unit: "Viên",
    discount: 18,
    code: "MEU-GC-001",
    category: "Gạch - Ngói",
    brand: "Tuynel",
    description: "Gạch ống Tuynel 4 lỗ loại A, chất lượng cao cho xây tường.",
  },
  "4": {
    name: "Gạch men 60x60 cao cấp",
    images: ["/gach2.png", "/gach.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 165000,
    originalPrice: 212000,
    unit: "m²",
    discount: 22,
    code: "MEU-GC-002",
    category: "Gạch - Ngói",
    brand: "Viglacera",
    description: "Gạch men 60x60 cao cấp bóng kiếng, sang trọng.",
  },
  "s10": {
    name: "Gạch block xây dựng",
    images: ["/gach2.png", "/gach.png", "/gach3.png", "/gach4.png", "/gach5.png"],
    price: 3500,
    originalPrice: 4200,
    unit: "Viên",
    discount: 17,
    code: "MEU-GC-003",
    category: "Gạch - Ngói",
    brand: "Block",
    description: "Gạch block xây dựng chất lượng cao.",
  },

  // Cát
  "rv6": {
    name: "Cát xây dựng loại 1 mịn",
    images: ["/cat.png", "/cat2.png", "/cat3.png", "/cat4.png", "/cat5.png"],
    price: 350000,
    originalPrice: 400000,
    unit: "Khối (1m³)",
    discount: 12,
    code: "MEU-CT-001",
    category: "Cát - Đá - Sỏi",
    brand: "Cát sông",
    description: "Cát xây dựng loại 1 mịn, sạch, phù hợp cho xây trát.",
  },
  "bs5": {
    name: "Cát xây dựng loại 1 mịn",
    images: ["/cat.png", "/cat2.png", "/cat3.png", "/cat4.png", "/cat5.png"],
    price: 350000,
    originalPrice: 400000,
    unit: "Khối (1m³)",
    discount: 12,
    code: "MEU-CT-001",
    category: "Cát - Đá - Sỏi",
    brand: "Cát sông",
    description: "Cát xây dựng loại 1 mịn, sạch, phù hợp cho xây trát.",
  },
  "ct4": {
    name: "Cát xây dựng loại 1 mịn",
    images: ["/cat.png", "/cat2.png", "/cat3.png", "/cat4.png", "/cat5.png"],
    price: 350000,
    originalPrice: 400000,
    unit: "Khối (1m³)",
    discount: 12,
    code: "MEU-CT-001",
    category: "Cát - Đá - Sỏi",
    brand: "Cát sông",
    description: "Cát xây dựng loại 1 mịn, sạch, phù hợp cho xây trát.",
  },
  "rp5": {
    name: "Cát xây dựng loại 1 mịn",
    images: ["/cat.png", "/cat2.png", "/cat3.png", "/cat4.png", "/cat5.png"],
    price: 350000,
    originalPrice: 400000,
    unit: "Khối (1m³)",
    discount: 12,
    code: "MEU-CT-001",
    category: "Cát - Đá - Sỏi",
    brand: "Cát sông",
    description: "Cát xây dựng loại 1 mịn, sạch, phù hợp cho xây trát.",
  },
  "s5": {
    name: "Cát xây dựng loại 1 mịn",
    images: ["/cat.png", "/cat2.png", "/cat3.png", "/cat4.png", "/cat5.png"],
    price: 350000,
    originalPrice: 400000,
    unit: "Khối (1m³)",
    discount: 12,
    code: "MEU-CT-001",
    category: "Cát - Đá - Sỏi",
    brand: "Cát sông",
    description: "Cát xây dựng loại 1 mịn, sạch, phù hợp cho xây trát.",
  },
  "s12": {
    name: "Cát vàng xây dựng",
    images: ["/cat2.png", "/cat.png", "/cat3.png", "/cat4.png", "/cat5.png"],
    price: 320000,
    originalPrice: 380000,
    unit: "Khối (1m³)",
    discount: 16,
    code: "MEU-CT-002",
    category: "Cát - Đá - Sỏi",
    brand: "Cát vàng",
    description: "Cát vàng xây dựng chất lượng cao.",
  },
  // Gỗ
  "rv5": {
    name: "Gỗ xây dựng cao cấp",
    images: ["/go.png", "/go2.png", "/go3.png", "/go4.png", "/go5.png"],
    price: 165000,
    originalPrice: 195000,
    unit: "m²",
    discount: 15,
    code: "MEU-GO-001",
    category: "Gỗ xây dựng",
    brand: "Gỗ công nghiệp",
    description: "Gỗ xây dựng cao cấp, chống mối mọt, độ bền cao.",
  },
  "bs6": {
    name: "Gỗ xây dựng cao cấp",
    images: ["/go.png", "/go2.png", "/go3.png", "/go4.png", "/go5.png"],
    price: 420000,
    originalPrice: 480000,
    unit: "m²",
    discount: 12,
    code: "MEU-GO-001",
    category: "Gỗ xây dựng",
    brand: "Gỗ công nghiệp",
    description: "Gỗ xây dựng cao cấp, chống mối mọt, độ bền cao.",
  },
  "rp4": {
    name: "Gỗ xây dựng cao cấp",
    images: ["/go.png", "/go2.png", "/go3.png", "/go4.png", "/go5.png"],
    price: 165000,
    originalPrice: 195000,
    unit: "m²",
    discount: 15,
    code: "MEU-GO-001",
    category: "Gỗ xây dựng",
    brand: "Gỗ công nghiệp",
    description: "Gỗ xây dựng cao cấp, chống mối mọt, độ bền cao.",
  },
  "s6": {
    name: "Gỗ xây dựng cao cấp",
    images: ["/go.png", "/go2.png", "/go3.png", "/go4.png", "/go5.png"],
    price: 420000,
    originalPrice: 500000,
    unit: "m²",
    discount: 16,
    code: "MEU-GO-001",
    category: "Gỗ xây dựng",
    brand: "Gỗ công nghiệp",
    description: "Gỗ xây dựng cao cấp, chống mối mọt, độ bền cao.",
  },
  "6": {
    name: "Gỗ xây dựng cao cấp",
    images: ["/go.png", "/go2.png", "/go3.png", "/go4.png", "/go5.png"],
    price: 420000,
    originalPrice: 500000,
    unit: "m²",
    discount: 17,
    code: "MEU-GO-001",
    category: "Gỗ xây dựng",
    brand: "Gỗ công nghiệp",
    description: "Gỗ xây dựng cao cấp, chống mối mọt, độ bền cao.",
  },
  // Ngói
  "rp6": {
    name: "Ngói nhà cao cấp",
    images: ["/ngoi.png", "/ngoi2.png", "/ngoi3.png", "/ngoi4.png", "/ngoi5.png"],
    price: 420000,
    originalPrice: 480000,
    unit: "Viên",
    discount: 12,
    code: "MEU-NG-001",
    category: "Gạch - Ngói",
    brand: "Ngói Việt",
    description: "Ngói nhà cao cấp chống nóng, bền màu.",
  },
  "s7": {
    name: "Ngói nhà cao cấp",
    images: ["/ngoi.png", "/ngoi2.png", "/ngoi3.png", "/ngoi4.png", "/ngoi5.png"],
    price: 25000,
    originalPrice: 30000,
    unit: "Viên",
    discount: 17,
    code: "MEU-NG-001",
    category: "Gạch - Ngói",
    brand: "Ngói Việt",
    description: "Ngói nhà cao cấp chống nóng, bền màu.",
  },
  "5": {
    name: "Ngói nhà cao cấp chống nóng",
    images: ["/ngoi.png", "/ngoi2.png", "/ngoi3.png", "/ngoi4.png", "/ngoi5.png"],
    price: 25000,
    originalPrice: 32000,
    unit: "Viên",
    discount: 22,
    code: "MEU-NG-001",
    category: "Gạch - Ngói",
    brand: "Ngói Việt",
    description: "Ngói nhà cao cấp chống nóng, bền màu.",
  },
};

// Sản phẩm mặc định
const defaultProduct = {
  name: "Xi măng Hà Tiên PCB40 bao 50kg",
  images: ["/ximang.png", "/ximang2.png", "/ximang3.png", "/ximang4.png", "/ximang5.png"],
  price: 95000,
  originalPrice: 110000,
  unit: "Bao 50kg",
  discount: 14,
  code: "MEU-XM-001",
  category: "Xi măng - Vữa",
  brand: "Hà Tiên",
  description: "Xi măng Hà Tiên PCB40 là sản phẩm xi măng Portland hỗn hợp đạt tiêu chuẩn TCVN 2682:2020.",
};

const relatedProducts = [
  { id: "rp1", name: "Thép Pomina phi 10mm cuộn 50kg", image: "/thep.png", price: 890000, unit: "Cuộn", packaging: "50kg" },
  { id: "rp2", name: "Sơn Dulux nội thất cao cấp 18L", image: "/son.png", price: 1650000, unit: "Thùng", packaging: "18L" },
  { id: "rp3", name: "Gạch ống Tuynel 4 lỗ loại A", image: "/gach.png", price: 1800, unit: "Viên", packaging: "Viên" },
  { id: "rp4", name: "Gỗ xây dựng cao cấp", image: "/go.png", price: 165000, unit: "m²", packaging: "m²" },
  { id: "rp5", name: "Cát xây dựng loại 1 mịn", image: "/cat.png", price: 350000, originalPrice: 400000, unit: "Khối", discount: 12, packaging: "1m³" },
  { id: "rp6", name: "Ngói nhà cao cấp", image: "/ngoi.png", price: 25000, originalPrice: 30000, unit: "Viên", discount: 17, packaging: "Viên" },
];


export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Lấy dữ liệu sản phẩm theo slug
  const product = productsData[slug] || defaultProduct;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (p: number) => p.toLocaleString("vi-VN") + "đ";

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 overflow-x-auto">
          <Link href="/" className="hover:text-[#1a56db] whitespace-nowrap">Trang chủ</Link>
          <span>/</span>
          <Link href="#" className="hover:text-[#1a56db] whitespace-nowrap">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-700 truncate">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 border bg-gray-50">
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                  <span className="bg-[#00ab56] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">CHÍNH HÃNG</span>
                </div>
                {product.discount && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                    <span className="bg-[#ff3b3b] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">-{product.discount}%</span>
                  </div>
                )}
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg border-2 overflow-hidden ${
                      selectedImage === idx ? "border-[#1a56db]" : "border-gray-200"
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs sm:text-sm text-gray-600">
                  Thương hiệu: <Link href="#" className="text-[#1a56db] hover:underline">{product.brand}</Link>
                </span>
              </div>

              <h1 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{product.name}</h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                <span className="text-gray-500">{product.code}</span>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">4.9</span>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <span className="text-gray-600">127 đánh giá</span>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-[#1a56db]">{formatPrice(product.price)}</span>
                  <span className="text-gray-500 text-sm">/ {product.unit}</span>
                </div>
                {product.originalPrice && (
                  <div className="flex items-center gap-2 mt-1 sm:mt-2">
                    <span className="bg-red-100 text-red-600 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">
                      Giảm {product.discount}%
                    </span>
                    <span className="text-gray-400 line-through text-xs sm:text-sm">{formatPrice(product.originalPrice)}</span>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm text-gray-600">Số lượng</span>
                  <div className="flex items-center border rounded-lg">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                    <span className="w-10 sm:w-12 text-center font-medium text-sm sm:text-base">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
                <button className="flex-1 py-2.5 sm:py-3 bg-[#1a56db] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#1e40af] transition-colors">
                  🛒 Thêm vào giỏ
                </button>
                <button className="flex-1 py-2.5 sm:py-3 border-2 border-[#1a56db] text-[#1a56db] text-sm sm:text-base font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  💬 Liên hệ tư vấn
                </button>
              </div>

              {/* Description */}
              <div className="border-t pt-3 sm:pt-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Mô tả sản phẩm</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{product.description}</p>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  <span className="text-orange-500">🔄</span>
                  <div>
                    <div className="font-medium text-orange-500">Đổi trả 7 ngày</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  <span className="text-green-500">✓</span>
                  <div>
                    <div className="font-medium text-green-500">Chính hãng 100%</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  <span className="text-blue-500">🚚</span>
                  <div>
                    <div className="font-medium text-blue-500">Giao tận nơi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-4 sm:py-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
