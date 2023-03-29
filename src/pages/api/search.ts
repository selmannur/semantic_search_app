import { generatePublications } from "./../../fakes/publications";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Publications } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Publications;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  console.log("query received:", query);

  // send query to Vectorization Api and wait for the respond

  res.status(200).json({ data: generatePublications() });
}
