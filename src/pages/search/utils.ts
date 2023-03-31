import { callApi } from "@/utils/callApi";
import { SearchResponse } from "../api/search";

export type SearchRequest = {
  query: string;
  publishedAfter: string;
};
export const fetchSearchResults = async ({
  query,
  publishedAfter = "",
}: SearchRequest): Promise<SearchResponse> => {
  console.log({ query, publishedAfter });
  try {
    return await callApi<SearchResponse>("/api/search", {
      method: "POST",
      body: JSON.stringify({ query, publishedAfter }),
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
