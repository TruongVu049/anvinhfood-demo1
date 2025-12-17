import Link from "next/link"

const healthChecks = [
  {
    icon: "🧠",
    title: "Bài kiểm tra trí nhớ và mức độ tập trung chú ý",
    href: "#",
  },
  {
    icon: "🩺",
    title: "Bài kiểm tra sàng lọc nguy cơ tiền đái tháo đường",
    href: "#",
  },
  {
    icon: "🦋",
    title: "Bài kiểm tra khả năng suy giáp",
    href: "#",
  },
]

export function HealthCheckBanner() {
  return (
    <section className="bg-gradient-to-r from-[#1a56db] to-[#3b82f6] rounded-2xl p-6 my-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Kiểm tra sức khỏe</h2>
        <p className="text-blue-100">Kết quả đánh giá sẽ cho bạn lời khuyên xử trí phù hợp!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {healthChecks.map((check, index) => (
          <Link
            key={index}
            href={check.href}
            className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              {check.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#1a56db] transition-colors leading-tight">
                {check.title}
              </h3>
              <span className="text-[#1a56db] text-sm font-medium mt-2 inline-block">Bắt đầu</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
