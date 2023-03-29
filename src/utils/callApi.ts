import { startsWith } from "lodash";

export const callApi = async <Response>(
  url: string,
  config: RequestInit = {}
): Promise<Response> => {
  if (!startsWith(url, "/api/")) {
    throw new Error("callApi method should be used only for internal calls");
  }

  return fetch(url, config)
    .then((response) => response.json() as Promise<{ data: Response }>)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    });
};
