"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TimelineEvent,
  TimelineFilters as ITimelineFilters,
} from "@/types/timeline";
import { useTimeline } from "@/hooks/useTimeline";
import { TIMELINE_EVENTS } from "@/constants/timeline";

// Components
import TimelineStar from "./TimelineStar";
import TimelineModal from "./TimelineModal";
import TimelineFiltersComponent from "./TimelineFilters";

interface TimelineControllerProps {
  className?: string;
  backgroundElement?: React.ReactNode;
}

export const TimelineController: React.FC<TimelineControllerProps> = ({
  className = "",
  backgroundElement,
}) => {
  const {
    // State
    events: filteredEvents,
    filters,
    hoveredEvent: hoveredEventId,
    selectedEvent: selectedEventId,

    // Actions
    updateFilters,
    setHoveredEvent,
    setSelectedEvent,
    findEventById,
  } = useTimeline();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Get current selected event object
  const selectedEvent = selectedEventId
    ? findEventById(selectedEventId) || null
    : null;

  // Get current hovered event object
  const hoveredEvent = hoveredEventId
    ? findEventById(hoveredEventId) || null
    : null;

  // Navigation logic
  const selectedEventIndex = selectedEvent
    ? filteredEvents.findIndex((e: TimelineEvent) => e.id === selectedEvent.id)
    : -1;

  const hasNext =
    selectedEventIndex >= 0 && selectedEventIndex < filteredEvents.length - 1;
  const hasPrevious = selectedEventIndex > 0;

  const handleStarClick = (event: TimelineEvent) => {
    setSelectedEvent(event.id);
  };

  const handleStarHover = (event: TimelineEvent | null) => {
    setHoveredEvent(event?.id || null);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  const navigateToNext = () => {
    if (hasNext && selectedEventIndex >= 0) {
      const nextEvent = filteredEvents[selectedEventIndex + 1];
      setSelectedEvent(nextEvent.id);
    }
  };

  const navigateToPrevious = () => {
    if (hasPrevious && selectedEventIndex >= 0) {
      const prevEvent = filteredEvents[selectedEventIndex - 1];
      setSelectedEvent(prevEvent.id);
    }
  };

  const handleFiltersChange = (newFilters: ITimelineFilters) => {
    updateFilters(newFilters);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background */}
      {backgroundElement}

      {/* Filters */}
      <div className="absolute top-4 left-4 z-30">
        <TimelineFiltersComponent
          filters={filters}
          onFiltersChange={handleFiltersChange}
          isOpen={isFiltersOpen}
          onToggle={toggleFilters}
        />
      </div>

      {/* Event Count Info */}
      <div className="absolute top-4 right-4 z-30">
        <motion.div
          className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-yellow-400/30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-white text-sm">
            <span className="text-yellow-300 font-semibold">
              {filteredEvents.length}
            </span>
            <span className="text-gray-300">
              /{TIMELINE_EVENTS.length} sự kiện
            </span>
          </div>
        </motion.div>
      </div>

      {/* Timeline Stars */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {filteredEvents.map((event: TimelineEvent) => (
            <TimelineStar
              key={event.id}
              data={event}
              isVisible={true}
              isHighlighted={hoveredEvent?.id === event.id}
              onClick={handleStarClick}
              onHover={handleStarHover}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Event Modal */}
      <TimelineModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={handleModalClose}
        onNext={hasNext ? navigateToNext : undefined}
        onPrevious={hasPrevious ? navigateToPrevious : undefined}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />

      {/* Loading State */}
      {filteredEvents.length === 0 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
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
            <div className="text-white text-lg font-medium mb-2">
              Đang tải sự kiện...
            </div>
            <div className="text-gray-400 text-sm">
              Khám phá hành trình lịch sử vĩ đại
            </div>
          </div>
        </motion.div>
      )}

      {/* No Results State */}
      {filteredEvents.length === 0 && TIMELINE_EVENTS.length > 0 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="text-center max-w-md mx-auto p-8">
            <motion.div
              className="text-6xl mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🔍
            </motion.div>
            <div className="text-white text-xl font-semibold mb-3">
              Không tìm thấy sự kiện
            </div>
            <div className="text-gray-400 text-sm mb-6 leading-relaxed">
              Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm để khám phá thêm các
              sự kiện lịch sử
            </div>
            <motion.button
              onClick={() => updateFilters({})}
              className="px-4 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 rounded-lg border border-yellow-400/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Xóa tất cả bộ lọc
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Keyboard Navigation Hint */}
      {selectedEvent && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-400/30">
            <div className="text-xs text-gray-300 text-center">
              <span className="text-yellow-300">←→</span> Điều hướng •
              <span className="text-yellow-300 ml-1">ESC</span> Đóng
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineController;
