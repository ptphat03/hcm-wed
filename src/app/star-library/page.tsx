"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

import { TimelineController } from "@/components/timeline";

export default function TimelinePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="text-white text-lg">Đang tải...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Title */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
            Khám Phá Bầu Trời Sao
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Hành trình hợp tác quốc tế của Hồ Chí Minh và Việt Nam
          </p>
        </motion.div>
      </div>

      {/* Starry Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Background Stars */}
        {Array.from({ length: 200 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 2 + Math.random() * 5,
              ease: "easeOut",
            }}
          >
            <Sparkles className="text-yellow-300" size={8} />
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </motion.div>

      {/* Timeline Controller */}
      <TimelineController
        className="h-screen pt-24"
        backgroundElement={
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-black/20" />
        }
      />

      {/* Footer Info */}
      <div className="absolute bottom-6 right-6 z-50">
        <motion.div
          className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-400/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-xs text-gray-300 text-center">
            🌟 <span className="text-yellow-300">Di chuyển chuột</span> để khám
            phá
          </div>
        </motion.div>
      </div>
    </div>
  );
}
