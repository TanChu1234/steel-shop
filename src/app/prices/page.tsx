import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaDownload, FaCalendarAlt } from 'react-icons/fa';

const priceCategories = [
  {
    name: 'Thép xây dựng',
    items: [
      { name: 'Thép CB400-V Φ6', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ8', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ10', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ12', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ14', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ16', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ18', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ20', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ22', price: '19,500,000', unit: 'tấn' },
      { name: 'Thép CB400-V Φ25', price: '19,500,000', unit: 'tấn' },
    ],
  },
  {
    name: 'Thép hình',
    items: [
      { name: 'Thép hình I 100', price: '21,000,000', unit: 'tấn' },
      { name: 'Thép hình I 150', price: '21,000,000', unit: 'tấn' },
      { name: 'Thép hình I 200', price: '21,000,000', unit: 'tấn' },
      { name: 'Thép hình H 100', price: '22,000,000', unit: 'tấn' },
      { name: 'Thép hình H 150', price: '22,000,000', unit: 'tấn' },
      { name: 'Thép hình H 200', price: '22,000,000', unit: 'tấn' },
      { name: 'Thép hình U 100', price: '20,500,000', unit: 'tấn' },
      { name: 'Thép hình U 150', price: '20,500,000', unit: 'tấn' },
      { name: 'Thép hình U 200', price: '20,500,000', unit: 'tấn' },
    ],
  },
  {
    name: 'Tôn các loại',
    items: [
      { name: 'Tôn mạ kẽm 0.3mm', price: '23,000,000', unit: 'tấn' },
      { name: 'Tôn mạ kẽm 0.4mm', price: '23,000,000', unit: 'tấn' },
      { name: 'Tôn mạ kẽm 0.5mm', price: '23,000,000', unit: 'tấn' },
      { name: 'Tôn lạnh 0.3mm', price: '22,500,000', unit: 'tấn' },
      { name: 'Tôn lạnh 0.4mm', price: '22,500,000', unit: 'tấn' },
      { name: 'Tôn lạnh 0.5mm', price: '22,500,000', unit: 'tấn' },
      { name: 'Tôn màu 0.3mm', price: '24,000,000', unit: 'tấn' },
      { name: 'Tôn màu 0.4mm', price: '24,000,000', unit: 'tấn' },
      { name: 'Tôn màu 0.5mm', price: '24,000,000', unit: 'tấn' },
    ],
  },
];

export default function PricesPage() {
  return (
    <div>
      <Header />
      <main>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bảng giá sản phẩm</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Bảng giá được cập nhật thường xuyên. Vui lòng liên hệ trực tiếp để có giá tốt nhất.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-x-4">
              <FaCalendarAlt className="h-5 w-5 text-gray-400" />
              <p className="text-sm text-gray-500">
                Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
              </p>
              <button
                type="button"
                className="ml-auto inline-flex items-center gap-x-2 rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                <FaDownload className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Tải bảng giá PDF
              </button>
            </div>

            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {priceCategories.map((category) => (
                <section key={category.name}>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">{category.name}</h3>
                    </div>
                    <div className="border-t border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Sản phẩm
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Đơn vị
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Giá (VNĐ)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {category.items.map((item, itemIdx) => (
                            <tr key={item.name} className={itemIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                {item.unit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                {item.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-gray-50 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Đăng ký nhận thông báo giá mới
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Để lại email để nhận thông báo khi có cập nhật giá mới nhất.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Địa chỉ email
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-blue-900 focus:ring-blue-900 sm:max-w-xs"
                    placeholder="Email của bạn"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  Chúng tôi cam kết bảo mật thông tin của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.
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