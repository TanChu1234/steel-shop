"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { prefix } from "@/utils/prefix";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const categories = [
  {
    title: "Thép xây dựng",
    products: [
      { name: "Thép cuộn", image: `${prefix}/images/products/thep-cuon.jpg` },
      { name: "Thép cây", image: `${prefix}/images/products/thep-cay.jpg` },
      { name: "Thép tròn", image: `${prefix}/images/products/thep-tron.jpg` },
      { name: "Thép cuộn tròn", image: `${prefix}/images/products/thep-cuon-tron.jpg` },
    ],
    link: "/products/thep-xay-dung",
  },
  {
    title: "Thép hình",
    products: [
      { name: "Thép H", image: `${prefix}/images/products/thep-h.jpg` },
      { name: "Thép I", image: `${prefix}/images/products/thep-i.jpg` },
      { name: "Thép V", image: `${prefix}/images/products/thep-v.jpg` },
      { name: "Thép U", image: `${prefix}/images/products/thep-u.jpg` },
    ],
    link: "/products/thep-hinh",
  },
  {
    title: "Thép ống - Hộp - Vuông",
    products: [
      { name: "Thép ống", image: `${prefix}/images/products/thep-ong.jpg` },
      { name: "Thép hộp chữ nhật", image: `${prefix}/images/products/thep-hop-chu-nhat.jpg` },
      { name: "Thép hộp vuông", image: `${prefix}/images/products/thep-hop-vuong.jpg` },
      { name: "Ống thép mạ kẽm", image: `${prefix}/images/products/ong-thep-ma-kem.jpg` },
    ],
    link: "/products/thep-ong-hop-vuong",
  },
  {
    title: "Tôn",
    products: [
      { name: "Tôn lạnh", image: `${prefix}/images/products/ton-lanh.jpg` },
      { name: "Tôn kẽm", image: `${prefix}/images/products/ton-kem.jpg` },
      { name: "Tôn màu", image: `${prefix}/images/products/ton-mau.jpg` },
      { name: "Tôn hoa cương", image: `${prefix}/images/products/ton-hoa-cuong.jpg` },
    ],
    link: "/products/ton",
  },
  {
    title: "Lưới - Xà gồ - Phụ kiện",
    products: [
      { name: "Lưới thép", image: `${prefix}/images/products/luoi-thep.jpg` },
      { name: "Xà gồ C", image: `${prefix}/images/products/xago-c.jpg` },
      { name: "Xà gồ Z", image: `${prefix}/images/products/xago-z.jpg` },
      { name: "Phụ kiện thép", image: `${prefix}/images/products/phu-kien-thep.jpg` },
    ],
    link: "/products/luoi-xa-go-phu-kien",
  },
  {
    title: "Hộp - Ống Inox",
    products: [
      { name: "Ống Inox tròn", image: `${prefix}/images/products/ong-inox-tron.jpg` },
      { name: "Hộp Inox vuông", image: `${prefix}/images/products/hop-inox-vuong.jpg` },
      { name: "Hộp Inox chữ nhật", image: `${prefix}/images/products/hop-inox-chu-nhat.jpg` },
      { name: "Phụ kiện Inox", image: `${prefix}/images/products/phu-kien-inox.jpg` },
    ],
    link: "/products/hop-ong-inox",
  },
];

export default function ProductsPage() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* --- Hero Banner (fixed full-size like homepage) --- */}
      <div className="relative mt-20">
        {/* Fixed banner height and full width */}
        <div className="relative w-full h-[700px] overflow-hidden">
          <Image
            src={`${prefix}/images/banner_2.jpg`}
            alt="Products Banner"
            fill
            priority
            className="object-cover object-center border border-gray-900/10"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>

        {/* Centered content */}
        <div
          ref={heroRef}
          className={`absolute inset-0 flex flex-col justify-center items-start text-left px-6 lg:px-8 ${montserrat.className}`}
        >
          <div className="max-w-7xl mx-auto">
            <h1
              className={`text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              SẢN PHẨM
              <br className="hidden sm:block" />
              <span
                className={`block mt-10 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-normal normal-case transition-all duration-1000 delay-200 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Chất lượng cao - Giá cả cạnh tranh
              </span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Cung cấp đa dạng các loại thép xây dựng, thép hình, thép ống - hộp - vuông
              và inox chất lượng cao, đáp ứng mọi nhu cầu công trình.
            </p>

            <div
              className={`mt-10 flex items-center gap-x-6 transition-all duration-1000 delay-500 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/contact"
                className="bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm rounded-lg 
                          hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Liên hệ tư vấn
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-all duration-200"
              >
                Về chúng tôi <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Product Categories --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((cat, index) => (
          <section key={index} className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-blue-900 pl-3 uppercase">
              {cat.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cat.products.map((product, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-gray-800 font-medium">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link
                href={cat.link}
                className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors"
              >
                Xem thêm {cat.title.toLowerCase()}
              </Link>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
