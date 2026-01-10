// src/app/conference/[id]/page.tsx

"use client";

import { use } from "react";
import EventDetailLayout from "@/components/events/detail/EventDetailLayout";
import { EVENT_CATEGORY } from "@/constants/event";
import styles from "./styles.module.css";

export default function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const eventId = Number(resolvedParams.id);

  return (
    <EventDetailLayout
      eventId={eventId}
      category={EVENT_CATEGORY.CONFERENCE_SEMINAR}
      className={styles.conferenceDetailLayout}
    />
  );
}
