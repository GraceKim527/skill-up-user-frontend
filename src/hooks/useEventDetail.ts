// src/hooks/useEventDetail.ts

import { useQuery } from "@tanstack/react-query";
import { getEventDetail } from "@/api/events";
import { EventDetail } from "@/types/event";

export const useEventDetail = (eventId: number, initialData?: EventDetail) => {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: () => getEventDetail(eventId),
    initialData,
  });
};
