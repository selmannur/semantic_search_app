import { generateSearchResponse } from "./../../fakes/publications";
import { Publication } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { SearchRequest } from "../search/utils";

const QUERY_ENDPOINT = "http://cmpt-4.tor.rgcloud.net:8090/query";
const { NODE_ENV, FETCH_FAKE_DATA } = process.env;
const FAKE_DATA_ON = NODE_ENV === "development" && FETCH_FAKE_DATA === "true";

type Query = {
  query: string;
};

export type SearchResponse = {
  query: Query;
  n_items: number;
  items: Publication[];
};

export type InternalError = {
  error: string;
};

const makeQuery = async ({ query, publishedAfter = "" }: SearchRequest) => {
  const res = await fetch(QUERY_ENDPOINT, {
    method: "POST",
    headers: new Headers({
      accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ query, date_geq: publishedAfter }),
  });

  const data = (await res.json()) as SearchResponse;
  return data;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | InternalError>
) => {
  const { query, publishedAfter } = JSON.parse(
    req.body || '{ query: "", publishedAfter: ""}'
  ) as SearchRequest;
  console.log('req.body', req.body)

  if (!query || typeof query !== "string") {
    res.status(400).json({ error: "Incorrect query" });
  }

  if (FAKE_DATA_ON) {
    return res
      .status(200)
      .json(generateSearchResponse({ query, publishedAfter }));
  }

  const data = await makeQuery({ query, publishedAfter });
  res.status(200).json(data);
};

export default handler;
