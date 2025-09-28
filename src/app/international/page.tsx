"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Users, Handshake, Award, MapPin, Calendar } from "lucide-react";
import { slideUpFadeIn, staggerContainer } from "@/utils/animations";

const internationalForces = [
  {
    id: "communist",
    title: "Phong trào Cộng sản và Công nhân Quốc tế",
    icon: Users,
    color: "from-red-500 to-pink-600",
    description:
      "Lực lượng nòng cốt trong cuộc đấu tranh chống chủ nghĩa đế quốc",
    keyEvents: [
      {
        year: "1920",
        event: "Tham gia Quốc tế Cộng sản",
        description: "Nguyễn Ái Quốc tham gia Comintern tại Pháp",
      },
      {
        year: "1924",
        event: "Đại hội Comintern V",
        description: "Tham dự tại Moskva, trao đổi kinh nghiệm cách mạng",
      },
      {
        year: "1930",
        event: "Thành lập Đảng Cộng sản Việt Nam",
        description: "Hợp nhất các tổ chức cộng sản thành một đảng thống nhất",
      },
    ],
    countries: ["Liên Xô", "Trung Quốc", "Cuba", "Đông Đức", "Triều Tiên"],
    impact:
      "Cung cấp nền tảng lý luận, hỗ trợ vật chất và tinh thần cho cách mạng Việt Nam",
  },
  {
    id: "liberation",
    title: "Phong trào Giải phóng Dân tộc",
    icon: Globe,
    color: "from-green-500 to-teal-600",
    description:
      "Liên kết các dân tộc bị áp bức để tạo thành mặt trận thống nhất",
    keyEvents: [
      {
        year: "1941",
        event: "Thành lập Mặt trận Việt Minh",
        description:
          "Đoàn kết toàn dân, hỗ trợ phong trào cách mạng ở Lào và Campuchia",
      },
      {
        year: "1955",
        event: "Hội nghị Bandung",
        description: "Việt Nam đóng góp quan trọng vào phong trào Á-Phi",
      },
      {
        year: "1954",
        event: "Chiến thắng Điện Biên Phủ",
        description:
          "Trở thành 'pháo hiệu' cho phong trào giải phóng dân tộc thế giới",
      },
    ],
    countries: ["Lào", "Campuchia", "Algeria", "Angola", "Indonesia"],
    impact: "Tạo mặt trận quốc tế rộng lớn, phá vỡ âm mưu chia rẽ của đế quốc",
  },
  {
    id: "peace",
    title: "Phong trào Hòa bình và Dân chủ Thế giới",
    icon: Handshake,
    color: "from-blue-500 to-purple-600",
    description:
      "Các lực lượng tiến bộ đấu tranh vì hòa bình, dân chủ và công lý",
    keyEvents: [
      {
        year: "1965-1975",
        event: "Phong trào phản chiến tại Mỹ",
        description:
          "'Mặt trận số hai chống đế quốc Mỹ' do Hồ Chí Minh định nghĩa",
      },
      {
        year: "1967",
        event: "Tiếp nhân sỹ trí thức Mỹ",
        description:
          "Chủ tịch Hồ Chí Minh tiếp các nhân sỹ phản đối chiến tranh",
      },
      {
        year: "1968",
        event: "Phong trào sinh viên thế giới",
        description: "Ủng hộ mạnh mẽ cuộc đấu tranh của nhân dân Việt Nam",
      },
    ],
    countries: ["Pháp", "Mỹ", "Nhật Bản", "Ấn Độ", "Anh"],
    impact:
      "Cô lập kẻ thù, tạo dư luận quốc tế ủng hộ cuộc đấu tranh chính nghĩa",
  },
];

const modernDiplomacy = [
  {
    title: "Đa dạng hóa, Đa phương hóa",
    description:
      "Thiết lập quan hệ ngoại giao với 193/193 quốc gia trên thế giới",
    stats: "193 quốc gia",
    color: "text-blue-400",
  },
  {
    title: "Hội nhập Kinh tế",
    description: "Tham gia các tổ chức kinh tế quốc tế quan trọng",
    stats: "WTO, APEC, ASEAN+",
    color: "text-green-400",
  },
  {
    title: "Ngoại giao Cây tre",
    description:
      "Gốc vững, thân chắc, cành uyển chuyển - triết lý ngoại giao Việt Nam",
    stats: "Độc lập, Tự chủ",
    color: "text-yellow-400",
  },
  {
    title: "Đóng góp Quốc tế",
    description: "Tích cực tham gia gìn giữ hòa bình và an ninh thế giới",
    stats: "UN Peacekeeping",
    color: "text-red-400",
  },
];

export default function InternationalPage() {
  const [activeForce, setActiveForce] = useState(internationalForces[0]);

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
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-400/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-400/30 mb-8"
            variants={slideUpFadeIn}
          >
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">Quan hệ Quốc tế</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={slideUpFadeIn}
          >
            Ba Lực lượng{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Đoàn kết
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={slideUpFadeIn}
          >
            Hồ Chí Minh xác định ba lực lượng chính trong đoàn kết quốc tế:
            Phong trào cộng sản và công nhân, phong trào giải phóng dân tộc, và
            phong trào hòa bình dân chủ thế giới.
          </motion.p>
        </motion.section>

        {/* Interactive Forces Section */}
        <motion.section
          className="mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Force Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {internationalForces.map((force) => {
              const Icon = force.icon;
              return (
                <motion.button
                  key={force.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    activeForce.id === force.id
                      ? "border-yellow-400 bg-gradient-to-br from-yellow-400/10 to-red-500/10"
                      : "border-gray-800 bg-gray-900/50 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveForce(force)}
                  variants={slideUpFadeIn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${force.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {force.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{force.description}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Active Force Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeForce.id}
              className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-8 border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Details */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${activeForce.color} rounded-2xl flex items-center justify-center`}
                      >
                        <activeForce.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        {activeForce.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {activeForce.description}
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">
                        Tác động:
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {activeForce.impact}
                      </p>
                    </div>
                  </div>

                  {/* Countries */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                      Các quốc gia tham gia
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeForce.countries.map((country, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Timeline */}
                <div>
                  <h4 className="text-white font-semibold mb-6 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    Các sự kiện quan trọng
                  </h4>
                  <div className="space-y-6">
                    {activeForce.keyEvents.map((event, index) => (
                      <div key={index} className="relative pl-8">
                        <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                        <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-700"></div>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-yellow-400 font-bold text-sm">
                              {event.year}
                            </span>
                            <h5 className="text-white font-semibold">
                              {event.event}
                            </h5>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Modern Diplomacy Section */}
        <motion.section
          className="py-16 bg-gradient-to-r from-black/40 to-black/60 rounded-3xl border border-gray-800 mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="px-8">
            <motion.div className="text-center mb-16" variants={slideUpFadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ngoại giao Hiện đại
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Kế thừa và phát triển tư tưởng Hồ Chí Minh trong thời kỳ Đổi mới
                và hội nhập quốc tế
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modernDiplomacy.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={slideUpFadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                    <Award className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className={`text-2xl font-bold ${item.color}`}>
                      {item.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quote Section */}
        <motion.section
          className="text-center py-16 mb-16"
          variants={slideUpFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-yellow-400/10 rounded-3xl border border-yellow-400/20 p-12">
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 italic">
              &ldquo;Chúng ta và Cam-pu-chia, và Lào là môi với răng... Hai dân
              tộc Cam-pu-chia, Lào hoàn toàn giải phóng, thì sự giải phóng của
              chúng ta mới chắc chắn và hoàn toàn&rdquo;
            </blockquote>
            <cite className="text-yellow-400 font-semibold">
              - Chủ tịch Hồ Chí Minh
            </cite>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center py-20"
          variants={slideUpFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tìm hiểu thêm
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Khám phá các khía cạnh khác của tư tưởng đoàn kết quốc tế
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/thoughts"
              className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Tư tưởng cơ bản
            </a>
            <a
              href="/timeline"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Dòng thời gian
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
