// 신청 마감 행사
"use client";
import Flex from "@/components/common/Flex";
import EventCard from "@/components/common/EventCard";
import Text from "@/components/common/Text";
import styles from "./styles.module.css";
import { eventListMock } from "@/mocks/eventListMock";

export default function RecommendDeadline() {
  return (
    <section className={styles.deadlineSection}>
      <Flex direction="column" gap="2.5rem" className={styles.inner}>
        <Flex direction="column" gap="0.5rem">
          <Text typography="label1_r_18" color="neutral-95">
            SEE THE LIVE REVIEWS OF THE EVENT
          </Text>
          <Flex gap="0.5rem">
            <Text typography="head5_sb_42" color="white">
              곧 신청 마감되는
            </Text>
            <Text typography="head1_m_42" color="white">
              행사
            </Text>
            <Text typography="head5_sb_42" color="white">
              예요
            </Text>
          </Flex>
        </Flex>

        <Flex wrap="wrap" gap="0.75rem">
          {eventListMock.map((item) => (
            <EventCard key={item.id} size="medium" event={item} />
          ))}
        </Flex>
      </Flex>
    </section>
  );
}
