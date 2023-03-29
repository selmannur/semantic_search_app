import { Publications } from "@/types";
import { callApi } from "@/utils/callApi";

export const fetchSearchResults = async (
  query: string
): Promise<Publications> => {
  try {
    return await callApi<Publications>("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
  } catch (e) {
    console.error(e);
    return [];
  }
};
