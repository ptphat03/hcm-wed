"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-yellow-50 text-gray-900 font-sans">
      {/* Header - Museum Style */}
      <motion.header
        className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span className="text-red-900 font-bold text-xl">🏛️</span>
              </motion.div>
              <div>
                <motion.h1
                  className="text-2xl md:text-4xl font-bold tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Bảo Tàng Tư Tưởng Hồ Chí Minh
                </motion.h1>
                <motion.p
                  className="text-yellow-200 text-sm md:text-base mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Khám phá di sản đoàn kết quốc tế
                </motion.p>
              </div>
            </motion.div>
            {/* Desktop Navigation - Museum Exhibit Style */}
            <nav className="hidden md:flex space-x-1">
              <a
                href="#overview"
                className="px-4 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 hover:text-white rounded-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/50"
              >
                🏛️ Tổng quan
              </a>
              <a
                href="#theory"
                className="px-4 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 hover:text-white rounded-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/50"
              >
                📚 Lý thuyết
              </a>
              <a
                href="#practical"
                className="px-4 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 hover:text-white rounded-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/50"
              >
                🌍 Thực tiễn
              </a>
              <a
                href="#references"
                className="px-4 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-100 hover:text-white rounded-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/50"
              >
                📖 Tài liệu
              </a>
            </nav>
            {/* Mobile Navigation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="md:hidden bg-yellow-400 text-red-900 border-yellow-400 hover:bg-yellow-300 px-6 py-2 rounded-full font-semibold shadow-lg"
                >
                  🎫 Khám phá
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gradient-to-b from-yellow-50 to-red-50 border-red-200 shadow-xl">
                <DropdownMenuItem asChild>
                  <a
                    href="#overview"
                    className="flex items-center space-x-2 py-3"
                  >
                    <span>🏛️</span>
                    <span>Tổng quan</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="#theory"
                    className="flex items-center space-x-2 py-3"
                  >
                    <span>📚</span>
                    <span>Lý thuyết</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="#practical"
                    className="flex items-center space-x-2 py-3"
                  >
                    <span>🌍</span>
                    <span>Thực tiễn</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="#references"
                    className="flex items-center space-x-2 py-3"
                  >
                    <span>📖</span>
                    <span>Tài liệu</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.header>

      {/* Museum Welcome Hall */}
      <motion.div
        className="relative bg-gradient-to-b from-red-900/10 to-transparent py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="inline-block bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-yellow-300/50 max-w-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0, rotate: -360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              <span className="text-6xl">🌍</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-red-800 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Chào mừng đến với
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-yellow-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Triển lãm Đoàn kết Quốc tế
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 italic mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              &quot;Hành trình khám phá tư tưởng Hồ Chí Minh về đoàn kết quốc tế
              - Di sản vĩ đại của dân tộc Việt Nam&quot;
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                  🎫 Bắt đầu tham quan
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Exhibition Halls */}
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Gallery 1: Overview Hall */}
        <section id="overview" className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-100 to-yellow-100 px-8 py-4 rounded-full border-2 border-red-300 shadow-lg">
              <span className="text-3xl">🏛️</span>
              <h2 className="text-3xl font-bold text-red-800">
                Phòng Trưng Bày Tổng Quan
              </h2>
            </div>
          </div>

          {/* Museum Display Case */}
          <div className="relative bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-2xl border-4 border-yellow-300 shadow-2xl mb-8">
            <div className="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-full shadow-lg">
              <span className="text-xl">📜</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-200">
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                <span className="mr-3">💡</span>
                Khái niệm cốt lõi
              </h3>
              <p className="text-gray-800 leading-relaxed text-lg">
                Tư tưởng Hồ Chí Minh về đoàn kết quốc tế là sự kết tinh vĩ đại
                của truyền thống dân tộc và tinh hoa trí tuệ của thời đại. Ngay
                từ rất sớm, Người đã nhận thức được rằng để giành và giữ vững
                độc lập dân tộc, cần phải kết hợp nhuần nhuyễn sức mạnh nội tại
                của dân tộc với sức mạnh của các trào lưu cách mạng thời đại.
              </p>
            </div>
          </div>
          {/* Interactive Exhibits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Exhibit 1 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <Card className="border-4 border-yellow-300 bg-gradient-to-br from-white to-amber-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                  <span className="text-lg">📚</span>
                </div>
                <CardHeader className="bg-gradient-to-r from-red-100 to-yellow-100 border-b-2 border-yellow-300">
                  <CardTitle className="text-red-800 flex items-center text-xl">
                    <span className="mr-3">🏛️</span>
                    Cơ sở Lý luận và Sự Hình thành
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <div className="absolute top-2 right-2 text-yellow-600">
                    <span className="text-2xl opacity-20">🌟</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Nguồn gốc từ truyền thống yêu nước và bước ngoặt khi tiếp
                    cận Chủ nghĩa Mác-Lênin. Năm 1920, khi đọc &quot;Sơ thảo lần
                    thứ nhất luận cương về vấn đề dân tộc&quot; của V.I. Lênin.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-yellow-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Hiện vật lịch sử #1
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Exhibit 2 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <Card className="border-4 border-yellow-300 bg-gradient-to-br from-white to-red-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-red-800 p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                  <span className="text-lg">🌍</span>
                </div>
                <CardHeader className="bg-gradient-to-r from-yellow-100 to-red-100 border-b-2 border-yellow-300">
                  <CardTitle className="text-red-800 flex items-center text-xl">
                    <span className="mr-3">⚖️</span>
                    Sự cần thiết khách quan
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <div className="absolute top-2 right-2 text-red-600">
                    <span className="text-2xl opacity-20">🔥</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Kết hợp sức mạnh dân tộc với sức mạnh thời đại; Thể hiện
                    tinh thần trách nhiệm đối với sự nghiệp đấu tranh chung của
                    nhân loại tiến bộ.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-red-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Hiện vật lịch sử #2
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Exhibit 3 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <Card className="border-4 border-yellow-300 bg-gradient-to-br from-white to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 bg-green-600 text-white p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                  <span className="text-lg">🤝</span>
                </div>
                <CardHeader className="bg-gradient-to-r from-green-100 to-yellow-100 border-b-2 border-yellow-300">
                  <CardTitle className="text-red-800 flex items-center text-xl">
                    <span className="mr-3">🌐</span>
                    Ba lực lượng chính
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <div className="absolute top-2 right-2 text-green-600">
                    <span className="text-2xl opacity-20">🌿</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Phong trào Cộng sản và công nhân quốc tế; Phong trào đấu
                    tranh giải phóng dân tộc; Phong trào hòa bình, dân chủ thế
                    giới.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-green-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Hiện vật lịch sử #3
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Exhibit 4 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotateZ: -2 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <Card className="border-4 border-yellow-300 bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                  <span className="text-lg">⚖️</span>
                </div>
                <CardHeader className="bg-gradient-to-r from-blue-100 to-yellow-100 border-b-2 border-yellow-300">
                  <CardTitle className="text-red-800 flex items-center text-xl">
                    <span className="mr-3">🎯</span>
                    Nguyên tắc chỉ đạo
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <div className="absolute top-2 right-2 text-blue-600">
                    <span className="text-2xl opacity-20">⭐</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Thống nhất mục tiêu và lợi ích &quot;có lý, có tình&quot;;
                    Độc lập, tự chủ và tự lực cánh sinh - &quot;dựa vào sức mình
                    là chính&quot;.
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-blue-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Hiện vật lịch sử #4
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Gallery 2: Interactive Theory Hall */}
        <motion.section
          id="theory"
          className="mb-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-4 rounded-full border-2 border-purple-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                📚
              </motion.span>
              <h2 className="text-3xl font-bold text-purple-800">
                Phòng Lý Thuyết Tương Tác
              </h2>
            </motion.div>
            <motion.p
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Khám phá các khía cạnh sâu sắc của tư tưởng đoàn kết quốc tế qua
              các màn hình tương tác
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <Card className="border-4 border-purple-300 bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white p-2 rounded-full shadow-lg group-hover:animate-pulse">
                      <span className="text-sm">🖱️</span>
                    </div>
                    <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 border-b-2 border-purple-300">
                      <CardTitle className="text-purple-800 flex items-center text-lg">
                        <span className="mr-2">💡</span>
                        Cơ sở Lý luận
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm mb-3">
                        Nguồn gốc và bối cảnh hình thành tư tưởng đoàn kết quốc
                        tế
                      </p>
                      <div className="bg-purple-100 p-2 rounded text-center">
                        <span className="text-purple-800 text-xs font-semibold">
                          👆 Nhấn để khám phá
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="md:min-w-6xl w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-red-800">
                    Cơ sở Lý luận và Sự Hình thành Tư tưởng Đoàn kết Quốc tế
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src="https://i.ytimg.com/vi/BoA57Qy7jRc/maxresdefault.jpg"
                      alt="Hồ Chí Minh"
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover rounded"
                    />
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <h3 className="font-bold mb-3 text-red-700">
                        Nguồn gốc và Bối cảnh hình thành
                      </h3>
                      <p className="mb-4">
                        Tư tưởng đoàn kết quốc tế của Hồ Chí Minh là sự kết tinh
                        vĩ đại của truyền thống dân tộc và tinh hoa trí tuệ của
                        thời đại. Nguồn gốc đầu tiên là truyền thống yêu nước và
                        đoàn kết dân tộc của Việt Nam qua hàng nghìn năm dựng
                        nước và giữ nước.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-red-700">
                        Bước ngoặt lớn
                      </h3>
                      <p className="mb-4">
                        <strong>Năm 1920</strong>, khi đọc &quot;Sơ thảo lần thứ
                        nhất luận cương về vấn đề dân tộc và vấn đề thuộc
                        địa&quot; của V.I. Lênin, Người đã tìm thấy con đường
                        cứu nước, giải phóng dân tộc là con đường cách mạng vô
                        sản.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-red-700">
                        Quá trình tổng kết thực tiễn
                      </h3>
                      <p>
                        Quá trình bôn ba khắp năm châu bốn biển đã giúp Người
                        củng cố nhận thức về bản chất của chủ nghĩa tư bản đế
                        quốc, từ đó hình thành nhận thức về tính tất yếu của sự
                        đoàn kết quốc tế.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <Card className="border-4 border-green-300 bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="absolute -top-2 -right-2 bg-green-600 text-white p-2 rounded-full shadow-lg group-hover:animate-bounce">
                      <span className="text-sm">🤝</span>
                    </div>
                    <CardHeader className="bg-gradient-to-r from-green-100 to-yellow-100 border-b-2 border-green-300">
                      <CardTitle className="text-green-800 flex items-center text-lg">
                        <span className="mr-2">🌍</span>
                        Ba Lực lượng Đoàn kết
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm mb-3">
                        Các lực lượng và hình thức tổ chức đoàn kết quốc tế
                      </p>
                      <div className="bg-green-100 p-2 rounded text-center">
                        <span className="text-green-800 text-xs font-semibold">
                          👆 Khám phá chi tiết
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="md:min-w-6xl w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-red-800">
                    Ba Lực lượng và Hình thức Tổ chức Đoàn kết Quốc tế
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <Image
                      src="https://i.ytimg.com/vi/BoA57Qy7jRc/maxresdefault.jpg"
                      alt="Hồ Chí Minh và Đoàn kết Quốc tế"
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover rounded"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="force1">
                        <AccordionTrigger className="text-red-700 hover:text-red-800">
                          1. Phong trào Cộng sản và công nhân quốc tế
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
                          <div className="prose prose-sm">
                            <p className="font-medium text-gray-800 mb-3">
                              Hồ Chí Minh coi phong trào cộng sản và công nhân
                              quốc tế là lực lượng cách mạng tiên phong, đóng
                              vai trò lãnh đạo trong cuộc đấu tranh chống lại
                              chủ nghĩa đế quốc và tư bản.
                            </p>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Đặc điểm nổi bật:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                              <li>Có tổ chức chặt chẽ và kỷ luật cao</li>
                              <li>
                                Có lý luận cách mạng tiên tiến (chủ nghĩa
                                Mác-Lênin)
                              </li>
                              <li>Có tinh thần đoàn kết quốc tế mạnh mẽ</li>
                              <li>
                                Gắn liền với lợi ích của nhân dân lao động
                              </li>
                            </ul>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Vai trò và nhiệm vụ:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>
                                Lãnh đạo cuộc đấu tranh giải phóng giai cấp và
                                dân tộc
                              </li>
                              <li>
                                Xây dựng liên minh quốc tế của giai cấp công
                                nhân
                              </li>
                              <li>
                                Phối hợp với các lực lượng tiến bộ khác trên thế
                                giới
                              </li>
                              <li>
                                Tuyên truyền và giáo dục ý thức cách mạng cho
                                quần chúng
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="force2">
                        <AccordionTrigger className="text-red-700 hover:text-red-800">
                          2. Phong trào đấu tranh giải phóng dân tộc
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
                          <div className="prose prose-sm">
                            <p className="font-medium text-gray-800 mb-3">
                              Phong trào giải phóng dân tộc là lực lượng quan
                              trọng trong đoàn kết quốc tế, bao gồm các dân tộc
                              bị áp bức đang đấu tranh giành độc lập và tự do.
                            </p>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Thành phần cơ bản:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                              <li>
                                Các nước thuộc địa đấu tranh giành độc lập
                              </li>
                              <li>Các dân tộc thiểu số bị áp bức</li>
                              <li>Các quốc gia phụ thuộc tìm cách tự chủ</li>
                              <li>Nhân dân các nước đang bị xâm lược</li>
                            </ul>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Hình thức đấu tranh:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                              <li>Đấu tranh vũ trang giải phóng lãnh thổ</li>
                              <li>Kháng chiến chống ngoại xâm</li>
                              <li>Đấu tranh chính trị đòi quyền tự trị</li>
                              <li>Vận động ngoại giao quốc tế</li>
                            </ul>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Ý nghĩa lịch sử:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Làm suy yếu hệ thống thực dân cũ</li>
                              <li>Thúc đẩy quá trình phi thực dân hóa</li>
                              <li>Tạo ra bản đồ chính trị thế giới mới</li>
                              <li>Góp phần vào cuộc đấu tranh chống đế quốc</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="force3">
                        <AccordionTrigger className="text-red-700 hover:text-red-800">
                          3. Phong trào hòa bình, dân chủ thế giới
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
                          <div className="prose prose-sm">
                            <p className="font-medium text-gray-800 mb-3">
                              Phong trào hòa bình, dân chủ thế giới bao gồm tất
                              cả các lực lượng tiến bộ đang đấu tranh vì hòa
                              bình, dân chủ và tiến bộ xã hội trên toàn cầu.
                            </p>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Thành phần tham gia:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                              <li>Các tổ chức hòa bình quốc tế</li>
                              <li>Phong trào dân chủ các nước</li>
                              <li>Trí thức tiến bộ thế giới</li>
                              <li>Thanh niên, phụ nữ yêu cầu hòa bình</li>
                            </ul>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Mục tiêu cốt lõi:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                              <li>
                                Chống chiến tranh, bảo vệ hòa bình thế giới
                              </li>
                              <li>Đấu tranh cho dân chủ và quyền con người</li>
                              <li>Thúc đẩy tiến bộ khoa học, văn hóa</li>
                              <li>Xây dựng trật tự thế giới công bằng</li>
                            </ul>

                            <h4 className="font-semibold text-red-700 border-b border-red-200 pb-1">
                              Phương thức hoạt động:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Tổ chức hội nghị, đại hội quốc tế</li>
                              <li>Vận động dư luận thế giới</li>
                              <li>
                                Phối hợp hoạt động của các tổ chức tiến bộ
                              </li>
                              <li>Tuyên truyền, giáo dục ý thức hòa bình</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <Card className="border-4 border-yellow-300 bg-gradient-to-br from-white to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="absolute -top-2 -right-2 bg-yellow-600 text-white p-2 rounded-full shadow-lg group-hover:animate-spin">
                      <span className="text-sm">⚡</span>
                    </div>
                    <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 border-b-2 border-yellow-300">
                      <CardTitle className="text-yellow-800 flex items-center text-lg">
                        <span className="mr-2">🎯</span>
                        Bốn Mặt trận
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm mb-3">
                        Các hình thức và mặt trận đoàn kết quốc tế theo Hồ Chí
                        Minh
                      </p>
                      <div className="bg-yellow-100 p-2 rounded text-center">
                        <span className="text-yellow-800 text-xs font-semibold">
                          👆 Tìm hiểu thêm
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="md:min-w-6xl w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-yellow-800">
                    Hình thức Tổ chức và Bốn Mặt trận Đoàn kết Quốc tế
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-yellow-800 border-b-2 border-yellow-300 pb-2">
                    Bốn Mặt trận Đoàn kết Quốc tế
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-yellow-800 mb-2">
                          1. Mặt trận Đại đoàn kết Dân tộc
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Đoàn kết toàn dân trong nước</li>
                          <li>Xây dựng khối đại đoàn kết toàn dân tộc</li>
                          <li>Phát huy sức mạnh tổng hợp của dân tộc</li>
                          <li>Làm cơ sở cho đoàn kết quốc tế</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-800 mb-2">
                          2. Mặt trận Đoàn kết Việt-Miên-Lào
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Đoàn kết ba nước Đông Dương</li>
                          <li>Phối hợp đấu tranh chống thực dân Pháp</li>
                          <li>Hỗ trợ lẫn nhau trong kháng chiến</li>
                          <li>Xây dựng tình hữu nghị vĩnh viễn</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">
                          3. Mặt trận Nhân dân Á-Phi
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Đoàn kết các nước châu Á, châu Phi</li>
                          <li>Chống chủ nghĩa thực dân và đế quốc</li>
                          <li>Ủng hộ phong trào giải phóng dân tộc</li>
                          <li>Xây dựng khối đoàn kết Á-Phi mạnh mẽ</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          4. Mặt trận Nhân dân Thế giới
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Đoàn kết nhân dân yêu cầu hòa bình thế giới</li>
                          <li>Chống chiến tranh, bảo vệ hòa bình</li>
                          <li>Thúc đẩy hợp tác và hữu nghị quốc tế</li>
                          <li>Xây dựng thế giới hòa bình, dân chủ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-800 border-b-2 border-yellow-300 pb-2">
                    Đặc điểm Tổ chức Đoàn kết Quốc tế
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Nguyên tắc tổ chức:
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Từ nhỏ đến lớn, từ gần đến xa</li>
                          <li>Từ dân tộc đến quốc tế</li>
                          <li>Kết hợp lợi ích dân tộc và quốc tế</li>
                          <li>Vừa đấu tranh vừa đoàn kết</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Hình thức hoạt động:
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Hội nghị, đại hội quốc tế</li>
                          <li>Tuyên bố, thông cáo chung</li>
                          <li>Trao đổi đoàn, phái đoàn</li>
                          <li>Hỗ trợ vật chất, tinh thần</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <Card className="border-4 border-blue-300 bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg group-hover:animate-pulse">
                      <span className="text-sm">📋</span>
                    </div>
                    <CardHeader className="bg-gradient-to-r from-blue-100 to-cyan-100 border-b-2 border-blue-300">
                      <CardTitle className="text-blue-800 flex items-center text-lg">
                        <span className="mr-2">⚖️</span>
                        Nguyên tắc Cơ bản
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 text-sm mb-3">
                        Các nguyên tắc cơ bản trong đoàn kết quốc tế
                      </p>
                      <div className="bg-blue-100 p-2 rounded text-center">
                        <span className="text-blue-800 text-xs font-semibold">
                          👆 Xem chi tiết
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="md:min-w-6xl w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-green-800">
                    Nguyên tắc Đoàn kết Quốc tế theo Hồ Chí Minh
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-lg font-semibold text-green-800 mb-4 border-b-2 border-green-300 pb-2">
                        1. Nguyên tắc Thống nhất Mục tiêu
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">
                            Có lý, có tình:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Đoàn kết dựa trên cơ sở lý lẽ chính đáng</li>
                            <li>Gắn kết bằng tình cảm chân thành</li>
                            <li>Đảm bảo công bằng và hợp lý cho các bên</li>
                            <li>Thống nhất trong mục tiêu và lợi ích</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">
                            Cùng thắng, cùng thua:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Chia sẻ thành quả và khó khăn</li>
                            <li>Hỗ trợ lẫn nhau trong mọi hoàn cảnh</li>
                            <li>Đồng cam cộng khổ trong đấu tranh</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">
                        2. Nguyên tắc Độc lập, Tự chủ
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Độc lập dân tộc:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Giữ vững chủ quyền quốc gia</li>
                            <li>Bảo vệ lợi ích dân tộc</li>
                            <li>Gắn liền với chủ nghĩa xã hội</li>
                            <li>Không lệ thuộc vào nước ngoài</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">
                            Tự lực cánh sinh:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Dựa vào sức mình là chính</li>
                            <li>Chủ động trong mọi hoạt động</li>
                            <li>Kết hợp sức mình với sức bạn</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-4 border-b-2 border-yellow-300 pb-2">
                        3. Nguyên tắc Linh hoạt
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-yellow-700 mb-2">
                            Thêm bạn, bớt thù:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Mở rộng liên minh đoàn kết</li>
                            <li>Thu hút các lực lượng trung gian</li>
                            <li>Phân hóa, cô lập kẻ thù</li>
                            <li>Linh hoạt trong chiến thuật</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 mb-2">
                            Vừa đấu tranh, vừa đoàn kết:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Kết hợp đấu tranh và hợp tác</li>
                            <li>Phân biệt đối tượng cụ thể</li>
                            <li>Kiên định nguyên tắc, linh hoạt sách lược</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
                        4. Nguyên tắc Bình đẳng
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">
                            Bình đẳng dân tộc:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Tôn trọng chủ quyền các nước</li>
                            <li>Không can thiệp nội bộ</li>
                            <li>Không phân biệt to nhỏ, mạnh yếu</li>
                            <li>Hợp tác cùng có lợi</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">
                            Tương trợ lẫn nhau:
                          </h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Hỗ trợ về mọi mặt</li>
                            <li>Chia sẻ kinh nghiệm đấu tranh</li>
                            <li>Học hỏi những điều hay</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.section>

        {/* Giá trị thực tiễn */}
        <section id="practical" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-800">
            Giá trị thực tiễn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tăng cường sức mạnh dân tộc</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Đoàn kết quốc tế giúp Việt Nam và các dân tộc khác tăng cường
                  sức mạnh trong cuộc đấu tranh chống lại các thế lực phản động.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Đạt được hòa bình và tiến bộ</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Thông qua đoàn kết, các dân tộc có thể đạt được hòa bình thế
                  giới và tiến bộ xã hội bền vững.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hỗ trợ lẫn nhau</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Các phong trào quốc tế cung cấp hỗ trợ vật chất và tinh thần
                  cho nhau trong cuộc đấu tranh giải phóng.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mở rộng liên minh</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nguyên tắc &quot;thêm bạn bớt thù&quot; giúp mở rộng mạng lưới
                  liên minh quốc tế.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nguồn tham khảo */}
        <section id="references" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-800">
            Nguồn tham khảo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Tác phẩm của Hồ Chí Minh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Nhấp để xem chi tiết nguồn.</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tác phẩm của Hồ Chí Minh</DialogTitle>
                </DialogHeader>
                <p>
                  Various writings and speeches by Ho Chi Minh on international
                  solidarity.
                </p>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Lịch sử Đảng Cộng sản Việt Nam</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Nhấp để xem chi tiết nguồn.</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Lịch sử Đảng Cộng sản Việt Nam</DialogTitle>
                </DialogHeader>
                <p>
                  Historical documents on the Communist Party of Vietnam&apos;s
                  role in international solidarity.
                </p>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Tài liệu quốc tế</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Nhấp để xem chi tiết nguồn.</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tài liệu quốc tế</DialogTitle>
                </DialogHeader>
                <p>
                  International documents and resolutions on solidarity and
                  peace.
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>
    </div>
  );
}
