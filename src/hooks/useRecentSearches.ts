// src/hooks/useRecentSearches.ts

"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "recentSearches";
const MAX_SEARCHES = 10;

export const useRecentSearches = () => {
  const [searches, setSearches] = useState<string[]>([]);

  // 로컬스토리지에서 초기 데이터 로드
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSearches(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load recent searches:", error);
    }
  }, []);

  // 로컬스토리지에 저장
  const saveToStorage = (newSearches: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSearches));
      setSearches(newSearches);
    } catch (error) {
      console.error("Failed to save recent searches:", error);
    }
  };

  // 검색어 추가
  const addSearch = (search: string) => {
    const trimmed = search.trim();
    if (!trimmed) return;

    // 중복 제거 (기존 항목 제거)
    const filtered = searches.filter((s) => s !== trimmed);
    // 새 검색어를 맨 앞에 추가
    const updated = [trimmed, ...filtered];
    // 최대 개수 제한
    const limited = updated.slice(0, MAX_SEARCHES);

    saveToStorage(limited);
  };

  // 특정 검색어 삭제
  const removeSearch = (search: string) => {
    const updated = searches.filter((s) => s !== search);
    saveToStorage(updated);
  };

  // 전체 삭제
  const clearAll = () => {
    saveToStorage([]);
  };

  return {
    searches,
    addSearch,
    removeSearch,
    clearAll,
  };
};
