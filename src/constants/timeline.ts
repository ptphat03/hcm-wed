import { TimelineEvent, PhaseConfig, EventCategory } from "@/types/timeline";

// Enhanced Timeline Data với metadata đầy đủ
export const TIMELINE_EVENTS: TimelineEvent[] = [
  // GIAI ĐOẠN 1: 1920-1945 - Xây dựng nền tảng
  {
    id: 1,
    year: "1920-1924",
    yearSort: 1920,
    title: "Tham gia Quốc tế Cộng sản",
    color: "red",
    phase: "Nền tảng",
    category: "revolution",
    content:
      "Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản III (1920), tham dự Đại hội V (1924) tại Liên Xô.",
    significance:
      "Kết nối với phong trào Cộng sản và Công nhân Quốc tế, xác định con đường cách mạng.",
    description:
      "Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản III (1920), tham dự Đại hội V (1924) tại Liên Xô.",
    tags: ["Cộng sản", "Quốc tế", "Cách mạng", "Liên Xô"],
    sources: ["Hồ Chí Minh Toàn tập", "Lịch sử Đảng Cộng sản Việt Nam"],
    relatedEvents: [2, 3],
  },
  {
    id: 2,
    year: "1921-1925",
    yearSort: 1921,
    title: "Thành lập Tổ chức liên minh",
    color: "green",
    phase: "Nền tảng",
    category: "alliance",
    content:
      "Sáng lập Hội Liên hiệp Thuộc địa tại Pháp và tham gia thành lập Hội Liên hiệp các Dân tộc bị áp bức tại Trung Quốc.",
    significance:
      "Tranh thủ sự ủng hộ của các dân tộc bị áp bức, đặt nền móng cho Mặt trận nhân dân Á-Phi sau này.",
    description:
      "Sáng lập Hội Liên hiệp Thuộc địa tại Pháp và tham gia thành lập Hội Liên hiệp các Dân tộc bị áp bức tại Trung Quốc.",
    tags: ["Liên minh", "Thuộc địa", "Đoàn kết", "Á-Phi"],
    sources: ["Văn kiện Đảng", "Tư liệu lịch sử"],
    relatedEvents: [1, 6],
  },
  {
    id: 3,
    year: "1941",
    yearSort: 1941,
    title: "Thành lập Việt Minh",
    color: "red",
    phase: "Nền tảng",
    category: "revolution",
    content: "Thành lập Mặt trận Việt Nam Độc lập đồng minh.",
    significance:
      "Tự lực, tự cường, chuẩn bị giành độc lập, tạo cơ sở hợp tác với Đồng Minh chống Phát xít.",
    description: "Thành lập Mặt trận Việt Nam Độc lập đồng minh.",
    tags: ["Việt Minh", "Độc lập", "Mặt trận", "Chống Phát xít"],
    sources: ["Lịch sử Việt Nam", "Tài liệu Việt Minh"],
    relatedEvents: [1, 4],
  },

  // GIAI ĐOẠN 2: 1945-1975 - Đoàn kết Chiến đấu
  {
    id: 4,
    year: "1949",
    yearSort: 1949,
    title: "Hợp tác Toàn diện với Trung Quốc và Liên Xô",
    color: "red",
    phase: "Chiến đấu",
    category: "alliance",
    content:
      "Sau khi nước Cộng hòa Nhân dân Trung Hoa thành lập (1949), Việt Nam thúc đẩy quan hệ chính trị, quân sự và kinh tế.",
    significance:
      "Tạo sức mạnh tổng hợp trong cuộc đấu tranh giải phóng dân tộc",
    description:
      "Thiết lập quan hệ hợp tác toàn diện với Trung Quốc và Liên Xô, nhận được viện trợ vũ khí, đào tạo cán bộ và hỗ trợ ngoại giao.",
    tags: ["Trung Quốc", "Liên Xô", "Hợp tác", "Viện trợ"],
    sources: ["Quan hệ Việt-Trung", "Lịch sử ngoại giao"],
    relatedEvents: [3, 5],
  },
  {
    id: 5,
    year: "1951",
    yearSort: 1951,
    title: "Liên minh Việt-Miên-Lào",
    color: "green",
    phase: "Chiến đấu",
    category: "alliance",
    content:
      "Hợp tác quân sự, chính trị, và hỗ trợ lẫn nhau trong cuộc kháng chiến chung tại Đông Dương.",
    significance:
      "Tạo thế chiến lược vững chắc, đảm bảo chiến thắng Điện Biên Phủ và kháng chiến chống Mỹ.",
    description:
      "Đại hội liên minh Việt - Miên - Lào tại chiến khu Việt bắc tháng 3/1951. Hợp tác quân sự, chính trị trong kháng chiến.",
    tags: ["Việt-Miên-Lào", "Đông Dương", "Kháng chiến", "Chiến lược"],
    sources: ["Lịch sử kháng chiến", "Tài liệu Đông Dương"],
    relatedEvents: [4, 6, 8],
  },
  {
    id: 6,
    year: "1955",
    yearSort: 1955,
    title: "Tham gia Phong trào Á-Phi",
    color: "blue",
    phase: "Chiến đấu",
    category: "integration",
    content:
      "Tham dự Hội nghị Bandung (Indonesia), củng cố đoàn kết với các nước mới giành độc lập.",
    significance:
      "Nâng cao vị thế quốc tế, tranh thủ sự ủng hộ của thế giới thứ Ba.",
    description:
      "Việt Nam tham dự Hội nghị Á-Phi tại Bandung, Indonesia (1955), thúc đẩy đoàn kết các quốc gia vừa giành độc lập.",
    tags: ["Á-Phi", "Bandung", "Phi liên kết", "Thế giới thứ Ba"],
    sources: ["Hội nghị Bandung", "Phong trào Á-Phi"],
    relatedEvents: [2, 5, 7],
  },
  {
    id: 7,
    year: "Thập niên 1960",
    yearSort: 1960,
    title: "Mặt trận Nhân dân Thế giới",
    color: "white",
    phase: "Chiến đấu",
    category: "peace",
    content:
      "Vận động và nhận sự ủng hộ từ nhân dân, trí thức và phong trào hòa bình tại Pháp, Thụy Điển, Cuba và cả tại Mỹ.",
    significance:
      "Tạo áp lực ngoại giao, cô lập đối phương, nhận sự ủng hộ vật chất từ tổ chức quốc tế.",
    description:
      "Hình thành mặt trận nhân dân thế giới đoàn kết với Việt Nam chống đế quốc xâm lược, bao gồm cả nhân dân yêu chuộng hòa bình.",
    tags: ["Hòa bình", "Nhân dân", "Chống chiến tranh", "Quốc tế"],
    sources: ["Phong trào hòa bình", "Tài liệu quốc tế"],
    relatedEvents: [6, 8],
  },
  {
    id: 8,
    year: "1973",
    yearSort: 1973,
    title: "Ký Hiệp định Paris",
    color: "gold",
    phase: "Chiến đấu",
    category: "achievement",
    content:
      "Ký kết Hiệp định Paris chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam.",
    significance:
      "Thể hiện thắng lợi của sự kết hợp sức mạnh dân tộc và sức mạnh thời đại.",
    description:
      "Ký kết Hiệp định Paris chấm dứt chiến tranh và lập lại hòa bình ở Việt Nam.",
    tags: ["Hiệp định Paris", "Hòa bình", "Thắng lợi", "Ngoại giao"],
    sources: ["Hiệp định Paris 1973", "Lịch sử ngoại giao Việt Nam"],
    relatedEvents: [5, 7, 9],
  },

  // GIAI ĐOẠN 3: 1975-Nay - Hội nhập Quốc tế
  {
    id: 9,
    year: "1977",
    yearSort: 1977,
    title: "Gia nhập Liên Hợp Quốc",
    color: "white",
    phase: "Hội nhập",
    category: "integration",
    content:
      "Trở thành thành viên chính thức LHQ, tham gia các cơ chế hợp tác toàn cầu.",
    significance:
      "Khẳng định vị thế quốc tế, tham gia giải quyết các vấn đề toàn cầu.",
    description:
      "Trở thành thành viên chính thức LHQ, tham gia các cơ chế hợp tác toàn cầu.",
    tags: ["LHQ", "Hội nhập", "Đa phương", "Toàn cầu"],
    sources: ["Tài liệu LHQ", "Quan hệ quốc tế Việt Nam"],
    relatedEvents: [8, 10],
  },
  {
    id: 10,
    year: "1995",
    yearSort: 1995,
    title: "Bình thường hóa quan hệ Việt-Mỹ & Gia nhập ASEAN",
    color: "blue",
    phase: "Hội nhập",
    category: "integration",
    content:
      "Kết thúc quá trình hàn gắn sau chiến tranh với Mỹ và gia nhập ASEAN, bắt đầu hội nhập khu vực.",
    significance:
      "Chuyển từ đối đầu sang hợp tác, tham gia xây dựng Cộng đồng ASEAN.",
    description:
      "Kết thúc quá trình hàn gắn sau chiến tranh với Mỹ và gia nhập ASEAN, bắt đầu hội nhập khu vực.",
    tags: ["ASEAN", "Việt-Mỹ", "Hội nhập khu vực", "Bình thường hóa"],
    sources: ["Quan hệ Việt-Mỹ", "ASEAN và Việt Nam"],
    relatedEvents: [9, 11],
  },
  {
    id: 11,
    year: "1998-2007",
    yearSort: 1998,
    title: "Gia nhập APEC, ASEM, WTO",
    color: "silver",
    phase: "Hội nhập",
    category: "economics",
    content:
      "Tham gia APEC, ASEM và Tổ chức Thương mại Thế giới (WTO - 2007). Hội nhập kinh tế quốc tế sâu rộng.",
    significance:
      "Tham gia định hình các sân chơi kinh tế khu vực và toàn cầu.",
    description:
      "Tham gia APEC, ASEM và Tổ chức Thương mại Thế giới (WTO - 2007). Hội nhập kinh tế quốc tế sâu rộng.",
    tags: ["WTO", "APEC", "ASEM", "Kinh tế quốc tế"],
    sources: ["WTO và Việt Nam", "Hội nhập kinh tế"],
    relatedEvents: [10, 12],
  },
  {
    id: 12,
    year: "2007-Nay",
    yearSort: 2007,
    title: "Quan hệ Đối tác Chiến lược",
    color: "gold",
    phase: "Hội nhập",
    category: "achievement",
    content:
      "Thiết lập quan hệ đối tác với các cường quốc: Nhật, Hàn, Nga, Ấn Độ, EU, Mỹ, Trung Quốc. Hợp tác đa lĩnh vực.",
    significance:
      "Đa phương hóa, đa dạng hóa quan hệ quốc tế, nâng cao vị thế Việt Nam.",
    description:
      "Thiết lập quan hệ đối tác với các cường quốc: Nhật, Hàn, Nga, Ấn Độ, EU, Mỹ, Trung Quốc. Hợp tác đa lĩnh vực.",
    tags: ["Đối tác chiến lược", "Đa phương hóa", "Cường quốc", "Hợp tác"],
    sources: ["Quan hệ đối tác chiến lược", "Ngoại giao Việt Nam"],
    relatedEvents: [11, 13],
  },
  {
    id: 13,
    year: "2014-2020",
    yearSort: 2014,
    title: "Đóng góp Hòa bình Quốc tế",
    color: "white",
    phase: "Hội nhập",
    category: "peace",
    content:
      "Tham gia Lực lượng Gìn giữ Hòa bình LHQ, Chủ tịch ASEAN 2020, Ủy viên không thường trực HĐBA LHQ.",
    significance:
      "Thể hiện trách nhiệm với hòa bình, an ninh quốc tế và vai trò tích cực trong cộng đồng quốc tế.",
    description:
      "Tham gia Lực lượng Gìn giữ Hòa bình LHQ, Chủ tịch ASEAN 2020, Ủy viên không thường trực HĐBA LHQ.",
    tags: ["Gìn giữ hòa bình", "HĐBA LHQ", "ASEAN 2020", "Trách nhiệm quốc tế"],
    sources: ["Việt Nam tại LHQ", "Chủ tịch ASEAN 2020"],
    relatedEvents: [12],
  },
];

// Cấu hình các giai đoạn
export const PHASE_CONFIG: Record<string, PhaseConfig> = {
  "Nền tảng": {
    minX: 5,
    maxX: 32,
    color: "from-red-900/30 to-orange-900/30",
    title: "Nền Tảng",
    description: "Giai đoạn xây dựng nền tảng tư tưởng và tổ chức",
    period: "1920-1945",
    icon: "🏗️",
  },
  "Chiến đấu": {
    minX: 35,
    maxX: 67,
    color: "from-green-900/30 to-blue-900/30",
    title: "Chiến Đấu",
    description: "Giai đoạn đấu tranh giải phóng và thống nhất đất nước",
    period: "1945-1975",
    icon: "⚔️",
  },
  "Hội nhập": {
    minX: 70,
    maxX: 95,
    color: "from-blue-900/30 to-purple-900/30",
    title: "Hội Nhập",
    description: "Giai đoạn hội nhập và phát triển quốc tế",
    period: "1975-Nay",
    icon: "🌐",
  },
};

// Mapping màu sắc theo category
export const CATEGORY_COLORS: Record<
  EventCategory,
  { color: string; name: string; icon: string }
> = {
  revolution: { color: "red", name: "Cách mạng & Chính trị", icon: "🔴" },
  alliance: { color: "green", name: "Liên minh & Đoàn kết", icon: "🟢" },
  integration: { color: "blue", name: "Hội nhập Quốc tế", icon: "🔵" },
  peace: { color: "white", name: "Hòa bình & Nhân đạo", icon: "⚪" },
  achievement: { color: "gold", name: "Thành tựu Vĩ đại", icon: "🟡" },
  economics: { color: "silver", name: "Kinh tế Quốc tế", icon: "⚫" },
};

// Animation configs
export const ANIMATION_CONFIG = {
  staggerDelay: 0.1,
  springConfig: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
  },
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
};

// SEO và Meta data
export const SITE_CONFIG = {
  name: "Tư tưởng Hồ Chí Minh về Đoàn kết Quốc tế",
  description:
    "Khám phá hành trình quang vinh của tư tưởng Hồ Chí Minh về đoàn kết quốc tế qua các mốc lịch sử quan trọng",
  url: "https://hcm-international-solidarity.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "Hồ Chí Minh",
    "đoàn kết quốc tế",
    "lịch sử Việt Nam",
    "tư tưởng chính trị",
    "quan hệ quốc tế",
    "cách mạng Việt Nam",
  ],
  author: "Viện Bảo tàng Tư tưởng Hồ Chí Minh",
};
