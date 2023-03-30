import React from "react";
import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>ResearchGate Semantic Search</title>
      <meta name="description" content="ResearchGate Semantic Search" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </NextHead>
  );
};

export default Head;
