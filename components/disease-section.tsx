import Link from "next/link"

const diseaseCategories = [
  {
    title: "BỆNH NAM GIỚI",
    items: [
      { label: "U xơ tiền liệt tuyến", href: "#" },
      { label: "Liệt dương", href: "#" },
      { label: "Xuất tinh sớm", href: "#" },
    ],
  },
  {
    title: "BỆNH NỮ GIỚI",
    items: [
      { label: "U xơ tử cung", href: "#" },
      { label: "Viêm âm đạo", href: "#" },
      { label: "Rối loạn kinh nguyệt", href: "#" },
    ],
  },
  {
    title: "BỆNH NGƯỜI GIÀ",
    items: [
      { label: "Alzheimer", href: "#" },
      { label: "Parkinson", href: "#" },
      { label: "Loãng xương", href: "#" },
    ],
  },
  {
    title: "BỆNH TRẺ EM",
    items: [
      { label: "Tiêu chảy", href: "#" },
      { label: "Viêm họng", href: "#" },
      { label: "Sốt cao", href: "#" },
    ],
  },
]

export function DiseaseSection() {
  return (
    <section className="py-8 border-t">
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🏥</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Long Châu phối hợp STADA, Pymepharco lan toả</h2>
            <p className="text-sm text-gray-600">
              kiến thức y khoa về phòng tránh sỏi cạn, bệo phì và giảm cân an toàn
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {diseaseCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-bold text-sm text-[#1a56db] mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-[#1a56db]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="text-sm text-[#1a56db] font-medium mt-2 hover:underline">Xem thêm →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
