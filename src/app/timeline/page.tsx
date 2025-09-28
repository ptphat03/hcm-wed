"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Award, BookOpen, Star, Filter } from "lucide-react";
import { slideUpFadeIn, staggerContainer } from "@/utils/animations";

const timelineEvents = [
  {
    id: 1,
    year: "1920",
    title: "Bước ngoặt lớn - Tiếp cận Chủ nghĩa Mác-Lênin",
    category: "ideology",
    description: "Nguyễn Ái Quốc đọc 'Sơ thảo lần thứ nhất luận cương về vấn đề dân tộc và vấn đề thuộc địa' của V.I. Lênin, tìm thấy con đường cứu nước.",
    location: "Paris, Pháp",
    significance: "Hình thành nền tảng tư tưởng đoàn kết quốc tế",
    impact: "Chuyển từ chủ nghĩa dân tộc sang chủ nghĩa quốc tế vô sản",
    image: "https://cdn.britannica.com/02/181202-050-0E31A25F/Ho-Chi-Minh-1957.jpg"
  },
  {
    id: 2,
    year: "1924",
    title: "Tham dự Đại hội Comintern lần thứ V",
    category: "international",
    description: "Tại Moskva, trao đổi kinh nghiệm cách mạng với các lãnh đạo quốc tế, củng cố mối liên kết với phong trào cộng sản thế giới.",
    location: "Moskva, Liên Xô",
    significance: "Thiết lập mạng lưới quan hệ quốc tế",
    impact: "Nhận được sự ủng hộ từ Quốc tế Cộng sản",
    image: "https://th.bing.com/th/id/OIP.kpZoXE2N-dFmgT3K8Inrm-wjA24AnitBmo1JSwfoMGI?o=7&rs=1&pid=ImgDetMain"
  },
  {
    id: 3,
    year: "1925",
    title: "Thành lập Hội Việt Nam Cách mạng Thanh niên",
    category: "organization",
    description: "Tại Quảng Châu (Trung Quốc), thành lập tổ chức làm đầu mối đào tạo cán bộ cách mạng cho Việt Nam.",
    location: "Quảng Châu, Trung Quốc",
    significance: "Xây dựng lực lượng cách mạng có tổ chức",
    impact: "Đào tạo hàng trăm cán bộ cách mạng",
    image: "https://cdn.britannica.com/02/181202-050-0E31A25F/Ho-Chi-Minh-1957.jpg"
  },
  {
    id: 4,
    year: "1930",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    category: "organization",
    description: "Hợp nhất các tổ chức cộng sản thành một đảng thống nhất, tạo nền tảng vững chắc cho cách mạng Việt Nam.",
    location: "Hồng Kông",
    significance: "Có tổ chức lãnh đạo thống nhất",
    impact: "Lãnh đạo toàn bộ phong trào cách mạng Việt Nam",
    image: "https://th.bing.com/th/id/OIP.kpZoXE2N-dFmgT3K8Inrm-wjA24AnitBmo1JSwfoMGI?o=7&rs=1&pid=ImgDetMain"
  },
  {
    id: 5,
    year: "1941",
    title: "Thành lập Mặt trận Việt Minh",
    category: "liberation",
    description: "Vừa đấu tranh giành độc lập cho Việt Nam, vừa hỗ trợ phong trào cách mạng ở Lào và Campuchia, thể hiện tinh thần đoàn kết Đông Dương.",
    location: "Pác Bó, Cao Bằng",
    significance: "Mở rộng mặt trận đoàn kết",
    impact: "Tạo khối đoàn kết ba nước Đông Dương",
    image: "https://cdn.britannica.com/02/181202-050-0E31A25F/Ho-Chi-Minh-1957.jpg"
  },
  {
    id: 6,
    year: "1945",
    title: "Cách mạng Tháng Tám thành công",
    category: "liberation",
    description: "Thành lập nước Việt Nam Dân chủ Cộng hòa, khẳng định quyền độc lập dân tộc và vai trò trong phong trào giải phóng dân tộc thế giới.",
    location: "Hà Nội, Việt Nam",
    significance: "Giành được chính quyền",
    impact: "Trở thành biểu tượng cho các dân tộc bị áp bức",
    image: "https://th.bing.com/th/id/OIP.kpZoXE2N-dFmgT3K8Inrm-wjA24AnitBmo1JSwfoMGI?o=7&rs=1&pid=ImgDetMain"
  },
  {
    id: 7,
    year: "1954",
    title: "Chiến thắng Điện Biên Phủ",
    category: "victory",
    description: "Chiến thắng vang dội trở thành 'pháo hiệu cổ vũ mạnh mẽ' cho phong trào giải phóng dân tộc trên khắp thế giới.",
    location: "Điện Biên Phủ, Việt Nam",
    significance: "Thắng lợi lịch sử có tầm quốc tế",
    impact: "Khích lệ phong trào giải phóng dân tộc toàn cầu",
    image: "https://cdn.britannica.com/02/181202-050-0E31A25F/Ho-Chi-Minh-1957.jpg"
  },
  {
    id: 8,
    year: "1955",
    title: "Tham dự Hội nghị Á-Phi Bandung",
    category: "international",
    description: "Việt Nam đóng góp quan trọng, thể hiện vai trò là thành viên có trách nhiệm của cộng đồng các nước mới giành độc lập.",
    location: "Bandung, Indonesia",
    significance: "Hội nhập cộng đồng quốc tế",
    impact: "Củng cố vị thế trong phong trào Á-Phi",
    image: "https://th.bing.com/th/id/OIP.kpZoXE2N-dFmgT3K8Inrm-wjA24AnitBmo1JSwfoMGI?o=7&rs=1&pid=ImgDetMain"
  },
  {
    id: 9,
    year: "1965-1975",
    title: "Phong trào phản chiến tại Mỹ",
    category: "peace",
    description: "Được Hồ Chí Minh gọi là 'Mặt trận số hai chống đế quốc Mỹ', thể hiện sức mạnh của đoàn kết quốc tế.",
    location: "Hoa Kỳ",
    significance: "Tạo mặt trận trong lòng kẻ thù",
    impact: "Góp phần chấm dứt chiến tranh Việt Nam",
    image: "https://e7.pngegg.com/pngimages/0/125/png-clipart-columbidae-bird-peace-symbols-pigeon-white-animals.png"
  },
  {
    id: 10,
    year: "1967",
    title: "Tiếp nhân sỹ trí thức Mỹ phản đối chiến tranh",
    category: "peace",
    description: "Chủ tịch Hồ Chí Minh tiếp các nhân sỹ Mỹ, thể hiện tinh thần hòa hiếu và khát vọng hòa bình.",
    location: "Hà Nội, Việt Nam",
    significance: "Ngoại giao nhân dân",
    impact: "Khơi dậy lương tri nhân loại",
    image: "https://cdn.britannica.com/02/181202-050-0E31A25F/Ho-Chi-Minh-1957.jpg"
  }
];

const categories = [
  { id: "all", name: "Tất cả", color: "text-white", count: timelineEvents.length },
  { id: "ideology", name: "Tư tưởng", color: "text-blue-400", count: timelineEvents.filter(e => e.category === "ideology").length },
  { id: "organization", name: "Tổ chức", color: "text-green-400", count: timelineEvents.filter(e => e.category === "organization").length },
  { id: "international", name: "Quốc tế", color: "text-yellow-400", count: timelineEvents.filter(e => e.category === "international").length },
  { id: "liberation", name: "Giải phóng", color: "text-red-400", count: timelineEvents.filter(e => e.category === "liberation").length },
  { id: "victory", name: "Thắng lợi", color: "text-purple-400", count: timelineEvents.filter(e => e.category === "victory").length },
  { id: "peace", name: "Hòa bình", color: "text-pink-400", count: timelineEvents.filter(e => e.category === "peace").length }
];

export default function TimelinePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);

  const filteredEvents = selectedCategory === "all" 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || "text-white";
  };

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
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400/20 to-blue-500/20 px-6 py-3 rounded-full border border-green-400/30 mb-8"
            variants={slideUpFadeIn}
          >
            <Calendar className="w-6 h-6 text-green-400" />
            <span className="text-green-400 font-semibold">Dòng thời gian Lịch sử</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={slideUpFadeIn}
          >
            Hành trình <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Đoàn kết</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={slideUpFadeIn}
          >
            Theo dõi quá trình hình thành và phát triển tư tưởng đoàn kết quốc tế của Hồ Chí Minh 
            qua các mốc thời gian quan trọng trong lịch sử.
          </motion.p>
        </motion.section>

        {/* Category Filter */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 font-medium">Lọc theo chương:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                    : 'border-gray-700 bg-gray-900/50 text-gray-400 hover:border-gray-600'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                variants={slideUpFadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={selectedCategory === category.id ? 'text-yellow-400' : category.color}>
                  {category.name}
                </span>
                <span className="ml-2 text-xs opacity-60">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          className="relative mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="relative pl-20"
                  variants={slideUpFadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-4 border-black"></div>
                  
                  {/* Event Card */}
                  <div 
                    className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Content */}
                      <div className="lg:flex-1 space-y-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-yellow-400">
                            {event.year}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 ${getCategoryColor(event.category)}`}>
                            {categories.find(cat => cat.id === event.category)?.name}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4" />
                            <span>{event.significance}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image */}
                      <div className="lg:w-48 lg:h-32">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={192}
                          height={128}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-gray-700"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Image */}
                  <div className="lg:w-1/3">
                    <Image
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-2/3 space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl font-bold text-yellow-400">
                        {selectedEvent.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gray-800 ${getCategoryColor(selectedEvent.category)}`}>
                        {categories.find(cat => cat.id === selectedEvent.category)?.name}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white">
                      {selectedEvent.title}
                    </h2>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          Địa điểm
                        </h4>
                        <p className="text-gray-300">{selectedEvent.location}</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Ý nghĩa
                        </h4>
                        <p className="text-gray-300">{selectedEvent.significance}</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-4 md:col-span-2">
                        <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Tác động
                        </h4>
                        <p className="text-gray-300">{selectedEvent.impact}</p>
                      </div>
                    </div>
                    
                    <button
                      className="w-full py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-red-600 transition-all duration-300"
                      onClick={() => setSelectedEvent(null)}
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.section
          className="text-center py-20"
          variants={slideUpFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Khám phá sâu hơn
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Tìm hiểu chi tiết về các khía cạnh của tư tưởng đoàn kết quốc tế
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/thoughts"
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Tư tưởng cơ bản
            </a>
            <a
              href="/international"
              className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
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