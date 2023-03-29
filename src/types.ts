export type Publication = {
  id: string;
  title: string;
  date: string;
  abstract: string;
  authors: string;
  journals: string;
  url: string;
  score: number;
};

export type Publications = Array<Publication>;
