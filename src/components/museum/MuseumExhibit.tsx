"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  Volume2,
  VolumeX,
  Info,
  ExternalLink,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { cardHover, slideUpFadeIn, glow } from "@/utils/animations";

interface MuseumExhibitProps {
  id: string;
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  category: "theory" | "practice" | "historical" | "modern";
  year?: string;
  significance?: string;
  audioUrl?: string;
  relatedLinks?: Array<{
    title: string;
    url: string;
    type: "document" | "video" | "external";
  }>;
  interactive?: boolean;
  className?: string;
}

const categoryConfig = {
  theory: {
    bgColor: "from-blue-100 to-indigo-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    iconColor: "text-blue-600",
    icon: "📚",
  },
  practice: {
    bgColor: "from-green-100 to-emerald-100",
    borderColor: "border-green-300",
    textColor: "text-green-800",
    iconColor: "text-green-600",
    icon: "🌍",
  },
  historical: {
    bgColor: "from-amber-100 to-yellow-100",
    borderColor: "border-amber-300",
    textColor: "text-amber-800",
    iconColor: "text-amber-600",
    icon: "🏛️",
  },
  modern: {
    bgColor: "from-purple-100 to-pink-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-800",
    iconColor: "text-purple-600",
    icon: "🚀",
  },
};

export const MuseumExhibit: React.FC<MuseumExhibitProps> = ({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  category,
  year,
  significance,
  audioUrl,
  relatedLinks,
  interactive = false,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const config = categoryConfig[category];

  const handleAudioToggle = () => {
    if (audioUrl) {
      // Implement audio playback logic
      setIsPlaying(!isPlaying);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: typeof description === "string" ? description : "", // dùng string hoặc rỗng
        url: window.location.href + `#exhibit-${id}`,
      });
    }
  };

  return (
    <>
      {/* Main Exhibit Card */}
      <motion.div
        id={`exhibit-${id}`}
        className={`group relative h-full flex flex-col ${className}`}
        variants={cardHover}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        layout
      >
        <div
    className={`
      relative overflow-hidden rounded-2xl shadow-xl
      bg-gradient-to-br ${config.bgColor}
      border-4 ${config.borderColor}
      transition-all duration-500
      ${interactive ? "cursor-pointer" : ""}
      h-full flex flex-col
    `}
  >
          {/* Category Badge */}
          {/* <div className="absolute top-4 left-4 z-10">
          <motion.div
            className={`
              px-3 py-1 rounded-full text-sm font-semibold
              bg-white/90 backdrop-blur-sm ${config.textColor}
              border ${config.borderColor}
            `}
            variants={glow}
            initial="initial"
            animate="animate"
          >
          </motion.div>
        </div> */}


          {/* Year Badge */}
          {year && (
            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 bg-black/70 text-white text-sm font-bold rounded-full backdrop-blur-sm">
                {year}
              </div>
            </div>
          )}

          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{
                scale: imageLoaded ? 1 : 1.1,
                opacity: imageLoaded ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Interactive Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {audioUrl && (
                <motion.button
                  onClick={handleAudioToggle}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </motion.button>
              )}

              <motion.button
                onClick={() => setIsExpanded(true)}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Maximize2 size={16} />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 min-h-[250px] flex flex-col justify-between">
            <motion.h3
              className={`text-xl font-bold mb-2 ${config.textColor}`}
              variants={slideUpFadeIn}
            >
              {title}
            </motion.h3>

            {subtitle && (
            <motion.p
              className={`text-sm ${config.iconColor} mb-3 font-medium line-clamp-5`}
              variants={slideUpFadeIn}
            >
              {subtitle}
            </motion.p>
          )}
            <motion.p
              className="text-gray-700 text-sm leading-relaxed mb-4"
              variants={slideUpFadeIn}
            >
            </motion.p>

            {/* Action Buttons */}
            <div className="flex justify-center items-center gap-3 mt-4">
            <motion.button
              onClick={() => setIsExpanded(true)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                ${config.textColor} bg-white/70 hover:bg-white/90
                border ${config.borderColor}
                transition-colors flex items-center gap-2
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Info size={14} />
              Tìm hiểu thêm
            </motion.button>

            <motion.button
              onClick={handleShare}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={16} />
            </motion.button>
          </div>

          </div>

          {/* Interactive Indicator */}
          {interactive && (
            <div className="absolute inset-0 border-2 border-dashed border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-colors duration-300" />
          )}
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
      {isExpanded && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            className="absolute top-10 bottom-10 left-20 right-20 rounded-2xl shadow-2xl overflow-y-auto"
            style={{
              backgroundImage: "url('/images/old-paper2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid rgba(0,0,0,0.3)",
            }}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Image */}
              <div className="relative h-100">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-contain object-center bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h2
                    className="text-3xl font-bold text-white mb-2 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {title}
                  </motion.h2>
                  {subtitle && (
                    <motion.p
                      className="text-xl text-yellow-200 drop-shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {subtitle}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-gray-800 leading-relaxed text-base">
                    {description}
                  </div>
                </motion.div>

                {/* Significance */}
                {significance && (
                  <motion.div
                    className="bg-yellow-100/80 border border-yellow-300 rounded-lg p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-yellow-900 flex items-center gap-2">
                      <span>⭐</span>Ý nghĩa lịch sử
                    </h3>
                    <p className="text-yellow-800 leading-relaxed">
                      {significance}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default MuseumExhibit;
