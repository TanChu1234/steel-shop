import Link from 'next/link';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/products' },
    { name: 'Dịch vụ', href: '/service' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Liên hệ', href: '/contact' },
  ],
  products: [
    { name: 'Thép xây dựng', href: '/products/construction-steel' },
    { name: 'Thép hình', href: '/products/shaped-steel' },
    { name: 'Tôn các loại', href: '/products/metal-sheets' },
    { name: 'Xà gồ', href: '/products/purlins' },
    { name: 'Ống thép', href: '/products/steel-pipes' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              PHÚC HẢI LIÊN
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Cung cấp sắt thép xây dựng chất lượng cao với giá cả cạnh tranh
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">contact@phuchailien.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">123 Đường ABC, Quận XYZ, TP.HCM</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Liên kết</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Sản phẩm</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
                    <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-gray-400">&copy; 2025 Phuc Hai Lien. All rights reserved.</p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 