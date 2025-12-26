// 신청 마감 행사
"use client";
import Flex from "@/components/common/Flex";
import EventCard from "@/components/common/EventCard";
import Text from "@/components/common/Text";
import styles from "./styles.module.css";
import { useEndingSoonEvents } from "@/hooks/useHome";
import { Event } from "@/types/event";

export default function RecommendDeadline() {
  // API 데이터 가져오기 (4개만)
  const { data, isLoading, error } = useEndingSoonEvents(4);

  return (
    <section className={styles.deadlineSection}>
      <Flex direction="column" gap="2.5rem" className={styles.inner}>
        <Flex direction="column" gap="1rem">
          <Text typography="label1_r_18" color="neutral-95">
            SEE THE LIVE REVIEWS OF THE EVENT
          </Text>
          <Flex>
            <Text typography="head5_sb_42" color="white">
              곧 신청 마감되는 행사
            </Text>
            <Text typography="head1_m_42" color="white">
              에요
            </Text>
          </Flex>
        </Flex>

        {isLoading ? (
          <Flex justify="center" align="center" style={{ minHeight: "300px" }}>
            <Text typography="body1_r_16" color="neutral-95">
              로딩중...
            </Text>
          </Flex>
        ) : error ? (
          <Flex justify="center" align="center" style={{ minHeight: "300px" }}>
            <Text typography="body1_r_16" color="neutral-95">
              데이터를 불러오는데 실패했습니다.
            </Text>
          </Flex>
        ) : !data.homeEventResponseList ||
          data.homeEventResponseList.length === 0 ? (
          <Flex justify="center" align="center" style={{ minHeight: "300px" }}>
            <Text typography="body1_r_16" color="neutral-95">
              곧 마감되는 행사가 없습니다.
            </Text>
          </Flex>
        ) : (
          <Flex gap="0.75rem">
            {data.homeEventResponseList.map((item: Event) => (
              <EventCard key={item.id} size="medium" event={item} />
            ))}
          </Flex>
        )}
      </Flex>
    </section>
  );
}
