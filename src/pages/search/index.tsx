import SearchInput from "@/components/SearchInput";
import Page from "@/components/Page/Page";
import { Publication } from "@/types";
import { getQueryValueAsString } from "@/utils/parseRouterQuery";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchSearchResults } from "./utils";
import s from "./Search.module.scss";
import Result from "@/components/Result";
import Preview from "@/components/Preview";
import { isEmpty } from "lodash";
import NoResults from "@/components/NoResults";
import DateFilter from "@/components/DateFilter";

const ResultsPage = () => {
  const router = useRouter();

  const [paramQuery, setParamQuery] = useState(
    getQueryValueAsString(router.query, "q")
  );
  const [paramPublishedAfter, setParamPublishedAfter] = useState(
    getQueryValueAsString(router.query, "published_after")
  );
  const [total, setTotal] = useState<number>(0) 
  const [results, setResults] = useState<Publication[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [previewResult, setPreviewResult] = useState<Publication | null>(null);
  const noResults = paramQuery && isEmpty(results);

  useEffect(() => {
    if (isEmpty(results)) {
      setHoveredId(null);
      setPreviewResult(null);
      return;
    }

    const previewResult = results.find((r) => r.publicationUid === hoveredId);
    if (previewResult) {
      setPreviewResult(previewResult);
    } else {
      setHoveredId(results[0].publicationUid);
    }
  }, [results, hoveredId]);

  useEffect(() => {
    setParamQuery(getQueryValueAsString(router.query, "q"));
    setParamPublishedAfter(
      getQueryValueAsString(router.query, "published_after")
    );
  }, [router.query]);

  useEffect(() => {
    if (!paramQuery) {
      setTotal(0)
      setResults([]);
      return;
    }

    fetchSearchResults({
      query: paramQuery,
      publishedAfter: paramPublishedAfter || "",
    }).then((data) => {
      console.log("fetched data: ", data);
      setTotal(data.n_items)
      setResults(data.items || []);
    });
  }, [paramQuery, paramPublishedAfter]);

  return (
    <Page>
      <div className={s.search}>
        <div className={s.column}>
          <SearchInput initialQuery={paramQuery} />
          <div className={s.filters}>
            <p>About {total} items</p>
            <DateFilter />
          </div>
          {noResults ? (
            <div className={s.noResults}>
              <NoResults />
            </div>
          ) : (
            results.map((p) => (
              <Result
                key={p.publicationUid}
                publication={p}
                hoveredId={hoveredId}
                onMouseEnter={() => setHoveredId(p.publicationUid)}
              />
            ))
          )}
        </div>

        <div
          className={s.column}
          style={{
            backgroundColor: Boolean(previewResult) ? "white" : "transparent",
          }}
        >
          {previewResult && (
            <div className={s.preview}>
              <Preview publication={previewResult} />
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};

export default ResultsPage;
