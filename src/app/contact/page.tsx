import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

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
  return (
    <div>
      <Header />
      <main className="mt-20">
        <div className="relative isolate bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20 pt-12 sm:pt-20 lg:pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Liên hệ với chúng tôi</h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
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
            <form className="px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-24 pt-12 sm:pt-16 lg:pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 sm:grid-cols-2">
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
          <div className="h-64 sm:h-80 lg:h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197156!2d106.70141931533417!3d10.777057062124266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1629789732089!5m2!1svi!2s"
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