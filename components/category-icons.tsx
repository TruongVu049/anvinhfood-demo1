import Link from "next/link";

const categories = [
  {
    icon: "🦐",
    label: "Tôm các loại",
    count: "56 sản phẩm",
    href: "/tom",
    bgColor: "bg-red-50",
  },
  {
    icon: "🦐",
    label: "Tôm các loại",
    count: "56 sản phẩm",
    href: "/tom",
    bgColor: "bg-red-50",
  },
  {
    icon: "🦐",
    label: "Tôm các loại",
    count: "56 sản phẩm",
    href: "/tom",
    bgColor: "bg-red-50",
  },
  {
    icon: "🦐",
    label: "Tôm các loại",
    count: "56 sản phẩm",
    href: "/tom",
    bgColor: "bg-red-50",
  },
  {
    icon: "🐟",
    label: "Cá hồi - Cá ngừ",
    count: "45 sản phẩm",
    href: "/ca",
    bgColor: "bg-blue-100",
  },
  {
    icon: "🦑",
    label: "Mực - Bạch tuộc",
    count: "32 sản phẩm",
    href: "/muc",
    bgColor: "bg-purple-100",
  },
  {
    icon: "🦀",
    label: "Cua - Ghẹ",
    count: "28 sản phẩm",
    href: "/cua",
    bgColor: "bg-orange-50",
  },
  {
    icon: "🦪",
    label: "Nghêu - Sò",
    count: "25 sản phẩm",
    href: "/ngheu-so",
    bgColor: "bg-cyan-100",
  },
  {
    icon: "🥦",
    label: "Rau củ đông lạnh",
    count: "68 sản phẩm",
    href: "/rau-cu",
    bgColor: "bg-green-100",
  },
  {
    icon: "🦪",
    label: "Nghêu - Sò",
    count: "25 sản phẩm",
    href: "/ngheu-so",
    bgColor: "bg-cyan-100",
  },
  {
    icon: "🦪",
    label: "Nghêu - Sò",
    count: "25 sản phẩm",
    href: "/ngheu-so",
    bgColor: "bg-cyan-100",
  },
  {
    icon: "🦀",
    label: "Cua - Ghẹ",
    count: "28 sản phẩm",
    href: "/cua",
    bgColor: "bg-orange-50",
  },
];

export function CategoryIcons() {
  return (
    <section className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-[#1a56db] rounded-full flex items-center justify-center">
          <span className="text-white text-xs">❄️</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Danh mục nổi bật</h2>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
        {categories.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-blue-50 transition-colors group border border-gray-100 bg-white"
          >
            <div
              className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}
            >
              {category.icon}
            </div>
            <span className="text-xs text-center text-gray-700 group-hover:text-[#1a56db] font-medium leading-tight">
              {category.label}
            </span>
            <span className="text-[10px] text-gray-400">{category.count}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
