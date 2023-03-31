import React, { FC } from "react";
import s from "./Preview.module.scss";
import { Publication } from "@/types";
import { parsePublicationDate } from "@/utils/publication";
import Badge from "../Badge/Badge";
import Image from "next/image";
import authorsIcon from "../../assets/authors.svg";
import { isArray, isNumber } from "lodash";
import Button from "../Button/Button";
import Pin from "../Pin";

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
      {score && (
        <div className={s.pinLine}>
          <Pin>{score}</Pin>
        </div>
      )}

      <div className={s.meta}>
        {type && <Badge text={type} classes={s.badge} />}
        {date && <p>{parsePublicationDate(date)}</p>}
        {journal && <p>{journal}</p>}
      </div>

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

      <Button
        classes={s.button}
        onClick={() =>
          window.open(
            `https://www.researchgate.net/publication/${publicationUid}`
          )
        }
      >
        See publication page
      </Button>
    </div>
  );
};

export default Preview;
