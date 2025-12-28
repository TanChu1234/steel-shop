"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { prefix } from "@/utils/prefix";
import { Montserrat } from "next/font/google";
import { Category } from "@/data/categories";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

interface CategoryHeroProps {
  category: Category;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
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
    <div className="relative mt-20">
      <div className="absolute inset-0">
        <Image
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover object-center"
          src={category.bannerImage || `${prefix}/images/banner_2.jpg`}
          alt={category.title}
          width={1920}
          height={500}
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>

      <div
        ref={heroRef}
        className={`relative mx-auto max-w-7xl flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] ${montserrat.className}`}
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {category.title}
        </h1>

        <p
          className={`mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {category.description || `Các sản phẩm thuộc danh mục ${category.title}`}
        </p>

        <div
          className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-x-6 transition-all duration-1000 delay-400 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/contact"
            className="bg-blue-900 px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm rounded-lg 
                      hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200"
          >
            Liên hệ báo giá
          </Link>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-white hover:text-gray-300 transition-colors"
          >
            ← Quay lại danh mục
          </Link>
        </div>
      </div>
    </div>
  );
}






