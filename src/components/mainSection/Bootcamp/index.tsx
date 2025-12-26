// src/components/mainSection/Bootcamp/index.tsx

"use client";
import EventCard from "@/components/common/EventCard";
import Flex from "@/components/common/Flex";
import styles from "./styles.module.css";
import TabMenu from "@/components/common/Tab";
import { eventListMock } from "@/mocks/eventListMock";
import Text from "@/components/common/Text";

export default function Bootcamp() {
  return (
    <Flex
      as="section"
      className={styles.bootcampSection}
      aria-labelledby="recent-title"
    >
      <Flex direction="column" gap="2.5rem" className={styles.inner}>
        <Flex justify="space-between" align="flex-end" gap="2.5rem">
          <Flex direction="column">
            <Text typography="sub2_m_18" color="primary-strong">
              부트캠프
            </Text>
            <Flex gap="0.5rem">
              <Text typography="head1_m_42" color="white">
                지금
              </Text>
              <Text typography="head5_sb_42" color="white">
                모집중인 부트캠프
              </Text>
            </Flex>
          </Flex>

          <TabMenu
            tabs={["전체", "기획", "디자인", "개발", "AI"]}
            defaultIndex={0}
            onChange={(tab) => console.log("선택된 탭:", tab)}
            theme="dark"
          />
        </Flex>

        <Flex gap="0.75rem">
          {eventListMock.slice(0, 4).map((item) => (
            <EventCard key={item.id} size="medium" event={item} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
