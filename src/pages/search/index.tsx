import Input from "@/components/Input";
import Page from "@/components/Page";
import { Publications } from "@/types";
import { getQueryValueAsString } from "@/utils/parseRouterQuery";
import { callApi } from "@/utils/callApi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const fetchResults = async (query: string): Promise<Publications> => {
  console.log("fetching results");
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

const ResultsPage = () => {
  const { query } = useRouter();
  const [paramQuery, setParamQuery] = useState(
    getQueryValueAsString(query, "q")
  );
  const [results, setResults] = useState<Publications>([]);

  useEffect(() => {
    setParamQuery(getQueryValueAsString(query, "q"));
  }, [query]);

  useEffect(() => {
    if (!paramQuery) {
      console.log("no param query", paramQuery);
      setResults([]);
      return;
    }

    fetchResults(paramQuery).then((d) => setResults(d));
  }, [paramQuery]);

  return (
    <Page>
      <Input initialQuery={paramQuery} />
      <div>
        {results.map((publication) => (
          <p key={publication.id}>{JSON.stringify(publication)}</p>
        ))}
      </div>
    </Page>
  );
};

export default ResultsPage;
