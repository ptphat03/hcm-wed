import { useState, useEffect, useCallback, useMemo } from "react";
import { TimelineFilters, TimelineState } from "@/types/timeline";
import { TIMELINE_EVENTS } from "@/constants/timeline";
import {
  calculateStarPositions,
  filterTimelineEvents,
  debounce,
} from "@/utils/timeline";

/**
 * Main timeline hook - quản lý toàn bộ state và logic của timeline
 */
export const useTimeline = () => {
  const [state, setState] = useState<TimelineState>({
    events: [],
    filters: {},
    hoveredEvent: null,
    selectedEvent: null,
    isPlaying: false,
    currentIndex: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize timeline data
  useEffect(() => {
    try {
      setIsLoading(true);
      const eventsWithPositions = calculateStarPositions(TIMELINE_EVENTS);
      setState((prev) => ({
        ...prev,
        events: eventsWithPositions,
      }));
      setError(null);
    } catch (err) {
      setError("Không thể tải dữ liệu timeline");
      console.error("Timeline initialization error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Filtered events dựa trên filters hiện tại
  const filteredEvents = useMemo(() => {
    return filterTimelineEvents(state.events, state.filters);
  }, [state.events, state.filters]);

  // Debounced filter update
  const updateFiltersImmediate = useCallback((newFilters: TimelineFilters) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
      currentIndex: 0, // Reset khi filter thay đổi
    }));
  }, []);

  const debouncedUpdateFilters = useMemo(
    () => debounce(updateFiltersImmediate, 300),
    [updateFiltersImmediate]
  );

  // Actions
  const actions = {
    // Filter và search
    updateFilters: (newFilters: Partial<TimelineFilters>) => {
      debouncedUpdateFilters(newFilters);
    },

    clearFilters: () => {
      setState((prev) => ({
        ...prev,
        filters: {},
        currentIndex: 0,
      }));
    },

    // Event interaction
    setHoveredEvent: (eventId: number | null) => {
      setState((prev) => ({ ...prev, hoveredEvent: eventId }));
    },

    setSelectedEvent: (eventId: number | null) => {
      setState((prev) => ({ ...prev, selectedEvent: eventId }));
    },

    // Timeline playback
    startPlayback: () => {
      setState((prev) => ({ ...prev, isPlaying: true, currentIndex: 0 }));
    },

    stopPlayback: () => {
      setState((prev) => ({ ...prev, isPlaying: false }));
    },

    nextEvent: () => {
      setState((prev) => ({
        ...prev,
        currentIndex: Math.min(
          prev.currentIndex + 1,
          filteredEvents.length - 1
        ),
      }));
    },

    previousEvent: () => {
      setState((prev) => ({
        ...prev,
        currentIndex: Math.max(prev.currentIndex - 1, 0),
      }));
    },

    goToEvent: (index: number) => {
      setState((prev) => ({
        ...prev,
        currentIndex: Math.max(0, Math.min(index, filteredEvents.length - 1)),
      }));
    },

    // Utility actions
    findEventById: (id: number) => {
      return state.events.find((event) => event.id === id);
    },

    getRelatedEvents: (eventId: number) => {
      const event = state.events.find((e) => e.id === eventId);
      if (!event?.relatedEvents) return [];
      return state.events.filter((e) => event.relatedEvents?.includes(e.id));
    },
  };

  // Auto-play functionality
  useEffect(() => {
    if (!state.isPlaying) return;

    const interval = setInterval(() => {
      setState((prev) => {
        if (prev.currentIndex >= filteredEvents.length - 1) {
          return { ...prev, isPlaying: false }; // Stop at end
        }
        return { ...prev, currentIndex: prev.currentIndex + 1 };
      });
    }, 3000); // 3 seconds per event

    return () => clearInterval(interval);
  }, [state.isPlaying, filteredEvents.length]);

  return {
    // State
    events: filteredEvents,
    allEvents: state.events,
    filters: state.filters,
    hoveredEvent: state.hoveredEvent,
    selectedEvent: state.selectedEvent,
    isPlaying: state.isPlaying,
    currentIndex: state.currentIndex,
    currentEvent: filteredEvents[state.currentIndex] || null,

    // Status
    isLoading,
    error,
    isEmpty: filteredEvents.length === 0,
    hasMore: state.currentIndex < filteredEvents.length - 1,
    hasPrevious: state.currentIndex > 0,

    // Statistics
    stats: {
      total: state.events.length,
      filtered: filteredEvents.length,
      byPhase: state.events.reduce((acc, event) => {
        acc[event.phase] = (acc[event.phase] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    },

    // Actions
    ...actions,
  };
};

/**
 * Hook for timeline animations and visual effects
 */
export const useTimelineAnimations = () => {
  const [animationState, setAnimationState] = useState({
    showTimeline: false,
    backgroundReady: false,
    starsVisible: false,
  });

  const startAnimation = useCallback(() => {
    setAnimationState((prev) => ({ ...prev, showTimeline: true }));

    // Stagger các animation
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, backgroundReady: true }));
    }, 500);

    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, starsVisible: true }));
    }, 1000);
  }, []);

  const resetAnimation = useCallback(() => {
    setAnimationState({
      showTimeline: false,
      backgroundReady: false,
      starsVisible: false,
    });
  }, []);

  return {
    ...animationState,
    startAnimation,
    resetAnimation,
  };
};

/**
 * Hook for responsive behavior và viewport detection
 */
export const useResponsive = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewport({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return viewport;
};

/**
 * Hook for keyboard navigation
 */
export const useKeyboardNavigation = (
  onNext?: () => void,
  onPrevious?: () => void,
  onEscape?: () => void,
  onSpace?: () => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          onNext?.();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          onPrevious?.();
          break;
        case "Escape":
          event.preventDefault();
          onEscape?.();
          break;
        case " ":
          event.preventDefault();
          onSpace?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrevious, onEscape, onSpace]);
};

/**
 * Hook for localStorage persistence
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);

        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue] as const;
};
