// src/components/events/filters/FilterBadges/index.tsx

"use client";

import Image from "next/image";
import CloseIcon from "@/assets/svg/closeIcon.svg";
import styles from "./styles.module.css";
import { useAtom } from "jotai";
import {
  onOfflineFilterAtom,
  freeFilterAtom,
  tempOnOfflineFilterAtom,
  tempFreeFilterAtom,
} from "../atoms/filterAtoms";

export default function FilterBadges() {
  const [, setTempOnOfflineFilter] = useAtom(tempOnOfflineFilterAtom);
  const [, setTempFreeFilter] = useAtom(tempFreeFilterAtom);
  const [onOfflineFilter, setOnOfflineFilter] = useAtom(onOfflineFilterAtom);
  const [freeFilter, setFreeFilter] = useAtom(freeFilterAtom);

  const badges: { key: string; label: string; onClear: () => void }[] = [];

  const handleOnOfflineFilter = () => {
    setTempOnOfflineFilter("");
    setOnOfflineFilter("");
  };

  const handleFreeFilter = () => {
    setTempFreeFilter(false);
    setFreeFilter(false);
  };

  if (onOfflineFilter === "online" || onOfflineFilter === "offline") {
    badges.push({
      key: "onOffline",
      label: onOfflineFilter === "online" ? "온라인" : "오프라인",
      onClear: () => handleOnOfflineFilter(),
    });
  }

  if (freeFilter) {
    badges.push({
      key: "freeOnly",
      label: "무료만 보기",
      onClear: () => handleFreeFilter(),
    });
  }

  if (badges.length === 0) {
    return null;
  }

  return (
    <div className={styles.filterBadges}>
      {badges.map((badge) => (
        <button
          className={styles.filterBadge}
          onClick={(e) => {
            e.preventDefault();
            badge.onClear();
          }}
          key={badge.key}
          aria-label={`${badge.label} 필터 제거`}
        >
          <span>{badge.label}</span>
          <Image src={CloseIcon} alt="Close Icon" />
        </button>
      ))}
    </div>
  );
}
