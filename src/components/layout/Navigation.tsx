"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Globe,
  BookOpen,
  Users,
  Clock,
  Home,
} from "lucide-react";

interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "Trang chủ",
    icon: Home,
    description: "Giới thiệu tổng quan về tư tưởng đoàn kết quốc tế",
  },
  {
    href: "/timeline",
    label: "Dòng thời gian",
    icon: Clock,
    description: "Các mốc quan trọng trong lịch sử đoàn kết quốc tế",
  },
  {
    href: "/thoughts",
    label: "Tư tưởng",
    icon: BookOpen,
    description: "Những quan điểm của Chủ tịch Hồ Chí Minh",
  },
  {
    href: "/international",
    label: "Quan hệ Quốc tế",
    icon: Globe,
    description: "Hoạt động ngoại giao và hợp tác quốc tế",
  },
  {
    href: "/solidarity",
    label: "Đoàn kết",
    icon: Users,
    description: "Tinh thần đoàn kết với các dân tộc trên thế giới",
  },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg shadow-xl"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">HCM</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-white font-bold text-lg">
                    Hành trình đoàn kết Quốc tế
                  </h1>
                  <p className="text-yellow-400 text-xs">
                    Tư tưởng Hồ Chí Minh
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`group relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-yellow-400 bg-yellow-400/10"
                          : "text-white hover:text-yellow-400 hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Tooltip */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {item.description}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/90" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Search and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* <motion.button
                className="p-2 text-white hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-5 h-5" />
              </motion.button> */}

              <motion.button
                className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-yellow-400 bg-yellow-400/10 border-l-4 border-yellow-400"
                            : "text-white hover:text-yellow-400 hover:bg-white/5"
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-sm text-gray-400 mt-1">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
