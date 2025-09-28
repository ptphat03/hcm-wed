"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  ExternalLink,
  Heart,
  Globe,
} from "lucide-react";

const footerSections = [
  {
    title: "Tư tưởng",
    items: [
      { label: "Đoàn kết quốc tế", href: "/thoughts/international-solidarity" },
      { label: "Hòa bình thế giới", href: "/thoughts/world-peace" },
      { label: "Độc lập dân tộc", href: "/thoughts/national-independence" },
      { label: "Chủ nghĩa quốc tế", href: "/thoughts/internationalism" },
    ],
  },
  {
    title: "Lịch sử",
    items: [
      { label: "Dòng thời gian", href: "/timeline" },
      { label: "Các sự kiện quan trọng", href: "/timeline/events" },
      { label: "Hội nghị quốc tế", href: "/timeline/conferences" },
      { label: "Tài liệu lịch sử", href: "/timeline/documents" },
    ],
  },
  {
    title: "Quan hệ Quốc tế",
    items: [
      {
        label: "Châu Á - Thái Bình Dương",
        href: "/international/asia-pacific",
      },
      { label: "Châu Âu", href: "/international/europe" },
      { label: "Châu Phi", href: "/international/africa" },
      { label: "Châu Mỹ", href: "/international/americas" },
    ],
  },
  {
    title: "Tài nguyên",
    items: [
      { label: "Thư viện", href: "/resources/library" },
      { label: "Video & Audio", href: "/resources/media" },
      { label: "Hình ảnh", href: "/resources/images" },
      { label: "Nghiên cứu", href: "/resources/research" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const contactInfo = [
  { icon: MapPin, text: "Hà Nội, Việt Nam" },
  { icon: Phone, text: "+84 (024) 3825-2542" },
  { icon: Mail, text: "contact@hochiminh-solidarity.vn" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Đoàn kết Quốc tế</h3>
                    <p className="text-yellow-400 text-sm">
                      Tư tưởng Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Khám phá và tìm hiểu về tư tưởng đoàn kết quốc tế của Chủ tịch
                  Hồ Chí Minh - những giá trị vượt thời gian về hòa bình, hữu
                  nghị và hợp tác giữa các dân tộc.
                </p>

                {/* Contact Info */}
                {/* <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Icon className="w-4 h-4 text-yellow-400" />
                        <span>{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div> */}
              </motion.div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: sectionIndex * 0.1 + itemIndex * 0.05,
                        }}
                      >
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                        >
                          <span>{item.label}</span>
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-2">
              Đăng ký nhận thông tin
            </h4>
            <p className="text-gray-400 mb-6">
              Nhận các bài viết mới nhất về tư tưởng đoàn kết quốc tế của Chủ
              tịch Hồ Chí Minh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-red-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Đăng ký
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Social Links and Copyright */}
        {/* <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Links */}
        {/* <motion.div
              className="flex items-center space-x-4 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gray-400 text-sm">Theo dõi chúng tôi:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-red-500 text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div> */}

        {/* Copyright */}
        {/* <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>
                © 2024 Tư tưởng Đoàn kết Quốc tế Hồ Chí Minh. Được tạo với
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>tại Việt Nam</span>
            </motion.div> */}
        {/* </div>
        </div> */}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-red-500/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="w-full h-full opacity-10 bg-repeat bg-[length:60px_60px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
