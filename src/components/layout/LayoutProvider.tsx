"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/utils/animations";

interface LayoutContextType {
  theme: "light" | "dark" | "museum";
  setTheme: (theme: "light" | "dark" | "museum") => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
  showScrollProgress: boolean;
  setShowScrollProgress: (show: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark" | "museum">("museum");
  const [isLoading, setIsLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState(
    "Tư tưởng Đoàn kết Quốc tế Hồ Chí Minh"
  );
  const [showScrollProgress, setShowScrollProgress] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = Math.min(totalScroll / windowHeight, 1);
      setScrollProgress(scroll);
    };

    if (showScrollProgress) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showScrollProgress]);

  // Theme effect
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const contextValue: LayoutContextType = {
    theme,
    setTheme,
    isLoading,
    setIsLoading,
    pageTitle,
    setPageTitle,
    showScrollProgress,
    setShowScrollProgress,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {/* Scroll Progress Bar */}
      <AnimatePresence>
        {showScrollProgress && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-red-500 z-50 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="text-white text-lg font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Đang tải nội dung...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrollProgress > 0.1 && (
          <motion.button
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-red-900 rounded-full shadow-lg transition-colors flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
