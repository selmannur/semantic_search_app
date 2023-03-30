import SearchInput from "@/components/SearchInput";
import Page from "@/components/Page/Page";
import { Publication, Publications } from "@/types";
import { getQueryValueAsString } from "@/utils/parseRouterQuery";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchSearchResults } from "./utils";
import s from "./Search.module.scss";
import Result from "@/components/Result";
import Preview from "@/components/Preview";

const ResultsPage = () => {
  const router = useRouter();

  const [paramQuery, setParamQuery] = useState(
    getQueryValueAsString(router.query, "q")
  );
  const [results, setResults] = useState<Publications>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [previewResult, setPreviewResult] = useState<Publication | null>(null);

  useEffect(() => {
    const previewResult = results.find((r) => r.id === hoveredId) || null;
    setPreviewResult(previewResult);
  }, [results, hoveredId]);

  useEffect(() => {
    setParamQuery(getQueryValueAsString(router.query, "q"));
  }, [router.query]);

  useEffect(() => {
    if (!paramQuery) {
      setResults([]);
      return;
    }

    fetchSearchResults(paramQuery).then((d) => setResults(d));
  }, [paramQuery]);

  return (
    <Page>
      <div className={s.search}>
        <div className={s.results}>
          <SearchInput initialQuery={paramQuery} />
          <>
            {results.map((p) => (
              <Result
                key={p.id}
                title={p.title}
                id={p.id}
                hoveredId={hoveredId}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              />
            ))}
          </>
        </div>

        <div className={s.preview}>
          <Preview publication={previewResult} />
        </div>
      </div>
    </Page>
  );
};

export default ResultsPage;
