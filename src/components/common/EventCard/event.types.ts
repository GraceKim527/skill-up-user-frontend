// src/components/common/EventCard/event.types.ts

export interface Event {
  id: string;
  title: string;
  date: string;
  place: string;
  price?: string;
  category: string;
  url?: string;
  image: string;
  badgeLabel?: string;
}