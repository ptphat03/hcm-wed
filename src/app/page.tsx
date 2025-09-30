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
import Description1 from "@/components/museum/description_1";
import Description2 from "@/components/museum/description_2";
import Description3 from "@/components/museum/description_3";

const featuredExhibits = [
  {
    id: "ho-chi-minh-solidarity",
    title: "Sự cần thiết phải đoàn kết quốc tế",
    subtitle: "Chủ tịch Hồ Chí Minh khẳng định đoàn kết quốc tế là yêu cầu tất yếu, nhằm kết hợp sức mạnh dân tộc với sức mạnh thời đại và cùng nhân dân thế giới đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.",
    description: <Description1 />,
    imageUrl:
      "/images/image1.jpg",
    imageAlt: "Chân dung Chủ tịch Hồ Chí Minh năm 1957",
    category: "theory" as const,
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
    title: "Lực lượng đoàn kết quốc tế và hình thức tổ chức",
    subtitle: "Trong tư tưởng Hồ Chí Minh, lực lượng đoàn kết quốc tế là một yếu tố cốt lõi để đảm bảo thắng lợi cách mạng Việt Nam, được thực hiện thông qua việc phối hợp với các phong trào cộng sản và công nhân quốc tế, các dân tộc bị áp bức, các lực lượng tiến bộ trên thế giới, và xây dựng các mặt trận đoàn kết từ khu vực Đông Dương đến châu Á – châu Phi và toàn thế giới, nhằm tranh thủ sự ủng hộ chính trị, vật chất và tinh thần, củng cố uy tín và sức mạnh ngoại giao của cách mạng Việt Nam.",
    description: <Description2 />,
    imageUrl:
      "/images/image2.jpg",
    imageAlt: "Chủ tịch Hồ Chí Minh với các lãnh đạo quốc tế",
    category: "practice" as const,
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
    title: "Nguyên Tắc Đoàn Kết",
    subtitle: "Nguyên tắc đoàn kết theo tư tưởng Hồ Chí Minh là đoàn kết quốc tế trên cơ sở thống nhất mục tiêu, lợi ích, độc lập, tự chủ, kết hợp sức mạnh dân tộc với sức mạnh thời đại, trong đó nội lực là quyết định, ngoại lực là quan trọng.",
    description: <Description3 />,

    imageUrl:
      "/images/image3.jpg",
    imageAlt: "Biểu tượng chim bồ câu hòa bình",
    category: "historical" as const,
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
              Tư tưởng Hồ Chí Minh
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              variants={slideUpFadeIn}
            >
              Khám phá tư tưởng đoàn kết quốc tế qua nền tảng lý luận.,

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
