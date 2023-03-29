import SearchInput from "@/components/SearchInput";
import Page from "@/components/Page/Page";
import { Publications } from "@/types";
import { getQueryValueAsString } from "@/utils/parseRouterQuery";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchSearchResults } from "./utils";

const ResultsPage = () => {
  const router = useRouter();

  const [paramQuery, setParamQuery] = useState(
    getQueryValueAsString(router.query, "q")
  );
  const [results, setResults] = useState<Publications>([]);

  useEffect(() => {
    setParamQuery(getQueryValueAsString(router.query, "q"));
  }, [router.query]);

  useEffect(() => {
    if (!paramQuery) {
      console.log("no param query", paramQuery);
      setResults([]);
      return;
    }

    fetchSearchResults(paramQuery).then((d) => setResults(d));
  }, [paramQuery]);

  return (
    <Page>
      <SearchInput initialQuery={paramQuery} />
      <div>
        {results.map((publication) => (
          <p key={publication.id}>{JSON.stringify(publication)}</p>
        ))}
      </div>
    </Page>
  );
};

export default ResultsPage;
