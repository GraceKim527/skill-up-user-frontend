// src/app/conference/[id]/page.tsx

import ConferenceDetailLayout from "./ConferenceDetailLayout";
import { getEventDetail } from "@/api/events";

export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const eventId = Number(resolvedParams.id);

  // SSR: 초기 데이터 서버에서 로드
  const initialEventDetail = await getEventDetail(eventId);

  return <ConferenceDetailLayout initialEventDetail={initialEventDetail} />;
}
