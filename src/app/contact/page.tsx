"use client";

import Image from "next/image";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { prefix } from "@/utils/prefix";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const contactInfo = [
  {
    name: 'Địa chỉ công ty',
    description: '1602, Tổ 3, Ấp Ngọc Lâm 1, Xã Phú Thanh, Huyện Tân Phú, Tỉnh Đồng Nai',
    icon: FaMapMarkerAlt,
  },
  {
    name: 'Số điện thoại',
    description: '0911 392 277',
    icon: FaPhone,
  },
  {
    name: 'Email',
    description: 'phuchailien@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'Giờ làm việc',
    description: 'Thứ 2 - Thứ 7: 8:00 - 17:30',
    icon: FaClock,
  },
];

export default function ContactPage() {
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
              alt="Contact Banner"
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
              LIÊN HỆ
              <br className="hidden sm:block" />
              <span
                className={`block mt-4 sm:mt-6 lg:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-normal normal-case transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Hỗ trợ 24/7 - Giải đáp mọi thắc mắc
              </span>
            </h1>

            <p
              className={`mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ ngay để được tư vấn tốt nhất.
            </p>
          </div>
        </div>
        <div className="relative isolate bg-white w-full">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 w-full">
            <div className="relative px-4 sm:px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Liên hệ với chúng tôi</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Hãy liên hệ với chúng tôi nếu bạn cần tư vấn về sản phẩm hoặc báo giá.
                  Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ bạn.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  {contactInfo.map((item) => (
                    <div key={item.name} className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>
                        <strong className="font-semibold text-gray-900">{item.name}:</strong>{' '}
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <form className="px-4 sm:px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg w-full">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Họ
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Tên
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Số điện thoại
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Nội dung
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                  >
                    Gửi tin nhắn
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3912.7692330524005!2d107.4631282!3d11.2783667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317465e56f122781%3A0x260f4b6ecd83fccb!2zQ8OUTkcgVFkgVE5ISCBQSMOaQyBI4bqiSSBMScOKTg!5e0!3m2!1sen!2s!4v1768303274798!5m2!1sen!2s"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 