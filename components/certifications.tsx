import { Shield, Award, Leaf, ThermometerSnowflake } from "lucide-react"

const certifications = [
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
]

export function Certifications() {
  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold-dark tracking-wider uppercase">Chứng nhận chất lượng</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-2">
            An Toàn - Uy Tín - Chất Lượng
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
                <cert.icon className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
