import React from "react";
import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>ResearchGate Semantic Search</title>
      <meta name="description" content="ResearchGate Semantic Search" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/** TODO: Get a RG favicon that will go to `public/favicon.ico`?
       * <link rel="icon" href="/favicon.ico" />
       **/}
    </NextHead>
  );
};

export default Head;
