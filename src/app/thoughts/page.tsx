"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Target, Heart, Globe, Users } from "lucide-react";
import { slideUpFadeIn, staggerContainer } from "@/utils/animations";

const thoughtSections = [
  {
    id: "co-so-ly-luan",
    title: "Cơ sở Lý luận và Sự Hình thành",
    icon: Lightbulb,
    color: "from-blue-500 to-purple-600",
    content: {
      overview:
        "Tư tưởng đoàn kết quốc tế của Hồ Chí Minh là một sự kết tinh vĩ đại của truyền thống dân tộc và tinh hoa trí tuệ của thời đại.",
      keyPoints: [
        {
          title: "Nguồn gốc Truyền thống",
          description:
            "Truyền thống yêu nước và đoàn kết dân tộc của Việt Nam qua hàng nghìn năm dựng nước và giữ nước.",
        },
        {
          title: "Bước ngoặt năm 1920",
          description:
            "Khi đọc 'Sơ thảo lần thứ nhất luận cương về vấn đề dân tộc và vấn đề thuộc địa' của V.I. Lênin, Người đã tìm thấy con đường cứu nước.",
        },
        {
          title: "Quá trình Tích lũy",
          description:
            "Qua hành trình bôn ba khắp năm châu bốn biển, Người củng cố nhận thức về bản chất của chủ nghĩa tư bản đế quốc.",
        },
      ],
    },
  },
  {
    id: "su-can-thiet",
    title: "Sự cần thiết khách quan",
    icon: Target,
    color: "from-green-500 to-teal-600",
    content: {
      overview:
        "Đoàn kết quốc tế là một yêu cầu tất yếu, có ý nghĩa sống còn đối với cách mạng Việt Nam.",
      keyPoints: [
        {
          title: "Kết hợp Sức mạnh",
          description:
            "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo nên sức mạnh tổng hợp cho cách mạng.",
        },
        {
          title: "Trách nhiệm Quốc tế",
          description:
            "Thể hiện tinh thần trách nhiệm đối với sự nghiệp đấu tranh chung của nhân loại tiến bộ.",
        },
        {
          title: "Tầm nhìn Chiến lược",
          description:
            "Vượt ra khỏi lợi ích dân tộc hẹp hòi, đặt cách mạng Việt Nam vào dòng chảy chung của lịch sử thế giới.",
        },
      ],
    },
  },
  {
    id: "ba-luc-luong",
    title: "Ba Lực lượng Chính",
    icon: Users,
    color: "from-yellow-500 to-orange-600",
    content: {
      overview:
        "Đại đoàn kết quốc tế được xây dựng trên cơ sở liên minh chiến lược với ba lực lượng chính.",
      keyPoints: [
        {
          title: "Phong trào Cộng sản và công nhân quốc tế",
          description:
            "Lực lượng nòng cốt, bảo đảm vững chắc cho thắng lợi của chủ nghĩa cộng sản.",
        },
        {
          title: "Phong trào Đấu tranh giải phóng dân tộc",
          description:
            "Liên kết các dân tộc bị áp bức để tạo thành một mặt trận thống nhất.",
        },
        {
          title: "Phong trào Hòa bình, dân chủ thế giới",
          description:
            "Các lực lượng tiến bộ đấu tranh vì hòa bình, tự do, công lý và bình đẳng.",
        },
      ],
    },
  },
  {
    id: "nguyen-tac",
    title: "Nguyên tắc Chỉ đạo",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    content: {
      overview:
        "Tư tưởng đoàn kết quốc tế được xây dựng trên những nguyên tắc chỉ đạo vững chắc.",
      keyPoints: [
        {
          title: "Có Lý, Có Tình",
          description:
            "Đoàn kết dựa trên sự thống nhất về mục tiêu và lợi ích, được xây dựng trên cơ sở 'có lý, có tình'.",
        },
        {
          title: "Độc lập, Tự chủ",
          description:
            "Dựa vào sức mình là chính - 'Muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã'.",
        },
        {
          title: "Thêm bạn, bớt thù",
          description:
            "Mở rộng liên minh đoàn kết, thu hút các lực lượng trung gian, phân hóa và cô lập kẻ thù.",
        },
      ],
    },
  },
];

const historicalImpacts = [
  {
    period: "1920-1945",
    title: "Giai đoạn Hình thành",
    description:
      "Từ việc tiếp cận chủ nghĩa Mác-Lênin đến thành lập Đảng và giành chính quyền",
    achievements: [
      "Thành lập Đảng Cộng sản Việt Nam (1930)",
      "Thành lập Mặt trận Việt Minh (1941)",
      "Cách mạng Tháng Tám thành công (1945)",
    ],
  },
  {
    period: "1945-1975",
    title: "Kháng chiến Chống Pháp và Mỹ",
    description:
      "Vận dụng tư tưởng đoàn kết quốc tế trong hai cuộc kháng chiến",
    achievements: [
      "Chiến thắng Điện Biên Phủ (1954)",
      "Phong trào phản chiến tại Mỹ",
      "Thống nhất đất nước (1975)",
    ],
  },
  {
    period: "1975-nay",
    title: "Đổi mới và Hội nhập",
    description: "Kế thừa và phát triển trong thời kỳ hội nhập quốc tế",
    achievements: [
      "Chính sách Đổi mới (1986)",
      "Gia nhập ASEAN, WTO",
      "Ngoại giao cây tre Việt Nam",
    ],
  },
];

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <motion.section
          className="text-center py-16 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-red-500/20 px-6 py-3 rounded-full border border-yellow-400/30 mb-8"
            variants={slideUpFadeIn}
          >
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              Tư tưởng Hồ Chí Minh
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={slideUpFadeIn}
          >
            Đoàn kết{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Quốc tế
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={slideUpFadeIn}
          >
            Tư tưởng Hồ Chí Minh về đoàn kết quốc tế là một trong những di sản
            lý luận và thực tiễn quý báu, đóng vai trò kim chỉ nam xuyên suốt
            tiến trình cách mạng Việt Nam và có giá trị vượt thời gian.
          </motion.p>
        </motion.section>

        {/* Main Content Sections */}
        <motion.section
          className="space-y-24 mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {thoughtSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                className={`relative ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex lg:items-center lg:gap-16`}
                variants={slideUpFadeIn}
              >
                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {section.content.overview}
                  </p>

                  <div className="space-y-6">
                    {section.content.keyPoints.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-6 border border-gray-800"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                          {point.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {point.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                  <div
                    className={`relative bg-gradient-to-br ${section.color} rounded-3xl p-8 text-white`}
                  >
                    <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                    <div className="relative z-10 text-center">
                      <Icon className="w-24 h-24 mx-auto mb-6 opacity-80" />
                      <h3 className="text-2xl font-bold mb-4">
                        {section.title}
                      </h3>
                      <div className="text-white/90 text-sm">
                        Khía cạnh {index + 1} trong tư tưởng đoàn kết quốc tế
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Historical Impact Timeline */}
        <motion.section
          className="py-16 bg-gradient-to-r from-black/40 to-black/60 rounded-3xl border border-gray-800"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="px-8">
            <motion.div className="text-center mb-16" variants={slideUpFadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tác động Lịch sử
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Tư tưởng đoàn kết quốc tế đã được vận dụng và phát triển qua các
                giai đoạn lịch sử
              </p>
            </motion.div>

            <div className="space-y-12">
              {historicalImpacts.map((impact, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-start"
                  variants={slideUpFadeIn}
                >
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-4 py-2 rounded-full text-center font-bold">
                      {impact.period}
                    </div>
                  </div>

                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {impact.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {impact.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {impact.achievements.map(
                        (achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="bg-gray-800/50 rounded-lg p-4 text-center"
                          >
                            <div className="text-yellow-400 font-semibold text-sm">
                              {achievement}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center py-20 mt-24"
          variants={slideUpFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Khám phá thêm
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Tìm hiểu sâu hơn về các khía cạnh khác của tư tưởng Hồ Chí Minh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/timeline"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-red-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              Dòng thời gian lịch sử
            </a>
            <a
              href="/international"
              className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Quan hệ quốc tế
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
