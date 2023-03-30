export type Publication = {
  publicationUid: string;
  title: string;
  date: string;
  type: string;
  abstract: string;
  authors?: string;
  journal?: string;
  score: number;
};

export type Publications = Array<Publication>;
