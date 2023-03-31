import React, { FC } from "react";
import s from "./Preview.module.scss";
import { Publication } from "@/types";
import { parsePublicationDate } from "@/utils/publication";
import Badge from "../Badge/Badge";
import Image from "next/image";
import authorsIcon from "../../assets/authors.svg";
import { isArray, isNumber } from "lodash";
import ExternalLink from "../ExternalLink";

interface Props {
  publication: Publication | null;
}
const Preview: FC<Props> = ({ publication }) => {
  if (!publication) return null;

  const {
    publicationUid,
    title,
    type,
    abstract,
    date,
    journal,
    authors,
    reads,
    citations,
    score,
  } = publication;

  return (
    <div className={s.preview}>
      <div className={s.meta}>
        <div>
          {type && (
            <div className={s.badge}>
              <Badge text={type} type="badge" />
            </div>
          )}
          {date && <p>{parsePublicationDate(date)}</p>}
        </div>
        <div>{score && <Badge text={`Score ${score}`} type="pin" />}</div>
      </div>

      {journal && <p>{journal}</p>}

      <h1 className={s.title}>{title}</h1>

      <p>{abstract}</p>

      {authors && (
        <div className={s.authors}>
          <Image src={authorsIcon} alt="authors icon" />
          <p>{isArray(authors) ? authors.join(", ") : authors}</p>
        </div>
      )}

      {(reads || citations) && (
        <p className={s.stats}>
          {isNumber(reads) && <span>{reads} Reads</span>}
          {isNumber(reads) && <span className={s.statSeperator}>·</span>}
          {isNumber(citations) && <span>{citations} Citation</span>}
        </p>
      )}

      <div className={s.link}>
        <ExternalLink
          text="Go to publication page"
          href={`https://www.researchgate.net/publication/${publicationUid}`}
        />
      </div>
    </div>
  );
};

export default Preview;
