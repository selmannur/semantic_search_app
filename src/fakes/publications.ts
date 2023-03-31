import { SearchResponse } from "@/pages/api/search";
import { Publication } from "../types";
import { faker } from "@faker-js/faker";
import { sample } from "lodash";

const generateAuthors = () => {
  const numberOfAuthors = Math.round(Math.random() * 5);
  const authors = [...Array(numberOfAuthors)]
    .map(() => faker.name.fullName())
    .join(", ");
  return authors;
};

export const generatePublication = (): Publication => ({
  publicationUid: faker.datatype.uuid(),
  type: sample(["Book", "Article", "Review"]),
  title: faker.commerce.productName(),
  abstract: faker.lorem.paragraphs(),
  authors: generateAuthors(),
  journal: faker.company.name(),
  date: faker.datatype.datetime().toISOString(),
  score: Math.round(Math.random() * 100),
  reads: Math.round(Math.random() * 300),
  citations: Math.round(Math.random() * 80),
});

export const generatePublications = (number?: number) => {
  if (!number) {
    number = Math.round(Math.random() * 15);
  }
  return [...Array(number)].map(() => generatePublication());
};

export const generateSearchResponse = (query: string): SearchResponse => {
  const publications = generatePublications();
  return {
    query: { query },
    items: publications,
    n_items: publications.length,
  };
};
