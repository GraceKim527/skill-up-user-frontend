// src/components/mainSection/RecommendNow/index.tsx
// 지금 주목받고 있어요

"use client";

import { useRef } from "react";
import Flex from "@/components/common/Flex";
import EventCard from "@/components/common/EventCard";
import styles from "./styles.module.css";
import TabMenu from "@/components/common/Tab";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import { eventListMock } from "@/mocks/eventListMock";
import Text from "@/components/common/Text";

export default function RecommendNow() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.scrollWidth / eventListMock.length + 0.75;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / eventListMock.length;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.recommendNow}>
      <Flex direction="column" gap="2.5rem">
        <Flex justify="space-between" align="flex-end">
          <Flex direction="column" gap="0.5rem">
            <Text typography="sub2_m_18" color="primary-strong">
              추천행사
            </Text>
            <Flex gap="0.5rem">
              <Text typography="head1_m_42" color="black">
                지금
              </Text>
              <Text typography="head5_sb_42" color="black">
                주목받고 있어요
              </Text>
            </Flex>
          </Flex>

          <TabMenu
            tabs={["전체", "기획", "디자인", "개발", "AI"]}
            defaultIndex={0}
            onChange={() => {}}
            theme="light"
          />
        </Flex>

        <div className={styles.carouselWrapper}>
          <div ref={carouselRef} className={styles.carouselContainer}>
            {eventListMock.map((item) => (
              <div key={item.id} className={styles.carouselItem}>
                <EventCard
                  size="large"
                  event={item}
                  className={styles.carouselItem}
                />
              </div>
            ))}
          </div>
        </div>

        <Flex
          align="center"
          justify="space-between"
          className={styles.bottomRow}
        >
          <Flex align="center" gap="20px">
            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.lightBtn}`}
              onClick={prev}
              aria-label="이전"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.darkBtn}`}
              onClick={next}
              aria-label="다음"
            >
              <ChevronRightIcon color="#fff" />
            </button>
          </Flex>

          <Flex justify="center">
            <button className={styles.moreBtn}>IT 인기 행사 더보기</button>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
