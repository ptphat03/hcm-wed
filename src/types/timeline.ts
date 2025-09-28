// Types for Timeline and Historical Events
export interface TimelineEvent {
  id: number;
  year: string;
  yearSort: number;
  title: string;
  color: TimelineColor;
  phase: TimelinePhase;
  content: string;
  significance?: string;
  description: string;
  position?: {
    x: number;
    y: number;
  };
  category?: EventCategory;
  tags?: string[];
  relatedEvents?: number[];
  sources?: string[];
  images?: string[];
}

export type TimelineColor =
  | "red"
  | "green"
  | "blue"
  | "white"
  | "gold"
  | "silver";

export type TimelinePhase = "Nền tảng" | "Chiến đấu" | "Hội nhập";

export type EventCategory =
  | "revolution"
  | "alliance"
  | "integration"
  | "peace"
  | "achievement"
  | "economics";

export interface PhaseConfig {
  minX: number;
  maxX: number;
  color: string;
  title: string;
  description: string;
  period: string;
  icon: string;
}

export interface TooltipPosition {
  position: string;
  transform: string;
  arrowPosition: string;
}

export interface TimelineFilters {
  phase?: TimelinePhase[];
  category?: EventCategory[];
  yearRange?: [number, number];
  searchTerm?: string;
}

export interface TimelineState {
  events: TimelineEvent[];
  filters: TimelineFilters;
  hoveredEvent: number | null;
  selectedEvent: number | null;
  isPlaying: boolean;
  currentIndex: number;
}
