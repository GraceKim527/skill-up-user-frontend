// 신청 마감 행사
"use client";
import Flex from "@/components/common/Flex";
import EventCard from "@/components/common/EventCard";
import styles from "./styles.module.css";
import { eventListMock } from "@/mocks/eventListMock";

export default function RecommendDeadline() {
  return (
    <section className={styles.deadlineSection}>
      <Flex direction="column" gap="40px" className={styles.inner}>
        <Flex direction="column" gap="8px">
          <p className={styles.subEng}>SEE THE LIVE REVIEWS OF THE EVENT</p>
          <h2 className={styles.interestTitle}>
            곧 신청 마감되는 <span className={styles.interestSpan}>행사</span>
            예요
          </h2>
        </Flex>

        <Flex wrap="wrap" gap="12px" className={styles.cardList}>
          {eventListMock.map((item) => (
            <EventCard key={item.id} size="medium" event={item} />
          ))}
        </Flex>
      </Flex>
    </section>
  );
}
