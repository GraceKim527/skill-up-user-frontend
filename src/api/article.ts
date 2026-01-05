// src/api/article.ts

import instance from "./instance";
import { ARTICLE_TAB } from "@/constants/article";

// 아티클 목록 조회 API
export const getArticleList = async (tab?: typeof ARTICLE_TAB) => {
  const response = await instance.get("/articles", {
    params: {
      ...(tab && { tab }),
    },
  });
  return response.data.data;
};
