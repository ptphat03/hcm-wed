"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, Calendar, Tag } from "lucide-react";
import {
  TimelineFilters as ITimelineFilters,
  EventCategory,
  TimelinePhase,
} from "@/types/timeline";
import { CATEGORY_COLORS, PHASE_CONFIG } from "@/constants/timeline";

interface TimelineFiltersProps {
  filters: ITimelineFilters;
  onFiltersChange: (filters: ITimelineFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const TimelineFilters: React.FC<TimelineFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
}) => {
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchTerm: value });
  };

  const handleCategoryToggle = (category: EventCategory) => {
    const currentCategories = filters.category || [];
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter((c) => c !== category)
      : [...currentCategories, category];
    onFiltersChange({ ...filters, category: newCategories });
  };

  const handlePhaseToggle = (phase: TimelinePhase) => {
    const currentPhases = filters.phase || [];
    const newPhases = currentPhases.includes(phase)
      ? currentPhases.filter((p) => p !== phase)
      : [...currentPhases, phase];
    onFiltersChange({ ...filters, phase: newPhases });
  };

  const handleYearRangeChange = (index: 0 | 1, value: number) => {
    const currentRange = filters.yearRange || [1920, 2024];
    const newRange: [number, number] = [...currentRange] as [number, number];
    newRange[index] = value;
    onFiltersChange({ ...filters, yearRange: newRange });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters =
    filters.searchTerm ||
    (filters.category && filters.category.length > 0) ||
    (filters.phase && filters.phase.length > 0) ||
    (filters.yearRange &&
      (filters.yearRange[0] > 1920 || filters.yearRange[1] < 2024));

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 rounded-lg backdrop-blur-sm border border-yellow-400/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Filter size={18} className="text-yellow-300" />
        <span className="text-white text-sm font-medium">Bộ lọc</span>
        {hasActiveFilters && (
          <motion.div
            className="w-2 h-2 bg-yellow-400 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
          />
        )}
      </motion.button>

      {/* Filters Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-sm rounded-xl border border-yellow-400/30 shadow-2xl z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-yellow-300 font-semibold flex items-center gap-2">
                  <Filter size={16} />
                  Bộ lọc tìm kiếm
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-red-300 hover:text-red-200 transition-colors"
                  >
                    <X size={12} />
                    Xóa tất cả
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center gap-2">
                  <Search size={14} />
                  Tìm kiếm
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={filters.searchTerm || ""}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Tìm theo tiêu đề, mô tả..."
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:border-yellow-400/50 focus:outline-none transition-colors"
                  />
                  {filters.searchTerm && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center gap-2">
                  <Tag size={14} />
                  Danh mục
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(CATEGORY_COLORS).map(([key, config]) => {
                    const category = key as EventCategory;
                    const isSelected =
                      filters.category?.includes(category) || false;

                    return (
                      <motion.button
                        key={category}
                        onClick={() => handleCategoryToggle(category)}
                        className={`p-2 rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-yellow-400/20 border-yellow-400/50 text-yellow-200"
                            : "bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50"
                        } border`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-1">
                          <span>{config.icon}</span>
                          <span className="truncate">{config.name}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Phases */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center gap-2">
                  <Calendar size={14} />
                  Giai đoạn
                </label>
                <div className="space-y-2">
                  {Object.entries(PHASE_CONFIG).map(([phase, config]) => {
                    const isSelected =
                      filters.phase?.includes(phase as TimelinePhase) || false;

                    return (
                      <motion.button
                        key={phase}
                        onClick={() =>
                          handlePhaseToggle(phase as TimelinePhase)
                        }
                        className={`w-full p-2 rounded-lg text-xs font-medium transition-all text-left ${
                          isSelected
                            ? "bg-yellow-400/20 border-yellow-400/50 text-yellow-200"
                            : "bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50"
                        } border`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span>{config.icon}</span>
                            <span>{config.title}</span>
                          </div>
                          <span className="text-xs opacity-70">
                            {config.period}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Year Range */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                  Khoảng thời gian
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1920}
                    max={2024}
                    value={filters.yearRange?.[0] || 1920}
                    onChange={(e) =>
                      handleYearRangeChange(0, parseInt(e.target.value))
                    }
                    className="flex-1 px-2 py-1 bg-gray-800/50 border border-gray-600 rounded text-white text-sm focus:border-yellow-400/50 focus:outline-none"
                  />
                  <span className="text-gray-400 text-sm">đến</span>
                  <input
                    type="number"
                    min={1920}
                    max={2024}
                    value={filters.yearRange?.[1] || 2024}
                    onChange={(e) =>
                      handleYearRangeChange(1, parseInt(e.target.value))
                    }
                    className="flex-1 px-2 py-1 bg-gray-800/50 border border-gray-600 rounded text-white text-sm focus:border-yellow-400/50 focus:outline-none"
                  />
                </div>
              </div>

              {/* Active Filters Count */}
              {hasActiveFilters && (
                <motion.div
                  className="pt-2 border-t border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-xs text-gray-400 text-center">
                    {[
                      filters.searchTerm && "Tìm kiếm",
                      filters.category &&
                        filters.category.length > 0 &&
                        `${filters.category.length} danh mục`,
                      filters.phase &&
                        filters.phase.length > 0 &&
                        `${filters.phase.length} giai đoạn`,
                      filters.yearRange &&
                        (filters.yearRange[0] > 1920 ||
                          filters.yearRange[1] < 2024) &&
                        "Khoảng thời gian",
                    ]
                      .filter(Boolean)
                      .join(", ")}{" "}
                    được áp dụng
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelineFilters;
