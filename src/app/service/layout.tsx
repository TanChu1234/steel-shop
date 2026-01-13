import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dịch Vụ - Phúc Hải Liên | Tư Vấn Sắt Thép Chuyên Nghiệp",
    description: "Cung cấp trọn gói giải pháp sắt thép xây dựng: tư vấn kỹ thuật, báo giá minh bạch, gia công theo yêu cầu và vận chuyển tận nơi tại Đồng Nai.",
    alternates: {
        canonical: 'https://phuchailien.com/service',
    },
};

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
