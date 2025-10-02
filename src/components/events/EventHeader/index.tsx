// src/components/events/EventHeader/index.tsx

import styles from "./styles.module.css";

export default function EventHeader({
  title,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <div className={styles.eventHeader}>
      <h2>{title}</h2>
      <span>
        <b>{count}개</b>의 행사가 있습니다.
      </span>
    </div>
  );
}
