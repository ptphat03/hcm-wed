"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Globe,
  Clock,
  Lightbulb,
  Target,
} from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";
import MuseumExhibit from "@/components/museum/MuseumExhibit";
import { slideUpFadeIn, staggerContainer } from "@/utils/animations";

const featuredExhibits = [
  {
    id: "ho-chi-minh-solidarity",
    title: "Tư tưởng Đoàn kết Quốc tế",
    subtitle: "Chủ tịch Hồ Chí Minh",
    description:
      "Khám phá những tư tưởng sâu sắc về đoàn kết quốc tế của vị lãnh tụ vĩ đại",
    imageUrl:
      "https://cdn.britannica.com/02/181202-050-0E31A25F/Ho-Chi-Minh-1957.jpg",
    imageAlt: "Chân dung Chủ tịch Hồ Chí Minh năm 1957",
    category: "theory" as const,
    year: "1920-1969",
    audioUrl: "/audio/ho-chi-minh-solidarity.mp3",
    relatedLinks: [
      {
        title: "Dòng thời gian",
        url: "/star-library",
        type: "document" as const,
      },
      {
        title: "Tư tưởng chính trị",
        url: "/thoughts",
        type: "document" as const,
      },
      {
        title: "Quan hệ quốc tế",
        url: "/international",
        type: "external" as const,
      },
    ],
  },
  {
    id: "international-cooperation",
    title: "Hợp tác Quốc tế",
    subtitle: "Từ lý thuyết đến thực tiễn",
    description:
      "Những hoạt động hợp tác quốc tế cụ thể trong lịch sử Việt Nam",
    imageUrl:
      "https://th.bing.com/th/id/OSK.HEROkpZoXE2N-dFmgT3K8Inrm-wjA24AnitBmo1JSwfoMGI?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Chủ tịch Hồ Chí Minh với các lãnh đạo quốc tế",
    category: "practice" as const,
    year: "1945-1975",
    audioUrl: "/audio/international-cooperation.mp3",
    relatedLinks: [
      {
        title: "Các hội nghị quốc tế",
        url: "/conferences",
        type: "document" as const,
      },
      {
        title: "Ngoại giao Việt Nam",
        url: "/diplomacy",
        type: "external" as const,
      },
    ],
  },
  {
    id: "peace-movement",
    title: "Phong trào Hòa bình",
    subtitle: "Đấu tranh vì hòa bình thế giới",
    description:
      "Vai trò của Việt Nam trong phong trào hòa bình và dân chủ thế giới",
    imageUrl:
      "https://e7.pngegg.com/pngimages/0/125/png-clipart-columbidae-bird-peace-symbols-pigeon-white-animals.png",
    imageAlt: "Biểu tượng chim bồ câu hòa bình",
    category: "historical" as const,
    year: "1950-1975",
    audioUrl: "/audio/peace-movement.mp3",
    relatedLinks: [
      { title: "Phong trào hòa bình", url: "/peace", type: "video" as const },
      {
        title: "Đoàn kết Á-Phi",
        url: "/asia-africa",
        type: "document" as const,
      },
    ],
  },
];

const keyStatistics = [
  {
    icon: BookOpen,
    value: "200+",
    label: "Tác phẩm nghiên cứu",
    color: "text-blue-400",
  },
  {
    icon: Users,
    value: "50+",
    label: "Quốc gia hợp tác",
    color: "text-green-400",
  },
  {
    icon: Globe,
    value: "100+",
    label: "Sự kiện quốc tế",
    color: "text-yellow-400",
  },
  { icon: Clock, value: "75", label: "Năm hoạt động", color: "text-red-400" },
];

const quickLinks = [
  {
    icon: Lightbulb,
    title: "Tư tưởng cốt lõi",
    description: "Những quan điểm chủ đạo về đoàn kết quốc tế",
    modalType: "core-thoughts" as const,
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Mục tiêu chiến lược",
    description: "Định hướng và mục tiêu lâu dài trong quan hệ quốc tế",
    modalType: "strategic-goals" as const,
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Users,
    title: "Hợp tác đa phương",
    description: "Các hình thức hợp tác với nhiều quốc gia và tổ chức",
    modalType: "multilateral" as const,
    color: "from-green-400 to-teal-500",
  },
  {
    icon: Globe,
    title: "Tầm nhìn toàn cầu",
    description: "Góc nhìn toàn diện về vấn đề quốc tế và khu vực",
    modalType: "global-vision" as const,
    color: "from-red-400 to-pink-500",
  },
];
import FloatingChatbot from "@/components/FloatingChatbot";
import { QuickAccessModal } from "@/components/ui/QuickAccessModal";

export default function Home() {
  const [selectedModal, setSelectedModal] = React.useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-7xl space-y-24">
        {/* Featured Museum Exhibits */}
        <motion.section
          className="space-y-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Triển lãm Đặc biệt
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Khám phá những khía cạnh sâu sắc nhất của tư tưởng đoàn kết quốc
              tế qua các triển lễm tương tác và hiện vật lịch sử quý báu
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredExhibits.map((exhibit) => (
              <motion.div key={exhibit.id} variants={slideUpFadeIn}>
                <MuseumExhibit {...exhibit} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Statistics */}
        {/* <motion.section
          className="py-16 bg-gradient-to-r from-black/40 to-black/60 rounded-3xl border border-gray-800"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Thành tựu Nổi bật
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyStatistics.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center space-y-3"
                    variants={slideUpFadeIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-2xl flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div>
                      <div className={`text-3xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section> */}

        {/* Quick Access  */}
        <motion.section
          className="space-y-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              variants={slideUpFadeIn}
            >
              Khám phá chuyên sâu
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Truy cập nhanh đến các chủ đề và nội dung quan trọng nhất
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div key={index} variants={slideUpFadeIn}>
                  <motion.div
                    className="group block p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedModal(link.modalType);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="space-y-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
                          {link.description}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 group-hover:text-yellow-400 transition-colors">
                        <span className="text-sm">Xem chi tiết</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center py-20 bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-yellow-400/10 rounded-3xl border border-yellow-400/20"
          variants={slideUpFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Bắt đầu hành trình khám phá
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tham gia cùng chúng tôi để tìm hiểu sâu hơn về tư tưởng đoàn kết
              quốc tế của Chủ tịch Hồ Chí Minh và ý nghĩa của nó trong thời đại
              ngày nay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/timeline"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-red-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Xem dòng thời gian
              </Link>
              <Link
                href="/thoughts"
                className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 inline-flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Đọc tư tưởng
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Floating Chatbot */}
      <FloatingChatbot />

      {/* Quick Access Modal */}
      {selectedModal && (
        <QuickAccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={
            selectedModal as
              | "core-thoughts"
              | "strategic-goals"
              | "multilateral"
              | "global-vision"
          }
        />
      )}
    </div>
  );
}
