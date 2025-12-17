"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ChevronDown, Star, ThumbsUp } from "lucide-react"
import Link from "next/link"

const productImages = [
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
]

const relatedProducts = [
  {
    id: "rp1",
    name: "Viên uống Immuvita Easylife bổ sung vitamin và khoáng ch...",
    image: "/placeholder.svg?height=200&width=200",
    price: 390000,
    unit: "Hộp",
    packaging: "Hộp 100 Viên",
  },
  {
    id: "rp2",
    name: "Siro ống uống Canxi-D3+K2 5ml Kingphar bổ sung canxi & vitamin...",
    image: "/placeholder.svg?height=200&width=200",
    price: 105000,
    unit: "Hộp",
    packaging: "Hộp 6 Vỉ x 5 Ống x 5ml",
  },
  {
    id: "rp3",
    name: "Siro Brauer Baby Kids D3+K2 High Potency MK-7 Drops bổ sung...",
    image: "/placeholder.svg?height=200&width=200",
    price: 396000,
    unit: "Hộp",
    packaging: "Hộp x 10ml",
  },
  {
    id: "rp4",
    name: "Viên uống Omexxel 3-6-9 Premium hỗ trợ tốt cho não và mắt (100...",
    image: "/placeholder.svg?height=200&width=200",
    price: 453000,
    unit: "Hộp",
    packaging: "Hộp 100 Viên",
  },
  {
    id: "rp5",
    name: "Viên uống Brauer Ultra Pure DHA For Pregnancy & Breastfeeding...",
    image: "/placeholder.svg?height=200&width=200",
    price: 550000,
    unit: "Hộp",
    discount: 20,
    packaging: "Hộp 60 Viên",
  },
  {
    id: "rp6",
    name: "Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương...",
    image: "/placeholder.svg?height=200&width=200",
    price: 127200,
    originalPrice: 159000,
    unit: "Tuýp",
    discount: 20,
    packaging: "Tuýp 20 Viên",
  },
]

const faqs = [
  { question: "Omega-3 For Kids có giúp tăng cường miễn dịch không?", answer: "" },
  { question: "Omega-3 For Kids có gì khác biệt?", answer: "" },
  { question: "Omega-3 For Kids xuất xứ từ đâu?", answer: "" },
  { question: "Omega-3 For Kids dùng được cho trẻ từ bao nhiêu tuổi?", answer: "" },
  { question: "Vì sao trẻ nên sử dụng omega-3?", answer: "" },
]

const reviews = [
  {
    id: 1,
    name: "PHÚ CƯỜNG",
    avatar: "PC",
    rating: 5,
    content: "Sao không thấy hàm lượng DHA, EPA là bao nhiêu",
    date: "9 ngày trước",
    reply: {
      name: "Huỳnh Thanh Ngọc",
      role: "Dược Sĩ",
      content:
        "Chào bạn PHÚ CƯỜNG,\nDạ sản phẩm Viên uống Omega-3 For Kids Nutrimed giúp trẻ phát triển trí não, thị lực (100 viên) có hàm lượng trong 2 viên: DHA (Docosahexaenoic Acid) - 150 mg và EPA (Eicosapentaenoic Acid) - 60 mg\nTư vấn viên nhà thuốc Long Châu sẽ liên hệ theo SĐT bạn đã để lại ạ.",
      date: "9 ngày trước",
    },
  },
  {
    id: 2,
    name: "Linh - 0989xxxxxx",
    avatar: "L",
    rating: 5,
    content: "sản phẩm này uống bình thường hay bắt buộc nhai nuốt không shop",
    date: "14 ngày trước",
    reply: {
      name: "Trần Lê Hải Bình",
      role: "Dược Sĩ",
      content:
        "Chào bạn Linh,\nDạ Viên uống Omega-3 For Kids Nutrimed mình uống trọn viên thuốc với nước đun sôi để nguội ạ.\nNhà thuốc thông tin đến bạn.\nThân mến!",
      date: "14 ngày trước",
    },
  },
  {
    id: 3,
    name: "0393xxxxxx",
    avatar: "0",
    rating: 5,
    content: "cái này là Omega-3 của trẻ em từ 3 tuổi trở lên ạ",
    date: "1 tháng trước",
    reply: {
      name: "Nguyễn Mai Anh",
      role: "Dược Sĩ",
      content:
        "Chào bạn,\nDạ sản phẩm Omega-3 For Kids giúp bổ não, tốt cho mắt dùng cho trẻ từ 4 tuổi trở lên ạ.\nNhà thuốc thông tin đến bạn.",
      date: "1 tháng trước",
    },
  },
]

const qnas = [
  {
    id: 1,
    name: "0355xxxxxx",
    avatar: "0",
    content: "con mình học lớp 3 hay mất tập trung, hay quên, dùng sản phẩm này ok ko vậy?",
    date: "6 giờ trước",
    helpful: 0,
    reply: {
      name: "Nguyễn Thị Quỳnh Anh",
      role: "Dược Sĩ",
      content:
        "Chào Quý Khách,\nDạ sản phẩm Viên uống Omega-3 For Kids Nutrimed giúp trẻ phát triển trí não, thị lực, phù hợp cho bé từ 4 tuổi ạ. Với tình trạng hiện tại bé cố gắng uống và theo dõi thêm ạ.\nNhà thuốc thông tin đến chị.",
      date: "7 giờ trước",
    },
  },
  {
    id: 2,
    name: "ANH THÔNG",
    avatar: "AT",
    content: "nhà thuốc cho hỏi uống 1 lần 2 viên đúng không hay phải chia ra mỗi lần 1 viên cho trẻ 6 tuổi.",
    date: "7 ngày trước",
    helpful: 0,
    reply: {
      name: "Nguyễn Mai Anh",
      role: "Dược Sĩ",
      content:
        "Chào ANH THÔNG,\nDạ mình có thể uống chia 2 lần, tuy nhiên uống cùng lúc 2 viên sau bữa ăn sáng để đạt hiệu quả tốt nhất ạ.\nNhà thuốc thông tin đến anh.",
      date: "7 ngày trước",
    },
  },
]

const productSpecs = [
  { label: "Tên chính hãng", value: "Thực phẩm bảo vệ sức khỏe OMEGA- 3 FOR KIDS" },
  { label: "Danh mục", value: "Vitamin & Khoáng chất", isLink: true },
  { label: "Số đăng ký", value: "5773/2020/ĐKSP" },
  { label: "Dạng bào chế", value: "Viên nang mềm" },
  { label: "Quy cách", value: "Hộp 100 Viên" },
  { label: "Nhà sản xuất", value: "NEVADA NUTRA TECH LLC" },
  { label: "Nước sản xuất", value: "Hoa Kỳ" },
  { label: "Thành phần", value: "Omega-3 fatty acid, Vitamin A, Vitamin D3", hasLinks: true },
  { label: "Hạn sử dụng", value: "48 tháng" },
]

const ingredients = [
  { name: "Omega-3 fatty acid", amount: "150mg" },
  { name: "Vitamin A", amount: "450mcg" },
  { name: "Vitamin D3", amount: "7.5mcg" },
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("thanhphan")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [reviewFilter, setReviewFilter] = useState("all")
  const [qnaSort, setQnaSort] = useState("newest")

  const tabs = [
    { id: "thanhphan", label: "Thành phần" },
    { id: "congdung", label: "Công dụng" },
    { id: "cachdung", label: "Cách dùng" },
    { id: "tacdungphu", label: "Tác dụng phụ" },
    { id: "luuy", label: "Lưu ý" },
    { id: "baoquan", label: "Bảo quản" },
  ]

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
          <Link href="/thuc-pham-chuc-nang" className="hover:text-[#1a56db]">
            Thực phẩm chức năng
          </Link>
          <span>/</span>
          <Link href="/vitamin" className="hover:text-[#1a56db]">
            Vitamin & Khoáng chất
          </Link>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#00ab56] text-white text-xs font-bold px-2 py-1 rounded">CHÍNH HÃNG</span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-[#ff6b35] text-white text-xs font-medium px-2 py-1 rounded">Tra cứu</span>
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
                      selectedImage === idx ? "border-[#1a56db]" : "border-gray-200"
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
              <p className="text-xs text-gray-500 mt-2">Mẫu mã sản phẩm có thể thay đổi theo lô hàng</p>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src="/placeholder.svg?height=20&width=30" alt="USA" className="w-5 h-4" />
                <span className="text-sm text-gray-600">Hoa Kỳ</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-600">
                  Thương hiệu:{" "}
                  <Link href="#" className="text-[#1a56db] hover:underline">
                    NUTRIMED
                  </Link>
                </span>
              </div>

              <h1 className="text-xl font-bold text-gray-900 mb-3">
                Viên uống Omega-3 For Kids Nutrimed giúp trẻ phát triển trí não, thị lực (100 viên)
              </h1>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-gray-500">00029877</span>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">4.9</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">33 đánh giá</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">658 bình luận</span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1a56db]">450.000đ</span>
                  <span className="text-gray-500">/ Hộp</span>
                </div>
              </div>

              {/* Unit selector */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Chọn đơn vị tính</span>
                  <button className="px-4 py-2 border-2 border-[#1a56db] text-[#1a56db] rounded-lg font-medium">
                    Hộp
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
                    <span className="w-12 text-center font-medium">{quantity}</span>
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
                <button className="flex-1 py-3 bg-[#1a56db] text-white font-medium rounded-lg hover:bg-[#1e40af] transition-colors">
                  Chọn mua
                </button>
                <button className="flex-1 py-3 border-2 border-[#1a56db] text-[#1a56db] font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  Tìm nhà thuốc
                </button>
              </div>

              {/* Stock info */}
              <div className="flex items-center gap-2 text-sm text-orange-600 mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                Sản phẩm đang được chú ý, có 3 người thêm vào giỏ hàng & 14 người đang xem
              </div>

              {/* Product specs table */}
              <div className="border-t pt-4">
                {productSpecs.map((spec, idx) => (
                  <div key={idx} className="flex py-2 text-sm">
                    <span className="w-40 text-gray-500 flex-shrink-0">{spec.label}</span>
                    <span className={spec.isLink || spec.hasLinks ? "text-[#1a56db]" : "text-gray-900"}>
                      {spec.value}
                    </span>
                  </div>
                ))}
                <button className="text-sm text-[#1a56db] hover:underline mt-2">Xem giấy công bố sản phẩm ✓</button>
              </div>

              {/* Benefits */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-500">🔄</span>
                  <div>
                    <div className="font-medium text-orange-500">Đổi trả trong 30 ngày</div>
                    <div className="text-gray-500 text-xs">kể từ ngày mua hàng</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <div>
                    <div className="font-medium text-green-500">Miễn phí 100%</div>
                    <div className="text-gray-500 text-xs">đổi thuốc</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-500">🚚</span>
                  <div>
                    <div className="font-medium text-blue-500">Miễn phí vận chuyển</div>
                    <div className="text-gray-500 text-xs">theo chính sách giao hàng</div>
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
                <h2 className="text-xl font-bold text-gray-900">Viên uống Omega-3 For Kids là gì?</h2>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Kích thước chữ</span>
                  <button className="px-3 py-1 rounded border bg-white">Mặc định</button>
                  <button className="px-3 py-1 rounded border bg-white">Lớn hơn</button>
                </div>
              </div>

              {/* Ingredients table */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Thành phần của Viên uống Omega-3 For Kids</h3>
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Thông tin thành phần
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-right text-sm font-medium text-gray-700">
                        Hàm lượng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ing, idx) => (
                      <tr key={idx}>
                        <td className="border border-gray-200 px-4 py-3 text-sm">{ing.name}</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-right">{ing.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Usage info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Công dụng của Viên uống Omega-3 For Kids</h3>
                  <p className="text-gray-600 text-sm">Omega-3 For Kids giúp bổ não, tốt cho mắt.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Cách dùng Viên uống Omega-3 For Kids</h3>
                  <p className="text-gray-900 font-medium mb-2">Cách dùng</p>
                  <p className="text-gray-600 text-sm mb-2">Đối với trẻ em 4 - 9 tuổi: 2 viên/ngày.</p>
                  <p className="text-gray-600 text-sm mb-4">Đối với trẻ em 10 - 18 tuổi: 2 - 4 viên/ngày.</p>
                  <p className="text-gray-900 font-medium mb-2">Đối tượng sử dụng</p>
                  <p className="text-gray-600 text-sm">Trẻ em từ 4 tuổi trở lên.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Tác dụng phụ</h3>
                  <button className="text-[#1a56db] text-sm hover:underline flex items-center gap-1">
                    <ChevronDown className="w-4 h-4" />
                    Xem thêm
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Thực phẩm bảo vệ sức khỏe, không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/placeholder.svg?height=64&width=64" alt="Dược sĩ" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-[#1a56db]">Dược sĩ Đại học Ngô Kim Thúy</h4>
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Đã kiểm duyệt nội dung
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tốt nghiệp loại giỏi trường Đại học Y Dược Huế. Từng tham gia nghiên cứu khoa học để tài về Dược
                    liệu. Nhiều năm kinh nghiệm làm việc trong lĩnh vực Dược phẩm. Hiện đang là giảng viên cho Dược sĩ
                    tại Nhà thuốc Long Châu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Câu hỏi thường gặp</h2>
          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b last:border-b-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#1a56db] text-white rounded-full flex items-center justify-center text-sm">
                      ?
                    </span>
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
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
              Đánh giá sản phẩm <span className="text-gray-500 font-normal">(33 đánh giá)</span>
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
                        className={`w-3 h-3 ${i < stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: stars === 5 ? "97%" : stars === 3 ? "3%" : "0%" }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8 text-right">{stars === 5 ? 32 : stars === 3 ? 1 : 0}</span>
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
                      <span className="font-medium text-gray-900">{review.name}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="font-semibold">{review.rating}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{review.content}</p>
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
                          <span className="font-medium text-[#1a56db]">{review.reply.name}</span>
                          <span className="px-2 py-0.5 bg-blue-100 text-[#1a56db] text-xs rounded">
                            {review.reply.role}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm whitespace-pre-line">{review.reply.content}</p>
                        <div className="text-xs text-gray-500 mt-2">{review.reply.date}</div>
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
              Hỏi đáp <span className="text-gray-500 font-normal">(658 bình luận)</span>
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
                      <span className="font-medium text-gray-900">{qna.name}</span>
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
                          <span className="font-medium text-[#1a56db]">{qna.reply.name}</span>
                          <span className="px-2 py-0.5 bg-blue-100 text-[#1a56db] text-xs rounded">
                            {qna.reply.role}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm whitespace-pre-line">{qna.reply.content}</p>
                        <div className="text-xs text-gray-500 mt-2">{qna.reply.date}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 text-[#1a56db] font-medium hover:underline flex items-center justify-center gap-2">
            <ChevronDown className="w-5 h-5" />
            Xem thêm 5 bình luận
          </button>
        </section>

        {/* Recently Viewed */}
        <section className="bg-white rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👁️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Sản phẩm vừa xem</h2>
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
  )
}
