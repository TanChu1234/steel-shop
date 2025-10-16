import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { prefix } from '@/utils/prefix';

const featuredProducts = [
  {
    id: 1,
    name: 'Thép xây dựng',
    description: 'Thép hộp vuông, chữ nhật, các loại kích thước tiêu chuẩn',
    href: '/products/construction-steel',
    imageSrc: `${prefix}/images/thep_xay_dung.jpg`,
    imageAlt: 'Thép xây dựng',
  },
  {
    id: 2,
    name: 'Ống thép mạ kẽm',
    description: 'Ống thép mạ kẽm các loại kích thước tiêu chuẩn',
    href: '/products/galvanized-steell',
    imageSrc: `${prefix}/images/ong_ma_kem.jpg`,
    imageAlt: 'Ống thép mạ kẽm',
  },
  {
    id: 3,
    name: 'Tôn mạ kẽm',
    description: 'Tôn mạ kẽm chất lượng cao, độ bền cao',
    href: '/products/metal-sheets',
    imageSrc: `${prefix}/images/galvanized-steel.jpg`,
    imageAlt: 'Tôn mạ kẽm',
  },
  {
    id: 4,
    name: 'Xà gồ C',
    description: 'Xà gồ C mạ kẽm chất lượng cao',
    href: '/products/purlins',
    imageSrc: `${prefix}/images/c-purlin.jpg`,
    imageAlt: 'Xà gồ C',
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover border border-gray-900/10"
              src={`${prefix}/images/hero-banner.jpg`}
              alt="Steel Shop Banner"
              width={1920}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
          </div>

          {/* Balanced content area */}
          <div className="relative mx-auto max-w-7xl flex flex-col justify-center items-start text-left px-6 lg:px-8 py-32 sm:py-36 lg:py-40">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              PHÚC HẢI LIÊN <br className="hidden sm:block" />
              <span className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Uy tín từ chất thép - Vững chắc mọi công trình
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-gray-300">
              Cung cấp đa dạng sản phẩm sắt thép xây dựng với chất lượng đảm bảo, 
              giá cả cạnh tranh và dịch vụ chuyên nghiệp.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/products"
                className="bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm rounded-lg 
                          hover:bg-blue-800 hover:scale-105 transform transition-transform duration-200 
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-300 hover: transition-all duration-200"
              >
                Liên hệ ngay <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured section */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sản phẩm nổi bật</h2>
            <p className="mt-4 text-lg text-gray-500">
              Khám phá các sản phẩm sắt thép chất lượng cao của chúng tôi
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105">
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
              ))}
            </div>

            <div className="mt-12 text-center">
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

        {/* Partners section */}
        <div className="bg-gray-100 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
              Đối tác chiến lược
            </h2>
            <p className="mt-3 text-sm text-gray-500 text-center max-w-xl mx-auto">
              Chúng tôi hợp tác lâu dài với các thương hiệu và nhà sản xuất uy tín trong ngành thép,
              đảm bảo nguồn cung ổn định, chất lượng đồng nhất và dịch vụ tin cậy cho khách hàng.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 items-center">
              <div className="flex justify-center">
                <Image
                  src={`${prefix}/images/hoaphat.jpg`}
                  alt="Đối tác 1"
                  width={200}
                  height={120}
                  className="h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={`${prefix}/images/hsg.jpg`}
                  alt="Đối tác 2"
                  width={200}
                  height={120}
                  className="h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={`${prefix}/images/sendo-logo.jpg`}
                  alt="Đối tác 3"
                  width={200}
                  height={120}
                  className="h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={`${prefix}/images/vinakyoei.jpg`}
                  alt="Đối tác 4"
                  width={200}
                  height={120}
                  className="h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-gray-100 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Đối tác tin cậy trong ngành sắt thép
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Chúng tôi cam kết mang đến giải pháp toàn diện từ chất lượng sản phẩm,
                giá cả hợp lý đến dịch vụ giao hàng nhanh chóng, giúp khách hàng an tâm trong mọi dự án.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mt-14 lg:max-w-none">
              {/* feature items */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
