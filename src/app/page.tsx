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

// Custom hook for scroll animations with proper typing
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
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
}

const featuredProducts = [
  {
    id: 1,
    name: 'Thép xây dựng',
    description: 'Thép cuộn, thép thanh vằn và thép tròn trơn chất lượng cao, đạt tiêu chuẩn TCVN, đảm bảo độ bền và an toàn cho công trình.',
    href: '/products/construction-steel',
    imageSrc: `${prefix}/images/thep_xay_dung.jpg`,
    imageAlt: 'Thép xây dựng gồm thép cuộn, thép thanh vằn, thép cây đạt tiêu chuẩn TCVN, sử dụng trong công trình dân dụng và công nghiệp',
  },
  {
    id: 2,
    name: 'Thép hình',
    description: 'Thép hình U, I, H, V, C với độ cứng và khả năng chịu tải cao, được sử dụng rộng rãi trong kết cấu nhà xưởng, cầu đường và cơ khí chế tạo.',
    href: '/products/alphabet-shape-steel',
    imageSrc: `${prefix}/images/thep_hinh.jpg`,
    imageAlt: 'Thép hình chữ U, I, H, V dùng trong kết cấu thép, nhà xưởng, cầu đường và công trình cơ khí',
  },
  {
    id: 3,
    name: 'Tôn',
    description: 'Tôn lợp, tôn lạnh, tôn mạ kẽm chất lượng cao, đa dạng mẫu mã, đảm bảo độ bền màu, chống gỉ sét và cách nhiệt tốt cho công trình.',
    href: '/products/metal-sheets',
    imageSrc: `${prefix}/images/ton.jpg`,
    imageAlt: 'Tôn lạnh, tôn màu, tôn kẽm chống ăn mòn, độ bền cao, dùng cho mái nhà và nhà xưởng',
  },
  {
    id: 4,
    name: 'Xà gồ',
    description: 'Xà gồ thép C, Z mạ kẽm có độ cứng cao, trọng lượng nhẹ, thích hợp cho kết cấu mái và khung nhà thép tiền chế.',
    href: '/products/purlins',
    imageSrc: `${prefix}/images/xago.jpg`,
    imageAlt: 'Xà gồ thép C và Z mạ kẽm, dùng trong kết cấu mái và khung nhà tiền chế, độ bền cao chống ăn mòn',
  },
];

export default function Home() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div>
      <Header />
      <main>
        {/* Hero section with scroll animation */}
        <div className="relative mt-20">
          <div className="absolute inset-0">
            <Image
              className="w-full h-[700px] object-cover object-center border border-gray-900/10"
              src={`${prefix}/images/banner_2.jpg`}
              alt="Steel Shop Banner"
              width={1920}
              height={700}
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
          </div>

          {/* Content with scroll animation */}
          <div
            ref={heroRef}
            className={`relative mx-auto max-w-7xl flex flex-col justify-center items-start text-left px-6 lg:px-8 py-28 sm:py-30 lg:py-30 ${montserrat.className}`}
            style={{ minHeight: '700px' }} // ensures text stays centered in full image
          >
            <h1
              className={`text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              PHÚC HẢI LIÊN
              <br className="hidden sm:block" />
              <span
                className={`block mt-10 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-normal normal-case transition-all duration-1000 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Uy tín từ chất thép - Vững chắc mọi công trình
              </span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Cung cấp đa dạng sản phẩm sắt thép xây dựng với chất lượng đảm bảo,
              giá cả cạnh tranh và dịch vụ chuyên nghiệp.
            </p>
          </div>
        </div>

        {/* Featured section with scroll animation */}
        <div className="bg-white">
            <div 
            ref={productsRef}
            className="mx-auto max-w-2xl px-4 py-10  sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8"
          >
            {/* Centered heading and description */}
            <div className="text-center">
              <h2
                className={`text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000 ${
                  productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Sản phẩm nổi bật
              </h2>
              <p
                className={`mt-4 text-lg text-gray-500 transition-all duration-1000 delay-100 ${
                  productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Khám phá các sản phẩm sắt thép chất lượng cao của chúng tôi
              </p>
            </div>

            {/* Product Grid */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product, index) => {
                const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
                return (
                  <div 
                    key={product.id}
                    ref={ref}
                    className={`group relative transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white rounded-xl shadow-md border border-gray-200 group-hover:shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-64 w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-95"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-700">
                          <Link href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-md text-gray-500">{product.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${
              productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href="/products"
                className="inline-block bg-blue-900 px-8 py-3 text-center font-medium text-white rounded-lg
                          hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 ease-out"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>

        </div>
        
        {/* Certificates section with scroll animation */}
        <div className="bg-white py-10  ">
          <div 
            ref={certsRef}
            className="mx-auto max-w-7xl px-4 lg:px-6 text-center"
          >
            <h2 className={`text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000 ${
              certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              Chứng chỉ & Giải thưởng
            </h2>
            <p className={`mt-4 text-lg text-gray-500 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
              certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              Chúng tôi tự hào đạt được các chứng chỉ chất lượng quốc tế, đảm bảo sản phẩm thép đáp ứng tiêu chuẩn cao nhất.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {[
                { src: `${prefix}/images/certification_1.jpg`, alt: 'ISO 9001' },
                { src: `${prefix}/images/certification_2.jpg`, alt: 'ISO 14001' },
                { src: `${prefix}/images/certification_3.jpg`, alt: 'OHSAS 18001' },
                { src: `${prefix}/images/certification_1.jpg`, alt: 'Award' },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className={`flex justify-center items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 ${
                    certsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={80}
                    height={250}
                    className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners section with scroll animation */}
        <div className="bg-gray-50 py-16  ">
          <div 
            ref={partnersRef}
            className="mx-auto max-w-7xl px-4 lg:px-6 text-center"
          >
            <h2 className={`text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-1000 ${
              partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              Đối tác chiến lược
            </h2>
            <p className={`mt-4 text-lg text-gray-500 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
              partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              Chúng tôi hợp tác lâu dài với các thương hiệu và nhà sản xuất uy tín trong ngành thép,
              đảm bảo nguồn cung ổn định, chất lượng đồng nhất và dịch vụ tin cậy cho khách hàng.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {[
                { src: `${prefix}/images/hoaphat.jpg`, alt: 'Hòa Phát' },
                { src: `${prefix}/images/hsg.jpg`, alt: 'Hòa Sen' },
                { src: `${prefix}/images/sendo-logo.jpg`, alt: 'Sendo' },
                { src: `${prefix}/images/vinakyoei.jpg`, alt: 'Vina Kyoei' },
              ].map((partner, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-center items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 ${
                    partnersVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={80}
                    className="h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className={`mt-20 transition-all duration-1000 delay-700 ${
              partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Đối tác tin cậy trong ngành sắt thép
              </h3>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến giải pháp toàn diện từ chất lượng sản phẩm,
                giá cả hợp lý đến dịch vụ giao hàng nhanh chóng, giúp khách hàng an tâm trong mọi dự án.
              </p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}