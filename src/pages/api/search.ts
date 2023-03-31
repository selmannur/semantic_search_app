import {
  generatePublications,
  generateSearchResponse,
} from "./../../fakes/publications";
// import { generatePublications } from "./../../fakes/publications";
import { Publication } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

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

const makeQuery = async (query: string) => {
  const res = await fetch(QUERY_ENDPOINT, {
    method: "POST",
    headers: new Headers({
      accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ query }),
  });

  const data = (await res.json()) as SearchResponse;
  return data;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | InternalError>
) => {
  const { query } = JSON.parse(req.body || '{ query: ""}') as { query: string };
  if (!query || typeof query !== "string") {
    res.status(400).json({ error: "Incorrect query" });
  }

  if (FAKE_DATA_ON) {
    return res.status(200).json(generateSearchResponse(query));
  }

  const data = await makeQuery(query);
  res.status(200).json(data);
};

export default handler;
