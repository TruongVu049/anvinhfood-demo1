import Link from "next/link";
import { MapPin, Facebook } from "lucide-react";

const aboutLinks = [
  "Giới thiệu",
  "Hệ thống cửa hàng",
  "Giấy phép kinh doanh",
  "Chứng nhận an toàn thực phẩm",
  "Quy chế hoạt động",
  "Chính sách bảo quản lạnh",
  "Chính sách đổi trả",
  "Chính sách giao hàng",
  "Chính sách bảo mật",
  "Chính sách thanh toán",
  "Quy trình vận chuyển đông lạnh",
  "Cam kết chất lượng",
];

const categoryLinks = [
  "Hải sản cao cấp",
  "Hải sản bình dân",
  "Đồ ăn chế biến sẵn",
  "Combo tiết kiệm",
  "Khuyến mãi",
];

const moreLinks = [
  "Góc ẩm thực",
  "Công thức nấu ăn",
  "Cách bảo quản thực phẩm",
  "Kiến thức dinh dưỡng",
  "Tin tức khuyến mãi",
  "Tuyển dụng",
];

const guarantees = [
  { icon: "❄️", text: "Đông lạnh chuẩn", subtext: "-18°C đến -25°C" },
  {
    icon: "↩️",
    text: "Đổi trả trong vòng 7 ngày",
    subtext: "nếu không hài lòng",
  },
  { icon: "✅", text: "Cam kết 100%", subtext: "nguồn gốc rõ ràng" },
  { icon: "🚚", text: "Giao hàng lạnh", subtext: "giữ trọn độ tươi" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Guarantees */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{item.text}</div>
                  <div className="text-xs text-gray-500">{item.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Store locator banner */}
      <div className="bg-[#1a56db]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-6 h-6" />
            <span className="text-lg font-medium">
              Xem hệ thống 50+ cửa hàng trên toàn quốc
            </span>
          </div>
          <Link
            href="#"
            className="px-6 py-2.5 bg-white text-[#1a56db] rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Xem danh sách cửa hàng
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm">
              VỀ CHÚNG TÔI
            </h3>
            <ul className="space-y-2">
              {aboutLinks.slice(0, 10).map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#1a56db]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm">DANH MỤC</h3>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#1a56db]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm">
              TÌM HIỂU THÊM
            </h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#1a56db]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm">
              TỔNG ĐÀI (7:00-22:00)
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Đặt hàng</p>
                <Link
                  href="tel:19001234"
                  className="text-[#1a56db] font-bold text-lg"
                ></Link>
                <span className="text-xs text-gray-500 ml-1">(Nhánh 1)</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hỗ trợ khách hàng</p>
                <Link
                  href="tel:19001234"
                  className="text-[#1a56db] font-bold text-lg"
                >
                  1900 1234
                </Link>
                <span className="text-xs text-gray-500 ml-1">(Nhánh 2)</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Góp ý, khiếu nại</p>
                <Link
                  href="tel:19001234"
                  className="text-[#1a56db] font-bold text-lg"
                >
                  1900 1234
                </Link>
                <span className="text-xs text-gray-500 ml-1">(Nhánh 3)</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                CHỨNG NHẬN
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-20 h-10 bg-green-50 rounded flex items-center justify-center">
                  <span className="text-xs text-green-600 font-medium">
                    ATTP
                  </span>
                </div>
                <div className="w-20 h-10 bg-blue-50 rounded flex items-center justify-center">
                  <span className="text-xs text-blue-600 font-medium">
                    ISO 22000
                  </span>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                HỖ TRỢ THANH TOÁN
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                <div className="w-12 h-8 bg-blue-900 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-12 h-8 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  JCB
                </div>
                <div className="w-12 h-8 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  Momo
                </div>
                <div className="w-12 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                  ZaloPay
                </div>
                <div className="w-12 h-8 bg-blue-400 rounded text-white text-xs flex items-center justify-center">
                  VNPay
                </div>
                <div className="w-12 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center">
                  COD
                </div>
              </div>
            </div>
          </div>

          {/* Social & App */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm">
              KẾT NỐI VỚI CHÚNG TÔI
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="#"
                className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center text-white hover:opacity-80"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:opacity-80"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:opacity-80"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>© 2020 - 2025 CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ AN VĨNH</p>
          <p className="mt-2">
            • Địa chỉ: 87/23 Khu phố 4, đường Phan Văn Hớn, Phường Tân Thới
            Nhất, Quận 12, Tp HCM • Hotline: 0813.662.778 • Email:
            anvinhfood.official@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
