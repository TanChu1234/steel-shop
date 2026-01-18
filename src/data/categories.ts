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
    bannerImage: `${prefix}/images/products/thep_xay_dung/banner.jpg`,
    products: [
      {
        name: "Thép thanh",
        image: `${prefix}/images/products/thep_xay_dung/thep_cay.jpg`,
        description: "Thép thanh vằn hoặc thép thành tròn có độ bền cao, chống trượt tốt, phù hợp cho kết cấu bê tông cốt thép.",
        specs: [
          "Đường kính: Ø10mm - Ø55mm",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 11.7m",
          "Độ chịu lực: CB300, CB400, CB500"
        ]
      },
      {
        name: "Thép cuộn",
        image: `${prefix}/images/products/thep_xay_dung/thep-cuon_van.jpg`,
        description: "Thép cuộn xây dựng loại thép dạng dây được cuộn tròn, bề mặt trơn nhẵn hoặc có vân (gân), đạt tiêu chuẩn TCVN, sử dụng trong các công trình xây dựng dân dụng và công nghiệp.",
        specs: [
          "Đường kính: Ø6mm, Ø8mm, Ø10mm",
          "Trọng lượng cuộn: 1000kg - 2100kg",
          "Tiêu chuẩn: TCVN 1651-2:2018",
        ]
      },
      {
        name: "Dây rút mạ kẽm",
        image: `${prefix}/images/products/thep_xay_dung/day_rut.jpg`,
        description: "Dây thép mạ kẽm là loại dây thép buộc có bề mặt sáng trắng, bóng đẹp, sở hữu độ dẻo dai và độ bền cao. Sản phẩm được ứng dụng rộng rãi trong các lĩnh vực xây dựng, điện lực và sản xuất công nghiệp.",
        specs: [
          "Đường kính danh định: 1,2 - 4,8mm",
          "Đường kính dây: 1,2 - 5.0mm",
          "Tiêu chuẩn: TCVN 1651-2:2018",
        ]
      },
    ],
    link: "/products/thep-xay-dung",
    slug: "thep-xay-dung",
  },
  {
    title: "Thép hình",
    description: "Thép hình H, I, V, U chất lượng cao, đạt tiêu chuẩn TCVN, được sử dụng rộng rãi trong kết cấu xây dựng, nhà xưởng, cầu đường và các công trình công nghiệp.",
    bannerImage: `${prefix}/images/products/thep_hinh/thep_hinh.jpg`,
    products: [
      {
        name: "Thép H",
        image: `${prefix}/images/products/thep_hinh/thep-h.jpg`,
        description: "Thép hình H có khả năng chịu lực tốt, thường dùng cho cột, dầm chính trong kết cấu nhà xưởng và công trình công nghiệp.",
        specs: [
          "Kích thước: H100, H125, H150, H175, H200, H250, H300, H350, H400",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 6m, 9m, 12m hoặc theo yêu cầu",
        ]
      },
      {
        name: "Thép I",
        image: `${prefix}/images/products/thep_hinh/thep-i.jpg`,
        description: "Thép hình I (I-beam) có khả năng chịu uốn tốt, phù hợp cho dầm, xà gồ và kết cấu chịu lực ngang.",
        specs: [
          "Kích thước: I100, I120, I140, I160, I180, I200, I220, I250",
          "Tiêu chuẩn: TCVN 1651-2:2018",
          "Độ dài: 6m, 9m, 12m hoặc theo yêu cầu",
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
        ]
      },
    ],
    link: "/products/thep-hinh",
    slug: "thep-hinh",
  },
  {
    title: "Thép Ống - Hộp - Vuông",
    description: "Thép ống, thép hộp, thép vuông chất lượng cao, đạt tiêu chuẩn TCVN, được sử dụng rộng rãi trong kết cấu xây dựng, nhà xưởng, cầu đường và các công trình công nghiệp.",
    bannerImage: `${prefix}/images/products/thep_ong_hop_vuong/banner.jpg`,
    products: [
      {
        name: "Thép ống đen",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep_ong_den.jpg`,
        description: "Thép ống đen có khả năng chịu lực tốt, độ bền cao, thường được dùng trong các hệ thống dẫn dầu, gas và kết cấu công trình.",
        specs: [
          "Đường kính: D12.7 - D219.1mm",
          "Độ dày: 0.7mm - 9.5mm",
          "Tiêu chuẩn: ASTM A53, ASTM A500",
          "Độ dài: 6m"
        ]
      },
      {
        name: "Thép ống mạ kẽm",
        image: `${prefix}/images/products/thep_ong_hop_vuong/ong_ma_kem.jpg`,
        description: "Thép ống mạ kẽm có lớp bảo vệ chống ăn mòn hiệu quả, tuổi thọ cao, phù hợp cho hệ thống cấp thoát water, PCCC.",
        specs: [
          "Đường kính: D12.7 - D219.1mm",
          "Độ dày: 0.7mm - 9.5mm",
          "Tiêu chuẩn: ASTM A53, BS 1387",
          "Độ dài: 6m"
        ]
      },
      {
        name: "Thép ống đúc",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep_ong_duc.jpg`,
        description: "Thép ống đúc (không mối hàn) chịu áp lực cực cao, chịu nhiệt tốt, dùng trong cơ khí chế tạo, nồi hơi và dầu khí.",
        specs: [
          "Đường kính: D21.3 - D610mm",
          "Độ dày: SCH20, SCH40, SCH80...",
          "Tiêu chuẩn: ASTM A106, ASTM A53, API 5L",
          "Độ dài: 6m - 12m"
        ]
      },
      {
        name: "Thép ống hàn",
        image: `${prefix}/images/products/thep_ong_hop_vuong/ong_thep_han.jpg`,
        description: "Thép ống hàn đa dạng kích thước, quy trình sản xuất hiện đại, ứng dụng rộng rãi trong xây dựng và trang trí nội thất.",
        specs: [
          "Đường kính: D12.7 - D219.1mm",
          "Độ dày: 0.6mm - 6.35mm",
          "Tiêu chuẩn: TCVN 3783, ASTM A500",
          "Độ dài: 6m"
        ]
      },
      {
        name: "Thép hộp mạ kẽm",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-ma_kem.jpg`,
        description: "Thép hộp vuông/chữ nhật mạ kẽm chống gỉ sét tốt, bề mặt sáng đẹp, dễ thi công, dùng làm khung kèo, cửa sắt.",
        specs: [
          "Kích thước: 13x26mm - 100x200mm",
          "Đo dày: 0.6mm - 4.0mm",
          "Tiêu chuẩn: ASTM A500, TCVN",
          "Độ dài: 6m"
        ]
      },
      {
        name: "Thép hộp đen",
        image: `${prefix}/images/products/thep_ong_hop_vuong/thep-hop-den.jpg`,
        description: "Thép hộp đen chịu lực vững chắc, giá thành kinh tế, thường dùng trong kết cấu nhà xưởng, giàn giáo và đồ nội thất.",
        specs: [
          "Kích thước: 13x26mm - 100x200mm",
          "Độ dày: 0.7mm - 4.5mm",
          "Tiêu chuẩn: ASTM A500, JIS G3466",
          "Độ dài: 6m"
        ]
      },
    ], link: "/products/thep-ong-hop-vuong",
    slug: "thep-ong-hop-vuong",
  },
  {
    title: "Tôn",
    description: "Cung cấp các loại tôn lạnh, tôn kẽm, tôn màu và tôn hoa cương chất lượng cao từ các thương hiệu hàng đầu, đảm bảo độ bền và tính thẩm mỹ cho mọi công trình.",
    bannerImage: `${prefix}/images/products/ton/banner.jpg`,
    products: [
      {
        name: "Tôn lạnh",
        image: `${prefix}/images/products/ton/ton_lanh.jpg`,
        description: "Tôn lạnh (mạ nhôm kẽm) có khả năng phản xạ nhiệt tốt, chống ăn mòn cao gấp 4 lần tôn kẽm thông thường.",
        specs: ["Độ dày: 0.18mm - 0.58mm", "Khổ rộng: 1200mm", "Mạ: AZ70 - AZ150", "Màu sắc: Ánh kim đặc trưng"]
      },
      {
        name: "Tôn kẽm",
        image: `${prefix}/images/products/ton/ton_ma_kem.jpg`,
        description: "Tôn mạ kẽm giá thành hợp lý, bề mặt vân bông đẹp chuyên dùng cho vách ngăn, tấm lợp thông dụng.",
        specs: ["Độ dày: 0.16mm - 1.2mm", "Khổ rộng: 1200mm", "Mạ: Z8 - Z275", "Tiêu chuẩn: JIS G3302"]
      },
      {
        name: "Tôn màu",
        image: `${prefix}/images/products/ton/ton_lanh.jpg`,
        description: "Tôn lạnh mạ màu đa dạng màu sắc, thẩm mỹ cao, bền màu, phù hợp cho mái lợp nhà phố, biệt thự.",
        specs: ["Độ dày: 0.30mm - 0.50mm", "Màu sắc: Đỏ, Xanh, Trắng, Vàng...", "Sơn: Polyester, PVDF", "Bảo hành màu: 5-10 năm"]
      },
      {
        name: "Tôn hoa cương",
        image: `${prefix}/images/products/ton/ton_hoa_cuong.jpg`,
        description: "Tôn lạnh mạ màu hoa cương sang trọng, vân đá độc đáo, tạo điểm nhấn đẳng cấp cho ngôi nhà.",
        specs: ["Độ dày: 0.35mm - 0.50mm", "Vân: Hoa cương Granite", "Công nghệ: In 3D", "Chống bám bụi, giảm nhiệt"]
      },
    ], link: "/products/ton",
    slug: "ton",
  },
  {
    title: "Lưới - Xà gồ - Phụ kiện",
    description: "Đầy đủ các loại lưới thép, xà gồ C, Z và phụ kiện xây dựng, hỗ trợ tối ưu cho kết cấu khung và hoàn thiện công trình.",
    bannerImage: `${prefix}/images/products/luoi_xa_go_phu_kien/banner.jpg`,
    products: [
      {
        name: "Lưới thép",
        image: `${prefix}/images/products/luoi_xa_go_phu_kien/luoi-thep.jpg`,
        description: "Lưới thép hàn cường độ cao (lưới B40, lưới hàn), dùng làm hàng rào, cốt thép sàn bê tông.",
        specs: ["Đường kính dây: 3mm - 10mm", "Ô lưới: 50x50, 100x100, ...", "Khổ lưới: 2.4m max", "Chất liệu: Thép đen, mạ kẽm"]
      },
      {
        name: "Xà gồ C",
        image: `${prefix}/images/products/luoi_xa_go_phu_kien/xa_go_c.jpg`,
        description: "Xà gồ C mạ kẽm cường độ cao, trọng lượng nhẹ, dễ lắp dựng, kinh tế cho mái nhà xưởng.",
        specs: ["Chiều cao: C80 - C300", "Độ dày: 1.5mm - 3.0mm", "Lớp mạ: Z120 - Z275", "Đục lỗ theo yêu cầu"]
      },
      {
        name: "Xà gồ Z",
        image: `${prefix}/images/products/luoi_xa_go_phu_kien/xa_go_z.jpg`,
        description: "Xà gồ Z có khả năng nối chồng, chịu tải trọng lớn, vượt nhịp xa hơn, tối ưu kết cấu mái.",
        specs: ["Chiều cao: Z150 - Z300", "Độ dày: 1.5mm - 3.0mm", "Cánh: Khác nhau (để nối chồng)", "Tiêu chuẩn: JIS G3302"]
      },
      {
        name: "Phụ kiện thép",
        image: `${prefix}/images/products/luoi_xa_go_phu_kien/phu_kien.jpg`,
        description: "Các phụ kiện thép xây dựng: đinh, kẽm buộc, que hàn, đá cắt, ty ren, đảm bảo đồng bộ cho công trình.",
        specs: ["Kẽm buộc: 1 ly", "Đinh: 3p - 10p", "Que hàn: 2.5 - 4.0 ly", "Xuất xứ: Đa dạng"]
      },
    ], link: "/products/luoi-xa-go-phu-kien",
    slug: "luoi-xa-go-phu-kien",
  },
  {
    title: "Hộp - Ống Inox",
    description: "Sản phẩm inox 304/201 đa dạng hình dáng (tròn, vuông, chữ nhật) và phụ kiện, chống ăn mòn tuyệt đối, mang lại vẻ đẹp bền vững và sang trọng.",
    bannerImage: `${prefix}/images/products/hop_ong_inox/banner.jpg`,
    products: [
      {
        name: "Ống Inox tròn",
        image: `${prefix}/images/products/hop_ong_inox/ong_inox_tron.jpg`,
        description: "Ống Inox 304/201 trang trí và công nghiệp, bề mặt bóng sáng, chống gỉ sét, thẩm mỹ cao.",
        specs: ["Đường kính: D9.6 - D114", "Độ dày: 0.6mm - 3.0mm", "Bề mặt: BA (Bóng), HL (Xước)", "Mác thép: SUS 304, 201"]
      },
      {
        name: "Hộp Inox vuông",
        image: `${prefix}/images/products/hop_ong_inox/hop_vuong.jpg`,
        description: "Hộp Inox vuông dùng trong trang trí nội ngoại thất, lan can, cầu thang, cổng cửa sang trọng.",
        specs: ["Kích thước: 10x10 - 100x100", "Độ dày: 0.6mm - 2.0mm", "Bề mặt: BA, HL", "Mác thép: SUS 304, 201"]
      },
      {
        name: "Hộp Inox chữ nhật",
        image: `${prefix}/images/products/hop_ong_inox/hop_chu_nhat.jpg`,
        description: "Hộp Inox chữ nhật đa dụng, kết cấu chắc chắn, chịu ăn mòn tốt, bề mặt đẹp bền bỉ với thời gian.",
        specs: ["Kích thước: 10x20 - 60x120", "Độ dày: 0.6mm - 2.0mm", "Tiêu chuẩn: ASTM A554", "Xuất xứ: Hoàng Vũ, Tiến Đạt"]
      },
      {
        name: "Phụ kiện Inox",
        image: `${prefix}/images/products/hop_ong_inox/phu_kien.jpg`,
        description: "Phụ kiện Inox đồng bộ: co, tê, mặt bích, chụp, bát, bản lề, giúp hoàn thiện công trình inox.",
        specs: ["Loại: Co hàn, Co ren, Mặt bích", "Chất liệu: Inox 304, 316", "Kích thước: Theo ống/hộp", "Độ bóng: Tương thích"]
      },
    ], link: "/products/hop-ong-inox",
    slug: "hop-ong-inox",
  },
];

