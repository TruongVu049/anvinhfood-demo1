"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { ChevronDown, Star, ThumbsUp } from "lucide-react";
import Link from "next/link";

const productImages = [
  "/frozen-lobster-crab-seafood.jpg",
  "/king-crab.jpg",
  "/tiger-shrimp.jpg",
  "/premium-frozen-seafood-salmon-shrimp-blue-backgrou.jpg",
  "/frozen-seafood-promotion-blue-background.jpg",
];

const relatedProducts = [
  {
    id: "rp1",
    name: "Tôm Sú Đông Lạnh Cao Cấp - Tươi ngon từ biển khơi",
    image: "/tiger-shrimp.jpg",
    price: 385000,
    unit: "Kg",
    packaging: "Khay 500g",
  },
  {
    id: "rp2",
    name: "Cá Hồi Na Uy Phi Lê Đông Lạnh - Giàu Omega-3",
    image: "/salmon-fish.jpg",
    price: 450000,
    unit: "Kg",
    packaging: "Gói 1kg",
  },
  {
    id: "rp3",
    name: "Mực Ống Tươi Làm Sạch Đông Lạnh - Hải sản tươi ngon",
    image: "/cleaned-squid.jpg",
    price: 195000,
    unit: "Kg",
    packaging: "Gói 500g",
  },
  {
    id: "rp4",
    name: "Sò Điệp Nhật Bản Đông Lạnh - Vị ngọt tự nhiên",
    image: "/japanese-scallop.jpg",
    price: 680000,
    unit: "Kg",
    packaging: "Khay 500g",
  },
  {
    id: "rp5",
    name: "Nghêu Sống Đông Lạnh - Tươi mới từ vùng biển",
    image: "/clams-on-sand.png",
    price: 120000,
    originalPrice: 150000,
    unit: "Kg",
    discount: 20,
    packaging: "Túi 500g",
  },
  {
    id: "rp6",
    name: "Bạch Tuộc/Mực Ống Đông Lạnh - Đa dạng món ngon",
    image: "/squid-octopus.jpg",
    price: 240000,
    originalPrice: 300000,
    unit: "Kg",
    discount: 20,
    packaging: "Gói 1kg",
  },
];

const faqs = [
  {
    question: "Tôm hùm đông lạnh có giữ được chất lượng và độ tươi ngon không?",
    answer:
      "Hoàn toàn giữ được! Tôm hùm của chúng tôi được đánh bắt tươi sống và cấp đông nhanh ngay trên tàu bằng công nghệ IQF (Individual Quick Freezing) ở nhiệt độ -40°C trong vòng 2 giờ. Công nghệ này giúp khóa chặt độ tươi ngon, dinh dưỡng và hương vị tự nhiên của tôm hùm, đảm bảo chất lượng như tươi sống khi chế biến.",
  },
  {
    question: "Tôm hùm đông lạnh có nguồn gốc từ đâu?",
    answer:
      "Tôm hùm của chúng tôi được nhập khẩu trực tiếp từ các vùng biển sạch uy tín như Canada, Australia và New Zealand. Sản phẩm có đầy đủ giấy tờ chứng nhận CO (Certificate of Origin), chứng nhận vệ sinh an toàn thực phẩm và được kiểm dịch nghiêm ngặt trước khi về Việt Nam.",
  },
  {
    question: "Làm thế nào để rã đông tôm hùm đúng cách?",
    answer:
      "Cách tốt nhất là cho tôm hùm vào ngăn mát tủ lạnh (4-8°C) và để rã đông tự nhiên trong 6-8 giờ hoặc qua đêm. Tuyệt đối không rã đông bằng nước nóng hoặc lò vi sóng vì sẽ làm mất độ ngọt tự nhiên và làm thịt bị dai. Nếu gấp, bạn có thể ngâm trong nước lạnh có bọc túi kín khoảng 2-3 giờ.",
  },
  {
    question: "Tôm hùm đông lạnh có thể bảo quản được bao lâu?",
    answer:
      "Khi bảo quản ở nhiệt độ -18°C trở xuống trong ngăn đông tủ lạnh, tôm hùm có thể giữ được chất lượng tốt trong 12-18 tháng. Tuy nhiên, để đảm bảo hương vị tuyệt hảo nhất, chúng tôi khuyến nghị sử dụng trong vòng 6-9 tháng kể từ ngày sản xuất.",
  },
  {
    question: "Tôm hùm sau khi rã đông có thể đông lại được không?",
    answer:
      "Không nên đông lại tôm hùm đã rã đông vì điều này sẽ làm giảm chất lượng thịt, mất độ ngọt và ảnh hưởng đến kết cấu. Hãy chỉ rã đông phần cần dùng và giữ phần còn lại trong ngăn đông. Nếu đã rã đông, tốt nhất nên chế biến và sử dụng trong vòng 24 giờ.",
  },
];

const reviews = [
  {
    id: 1,
    name: "MINH HẰNG",
    avatar: "MH",
    rating: 5,
    content:
      "Tôm hùm đông lạnh mà chất lượng tuyệt vời, thịt chắc ngon như tươi sống. Rã đông xong thấy còn nguyên vẹn, không bị vỡ vụn. Gia đình mình nấu soup và nướng đều ngon hết ý. Sẽ đặt thêm!",
    date: "2 ngày trước",
    reply: {
      name: "An Vinh Food - Chuyên gia Hải Sản",
      role: "Tư Vấn Viên",
      content:
        "Chào chị Minh Hằng,\nCảm ơn chị đã tin tưởng sử dụng sản phẩm tôm hùm đông lạnh của An Vinh Food. Chúng tôi cam kết tất cả sản phẩm đều được cấp đông nhanh ngay sau đánh bắt để giữ trọn độ tươi ngon và dinh dưỡng.\n\nĐể giữ chất lượng tốt nhất, chị nhớ rã đông tự nhiên trong tủ lạnh qua đêm và sử dụng trong 24h sau khi rã đông nhé.\nAn Vinh Food rất vui khi được phục vụ chị!",
      date: "2 ngày trước",
    },
  },
  {
    id: 2,
    name: "Anh Tuấn - 0989xxxxxx",
    avatar: "AT",
    rating: 5,
    content:
      "Lần đầu mua hải sản đông lạnh online nhưng không nghĩ chất lượng tốt thế này. Giao hàng đúng hẹn, đóng gói cẩn thận với đá khô. Tôm hùm còn đóng băng tốt khi nhận. Giá cả hợp lý so với chất lượng!",
    date: "5 ngày trước",
    reply: {
      name: "An Vinh Food - Chuyên gia Hải Sản",
      role: "Tư Vấn Viên",
      content:
        "Chào anh Tuấn,\nAn Vinh Food xin cảm ơn anh đã tin tưởng lựa chọn. Chúng tôi luôn đảm bảo quy trình vận chuyển lạnh liên tục với thùng xốp foam và đá khô chuyên dụng để sản phẩm luôn được bảo quản ở nhiệt độ tối ưu.\n\nNếu anh có nhu cầu đặt số lượng lớn hoặc đăng ký khách hàng thân thiết, chúng tôi có chương trình ưu đãi đặc biệt. Nhà thuốc sẽ liên hệ anh để tư vấn thêm ạ.\nThân mến!",
      date: "5 ngày trước",
    },
  },
  {
    id: 3,
    name: "0393xxxxxx",
    avatar: "N",
    rating: 5,
    content:
      "Shop có hướng dẫn cách chế biến tôm hùm không ạ? Em muốn làm món đặc biệt cho gia đình mà chưa từng nấu.",
    date: "1 tuần trước",
    reply: {
      name: "An Vinh Food - Chuyên gia Hải Sản",
      role: "Tư Vấn Viên",
      content:
        "Chào bạn,\nAn Vinh Food có hướng dẫn chi tiết các món từ tôm hùm trên website và fanpage ạ. Một số món dễ làm: Tôm hùm nướng bơ tỏi, Tôm hùm hấp gừng, Soup tôm hùm, Tôm hùm sốt phô mai...\n\nNếu bạn cần tư vấn chi tiết hoặc công thức cụ thể, hãy inbox fanpage hoặc gọi hotline, đội ngũ bếp trưởng của chúng tôi sẽ hỗ trợ nhiệt tình.\nChúc bạn thành công!",
      date: "1 tuần trước",
    },
  },
];

const qnas = [
  {
    id: 1,
    name: "0355xxxxxx",
    avatar: "Q",
    content:
      "Shop ơi cho em hỏi tôm hùm này size bao nhiêu ạ? Mua 2kg đủ cho bữa tiệc 10 người không?",
    date: "3 giờ trước",
    helpful: 2,
    reply: {
      name: "An Vinh Food - Chuyên gia Hải Sản",
      role: "Tư Vấn Viên",
      content:
        "Chào Quý Khách,\nTôm hùm của shop có size từ 400-600g/con (tùy lô hàng). Với 10 người, nếu làm món chính thì 2kg sẽ vừa đủ (khoảng 3-4 con). Tuy nhiên nếu có nhiều món khác kèm theo, 2kg sẽ rất dư dả ạ.\n\nShop khuyến nghị nếu làm tiệc nên kết hợp thêm các loại hải sản khác như tôm sú, cua, sò điệp để đa dạng hơn. Chúng tôi có combo tiệc hải sản rất ưu đãi, bạn có thể tham khảo nhé!",
      date: "3 giờ trước",
    },
  },
  {
    id: 2,
    name: "ANH KHOA",
    avatar: "AK",
    content:
      "Tôm hùm này có giấy tờ chứng nhận nguồn gốc không shop? Vì nhà em có bé nhỏ nên cần đảm bảo an toàn.",
    date: "1 ngày trước",
    helpful: 5,
    reply: {
      name: "An Vinh Food - Chuyên gia Hải Sản",
      role: "Tư Vấn Viên",
      content:
        "Chào anh Khoa,\nTất cả sản phẩm hải sản của An Vinh Food đều có đầy đủ:\n✓ Giấy chứng nhận nguồn gốc xuất xứ (CO - Certificate of Origin)\n✓ Chứng nhận vệ sinh an toàn thực phẩm\n✓ Giấy kiểm dịch từ cơ quan có thẩm quyền\n✓ Phiếu xét nghiệm vi sinh và kim loại nặng\n\nQuý khách hoàn toàn yên tâm về chất lượng và an toàn cho gia đình, đặc biệt là trẻ nhỏ. Nếu cần xem giấy tờ, anh có thể yêu cầu khi nhận hàng hoặc xem trên website của chúng tôi ạ.",
      date: "1 ngày trước",
    },
  },
];

const productSpecs = [
  {
    label: "Tên sản phẩm",
    value: "Tôm Hùm Đông Lạnh Cao Cấp (Frozen Lobster Premium)",
  },
  { label: "Danh mục", value: "Hải Sản Đông Lạnh", isLink: true },
  { label: "Mã sản phẩm", value: "AVFS-LOB-001" },
  { label: "Trọng lượng", value: "400-600g/con" },
  { label: "Quy cách đóng gói", value: "1 Kg (1-2 con tùy size)" },
  { label: "Xuất xứ", value: "Canada / Australia" },
  { label: "Nhà nhập khẩu", value: "Công ty An Vinh Food" },
  {
    label: "Phương pháp bảo quản",
    value: "Cấp đông nhanh IQF -40°C, Bảo quản -18°C",
    hasLinks: true,
  },
  { label: "Hạn sử dụng", value: "12-18 tháng kể từ ngày sản xuất" },
  {
    label: "Chứng nhận",
    value: "CO, HACCP, ISO 22000, Kiểm dịch thú y quốc tế",
    hasLinks: true,
  },
];

const ingredients = [
  { name: "Protein", amount: "18-20g/100g" },
  { name: "Chất béo tốt (Omega-3, DHA, EPA)", amount: "1.5-2g/100g" },
  { name: "Vitamin B12", amount: "Cao" },
  { name: "Khoáng chất (Kẽm, Selen, Đồng)", amount: "Phong phú" },
  { name: "Calo", amount: "Thấp (~90 kcal/100g)" },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("thanhphan");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [qnaSort, setQnaSort] = useState("newest");

  const tabs = [
    { id: "thanhphan", label: "Mô tả" },
    { id: "tacdungphu", label: "Mô tả" },
    { id: "luuy", label: "Lưu ý" },
    { id: "baoquan", label: "Bảo quản" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-[#1a56db]">
            Trang chủ
          </Link>
          <span>/</span>
          <Link href="/hai-san-dong-lanh" className="hover:text-[#1a56db]">
            Hải Sản Đông Lạnh
          </Link>
          <span>/</span>
          <Link href="/tom-hum" className="hover:text-[#1a56db]">
            Tôm Hùm
          </Link>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#00ab56] text-white text-xs font-bold px-2 py-1 rounded">
                    CHÍNH HÃNG
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-[#ff6b35] text-white text-xs font-medium px-2 py-1 rounded">
                    Tra cứu
                  </span>
                </div>
                <img
                  src={productImages[selectedImage] || "/placeholder.svg"}
                  alt="Product"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden ${
                      selectedImage === idx
                        ? "border-[#1a56db]"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
                <button className="flex-shrink-0 w-16 h-16 rounded-lg border-2 border-gray-200 flex items-center justify-center bg-gray-50 text-xs text-gray-500">
                  Xem thêm
                  <br />7 ảnh
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Mẫu mã sản phẩm có thể thay đổi theo lô hàng
              </p>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">
                  Thương hiệu:{" "}
                  <Link href="#" className="text-[#1a56db] hover:underline">
                    AN VINH FOOD
                  </Link>
                </span>
              </div>

              <h1 className="text-xl font-bold text-gray-900 mb-3">
                Tôm Hùm Đông Lạnh Cao Cấp - Tươi Ngon Từ Vùng Biển Sạch - Giàu
                Dinh Dưỡng (1kg)
              </h1>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-gray-500">AVFS-LOB-001</span>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">4.9</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">127 đánh giá</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">243 bình luận</span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1a56db]">
                    1.250.000đ
                  </span>
                  <span className="text-gray-500">/ Kg</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                    Giảm 15%
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    1.470.000đ
                  </span>
                </div>
              </div>

              {/* Unit selector */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    Chọn đơn vị tính
                  </span>
                  <button className="px-4 py-2 border-2 border-[#1a56db] text-[#1a56db] rounded-lg font-medium">
                    Kg (1-2 con)
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:border-[#1a56db] hover:text-[#1a56db] transition-colors">
                    0.5 Kg
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Chọn số lượng</span>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 py-3 bg-[#1a56db] text-white font-medium rounded-lg hover:bg-[#1e40af] transition-colors shadow-lg hover:shadow-xl">
                  🛒 Thêm vào giỏ hàng
                </button>
                <button className="flex-1 py-3 border-2 border-[#1a56db] text-[#1a56db] font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  💬 Liên hệ tư vấn
                </button>
              </div>

              {/* Stock info */}
              <div className="flex items-center gap-2 text-sm text-orange-600 mb-6">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                Sản phẩm HOT! Có 18 người thêm vào giỏ & 47 người đang xem - Còn
                15kg trong kho
              </div>

              {/* Product specs table */}
              <div className="border-t pt-4">
                {productSpecs.map((spec, idx) => (
                  <div key={idx} className="flex py-2 text-sm">
                    <span className="w-40 text-gray-500 flex-shrink-0">
                      {spec.label}
                    </span>
                    <span
                      className={
                        spec.isLink || spec.hasLinks
                          ? "text-[#1a56db]"
                          : "text-gray-900"
                      }
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
                <button className="text-sm text-[#1a56db] hover:underline mt-2">
                  Xem giấy công bố sản phẩm ✓
                </button>
              </div>

              {/* Benefits */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-500">🔄</span>
                  <div>
                    <div className="font-medium text-orange-500">
                      Đổi trả trong 30 ngày
                    </div>
                    <div className="text-gray-500 text-xs">
                      kể từ ngày mua hàng
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <div>
                    <div className="font-medium text-green-500">
                      Miễn phí 100%
                    </div>
                    <div className="text-gray-500 text-xs">đổi thuốc</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-500">🚚</span>
                  <div>
                    <div className="font-medium text-blue-500">
                      Miễn phí vận chuyển
                    </div>
                    <div className="text-gray-500 text-xs">
                      theo chính sách giao hàng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="bg-white rounded-2xl mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Sidebar tabs */}
            <div className="border-r">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-6 py-4 text-left text-sm font-medium border-l-4 transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-[#1a56db] border-[#1a56db]"
                      : "text-gray-700 border-transparent hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:col-span-3 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Tôm Hùm Đông Lạnh Cao Cấp là gì?
                </h2>
                <div className="flex items-center gap-2 text-sm"></div>
              </div>

              {/* Product intro */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  <strong className="text-[#1a56db]">
                    Tôm Hùm Đông Lạnh Cao Cấp An Vinh Food
                  </strong>{" "}
                  là sản phẩm hải sản cao cấp được đánh bắt từ vùng biển sạch
                  Canada và Australia, nơi có nguồn nước lạnh trong xanh và hệ
                  sinh thái biển phong phú. Các mẫu tôm hùm được chọn lọc kỹ
                  lượng và{" "}
                  <strong>
                    cấp đông nhanh bằng công nghệ IQF (Individual Quick
                    Freezing)
                  </strong>{" "}
                  ngay trên tàu đánh cá, giúp khóa chặt độ tươi ngon, dinh dưỡng
                  và hương vị tự nhiên như hải sản tươi sống.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Thịt tôm hùm chắc nịt, ngọt thơm, giàu protein và Omega-3, ít
                  chất béo - lý tưởng cho các món ăn sang trọng, tiệc tùng gia
                  đình hoặc nhà hàng cao cấp. Sản phẩm đã được làm sạch, đóng
                  gói theo tiêu chuẩn HACCP và ISO 22000, đảm bảo vệ sinh an
                  toàn thực phẩm tuyệt đối.
                </p>
              </div>

              {/* Ingredients table */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧀</span>
                  Giá trị dinh dưỡng trong 100g thịt Tôm Hùm
                </h3>
                <table className="w-full border-collapse border border-gray-200 shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-cyan-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Thành phần dinh dưỡng
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-right text-sm font-medium text-gray-700">
                        Hàm lượng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ing, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="border border-gray-200 px-4 py-3 text-sm">
                          {ing.name}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-right font-medium">
                          {ing.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Usage info */}
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    Lợi ích sức khỏe từ Tôm Hùm
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
                    <li>
                      <strong>Giàu Protein chất lượng cao:</strong> Hỗ trợ xây
                      dựng cơ bắp, tăng cường sức khỏe tổng thể
                    </li>
                    <li>
                      <strong>Chứa Omega-3, DHA, EPA:</strong> Tốt cho tim mạch,
                      não bộ, giảm cholesterol xấu
                    </li>
                    <li>
                      <strong>Nguồn Vitamin B12 phong phú:</strong> Hỗ trợ hệ
                      thần kinh, tăng cường sinh lực
                    </li>
                    <li>
                      <strong>Giàu khoáng chất (Kẽm, Selenium, Đồng):</strong>{" "}
                      Tăng cường miễn dịch, chống oxy hóa
                    </li>
                    <li>
                      <strong>Ít calo, ít chất béo:</strong> Phù hợp cho người
                      ăn kiêng, giữ dáng
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🍘</span>
                    Cách rã đông và chế biến Tôm Hùm đúng cách
                  </h3>

                  <div className="mb-4">
                    <p className="text-gray-900 font-medium mb-2">
                      ❄️ Cách rã đông (Quan trọng!)
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Phương pháp tốt nhất:</strong> Chuyển tôm hùm từ
                      ngăn đông sang ngăn mát tủ lạnh (4-8°C) và để qua đêm (6-8
                      giờ).
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Nếu gấp:</strong> Ngâm trong nước lạnh (bọc túi
                      kín) khoảng 2-3 giờ. Thường xuyên đổi nước để giữ nhiệt độ
                      lạnh.
                    </p>
                    <p className="text-red-600 text-sm font-medium">
                      ⛔ <strong>Tuyệt đối KHÔNG:</strong> Rã đông bằng nước
                      nóng, lò vi sóng hoặc để ngoài nhiệt độ phòng lâu!
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-900 font-medium mb-2">
                      👩‍🍳 Các món ăn đề xuất
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                      <li>Tôm hùm nướng bơ tỏi - Hương thơm hấp dẫn</li>
                      <li>Tôm hùm hấp gừng sả - Giữ nguyên vị ngọt</li>
                      <li>Soup tôm hùm bisque - Món Tây sang trọng</li>
                      <li>Tôm hùm sốt phô mai - Thơm ngật béo ngậy</li>
                      <li>Tôm hùm xào bơ tỏi muối ớt - Phong cách Á Đông</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    Lưu ý quan trọng
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
                    <li>Không nên đông lại sau khi đã rã đông</li>
                    <li>Nên sử dụng trong vòng 24h sau khi rã đông</li>
                    <li>Nếu dị ứng với hải sản, không nên sử dụng</li>
                    <li>
                      Phụ nữ mang thai nên tư vấn bác sĩ trước khi ăn nhiều
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">❄️</span>
                    Hướng dẫn bảo quản
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
                    <li>
                      <strong>Bảo quản đông:</strong> Nhiệt độ -18°C trở xuống
                      trong ngăn đông tủ lạnh
                    </li>
                    <li>
                      <strong>Thời hạn:</strong> 12-18 tháng kể từ ngày sản xuất
                      (khuyến nghị dùng trong 6-9 tháng để đảm bảo chất lượng
                      tốt nhất)
                    </li>
                    <li>
                      <strong>Sau khi rã đông:</strong> Giữ trong ngăn mát tủ
                      lạnh và dùng trong 24h
                    </li>
                    <li>
                      <strong>Lưu ý:</strong> Không để nhiệt độ lên xuống liên
                      tục, đóng gói kín khí để tránh cháy đông
                    </li>
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Chứng nhận và Tiêu chuẩn Chất lượng
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl mb-1">✅</div>
                    <div className="text-xs font-medium text-gray-700">
                      Chứng nhận CO
                    </div>
                    <div className="text-xs text-gray-500">Xuất xứ rõ ràng</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl mb-1">🧪</div>
                    <div className="text-xs font-medium text-gray-700">
                      HACCP
                    </div>
                    <div className="text-xs text-gray-500">
                      An toàn thực phẩm
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl mb-1">🔬</div>
                    <div className="text-xs font-medium text-gray-700">
                      ISO 22000
                    </div>
                    <div className="text-xs text-gray-500">
                      Quản lý chất lượng
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl mb-1">🌍</div>
                    <div className="text-xs font-medium text-gray-700">
                      Kiểm dịch
                    </div>
                    <div className="text-xs text-gray-500">Quốc tế</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  📜 Quý khách có thể yêu cầu xem giấy tờ chứng nhận khi nhận
                  hàng hoặc tải xuống trên website chính thức của An Vinh Food.
                </p>
              </div>

              {/* Expert info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#1a56db] flex items-center justify-center text-white text-2xl">
                  🦐
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-[#1a56db]">
                      Bếp Trưởng Nguyễn Minh Quân
                    </h4>
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Chuyên gia Hải Sản
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Hơn 15 năm kinh nghiệm trong lĩnh vực chế biến hải sản cao
                    cấp. Từng đảm nhận vị trí Executive Chef tại các khách sạn 5
                    sao. Hiện đang là chuyên gia tư vấn và đào tạo chế biến hải
                    sản tại An Vinh Food, giúp khách hàng khai thác tối đa hương
                    vị từ các sản phẩm đông lạnh chất lượng cao.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Sản phẩm liên quan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b last:border-b-0">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#1a56db] text-white rounded-full flex items-center justify-center text-sm">
                      ?
                    </span>
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="pb-4 pl-9 text-sm text-gray-600">
                    {faq.answer || "Nội dung đang được cập nhật..."}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Đánh giá sản phẩm{" "}
              <span className="text-gray-500 font-normal">(127 đánh giá)</span>
            </h2>
          </div>

          <div className="flex gap-8 mb-8">
            {/* Rating summary */}
            <div className="flex-shrink-0">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Trung bình</div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-gray-900">4.9</span>
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <button className="mt-4 px-6 py-2 bg-[#1a56db] text-white rounded-lg font-medium text-sm">
                Gửi đánh giá
              </button>
            </div>

            {/* Rating bars */}
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-0.5 w-20">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < stars
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{
                        width:
                          stars === 5
                            ? "94%"
                            : stars === 4
                            ? "4%"
                            : stars === 3
                            ? "2%"
                            : "0%",
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8 text-right">
                    {stars === 5 ? 119 : stars === 4 ? 5 : stars === 3 ? 3 : 0}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-600">Lọc theo:</span>
            {["5 sao", "4 sao", "3 sao", "2 sao", "1 sao"].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1.5 text-sm border rounded-full hover:border-[#1a56db] hover:text-[#1a56db]"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Reviews list */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-medium flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {review.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="font-semibold">{review.rating}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-gray-700 text-sm mb-2">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{review.date}</span>
                      <button className="hover:text-[#1a56db]">Trả lời</button>
                    </div>

                    {/* Reply */}
                    {review.reply && (
                      <div className="mt-4 ml-4 pl-4 border-l-2 border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-[#1a56db] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">LC</span>
                          </div>
                          <span className="font-medium text-[#1a56db]">
                            {review.reply.name}
                          </span>
                          <span className="px-2 py-0.5 bg-blue-100 text-[#1a56db] text-xs rounded">
                            {review.reply.role}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm whitespace-pre-line">
                          {review.reply.content}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {review.reply.date}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Q&A */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#1a56db]">
              Hỏi đáp{" "}
              <span className="text-gray-500 font-normal">(243 bình luận)</span>
            </h2>
          </div>

          <button className="px-6 py-2 bg-[#1a56db] text-white rounded-lg font-medium text-sm mb-6">
            Gửi bình luận
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-600">Lọc theo:</span>
            {[
              { key: "newest", label: "Mới nhất" },
              { key: "oldest", label: "Cũ nhất" },
              { key: "helpful", label: "Hữu ích nhất" },
            ].map((sort) => (
              <button
                key={sort.key}
                onClick={() => setQnaSort(sort.key)}
                className={`px-3 py-1.5 text-sm border rounded-full transition-colors ${
                  qnaSort === sort.key
                    ? "bg-[#1a56db] text-white border-[#1a56db]"
                    : "hover:border-[#1a56db] hover:text-[#1a56db]"
                }`}
              >
                {sort.label}
              </button>
            ))}
          </div>

          {/* Q&A list */}
          <div className="space-y-6">
            {qnas.map((qna) => (
              <div key={qna.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium flex-shrink-0">
                    {qna.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {qna.name}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{qna.content}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{qna.date}</span>
                      <button className="flex items-center gap-1 hover:text-[#1a56db]">
                        <ThumbsUp className="w-3 h-3" />
                        Hữu ích
                      </button>
                      <button className="hover:text-[#1a56db]">Trả lời</button>
                    </div>

                    {/* Reply */}
                    {qna.reply && (
                      <div className="mt-4 ml-4 pl-4 border-l-2 border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-[#1a56db] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">LC</span>
                          </div>
                          <span className="font-medium text-[#1a56db]">
                            {qna.reply.name}
                          </span>
                          <span className="px-2 py-0.5 bg-blue-100 text-[#1a56db] text-xs rounded">
                            {qna.reply.role}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm whitespace-pre-line">
                          {qna.reply.content}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {qna.reply.date}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 text-[#1a56db] font-medium hover:underline flex items-center justify-center gap-2">
            <ChevronDown className="w-5 h-5" />
            Xem thêm bình luận
          </button>
        </section>

        {/* Recently Viewed */}
        <section className="bg-white rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👁️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Hải sản đông lạnh khác
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
