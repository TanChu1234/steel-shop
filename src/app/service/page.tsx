import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaDownload, FaCalendarAlt } from 'react-icons/fa';

export default function ServicePage() {
  return (
    <div>
      <Header />
      <main className="mt-20">
        <div className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Dịch vụ</h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Chúng tôi cung cấp các dịch vụ tư vấn, báo giá và giao hàng nhanh chóng cho mọi nhu cầu sắt thép của bạn.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-x-4">
              <FaCalendarAlt className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <p className="text-sm text-gray-500 flex-1">
                Liên hệ để được tư vấn miễn phí: 0900 000 000
              </p>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-x-2 bg-blue-900 px-4 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                <FaDownload className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Yêu cầu báo giá
              </button>
            </div>

            <div className="mt-10 sm:mt-12 lg:mt-16 space-y-10 sm:space-y-12 lg:space-y-16 lg:mt-20">
              <section>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Các dịch vụ của chúng tôi</h3>
                <ul className="mt-4 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <li className="bg-white p-6 shadow">
                    <h4 className="text-lg font-medium text-gray-900">Tư vấn kỹ thuật</h4>
                    <p className="mt-2 text-gray-600">Đội ngũ chuyên gia tư vấn giải pháp vật liệu tối ưu cho công trình.</p>
                  </li>
                  <li className="bg-white p-6 shadow">
                    <h4 className="text-lg font-medium text-gray-900">Báo giá nhanh</h4>
                    <p className="mt-2 text-gray-600">Cung cấp báo giá chi tiết và cạnh tranh trong thời gian sớm nhất.</p>
                  </li>
                  <li className="bg-white p-6 shadow">
                    <h4 className="text-lg font-medium text-gray-900">Giao hàng tận nơi</h4>
                    <p className="mt-2 text-gray-600">Vận chuyển nhanh chóng, an toàn đến công trình của bạn.</p>
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-10 sm:mt-12 lg:mt-16 bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Liên hệ dịch vụ</h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                  Để lại thông tin để chúng tôi tư vấn và báo giá phù hợp nhu cầu của bạn.
                </p>
              </div>
              <div className="mt-8 sm:mt-10 lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="email-address" className="sr-only">Địa chỉ email</label>
                  <input id="email-address" name="email-address" type="email" autoComplete="email" required className="flex-1 w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:ring-blue-900 border border-gray-300 rounded-lg" placeholder="Email của bạn" />
                  <div className="shadow sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full sm:w-auto items-center justify-center bg-blue-900 px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 rounded-lg"
                    >
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-xs sm:text-sm text-gray-500">
                  Chúng tôi cam kết bảo mật thông tin của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
