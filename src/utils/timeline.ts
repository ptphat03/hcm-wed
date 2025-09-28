import {
  TimelineEvent,
  TimelineFilters,
  TooltipPosition,
} from "@/types/timeline";
import { PHASE_CONFIG } from "@/constants/timeline";

/**
 * Tính toán vị trí ngôi sao theo layout 3 giai đoạn với thuật toán tối ưu
 */
export const calculateStarPositions = (
  events: TimelineEvent[]
): TimelineEvent[] => {
  // Sắp xếp theo thứ tự thời gian
  const sortedData = [...events].sort((a, b) => a.yearSort - b.yearSort);

  // Nhóm theo giai đoạn
  const groupedByPhase = sortedData.reduce((acc, item) => {
    if (!acc[item.phase]) acc[item.phase] = [];
    acc[item.phase].push(item);
    return acc;
  }, {} as Record<string, TimelineEvent[]>);

  // Tính toán vị trí cho từng ngôi sao với collision detection
  return sortedData.map((item) => {
    const phaseData = PHASE_CONFIG[item.phase];
    const phaseItems = groupedByPhase[item.phase];
    const itemIndexInPhase = phaseItems.findIndex((p) => p.id === item.id);

    // Tính X theo thứ tự trong giai đoạn (từ trái qua phải)
    const xRange = phaseData.maxX - phaseData.minX;
    const xStep = xRange / (phaseItems.length + 1);
    const baseX = phaseData.minX + (itemIndexInPhase + 1) * xStep;

    // Thêm random offset nhỏ để tránh trùng lặp
    const xOffset = (Math.random() - 0.5) * 3;
    const x = Math.max(
      phaseData.minX + 2,
      Math.min(phaseData.maxX - 2, baseX + xOffset)
    );

    // Y với phân bố đều và tránh overlapping
    const yLevels = [25, 40, 55, 70]; // 4 levels
    const levelIndex = itemIndexInPhase % yLevels.length;
    const baseY = yLevels[levelIndex];
    const yOffset = (Math.random() - 0.5) * 8;
    const y = Math.max(15, Math.min(85, baseY + yOffset));

    return {
      ...item,
      position: { x, y },
    };
  });
};

/**
 * Tính toán vị trí tooltip thông minh với viewport detection
 */
export const calculateTooltipPosition = (
  starX: number,
  starY: number,
  tooltipWidth: number = 280,
  viewportWidth: number = window.innerWidth,
  viewportHeight: number = window.innerHeight
): TooltipPosition => {
  let position = "bottom-full";
  let transform = "-translate-x-1/2";
  let arrowPosition = "bottom";

  // Tính toán vị trí dựa trên viewport
  const starPixelX = (starX / 100) * viewportWidth;
  const starPixelY = (starY / 100) * viewportHeight;

  // Xác định vị trí Y (trên/dưới)
  const spaceAbove = starPixelY;
  const spaceBelow = viewportHeight - starPixelY;
  const tooltipHeight = 200; // Ước tính chiều cao tooltip

  if (spaceAbove > tooltipHeight + 20 && spaceAbove > spaceBelow) {
    position = "bottom-full";
    arrowPosition = "bottom";
  } else if (spaceBelow > tooltipHeight + 20) {
    position = "top-full";
    arrowPosition = "top";
  } else {
    // Nếu không đủ chỗ ở cả 2 phía, chọn phía có nhiều chỗ hơn
    position = spaceAbove > spaceBelow ? "bottom-full" : "top-full";
    arrowPosition = spaceAbove > spaceBelow ? "bottom" : "top";
  }

  // Xác định vị trí X (trái/giữa/phải)
  const halfTooltipWidth = tooltipWidth / 2;
  const leftSpace = starPixelX - halfTooltipWidth;
  const rightSpace = viewportWidth - (starPixelX + halfTooltipWidth);

  if (leftSpace < 20) {
    // Quá gần cạnh trái
    transform = "translate-x-0";
  } else if (rightSpace < 20) {
    // Quá gần cạnh phải
    transform = "-translate-x-full";
  } else {
    // Đủ chỗ ở giữa
    transform = "-translate-x-1/2";
  }

  return { position, transform, arrowPosition };
};

/**
 * Filter timeline events với nhiều tiêu chí
 */
export const filterTimelineEvents = (
  events: TimelineEvent[],
  filters: TimelineFilters
): TimelineEvent[] => {
  return events.filter((event) => {
    // Filter by phase
    if (filters.phase && filters.phase.length > 0) {
      if (!filters.phase.includes(event.phase)) return false;
    }

    // Filter by category
    if (filters.category && filters.category.length > 0) {
      if (!event.category || !filters.category.includes(event.category))
        return false;
    }

    // Filter by year range
    if (filters.yearRange) {
      const [minYear, maxYear] = filters.yearRange;
      if (event.yearSort < minYear || event.yearSort > maxYear) return false;
    }

    // Filter by search term
    if (filters.searchTerm && filters.searchTerm.trim()) {
      const searchTerm = filters.searchTerm.toLowerCase();
      const searchFields = [
        event.title,
        event.content,
        event.description,
        event.significance || "",
        ...(event.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      if (!searchFields.includes(searchTerm)) return false;
    }

    return true;
  });
};

/**
 * Get color classes for timeline elements
 */
export const getStarColorClasses = (color: string) => {
  const colorMap = {
    red: {
      text: "text-red-400",
      fill: "fill-red-400",
      hover: "hover:text-red-300",
    },
    green: {
      text: "text-green-400",
      fill: "fill-green-400",
      hover: "hover:text-green-300",
    },
    blue: {
      text: "text-blue-400",
      fill: "fill-blue-400",
      hover: "hover:text-blue-300",
    },
    white: {
      text: "text-white",
      fill: "fill-white",
      hover: "hover:text-gray-100",
    },
    gold: {
      text: "text-yellow-400",
      fill: "fill-yellow-400",
      hover: "hover:text-yellow-300",
    },
    silver: {
      text: "text-gray-300",
      fill: "fill-gray-300",
      hover: "hover:text-gray-200",
    },
  };

  return colorMap[color as keyof typeof colorMap] || colorMap.gold;
};

/**
 * Format year display
 */
export const formatYear = (year: string): string => {
  if (year.includes("-")) {
    return year;
  }
  return year;
};

/**
 * Get phase icon and color
 */
export const getPhaseDisplay = (phase: string) => {
  const phaseData = PHASE_CONFIG[phase];
  if (!phaseData) return { icon: "📅", color: "text-gray-500" };

  const colorMap = {
    "Nền tảng": "text-red-300",
    "Chiến đấu": "text-green-300",
    "Hội nhập": "text-blue-300",
  };

  return {
    icon: phaseData.icon,
    color: colorMap[phase as keyof typeof colorMap] || "text-gray-300",
  };
};

/**
 * Generate random background elements
 */
export const generateBackgroundElements = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 1 + Math.random() * 3,
  }));
};

/**
 * Debounce function for search and filters
 */
export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

/**
 * Format date for display
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

/**
 * Generate SEO-friendly slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  return typeof window !== "undefined" && window.innerWidth < 768;
};

/**
 * Validate timeline event data
 */
export const validateTimelineEvent = (
  event: Partial<TimelineEvent>
): boolean => {
  const requiredFields = [
    "id",
    "year",
    "yearSort",
    "title",
    "phase",
    "content",
  ];
  return requiredFields.every(
    (field) => event[field as keyof TimelineEvent] !== undefined
  );
};

/**
 * Sort events by multiple criteria
 */
export const sortEvents = (
  events: TimelineEvent[],
  sortBy: "year" | "title" | "phase" = "year",
  order: "asc" | "desc" = "asc"
): TimelineEvent[] => {
  return [...events].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortBy) {
      case "year":
        aValue = a.yearSort;
        bValue = b.yearSort;
        break;
      case "title":
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
        break;
      case "phase":
        aValue = a.phase;
        bValue = b.phase;
        break;
      default:
        aValue = a.yearSort;
        bValue = b.yearSort;
    }

    if (aValue < bValue) return order === "asc" ? -1 : 1;
    if (aValue > bValue) return order === "asc" ? 1 : -1;
    return 0;
  });
};
