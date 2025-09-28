"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";
import { TimelineEvent } from "@/types/timeline";
import {
  getStarColorClasses,
  calculateTooltipPosition,
  getPhaseDisplay,
} from "@/utils/timeline";
import { ANIMATION_CONFIG } from "@/constants/timeline";
import { useResponsive } from "@/hooks/useTimeline";

interface TimelineStarProps {
  data: TimelineEvent;
  isVisible: boolean;
  isHighlighted?: boolean;
  onClick?: (event: TimelineEvent) => void;
  onHover?: (event: TimelineEvent | null) => void;
}

export const TimelineStar: React.FC<TimelineStarProps> = ({
  data,
  isVisible,
  isHighlighted = false,
  onClick,
  onHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    position: "bottom-full",
    transform: "-translate-x-1/2",
    arrowPosition: "bottom",
  });

  const { isMobile } = useResponsive();
  const colorClasses = getStarColorClasses(data.color);
  const phaseDisplay = getPhaseDisplay(data.phase);

  const handleHoverStart = () => {
    if (isMobile) return; // Disable hover on mobile

    setIsHovered(true);
    onHover?.(data);

    // Tính toán vị trí tooltip thông minh
    const tooltipPos = calculateTooltipPosition(
      data.position?.x || 50,
      data.position?.y || 50,
      280
    );
    setTooltipPosition(tooltipPos);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    onHover?.(null);
  };

  const handleClick = () => {
    onClick?.(data);
  };

  return (
    <motion.div
      className="absolute cursor-pointer z-20 group"
      style={{
        left: `${data.position?.x || 50}%`,
        top: `${data.position?.y || 50}%`,
      }}
      initial={ANIMATION_CONFIG.scaleIn.initial}
      animate={
        isVisible
          ? {
              ...ANIMATION_CONFIG.scaleIn.animate,
              rotate: [0, 360],
            }
          : ANIMATION_CONFIG.scaleIn.exit
      }
      transition={{
        duration: 0.8,
        delay: data.id * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Star Container */}
      <motion.div
        className="relative"
        animate={
          isHovered || isHighlighted
            ? {
                scale: 1.4,
                rotate: [0, 15, -15, 0],
              }
            : {
                scale: 1.0,
                rotate: 0,
              }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-sm"
          animate={{
            opacity: isHovered || isHighlighted ? 0.8 : 0.3,
            scale: isHovered || isHighlighted ? 1.5 : 1,
          }}
          style={{
            background: `radial-gradient(circle, ${
              colorClasses.text.includes("red")
                ? "#ef4444"
                : colorClasses.text.includes("green")
                ? "#22c55e"
                : colorClasses.text.includes("blue")
                ? "#3b82f6"
                : colorClasses.text.includes("white")
                ? "#ffffff"
                : colorClasses.text.includes("yellow")
                ? "#eab308"
                : "#9ca3af"
            }40, transparent 70%)`,
          }}
        />

        {/* Main Star */}
        <motion.div
          className="relative z-10"
          animate={{
            filter:
              isHovered || isHighlighted
                ? [
                    "drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))",
                    "drop-shadow(0 0 15px rgba(255, 255, 0, 1))",
                    "drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))",
                  ]
                : "drop-shadow(0 0 4px rgba(255, 255, 0, 0.5))",
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        >
          <Star
            size={isMobile ? 28 : 32}
            className={`${colorClasses.text} ${colorClasses.fill} transition-colors duration-200`}
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Pulse Ring */}
        <AnimatePresence>
          {(isHovered || isHighlighted) && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-yellow-400/50"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 2, 3],
                opacity: [0.5, 0.2, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Touch Indicator */}
      {isMobile && (
        <motion.div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHighlighted ? 1 : 0 }}
        >
          Chạm để xem
        </motion.div>
      )}

      {/* Tooltip - Desktop Only */}
      {!isMobile && (
        <AnimatePresence>
          {isHovered && data.position && (
            <motion.div
              className={`absolute ${
                tooltipPosition.position
              } left-1/2 transform ${tooltipPosition.transform} ${
                tooltipPosition.arrowPosition === "top" ? "mt-3" : "mb-3"
              } bg-black/95 text-white p-3 md:p-4 rounded-lg text-xs z-30 border border-yellow-400/50 shadow-xl max-w-xs w-64 md:w-72 backdrop-blur-sm`}
              initial={{
                opacity: 0,
                y: tooltipPosition.arrowPosition === "top" ? -10 : 10,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: tooltipPosition.arrowPosition === "top" ? -10 : 10,
                scale: 0.8,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-yellow-300 text-base">
                  {data.year}
                </div>
                <div className="flex items-center gap-1">
                  <span className={`text-xs ${phaseDisplay.color}`}>
                    {phaseDisplay.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="text-white font-semibold mb-2 text-sm leading-tight">
                {data.title}
              </div>

              {/* Content */}
              <div className="text-gray-300 text-xs leading-relaxed mb-2">
                {data.description}
              </div>

              {/* Significance */}
              {data.significance && (
                <div className="text-yellow-200 text-xs leading-relaxed border-t border-yellow-400/30 pt-2 mb-2">
                  <span className="font-medium">Ý nghĩa:</span>{" "}
                  {data.significance}
                </div>
              )}

              {/* Tags */}
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {data.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-yellow-400/20 text-yellow-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Phase Badge */}
              <div className="text-center mt-2 pt-2 border-t border-gray-600">
                <span className={`text-xs font-semibold ${phaseDisplay.color}`}>
                  {phaseDisplay.icon} {data.phase}
                </span>
              </div>

              {/* Arrow */}
              <div
                className={`absolute ${
                  tooltipPosition.arrowPosition === "top"
                    ? "bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/95"
                    : "top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"
                }`}
              />

              {/* Click Hint */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-300/80 whitespace-nowrap">
                👆 Nhấn để xem chi tiết
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default TimelineStar;
