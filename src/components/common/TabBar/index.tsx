// src/components/common/TabBar/index.tsx

import React from "react";
import styles from "./styles.module.css";
import Text from "@/components/common/Text";

interface TabItem {
  label: string;
  count?: number;
}

interface TabBarProps {
  tabs: TabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function TabBar({ tabs, activeIndex, onChange }: TabBarProps) {
  return (
    <div className={styles.tabBar}>
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            className={`${styles.tabItem} ${isActive ? styles.active : ""}`}
            onClick={() => onChange(index)}
          >
            <Text typography="sub3_m_16" color="black">
              {tab.label}
            </Text>
            {typeof tab.count === "number" && (
              <Text typography="sub3_m_16" color="primary-strong">
                {tab.count}
              </Text>
            )}
          </button>
        );
      })}
    </div>
  );
}
