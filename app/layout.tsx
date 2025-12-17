import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "Nhà Thuốc Long Châu - Hệ thống nhà thuốc uy tín hàng đầu Việt Nam",
  description: "Hệ thống 2377 nhà thuốc trên toàn quốc. Thuốc, thực phẩm chức năng, dược mỹ phẩm chính hãng.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
