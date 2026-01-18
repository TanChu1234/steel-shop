'use client';

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { prefix } from '@/utils/prefix';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

// -------------------------
// 🔹 Custom Hook - FIXED
// -------------------------
interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // FIX: Only update if state actually changes
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, isVisible]); // FIX: Added isVisible to dependencies

  return { ref, isVisible };
}

// -------------------------
// 🔹 Data
// -------------------------
const featuredProducts = [
  {
    id: 1,
    name: 'Thép xây dựng',
    description: 'Thép cuộn, thép thanh vằn và thép tròn trơn chất lượng cao, đạt tiêu chuẩn TCVN.',
    href: '/products/thep-xay-dung',
    imageSrc: `${prefix}/images/thep_xay_dung.jpg`,
    imageAlt: 'Thép xây dựng gồm thép cuộn, thép thanh vằn, thép cây đạt tiêu chuẩn TCVN, sử dụng trong công trình dân dụng và công nghiệp',
  },
  {
    id: 2,
    name: 'Thép hình',
    description: 'Thép hình với độ bền và khả năng chịu tải cao. Đa dạng các loại như U, I, H, V, C ... ',
    href: '/products/thep-hinh',
    imageSrc: `${prefix}/images/thep_hinh.jpg`,
    imageAlt: 'Thép hình chữ U, I, H, V dùng trong kết cấu thép, nhà xưởng, cầu đường và được sử dụng rộng rãi trong kết cấu nhà xưởng, cầu đường và cơ khí chế tạo',
  },
  {
    id: 3,
    name: 'Tôn',
    description: 'Tôn lợp, tôn lạnh, tôn mạ kẽm chất lượng cao, đa dạng mẫu mã, đảm bảo độ bền màu, chống gỉ sét và cách nhiệt tốt.',
    href: '/products/ton',
    imageSrc: `${prefix}/images/ton.jpg`,
    imageAlt: 'Tôn lạnh, tôn màu, tôn kẽm chống ăn mòn, độ bền cao, cách nhiệt tốt, dùng cho mái nhà và nhà xưởng',
  },
  {
    id: 4,
    name: 'Thép ống - hộp mạ kẽm',
    description: 'Thép ống và thép hộp mạ kẽm có độ bền cao, chống gỉ sét tốt, phù hợp cho nhiều công trình xây dựng và cơ khí.',
    href: '/products/thep-ong-hop-vuong',
    imageSrc: `${prefix}/images/thep_hop_ma_kem.jpg`,
    imageAlt: 'Thép ống và thép hộp mạ kẽm chất lượng cao, chống ăn mòn, độ bền vượt trội cho các công trình xây dựng',
  },
];

// -------------------------
// 🔹 ProductCard Component - FIXED
// -------------------------
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  };
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-full overflow-hidden bg-white rounded-xl shadow-md border border-gray-200 group-hover:shadow-xl group-hover:scale-105 transition-transform duration-300">
        {/* FIX: Removed aspect-ratio classes and fixed image styling */}
        <div className="relative h-64 w-full">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-95"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className="mt-4">
        {/* FIX: Added relative positioning for the link overlay */}
        <div className="relative">
          <h3 className="text-lg font-bold text-gray-700">
            <Link href={product.href} className="relative z-10">
              {product.name}
            </Link>
          </h3>
          {/* FIX: Added absolute overlay for the entire card click area */}
          <Link
            href={product.href}
            className="absolute inset-0 z-0"
            aria-label={`Xem chi tiết ${product.name}`}
          />
        </div>
        <p className="mt-1 text-md text-gray-500">{product.description}</p>
      </div>
    </div>
  );
}

// -------------------------
// 🔹 Main Page Component - FIXED
// -------------------------
export default function Home() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div className={`${montserrat.className} w-full overflow-x-hidden`}>
      <Header />
      <main className="w-full">
        {/* ---------------- Hero Section - FIXED ---------------- */}
        <div className="relative mt-20 w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center border border-gray-900/10"
              src={`${prefix}/images/banner/banner_2.jpg`}
              alt="Steel Shop Banner"
              width={1920}
              height={700}
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
          </div>

          <div
            ref={heroRef}
            className="relative mx-auto max-w-7xl flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
          >
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              PHÚC HẢI LIÊN
              <br className="hidden sm:block" />
              <span
                className={`block mt-4 sm:mt-6 lg:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-normal normal-case transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Uy tín từ chất thép - Vững chắc mọi công trình
              </span>
            </h1>

            <p
              className={`mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Cung cấp đa dạng sản phẩm sắt thép xây dựng với chất lượng đảm bảo,
              giá cả cạnh tranh và dịch vụ chuyên nghiệp.
            </p>

            <div
              className={`mt-6 sm:mt-8 lg:mt-10 flex flex-row items-center gap-3 sm:gap-x-6 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <Link
                href="/product"
                className="bg-blue-900 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm rounded-lg 
                          hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/about"
                className="text-xs sm:text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-all duration-200"
              >
                Về chúng tôi <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>



        </div>

        {/* ---------------- Featured Section - FIXED ---------------- */}
        <div className="bg-white py-24 sm:py-32">
          <div
            ref={productsRef}
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="text-center">
              <h2
                className={`text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Sản phẩm nổi bật
              </h2>
              <p
                className={`mt-4 text-lg text-gray-500 transition-all duration-1000 delay-100 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Khám phá các sản phẩm sắt thép chất lượng cao của chúng tôi
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <div
              className={`mt-12 text-center transition-all duration-1000 delay-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <Link
                href="/products"
                className="inline-block bg-blue-900 px-8 py-3 text-center font-medium text-white rounded-lg hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 ease-out"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>
        </div>

        {/* ---------------- Certificates Section - FIXED ---------------- */}
        <div className="bg-gray-100 py-18 ">
          <div ref={certsRef} className="mx-auto max-w-7xl px-4 lg:px-6 text-center">
            <h2
              className={`text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000 ${certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Chứng chỉ & Giải thưởng
            </h2>
            <p
              className={`mt-4 text-lg text-gray-500 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Chúng tôi tự hào đạt được các chứng chỉ chất lượng quốc tế, đảm bảo sản phẩm thép đáp
              ứng tiêu chuẩn cao nhất.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap- mb-8 justify-items-center">
              {[
                { src: `${prefix}/images/certificates/certification_1.jpg`, alt: "ISO 9001" },
                { src: `${prefix}/images/certificates/certification_2.jpg`, alt: "ISO 14001" },
                { src: `${prefix}/images/certificates/certification_3.jpg`, alt: "OHSAS 18001" },
                { src: `${prefix}/images/certificates/certification_1.jpg`, alt: "Award" },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className={`flex justify-center items-center
                    w-full max-w-[160px]
                    transition-all duration-700
                    ${certsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <div className="relative w-32 sm:w-36 aspect-[3/4]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Partners Section - FIXED ---------------- */}
        <div className="bg-white py-16">
          <div ref={partnersRef} className="mx-auto max-w-7xl px-4 lg:px-6 text-center">
            <h2
              className={`text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Đối tác chiến lược
            </h2>
            <p
              className={`mt-4 text-lg text-gray-500 max-w-4xl mx-auto transition-all duration-1000 delay-100 ${partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Chúng tôi hợp tác lâu dài với các thương hiệu và nhà sản xuất uy tín trong ngành thép,
              đảm bảo nguồn cung ổn định, chất lượng đồng nhất và dịch vụ tin cậy cho khách hàng.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {[
                { src: `${prefix}/images/company/hoaphat.png`, alt: 'Hòa Phát' },
                { src: `${prefix}/images/company/hsg.png`, alt: 'Hoa Sen' },
                { src: `${prefix}/images/company/sendo-logo.png`, alt: 'Sendo' },
                { src: `${prefix}/images/company/vinakyoei.png`, alt: 'Vina Kyoei' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className={`flex justify-center items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <div className="relative w-48 h-24">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-20 transition-all duration-1000 delay-700 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000">
                Đối tác tin cậy trong ngành sắt thép
              </h3>
              <p className="mt-4 text-lg text-gray-500 max-w-4xl mx-auto">
                Chúng tôi cam kết mang đến giải pháp toàn diện từ chất lượng sản phẩm,
                giá cả hợp lý đến dịch vụ giao hàng nhanh chóng, giúp khách hàng an tâm trong mọi
                dự án.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}