import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Về Chúng Tôi - Phúc Hải Liên | Hơn 15 Năm Kinh Nghiệm Sắt Thép",
    description: "Tìm hiểu về hành trình phát triển, giá trị cốt lõi và sứ mệnh của Phúc Hải Liên trong việc cung cấp vật liệu xây dựng bền vững cho mọi công trình.",
    alternates: {
        canonical: 'https://phuchailien.com/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
