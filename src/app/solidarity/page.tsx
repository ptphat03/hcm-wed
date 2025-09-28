"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Users,
  Heart,
  HandHeart,
  Flag,
  Shield,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Calendar,
  MapPin,
  Target,
} from "lucide-react";
import { slideUpFadeIn, staggerContainer } from "@/utils/animations";

const solidarityMovements = [
  {
    id: "indochina-solidarity",
    title: "Đoàn kết Việt Nam - Lào - Campuchia",
    description:
      "Mối quan hệ đặc biệt như 'môi với răng' giữa ba dân tộc bán đảo Đông Dương",
    period: "1941 - 1975",
    image:
      "https://th.bing.com/th/id/OIP.yj8NlnQPGPX_ZeZJA5DvdQHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    highlights: [
      "Hỗ trợ Pathet Lào và Khmer Issarak",
      "Cử cán bộ sang huấn luyện và tư vấn",
      "Vận động dư luận quốc tế",
      "Đồng cam cộng khổ trong đấu tranh",
    ],
    significance:
      "Chỉ khi nhân dân Lào và Campuchia hoàn toàn giải phóng thì sự giải phóng của Việt Nam mới trở nên chắc chắn và hoàn toàn.",
  },
  {
    id: "asia-africa-solidarity",
    title: "Đoàn kết với các dân tộc Á - Phi",
    description:
      "Ủng hộ cuộc đấu tranh của các dân tộc bị áp bức trên toàn châu Á và châu Phi",
    period: "1920s - 1975",
    image:
      "https://i.ytimg.com/vi/CtdQ7Lhqekc/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYSSBKKFkwDw==&rs=AOn4CLC7Ej4u7pyshMp8B29KHW7R7EAUuQ",
    highlights: [
      "Sáng lập Hội Liên hiệp các dân tộc bị áp bức",
      "Tham dự Hội nghị Á-Phi Bandung 1955",
      "Chiến thắng Điện Biên Phủ như 'pháo hiệu cổ vũ'",
      "Mở ra chương mới cho các nước đang phát triển",
    ],
    significance:
      "Coi đây là một phần quan trọng để thực hiện nền hòa bình thế giới.",
  },
  {
    id: "peace-democracy-movement",
    title: "Phong trào Hòa bình, Dân chủ Thế giới",
    description:
      "Liên kết với phong trào bảo vệ hòa bình, tự do, công lý và bình đẳng của nhân loại",
    period: "1945 - 1975",
    image: "https://th.bing.com/th/id/R.fabb48d69795dd2aef16cd25324e0ccb?rik=MGqlRz1JeJ8HTQ&riu=http%3a%2f%2fnghiencuuquocte.org%2fwp-content%2fuploads%2f2019%2f10%2fVietnam_War_protestors.jpg&ehk=n6MvdEh8pyfFvv1UlIiCIhyQFkbW3l4Nh5d%2b%2fiNryDM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    highlights: [
      "Hòa bình 'xây trên công bình và lý tưởng dân chủ'",
      "Con đường thương lượng và đối thoại",
      "Tạo Mặt trận nhân dân thế giới",
      "Phong trào phản chiến tại Mỹ",
    ],
    significance:
      "Tranh thủ sự ủng hộ rộng rãi của các lực lượng tiến bộ trên thế giới.",
  },
];

const keyPrinciples = [
  {
    icon: Flag,
    title: "Độc lập - Tự do - Bình đẳng",
    description: "Giương cao ngọn cờ quyền bình đẳng giữa các dân tộc",
    color: "from-red-400 to-red-600",
  },
  {
    icon: HandHeart,
    title: "Đồng cam cộng khổ",
    description: "Chia sẻ khó khăn và thắng lợi với các dân tộc bạn",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Hòa bình chân chính",
    description: "Hòa bình xây dựng trên công bằng và dân chủ",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Users,
    title: "Mặt trận thống nhất",
    description: "Liên kết các dân tộc chống kẻ thù chung",
    color: "from-green-400 to-green-600",
  },
];

const historicalEvents = [
  {
    year: "1920s",
    event: "Sáng lập Hội Liên hiệp các dân tộc bị áp bức",
    location: "Trung Quốc",
    significance: "Mở rộng quan hệ ra khu vực Á-Phi",
  },
  {
    year: "1941",
    event: "Việt Minh hỗ trợ Pathet Lào và Khmer Issarak",
    location: "Đông Dương",
    significance: "Thiết lập đoàn kết đặc biệt ba nước",
  },
  {
    year: "1954",
    event: "Chiến thắng Điện Biên Phủ",
    location: "Việt Nam",
    significance: "Pháo hiệu cổ vũ phong trào giải phóng dân tộc",
  },
  {
    year: "1955",
    event: "Hội nghị Á-Phi Bandung",
    location: "Indonesia",
    significance: "Việt Nam tham gia phong trào Á-Phi",
  },
  {
    year: "1970",
    event: "Đỉnh cao phong trào phản chiến Mỹ",
    location: "Hoa Kỳ",
    significance: "4 triệu người Mỹ biểu tình ủng hộ Việt Nam",
  },
];

const sources = [
  {
    title:
      "Chủ tịch Hồ Chí Minh - Chiến sĩ lỗi lạc của phong trào cộng sản và công nhân quốc tế",
    url: "https://tapchikinhtetaichinh.vn/chu-tich-ho-chi-minh-chien-si-loi-lac-cua-phong-trao-cong-san-va-cong-nhan-quoc-te-nha-van-hoa-kiet-xuat.html",
    type: "article",
  },
  {
    title:
      "Tư tưởng Hồ Chí Minh về đoàn kết quốc tế và đoàn kết Việt Nam - Lào - Campuchia",
    url: "https://lyluanchinhtri.vn/tu-tuong-ho-chi-minh-ve-doan-ket-quoc-te-va-doan-ket-viet-nam-lao-campuchia-882.html",
    type: "research",
  },
  {
    title: "Chủ tịch Hồ Chí Minh với mối quan hệ đặc biệt Việt Nam - Lào",
    url: "https://www.qdnd.vn/chinh-tri/cac-van-de/chu-tich-ho-chi-minh-voi-moi-quan-he-dac-biet-viet-nam-lao-828965",
    type: "news",
  },
];

export default function SolidarityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-900/90 via-yellow-800/80 to-red-900/90">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat bg-[length:60px_60px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-yellow-400/20 px-6 py-3 rounded-full border border-yellow-400/30"
              variants={slideUpFadeIn}
            >
              <Heart className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-200 font-medium">
                Tinh thần Đoàn kết
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              variants={slideUpFadeIn}
            >
              Đoàn kết với các dân tộc
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 block">
                trên thế giới
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              variants={slideUpFadeIn}
            >
              Một trụ cột cốt lõi và là nét độc đáo trong Tư tưởng Hồ Chí Minh
              về đoàn kết quốc tế. Khác với các bậc tiền bối chỉ tập trung vào
              phạm vi dân tộc, Người đã giương cao ngọn cờ độc lập, tự do và
              quyền bình đẳng giữa các dân tộc, biến cuộc đấu tranh của Việt Nam
              thành một phần của phong trào tiến bộ chung của nhân loại.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={slideUpFadeIn}
            >
              <Link
                href="#solidarity-movements"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-red-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Khám phá các phong trào
              </Link>
              <Link
                href="#key-principles"
                className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center justify-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Nguyên tắc cơ bản
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
      <section id="key-principles" className="py-20 bg-black/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Nguyên tắc cơ bản
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Những giá trị nền tảng trong tinh thần đoàn kết quốc tế của Chủ
              tịch Hồ Chí Minh
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
                  variants={slideUpFadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solidarity Movements */}
      <section id="solidarity-movements" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Hai mặt trận đoàn kết chính
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Tinh thần đoàn kết quốc tế được thể hiện rõ qua việc thiết lập hai
              mặt trận đoàn kết chính
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {solidarityMovements.map((movement, index) => (
              <motion.div
                key={movement.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                variants={slideUpFadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <Image
                      src={movement.image}
                      alt={movement.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center space-x-2 bg-black/60 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-200 text-sm font-medium">
                          {movement.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {movement.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {movement.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-yellow-400">
                        Điểm nổi bật:
                      </h4>
                      <ul className="space-y-2">
                        {movement.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <ArrowRight className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-yellow-400/10 to-red-500/10 rounded-xl border border-yellow-400/20">
                      <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                        Ý nghĩa:
                      </h4>
                      <p className="text-gray-300 italic">
                        &ldquo;{movement.significance}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Dòng thời gian lịch sử
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Những sự kiện quan trọng trong quá trình xây dựng tinh thần đoàn
              kết quốc tế
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-400" />

            <div className="space-y-12">
              {historicalEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-8"
                  variants={slideUpFadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full border-4 border-black" />
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Event content */}
                  <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="text-2xl font-bold text-yellow-400 mb-2 md:mb-0">
                        {event.year}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {event.event}
                    </h3>

                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {event.significance}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Focus: American Anti-War Movement */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl border border-blue-500/20 p-8 md:p-12"
            variants={slideUpFadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center space-x-3 bg-blue-400/20 px-6 py-3 rounded-full border border-blue-400/30">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-blue-200 font-medium">
                  Trường hợp đặc biệt
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                &ldquo;Mặt trận số hai chống đế quốc Mỹ&rdquo;
              </h2>

              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Một minh chứng rõ nét cho tính nhân văn và tầm nhìn của Hồ Chí
                Minh là việc Người xem phong trào phản đối chiến tranh Việt Nam
                ngay tại Hoa Kỳ là &ldquo;Mặt trận số hai chống đế quốc
                Mỹ&rdquo;.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-blue-400">
                  Cơ sở hình thành
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">
                      Phong trào phản chiến bùng phát mạnh mẽ, đạt đỉnh cao vào
                      tháng 5/1970 với{" "}
                      <strong className="text-white">4 triệu người Mỹ</strong>{" "}
                      xuống đường biểu tình.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">
                      Nguyên nhân chủ yếu là do những hậu quả nặng nề về kinh
                      tế, nhân mạng.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">
                      Các tội ác chiến tranh của quân đội Mỹ bị phơi bày trước
                      dư luận, thức tỉnh lương tri của nhân dân Mỹ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-400">
                  Tác động
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">
                      Tạo ra sức ép to lớn lên chính quyền Mỹ.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">
                      Góp phần vào việc cắt giảm viện trợ.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">
                      Buộc Mỹ phải ngồi vào bàn đàm phán, tạo điều kiện thuận
                      lợi cho thắng lợi của cách mạng Việt Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/20">
              <p className="text-center text-lg text-gray-200 italic">
                &ldquo;Hồ Chí Minh tin tưởng rằng, bằng việc kết hợp nhuần
                nhuyễn giữa sức mạnh dân tộc và sự đồng tình, ủng hộ của các lực
                lượng tiến bộ trên thế giới, cách mạng Việt Nam đã vượt qua mọi
                khó khăn và giành thắng lợi vẻ vang.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sources and References */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center space-y-4 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Nguồn tham khảo
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Các tài liệu và nguồn thông tin liên quan đến nội dung
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sources.map((source, index) => (
              <motion.a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
                variants={slideUpFadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <BookOpen className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors leading-tight">
                      {source.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 capitalize">
                    {source.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center py-20 bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-yellow-400/10 rounded-3xl border border-yellow-400/20"
            variants={slideUpFadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Khám phá thêm
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tìm hiểu sâu hơn về các khía cạnh khác của tư tưởng đoàn kết
                quốc tế Hồ Chí Minh
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/thoughts"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-red-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Tư tưởng cơ bản
                </Link>
                <Link
                  href="/international"
                  className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Quan hệ quốc tế
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
