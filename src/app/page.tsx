import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const featuredProducts = [
  {
    id: 1,
    name: 'Thép xây dựng CB400',
    description: 'Thép thanh vằn CB400 đạt tiêu chuẩn TCVN',
    href: '/products/construction-steel',
    imageSrc: '/images/construction-steel.jpg',
    imageAlt: 'Thép xây dựng CB400',
  },
  {
    id: 2,
    name: 'Thép hình I',
    description: 'Thép hình I các loại kích thước tiêu chuẩn',
    href: '/products/shaped-steel',
    imageSrc: '/images/i-beam.jpg',
    imageAlt: 'Thép hình I',
  },
  {
    id: 3,
    name: 'Tôn mạ kẽm',
    description: 'Tôn mạ kẽm chất lượng cao, độ bền cao',
    href: '/products/metal-sheets',
    imageSrc: '/images/galvanized-steel.jpg',
    imageAlt: 'Tôn mạ kẽm',
  },
  {
    id: 4,
    name: 'Xà gồ C',
    description: 'Xà gồ C mạ kẽm chất lượng cao',
    href: '/products/purlins',
    imageSrc: '/images/c-purlin.jpg',
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
              className="h-full w-full object-cover"
              src="/images/hero-banner.jpg"
              alt="Steel Shop Banner"
              width={1920}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sắt Thép Chất Lượng Cao
            </h1>
            <p className="mt-6 max-w-xl text-xl text-gray-300">
              Cung cấp đa dạng sản phẩm sắt thép xây dựng với chất lượng đảm bảo, 
              giá cả cạnh tranh và dịch vụ chuyên nghiệp.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Xem sản phẩm
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                Liên hệ ngay <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured section */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sản phẩm nổi bật</h2>
            <p className="mt-4 text-base text-gray-500">
              Khám phá các sản phẩm sắt thép chất lượng cao của chúng tôi
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="inline-block rounded-md border border-transparent bg-blue-900 px-8 py-3 text-center font-medium text-white hover:bg-blue-800"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-900">Tại sao chọn chúng tôi?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Đối tác tin cậy trong ngành sắt thép
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Với nhiều năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    Chất lượng đảm bảo
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      Sản phẩm đạt tiêu chuẩn chất lượng cao, có đầy đủ giấy tờ chứng nhận xuất xứ và chất lượng.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    Giá cả cạnh tranh
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      Cam kết mang đến mức giá tốt nhất trên thị trường với chất lượng tương đương.
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    Giao hàng nhanh chóng
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      Đội ngũ vận chuyển chuyên nghiệp, giao hàng đúng hẹn và an toàn.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
