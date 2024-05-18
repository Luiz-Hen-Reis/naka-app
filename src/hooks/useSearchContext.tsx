'use client';

import { SearchContext } from "@/contexts/searchContext";
import { useContext } from "react";

export function useSearchContext() {
  return useContext(SearchContext);
}
