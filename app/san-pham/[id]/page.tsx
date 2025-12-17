"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  ShoppingCart,
  Star,
  ThumbsUp,
  MessageCircle,
  Check,
  Minus,
  Plus,
} from "lucide-react"
import Link from "next/link"

const productImages = [
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
]

const relatedProducts = [
  {
    id: "rp1",
    name: "Viên uống Bioamicus Omega 3 + DHA Vitabiotics hỗ trợ phát triển não",
    image: "/placeholder.svg?height=150&width=150",
    price: 285000,
    unit: "Hộp",
  },
  {
    id: "rp2",
    name: "Dầu cá Omega 3 Fish Oil 1000mg Good Health tốt cho tim mạch",
    image: "/placeholder.svg?height=150&width=150",
    price: 355000,
    unit: "Hộp",
  },
  {
    id: "rp3",
    name: "Viên uống Pregnacare Plus Omega 3 cho mẹ bầu và sau sinh",
    image: "/placeholder.svg?height=150&width=150",
    price: 420000,
    unit: "Hộp",
  },
  {
    id: "rp4",
    name: "Siro Fitobimbi Omega Junior cho bé từ 3 tuổi",
    image: "/placeholder.svg?height=150&width=150",
    price: 390000,
    unit: "Hộp",
  },
  {
    id: "rp5",
    name: "Viên nhai Nature's Way Kids Smart Omega 3 hương cam",
    image: "/placeholder.svg?height=150&width=150",
    price: 248000,
    unit: "Hộp",
  },
]

const faqs = [
  {
    question: "Sản phẩm Thực phẩm bảo vệ sức khỏe Bioamicus Omega-3 có hiệu điểm tốt không?",
    answer: "Sản phẩm có hiệu quả tốt trong việc hỗ trợ phát triển não bộ và thị lực cho trẻ em.",
  },
  {
    question: "Tôi bao nhiêu tuổi có thể sử dụng sản phẩm Bioamicus Omega-3?",
    answer: "Sản phẩm phù hợp cho trẻ từ 0 tháng tuổi trở lên.",
  },
  {
    question: "Bioamicus Omega-3 có tác dụng phụ không? Bao lâu thì khỏi bệnh?",
    answer: "Sản phẩm an toàn, không có tác dụng phụ. Hiệu quả tùy thuộc vào cơ địa từng người.",
  },
  {
    question: "Giá thực phẩm bảo vệ sức khỏe Bioamicus Omega-3?",
    answer: "Giá sản phẩm là 385.000đ/hộp 30ml.",
  },
]

const reviews = [
  {
    id: 1,
    author: "Nguyễn Thị Hương",
    rating: 5,
    date: "15/12/2024",
    content: "Sản phẩm rất tốt, con tôi uống được 2 tháng rồi, thấy bé tập trung hơn nhiều.",
    helpful: 12,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    author: "Trần Văn Minh",
    rating: 5,
    date: "10/12/2024",
    content: "Đóng gói cẩn thận, giao hàng nhanh. Sản phẩm chính hãng.",
    helpful: 8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    author: "Lê Thị Mai",
    rating: 4,
    date: "05/12/2024",
    content: "Bé nhà mình thích uống vì có vị dễ uống, không tanh như các loại omega khác.",
    helpful: 15,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const recentlyViewed = [
  {
    id: "rv1",
    name: "Viên uống Omega 3 Nordic Health giúp phát triển não bộ, thị lực",
    image: "/placeholder.svg?height=150&width=150",
    price: 319000,
    unit: "Hộp",
  },
  {
    id: "rv2",
    name: "Siro bổ mắt Nutri Care cho bé từ 6 tháng tuổi",
    image: "/placeholder.svg?height=150&width=150",
    price: 195000,
    unit: "Hộp",
  },
  {
    id: "rv3",
    name: "Thực phẩm bảo vệ sức khỏe CanxiPro Premium cho trẻ em",
    image: "/placeholder.svg?height=150&width=150",
    price: 350000,
    unit: "Hộp",
  },
  {
    id: "rv4",
    name: "Dầu Bạc hà chống dị ứng Nature's Way, tốt cho đường hô hấp",
    image: "/placeholder.svg?height=150&width=150",
    price: 175000,
    unit: "Hộp",
  },
  {
    id: "rv5",
    name: "Nước hoa hồng dưỡng trắng Transino Whitening Clear",
    image: "/placeholder.svg?height=150&width=150",
    price: 717600,
    originalPrice: 920000,
    unit: "Hộp",
    discount: 22,
  },
  {
    id: "rv6",
    name: "Men vi sinh Enterogermina 5ml x 20 ống hỗ trợ tiêu hóa",
    image: "/placeholder.svg?height=150&width=150",
    price: 189000,
    unit: "Hộp",
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#1a56db]">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/thuc-pham-chuc-nang" className="hover:text-[#1a56db]">
            Thực phẩm chức năng
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tim-kiem?s=omega+3" className="hover:text-[#1a56db]">
            Omega 3 & Dầu cá
          </Link>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                <img
                  src={productImages[selectedImage] || "/placeholder.svg"}
                  alt="Bioamicus Omega 3"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-[#1a56db]" : "border-transparent"
                    }`}
                  >
                    <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded">Thương hiệu: BIOAMICUS</span>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Thực phẩm bảo vệ sức khỏe Bioamicus Omega-3 hỗ trợ tốt cho mắt và não (30ml)
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                </div>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-500">Đã bán: 1.2k+</span>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-[#1a56db]">385.000đ</span>
                  <span className="text-gray-400">/ Hộp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">450.000đ</span>
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded">-15%</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Giao hàng miễn phí từ 300k</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>100% sản phẩm chính hãng</span>
                </div>
              </div>

              {/* Product specs */}
              <div className="border-t border-b py-4 mb-6 space-y-3">
                <div className="flex items-center text-sm">
                  <span className="w-32 text-gray-500">Thương hiệu:</span>
                  <span className="font-medium">BIOAMICUS OMEGA-3</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-32 text-gray-500">SKU:</span>
                  <span className="font-medium">AFDLO00039P</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-32 text-gray-500">Dạng bào chế:</span>
                  <span className="font-medium">Dung dịch</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-32 text-gray-500">Xuất xứ:</span>
                  <span className="font-medium">Italy</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-32 text-gray-500">Nhà sản xuất:</span>
                  <span className="font-medium">Bioamicus Laboratories Inc.</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-32 text-gray-500">Thành phần:</span>
                  <span className="font-medium">Omega 3, dầu cá biển huzwater acid, EPA/DHA/DPA/vitamin E...</span>
                </div>
              </div>

              {/* Quantity and Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 py-3 bg-[#1a56db] text-white font-medium rounded-lg hover:bg-[#1e40af] transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Chọn mua
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#1a56db]">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Yêu thích</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#1a56db]">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Chia sẻ</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <div className="flex border-b mb-6">
            {[
              { id: "description", label: "Mô tả sản phẩm" },
              { id: "ingredients", label: "Thành phần" },
              { id: "usage", label: "Cách dùng" },
              { id: "storage", label: "Bảo quản" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  activeTab === tab.id
                    ? "border-[#1a56db] text-[#1a56db]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Thực phẩm bảo vệ sức khỏe Omega-3 là gì?</h2>
            <h3 className="font-semibold text-gray-900 mb-2">Mô tả sản phẩm</h3>
            <p className="text-gray-600 mb-4">
              Thực phẩm bảo vệ sức khỏe Bioamicus Omega-3 là sản phẩm bổ sung Omega-3 dạng dung dịch, được chiết xuất từ
              dầu cá biển tự nhiên, giàu DHA và EPA. Sản phẩm hỗ trợ phát triển não bộ, thị lực và hệ thần kinh cho trẻ
              em từ sơ sinh.
            </p>
            <p className="text-gray-600 mb-4">
              Với công thức đặc biệt dễ uống, không mùi tanh, Bioamicus Omega-3 là sự lựa chọn hoàn hảo cho các bậc phụ
              huynh muốn bổ sung dinh dưỡng tốt nhất cho con.
            </p>

            <div className="bg-blue-50 rounded-xl p-4 my-6">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Bioamicus Omega-3 Benefits"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Pharmacist Note */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-8 flex items-start gap-4">
          <div className="w-12 h-12 bg-[#1a56db] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl text-white">👨‍⚕️</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Dược sĩ Ngô Đức Thắng</h3>
            <p className="text-sm text-gray-600">
              Dược sĩ tư vấn: "Bioamicus Omega-3 là dòng thuốc rất tốt cho hệ thống thần kinh, giúp phát triển não bộ và
              thị lực cho bé. Nên cho bé sử dụng đều đặn mỗi ngày để đạt hiệu quả tốt nhất. Nếu có thắc mắc, vui lòng
              liên hệ nhà thuốc Long Châu."
            </p>
          </div>
        </div>

        {/* Related Products */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-white rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Đánh giá sản phẩm</h2>
            <span className="text-sm text-gray-500">36 đánh giá</span>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-8 mb-8 p-6 bg-blue-50 rounded-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1a56db]">4.8</div>
              <div className="flex items-center justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 mt-1">36 đánh giá</div>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-8">{rating} ⭐</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${rating === 5 ? 80 : rating === 4 ? 15 : 5}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8">{rating === 5 ? 29 : rating === 4 ? 5 : 2}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{review.author}</span>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-3">{review.content}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#1a56db]">
                        <ThumbsUp className="w-4 h-4" />
                        Hữu ích ({review.helpful})
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#1a56db]">
                        <MessageCircle className="w-4 h-4" />
                        Trả lời
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Reviews */}
          <div className="text-center mt-6">
            <button className="text-[#1a56db] font-medium hover:underline">Xem thêm 33 đánh giá →</button>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="bg-white rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hỏi đáp</h2>

          <div className="space-y-6">
            {[
              {
                author: "Lê Hạnh",
                question: "Sản phẩm này có dùng cho trẻ sơ sinh được không ạ?",
                answer: {
                  author: "Dược sĩ Long Châu",
                  content:
                    "Dạ chào chị, sản phẩm Bioamicus Omega-3 phù hợp cho trẻ từ 0 tháng tuổi ạ. Chị có thể cho bé sử dụng theo liều lượng hướng dẫn trên bao bì.",
                },
                date: "2 ngày trước",
              },
              {
                author: "Nguyễn Văn Nam",
                question: "Có ship COD không ạ? Bao lâu thì nhận được hàng?",
                answer: {
                  author: "Dược sĩ Long Châu",
                  content:
                    "Dạ nhà thuốc có hỗ trợ ship COD toàn quốc ạ. Thời gian giao hàng từ 2-5 ngày tùy khu vực anh nhé.",
                },
                date: "3 ngày trước",
              },
            ].map((qa, index) => (
              <div key={index} className="border rounded-xl p-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-[#1a56db] text-sm font-bold">H</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{qa.author}</span>
                      <span className="text-xs text-gray-400">{qa.date}</span>
                    </div>
                    <p className="text-gray-700">{qa.question}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pl-8 bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-[#1a56db] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">LC</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[#1a56db]">{qa.answer.author}</span>
                      <span className="px-2 py-0.5 bg-blue-100 text-[#1a56db] text-xs rounded">Dược sĩ</span>
                    </div>
                    <p className="text-gray-700">{qa.answer.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ask Question */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h3 className="font-medium text-gray-900 mb-3">Đặt câu hỏi cho dược sĩ</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a56db]"
              />
              <button className="px-6 py-2 bg-[#1a56db] text-white font-medium rounded-lg hover:bg-[#1e40af] transition-colors">
                Gửi
              </button>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sản phẩm vừa xem</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
