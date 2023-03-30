import { Publication } from "../types";
import { faker } from "@faker-js/faker";

const generateAuthors = () => {
  const numberOfAuthors = Math.round(Math.random() * 5);
  const authors = [...Array(numberOfAuthors)]
    .map(() => faker.internet.userName())
    .join(", ");
  return authors;
};

const generateJournals = () => {
  const numberOfJournals = Math.round(Math.random() * 3);
  const journals = [...Array(numberOfJournals)]
    .map(() => faker.company.name())
    .join(", ");
  return journals;
};

export const generatePublication = (): Publication => ({
  publicationUid: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  abstract: faker.commerce.productDescription(),
  authors: generateAuthors(),
  journals: generateJournals(),
  date: faker.datatype.datetime().toISOString(),
  url: faker.internet.url(),
  score: Math.round(Math.random() * 100),
});

export const generatePublications = (number?: number) => {
  if (!number) {
    number = Math.round(Math.random() * 15);
  }
  return [...Array(number)].map(() => generatePublication());
};
