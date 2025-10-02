// src/app/conference/ConferencePageLayout.tsx

import EventHeader from "@/components/events/EventHeader";

export default function ConferencePageLayout() {
  return (
    <div>
      <EventHeader title="컨퍼런스 · 세미나" count={10} />
    </div>
  );
}
