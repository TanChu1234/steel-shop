import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steel Shop - Cửa hàng Sắt Thép Chuyên Nghiệp",
  description: "Cung cấp sắt thép xây dựng chất lượng cao với giá cả cạnh tranh",
  keywords: "sắt thép, thép xây dựng, tôn, xà gồ, ống thép, lưới thép",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
        {children}
        </div>
      </body>
    </html>
  );
}
