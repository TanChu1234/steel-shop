'use client';

import Image from 'next/image';
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

const stats = [
  { name: 'Năm kinh nghiệm', value: '15+' },
  { name: 'Khách hàng tin tưởng', value: '1000+' },
  { name: 'Dự án hoàn thành', value: '500+' },
  { name: 'Đối tác nhà máy', value: '10+' },
];

const values = [
  {
    name: 'Chất lượng',
    description:
      'Cam kết cung cấp sản phẩm đạt tiêu chuẩn chất lượng cao, có đầy đủ giấy tờ chứng nhận xuất xứ và chất lượng.',
  },
  {
    name: 'Uy tín',
    description:
      'Luôn đặt chữ tín lên hàng đầu, đảm bảo giao hàng đúng số lượng, đúng chất lượng và đúng thời gian cam kết.',
  },
  {
    name: 'Chuyên nghiệp',
    description:
      'Đội ngũ nhân viên được đào tạo chuyên nghiệp, am hiểu sâu về sản phẩm và nhiệt tình tư vấn cho khách hàng.',
  },
  {
    name: 'Giá cả cạnh tranh',
    description:
      'Với nguồn hàng trực tiếp từ nhà máy và quy mô hoạt động lớn, chúng tôi cam kết mang đến mức giá tốt nhất cho khách hàng.',
  },
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Chứng nhận hệ thống quản lý chất lượng',
    image: `${prefix}/images/iso-9001.png`,
  },
  {
    name: 'TCVN',
    description: 'Chứng nhận sản phẩm đạt tiêu chuẩn Việt Nam',
    image: `${prefix}/images/tcvn.png`,
  },
  {
    name: 'JIS',
    description: 'Chứng nhận đạt tiêu chuẩn công nghiệp Nhật Bản',
    image: `${prefix}/images/jis.png`,
  },
];

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div className={montserrat.className}>
      <Header />
      <main>
        {/* ---------------- Hero Section ---------------- */}
        <div className="relative mt-20">
          <div className="absolute inset-0">
            <Image
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center border border-gray-900/10"
              src={`${prefix}/images/banner_2.jpg`}
              alt="Steel Shop Banner"
              width={1920}
              height={700}
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
          </div>

          <div
            ref={heroRef}
            className="relative mx-auto max-w-7xl flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
          >
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide text-white uppercase leading-tight drop-shadow-md transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Về chúng tôi
            </h1>

            <p
              className={`mt-4 sm:mt-6 md:mt-8 lg:mt-12 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Phúc Hải Liên tự hào là một trong những đơn vị hàng đầu trong lĩnh vực cung cấp sắt thép xây dựng tại Việt Nam.
              <br className="hidden sm:block" />
              Với hơn 15 năm kinh nghiệm, chúng tôi luôn nỗ lực mang đến cho khách hàng những sản phẩm chất lượng cao với
              giá cả cạnh tranh nhất.
            </p>

            <div className="mx-auto mt-4 sm:mt-6 lg:mt-2 max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 sm:mt-20">
                {stats.map((stat, idx) => (
                  <div 
                    key={stat.name} 
                    className={`flex flex-col-reverse transition-all duration-1000 ${
                      heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 100}ms` }}
                  >
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        
        {/* ---------------- Introduction Section ---------------- */}
        <div className="bg-gray-100 py-12 sm:py-16 md:py-24 lg:py-32">
          <div ref={introRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
              
              {/* Text */}
              <div>
                <h2 
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 transition-all duration-1000 ${
                    introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                >
                  Giới thiệu chung
                </h2>
                <p 
                  className={`mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600 transition-all duration-1000 delay-100 ${
                    introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                >
                  Công ty TNHH <span className="font-bold text-xl text-gray-900">PHÚC HẢI LIÊN </span> 
                  được thành lập với sứ mệnh cung cấp các sản phẩm sắt thép xây dựng chất lượng cao,
                  đáp ứng nhu cầu ngày càng cao của thị trường xây dựng và công nghiệp. 
                  Trụ sở công ty đặt tại 1602, tổ 3, ấp Ngọc Lâm 1, xã Phú Thanh, huyện Tân Phú, tỉnh Đồng Nai.
                </p>
                <p 
                  className={`mt-4 text-lg leading-8 text-gray-600 transition-all duration-1000 delay-200 ${
                    introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                >
                  <span className="font-bold text-xl text-gray-900">Trải qua hơn  15 năm </span> hình thành và phát triển,  
                  Phúc Hải Liên không ngừng nỗ lực để trở thành đối tác tin cậy 
                  của các công trình dân dụng, công nghiệp và hạ tầng trên toàn quốc.
                  Chúng tôi cung cấp đa dạng các loại thép xây dựng: thép cây, thép cuộn, thép hình, thép ống,… 
                  từ các thương hiệu uy tín trong và ngoài nước.
                </p>
                <p 
                  className={`mt-4 text-lg leading-8 text-gray-600 transition-all duration-1000 delay-300 ${
                    introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                >
                  <span className="font-bold text-xl text-gray-900"> Tầm nhìn: </span>Trở thành một trong những doanh nghiệp cung cấp sắt thép xây dựng uy tín 
                  hàng đầu khu vực miền Nam, góp phần xây dựng những công trình <span className="font-bold text-xl text-gray-900">bền vững – an toàn – chất lượng </span>.
                </p>
              </div>

              {/* Image */}
              <div 
                className={`relative transition-all duration-1000 delay-200 ${
                  introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
              >
                <Image
                  src={`${prefix}/images/about_intro.jpg`}
                  alt="Giới thiệu Phúc Hải Liên"
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>

            </div>
          </div>
        </div>

        {/* ---------------- Values Section ---------------- */}
        <div className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
          <div ref={valuesRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <h2 
                className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-all duration-1000 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Giá trị cốt lõi
              </h2>
              <p 
                className={`mt-6 text-lg leading-8 text-gray-600 transition-all duration-1000 delay-100 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Với phương châm <span className="font-bold text-xl text-gray-900"> &ldquo;Uy tín từ chất thép – Vững chắc mọi công trình&rdquo; </span> ,
                Phúc Hải Liên cam kết mang đến cho khách hàng những sản phẩm sắt thép chất lượng cao, đúng chuẩn kỹ thuật, 
                cùng dịch vụ tư vấn tận tâm và giá cả cạnh tranh.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {values.map((value, idx) => (
                <div 
                  key={value.name} 
                  className={`relative pl-9 transition-all duration-1000 ${
                    valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + idx * 150}ms` }}
                >
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 bg-blue-900" />
                    {value.name}
                  </dt>{' '}
                  <dd className="inline">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ---------------- Certifications Section ---------------- */}
        <div className="bg-gray-100 py-12 sm:py-16 md:py-24 lg:py-32">
          <div ref={certsRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 
                className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl transition-all duration-1000 ${
                  certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Chứng nhận & Chứng chỉ
              </h2>
              <p 
                className={`mt-6 text-lg leading-8 text-gray-600 transition-all duration-1000 delay-100 ${
                  certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Sản phẩm của chúng tôi đạt các tiêu chuẩn chất lượng quốc gia và quốc tế.
              </p>
            </div>
            <div className="mx-auto mt-10 sm:mt-12 lg:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {certifications.map((cert, idx) => (
                <article
                  key={cert.name}
                  className={`relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-6 sm:px-8 pb-6 sm:pb-8 pt-48 sm:pt-56 md:pt-64 lg:pt-80 transition-all duration-1000 ${
                    certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + idx * 150}ms` }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <span className="absolute inset-0" />
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{cert.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}