import { generatePublications } from "./../../fakes/publications";
import { Publications } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Publications;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = JSON.parse(req.body || '{ query: ""}') as { query: string };
  if (!query || typeof query !== "string") {
    res.status(400).json({ data: [], error: "Incorrect query" });
  }

  console.log("query received:", query);

  // send query to Vectorization Api and wait for the respond

  res.status(200).json({ data: generatePublications() });
}
