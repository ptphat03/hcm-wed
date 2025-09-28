// Timeline Components Export
export { default as TimelineStar } from "./TimelineStar";
export { default as TimelineModal } from "./TimelineModal";
export { default as TimelineFilters } from "./TimelineFilters";
export { default as TimelineController } from "./TimelineController";

// Re-export types for convenience
export type {
  TimelineEvent,
  TimelineFilters as ITimelineFilters,
  TimelinePhase,
  EventCategory,
} from "@/types/timeline";
