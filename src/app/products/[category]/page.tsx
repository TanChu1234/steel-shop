import { categories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryHero from "@/components/products/CategoryHero";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <Header />
        <h1 className="text-3xl font-bold text-gray-900">Không tìm thấy danh mục</h1>
        <Link href="/products" className="mt-4 text-blue-900 hover:underline font-medium">
          ← Quay lại danh mục
        </Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero Banner */}
      <CategoryHero category={category} />

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {category.products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                {product.description && (
                  <p className="text-gray-600 text-xs sm:text-sm mb-3">{product.description}</p>
                )}
                
                {product.specs && (
                  <ul className="space-y-1 mb-4">
                    {product.specs.map((spec: string, i: number) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-500 flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}

                <button className="mt-auto w-full bg-blue-900 text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-800 transition-colors">
                  Liên hệ báo giá
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Cần tư vấn thêm?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6">
            Liên hệ với chúng tôi để được tư vấn chi tiết và báo giá tốt nhất
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            Liên hệ ngay
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}