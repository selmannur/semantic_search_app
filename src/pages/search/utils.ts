import { callApi } from "@/utils/callApi";
import { SearchResponse } from "../api/search";

export const fetchSearchResults = async (
  query: string
): Promise<SearchResponse> => {
  try {
    return await callApi<SearchResponse>("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
  } catch (e) {
    console.error(e);
    return {
      query: { query: "" },
      n_items: 0,
      items: [],
    };
  }
};
