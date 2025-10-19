import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
    { name: "Thép hình", href: "/products/shape-steel" },
    { name: "Tôn các loại", href: "/products/metal-sheets" },
    { name: "Lưới - Xà gồ - Phụ kiện", href: "/products/purlins" },
    { name: "Dịch vụ", href: "/products/steel-pipes" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-6xl px-6 py-4 lg:px-3">

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
          <span className="text-xl font-bold text-white uppercase">
            CÔNG TY TNHH PHÚC HẢI LIÊN
          </span>
        </div>

        {/* --- Four Column Layout --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm items-start">

          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
              Thông tin liên hệ
            </h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 text-white mt-1" />
                <span>Ấp Trảm Lạc, Xã Đức Lập, Tỉnh Tây Ninh</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-white" />
                <span>Hotline: 0971 298 787</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-white" />
                <span>Kinh doanh 1: 0974 894 075</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-white" />
                <span>Kinh doanh 2: 0867 298 787</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-white" />
                <span>Kinh doanh 3: 0901 298 787</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-4 w-4 text-white mt-1" />
                <span>Email: thpsteel8787@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Liên kết */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
              Liên kết
            </h3>
            <ul className="mt-3 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition">
                    › {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sản phẩm */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
              Sản phẩm
            </h3>
            <ul className="mt-3 space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition">
                    › {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-3 pb-1 border-b-2 border-white inline-block">
              Kết nối với chúng tôi
            </h3>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-300 transition"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5 text-gray-900" />
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
