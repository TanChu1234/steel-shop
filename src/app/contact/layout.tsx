import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liên Hệ - Phúc Hải Liên | Hỗ Trợ 24/7 & Báo Giá Nhanh",
    description: "Liên hệ ngay với Phúc Hải Liên qua Hotline 0911 392 277 hoặc để lại tin nhắn để được tư vấn báo giá sắt thép xây dựng nhanh nhất.",
    alternates: {
        canonical: 'https://phuchailien.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
