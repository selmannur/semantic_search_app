export type Publication = {
  publicationUid: string;
  title: string;
  date: string;
  type?: string;
  abstract: string;
  authors?: string | string[];
  journal?: string;
  reads?: number;
  citations?: number;
  score: number;
};

export type Publications = Array<Publication>;
