// src/app/my/bookmarks/page.tsx

import BookmarkPageLayout from "./BookmarkPageLayout";
import { getMockEventList } from "@/mocks/eventListMock";

export default async function BookmarksPage() {
  const eventList = await getMockEventList();
  return (
    <div style={{ marginTop: "6rem" }}>
      <BookmarkPageLayout eventList={eventList} />
    </div>
  );
}
