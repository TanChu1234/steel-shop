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
    imageSrc: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
    imageAlt: 'Thép xây dựng gồm thép cuộn, thép thanh vằn, thép cây đạt tiêu chuẩn TCVN, sử dụng trong công trình dân dụng và công nghiệp',
  },
  {
    id: 2,
    name: 'Thép hình',
    description: 'Thép hình với độ bền và khả năng chịu tải cao. Đa dạng các loại như U, I, H, V, C ... ',
    href: '/products/thep-hinh',
    imageSrc: `${prefix}/images/products/thep_hinh/thep_hinh.jpg`,
    imageAlt: 'Thép hình chữ U, I, H, V dùng trong kết cấu thép, nhà xưởng, cầu đường và được sử dụng rộng rãi trong kết cấu nhà xưởng, cầu đường và cơ khí chế tạo',
  },
  {
    id: 3,
    name: 'Tôn',
    description: 'Tôn lợp, tôn lạnh, tôn mạ kẽm chất lượng cao, đa dạng mẫu mã, đảm bảo độ bền màu, chống gỉ sét và cách nhiệt tốt.',
    href: '/products/ton',
    imageSrc: `${prefix}/images/products/ton/ton_ma_kem.jpg`,
    imageAlt: 'Tôn lạnh, tôn màu, tôn kẽm chống ăn mòn, độ bền cao, cách nhiệt tốt, dùng cho mái nhà và nhà xưởng',
  },
  {
    id: 4,
    name: 'Thép ống - hộp mạ kẽm',
    description: 'Thép ống và thép hộp mạ kẽm có độ bền cao, chống gỉ sét tốt, phù hợp cho nhiều công trình xây dựng và cơ khí.',
    href: '/products/thep-ong-hop-vuong',
    imageSrc: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-ma_kem.jpg`,
    imageAlt: 'Thép ống và thép hộp mạ kẽm chất lượng cao, chống ăn mòn, độ bền vượt trội cho các công trình xây dựng',
  },
];

const stats = [
  { name: 'Năm kinh nghiệm', value: '15+' },
  { name: 'Khách hàng', value: '1000+' },
  { name: 'Đối tác nhà máy', value: '100+' },
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
            className="object-cover object-left transition-all duration-300 ease-in-out group-hover:opacity-95"
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
        <p className="mt-1 text-md text-gray-500 text-balance">{product.description}</p>
      </div>
    </div>
  );
}

// -------------------------
// 🔹 Main Page Component - FIXED
// -------------------------
export default function Home() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation({ threshold: 0.15 });
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  const companyImages = [
    `${prefix}/images/company_img/company.png`,
    `${prefix}/images/company_img/company_2.png`,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % companyImages.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, [companyImages.length]);

  useEffect(() => {
    if (partnersVisible) {
      const interval = setInterval(() => {
        setActivePartnerIndex((current) => (current + 1) % 5);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [partnersVisible]);

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
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md text-balance transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              PHÚC HẢI LIÊN
              <br className="hidden sm:block" />
              <span
                className={`block mt-4 sm:mt-6 lg:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-normal normal-case text-balance transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                href="#about"
                className="text-xs sm:text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-all duration-200"
              >
                Về chúng tôi <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>



        </div>

        {/* ---------------- Introduction Section ---------------- */}
        <div id="about" className="bg-gray-100 py-20 sm:py-28">
          <div ref={introRef} className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2
                  className={`text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-balance transition-all duration-1000 ${introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                >
                  Về Sắt Thép Phúc Hải Liên
                </h2>
                <div
                  className={`mt-6 text-lg leading-8 text-gray-600 text-balance transition-all duration-1000 delay-100 ${introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                >
                  <p>
                    Với nền tảng vững chắc và <span className="font-bold text-blue-900">hơn 15 năm kinh nghiệm</span>,
                    Phúc Hải Liên tự hào là đơn vị cung ứng sắt thép hàng đầu, đồng hành cùng hàng ngàn công trình trên khắp cả nước.
                  </p>
                  <p className="mt-4">
                    Chúng tôi không chỉ cung cấp vật liệu, mà còn mang đến <span className="font-bold text-gray-900">giải pháp tối ưu</span> giúp các nhà thầu và
                    chủ đầu tư tiết kiệm chi phí nhưng vẫn đảm bảo độ bền vững tuyệt đối cho công trình.
                  </p>
                </div>

                <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 items-start">
                  {stats.map((stat, idx) => (
                    <div
                      key={stat.name}
                      className={`flex flex-col flex-wrap justify-start transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                      style={{ transitionDelay: `${500 + idx * 100}ms` }}
                    >
                      <dd className="text-2xl font-bold leading-9 tracking-tight text-blue-900">{stat.value}</dd>
                      <dt className="text-base leading-7 text-gray-600 mt-1">{stat.name}</dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div
                className={`relative h-[300px] sm:h-[400px] lg:h-[500px] transition-all duration-1000 delay-200 ${introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
              >
                {companyImages.map((src, idx) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Giới thiệu Phúc Hải Liên"
                    width={700}
                    height={500}
                    className={`absolute inset-0 w-full h-full rounded-2xl object-cover shadow-lg transition-opacity duration-1000 ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Featured Section - FIXED ---------------- */}
        <div className="bg-white py-18">
          <div
            ref={productsRef}
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="text-center">
              <h2
                className={`text-3xl font-extrabold text-gray-900 sm:text-4xl text-balance transition-all duration-1000 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Sản phẩm nổi bật
              </h2>
              <p
                className={`mt-4 text-lg text-gray-500 text-balance transition-all duration-1000 delay-100 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
        {/* ---------------- Partners Section - FIXED ---------------- */}
        <div className="bg-gray-100 py-16">
          <div ref={partnersRef} className="mx-auto max-w-7xl px-4 lg:px-6 text-center">
            <h2
              className={`text-3xl font-extrabold text-gray-900 sm:text-4xl text-balance transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Thương hiệu phân phối
            </h2>
            <p
              className={`mt-4 text-lg text-gray-500 max-w-4xl mx-auto text-balance transition-all duration-1000 delay-100 ${partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Chúng tôi hợp tác lâu dài với các thương hiệu và nhà sản xuất uy tín trong ngành thép,
              đảm bảo nguồn cung ổn định, chất lượng đồng nhất và dịch vụ tin cậy cho khách hàng.
            </p>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
              {[
                { src: `${prefix}/images/company/hoaphat.png`, alt: 'Hòa Phát' },
                { src: `${prefix}/images/company/hsg.png`, alt: 'Hoa Sen' },
                { src: `${prefix}/images/company/sendo-logo.png`, alt: 'Sendo' },
                { src: `${prefix}/images/company/vinakyoei.png`, alt: 'Vina Kyoei' },
                { src: `${prefix}/images/company/vas.png`, alt: 'VAS' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className={`group relative flex justify-center items-center p-4 transition-all duration-700 ease-out cursor-pointer ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    } ${activePartnerIndex === idx ? '-translate-y-2' : 'hover:-translate-y-2'}`}
                  style={{ transitionDelay: `${150 + idx * 150}ms` }}
                >
                  <div className={`relative w-36 sm:w-48 h-20 sm:h-24 transition-all duration-500 z-10 ${activePartnerIndex === idx ? 'grayscale-0 opacity-100 scale-110' : 'filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain transition-transform duration-500"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-20 transition-all duration-1000 delay-700 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-balance transition-all duration-1000">
                Đối tác tin cậy trong ngành sắt thép
              </h3>
              <p className="mt-4 text-lg text-gray-500 max-w-4xl mx-auto text-balance">
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