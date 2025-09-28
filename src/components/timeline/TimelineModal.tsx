"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Tag,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TimelineEvent } from "@/types/timeline";
import { getPhaseDisplay } from "@/utils/timeline";

interface TimelineModalProps {
  event: TimelineEvent | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({
  event,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) => {
  if (!event) return null;

  const phaseDisplay = getPhaseDisplay(event.phase);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-yellow-400/30 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-yellow-400/30">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-10"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              <div className="absolute top-4 left-4 flex gap-2">
                {hasPrevious && (
                  <button
                    onClick={onPrevious}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                )}
                {hasNext && (
                  <button
                    onClick={onNext}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                )}
              </div>

              {/* Year Badge */}
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="px-6 py-2 bg-yellow-400/20 border border-yellow-400/50 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-yellow-300 font-bold text-lg">
                    {event.year}
                  </span>
                </motion.div>
              </div>

              {/* Title */}
              <motion.h2
                className="text-white text-xl md:text-2xl font-bold text-center leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {event.title}
              </motion.h2>

              {/* Phase */}
              <motion.div
                className="flex items-center justify-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span
                  className={`text-sm font-semibold ${phaseDisplay.color} flex items-center gap-1`}
                >
                  {phaseDisplay.icon} {event.phase}
                </span>
              </motion.div>
            </div>

            {/* Content Scrollable */}
            <div className="overflow-y-auto max-h-[60vh] p-6 space-y-6">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                  <Calendar size={18} />
                  Mô tả sự kiện
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>
              </motion.div>

              {/* Significance */}
              {event.significance && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4"
                >
                  <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                    <Users size={18} />Ý nghĩa lịch sử
                  </h3>
                  <p className="text-yellow-100 leading-relaxed text-sm md:text-base">
                    {event.significance}
                  </p>
                </motion.div>
              )}

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                    <Tag size={18} />
                    Từ khóa
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/20 text-yellow-200 border border-yellow-400/30`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Sources */}
              {event.sources && event.sources.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                    <ExternalLink size={18} />
                    Nguồn tham khảo
                  </h3>
                  <div className="space-y-2">
                    {event.sources.map((source, index) => (
                      <div
                        key={index}
                        className="block p-3 bg-gray-800/50 rounded-lg"
                      >
                        <div className="text-white font-medium">{source}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-800/50 border-t border-yellow-400/30">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Danh mục: {event.category}</span>
                <span>ID: {event.id}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimelineModal;
