import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phúc Hải Liên - Chuyên Sắt Thép Xây Dựng, Tôn, Xà Gồ Chất Lượng",
  description: "Công ty TNHH Phúc Hải Liên chuyên cung cấp sắt thép xây dựng, tôn, xà gồ chất lượng cao, giá tốt tại Đồng Nai. Uy tín từ chất thép, vững chắc mọi công trình.",
  keywords: "phúc hải liên, sắt thép xây dựng, thép hòa phát, tôn hoa sen, xà gồ c z, vật liệu xây dựng đồng nai",
  openGraph: {
    title: "Phúc Hải Liên - Uy tín từ chất thép",
    description: "Cung cấp đa dạng sản phẩm sắt thép xây dựng với chất lượng đảm bảo và dịch vụ chuyên nghiệp.",
    url: 'https://phuchailien.com',
    siteName: 'Phúc Hải Liên',
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://phuchailien.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Công ty TNHH Phúc Hải Liên",
              "image": "https://phuchailien.com/images/logo.png",
              "@id": "https://phuchailien.com",
              "url": "https://phuchailien.com",
              "telephone": "0911392277",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1602, Tổ 3, Ấp Ngọc Lâm 1, Xã Phú Thanh",
                "addressLocality": "Huyện Tân Phú",
                "addressRegion": "Tỉnh Đồng Nai",
                "addressCountry": "VN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.777057,
                "longitude": 106.701419
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:30"
              },
              "sameAs": [
                "https://www.facebook.com/phuchailien"
              ]
            }),
          }}
        />
        <div className="min-h-screen bg-gray-50 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
