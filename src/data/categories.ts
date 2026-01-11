import { prefix } from "@/utils/prefix";

export interface Product {
  name: string;
  image: string;
  description?: string;
  specs?: string[];
}

export interface Category {
  title: string;
  products: Product[];
  link: string;
  slug: string;
  description?: string;
  bannerImage?: string;
}

export const categories: Category[] = [
  {
    title: "Thép xây dựng",
    description: "Thép cuộn, thép thanh vằn và thép tròn trơn chất lượng cao, đạt tiêu chuẩn TCVN, đảm bảo độ bền và an toàn cho công trình.",
    bannerImage: `${prefix}/images/products/thep_xay_dung.jpg`,
    products: [
      {
        name: "Thép cuộn",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Thép cuộn chất lượng cao, đạt tiêu chuẩn TCVN, sử dụng trong các công trình xây dựng dân dụng và công nghiệp.",
        specs: [
          "Đường kính: D6 - D32",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: Cuộn 11.7m",
          "Xuất xứ: Hòa Phát, Việt Ý, Miền Nam"
        ]
      },
      {
        name: "Thép cây",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép cây vằn (thép thanh vằn) có độ bền cao, chống trượt tốt, phù hợp cho kết cấu bê tông cốt thép.",
        specs: [
          "Đường kính: D10, D12, D14, D16, D18, D20, D22, D25",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép tròn",
        image: `${prefix}/images/products/thep_xay_dung/thep_tron.jpg`,
        description: "Thép tròn trơn chất lượng cao, bề mặt nhẵn, dễ uốn và cắt, dùng cho kết cấu nhẹ và phụ kiện.",
        specs: [
          "Đường kính: D6 - D32",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 11.7m hoặc theo yêu cầu",
          "Bề mặt: Trơn, nhẵn"
        ]
      },
      {
        name: "Thép cuộn tròn",
        image: `${prefix}/images/products/thep_xay_dung/thep_cuon_tron.jpg`,
        description: "Thép cuộn tròn dạng cuộn, tiện lợi cho vận chuyển và lưu trữ, phù hợp cho các công trình lớn.",
        specs: [
          "Đường kính: D6 - D14",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Trọng lượng cuộn: 1.2 - 2.5 tấn",
          "Dễ dàng cắt theo yêu cầu"
        ]
      },
      {
        name: "Thép thanh vằn CB400",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn cường độ cao CB400, có gờ vằn chống trượt, đảm bảo độ bám dính tốt với bê tông.",
        specs: [
          "Cường độ: CB400 (400 N/mm²)",
          "Đường kính: D10, D12, D14, D16, D18, D20, D22, D25",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 11.7m"
        ]
      },
      {
        name: "Thép thanh vằn CB500",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn cường độ siêu cao CB500, tiết kiệm vật liệu, phù hợp cho công trình lớn và nhà cao tầng.",
        specs: [
          "Cường độ: CB500 (500 N/mm²)",
          "Đường kính: D10, D12, D14, D16, D18, D20, D22, D25",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Tiết kiệm 20-25% so với CB400"
        ]
      },
      {
        name: "Thép D10",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 10mm, phổ biến trong xây dựng nhà dân dụng và công nghiệp.",
        specs: [
          "Đường kính: 10mm",
          "Trọng lượng: 0.617 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D12",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 12mm, được sử dụng rộng rãi trong kết cấu móng, cột và dầm.",
        specs: [
          "Đường kính: 12mm",
          "Trọng lượng: 0.888 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D14",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 14mm, phù hợp cho kết cấu chịu lực lớn trong công trình.",
        specs: [
          "Đường kính: 14mm",
          "Trọng lượng: 1.21 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D16",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 16mm, thường dùng cho cột, dầm chính và kết cấu chịu lực.",
        specs: [
          "Đường kính: 16mm",
          "Trọng lượng: 1.58 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D18",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 18mm, dùng cho kết cấu chịu lực lớn, nhà cao tầng và công trình đặc biệt.",
        specs: [
          "Đường kính: 18mm",
          "Trọng lượng: 2.00 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D20",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 20mm, phù hợp cho cột lớn, dầm chính và kết cấu đặc biệt.",
        specs: [
          "Đường kính: 20mm",
          "Trọng lượng: 2.47 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D22",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 22mm, dùng cho kết cấu chịu lực rất lớn trong công trình lớn.",
        specs: [
          "Đường kính: 22mm",
          "Trọng lượng: 2.98 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép D25",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn đường kính 25mm, dùng cho cột lớn, dầm chính và kết cấu đặc biệt chịu lực cao.",
        specs: [
          "Đường kính: 25mm",
          "Trọng lượng: 3.85 kg/m",
          "Độ dài: 11.7m",
          "Cường độ: CB300, CB400, CB500"
        ]
      },
    ],
    link: "/products/thep-xay-dung",
    slug: "thep-xay-dung",
  },
  {
    title: "Thép hình",
    description: "Thép hình H, I, V, U chất lượng cao, đạt tiêu chuẩn TCVN, được sử dụng rộng rãi trong kết cấu xây dựng, nhà xưởng, cầu đường và các công trình công nghiệp.",
    bannerImage: `${prefix}/images/products/thep_hinh/thep-h.jpg`,
    products: [
      {
        name: "Thép H",
        image: `${prefix}/images/products/thep_hinh/thep-h.jpg`,
        description: "Thép hình H có khả năng chịu lực tốt, thường dùng cho cột, dầm chính trong kết cấu nhà xưởng và công trình công nghiệp.",
        specs: [
          "Kích thước: H100, H125, H150, H175, H200, H250, H300, H350, H400",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 12m hoặc theo yêu cầu",
          "Xuất xứ: Hòa Phát, Việt Ý, Miền Nam"
        ]
      },
      {
        name: "Thép I",
        image: `${prefix}/images/products/thep_hinh/thep-i.jpg`,
        description: "Thép hình I (I-beam) có khả năng chịu uốn tốt, phù hợp cho dầm, xà gồ và kết cấu chịu lực ngang.",
        specs: [
          "Kích thước: I100, I120, I140, I160, I180, I200, I220, I250",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 12m hoặc theo yêu cầu",
          "Ứng dụng: Dầm, xà gồ, kết cấu nhà xưởng"
        ]
      },
      {
        name: "Thép V",
        image: `${prefix}/images/products/thep_hinh/thep-v.jpg`,
        description: "Thép hình V (góc) được sử dụng làm thanh giằng, khung kết cấu và các phụ kiện trong xây dựng.",
        specs: [
          "Kích thước: V30x30, V40x40, V50x50, V60x60, V70x70, V80x80, V100x100",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 6m, 9m, 12m hoặc theo yêu cầu",
          "Độ dày: 3mm - 12mm"
        ]
      },
      {
        name: "Thép U",
        image: `${prefix}/images/products/thep_hinh/thep-u.jpg`,
        description: "Thép hình U (U-channel) thường dùng cho xà gồ, thanh giằng và các kết cấu phụ trong công trình.",
        specs: [
          "Kích thước: U50, U65, U80, U100, U120, U140, U160, U180, U200",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 6m, 9m, 12m hoặc theo yêu cầu",
          "Ứng dụng: Xà gồ, thanh giằng, khung kết cấu"
        ]
      },
    ],
    link: "/products/thep-hinh",
    slug: "thep-hinh",
  },
  {
    title: "Thép Ống - Hộp - Vuông",
    description: "Thép ống, thép hộp, thép vuông chất lượng cao, đạt tiêu chuẩn TCVN, được sử dụng rộng rãi trong kết cấu xây dựng, nhà xưởng, cầu đường và các công trình công nghiệp.",
    bannerImage: `${prefix}/images/products/thep_ong_hop_vuong/thep-ong.jpg`,
    products: [
      {
        name: "Thép ống",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-ong.jpg`,
        description: "Thép ống tròn đen và mạ kẽm, chịu áp lực cao, dùng trong hệ thống ống dẫn, giàn giáo và kết cấu cơ khí.",
        specs: ["Đường kính: D21 - D219", "Độ dày: 1.2mm - 6.35mm", "Tiêu chuẩn: ASTM A53, BS 1387", "Độ dài: 6m"]
      },
      {
        name: "Thép hộp chữ nhật",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-chu-nhat.jpg`,
        description: "Thép hộp chữ nhật đa dạng kích thước, kết cấu vững chắc, ứng dụng trong khung nhà thép, cửa, hàng rào.",
        specs: ["Kích thước: 13x26, 20x40, ..., 100x200", "Độ dày: 0.7mm - 4.0mm", "Tiêu chuẩn: ASTM A500", "Độ dài: 6m"]
      },
      {
        name: "Thép hộp vuông",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-vuong.jpg`,
        description: "Thép hộp vuông chất lượng cao, bề mặt sáng, dùng cho nội thất, xây dựng dân dụng và công nghiệp.",
        specs: ["Kích thước: 14x14, 20x20, ..., 100x100", "Độ dày: 0.7mm - 4.0mm", "Tiêu chuẩn: ASTM A500", "Độ dài: 6m"]
      },
      {
        name: "Ống thép mạ kẽm",
        image: `${prefix}/images/products/thep_ong_hop_vuong/ong-thep-ma-kem.jpg`,
        description: "Ống thép mạ kẽm nhúng nóng, chống ăn mòn vượt trội, tuổi thọ cao, phù hợp cho môi trường khắc nghiệt.",
        specs: ["Đường kính: D21 - D114", "Độ dày: 1.6mm - 4.0mm", "Lớp mạ: Z120 - Z275", "Tiêu chuẩn: BS 1387"]
      },
    ], link: "/products/thep-ong-hop-vuong",
    slug: "thep-ong-hop-vuong",
  },
  {
    title: "Tôn",
    products: [
      {
        name: "Tôn lạnh",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Tôn lạnh (mạ nhôm kẽm) có khả năng phản xạ nhiệt tốt, chống ăn mòn cao gấp 4 lần tôn kẽm thông thường.",
        specs: ["Độ dày: 0.18mm - 0.58mm", "Khổ rộng: 1200mm", "Mạ: AZ70 - AZ150", "Màu sắc: Ánh kim đặc trưng"]
      },
      {
        name: "Tôn kẽm",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Tôn mạ kẽm giá thành hợp lý, bề mặt vân bông đẹp chuyên dùng cho vách ngăn, tấm lợp thông dụng.",
        specs: ["Độ dày: 0.16mm - 1.2mm", "Khổ rộng: 1200mm", "Mạ: Z8 - Z275", "Tiêu chuẩn: JIS G3302"]
      },
      {
        name: "Tôn màu",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Tôn lạnh mạ màu đa dạng màu sắc, thẩm mỹ cao, bền màu, phù hợp cho mái lợp nhà phố, biệt thự.",
        specs: ["Độ dày: 0.30mm - 0.50mm", "Màu sắc: Đỏ, Xanh, Trắng, Vàng...", "Sơn: Polyester, PVDF", "Bảo hành màu: 5-10 năm"]
      },
      {
        name: "Tôn hoa cương",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Tôn lạnh mạ màu hoa cương sang trọng, vân đá độc đáo, tạo điểm nhấn đẳng cấp cho ngôi nhà.",
        specs: ["Độ dày: 0.35mm - 0.50mm", "Vân: Hoa cương Granite", "Công nghệ: In 3D", "Chống bám bụi, giảm nhiệt"]
      },
    ], link: "/products/ton",
    slug: "ton",
  },
  {
    title: "Lưới - Xà gồ - Phụ kiện",
    products: [
      {
        name: "Lưới thép",
        image: `${prefix}/images/products/luoi_xa_go_phu_kien/luoi-thep.jpg`,
        description: "Lưới thép hàn cường độ cao (lưới B40, lưới hàn), dùng làm hàng rào, cốt thép sàn bê tông.",
        specs: ["Đường kính dây: 3mm - 10mm", "Ô lưới: 50x50, 100x100, ...", "Khổ lưới: 2.4m max", "Chất liệu: Thép đen, mạ kẽm"]
      },
      {
        name: "Xà gồ C",
        image: `${prefix}/images/products/thep_hinh/thep-u.jpg`,
        description: "Xà gồ C mạ kẽm cường độ cao, trọng lượng nhẹ, dễ lắp dựng, kinh tế cho mái nhà xưởng.",
        specs: ["Chiều cao: C80 - C300", "Độ dày: 1.5mm - 3.0mm", "Lớp mạ: Z120 - Z275", "Đục lỗ theo yêu cầu"]
      },
      {
        name: "Xà gồ Z",
        image: `${prefix}/images/products/thep_hinh/thep-u.jpg`,
        description: "Xà gồ Z có khả năng nối chồng, chịu tải trọng lớn, vượt nhịp xa hơn, tối ưu kết cấu mái.",
        specs: ["Chiều cao: Z150 - Z300", "Độ dày: 1.5mm - 3.0mm", "Cánh: Khác nhau (để nối chồng)", "Tiêu chuẩn: JIS G3302"]
      },
      {
        name: "Phụ kiện thép",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Các phụ kiện thép xây dựng: đinh, kẽm buộc, que hàn, đá cắt, ty ren, đảm bảo đồng bộ cho công trình.",
        specs: ["Kẽm buộc: 1 ly", "Đinh: 3p - 10p", "Que hàn: 2.5 - 4.0 ly", "Xuất xứ: Đa dạng"]
      },
    ], link: "/products/luoi-xa-go-phu-kien",
    slug: "luoi-xa-go-phu-kien",
  },
  {
    title: "Hộp - Ống Inox",
    products: [
      {
        name: "Ống Inox tròn",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-ong.jpg`,
        description: "Ống Inox 304/201 trang trí và công nghiệp, bề mặt bóng sáng, chống gỉ sét, thẩm mỹ cao.",
        specs: ["Đường kính: D9.6 - D114", "Độ dày: 0.6mm - 3.0mm", "Bề mặt: BA (Bóng), HL (Xước)", "Mác thép: SUS 304, 201"]
      },
      {
        name: "Hộp Inox vuông",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-vuong.jpg`,
        description: "Hộp Inox vuông dùng trong trang trí nội ngoại thất, lan can, cầu thang, cổng cửa sang trọng.",
        specs: ["Kích thước: 10x10 - 100x100", "Độ dày: 0.6mm - 2.0mm", "Bề mặt: BA, HL", "Mác thép: SUS 304, 201"]
      },
      {
        name: "Hộp Inox chữ nhật",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-chu-nhat.jpg`,
        description: "Hộp Inox chữ nhật đa dụng, kết cấu chắc chắn, chịu ăn mòn tốt, bề mặt đẹp bền bỉ với thời gian.",
        specs: ["Kích thước: 10x20 - 60x120", "Độ dày: 0.6mm - 2.0mm", "Tiêu chuẩn: ASTM A554", "Xuất xứ: Hoàng Vũ, Tiến Đạt"]
      },
      {
        name: "Phụ kiện Inox",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon.jpg`,
        description: "Phụ kiện Inox đồng bộ: co, tê, mặt bích, chụp, bát, bản lề, giúp hoàn thiện công trình inox.",
        specs: ["Loại: Co hàn, Co ren, Mặt bích", "Chất liệu: Inox 304, 316", "Kích thước: Theo ống/hộp", "Độ bóng: Tương thích"]
      },
    ], link: "/products/hop-ong-inox",
    slug: "hop-ong-inox",
  },
];

