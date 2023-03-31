import React from "react";
import s from "./NoResults.module.scss";

const NoResults = () => {
  return (
    <>
      <h1 className={s.title}>
        Sorry, we couldn’t find any results for this search.
      </h1>
      <p>
        We are currently searching among 10,000 publications from live science.
        It could be that the subject of your search is not represented in these
        documents. Try searching for a different subject.
      </p>
    </>
  );
};

export default NoResults;
