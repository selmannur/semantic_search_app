import { isArray } from "lodash";
import { ParsedUrlQuery } from "querystring";

export const getQueryValueAsString = (query: ParsedUrlQuery, key: string) => {
  const value = query[key];
  if (!value) {
    return "";
  }

  return isArray(value) ? value[0] : value;
};
