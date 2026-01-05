// src/hooks/useArticle.ts

import { useQuery } from "@tanstack/react-query";
import { getArticleList } from "@/api/article";
import { ARTICLE_TAB } from "@/constants/article";

// 홈화면 추천 아티클 목록 조회
export const useRecommendedArticles = (tab?: typeof ARTICLE_TAB) => {
  return useQuery({
    queryKey: ["home", "recommendedArticles", tab],
    queryFn: () => getArticleList(tab),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
  });
};
