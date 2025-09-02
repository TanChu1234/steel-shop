"use client";

import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Trong thực tế, dữ liệu này sẽ được lấy từ API hoặc database
const product = {
  name: 'Thép xây dựng CB400-V Φ10',
  price: '19.500.000',
  unit: 'tấn',
  description: `
    Thép xây dựng CB400-V là loại thép cốt bê tông vằn được sản xuất theo tiêu chuẩn TCVN với độ bền cao, 
    độ dẻo tốt, khả năng chịu lực và chống ăn mòn tuyệt vời. Sản phẩm được sử dụng rộng rãi trong các công trình 
    xây dựng dân dụng và công nghiệp.
  `,
  highlights: [
    'Đạt tiêu chuẩn TCVN',
    'Độ bền cao',
    'Khả năng chống ăn mòn tốt',
    'Độ dẻo dai phù hợp',
    'Dễ dàng gia công, uốn cong',
  ],
  specifications: [
    { name: 'Đường kính', value: 'Φ10' },
    { name: 'Chiều dài tiêu chuẩn', value: '11.7m' },
    { name: 'Khối lượng lý thuyết', value: '0.617 kg/m' },
    { name: 'Giới hạn chảy', value: '≥ 400 N/mm²' },
    { name: 'Giới hạn bền', value: '≥ 570 N/mm²' },
    { name: 'Độ giãn dài', value: '≥ 14%' },
    { name: 'Tiêu chuẩn sản xuất', value: 'TCVN' },
  ],
  images: [
    {
      src: '/images/construction-steel-1.png',
      alt: 'Thép xây dựng CB400-V Φ10 - Hình 1',
    },
    {
      src: '/images/construction-steel-2.png',
      alt: 'Thép xây dựng CB400-V Φ10 - Hình 2',
    },
    {
      src: '/images/construction-steel-3.png',
      alt: 'Thép xây dựng CB400-V Φ10 - Hình 3',
    },
  ],
};

export default function ProductPage() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-6">
          {/* Image gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.images.map((image) => (
              <div key={image.src} className="aspect-h-1 aspect-w-1 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center"
                  width={600}
                  height={600}
                />
              </div>
            ))}
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Thông tin sản phẩm</h2>
              <p className="text-3xl tracking-tight text-gray-900">{product.price} đ/{product.unit}</p>

              <form className="mt-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Yêu cầu báo giá</h3>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Họ tên
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full shadow-sm focus:ring-blue-900 sm:text-sm"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full shadow-sm focus:ring-blue-900 sm:text-sm"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                      Số lượng (tấn)
                    </label>
                                          <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        min="1"
                        className="mt-1 block w-full shadow-sm focus:ring-blue-900 sm:text-sm"
                      />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Ghi chú
                    </label>
                                          <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="mt-1 block w-full shadow-sm focus:ring-blue-900 sm:text-sm"
                      />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center bg-blue-900 px-8 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  >
                    Gửi yêu cầu
                  </button>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description */}
              <div>
                <h3 className="sr-only">Mô tả</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Điểm nổi bật</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Thông số kỹ thuật</h2>

                <div className="mt-4 space-y-6">
                  <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    {product.specifications.map((spec) => (
                      <div key={spec.name} className="pt-4">
                        <dt className="font-medium text-gray-900">{spec.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 