import Link from "next/link";

const categories = [
  {
    id: 1,
    icon: "🏭",
    label: "Xi măng",
    count: "25 sản phẩm",
    href: "/xi-mang",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    icon: "🔩",
    label: "Thép xây dựng",
    count: "42 sản phẩm",
    href: "/thep",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    icon: "🧱",
    label: "Gạch - Ngói",
    count: "38 sản phẩm",
    href: "/gach-ngoi",
    bgColor: "bg-red-50",
  },
  {
    id: 4,
    icon: "🏖️",
    label: "Cát - Đá - Sỏi",
    count: "20 sản phẩm",
    href: "/cat-da",
    bgColor: "bg-yellow-50",
  },
  {
    id: 5,
    icon: "🖌️",
    label: "Sơn - Chống thấm",
    count: "56 sản phẩm",
    href: "/son",
    bgColor: "bg-purple-100",
  },
  {
    id: 6,
    icon: "🔌",
    label: "Vật tư điện",
    count: "68 sản phẩm",
    href: "/dien",
    bgColor: "bg-amber-100",
  },
  {
    id: 7,
    icon: "🚿",
    label: "Thiết bị vệ sinh",
    count: "45 sản phẩm",
    href: "/ve-sinh",
    bgColor: "bg-cyan-100",
  },
  {
    id: 8,
    icon: "🪵",
    label: "Gỗ - Ván ép",
    count: "32 sản phẩm",
    href: "/go",
    bgColor: "bg-orange-50",
  },
  {
    id: 9,
    icon: "🛠️",
    label: "Dụng cụ xây dựng",
    count: "78 sản phẩm",
    href: "/dung-cu",
    bgColor: "bg-green-100",
  },
  {
    id: 10,
    icon: "🚪",
    label: "Cửa - Khung nhôm",
    count: "35 sản phẩm",
    href: "/cua",
    bgColor: "bg-sky-100",
  },
  {
    id: 11,
    icon: "⚙️",
    label: "Phụ kiện xây dựng",
    count: "90 sản phẩm",
    href: "/phu-kien",
    bgColor: "bg-pink-50",
  },
  {
    id: 12,
    icon: "📦",
    label: "Combo tiết kiệm",
    count: "15 sản phẩm",
    href: "/combo",
    bgColor: "bg-emerald-100",
  },
];

export function CategoryIcons() {
  return (
    <section className="py-4 sm:py-8">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] sm:text-xs">🏗️</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Danh mục nổi bật</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors group border border-gray-100 bg-white"
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 ${category.bgColor} rounded-full flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform`}
            >
              {category.icon}
            </div>
            <span className="text-[10px] sm:text-xs text-center text-gray-700 group-hover:text-[#1a56db] font-medium leading-tight">
              {category.label}
            </span>
            <span className="text-[8px] sm:text-[10px] text-gray-400 hidden sm:block">{category.count}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
