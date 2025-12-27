// src/components/events/filters/views/SearchFilterView.tsx

"use client";

import OnOfflineFilter from "../filterElements/OnOfflineFilter";
import FreeFilter from "../filterElements/FreeFilter";
import Flex from "@/components/common/Flex";
import { usePageFilters } from "../../filters/hooks/usePageFilters";

export default function SearchFilterView() {
  const {
    tempOnOfflineFilter,
    setTempOnOfflineFilter,
    tempFreeFilter,
    setTempFreeFilter,
  } = usePageFilters({ pageId: "search" });
  return (
    <Flex direction="column" gap={1.5}>
      <OnOfflineFilter
        onSelect={setTempOnOfflineFilter}
        selected={tempOnOfflineFilter}
      />
      <FreeFilter checked={tempFreeFilter} setChecked={setTempFreeFilter} />
    </Flex>
  );
}
