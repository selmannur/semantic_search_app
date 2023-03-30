import { startsWith } from "lodash";

export const callApi = async <Response>(
  url: string,
  config: RequestInit = {}
): Promise<Response> => {
  if (!startsWith(url, "/api/")) {
    throw new Error("callApi method should be used only for internal calls");
  }

  return fetch(url, config)
    .then((res) => res.json())
    .then((data) => data as Response)
    .catch((error) => {
      throw new Error(error);
    });
};
