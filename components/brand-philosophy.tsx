import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BrandPhilosophy() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/frozen-seafood-processing-facility-modern-clean.jpg"
          alt="An Vinh Food Processing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#1a56db] text-sm font-medium tracking-wider uppercase mb-4">
            Triết lý thương hiệu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Tươi Ngon Từ Biển,
            <br />
            An Toàn Đến Bàn Ăn
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Với công nghệ cấp đông IQF hiện đại, mỗi sản phẩm của An Vinh Food
            được giữ trọn hương vị và dinh dưỡng tự nhiên. Chúng tôi cam kết
            mang đến những bữa ăn ngon lành, an toàn và tiện lợi cho mọi gia
            đình Việt.
          </p>
          <Link href="/ve-chung-toi">
            <Button
              size="lg"
              className="bg-[#1a56db] text-white rounded-full px-8 group"
            >
              Tìm hiểu thêm
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
