'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaTruck, FaHardHat, FaHandshake, FaCalendarAlt, FaBolt } from 'react-icons/fa';
import { prefix } from '@/utils/prefix';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

// -------------------------
// 🔹 Custom Hook for Scroll Animation
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

export default function ServicePage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className={`${montserrat.className} w-full overflow-x-hidden`}>
      <Header />
      <main className="w-full">
        {/* ---------------- Hero Banner Section ---------------- */}
        <div className="relative mt-20 w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center border border-gray-900/10"
              src={`${prefix}/images/banner/banner_2.jpg`}
              alt="Service Banner"
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
              DỊCH VỤ
              <br className="hidden sm:block" />
              <span
                className={`block mt-4 sm:mt-6 lg:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-normal normal-case transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Tư vấn chuyên nghiệp - Dịch vụ tận tâm
              </span>
            </h1>

            <p
              className={`mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Chúng tôi cung cấp các dịch vụ tư vấn, báo giá và giao hàng nhanh chóng cho mọi nhu cầu sắt thép của bạn.
            </p>

            <div
              className={`mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-x-6 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <Link
                href="/contact"
                className="bg-blue-900 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm rounded-lg 
                          hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>

        {/* ---------------- Services Content Section ---------------- */}
        <div className="bg-white py-16 sm:py-24 lg:py-32 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Các dịch vụ của chúng tôi</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Đội ngũ chuyên nghiệp sẵn sàng hỗ trợ bạn với các dịch vụ tốt nhất.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-x-2">
                <FaCalendarAlt className="h-6 w-6 text-gray-400" />
                <p className="text-base sm:text-lg text-gray-500">
                  Liên hệ để được tư vấn miễn phí:{' '}
                  <a
                    href="tel:02513795395"
                    className="text-blue-900 font-semibold hover:text-blue-700 hover:underline transition-colors"
                  >
                    02513 795 395
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-16 space-y-16 lg:mt-20">
              <section>
                <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <li className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <FaBolt className="h-6 w-6 text-blue-900" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Cung cấp sắt thép xây dựng</h4>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Chuyên cung cấp các loại sắt thép xây dựng như thép cây, thép cuộn, thép ống, thép hộp, thép hình, tôn và phụ kiện. Cam kết chất lượng – đúng quy cách – giá cạnh tranh.
                    </p>
                  </li>
                  <li className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <FaHardHat className="h-6 w-6 text-yellow-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Gia công theo yêu cầu</h4>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Nhận cắt, gia công sắt thép theo kích thước yêu cầu, đáp ứng nhanh cho công trình dân dụng và công nghiệp.
                    </p>
                  </li>
                  <li className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <FaTruck className="h-6 w-6 text-red-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Vận chuyển tận nơi</h4>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Giao hàng đúng tiến độ, vận chuyển sắt thép đến tận công trình, đảm bảo an toàn và đủ số lượng.
                    </p>
                  </li>
                  <li className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <FaHandshake className="h-6 w-6 text-green-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Tư vấn & báo giá</h4>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Tư vấn tận tình, báo giá minh bạch, hỗ trợ khách hàng nhanh chóng và lâu dài.
                    </p>
                  </li>
                </ul>
              </section>
            </div>

            {/* Relocated Section Image */}
            <div className="mt-20 mb-12 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <Image
                src={`${prefix}/images/banner/banner_service.jpg`}
                alt="Công trình thực tế"
                width={1280}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-16 bg-gray-50 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Liên hệ dịch vụ</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Để lại thông tin để chúng tôi tư vấn và báo giá phù hợp nhu cầu của bạn.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">Địa chỉ email</label>
                  <input id="email-address" name="email-address" type="email" autoComplete="email" required className="w-full px-5 py-3 placeholder-gray-500 focus:ring-blue-900 sm:max-w-xs" placeholder="Email của bạn" />
                  <div className="mt-3 shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center bg-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                    >
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
