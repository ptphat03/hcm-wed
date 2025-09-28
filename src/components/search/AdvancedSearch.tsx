"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  X,
  Calendar,
  Tag,
  SortAsc,
  SortDesc,
  Grid,
  List,
} from "lucide-react";
import { slideUpFadeIn, staggerContainer } from "@/utils/animations";

interface SearchFilters {
  query: string;
  category: string[];
  dateRange: {
    start: number;
    end: number;
  };
  tags: string[];
  sortBy: "date" | "title" | "relevance";
  sortOrder: "asc" | "desc";
  viewMode: "grid" | "list";
}

interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: number;
  tags: string[];
  content?: string;
  significance?: string;
}

interface AdvancedSearchProps {
  items: SearchableItem[];
  onResults: (results: SearchableItem[]) => void;
  categories: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
  }>;
  className?: string;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  items,
  onResults,
  categories,
  className = "",
}) => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: [],
    dateRange: { start: 1920, end: 2024 },
    tags: [],
    sortBy: "relevance",
    sortOrder: "desc",
    viewMode: "grid",
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  // Get unique tags from all items
  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    items.forEach((item) => {
      item.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [items]);

  // Relevance scoring function
  const getRelevanceScore = useCallback(
    (item: SearchableItem, query: string): number => {
      const lowerQuery = query.toLowerCase();
      let score = 0;

      // Title matches are most important
      if (item.title.toLowerCase().includes(lowerQuery)) score += 10;

      // Description matches
      if (item.description.toLowerCase().includes(lowerQuery)) score += 5;

      // Content matches
      if (item.content?.toLowerCase().includes(lowerQuery)) score += 3;

      // Tag matches
      score +=
        item.tags.filter((tag) => tag.toLowerCase().includes(lowerQuery))
          .length * 2;

      return score;
    },
    []
  );

  // Search and filter logic
  const filteredResults = useMemo(() => {
    let results = [...items];

    // Text search
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.content?.toLowerCase().includes(query) ||
          item.significance?.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      results = results.filter((item) =>
        filters.category.includes(item.category)
      );
    }

    // Date range filter
    results = results.filter(
      (item) =>
        item.date >= filters.dateRange.start &&
        item.date <= filters.dateRange.end
    );

    // Tags filter
    if (filters.tags.length > 0) {
      results = results.filter((item) =>
        filters.tags.some((tag) => item.tags.includes(tag))
      );
    }

    // Sorting
    results.sort((a, b) => {
      let comparison = 0;

      switch (filters.sortBy) {
        case "date":
          comparison = a.date - b.date;
          break;
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "relevance":
          // Simple relevance scoring based on query matches
          if (filters.query.trim()) {
            const scoreA = getRelevanceScore(a, filters.query);
            const scoreB = getRelevanceScore(b, filters.query);
            comparison = scoreB - scoreA;
          } else {
            comparison = b.date - a.date; // Default to newest first
          }
          break;
      }

      return filters.sortOrder === "desc" ? -comparison : comparison;
    });

    return results;
  }, [items, filters, getRelevanceScore]);

  // Update filters
  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({
      query: "",
      category: [],
      dateRange: { start: 1920, end: 2024 },
      tags: [],
      sortBy: "relevance",
      sortOrder: "desc",
      viewMode: "grid",
    });
  }, []);

  // Toggle category
  const toggleCategory = useCallback(
    (categoryId: string) => {
      updateFilters({
        category: filters.category.includes(categoryId)
          ? filters.category.filter((c) => c !== categoryId)
          : [...filters.category, categoryId],
      });
    },
    [filters.category, updateFilters]
  );

  // Toggle tag
  const toggleTag = useCallback(
    (tag: string) => {
      updateFilters({
        tags: filters.tags.includes(tag)
          ? filters.tags.filter((t) => t !== tag)
          : [...filters.tags, tag],
      });
    },
    [filters.tags, updateFilters]
  );

  // Send results to parent
  React.useEffect(() => {
    onResults(filteredResults);
  }, [filteredResults, onResults]);

  const hasActiveFilters =
    filters.query ||
    filters.category.length > 0 ||
    filters.tags.length > 0 ||
    filters.dateRange.start > 1920 ||
    filters.dateRange.end < 2024;

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}
      variants={slideUpFadeIn}
      initial="hidden"
      animate="visible"
    >
      {/* Main Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm sự kiện, tài liệu, nhân vật..."
              value={filters.query}
              onChange={(e) => updateFilters({ query: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            />
            {filters.query && (
              <button
                onClick={() => updateFilters({ query: "" })}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <motion.button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`px-4 py-3 rounded-lg border transition-colors ${
              hasActiveFilters
                ? "bg-yellow-100 border-yellow-300 text-yellow-800"
                : "bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Filter size={20} />
          </motion.button>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => updateFilters({ viewMode: "grid" })}
              className={`p-2 ${
                filters.viewMode === "grid"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => updateFilters({ viewMode: "list" })}
              className={`p-2 border-l border-gray-300 ${
                filters.viewMode === "list"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-3 flex justify-between items-center text-sm text-gray-600">
          <span>{filteredResults.length} kết quả được tìm thấy</span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            className="border-b border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="p-4 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Categories */}
              <motion.div variants={slideUpFadeIn}>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Tag size={16} />
                  Danh mục
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.category.includes(category.id)
                          ? `bg-${category.color}-100 text-${category.color}-800 border-${category.color}-300`
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      } border`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Date Range */}
              <motion.div variants={slideUpFadeIn}>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Calendar size={16} />
                  Khoảng thời gian
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">
                      Từ năm
                    </label>
                    <input
                      type="number"
                      min={1920}
                      max={2024}
                      value={filters.dateRange.start}
                      onChange={(e) =>
                        updateFilters({
                          dateRange: {
                            ...filters.dateRange,
                            start: parseInt(e.target.value),
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">
                      Đến năm
                    </label>
                    <input
                      type="number"
                      min={1920}
                      max={2024}
                      value={filters.dateRange.end}
                      onChange={(e) =>
                        updateFilters({
                          dateRange: {
                            ...filters.dateRange,
                            end: parseInt(e.target.value),
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              {availableTags.length > 0 && (
                <motion.div variants={slideUpFadeIn}>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Từ khóa phổ biến ({availableTags.length})
                  </h3>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {availableTags.slice(0, 20).map((tag) => (
                      <motion.button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                          filters.tags.includes(tag)
                            ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                            : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                        } border`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Sort Options */}
              <motion.div variants={slideUpFadeIn}>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Sắp xếp
                </h3>
                <div className="flex gap-3">
                  <select
                    value={filters.sortBy}
                    onChange={(e) =>
                      updateFilters({
                        sortBy: e.target.value as
                          | "date"
                          | "title"
                          | "relevance",
                      })
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="relevance">Độ liên quan</option>
                    <option value="date">Thời gian</option>
                    <option value="title">Tên</option>
                  </select>
                  <button
                    onClick={() =>
                      updateFilters({
                        sortOrder: filters.sortOrder === "asc" ? "desc" : "asc",
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {filters.sortOrder === "asc" ? (
                      <SortAsc size={18} />
                    ) : (
                      <SortDesc size={18} />
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AdvancedSearch;
