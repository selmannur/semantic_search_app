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

const ResultsPage = () => {
  const router = useRouter();

  const [paramQuery, setParamQuery] = useState(
    getQueryValueAsString(router.query, "q")
  );
  const [results, setResults] = useState<Publication[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [previewResult, setPreviewResult] = useState<Publication | null>(null);

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
  }, [router.query]);

  useEffect(() => {
    if (!paramQuery) {
      setResults([]);
      return;
    }

    fetchSearchResults(paramQuery).then((data) => {
      console.log("fetched data: ", data);
      setResults(data.items || []);
    });
  }, [paramQuery]);

  return (
    <Page>
      <div className={s.search}>
        <div className={s.leftColumn}>
          <div className={s.input}>
            <SearchInput initialQuery={paramQuery} />
          </div>
          <div className={s.results}>
            {results.map((p) => (
              <Result
                key={p.publicationUid}
                title={p.title}
                publicationUid={p.publicationUid}
                hoveredId={hoveredId}
                onMouseEnter={() => setHoveredId(p.publicationUid)}
              />
            ))}
          </div>
        </div>

        <div className={s.rightColumn}>
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
