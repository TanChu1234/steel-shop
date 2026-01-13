import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sản Phẩm Sắt Thép - Phúc Hải Liên | Đa Dạng Chủng Loại",
    description: "Khám phá danh mục sản phẩm sắt thép đa dạng: thép xây dựng, thép hình, tôn, xà gồ, inox... Đáp ứng đầy đủ tiêu chuẩn kỹ thuật cho mọi dự án.",
    alternates: {
        canonical: 'https://phuchailien.com/products',
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
