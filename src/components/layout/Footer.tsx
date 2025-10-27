  import Image from "next/image";
  import Link from "next/link";
  import {
    FaFacebook,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  import { SiZalo } from "react-icons/si"; // Zalo icon
  import { prefix } from "@/utils/prefix";

  const navigation = {
    main: [
      { name: "Trang chủ", href: "/" },
      { name: "Sản phẩm", href: "/products" },
      { name: "Dịch vụ", href: "/service" },
      { name: "Giới thiệu", href: "/about" },
      { name: "Liên hệ", href: "/contact" },
    ],
    products: [
      { name: "Thép xây dựng", href: "/products/construction-steel" },
      { name: "Thép ống - hộp - vuông", href: "/products/shape-steel" },
      { name: "Thép hình", href: "/products/alphabet-shape-steel" },
      { name: "Tôn", href: "/products/metal-sheets" },
      { name: "Lưới - xà gồ - phụ kiện", href: "/products/purlins" },
      { name: "Hộp - ống inox", href: "/products/steel-pipes" },
    ],
  };

  export default function Footer() {
    return (
      <footer
        className="bg-gray-900 w-full text-gray-300"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-3">
          {/* --- Company Logo & Name --- */}
          <div className="flex flex-col items-left mb-6 text-left space-y-3">
            <Link href="/" className="inline-block w-fit">
              <Image
                src={`${prefix}/images/logo_white.png`}
                alt="Phúc Hải Liên Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <span className="text-2xl font-bold text-white uppercase">
              CÔNG TY TNHH PHÚC HẢI LIÊN
            </span>
          </div>

          {/* --- Four Column Layout --- */}
          <div
            className="
              grid 
              grid-cols-1 sm:grid-cols-[1.4fr_0.9fr_1fr_0.8fr] 
              gap-10 text-sm items-start content-start
              mb-3
            "
          >
            {/* Column 1: Company Info */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
                Thông tin liên hệ
              </h3>
              <div className="space-y-2">
                {/* Address with Google Maps link */}
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="h-4 w-4 text-white mt-1" />
                  <Link
                    href="https://www.google.com/maps?q=CÔNG+TY+TNHH+PHÚC+HẢI+LIÊN+Đồng+Nai"
                    target="_blank"
                    className="hover:text-white transition no-underline hover:no-underline"
                  >
                    1602, Tổ 3, Ấp Ngọc Lâm 1, Xã Phú Thanh, Huyện Tân Phú, Tỉnh Đồng Nai
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="h-4 w-4 text-white" />
                  <Link
                    href="tel:02513795395"
                    className="hover:text-white transition no-underline hover:no-underline"
                  >
                    Hotline: 02513 795 395
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="h-4 w-4 text-white" />
                  <Link
                    href="tel:0911392277"
                    className="hover:text-white transition no-underline hover:no-underline"
                  >
                    Kinh doanh 1: 0911 392 277
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="h-4 w-4 text-white" />
                  <Link
                    href="tel:0339972277"
                    className="hover:text-white transition no-underline hover:no-underline"
                  >
                    Kinh doanh 2: 0339 972 277
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <FaEnvelope className="h-4 w-4 text-white mt-1" />
                  <Link
                    href="mailto:phuchailien@gmail.com"
                    className="hover:text-white transition no-underline hover:no-underline"
                  >
                    Email: phuchailien@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Liên kết */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
                Liên kết
              </h3>
              <ul className="mt-1 space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-white transition">
                      › {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Sản phẩm */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
                Sản phẩm
              </h3>
              <ul className="mt-1 space-y-2">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-white transition">
                      › {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
                Kết nối với chúng tôi
              </h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-300 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5 text-gray-900" />
                </Link>

                {/* Zalo */}
                <Link
                  href="https://zalo.me/0971298787"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-300 transition"
                  aria-label="Zalo"
                >
                  <SiZalo className="h-5 w-5 text-gray-900" />
                </Link>

                {/* Email */}
                <Link
                  href="mailto:phuchailien@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-300 transition"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-5 w-5 text-gray-900" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-gray-800 border-t border-gray-700 py-2">
          <p className="text-sm text-gray-400 text-center">
            Copyright © 2025 Phúc Hải Liên. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
