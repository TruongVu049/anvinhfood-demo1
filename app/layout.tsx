import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "MeU Solutions - Vật Liệu Xây Dựng Chất Lượng",
  description: "MeU Solutions - Chuyên cung cấp vật liệu xây dựng chính hãng, giá tốt nhất thị trường",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/logo.png" },
      { rel: "android-chrome-512x512", url: "/logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
