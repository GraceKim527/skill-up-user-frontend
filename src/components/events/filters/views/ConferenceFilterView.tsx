// src/components/events/filters/views/ConferenceFilterView.tsx

"use client";

import { useState } from "react";
import OnOfflineFilter from "../filterElements/OnOfflineFilter";

export default function ConferenceFilterView() {
  const [onOfflineFilter, setOnOfflineFilter] = useState<string>("");
  return (
    <div>
      <OnOfflineFilter
        onSelect={setOnOfflineFilter}
        selected={onOfflineFilter}
      />
    </div>
  );
}
