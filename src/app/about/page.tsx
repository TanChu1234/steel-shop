import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
    image: '/images/iso-9001.png',
  },
  {
    name: 'TCVN',
    description: 'Chứng nhận sản phẩm đạt tiêu chuẩn Việt Nam',
    image: '/images/tcvn.png',
  },
  {
    name: 'JIS',
    description: 'Chứng nhận đạt tiêu chuẩn công nghiệp Nhật Bản',
    image: '/images/jis.png',
  },
];

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <Image
            src="/images/about-hero.png"
            alt="Steel Shop"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
            width={1920}
            height={600}
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Về chúng tôi</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Steel Shop tự hào là một trong những đơn vị hàng đầu trong lĩnh vực cung cấp sắt thép xây dựng tại Việt Nam. 
                Với hơn 15 năm kinh nghiệm, chúng tôi luôn nỗ lực mang đến cho khách hàng những sản phẩm chất lượng cao với 
                giá cả cạnh tranh nhất.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Giá trị cốt lõi</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Chúng tôi luôn tuân thủ những giá trị cốt lõi trong hoạt động kinh doanh để mang đến sự hài lòng 
                tối đa cho khách hàng.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {values.map((value) => (
                <div key={value.name} className="relative pl-9">
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

        {/* Certifications section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Chứng nhận & Chứng chỉ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sản phẩm của chúng tôi đạt các tiêu chuẩn chất lượng quốc gia và quốc tế.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {certifications.map((cert) => (
                <article
                  key={cert.name}
                  className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={500}
                    height={500}
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