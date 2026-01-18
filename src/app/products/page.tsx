"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { prefix } from "@/utils/prefix";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

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

import { categories } from "@/data/categories";

// -------------------------
// 🔹 Category Section Component
// -------------------------
interface CategorySectionProps {
  category: typeof categories[0];
}

function CategorySection({ category }: CategorySectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="mb-14">
      <h2
        className={`text-3xl font-extrabold text-gray-900 mb-6 border-l-4 border-blue-900 pl-3 uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
      >
        {category.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {category.products.slice(0, 4).map((product, i) => (
          <div
            key={i}
            className={`group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
              {product.description && (
                <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`text-center mt-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <Link
          href={category.link}
          className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 hover:scale-105 transform transition-all duration-200"
        >
          Xem thêm
        </Link>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      <Header />

      {/* --- Hero Banner --- */}
      <div className="relative mt-20 w-full overflow-hidden">
        {/* Fixed banner height and full width */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center border border-gray-900/10"
            src={`${prefix}/images/banner/banner_2.jpg`}
            alt="Products Banner"
            width={1920}
            height={700}
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>

        {/* Content aligned left like hero section */}
        <div
          ref={heroRef}
          className={`relative mx-auto max-w-7xl flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 w-full ${montserrat.className} min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]`}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            SẢN PHẨM
            <br className="hidden sm:block" />
            <span
              className={`block mt-4 sm:mt-6 lg:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-normal normal-case transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Chất lượng cao - Giá cả cạnh tranh
            </span>
          </h1>

          <p
            className={`mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Cung cấp đa dạng các loại thép xây dựng, thép hình, thép ống - hộp - vuông
            và inox chất lượng cao, đáp ứng mọi nhu cầu công trình.
          </p>

          <div
            className={`mt-6 sm:mt-8 lg:mt-10 flex items-center gap-x-6 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <Link
              href="/contact"
              className="bg-blue-900 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm rounded-lg 
                        hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </div>

      {/* --- Product Categories --- */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        {categories.map((cat, index) => (
          <CategorySection key={index} category={cat} />
        ))}
      </main>

      <Footer />
    </div>
  );
}