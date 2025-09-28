"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronDown,
  Globe,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import {
  pageTransition,
  floatingAnimation,
  glow,
  fadeInUp,
} from "@/utils/animations";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { delay },
    }}
    variants={floatingAnimation}
  >
    {children}
  </motion.div>
);

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Đoàn kết quốc tế là sức mạnh vô tận của các dân tộc",
    "Hợp tác để cùng phát triển, đấu tranh để cùng thắng lợi",
    "Tình hữu nghị các dân tộc là báu vật quý giá nhất",
  ];

  const y = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  if (!mounted) return null;

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-amber-900"
      variants={pageTransition}
      initial="initial"
      animate="enter"
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Geometric Patterns */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-yellow-400/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-red-300/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo/Symbol */}
        <FloatingElement delay={0.2} className="mb-8">
          <motion.div
            className="w-24 h-24 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
            variants={glow}
            animate="animate"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <span className="text-4xl">🌍</span>
          </motion.div>
        </FloatingElement>

        {/* Main Title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <motion.span
              className="block text-yellow-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              Tư Tưởng
            </motion.span>
            <motion.span
              className="block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              Đoàn Kết Quốc Tế
            </motion.span>
            <motion.span
              className="block text-yellow-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
            >
              Hồ Chí Minh
            </motion.span>
          </h1>
        </motion.div>

        {/* Rotating Quotes */}
        <motion.div
          className="h-16 mb-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              className="text-xl md:text-2xl text-yellow-100 italic font-light max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              &quot;{quotes[currentQuote]}&quot;
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Link href="/star-library">
            <motion.button
              className="group relative px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold rounded-full text-lg shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <span className="relative flex items-center gap-2">
                <Sparkles size={20} />
                Khám Phá Bầu Trời Sao
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>
          </Link>

          <motion.button
            className="group px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 font-semibold rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <BookOpen size={18} />
              Đọc Tài Liệu
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, staggerChildren: 0.1 }}
        >
          {[
            {
              icon: Globe,
              label: "Phong trào quốc tế",
              value: "150+ quốc gia",
            },
            {
              icon: Users,
              label: "Hợp tác song phương",
              value: "50+ hiệp định",
            },
            { icon: Heart, label: "Năm hình thành", value: "1920-2024" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp(index * 0.1)}
            >
              <FloatingElement delay={1.8 + index * 0.1}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-yellow-200">{stat.label}</p>
              </FloatingElement>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center text-yellow-300 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-sm mb-2 font-medium">Khám phá thêm</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
