// src/app/my/bookmarks/BookmarkPageLayout.tsx

"use client";

import EventCard from "@/components/common/EventCard";
import styles from "./styles.module.css";
import ProfileCard from "@/components/myPage/bookmarks/ProfileCard";
import LoginImage from "@/assets/images/loginImg.png";
import Pagination from "@/components/common/Pagination";
import Dropdown, { DropdownOption } from "@/components/common/Dropdown";
import TabBar from "@/components/common/TabBar";

const sortOptions: DropdownOption[] = [
  { label: "마감임박순", value: "deadline" },
  { label: "최근 북마크순", value: "recent" },
];

export default function BookmarkPageLayout() {
  return (
    <div className={styles.bookmarkPageLayout}>
      <ProfileCard />
      <div className={styles.bookmarkListContainer}>
        <div className={styles.bookmarkListHeader}>
          <div className={styles.bookmarkListHeaderFilter}>
            <TabBar
              tabs={[
                { label: "진행 중", count: 10 },
                { label: "종료", count: 10 },
              ]}
              activeIndex={0}
              onChange={(index) => {
                console.log(index);
              }}
            />
            <Dropdown
              options={sortOptions}
              selected={sortOptions[0]}
              onSelect={(option) => {
                console.log(option);
              }}
            />
          </div>
          <div className={styles.bookmarkCardList}>
            {Array.from({ length: 9 }).map((_, index) => (
              <EventCard
                key={index}
                size="medium"
                event={{
                  id: index.toString(),
                  title: "test",
                  date: "2025-01-01",
                  place: "test",
                  category: "test",
                  url: "test",
                  image: LoginImage.src.toString(),
                  badgeLabel: "test",
                }}
              />
            ))}
          </div>
        </div>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={() => {}}
          options={[]}
          selected={{ label: "1", value: "1" }}
          onSelect={(option) => {
            console.log(option);
          }}
          goToPage={false}
        />
      </div>
    </div>
  );
}
